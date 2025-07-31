# 🎮 Ketket.dev - Minecraft Projects Portfolio

A modern and user-friendly Minecraft projects portfolio website. Built with React and Docusaurus, featuring multi-language support and dynamic content management.

## ✨ Features

### 🌐 Multi-Language Support
- **Turkish/English** language switching system
- Dynamic content changes
- Consistent user experience

### 📊 Dynamic Project Management
- **Modrinth API** integration
- Real-time download counts
- Popularity-based sorting
- Pagination system (6 cards per page)

### 🎨 Modern Design
- **Glassmorphism** effects
- Smooth animations
- Responsive design
- Premium user experience

### 📱 Responsive Design
- Mobile-friendly
- Tablet optimization
- Desktop experience
- Perfect appearance on all devices

## 🚀 Technologies

- **React 18** - Modern UI framework
- **Docusaurus 3** - Static site generator
- **CSS Modules** - Scoped styling
- **GitHub Pages** - Hosting
- **Modrinth API** - Minecraft mod data

## 📦 Installation

### Requirements
- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/efeketket/ketketwiki.git
cd ketketwiki
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open in browser**
```
http://localhost:3000
```

## 🏗️ Project Structure

```
ketketwiki/
├── wiki/                    # Main Docusaurus project
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── DatapackCarousel/    # Project gallery
│   │   │   ├── HomepageFeatures/    # Homepage features
│   │   │   └── SportsProjects/      # Sports projects
│   │   ├── pages/          # Page components
│   │   │   ├── about.js    # About page
│   │   │   ├── about.md    # Turkish content
│   │   │   └── abouteng.md # English content
│   │   └── css/            # Global styles
│   ├── docs/               # Documentation
│   │   ├── datapack1/      # Datapack 1 docs
│   │   ├── datapack2/      # Datapack 2 docs
│   │   ├── datapack3/      # Datapack 3 docs
│   │   ├── datapack4/      # Datapack 4 docs
│   │   ├── datapack5/      # Datapack 5 docs
│   │   ├── datapack6/      # Datapack 6 docs
│   │   └── datapack7/      # Datapack 7 docs
│   ├── blog/               # Blog posts
│   ├── static/             # Static files
│   └── docusaurus.config.js
└── README.md
```

## 🎯 Feature Details

### Language Switching System
```javascript
// State management for language switching
const [selectedLanguage, setSelectedLanguage] = useState('tr');
const currentContent = selectedLanguage === 'tr' ? turkishContent : englishContent;
```

### Popularity Sorting
```javascript
// Sort by download counts
const getSortedProjects = () => {
  return projects.map(project => ({
    ...project,
    totalDownloads: modrinthCount + planetmcDownloads
  })).sort((a, b) => b.totalDownloads - a.totalDownloads);
};
```

### Pagination System
```javascript
// 6 cards per page pagination
const CARDS_PER_PAGE = 6;
const getCurrentPageCards = () => {
  const startIndex = currentPage * CARDS_PER_PAGE;
  return sortedProjects.slice(startIndex, startIndex + CARDS_PER_PAGE);
};
```

## 🔧 Development

### Adding New Projects
1. Add new project to `DatapackProjects` array
2. Add project images to `static/img/` folder
3. Specify Modrinth ID (for API integration)

### Style Changes
- Use CSS Modules
- Component-specific styles
- Global styles in `src/css/custom.css`

### API Integration
- Modrinth API: `https://api.modrinth.com/v2/project/{id}`
- Automatic download count updates
- Error handling included

## 📈 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Efe Ketenci**
- 🎓 Eskişehir Osmangazi University - Mathematics and Computer Science
- 🎮 Minecraft mod developer
- 🌐 [ketket.dev](https://ketket.dev)
- 📧 [LinkedIn](https://www.linkedin.com/in/efe-ketancı-193902248/)

## 🔗 Links

- 🌐 **Website**: [ketket.dev](https://ketket.dev)
- 📦 **Modrinth**: [efeketket](https://modrinth.com/user/efeketket)
- 🎮 **PlanetMC**: [efeketket](https://www.planetminecraft.com/member/efeketket/)
- 🔧 **GitHub**: [efeketket](https://github.com/efeketket)

---

⭐ Don't forget to star this project if you liked it! 
