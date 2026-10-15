(() => {
  "use strict";
  const L = ["ru","en","de"], KEY = "site-lang", D = document, H = D.documentElement, page = D.body.dataset.page;
  H.classList.add("js");
  const st = {get(){try{return localStorage.getItem(KEY)}catch(e){return null}}, set(v){try{localStorage.setItem(KEY,v)}catch(e){}}};
  const norm = c => { c = String(c || "").toLowerCase().split(/[-_]/)[0]; return L.includes(c) ? c : null; };
  /* Приоритет: ?lang= (запоминается) > сохранённый выбор > navigator.languages > en */
  function detect() {
    let u = null; try { u = norm(new URLSearchParams(location.search).get("lang")); } catch (e) {}
    if (u) { st.set(u); return u; }
    const s = norm(st.get()); if (s) return s;
    for (const c of (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language])) { const n = norm(c); if (n) return n; }
    return "en";
  }
  let lang = detect();
  const t = k => { const v = (I18N[lang] || {})[k]; if (v !== undefined) return v; console.warn("i18n missing", lang, k); return I18N.en[k] !== undefined ? I18N.en[k] : k; };
  const mk = (tag, cls, txt) => { const e = D.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
  const S = window.SITE || {}, ok = u => typeof u === "string" && /^https:\/\//i.test(u);

  function services() {
    const box = D.getElementById("svc-list"); if (!box) return; box.replaceChildren();
    const order = [8, 1, 2, 4, 5, 6, 7];
    order.forEach((i, pos) => {
      const a = mk("article", "card service-card" + (pos === 0 ? " wide featured" : "")), ul = mk("ul");
      a.dataset.number = String(pos + 1).padStart(2, "0");
      t("s"+i+".k").forEach(x => ul.append(mk("li", "", x)));
      a.append(mk("h2", "", t("s"+i+".t")), mk("p", "", t("s"+i+".d")), mk("h3", "", t("sv.tasks")), ul);
      const x = t("s"+i+".x"); if (x) { const p = mk("p", "tech"); p.append(mk("strong", "", t("sv.tech") + ": "), x); a.append(p); }
      box.append(a);
    });
  }
  function bio() {
    const root = D.getElementById("bio-content"); if (!root) return;
    root.replaceChildren();
    const el = (tag, cls, txt) => mk(tag, cls, txt);

    const hero = el("section", "bio-intro");
    const portrait = el("span", "photo bio-portrait"); portrait.append(el("img"));
    const copy = el("div", "bio-intro-copy");
    copy.append(el("span", "eyebrow", t("bi.role")), el("h1", "", S.name || t("bi.name")), el("p", "lead", t("bi.intro")));
    hero.append(portrait, copy); root.append(hero);

    const contact = el("section", "card contact");
    const contactCopy = el("div");
    contactCopy.append(el("h2", "", t("ct.h")), el("p", "", t("ct.p")));
    const mail = el("p", "contact-mail");
    const mailLink = el("a", "btn contact-btn", S.email || ""); mailLink.setAttribute("data-email", "");
    mail.append(mailLink); contact.append(contactCopy, mail); root.append(contact);
  }
  function extras() {
    D.querySelectorAll("[data-email]").forEach(e => {
      e.replaceChildren();
      if (S.email) {
        if (e.tagName === "A") { e.href = "mailto:" + S.email; e.textContent = S.email; }
        else { const a = mk("a", "", S.email); a.href = "mailto:" + S.email; e.append(a); }
      } else if (e.tagName === "A") { e.hidden = true; }
      else e.append(mk("span", "ph", t("ct.ph")));
    });
    D.querySelectorAll(".photo").forEach(p => {
      const img = p.querySelector("img"), svg = p.querySelector("svg"); if (!img || !S.portrait) return;
      if (img.getAttribute("src") !== S.portrait) img.src = S.portrait;
      img.alt = t("bi.alt"); img.hidden = false; if (svg) svg.hidden = true;
    });
    const n = D.getElementById("bio-name"); if (n) n.textContent = S.name || t("bi.name");
    const cv = D.getElementById("cv"), li = D.getElementById("li"), nl = D.getElementById("nolinks");
    if (cv) { cv.hidden = !S.cv; if (S.cv) cv.href = S.cv; }
    if (li) { li.hidden = !ok(S.linkedin); if (ok(S.linkedin)) li.href = S.linkedin; }
    if (nl) nl.hidden = !!(S.cv || ok(S.linkedin));
  }
  function apply() {
    H.lang = lang;
    D.querySelectorAll("[data-i18n]").forEach(e => { e.textContent = t(e.dataset.i18n); });
    D.querySelectorAll("[data-i18n-attr]").forEach(e => e.dataset.i18nAttr.split(";").forEach(p => { const [a, k] = p.split(":"); e.setAttribute(a, t(k)); }));
    D.querySelectorAll("a[data-page]").forEach(a => { a.href = a.dataset.page + "?lang=" + lang; });
    D.querySelectorAll("[data-cycle]").forEach(b => {
      const n = L[(L.indexOf(lang) + 1) % 3], s = t("lang.label") + ": " + t("lang." + lang) + ". " + t("lang.next") + " " + t("lang." + n);
      b.textContent = lang.toUpperCase(); b.lang = lang; b.setAttribute("aria-label", s); b.title = s;
    });
    if (page === "services") services();
    if (page === "bio") bio();
    extras();
    if (window.pageRender) window.pageRender(lang, t);
  }
  function setLang(l) {
    lang = l; st.set(l);
    try { const u = new URL(location.href); u.searchParams.set("lang", l); history.replaceState(null, "", u); } catch (e) {}
    apply();
    const live = D.getElementById("live"); if (live) live.textContent = t("lang.now") + t("lang." + l);
  }
  D.querySelectorAll("[data-cycle]").forEach(b => b.addEventListener("click", () => setLang(L[(L.indexOf(lang) + 1) % 3])));
  const mb = D.querySelector(".menu-btn"), nav = D.getElementById("nav");
  if (mb && nav) mb.addEventListener("click", () => { const o = nav.classList.toggle("open"); mb.setAttribute("aria-expanded", String(o)); });
  if (page === "home") D.addEventListener("keydown", e => { /* клавиша L — смена языка на главной */
    if ((e.key === "l" || e.key === "L") && !e.ctrlKey && !e.metaKey && !e.altKey) setLang(L[(L.indexOf(lang) + 1) % 3]);
  });
  apply();
})();
