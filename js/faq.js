document.addEventListener('DOMContentLoaded', function () {
    // שאלות ותשובות (FAQ)
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

    // סליידר המלצות
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

    // ניווט במובייל - פתיחה/סגירה
    const mobileOverlay = document.querySelector(".mobile-overlay");
    const closeOverlayButton = document.querySelector(".close-overlay");
    const openOverlayButton = document.querySelector(".menu-toggle");
    if (mobileOverlay && openOverlayButton && closeOverlayButton) {
        openOverlayButton.addEventListener("click", function () {
            mobileOverlay.classList.add("open");
        });
        closeOverlayButton.addEventListener("click", function () {
            mobileOverlay.classList.remove("open");
        });
        document.querySelectorAll(".mobile-overlay a").forEach(link => {
            link.addEventListener("click", function () {
                mobileOverlay.classList.remove("open");
            });
        });
    } else {
        console.error("⚠️ בעיה בניווט המובייל! ודא שיש אלמנטים עם המחלקות המתאימות.");
    }
	
	
});

function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu) {
        mobileMenu.classList.toggle("open");
    } else {
        console.error("⚠️ התפריט לא נמצא! ודא שקיים אלמנט עם id='mobileMenu'.");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const basicPricing = document.getElementById('basicPricing');
    const advancedPricing = document.getElementById('advancedPricing');
    const basicTab = document.getElementById('basicTab');
    const advancedTab = document.getElementById('advancedTab');
    let isAdvanced = false;

    function updatePricingDisplay() {
        if (isAdvanced) {
            basicPricing.style.display = "none";
            advancedPricing.style.display = "block";
            basicTab.classList.remove('active');
            advancedTab.classList.add('active');
        } else {
            basicPricing.style.display = "block";
            advancedPricing.style.display = "none";
            basicTab.classList.add('active');
            advancedTab.classList.remove('active');
        }
        toggleButton.classList.toggle('rotated', isAdvanced);
    }

    // מאזין ללחיצה על האייקון
    toggleButton.addEventListener('click', function () {
        isAdvanced = !isAdvanced;
        updatePricingDisplay();
    });

    // מאזין ללחיצה על כותרות המסלולים
    basicTab.addEventListener('click', function () {
        isAdvanced = false;
        updatePricingDisplay();
    });

    advancedTab.addEventListener('click', function () {
        isAdvanced = true;
        updatePricingDisplay();
    });

    // עדכון ראשוני של התצוגה
    updatePricingDisplay();
});

