
document.addEventListener("DOMContentLoaded", function () {
	
    const articles = [
        { title: "מהי הנהלת חשבונות כפולה לעמותות?", link: "article-double_entry_accounting.html" },
		{ title: "דיווח קבלות תרומה לשע״מ", link: "article-API-46.html" },
        { title: "סעיף 46 – מה זה ואיך מקבלים הכרה?", link: "article-46.html" },
        { title: "מהי עמותה ולמה להקים אחת?", link: "article-amuta.html" },
        { title: "איך מקימים עמותה? מדריך שלב אחר שלב", link: "article-amuta_2.html" },
        { title: "חשבונית ירוקה – מהי ולמה היא משתלמת?", link: "article-green_invoice_guide.html" },
        { title: "החזרי מס מתרומות – איך לקבל את הכסף חזרה?", link: "article-hechzer_mas.html" },
        { title: "איך לגייס תרומות לעמותה בצורה אפקטיבית?", link: "article-how_to_raise_donations.html" },
        { title: "החוקים שכל עמותה חייבת להכיר", link: "article-law.html" },
        { title: "החוקים החדשים ב-2025 שמשפיעים על עמותות", link: "article-new_2025_laws.html" },
        { title: "תזרים מזומנים בעמותות – איך לשמור עליו מאוזן?", link: "article-balanced_cash_flow.html" }
    ];

    // קבלת כתובת העמוד הנוכחי
    const currentPage = window.location.pathname.split("/").pop();

    // הסתרת הקישור של העמוד הנוכחי מהסיידבר ומהתפריט הנייד
    // (הקישורים עצמם כתובים ב-HTML לטובת גוגל – JS רק מסתיר את הנוכחי)
    document.querySelectorAll("[data-article]").forEach(function(li) {
        if (li.dataset.article === currentPage) {
            li.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger-menu");
    const mobileOverlay = document.querySelector(".mobile-overlay");
    const closeButton = document.querySelector(".close-overlay");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown");
    const contactLink = document.querySelector(".contact-link"); // בודק שהכפתור קיים

	// פתיחת / סגירת תפריט ההמבורגר בלחיצה על כפתור ההמבורגר
	    if (menuButton) {
	        menuButton.addEventListener("click", function () {
	            mobileOverlay.classList.toggle("open"); // משנה את המצב בין פתוח לסגור
	        });
	    }
    // סגירת תפריט ההמבורגר בלחיצה על כפתור הסגירה
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            mobileOverlay.classList.remove("open");
        });
    }

    // פתיחת / סגירת רשימת המאמרים בלחיצה על "מאמרים"
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener("click", function (event) {
            event.preventDefault(); // מונע מעבר לעמוד
            dropdownMenu.classList.toggle("open");
            event.stopPropagation(); // מונע סגירת התפריט הראשי
        });
    }

    // סגירת התפריט בלחיצה על "צור קשר"
    if (contactLink) {
        contactLink.addEventListener("click", function () {
            mobileOverlay.classList.remove("open");
        });
    }

    // סגירת התפריט הראשי בלחיצה מחוץ אליו, אבל לא כשפותחים מאמרים
    document.addEventListener("click", function (event) {
        if (!mobileOverlay.contains(event.target) && !menuButton.contains(event.target)) {
            mobileOverlay.classList.remove("open");
        }
    });
});

const articleContainer = document.getElementById("article-content");
if (articleContainer) {
    articleContainer.appendChild(someElement);
}

