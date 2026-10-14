/* Google Analytics 4.
   Загружает gtag.js только если в js/config.js задан window.SITE.gaId (G-XXXXXXXXXX).
   Если gaId пуст — аналитика не подключается, сайт работает как обычно. */
(() => {
  "use strict";
  const id = (window.SITE || {}).gaId;
  if (!id || !/^G-[A-Z0-9]+$/i.test(id)) return;

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", id);
})();
