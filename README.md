# 🎮 Ketket.dev - Minecraft Projects Portfolio

Modern ve kullanıcı dostu bir Minecraft projeleri portföy sitesi. React ve Docusaurus kullanılarak geliştirilmiş, çok dilli destek ve dinamik içerik yönetimi özelliklerine sahip.

## ✨ Özellikler

### 🌐 Çok Dilli Destek
- **Türkçe/İngilizce** geçiş sistemi
- Dinamik içerik değişimi
- Tutarlı kullanıcı deneyimi

### 📊 Dinamik Proje Yönetimi
- **Modrinth API** entegrasyonu
- Gerçek zamanlı indirme sayıları
- Popülerlik bazlı sıralama
- Sayfalama sistemi (6'lı kartlar)

### 🎨 Modern Tasarım
- **Glassmorphism** efektleri
- Smooth animasyonlar
- Responsive tasarım
- Premium kullanıcı deneyimi

### 📱 Responsive Tasarım
- Mobil uyumlu
- Tablet optimizasyonu
- Desktop deneyimi
- Tüm cihazlarda mükemmel görünüm

## 🚀 Teknolojiler

- **React 18** - Modern UI framework
- **Docusaurus 3** - Static site generator
- **CSS Modules** - Scoped styling
- **GitHub Pages** - Hosting
- **Modrinth API** - Minecraft mod verileri

## 📦 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/efeketket/ketketwiki.git
cd ketketwiki
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm start
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 🏗️ Proje Yapısı

```
ketketwiki/
├── wiki/                    # Ana Docusaurus projesi
│   ├── src/
│   │   ├── components/      # React bileşenleri
│   │   │   ├── DatapackCarousel/    # Proje galerisi
│   │   │   └── HomepageFeatures/    # Ana sayfa özellikleri
│   │   ├── pages/          # Sayfa bileşenleri
│   │   │   ├── about.js    # Hakkımda sayfası
│   │   │   ├── about.md    # Türkçe içerik
│   │   │   └── abouteng.md # İngilizce içerik
│   │   └── css/            # Global stiller
│   ├── docs/               # Dokümantasyon
│   ├── static/             # Statik dosyalar
│   └── docusaurus.config.js
└── README.md
```

## 🎯 Özellik Detayları

### Dil Değiştirme Sistemi
```javascript
// State yönetimi ile dil değişimi
const [selectedLanguage, setSelectedLanguage] = useState('tr');
const currentContent = selectedLanguage === 'tr' ? turkishContent : englishContent;
```

### Popülerlik Sıralaması
```javascript
// İndirme sayılarına göre sıralama
const getSortedProjects = () => {
  return projects.map(project => ({
    ...project,
    totalDownloads: modrinthCount + planetmcDownloads
  })).sort((a, b) => b.totalDownloads - a.totalDownloads);
};
```

### Sayfalama Sistemi
```javascript
// 6'lı kartlar halinde sayfalama
const CARDS_PER_PAGE = 6;
const getCurrentPageCards = () => {
  const startIndex = currentPage * CARDS_PER_PAGE;
  return sortedProjects.slice(startIndex, startIndex + CARDS_PER_PAGE);
};
```

## 🌟 Öne Çıkan Projeler

### 🪑 FurniCraft
- **17,000+** indirme
- Vanilla-style mobilya sistemi
- Resource pack gerektirmez

### ⚰️ Graves
- **5,500+** indirme
- Güvenli item saklama
- Ölüm sonrası item koruması

### 🏪 Player Shops
- **4,200+** indirme
- Oyuncu dükkan sistemi
- Ekonomi yönetimi

## 🔧 Geliştirme

### Yeni Proje Ekleme
1. `DatapackProjects` array'ine yeni proje ekleyin
2. Proje görsellerini `static/img/` klasörüne ekleyin
3. Modrinth ID'sini belirtin (API entegrasyonu için)

### Stil Değişiklikleri
- CSS Modules kullanın
- Component-specific stiller
- Global stiller için `src/css/custom.css`

### API Entegrasyonu
- Modrinth API: `https://api.modrinth.com/v2/project/{id}`
- Otomatik download sayısı güncelleme
- Hata yönetimi dahil

## 📈 Performans

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**Efe Ketenci**
- 🎓 Eskişehir Osmangazi Üniversitesi - Matematik ve Bilgisayar Bilimleri
- 🎮 Minecraft mod geliştirici
- 🌐 [ketket.dev](https://ketket.dev)
- 📧 [LinkedIn](https://www.linkedin.com/in/efe-ketancı-193902248/)

## 🔗 Bağlantılar

- 🌐 **Website**: [ketket.dev](https://ketket.dev)
- 📦 **Modrinth**: [efeketket](https://modrinth.com/user/efeketket)
- 🎮 **PlanetMC**: [efeketket](https://www.planetminecraft.com/member/efeketket/)
- 🔧 **GitHub**: [efeketket](https://github.com/efeketket)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! 