# Template Entegrasyon Rehberi

Bu rehber, ahmetacikkol.com sitesinin başka bir template'e entegre edilmesi için adım adım talimatlar içerir.

---

## 📦 Hazır Dosyalar

Aşağıdaki dosyalar template entegrasyonu için hazırlanmıştır:

1. **SITE_ANALYSIS.md** - Detaylı site analizi
2. **PORTFOLIO_DATA.json** - Tüm portfolio verileri (JSON formatında)
3. **PORTFOLIO_IMAGES_LIST.txt** - Tüm portfolio görsellerinin listesi

---

## 🚀 Entegrasyon Adımları

### 1. Asset'leri Kopyalama

#### Görseller
```bash
# Portfolio görselleri
cp -r assets/img/portfolio/ [YENİ_TEMPLATE]/assets/img/portfolio/

# Diğer görseller
cp assets/img/hero-cover.png [YENİ_TEMPLATE]/assets/img/
cp assets/img/logo.webp [YENİ_TEMPLATE]/assets/img/
cp assets/img/favicon.png [YENİ_TEMPLATE]/assets/img/
cp assets/img/apple-touch-icon.png [YENİ_TEMPLATE]/assets/img/
```

#### JavaScript Kütüphaneleri
Gerekli kütüphaneleri yeni template'e ekleyin:
- Isotope Layout (portfolio filtreleme için)
- ImagesLoaded (görsel yükleme için)
- AOS (scroll animasyonları için)
- GLightbox (lightbox için)
- Typed.js (typing animasyonu için)

---

### 2. HTML Yapısını Aktarma

#### Portfolio Sayfası Yapısı

**Filtreleme Menüsü:**
```html
<ul class="portfolio-filters isotope-filters">
  <li data-filter=".filter-series">Tv Series</li>
  <li data-filter=".filter-strategy" class="filter-active">Tv-Commercial</li>
  <li data-filter=".filter-finance">Music Video</li>
  <li data-filter=".filter-operations">Unreal Engine</li>
</ul>
```

**Portfolio Item Yapısı:**
```html
<div class="col-lg-2 col-md-3 col-sm-4 col-6 portfolio-item isotope-item filter-[KATEGORI]">
  <div class="video-embed" 
       data-title="[BAŞLIK]" 
       data-vimeo-id="[VIMEO_ID]" 
       style="background-image:url('[GÖRSEL_YOLU]');">
  </div>
  <div class="portfolio-info">
    <p class="episode-count">[ROL]</p>
  </div>
</div>
```

**Portfolio verilerini PORTFOLIO_DATA.json dosyasından alabilirsiniz.**

---

### 3. JavaScript Fonksiyonlarını Aktarma

#### Isotope Filtreleme Sistemi
```javascript
// Isotope initialization
const initIsotope = new Isotope(container, {
  itemSelector: '.isotope-item',
  layoutMode: 'masonry',
  filter: '.filter-strategy',
  sortBy: 'original-order',
  transitionDuration: '0.2s'
});

// Filter click handler
filters.addEventListener('click', function() {
  const filterValue = this.getAttribute('data-filter');
  initIsotope.arrange({ filter: filterValue });
});
```

#### Vimeo Video Embed
```javascript
// Video embed handler
document.querySelectorAll('.video-embed').forEach(item => {
  item.addEventListener('click', function() {
    const videoId = this.getAttribute('data-vimeo-id');
    const title = this.getAttribute('data-title');
    
    // Open modal with Vimeo iframe
    const iframe = document.createElement('iframe');
    iframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`;
    // Show modal with iframe
  });
});
```

Tam kod için `assets/js/main.js` dosyasına bakın.

---

### 4. CSS Stillerini Aktarma

#### Renk Paleti
```css
:root {
  --background-color: #000000;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --accent-color: #ff6b35;
  --surface-color: #1a1a1a;
  --contrast-color: #ffffff;
}
```

#### Portfolio Grid Stilleri
```css
.portfolio-item {
  margin-bottom: 1rem;
}

.video-embed {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
```

Tam CSS stilleri için `assets/css/main.css` dosyasına bakın.

---

### 5. İletişim Formu Entegrasyonu

#### Web3Forms Entegrasyonu
```html
<form id="contactForm" method="post">
  <input type="hidden" name="access_key" value="97c0e41e-ef48-4131-9813-5f401f5f9e6a">
  <input type="hidden" name="subject" value="New Contact Form Submission">
  
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" rows="6" placeholder="Message" required></textarea>
  
  <button type="submit">Send Message</button>
</form>
```

```javascript
form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  });
  
  // Handle response
});
```

---

### 6. Sosyal Medya Linklerini Ekleme

```html
<div class="social-links">
  <a href="https://instagram.com/ahmetacikkol" target="_blank">
    <i class="bi bi-instagram"></i>
  </a>
  <a href="https://www.imdb.com/name/nm5241768/" target="_blank">
    <i class="bi bi-camera-reels"></i>
  </a>
  <a href="https://vimeo.com/ahmetacikkol/videos" target="_blank">
    <i class="bi bi-vimeo"></i>
  </a>
</div>
```

---

## 📋 Checklist

Template entegrasyonu sırasında kontrol edilmesi gerekenler:

- [ ] Tüm portfolio görselleri kopyalandı
- [ ] Portfolio verileri (PORTFOLIO_DATA.json) kullanıldı
- [ ] Vimeo video ID'leri doğru aktarıldı
- [ ] Isotope filtreleme sistemi çalışıyor
- [ ] Video embed fonksiyonu çalışıyor
- [ ] İletişim formu Web3Forms'a bağlı
- [ ] Sosyal medya linkleri doğru
- [ ] Responsive tasarım korundu
- [ ] Tüm JavaScript kütüphaneleri yüklendi
- [ ] CSS stilleri uygulandı
- [ ] Favicon ve icon'lar eklendi

---

## 🔧 Özelleştirme İpuçları

### Portfolio Grid Boyutları
Mevcut grid sistemi:
- Desktop (lg): `col-lg-2` (6 sütun)
- Tablet (md): `col-md-3` (4 sütun)
- Mobile (sm): `col-sm-4` (3 sütun)
- Küçük ekran: `col-6` (2 sütun)

### Video Embed Özelleştirme
Vimeo embed parametreleri:
- `autoplay=1` - Otomatik oynatma
- `title=0` - Başlık gizle
- `byline=0` - Kullanıcı adı gizle
- `portrait=0` - Profil resmi gizle

### Renk Özelleştirme
Renkleri değiştirmek için CSS değişkenlerini güncelleyin:
```css
:root {
  --accent-color: #ff6b35; /* Turuncu yerine başka renk */
}
```

---

## 📞 Destek

Entegrasyon sırasında sorun yaşarsanız:
1. `SITE_ANALYSIS.md` dosyasını kontrol edin
2. `PORTFOLIO_DATA.json` dosyasındaki verileri doğrulayın
3. Orijinal dosyaları (`portfolio.html`, `main.js`, `main.css`) referans olarak kullanın

---

**Son Güncelleme**: 20 Şubat 2026
