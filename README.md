
# ⚛️ React + Tailwind Boilerplate (with i18n + Currency Support)

A modern boilerplate built with Vite + React + Tailwind CSS, complete with multi-language support, currency switching, and responsive starter components.

This template is ideal for ecommerce sites, landing pages, portfolios, and frontend SaaS starters.

---

## 🚀 Quick Start

```bash
git clone https://github.com/inarey/fullstack-boilerplate.git
cd fullstack-boilerplate
npm install
npm run dev


---

## 📦 Tech Stack / Dependencies

| Package               | Purpose                            |
|-----------------------|-------------------------------------|
| `react`               | UI framework                       |
| `vite`                | Fast bundler & dev server          |
| `tailwindcss`         | Utility-first CSS framework        |
| `postcss`             | Used by Tailwind internally        |
| `autoprefixer`        | CSS vendor prefixing               |
| `react-icons`         | Icon library (Feather, etc.)       |
| `i18next`             | Internationalization core engine   |
| `react-i18next`       | React bindings for i18next         |
| `tailwindcss-animate` | Simple utility animation classes   |

To view all currently installed packages:
```bash
npm list --depth=0

## Getting Started



---

## ✅ 2. **Create a `setup.sh` Script (Optional but Powerful)**

This lets you quickly install everything if you (or others) clone the repo fresh.

### ✨ Create the file:

In the root of your project, create a file called:

```bash
touch setup.sh

## 📚 Full Package.json Dependencies..to see what is installed

Run `npm list --depth=0` for real-time list.




## ✨ Features

- ⚛️ React 18 (with Vite)
- 🎨 Tailwind CSS 3.x (with custom theme colors)
- 🌐 i18next for language switching (EN + JP by default)
- 💱 Currency context switcher (USD, JPY with symbol and mock conversion)
- 📱 Responsive UI ready out-of-the-box
- 💡 Folder structure for scalable projects

---

## 📁 Folder Structure

```bash
src/
├── components/
│   └── common/
│       ├── TopBanner.jsx     # Top notice bar with language + currency switch
│       └── Navbar.jsx        # Responsive navigation
├── context/
│   └── CurrencyContext.jsx   # Global state for currency and price conversion
├── locales/
│   ├── en.json               # English translations
│   └── jp.json               # Japanese translations
├── i18n.js                   # i18next config
├── App.jsx                   # Main app structure
└── main.jsx                  # Entry point
