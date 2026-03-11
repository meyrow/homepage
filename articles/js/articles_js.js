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
