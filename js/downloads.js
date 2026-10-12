/* Данные приложений. name/tag/desc/feat/alt: строка или объект {ru,en,de}.
   desc — строка или массив абзацев; feat — массив возможностей.
   kind: 'ios' | 'android' | 'windows' | 'mac' — платформа: какая кнопка
   (App Store / Google Play / Windows) и какие скриншоты показать.
   shots — скриншоты [{src, alt}], отображаются над кнопкой.
   Скриншоты лежат в assets/images/*.jpeg.
   Ссылки принимают внешние https://-адреса и локальные файлы из assets/documents/. */
window.APPS = [
  {name:{ru:'',en:'',de:''}, short:'iOS', kind:'ios', platforms:["iPhone","iPad"], version:"", date:"", releasesUrl:"", storeUrl:"https://apps.apple.com/us/app/pdfsort/id6811080922", downloadUrls:{},
   shots:[{src:'assets/images/1.jpeg',alt:{ru:'PDFSort для iOS: добавление документов',en:'PDFSort for iOS: adding documents',de:'PDFSort für iOS: Dokumente hinzufügen'}},{src:'assets/images/2.jpeg',alt:{ru:'PDFSort для iOS: библиотека документов',en:'PDFSort for iOS: document library',de:'PDFSort für iOS: Dokumentenbibliothek'}},{src:'assets/images/3.jpeg',alt:{ru:'PDFSort для iOS: категории документов',en:'PDFSort for iOS: document categories',de:'PDFSort für iOS: Dokumentenkategorien'}},{src:'assets/images/4.jpeg',alt:{ru:'PDFSort для iOS: настройки',en:'PDFSort for iOS: settings',de:'PDFSort für iOS: Einstellungen'}}],
   tag:{ru:'',en:'',de:''},
   desc:{ru:[
    'Сотни PDF-файлов разбросаны по вашему iPhone или iPad? PDFSort читает содержимое каждого документа и автоматически раскладывает его по правильным категориям и подкатегориям. Выписки из банка, договоры, счета, медицинские документы, чеки, налоговые бумаги — каждый документ попадает точно на своё место.',
    'Добавляйте PDF из встроенного выбора файлов одним касанием. Приложение анализирует имя файла и текст внутри документа, после чего относит его к одной из 9 категорий — Финансы, Юридическое, Медицина, Образование, Личное, Работа, Путешествия, Книги, Страхование — и к подходящей подкатегории. Всё хранится в аккуратной библиотеке MyPDF, готовой к использованию.',
    'Классификация полностью работает на устройстве с помощью умного анализа по ключевым словам: без интернета, облака и аккаунтов. Для ещё большей точности можно по желанию подключить своего AI-провайдера — OpenAI, Google Gemini или OpenRouter — прямо в настройках. Ключи API хранятся в защищённой связке ключей, и ничего не отправляется наружу, пока вы сами этого не настроите.'
   ],en:[
    'Hundreds of PDFs scattered around your iPhone or iPad? PDFSort reads the content of every document and automatically files it into the right category and subcategory. Bank statements, contracts, invoices, medical records, receipts, tax documents — each one ends up exactly where it belongs.',
    'Add PDFs from the built-in file picker with a single tap. PDFSort analyzes the file name and the text inside each document, then classifies it into one of 9 categories — Finance, Legal, Medical, Education, Personal, Work, Travel, Books, Insurance — and the matching subcategory. Everything is stored in one tidy MyPDF library, ready to use.',
    'Classification works fully on-device using smart keyword analysis: no internet connection, no cloud, no accounts. For even greater accuracy you can optionally connect your own AI provider — OpenAI, Google Gemini or OpenRouter — right in Settings. API keys are stored securely in the system keychain and nothing is sent anywhere unless you configure it.'
   ],de:[
    'Hunderte PDF-Dateien verstreut auf Ihrem iPhone oder iPad? PDFSort liest den Inhalt jedes Dokuments und sortiert es automatisch in die richtige Kategorie und Unterkategorie. Kontoauszüge, Verträge, Rechnungen, medizinische Unterlagen, Quittungen, Steuerdokumente — jedes Dokument landet genau dort, wo es hingehört.',
    'Fügen Sie PDFs mit einem Tipp aus der integrierten Dateiauswahl hinzu. PDFSort analysiert den Dateinamen und den Text in jedem Dokument und ordnet es dann einer von 9 Kategorien zu — Finanzen, Rechtliches, Medizin, Bildung, Persönliches, Arbeit, Reisen, Bücher, Versicherung — sowie der passenden Unterkategorie. Alles landet in einer übersichtlichen MyPDF-Bibliothek, bereit zur Nutzung.',
    'Die Klassifizierung läuft vollständig auf dem Gerät per intelligenter Stichwortanalyse: ohne Internet, ohne Cloud, ohne Konten. Für noch mehr Genauigkeit können Sie optional einen eigenen KI-Anbieter anbinden — OpenAI, Google Gemini oder OpenRouter — direkt in den Einstellungen. API-Schlüssel werden sicher im iOS-Schlüsselbund verwahrt, und es wird nichts gesendet, solange Sie es nicht selbst konfigurieren.'
   ]},
   feat:{ru:[
    'Поиск по имени файла или по словам внутри документов; полнотекстовая индексация с OCR для скан-копий',
    'Свои категории и подкатегории с собственными иконками; сортировка по имени, размеру или дате',
    'Свайп для перемещения файлов между категориями; документы с низкой уверенностью или паролем помечаются для проверки',
    'Встроенный просмотр PDF, отправка и экспорт',
    'Синхронизация iCloud: одна библиотека на iPhone и iPad, изменения появляются автоматически',
    'Приватность по дизайну: без рекламы и трекинга, документы остаются на устройстве'
   ],en:[
    'Search by file name or by the words inside documents; full-text indexing with OCR for scanned PDFs',
    'Custom categories and subcategories with your own icons; sort by name, size or date',
    'Swipe to move files between categories; low-confidence and password-protected documents are flagged for review',
    'Built-in PDF viewer, share and export',
    'iCloud sync: the same library on iPhone and iPad, changes appear automatically',
    'Privacy by design: no ads, no tracking, documents stay on your device'
   ],de:[
    'Suche nach Dateiname oder nach Wörtern im Dokument; Volltextindexierung mit OCR für Scans',
    'Eigene Kategorien und Unterkategorien mit eigenen Symbolen; Sortierung nach Name, Größe oder Datum',
    'Wischen zum Verschieben zwischen Kategorien; Dokumente mit geringer Konfidenz oder Passwortschutz werden zur Prüfung markiert',
    'Integrierter PDF-Viewer, Teilen und Export',
    'iCloud-Synchronisierung: dieselbe Bibliothek auf iPhone und iPad, Änderungen erscheinen automatisch',
    'Privacy by Design: keine Werbung, kein Tracking, Dokumente bleiben auf dem Gerät'
   ]}},
  {name:{ru:'',en:'',de:''}, short:'macOS', kind:'mac', platforms:["Mac"], version:"", date:"", releasesUrl:"", storeUrl:"https://apps.apple.com/us/app/pdfsort-pdf-organizer/id6811141753?mt=12", downloadUrls:{},
   shots:[{src:'assets/images/mac1.png',alt:{ru:'PDFSort для macOS: настройки приложения',en:'PDFSort for macOS: app settings',de:'PDFSort für macOS: App-Einstellungen'}},{src:'assets/images/Mac3.png',alt:{ru:'PDFSort для macOS: отсортированные документы',en:'PDFSort for macOS: sorted documents',de:'PDFSort für macOS: sortierte Dokumente'}}],
   tag:{ru:'',en:'',de:''},
   desc:{ru:'Версия PDFSort для macOS автоматически сканирует папки, анализирует PDF-файлы и раскладывает их по категориям и подкатегориям.',en:'The macOS version of PDFSort scans folders, analyzes PDF files and automatically files them into categories and subcategories.',de:'Die macOS-Version von PDFSort scannt Ordner, analysiert PDF-Dateien und sortiert sie automatisch in Kategorien und Unterkategorien ein.'},
   feat:{ru:[],en:[],de:[]}},
  {name:{ru:'',en:'',de:''}, short:'Windows', kind:'windows', platforms:["Windows"], version:"", date:"", releasesUrl:"", storeUrl:"", downloadUrls:{windows:"assets/documents/setup.exe"},
   shots:[{src:'assets/images/windows1.png',alt:{ru:'PDFSort для Windows: библиотека MyPDF',en:'PDFSort for Windows: MyPDF library',de:'PDFSort für Windows: MyPDF-Bibliothek'}},{src:'assets/images/windows2.png',alt:{ru:'PDFSort для Windows: поиск по документам',en:'PDFSort for Windows: document search',de:'PDFSort für Windows: Dokumentensuche'}}],
   tag:{ru:'',en:'',de:''},
   desc:{ru:'Сканирование папки или всего диска (умное сканирование находит PDF по всему компьютеру), локальная классификация по ключевым словам и через AI-провайдеров. Библиотека MyPDF/<Категория>/<Подкатегория> с 9 системными категориями и около 55 подкатегорий, поиск по имени файла и содержимому: полный текст, для скан-копий — OCR.',en:'Scan a folder or the whole disk (smart scanning finds PDFs across your computer), local keyword classification and optional AI providers. A MyPDF/<Category>/<Subcategory> library with 9 system categories and about 55 subcategories, search by file name and content: full text, with OCR fallback for scans.',de:'Ordner oder das ganze Laufwerk scannen (Smart Scan findet PDFs auf dem gesamten Computer), lokale Stichwortklassifizierung und optionale KI-Anbieter. Eine MyPDF/<Kategorie>/<Unterkategorie>-Bibliothek mit 9 Systemkategorien und rund 55 Unterkategorien, Suche nach Dateiname und Inhalt: Volltext, für Scans OCR.'},
   feat:{ru:[
    'Превью карточек PDF: первая страница рендерится встроенно (PdfPig + SkiaSharp), превью при наведении, бейджи источника классификации',
    'Пользовательские категории и подкатегории, перетаскивание файлов на категории',
    'Дедупликация по SHA-256, мониторинг файловой системы, библиотека книг (больше 30 страниц → Техническая)',
    'Тёмная и светлая темы; языки интерфейса: русский, английский, немецкий, испанский'
   ],en:[
    'PDF card previews: the first page is rendered in-app (PdfPig + SkiaSharp), hover previews, classification source badges',
    'Custom categories and subcategories, drag-and-drop files onto categories',
    'SHA-256 duplicate detection, filesystem monitoring, book library (over 30 pages → Technical)',
    'Dark and light themes; UI languages: Russian, English, German, Spanish'
   ],de:[
    'PDF-Kartenvorschau: die erste Seite wird eingebettet gerendert (PdfPig + SkiaSharp), Hover-Vorschau, Badges der Klassifizierungsquelle',
    'Eigene Kategorien und Unterkategorien, Drag-and-drop von Dateien auf Kategorien',
    'Duplikaterkennung per SHA-256, Dateisystemüberwachung, Bücherbibliothek (über 30 Seiten → Technik)',
    'Dunkles und helles Design; Oberflächensprachen: Russisch, Englisch, Deutsch, Spanisch'
   ]}},
  {name:{ru:'',en:'',de:''}, short:'Android', kind:'android', platforms:["Android"], version:"", date:"", releasesUrl:"", storeUrl:"", downloadUrls:{android:""},
   shots:[{src:'assets/images/android1.png',alt:{ru:'PDFSort для Android: добавление PDF-файлов',en:'PDFSort for Android: adding PDF files',de:'PDFSort für Android: PDF-Dateien hinzufügen'}},{src:'assets/images/android2.png',alt:{ru:'PDFSort для Android: библиотека документов',en:'PDFSort for Android: document library',de:'PDFSort für Android: Dokumentenbibliothek'}},{src:'assets/images/android3.png',alt:{ru:'PDFSort для Android: файлы в категории Finance',en:'PDFSort for Android: files in the Finance category',de:'PDFSort für Android: Dateien in der Kategorie Finanzen'}},{src:'assets/images/android4.png',alt:{ru:'PDFSort для Android: настройки',en:'PDFSort for Android: settings',de:'PDFSort für Android: Einstellungen'}}],
   tag:{ru:'',en:'',de:''},
   desc:{ru:'Импорт PDF через системный выбор файлов и меню «Поделиться», локальная классификация по ключевым словам с пометкой для проверки, тёмная, светлая и системная темы. Локальная библиотека вместо iCloud; по желанию подключаются AI-провайдеры.',en:'PDF import via the system file picker and the Share menu, local keyword classification with a review flag, dark, light and system themes. A local library instead of iCloud, with optional AI providers.',de:'PDF-Import über die Systemdateiauswahl und das Teilen-Menü, lokale Stichwortklassifizierung mit Prüfmarkierung, dunkles, helles und System-Design. Lokale Bibliothek statt iCloud; optional können KI-Anbieter angebunden werden.'},
   feat:{ru:[
    'Вкладки «Библиотека», «Добавить» и «Настройки»',
    'Модель AI-провайдеров OpenAI, Google Gemini и OpenRouter на уровне приложения',
    'Подсчёт страниц PDF и основа предпросмотра на PdfRenderer, SHA-256 хеширование',
    'Хранилище JSON/DataStore; локальная библиотека вместо iCloud'
   ],en:[
    'Library, Add and Settings tabs',
    'AI provider model for OpenAI, Gemini and OpenRouter at the app level',
    'PDF page counting and PdfRenderer preview foundation, SHA-256 hashing',
    'JSON/DataStore storage; a local library instead of iCloud'
   ],de:[
    'Tabs „Bibliothek“, „Hinzufügen“ und „Einstellungen“',
    'KI-Anbietermodell für OpenAI, Gemini und OpenRouter auf App-Ebene',
    'PDF-Seitenzählung und PdfRenderer-Vorschau, SHA-256-Hashing',
    'JSON/DataStore-Speicher; lokale Bibliothek statt iCloud'
   ]}}
];
(() => {
  const ok = u => typeof u === "string" && (/^https:\/\//i.test(u) || /^assets\/documents\//i.test(u));
  const mk = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
  const tr = (lang, v) => typeof v === "string" ? v : (v && (v[lang] || v.en)) || "";
  window.pageRender = (lang, t) => {
    const ab = document.getElementById("dl-about");
    if (ab) {
      ab.replaceChildren();
      const p = t("dl.about");
      (Array.isArray(p) ? p : [p]).forEach(x => { if (x) ab.append(mk("p", "", x)); });
    }
    const box = document.getElementById("apps"); if (!box) return; box.replaceChildren();
    window.APPS.forEach(a => {
      const c = mk("article", "card plat " + (a.kind || ""));
      const head = mk("div", "plat-head");
      head.append(mk("span", "plat-badge", a.short || (a.platforms || [])[0] || ""));
      const name = tr(lang, a.name); if (name) head.append(mk("h2", "", name));
      c.append(head);
      const tag = tr(lang, a.tag); if (tag) c.append(mk("p", "tagline", tag));
      /* Галерея скриншотов над кнопкой платформы */
      const shots = Array.isArray(a.shots) ? a.shots : [];
      if (shots.length) {
        const g = mk("div", "shots"); g.setAttribute("role", "group"); g.setAttribute("aria-label", t("dl.shots"));
        shots.forEach(s => {
          const f = mk("figure", "shot");
          const img = mk("img", ""); img.src = s.src || ""; img.alt = tr(lang, s.alt); img.loading = "lazy"; img.decoding = "async";
          f.append(img); g.append(f);
        });
        c.append(g);
      }
      const dl = mk("dl");
      let d = a.date; if (/^\d{4}-\d{2}-\d{2}$/.test(d || "")) d = new Date(d + "T00:00:00").toLocaleDateString(lang);
      const row = (k, v) => { if (v) dl.append(mk("dt", "", t(k)), mk("dd", "", v)); };
      row("dl.version", a.version); row("dl.date", d);
      if (dl.children.length) c.append(dl);
      /* Одна кнопка платформы: App Store / Mac App Store / Google Play / Windows — под галереей */
      const act = mk("div", "actions");
      const showOne = (u, k, cls) => { if (!ok(u)) return false; const l = mk("a", "btn " + cls, t(k)); l.href = u; if (/^assets\/documents\//i.test(u)) l.download = ""; else { l.target = "_blank"; l.rel = "noopener noreferrer"; } act.append(l); return true; };
      const du = a.downloadUrls || {};
      const isIos = a.kind === "ios", isAnd = a.kind === "android", isWin = a.kind === "windows", isMac = a.kind === "mac";
      const shown = (isIos && showOne(a.storeUrl, "dl.store", "")) || (isAnd && showOne(a.storeUrl || du.android, "dl.play", "")) || (isWin && showOne(du.windows, "dl.win", "")) || (isMac && showOne(a.storeUrl, "dl.store", "")) || (isIos && showOne(a.releasesUrl, "dl.release", "")) || (isAnd && showOne(a.releasesUrl, "dl.release", "")) || (isWin && showOne(a.releasesUrl, "dl.release", "")) || (isMac && showOne(a.releasesUrl, "dl.release", ""));
      shown ? c.append(act) : c.append(mk("p", "muted", t("dl.nolinks")));
      box.append(c);
    });
  };
})();
