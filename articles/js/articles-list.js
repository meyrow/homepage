document.addEventListener("DOMContentLoaded", function () {
    const articles = [
        { title: "מהי הנהלת חשבונות כפולה לעמותות?", link: "article-double_entry_accounting.html", image: "../images/articles-images/financial-management_1.png", description: "כל מה שעמותה צריכה לדעת על ניהול כספים בשיטה כפולה." },
        { title: "סעיף 46 – מה זה ואיך מקבלים הכרה?", link: "article-46.html", image: "../images/articles-images/financial-management_2.png", description: "המדריך השלם לקבלת סעיף 46 ולהטבות מס לתורמים." },
        { title: "מהי עמותה ולמה להקים אחת?", link: "article-amuta.html", image: "../images/articles-images/financial-management_3.png", description: "ההבדלים בין עמותה לחברה ולמה כדאי לפתוח עמותה." },
        { title: "איך מקימים עמותה? מדריך שלב אחר שלב", link: "article-amuta_2.html", image: "../images/articles-images/financial-management_4.png", description: "כל הצעדים הנדרשים לפתיחת עמותה בצורה מסודרת וחוקית." },
        { title: "חשבונית ירוקה – מהי ולמה היא משתלמת?", link: "article-green_invoice_guide.html", image: "../images/articles-images/financial-management_5.png", description: "יתרונות החשבונית הדיגיטלית לעמותות ולתורמים." },
        { title: "תזרים מזומנים בעמותות – איך לשמור עליו מאוזן?", link: "article-balanced_cash_flow.html", image: "../images/articles-images/financial-management_6.png", description: "טיפים מעשיים לניהול פיננסי נכון ושמירה על יציבות כלכלית." }
    ];

    const articlesContainer = document.getElementById("articles-list");

    articles.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("article-card");

        articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.link}">קרא עוד</a>
        `;

        articlesContainer.appendChild(articleCard);
    });
});
