/* Биография / CV. Только используемые на сайте ключи.
   bi.title/bi.desc — мета biography.html; bi.name/bi.alt/bi.role/bi.intro — герой. */
(() => {
  const B = {
ru:{
"bi.title":"Igor Engler — IT-специалист и разработчик ПО","bi.desc":"Igor Engler: IT-специалист — разработка ПО, продуктовое мышление и бизнес-ориентированные решения. Биография, навыки и проекты.","bi.name":"Igor Engler","bi.alt":"Портрет Igor Engler",
"bi.role":"IT-специалист · Разработка ПО · Продуктовое мышление · Бизнес-ориентированные решения",
"bi.intro":"Я объединяю техническую экспертизу, продуктовый подход и понимание бизнес-задач. Для меня разработка начинается не с написания кода, а с понимания проблемы, которую необходимо решить. Я стремлюсь создавать решения, которые технически надёжны, полезны пользователям и имеют практическую ценность для бизнеса."
},

en:{
"bi.title":"Igor Engler — IT Specialist & Software Developer","bi.desc":"Igor Engler: IT specialist — software development, product thinking and business-oriented solutions. Biography, skills and projects.","bi.name":"Igor Engler","bi.alt":"Portrait of Igor Engler",
"bi.role":"IT Specialist · Software Development · Product Thinking · Business-Oriented Solutions",
"bi.intro":"I combine technical expertise, a product mindset and an understanding of business goals. For me, development starts not with writing code but with understanding the problem that needs to be solved. I aim to build solutions that are technically sound, useful to users and of practical value to the business."
},

de:{
"bi.title":"Igor Engler — IT-Spezialist und Softwareentwickler","bi.desc":"Igor Engler: IT-Spezialist — Softwareentwicklung, Produktdenken und businessorientierte Lösungen. Biografie, Fähigkeiten und Projekte.","bi.name":"Igor Engler","bi.alt":"Porträt von Igor Engler",
"bi.role":"IT-Spezialist · Softwareentwicklung · Produktdenken · Businessorientierte Lösungen",
"bi.intro":"Ich verbinde technische Expertise, Produktdenken und das Verständnis für geschäftliche Ziele. Für mich beginnt Entwicklung nicht mit dem Schreiben von Code, sondern mit dem Verstehen des Problems, das gelöst werden muss. Ich strebe Lösungen an, die technisch solide, für Nutzer nützlich und für das Unternehmen praktisch wertvoll sind."
}
  };
  for (const l in B) Object.assign(window.I18N[l], B[l]);
})();
