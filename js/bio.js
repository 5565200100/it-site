/* Биография / CV. Только используемые на сайте ключи.
   bi.title/bi.desc — мета biography.html; bi.name/bi.alt/bi.role/bi.intro — герой;
   bi.h.tech/bi.tech — блок «Принципы» на services.html (вывод: main.js → services()). */
(() => {
  const B = {
ru:{
"bi.title":"Igor Engler — IT-специалист и разработчик ПО","bi.desc":"Igor Engler: IT-специалист — разработка ПО, продуктовое мышление и бизнес-ориентированные решения. Биография, навыки и проекты.","bi.name":"Igor Engler","bi.alt":"Портрет Igor Engler",
"bi.role":"IT-специалист · Разработка ПО · Продуктовое мышление · Бизнес-ориентированные решения",
"bi.intro":"Я объединяю техническую экспертизу, продуктовый подход и понимание бизнес-задач. Для меня разработка начинается не с написания кода, а с понимания проблемы, которую необходимо решить. Я стремлюсь создавать решения, которые технически надёжны, полезны пользователям и имеют практическую ценность для бизнеса.",
"bi.h.tech":"Технологии должны решать реальные задачи","bi.tech":[
{h:"Разработка и ценность продукта",d:"Программирование — это инструмент для создания практической пользы, а не самоцель. Я выбираю технологии под задачу, а не наоборот."},
{h:"QA и снижение рисков",d:"Контроль качества снижает риски для пользователей и бизнеса: меньше сбоев, дефектов и потери доверия к продукту."},
{h:"Автоматизация и эффективность",d:"Автоматизация повторяющихся проверок и операций экономит время команды и снижает долю человеческих ошибок."},
{h:"Анализ требований и определённость",d:"Прояснение требований сокращает неопределённость и уменьшает количество дорогих переделок на поздних этапах."},
{h:"Технические решения и поддерживаемость",d:"Осознанные технические решения обеспечивают долгосрочную поддерживаемость и возможность развивать продукт."}]
},

en:{
"bi.title":"Igor Engler — IT Specialist & Software Developer","bi.desc":"Igor Engler: IT specialist — software development, product thinking and business-oriented solutions. Biography, skills and projects.","bi.name":"Igor Engler","bi.alt":"Portrait of Igor Engler",
"bi.role":"IT Specialist · Software Development · Product Thinking · Business-Oriented Solutions",
"bi.intro":"I combine technical expertise, a product mindset and an understanding of business goals. For me, development starts not with writing code but with understanding the problem that needs to be solved. I aim to build solutions that are technically sound, useful to users and of practical value to the business.",
"bi.h.tech":"Technologies should solve real problems","bi.tech":[
{h:"Development and product value",d:"Coding is a way to create practical value, not an end in itself. I choose technologies to fit the task, not the other way around."},
{h:"QA and risk reduction",d:"Quality assurance lowers risks for users and the business: fewer failures, defects and less loss of trust in the product."},
{h:"Automation and efficiency",d:"Automating repetitive checks and operations saves team time and reduces the share of human error."},
{h:"Requirements analysis and certainty",d:"Clarifying requirements reduces uncertainty and cuts expensive rework in later stages."},
{h:"Technical decisions and maintainability",d:"Well-founded technical decisions support long-term maintainability and the ability to grow the product."}]
},

de:{
"bi.title":"Igor Engler — IT-Spezialist und Softwareentwickler","bi.desc":"Igor Engler: IT-Spezialist — Softwareentwicklung, Produktdenken und businessorientierte Lösungen. Biografie, Fähigkeiten und Projekte.","bi.name":"Igor Engler","bi.alt":"Porträt von Igor Engler",
"bi.role":"IT-Spezialist · Softwareentwicklung · Produktdenken · Businessorientierte Lösungen",
"bi.intro":"Ich verbinde technische Expertise, Produktdenken und das Verständnis für geschäftliche Ziele. Für mich beginnt Entwicklung nicht mit dem Schreiben von Code, sondern mit dem Verstehen des Problems, das gelöst werden muss. Ich strebe Lösungen an, die technisch solide, für Nutzer nützlich und für das Unternehmen praktisch wertvoll sind.",
"bi.h.tech":"Technologien müssen echte Aufgaben lösen","bi.tech":[
{h:"Entwicklung und Produktwert",d:"Programmieren ist ein Weg, praktischen Nutzen zu schaffen, kein Selbstzweck. Ich wähle Technologien passend zur Aufgabe — nicht umgekehrt."},
{h:"QA und Risikoreduzierung",d:"Qualitätssicherung senkt Risiken für Nutzer und Unternehmen: weniger Ausfälle, Fehler und Vertrauensverlust."},
{h:"Automatisierung und Effizienz",d:"Automatisierung sich wiederholender Prüfungen und Abläufe spart Zeit und reduziert menschliche Fehler."},
{h:"Anforderungsanalyse und Klarheit",d:"Klare Anforderungen verringern Unsicherheit und vermeiden teure Nacharbeiten in späteren Phasen."},
{h:"Technische Entscheidungen und Wartbarkeit",d:"Fundierte technische Entscheidungen sichern die langfristige Wartbarkeit und die Weiterentwicklung des Produkts."}]
}
  };
  for (const l in B) Object.assign(window.I18N[l], B[l]);
})();
