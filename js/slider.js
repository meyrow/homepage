document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".slider-text p");
    let currentIndex = 0;

    if (!texts.length) {
        console.error("No testimonials found");
        return;
    }

    // פונקציה להצגת הטקסט הבא
    function showNextText() {
        // מסיר את המחלקה "active" מהטקסט הנוכחי
        texts[currentIndex].classList.remove("active");

        // עובר לטקסט הבא
        currentIndex = (currentIndex + 1) % texts.length;

        // מוסיף את המחלקה "active" לטקסט הבא
        texts[currentIndex].classList.add("active");
    }

    // הצגת הטקסט הראשון
    texts[currentIndex].classList.add("active");

    // מעבר אוטומטי כל 4 שניות
    setInterval(showNextText, 4000);
});
