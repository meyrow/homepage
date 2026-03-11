# דוח ניקוי קבצים – toassociate.com
# Cleanup Audit Report

---

## 🗑️ קבצים שניתן למחוק – Files Safe to Delete

### CSS – חסכון: ~1.3MB
| קובץ | גודל | סיבה |
|------|------|-------|
| css/animateWRONG.css | 77K | שם מפורש שהוא שגוי – לא מקושר בשום מקום |
| css/bootstrap-formhelpers.min.css | 29K | לא מקושר בשום HTML |
| css/bootstrap-grid.css | 69K | לא מקושר – יש כבר bootstrap.rtl.min.css |
| css/bootstrap-grid.min.css | 51K | לא מקושר |
| css/bootstrap-grid.rtl.css | 69K | לא מקושר |
| css/bootstrap-grid.rtl.min.css | 51K | לא מקושר |
| css/bootstrap-reboot.css | 12K | לא מקושר |
| css/bootstrap-reboot.min.css | 10K | לא מקושר |
| css/bootstrap-reboot.rtl.css | 12K | לא מקושר |
| css/bootstrap-reboot.rtl.min.css | 10K | לא מקושר |
| css/bootstrap-utilities.css | 106K | לא מקושר |
| css/bootstrap-utilities.min.css | 84K | לא מקושר |
| css/bootstrap-utilities.rtl.css | 106K | לא מקושר |
| css/bootstrap-utilities.rtl.min.css | 84K | לא מקושר |
| css/bootstrap.css | 275K | לא מקושר – יש כבר bootstrap.rtl.min.css |
| css/bootstrap.rtl.css | 274K | לא מקושר – יש כבר bootstrap.rtl.min.css |
| css/colors/amethyst.css | 1K | לא מקושר – רק color.css ו-alizarin.css משמשים |
| css/colors/carrot.css | 1K | לא מקושר |
| css/colors/emerald.css | 1K | לא מקושר |
| css/colors/green-sea.css | 1K | לא מקושר |
| css/colors/indigo.css | 1K | לא מקושר |
| css/colors/peter-river.css | 1K | לא מקושר |
| css/colors/wet-asphalt.css | 1K | לא מקושר |

### JavaScript – חסכון: ~886K
| קובץ | גודל | סיבה |
|------|------|-------|
| js/bootstrap-formhelpers-colorpicker.js | 9.5K | לא מקושר |
| js/bootstrap.bundle.js | 203K | לא מקושר – יש bootstrap.min.js |
| js/bootstrap.bundle.min.js | 79K | לא מקושר |
| js/bootstrap.esm.js | 133K | לא מקושר |
| js/bootstrap.esm.min.js | 73K | לא מקושר |
| js/bootstrap.js | 142K | לא מקושר – יש bootstrap.min.js |
| js/faq.js | 5.5K | לא מקושר בשום HTML |
| js/html5.js | 2.5K | לא מקושר |
| js/jQuery.scrollSpeed.js | 2K | לא מקושר |
| js/jquery-1.10.2.min.js | 91K | כפול – יש jquery-2.1.3.min.js שמקושר |
| js/jquery-3.7.1.min.js | 86K | כפול – יש jquery-2.1.3.min.js שמקושר |
| js/owl.carousel.js | 52K | כפול – יש owl.carousel.min.js שמקושר |
| js/retina-1.1.0.min.js | 3K | לא מקושר |
| js/retina-2.1.0.min.js | 1.5K | לא מקושר |
| js/slider.js | 1K | לא מקושר |

### Map Files – חסכון: ~6MB (production only)
כל קבצי ה-.map (css/*.map, js/*.map) נועדו לפיתוח בלבד.
**לא צריך להסיר** מ-Git, אבל אפשר להגדיר ב-Cloudflare/CDN שלא יוגשו ללקוח.

### Images – קבצים עם שמות בעייתיים או שאינם בשימוש
| קובץ | גודל | סיבה |
|------|------|-------|
| images/bigLogo02.png | 42K | כפול של bigLogo.png – לא מקושר |
| images/bigLogo2.png | 41K | כפול – לא מקושר |
| images/crm.jpg | 12K | לא מקושר בשום מקום |
| images/flowRoot4274.png | 164K | שם לא תקין – לא מקושר |
| images/illustration_left - Copy.png | — | Copy קובץ – לא מקושר |
| images/illustration_left.png | 53K | לא מקושר |
| images/illustration_right.png | 13K | לא מקושר |
| images/ipad-hand - Copy.png | — | Copy קובץ – לא מקושר |
| images/ipad-hand.png | 91K | לא מקושר |
| images/iphone_half.png | 19K | לא מקושר |
| images/loan_management.png | 26K | לא מקושר (loan_management_icon.PNG כן משמש) |
| images/miniLogo1.png | 1K | כפול – miniLogo.png כן משמש |
| images/nedarim_3.png | 91K | לא מקושר |
| images/practice-icon-1..4.png | ~20K | לא מקושר |
| images/service_cost.png | 55K | לא מקושר |
| images/slider-bg - Copy.png | — | Copy קובץ |
| images/slider-bg05.png | 38K | לא מקושר |
| images/slider-bg2 (2).png | — | שם עם רווחים – לא מקושר |
| images/slider-bg2.png | 18K | לא מקושר |
| images/slider-bgVERTICAl.png | 55K | לא מקושר |
| images/smallLogo.png | 6.5K | לא מקושר |
| images/smallLogo1.png | 12K | לא מקושר |
| images/tution_3.png | 75K | לא מקושר |
| images/video-hover.png | 1K | לא מקושר |
| images/whatsapp-logo.png | 1.5K | לא מקושר (כפתור ה-WhatsApp משתמש ב-URL חיצוני) |
| images/.DS_Store | 13K | קובץ Mac מערכת – למחוק |

---

## ⚠️ עמודים שאסור לשים ב-Sitemap
| קובץ | סיבה |
|------|-------|
| credit_iframe.html | עמוד iframe פנימי – לא עמוד ציבורי |
| message_1_2024.html | נראה כהודעה פנימית/זמנית |
| google50622e63a4ebbb73.html | קובץ אימות Google Search Console – לא עמוד תוכן |
| error_page/ | עמודי שגיאה |
| landingpage/ | landing page נפרד – בדוק אם צריך לשלב |

---

## ✅ סיכום חסכון כולל
| קטגוריה | חסכון משוער |
|---------|-------------|
| CSS | ~1.3MB |
| JavaScript | ~886KB |
| Map files (production) | ~6MB |
| Images | ~900KB+ |
| **סה"כ** | **~9MB+** |

---

## 📋 הוראות יישום

### מחיקת קבצים לא בשימוש (הרץ מתוך תיקיית הפרויקט):
```bash
# CSS
rm css/animateWRONG.css css/bootstrap-formhelpers.min.css
rm css/bootstrap-grid*.css css/bootstrap-reboot*.css
rm css/bootstrap-utilities*.css css/bootstrap.css css/bootstrap.rtl.css
rm css/colors/amethyst.css css/colors/carrot.css css/colors/emerald.css
rm css/colors/green-sea.css css/colors/indigo.css css/colors/peter-river.css css/colors/wet-asphalt.css

# JS
rm js/bootstrap-formhelpers-colorpicker.js
rm js/bootstrap.bundle.js js/bootstrap.bundle.min.js
rm js/bootstrap.esm.js js/bootstrap.esm.min.js js/bootstrap.js
rm js/faq.js js/html5.js js/jQuery.scrollSpeed.js
rm js/jquery-1.10.2.min.js js/jquery-3.7.1.min.js
rm js/owl.carousel.js js/retina-1.1.0.min.js js/retina-2.1.0.min.js js/slider.js

# Images
rm "images/bigLogo02.png" "images/bigLogo2.png" "images/crm.jpg"
rm "images/flowRoot4274.png" "images/illustration_left.png" "images/illustration_right.png"
rm "images/ipad-hand.png" "images/iphone_half.png" "images/loan_management.png"
rm "images/miniLogo1.png" "images/nedarim_3.png" "images/service_cost.png"
rm "images/slider-bg05.png" "images/slider-bg2.png" "images/slider-bgVERTICAl.png"
rm "images/smallLogo.png" "images/smallLogo1.png" "images/tution_3.png"
rm "images/video-hover.png" "images/whatsapp-logo.png" "images/.DS_Store"
rm "images/illustration_left - Copy.png" "images/ipad-hand - Copy.png"
rm "images/slider-bg - Copy.png" "images/slider-bg - Copy (2).png" "images/slider-bg2 (2).png"
```

### עדכון Sitemap ב-Google Search Console:
1. העלה את sitemap.xml לשרת
2. כנס ל- https://search.google.com/search-console
3. בחר את הנכס שלך
4. לחץ על "Sitemaps" בתפריט הצד
5. הזן: `sitemap.xml` ולחץ Submit
