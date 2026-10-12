/* Биография / CV. Данные взяты из CV. Редактируйте здесь, отдельно для ru / en / de. */
(() => {
  const SKX = ["Python, Django, Swift, SwiftUI, Kotlin, Jetpack Compose, C#, .NET, Avalonia UI, HTML, CSS, JavaScript, PHP, WordPress","PostgreSQL, SQL, SQLite3","PyTest, unittest, Selenium, XPath, Postman, REST, Jira, Xray, Scrum, ISO 9126, IEEE/IEC 12207","OWASP, Burp Suite, InsightAppSec, Netsparker, OSINT, Penetration Testing, CSRF, XSS, XXE","Docker, Git, GitHub, GitHub Actions, Jenkins, CI/CD, Linux, VS Code","SSO, LDAP, DSFinV-K"];
  const sk = h => SKX.map((x, i) => ({h: h[i], x}));
  const TR = ["2024 — Phishing Emails: Think Before You Act","2022 — Google Ads Search Certification","2021 — Certification for Google Ads Display Network","2021 — Software Testing: Preparation for ISTQB Foundation Certification","2021 — Python Programming","2021 — Internship in Python at PLANTA Project Management Systems GmbH","2020 — Web development intensive","2020 — What place do algorithms take in a developer's life","2020 — Getting Started with JavaScript (intensive)","2020 — JavaScript for Beginners","2019 — International Logistics: Cargo Securing & Transport Safety for Containers"];
  const EDU = "Ministry of Culture of the Russian Federation Film School";
  const B = {
ru:{
"bi.title":"Igor Engler — IT-специалист и разработчик ПО","bi.desc":"Igor Engler: IT-специалист — разработка ПО, продуктовое мышление и бизнес-ориентированные решения. Биография, навыки и проекты.","bi.name":"Igor Engler","bi.alt":"Портрет Igor Engler",
"bi.role":"IT-специалист · Разработка ПО · Продуктовое мышление · Бизнес-ориентированные решения",
"bi.intro":"Я объединяю техническую экспертизу, продуктовый подход и понимание бизнес-задач. Для меня разработка начинается не с написания кода, а с понимания проблемы, которую необходимо решить. Я стремлюсь создавать решения, которые технически надёжны, полезны пользователям и имеют практическую ценность для бизнеса.",
"bi.h.about":"О себе","bi.about":"Я соединяю разработку программного обеспечения, контроль качества и продуктовый взгляд на задачи. Сейчас работаю в области автоматизации тестирования (ParentPay Group, с января 2022); до этого занимался фриланс-разработкой на Python и в вебе. Живу в Баден-Бадене. Языки: русский, немецкий, английский, французский.",
"bi.h.think":"Как я мыслю","bi.think":[
{h:"Понимаю бизнес",d:"Я рассматриваю технические задачи в контексте бизнес-целей, потребностей пользователей, рыночной ситуации и доступных ресурсов. Мне важно понимать, какую ценность должно создавать решение и по каким критериям оценивать результат."},
{h:"Думаю как создатель продукта",d:"Я учитываю весь путь от идеи до работающего продукта: выявление проблемы, формирование требований, определение приоритетов, выбор подхода к реализации, тестирование и дальнейшее развитие."},
{h:"Ориентируюсь на результат",d:"Я подхожу к сложным задачам системно: разбираю их на конкретные этапы, выявляю ограничения, оцениваю риски и ищу практические способы достижения поставленных целей."}],
"bi.h.process":"От задачи к результату","bi.process":[
{h:"Понять",d:"Понять бизнес-контекст, потребности пользователей и исходную проблему."},
{h:"Определить",d:"Определить цель, требования, ограничения и критерии успеха."},
{h:"Приоритизировать",d:"Выбрать наиболее важные задачи с учётом ценности, затрат и рисков."},
{h:"Реализовать и проверить",d:"Реализовать решение и убедиться, что оно действительно работает."},
{h:"Улучшить",d:"Оценить результат, получить обратную связь и определить следующие шаги."}],
"bi.h.tech":"Технологии должны решать реальные задачи","bi.tech":[
{h:"Разработка и ценность продукта",d:"Программирование — это инструмент для создания практической пользы, а не самоцель. Я выбираю технологии под задачу, а не наоборот."},
{h:"QA и снижение рисков",d:"Контроль качества снижает риски для пользователей и бизнеса: меньше сбоев, дефектов и потери доверия к продукту."},
{h:"Автоматизация и эффективность",d:"Автоматизация повторяющихся проверок и операций экономит время команды и снижает долю человеческих ошибок."},
{h:"Анализ требований и определённость",d:"Прояснение требований сокращает неопределённость и уменьшает количество дорогих переделок на поздних этапах."},
{h:"Технические решения и поддерживаемость",d:"Осознанные технические решения обеспечивают долгосрочную поддерживаемость и возможность развивать продукт."}],
"bi.tech.note":"Я не обещаю конкретного финансового эффекта без подтверждённых данных.",
"bi.h.market":"Понимание рынка","bi.market":["Я понимаю, что успешный продукт должен учитывать не только техническую осуществимость, но и потребности целевой аудитории, конкурентную среду, ограничения бюджета, стоимость сопровождения и скорость выхода на рынок. Я стремлюсь принимать решения с учётом реальных условий, проверять предположения и выбирать обоснованные решения вместо погони за модными технологиями."],
"bi.h.focus":"Специализация","bi.focus":["Разработка приложений для iOS, Android и Windows","Веб-разработка (Django, PostgreSQL)","Разработка на Python: боты и инструменты","Автоматизация тестирования и тестирование API","Анализ безопасности веб-приложений","DevOps и CI/CD"],
"bi.h.exp":"Опыт работы","bi.exp":[
{h:"ParentPay Group — QA (автоматизация)",d:"01/2022 – по настоящее время",k:["Разработка автоматизированных тестов на PyTest и Selenium, тестирование REST API","Функциональное, интеграционное, регрессионное и нагрузочное тестирование","Проверки безопасности веб-приложений (CSRF, XSS, XXE)","Предложения по улучшению процесса тестирования"]},
{h:"ITBad — фрилансер",d:"08/2018 – 10/2021",k:["Разработка iOS-приложения PDFSort (Swift, SwiftUI)","Разработка Telegram-ботов на Python","Разработка веб-сайтов"]},
{h:"Cepheid — фрилансер",d:"05/2021 – 08/2021",k:["Проект: инструмент анализа лог-файлов (Python)","Разработка программы и базы данных (SQLite3)"]},
{h:"Instagram-проект — фрилансер",d:"01/2021 – 04/2021",k:["Разработка инструмента автоматизации для Instagram (Python)"]}],
"bi.h.proj":"Проекты как доказательство подхода",
"bi.l.problem":"Проблема","bi.l.audience":"Для кого","bi.l.decisions":"Решения при разработке","bi.l.quality":"Качество и надёжность","bi.l.result":"Результат","bi.tba":"к заполнению",
"bi.proj":[
{h:"PDFSort — органайзер PDF (iOS, Android, Windows)",x:"Swift · SwiftUI · Kotlin · C#/.NET",
problem:"Сотни PDF-файлов разбросаны по устройству без порядка: нужный документ сложно найти.",
audience:"Пользователи iPhone, iPad, Android и Windows, которым нужно упорядочить личные и рабочие документы.",
decisions:"Единая продуктовая логика на трёх платформах; локальная классификация по ключевым словам; опциональные AI-провайдеры (OpenAI, Google Gemini, OpenRouter); локальное хранение по умолчанию.",
quality:"Документы с низкой уверенностью или паролем помечаются для ручной проверки; поиск дубликатов по SHA-256; приватность по дизайну — без рекламы и трекинга.",
result:"Реализовано: 9 категорий и ~55 подкатегорий, полнотекстовый поиск с OCR, библиотека MyPDF, iCloud-синхронизация (iOS).",
k:["Умный органайзер PDF: автоматическая классификация по 9 категориям и подкатегориям","Приложения для iOS/iPadOS (Swift, SwiftUI), Android (Kotlin, Jetpack Compose) и Windows (C#/.NET 8, Avalonia UI)","Локальный анализ по ключевым словам; опционально AI-провайдеры (OpenAI, Google Gemini, OpenRouter)","Полнотекстовый поиск по имени файла и содержимому с OCR для скан-копий","Документы с низкой уверенностью или паролем помечаются для проверки; встроенный просмотр и экспорт","Синхронизация через iCloud (iOS), без рекламы и трекинга"]},
{h:"Разработка сайта tktaurus.ru",x:"Web",problem:"Создание сайта для бизнеса.",audience:"",decisions:"",quality:"",result:"Сайт опубликован: https://tktaurus.ru/",k:["Разработка сайта https://tktaurus.ru/"]},
{h:"Разработка веб-приложения",x:"Django · PostgreSQL",problem:"",audience:"",decisions:"Backend на Python (Django), база данных PostgreSQL, frontend на HTML, CSS и JavaScript.",quality:"",result:"",k:["Проектирование и реализация веб-платформы","Backend на Python (Django)","Интеграция базы данных PostgreSQL","Frontend-компоненты (HTML, CSS, JavaScript)"]},
{h:"Разработка Telegram-ботов",x:"Python · API",problem:"Автоматизация рутинных задач пользователей в Telegram.",audience:"",decisions:"",quality:"",result:"",k:["Автоматизированные приложения на Python","Обработка пользовательских данных и работа с API","Структурирование логики и потоков данных"]},
{h:"Инструмент анализа лог-файлов",x:"Python · SQLite",problem:"Анализ больших объёмов лог-файлов.",audience:"",decisions:"Программа на Python с базой данных SQLite3.",quality:"",result:"",k:["Инструмент для анализа лог-файлов","Структура базы данных (SQLite)","Обработка и анализ больших объёмов данных"]},
{h:"Автоматизация тестирования (текущая работа)",x:"PyTest · Selenium · REST · CI/CD",problem:"Повышение надёжности ПО через автоматизированные проверки.",audience:"",decisions:"Автотесты на PyTest и Selenium, тестирование REST API, интеграция в CI/CD.",quality:"Функциональное, интеграционное, регрессионное и нагрузочное тестирование; проверки безопасности (CSRF, XSS, XXE).",result:"",k:["Автотесты на PyTest и Selenium","Тестирование REST API","Интеграция в процессы CI/CD"]},
{h:"Анализ безопасности веб-приложений",x:"OWASP · Burp Suite · CSRF · XSS · XXE",problem:"Поиск и устранение уязвимостей веб-приложений.",audience:"",decisions:"Применение рекомендаций OWASP, инструменты типа Burp Suite.",quality:"Выявление уязвимостей CSRF, XSS, XXE.",result:"",k:["Выявление уязвимостей (CSRF, XSS, XXE)","Применение рекомендаций OWASP","Использование инструментов, таких как Burp Suite"]},
{h:"DevOps и развёртывание",x:"Docker · GitHub Actions · Jenkins",problem:"",audience:"",decisions:"Контейнеризация с Docker, CI/CD-конвейеры (GitHub Actions, Jenkins).",quality:"",result:"",k:["Контейнеризация с Docker","Настройка CI/CD-конвейеров (GitHub Actions, Jenkins)","Развёртывание приложений"]}],
"bi.h.skills":"Технические навыки","bi.skills":sk(["Программирование и веб","Базы данных","Тестирование и QA","Безопасность","DevOps и инструменты","Прочее"]),
"bi.h.edu":"Образование","bi.edu":[{h:EDU,d:"IT-специалист, 2008–2012"}],
"bi.h.cert":"Сертификаты и курсы","bi.cert":TR,"bi.h.lang":"Языки","bi.langs":"Русский, немецкий, английский, французский",
"bi.h.links":"Ссылки","bi.cv":"Скачать CV (PDF)","bi.li":"LinkedIn","bi.nolinks":"Ссылка на LinkedIn будет добавлена."
},

en:{
"bi.title":"Igor Engler — IT Specialist & Software Developer","bi.desc":"Igor Engler: IT specialist — software development, product thinking and business-oriented solutions. Biography, skills and projects.","bi.name":"Igor Engler","bi.alt":"Portrait of Igor Engler",
"bi.role":"IT Specialist · Software Development · Product Thinking · Business-Oriented Solutions",
"bi.intro":"I combine technical expertise, a product mindset and an understanding of business goals. For me, development starts not with writing code but with understanding the problem that needs to be solved. I aim to build solutions that are technically sound, useful to users and of practical value to the business.",
"bi.h.about":"About me","bi.about":"I bring together software development, quality assurance and a product perspective on tasks. I currently work in test automation (ParentPay Group, since January 2022); before that I worked as a freelance developer in Python and web development. I live in Baden-Baden. Languages: Russian, German, English, French.",
"bi.h.think":"How I think","bi.think":[
{h:"I understand the business",d:"I look at technical tasks in the context of business goals, user needs, market conditions and available resources. It matters to me what value a solution should create and by what criteria its results are measured."},
{h:"I think like a product creator",d:"I consider the whole path from idea to working product: identifying the problem, defining requirements, setting priorities, choosing an implementation approach, testing and further development."},
{h:"I focus on results",d:"I approach complex tasks systematically: breaking them into concrete steps, identifying constraints, assessing risks and looking for practical ways to reach the goal."}],
"bi.h.process":"From task to result","bi.process":[
{h:"Understand",d:"Understand the business context, user needs and the original problem."},
{h:"Define",d:"Define the goal, requirements, constraints and success criteria."},
{h:"Prioritize",d:"Choose the most important tasks based on value, cost and risk."},
{h:"Build & Validate",d:"Implement the solution and verify that it actually works."},
{h:"Improve",d:"Evaluate the result, gather feedback and define the next steps."}],
"bi.h.tech":"Technologies should solve real problems","bi.tech":[
{h:"Development and product value",d:"Coding is a way to create practical value, not an end in itself. I choose technologies to fit the task, not the other way around."},
{h:"QA and risk reduction",d:"Quality assurance lowers risks for users and the business: fewer failures, defects and less loss of trust in the product."},
{h:"Automation and efficiency",d:"Automating repetitive checks and operations saves team time and reduces the share of human error."},
{h:"Requirements analysis and certainty",d:"Clarifying requirements reduces uncertainty and cuts expensive rework in later stages."},
{h:"Technical decisions and maintainability",d:"Well-founded technical decisions support long-term maintainability and the ability to grow the product."}],
"bi.tech.note":"I do not promise specific financial results without confirmed data.",
"bi.h.market":"Understanding the market","bi.market":["I understand that a successful product must account for more than technical feasibility: the needs of the target audience, the competitive environment, budget constraints, maintenance costs and time to market. I aim to make decisions based on real conditions, test assumptions and choose well-founded solutions instead of chasing trendy technologies."],
"bi.h.focus":"Areas of expertise","bi.focus":["App development for iOS, Android and Windows","Web development (Django, PostgreSQL)","Python development: bots and tools","Test automation and API testing","Security analysis of web applications","DevOps and CI/CD"],
"bi.h.exp":"Work experience","bi.exp":[
{h:"ParentPay Group — QA (Automation)",d:"01/2022 – present",k:["Developing automated tests with PyTest and Selenium, REST API testing","Functional, integration, regression and load testing","Security checks of web applications (CSRF, XSS, XXE)","Proposals for improving the testing process"]},
{h:"ITBad — Freelancer",d:"08/2018 – 10/2021",k:["Development of the iOS app PDFSort (Swift, SwiftUI)","Development of Telegram bots in Python","Website development"]},
{h:"Cepheid — Freelancer",d:"05/2021 – 08/2021",k:["Project: log file analysis tool (Python)","Program and database development (SQLite3)"]},
{h:"Instagram project — Freelancer",d:"01/2021 – 04/2021",k:["Development of an automation tool for Instagram (Python)"]}],

"bi.h.proj":"Projects as proof of my approach",
"bi.l.problem":"Problem","bi.l.audience":"For whom","bi.l.decisions":"Key decisions","bi.l.quality":"Quality & reliability","bi.l.result":"Result","bi.tba":"to be filled in",
"bi.proj":[
{h:"PDFSort — PDF organizer (iOS, Android, Windows)",x:"Swift · SwiftUI · Kotlin · C#/.NET",
problem:"Hundreds of PDFs scattered around the device with no order: it is hard to find the document you need.",
audience:"Users of iPhone, iPad, Android and Windows who need to organize personal and work documents.",
decisions:"One product logic across three platforms; on-device keyword classification; optional AI providers (OpenAI, Google Gemini, OpenRouter); local storage by default.",
quality:"Low-confidence and password-protected documents are flagged for manual review; SHA-256 duplicate detection; privacy by design — no ads, no tracking.",
result:"Delivered: 9 categories and about 55 subcategories, full-text search with OCR, MyPDF library, iCloud sync (iOS).",
k:["Smart PDF organizer: automatic classification into 9 categories and subcategories","Apps for iOS/iPadOS (Swift, SwiftUI), Android (Kotlin, Jetpack Compose) and Windows (C#/.NET 8, Avalonia UI)","On-device keyword analysis; optional AI providers (OpenAI, Google Gemini, OpenRouter)","Full-text search by file name and content, with OCR for scanned documents","Low-confidence and password-protected files are flagged for review; built-in viewer and export","iCloud sync (iOS), no ads, no tracking"]},
{h:"Website development: tktaurus.ru",x:"Web",problem:"Building a website for a business.",audience:"",decisions:"",quality:"",result:"The website is published: https://tktaurus.ru/",k:["Development of the website https://tktaurus.ru/"]},
{h:"Web application development",x:"Django · PostgreSQL",problem:"",audience:"",decisions:"Backend with Python (Django), PostgreSQL database, frontend with HTML, CSS and JavaScript.",quality:"",result:"",k:["Design and implementation of a web platform","Backend development with Python (Django)","Integration of a PostgreSQL database","Frontend components (HTML, CSS, JavaScript)"]},
{h:"Telegram bot development",x:"Python · API",problem:"Automating routine tasks for users in Telegram.",audience:"",decisions:"",quality:"",result:"",k:["Automated applications built with Python","Processing user data and API communication","Structuring logic and data flows"]},
{h:"Log file analysis tool",x:"Python · SQLite",problem:"Analysis of large log file volumes.",audience:"",decisions:"A Python program with an SQLite3 database.",quality:"",result:"",k:["A tool for analyzing log files","Database structure (SQLite)","Processing and evaluating large amounts of data"]},
{h:"Test automation (current work)",x:"PyTest · Selenium · REST · CI/CD",problem:"Improving software reliability through automated checks.",audience:"",decisions:"Automated tests with PyTest and Selenium, REST API testing, integration into CI/CD.",quality:"Functional, integration, regression and load testing; security checks (CSRF, XSS, XXE).",result:"",k:["Automated tests with PyTest and Selenium","REST API testing","Integration into CI/CD processes"]},
{h:"Security analysis of web applications",x:"OWASP · Burp Suite · CSRF · XSS · XXE",problem:"Finding and addressing vulnerabilities in web applications.",audience:"",decisions:"Applying OWASP guidelines and tools such as Burp Suite.",quality:"Identification of CSRF, XSS and XXE vulnerabilities.",result:"",k:["Identifying vulnerabilities (CSRF, XSS, XXE)","Applying OWASP guidelines","Using tools such as Burp Suite"]},
{h:"DevOps and deployment",x:"Docker · GitHub Actions · Jenkins",problem:"",audience:"",decisions:"Containerization with Docker, CI/CD pipelines (GitHub Actions, Jenkins).",quality:"",result:"",k:["Containerization with Docker","Setting up CI/CD pipelines (GitHub Actions, Jenkins)","Deploying applications"]}],
"bi.h.skills":"Technical skills","bi.skills":sk(["Programming and web","Databases","Testing and QA","Security","DevOps and tools","Other"]),
"bi.h.edu":"Education","bi.edu":[{h:EDU,d:"IT Specialist, 2008–2012"}],
"bi.h.cert":"Certificates and courses","bi.cert":TR,"bi.h.lang":"Languages","bi.langs":"Russian, German, English, French",
"bi.h.links":"Links","bi.cv":"Download CV (PDF)","bi.li":"LinkedIn","bi.nolinks":"A LinkedIn link will be added."
},

de:{
"bi.title":"Igor Engler — IT-Spezialist und Softwareentwickler","bi.desc":"Igor Engler: IT-Spezialist — Softwareentwicklung, Produktdenken und businessorientierte Lösungen. Biografie, Fähigkeiten und Projekte.","bi.name":"Igor Engler","bi.alt":"Porträt von Igor Engler",
"bi.role":"IT-Spezialist · Softwareentwicklung · Produktdenken · Businessorientierte Lösungen",
"bi.intro":"Ich verbinde technische Expertise, Produktdenken und das Verständnis für geschäftliche Ziele. Für mich beginnt Entwicklung nicht mit dem Schreiben von Code, sondern mit dem Verstehen des Problems, das gelöst werden muss. Ich strebe Lösungen an, die technisch solide, für Nutzer nützlich und für das Unternehmen praktisch wertvoll sind.",
"bi.h.about":"Über mich","bi.about":"Ich verbinde Softwareentwicklung, Qualitätssicherung und eine produktorientierte Sicht auf Aufgaben. Aktuell arbeite ich im Bereich Testautomatisierung (ParentPay Group, seit Januar 2022); zuvor war ich als freiberuflicher Entwickler in Python und Webentwicklung tätig. Ich lebe in Baden-Baden. Sprachen: Russisch, Deutsch, Englisch, Französisch.",
"bi.h.think":"Wie ich denke","bi.think":[
{h:"Ich verstehe das Geschäft",d:"Ich betrachte technische Aufgaben im Kontext von Geschäftszielen, Nutzerbedürfnissen, Marktbedingungen und verfügbaren Ressourcen. Wichtig ist mir, welchen Wert eine Lösung schaffen soll und an welchen Kriterien das Ergebnis gemessen wird."},
{h:"Ich denke wie ein Produktentwickler",d:"Ich berücksichtige den gesamten Weg von der Idee bis zum funktionierenden Produkt: Problemerkennung, Anforderungen, Priorisierung, Umsetzungsansatz, Tests und Weiterentwicklung."},
{h:"Ich bin ergebnisorientiert",d:"Ich gehe komplexe Aufgaben systematisch an: Ich zerlege sie in konkrete Schritte, erkenne Einschränkungen, bewerte Risiken und suche nach praktischen Wegen, um die Ziele zu erreichen."}],
"bi.h.process":"Von der Aufgabe zum Ergebnis","bi.process":[
{h:"Verstehen",d:"Geschäftskontext, Nutzerbedürfnisse und die Ausgangsproblematik verstehen."},
{h:"Definieren",d:"Ziel, Anforderungen, Einschränkungen und Erfolgskriterien definieren."},
{h:"Priorisieren",d:"Die wichtigsten Aufgaben nach Wert, Aufwand und Risiko auswählen."},
{h:"Umsetzen und verifizieren",d:"Die Lösung umsetzen und prüfen, dass sie tatsächlich funktioniert."},
{h:"Verbessern",d:"Ergebnis bewerten, Feedback einholen und nächste Schritte festlegen."}],
"bi.h.tech":"Technologien müssen echte Aufgaben lösen","bi.tech":[
{h:"Entwicklung und Produktwert",d:"Programmieren ist ein Weg, praktischen Nutzen zu schaffen, kein Selbstzweck. Ich wähle Technologien passend zur Aufgabe — nicht umgekehrt."},
{h:"QA und Risikoreduzierung",d:"Qualitätssicherung senkt Risiken für Nutzer und Unternehmen: weniger Ausfälle, Fehler und Vertrauensverlust."},
{h:"Automatisierung und Effizienz",d:"Automatisierung sich wiederholender Prüfungen und Abläufe spart Zeit und reduziert menschliche Fehler."},
{h:"Anforderungsanalyse und Klarheit",d:"Klare Anforderungen verringern Unsicherheit und vermeiden teure Nacharbeiten in späteren Phasen."},
{h:"Technische Entscheidungen und Wartbarkeit",d:"Fundierte technische Entscheidungen sichern die langfristige Wartbarkeit und die Weiterentwicklung des Produkts."}],
"bi.tech.note":"Ohne bestätigte Daten verspreche ich keine konkreten finanziellen Effekte.",
"bi.h.market":"Marktverständnis","bi.market":["Mir ist bewusst, dass ein erfolgreiches Produkt mehr berücksichtigen muss als die technische Machbarkeit: die Bedürfnisse der Zielgruppe, das Wettbewerbsumfeld, Budgetgrenzen, Wartungskosten und die Time-to-Market. Ich treffe Entscheidungen auf der Grundlage realer Bedingungen, überprüfe Annahmen und wähle fundierte Lösungen statt Modetechnologien nachzujagen."],
"bi.h.focus":"Schwerpunkte","bi.focus":["App-Entwicklung für iOS, Android und Windows","Webentwicklung (Django, PostgreSQL)","Python-Entwicklung: Bots und Werkzeuge","Testautomatisierung und API-Tests","Sicherheitsanalyse von Webanwendungen","DevOps und CI/CD"],
"bi.h.exp":"Berufserfahrung","bi.exp":[
{h:"ParentPay Group — QA (Automatisierung)",d:"01/2022 – heute",k:["Entwicklung automatisierter Tests mit PyTest und Selenium, REST-API-Tests","Funktionale, Integrations-, Regressions- und Lasttests","Sicherheitsprüfungen von Webanwendungen (CSRF, XSS, XXE)","Verbesserungsvorschläge für den Testprozess"]},
{h:"ITBad — Freiberufler",d:"08/2018 – 10/2021",k:["Entwicklung der iOS-App PDFSort (Swift, SwiftUI)","Entwicklung von Telegram-Bots mit Python","Entwicklung von Websites"]},
{h:"Cepheid — Freiberufler",d:"05/2021 – 08/2021",k:["Projekt: Tool zur Logfile-Analyse (Python)","Programm- und Datenbankentwicklung (SQLite3)"]},
{h:"Instagram-Projekt — Freiberufler",d:"01/2021 – 04/2021",k:["Entwicklung eines Automatisierungstools für Instagram (Python)"]}],

"bi.h.proj":"Projekte als Beleg meines Ansatzes",
"bi.l.problem":"Problem","bi.l.audience":"Für wen","bi.l.decisions":"Entscheidungen","bi.l.quality":"Qualität und Zuverlässigkeit","bi.l.result":"Ergebnis","bi.tba":"wird ergänzt",
"bi.proj":[
{h:"PDFSort — PDF-Organizer (iOS, Android, Windows)",x:"Swift · SwiftUI · Kotlin · C#/.NET",
problem:"Hunderte PDF-Dateien liegen ungeordnet auf dem Gerät: Das benötigte Dokument ist schwer zu finden.",
audience:"Nutzer von iPhone, iPad, Android und Windows, die persönliche und berufliche Dokumente ordnen möchten.",
decisions:"Eine Produktlogik für drei Plattformen; lokale Stichwortklassifizierung; optionale KI-Anbieter (OpenAI, Google Gemini, OpenRouter); standardmäßig lokale Speicherung.",
quality:"Dokumente mit geringer Konfidenz oder Passwortschutz werden zur manuellen Prüfung markiert; Duplikaterkennung per SHA-256; Privacy by Design — keine Werbung, kein Tracking.",
result:"Umgesetzt: 9 Kategorien und rund 55 Unterkategorien, Volltextsuche mit OCR, MyPDF-Bibliothek, iCloud-Synchronisierung (iOS).",
k:["Intelligenter PDF-Organizer: automatische Einordnung in 9 Kategorien und Unterkategorien","Apps für iOS/iPadOS (Swift, SwiftUI), Android (Kotlin, Jetpack Compose) und Windows (C#/.NET 8, Avalonia UI)","Lokale Stichwortanalyse; optional KI-Anbieter (OpenAI, Google Gemini, OpenRouter)","Volltextsuche nach Dateiname und Inhalt, mit OCR für gescannte Dokumente","Dokumente mit geringer Konfidenz oder Passwortschutz werden zur Prüfung markiert; integrierter Viewer und Export","iCloud-Synchronisierung (iOS), keine Werbung, kein Tracking"]},
{h:"Website-Entwicklung: tktaurus.ru",x:"Web",problem:"Erstellung einer Website für ein Unternehmen.",audience:"",decisions:"",quality:"",result:"Die Website ist veröffentlicht: https://tktaurus.ru/",k:["Entwicklung der Website https://tktaurus.ru/"]},
{h:"Entwicklung einer Webanwendung",x:"Django · PostgreSQL",problem:"",audience:"",decisions:"Backend mit Python (Django), PostgreSQL-Datenbank, Frontend mit HTML, CSS und JavaScript.",quality:"",result:"",k:["Konzeption und Umsetzung einer Webplattform","Entwicklung von Backend-Funktionalitäten mit Python (Django)","Integration einer PostgreSQL-Datenbank","Umsetzung von Frontend-Komponenten (HTML, CSS, JavaScript)"]},
{h:"Entwicklung von Telegram-Bots",x:"Python · API",problem:"Automatisierung von Routineaufgaben für Nutzer in Telegram.",audience:"",decisions:"",quality:"",result:"",k:["Programmierung automatisierter Anwendungen mit Python","Verarbeitung von Benutzerdaten und API-Kommunikation","Strukturierung von Logik und Datenflüssen"]},
{h:"Logfile-Analyse-Tool",x:"Python · SQLite",problem:"Analyse großer Logdatei-Mengen.",audience:"",decisions:"Ein Python-Programm mit SQLite3-Datenbank.",quality:"",result:"",k:["Entwicklung eines Tools zur Analyse von Logdateien","Aufbau einer Datenbankstruktur (SQLite)","Verarbeitung und Auswertung großer Datenmengen"]},
{h:"Testautomatisierung (aktuelle Tätigkeit)",x:"PyTest · Selenium · REST · CI/CD",problem:"Verbesserung der Zuverlässigkeit von Software durch automatisierte Prüfungen.",audience:"",decisions:"Automatisierte Tests mit PyTest und Selenium, REST-API-Tests, Integration in CI/CD.",quality:"Funktionale, Integrations-, Regressions- und Lasttests; Sicherheitsprüfungen (CSRF, XSS, XXE).",result:"",k:["Entwicklung automatisierter Tests mit PyTest und Selenium","Durchführung von API-Tests (REST)","Integration in CI/CD-Prozesse"]},
{h:"Sicherheitsanalyse von Webanwendungen",x:"OWASP · Burp Suite · CSRF · XSS · XXE",problem:"Identifikation und Behebung von Schwachstellen in Webanwendungen.",audience:"",decisions:"Anwendung der OWASP-Richtlinien und Werkzeuge wie Burp Suite.",quality:"Identifikation von Schwachstellen (CSRF, XSS, XXE).",result:"",k:["Identifikation von Schwachstellen (CSRF, XSS, XXE)","Anwendung von OWASP-Richtlinien","Nutzung von Tools wie Burp Suite"]},
{h:"DevOps und Deployment",x:"Docker · GitHub Actions · Jenkins",problem:"",audience:"",decisions:"Containerisierung mit Docker, CI/CD-Pipelines (GitHub Actions, Jenkins).",quality:"",result:"",k:["Containerisierung mit Docker","Einrichtung von CI/CD-Pipelines (GitHub Actions, Jenkins)","Deployment von Anwendungen"]}],
"bi.h.skills":"Technische Fähigkeiten","bi.skills":sk(["Programmierung und Web","Datenbanken","Testen und QA","Sicherheit","DevOps und Werkzeuge","Sonstiges"]),
"bi.h.edu":"Ausbildung","bi.edu":[{h:EDU,d:"IT-Spezialist, 2008–2012"}],
"bi.h.cert":"Zertifikate und Kurse","bi.cert":TR,"bi.h.lang":"Sprachen","bi.langs":"Russisch, Deutsch, Englisch, Französisch",
"bi.h.links":"Links","bi.cv":"Lebenslauf herunterladen (PDF)","bi.li":"LinkedIn","bi.nolinks":"Ein LinkedIn-Link wird ergänzt."
}
};
  for (const l in B) Object.assign(window.I18N[l], B[l]);
})();

