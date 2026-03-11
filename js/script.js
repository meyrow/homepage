document.addEventListener('DOMContentLoaded', function () {
    // שאלות נפוצות (FAQ)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
        const questionButton = item.querySelector('.faq-question');
        questionButton.addEventListener('click', () => {
            faqItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains('open')) {
                    otherItem.classList.remove('open');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('open')) {
                item.classList.remove('open');
                answer.style.maxHeight = null;
            } else {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // בדיקה אם טופס ווטסאפ קיים
    const whatsappForm = document.getElementById("whatsappForm");
    if (whatsappForm) {
        whatsappForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const question = document.getElementById("question").value;
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;

            const whatsappNumber = "972556642655";
            const message = `שלום, שמי ${name}.\n\nיש לי שאלה: ${question}\n\nמספר הטלפון שלי: ${phone}`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, "_blank");
        });
    } else {
        console.error("⚠️ טופס WhatsApp לא נמצא! ודא שקיים אלמנט עם id='whatsappForm'.");
    }

    // סליידר המלצות (Testimonials Auto-Slider)
    const testimonials = document.querySelectorAll(".slider-text .testimonial");
    let currentIndex = 0;
    if (testimonials.length > 0) {
        testimonials[currentIndex].classList.add("active");
        function showNextTestimonial() {
            testimonials[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % testimonials.length;
            testimonials[currentIndex].classList.add("active");
        }
        setInterval(showNextTestimonial, 4000);
    }

    // ניווט במובייל - תפריט המבורגר
    const mobileMenu = document.querySelector(".mobile-overlay");
    const menuToggle = document.querySelector(".menu-toggle");
    const closeMenuButton = document.querySelector(".close-overlay");

    if (mobileMenu && menuToggle && closeMenuButton) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.add("open");
        });

        closeMenuButton.addEventListener("click", function () {
            mobileMenu.classList.remove("open");
        });

        document.querySelectorAll(".mobile-overlay a").forEach(link => {
            link.addEventListener("click", function () {
                mobileMenu.classList.remove("open");
            });
        });
    } else {
        console.error("⚠️ בעיה בניווט המובייל! ודא שיש אלמנטים עם המחלקות המתאימות.");
    }
});
