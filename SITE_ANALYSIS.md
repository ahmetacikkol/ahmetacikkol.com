# Ahmet Açıkkol Website - Site Analizi ve Template Entegrasyon Dokümantasyonu

## 📋 Genel Bakış

Bu dokümantasyon, ahmetacikkol.com sitesinin yapısını, içeriğini ve başka bir template'e entegre edilmesi için gerekli tüm bilgileri içerir.

---

## 🏗️ Site Yapısı

### HTML Sayfaları
- **index.html** - Ana sayfa (şu anda "Site Kapalı" mesajı gösteriyor)
- **portfolio.html** - Portföy/Çalışmalar sayfası (aktif)
- **contact.html** - İletişim sayfası (aktif)
- **portfolio-details.html** - Portföy detay sayfası
- **starter-page.html** - Başlangıç sayfası
- **messages.html** - Mesajlar sayfası

### Teknoloji Stack
- **Framework**: Bootstrap 5.3.7
- **Template**: FolioOne (BootstrapMade)
- **JavaScript Libraries**:
  - AOS (Animate On Scroll)
  - Isotope (Portfolio filtering)
  - Swiper (Slider)
  - GLightbox (Lightbox)
  - Typed.js (Typing animation)
  - PureCounter
  - Waypoints
  - ImagesLoaded

---

## 📸 Medya ve Assetler

### Fotoğraflar ve Görseller

#### Portfolio Görselleri (50+ adet)
**Lokasyon**: `assets/img/portfolio/`

**TV Series Kategorisi:**
- `donmek-icin-eve.png`
- `tv-series.jpg`
- `masumiyet-muzesi.png`

**TV-Commercial Kategorisi:**
- `flormar.png`
- `yeni-raki.png`
- `camlica-gazoz.png`
- `apple-trendyol-1.jpg`
- `apple-trendyol-2.jpg`
- `shell.jpg`
- `petrol-ofisi.jpg`
- `evren-kayar.jpg`
- `moeva.jpg`
- `otobid.jpg`
- `boyner.jpg`
- `sanko.jpg`
- `nestle.jpg`
- `diablo-34.jpg`
- `vitruta.jpg`
- `pinar-sut.jpg`
- `cif.jpg`
- `sephora.png`
- `vakkorama-1.jpg`
- `vakkorama-2.jpg`
- `ford.jpg`
- `algida.jpg`
- `akbank.jpg`
- `allianz.jpg`
- `techno-mobile-1.jpg`
- `techno-mobile-2.jpg`
- `under-armor.jpg`
- `sushida.jpg`
- `durumle.png`
- `shell-2.jpg`
- `land-rover.jpg`
- `a101-aysonu.png`
- `a101-sogan.png`
- `a101-ayran.png`
- `ustad.png`
- `pepsico.png`

**Unreal Engine Kategorisi:**
- `ford-mustang-mach-e.jpg`
- `ford-edge.jpg`
- `ford-bronco.jpg`

**Music Video Kategorisi:**
- `tolani-cry-baby.jpg`
- `muhiddin_aslanbey.jpg`
- `jabbar.png`
- `kts.jpg`
- `snap.jpg`
- `manifes.jpg`

#### Diğer Görseller
- `assets/img/hero-cover.png` - Ana sayfa hero görseli
- `assets/img/logo.webp` - Logo
- `assets/img/favicon.png` - Favicon
- `assets/img/apple-touch-icon.png` - Apple touch icon
- `assets/img/person/` - Kişi görselleri klasörü
- `assets/img/services/` - Servis görselleri klasörü

---

## 🔗 Dış Bağlantılar ve Entegrasyonlar

### Sosyal Medya Profilleri
1. **Instagram**: `https://instagram.com/ahmetacikkol`
2. **IMDB**: `https://www.imdb.com/name/nm5241768/`
3. **Vimeo**: `https://vimeo.com/ahmetacikkol/videos`

### Vimeo Video Entegrasyonu
Portfolio sayfasında 50+ Vimeo video embed edilmiş durumda. Her portfolio item'ı bir Vimeo video ID'si içeriyor.

**Örnek Video ID'leri:**
- 1166409513 - Dönmek İçin Eve
- 1118364548 - The Club
- 1166440413 - Masumiyet Müzesi
- 1166452885 - Flormar
- 1166449949 - Yeni Rakı
- ... ve daha fazlası

**Video Embed Formatı:**
```html
<div class="video-embed" 
     data-title="Video Başlığı" 
     data-vimeo-id="VIDEO_ID" 
     style="background-image:url('assets/img/portfolio/image.jpg');">
</div>
```

### İletişim Formu Entegrasyonu
- **Servis**: Web3Forms
- **Access Key**: `97c0e41e-ef48-4131-9813-5f401f5f9e6a`
- **API Endpoint**: `https://api.web3forms.com/submit`

---

## 📝 İçerik Yapısı

### Ana Sayfa (index.html)
**Durum**: Şu anda "Site Geçici Olarak Kapalı" mesajı gösteriyor.

**Orijinal İçerik (ahmetacikkol.com/index.html'de mevcut):**
- Hero Section
- İsim: "Ahmet Açıkkol"
- Başlık: Typed.js ile animasyonlu
  - "Cinematographer & Visual Storyteller"
  - "Look Creator"
  - "Lightning Designer"
  - "Live-Action • AI • Unreal Engine"
- CTA Butonu: "Get In Touch"
- Sosyal medya linkleri

### Portfolio Sayfası (portfolio.html)
**Kategoriler:**
1. **Tv Series** (filter-series)
   - Dönmek İçin Eve
   - The Club
   - Masumiyet Müzesi

2. **Tv-Commercial** (filter-strategy) - Varsayılan aktif kategori
   - 30+ commercial projesi

3. **Music Video** (filter-finance)
   - Tolani - Cry Baby
   - Muhiddin Aslanbay
   - Jabbar
   - KTS (Second Dop)
   - SNAP (Second Dop)
   - MANİFEST (Second Dop)

4. **Unreal Engine** (filter-operations)
   - Ford Mustang Mach-E
   - Ford Edge
   - Ford Bronco

**Her Portfolio Item İçeriği:**
- Video thumbnail (background-image)
- Video başlığı (data-title)
- Vimeo video ID (data-vimeo-id)
- Rol bilgisi (Cinematographer, Second Dop, vb.)

### İletişim Sayfası (contact.html)
- İletişim formu
- Web3Forms entegrasyonu
- Form alanları:
  - İsim (name)
  - Email
  - Mesaj (message)

---

## 🎨 Tasarım ve Stil

### Renk Paleti
```css
--background-color: #000000 (Siyah)
--default-color: #ffffff (Beyaz)
--heading-color: #ffffff (Beyaz)
--accent-color: #ff6b35 (Turuncu)
--surface-color: #1a1a1a (Koyu gri)
--contrast-color: #ffffff (Beyaz)
```

### Fontlar
- **Heading Font**: Playfair Display
- **Body Font**: Crimson Text, Libre Baskerville
- **Default Font**: Inter (system fonts fallback)

### Özel Stiller
- Portfolio sayfası: Gradient background (`#f5e8dc` → `#efe1d6` → `#e7d6c8`)
- Light background header
- Sticky header
- Smooth scroll

---

## ⚙️ JavaScript Fonksiyonları

### Ana Fonksiyonlar (main.js)
1. **Scroll Detection** - Header'a scrolled class ekler
2. **Mobile Navigation Toggle**
3. **Preloader** - Sayfa yüklendiğinde kaldırılır
4. **Scroll Top Button**
5. **AOS Animation** - Scroll animasyonları
6. **Isotope Layout** - Portfolio filtreleme ve grid layout
7. **GLightbox** - Lightbox için
8. **Vimeo Video Embed** - Portfolio item'lara tıklandığında video gösterir
9. **Language Toggle** - Çoklu dil desteği (EN, TR, DE, ZH)
10. **Typed Animation** - Hero section'da typing efekti
11. **Contact Form Handler** - Web3Forms entegrasyonu

### Video Embed Mantığı
Portfolio item'lara tıklandığında:
1. Vimeo video ID alınır
2. Modal açılır
3. Vimeo iframe embed edilir
4. Autoplay aktif

---

## 📦 Dosya Yapısı

```
ahmetacikkol.com/
├── index.html
├── portfolio.html
├── contact.html
├── portfolio-details.html
├── starter-page.html
├── messages.html
├── assets/
│   ├── css/
│   │   └── main.css (Ana stil dosyası)
│   ├── js/
│   │   ├── main.js (Ana JavaScript dosyası)
│   │   └── languages.js (Dil çevirileri)
│   ├── img/
│   │   ├── portfolio/ (50+ görsel)
│   │   ├── person/
│   │   ├── services/
│   │   ├── hero-cover.png
│   │   ├── logo.webp
│   │   ├── favicon.png
│   │   └── apple-touch-icon.png
│   └── vendor/
│       ├── bootstrap/
│       ├── aos/
│       ├── swiper/
│       ├── glightbox/
│       ├── isotope-layout/
│       ├── imagesloaded/
│       ├── typed.js/
│       ├── waypoints/
│       ├── purecounter/
│       └── php-email-form/
```

---

## 🔄 Template Entegrasyonu İçin Gerekli Adımlar

### 1. İçerik Aktarımı
- ✅ Tüm portfolio görsellerini kopyala
- ✅ Tüm HTML içeriklerini aktar
- ✅ Video ID'lerini ve metadata'yı koru
- ✅ Sosyal medya linklerini güncelle

### 2. Fonksiyonellik Aktarımı
- ✅ Isotope filtreleme sistemi
- ✅ Vimeo video embed sistemi
- ✅ Contact form entegrasyonu
- ✅ Typed.js animasyonu
- ✅ AOS scroll animasyonları

### 3. Stil Aktarımı
- ✅ Renk paletini uygula
- ✅ Font'ları ekle
- ✅ Özel CSS stillerini aktar
- ✅ Responsive tasarımı koru

### 4. Asset Yönetimi
- ✅ Tüm görselleri yeni template'e kopyala
- ✅ Path'leri güncelle
- ✅ Favicon ve icon'ları ekle

### 5. Test ve Optimizasyon
- ✅ Tüm linklerin çalıştığını kontrol et
- ✅ Video embed'lerin çalıştığını test et
- ✅ Form gönderimini test et
- ✅ Mobil uyumluluğu kontrol et

---

## 📊 İstatistikler

- **Toplam HTML Sayfası**: 6
- **Portfolio Görseli**: 50+
- **Vimeo Video**: 50+
- **Portfolio Kategorisi**: 4
- **Sosyal Medya Profili**: 3
- **JavaScript Library**: 9+
- **CSS Dosyası**: 1 ana + vendor dosyaları

---

## 🎯 Önemli Notlar

1. **index.html** şu anda kapalı durumda. Orijinal içerik `ahmetacikkol.com/index.html` klasöründe mevcut olabilir.

2. **Vimeo Video ID'leri** portfolio.html'de hardcoded olarak bulunuyor. Template entegrasyonunda bu ID'lerin korunması kritik.

3. **Web3Forms Access Key** contact.html'de bulunuyor. Yeni template'te bu key'i güncellemek gerekebilir.

4. **Portfolio filtreleme** Isotope kütüphanesi kullanıyor. Yeni template'te bu kütüphanenin dahil edilmesi gerekiyor.

5. **Responsive tasarım** Bootstrap grid sistemi kullanıyor (col-lg-2, col-md-3, col-sm-4, col-6).

---

## 📞 İletişim Bilgileri

- **Instagram**: @ahmetacikkol
- **IMDB**: nm5241768
- **Vimeo**: ahmetacikkol/videos

---

**Son Güncelleme**: 20 Şubat 2026
**Hazırlayan**: AI Assistant
