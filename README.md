# Tippy Bot Manual

<p align="center">
  <img src="src/public/CGM_TP010311_010a.png" alt="Tippy Bot" width="200">
</p>

<div align="center">

# ティピィ Tippy Bot Documentation

_🧸 ねぇレイ、今日はどんなほんをさがしにきたの？ 🧸_

[![VitePress](https://img.shields.io/badge/VitePress-1.6.3-646cff?style=flat-square&logo=vite)](https://vitepress.dev/)

[📖 Read Documentation](https://tippy.morfonica.cn/) • [🚀 Development](#development)

</div>

## About

This repository contains the official documentation for **ティピィ Tippy Bot** , a multi-functional QQ bot developed by Shiona. The bot provides various gaming services, particularly focused on rhythm games and mini-games.

## Documentation Structure

```
src/
├── index.md              # Homepage
├── docs/
│   ├── about.md          # About page
│   ├── changelog.md      # Update changelog
│   └── manual.md         # User manual
├── pages/
│   └── bind.md           # Account binding guide
└── public/               # Static assets and images
```

## Development

This documentation site is built with [VitePress](https://vitepress.dev/), a Vue.js-powered static site generator.

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/xapenny/Tippy-Manual.git
   cd Tippy-Manual
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run docs:dev
   ```

   The site will be available at `http://localhost:5173`

4. **Start development server with external access**
   ```bash
   npm run docs:dev:pub
   ```
   This allows access from other devices on your network.

### Available Scripts

- `npm run docs:dev` - Start the development server
- `npm run docs:dev:pub` - Start the development server with external access (0.0.0.0)
- `npm run docs:build` - Build the documentation for production
- `npm run docs:preview` - Preview the production build locally

### Project Structure

- **`src/`** - Source files for the documentation
- **`src/public/`** - Static assets (images, favicon, etc.)
- **`src/docs/`** - Documentation pages
- **`src/pages/`** - Additional pages
- **`package.json`** - Project configuration and dependencies

## License

This documentation is maintained by the Tippy Bot development team.

---

<div align="center">

Made with ❤️ for the rhythm game community

</div>
