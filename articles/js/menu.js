document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger-menu");
    const mobileOverlay = document.querySelector(".mobile-overlay");
    const closeButton = document.querySelector(".close-overlay");
    const overlayLinks = document.querySelectorAll(".mobile-overlay a"); // כל הקישורים בתפריט

    if (!menuButton || !mobileOverlay || !closeButton || overlayLinks.length === 0) {
        console.error("❌ אחד האלמנטים של התפריט לא נמצא!");
        return;
    }

    // פתיחת הדפית בלחיצה על תפריט ההמבורגר
    menuButton.addEventListener("click", function () {
        mobileOverlay.classList.add("open");
    });

    // סגירת הדפית בלחיצה על כפתור הסגירה
    closeButton.addEventListener("click", function () {
        mobileOverlay.classList.remove("open");
    });

    // סגירת הדפית כאשר לוחצים על אחד מהקישורים שבתוכה
    overlayLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileOverlay.classList.remove("open");
        });
    });
});
