# 💻 LaptopMart v2

<div align="center">

<!-- TODO: Add project logo -->

[![GitHub stars](https://img.shields.io/github/stars/officialmuneebahmad/Project-7-Laptop-Ecommerce_v2?style=for-the-badge)](https://github.com/officialmuneebahmad/Project-7-Laptop-Ecommerce_v2/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/officialmuneebahmad/Project-7-Laptop-Ecommerce_v2?style=for-the-badge)](https://github.com/officialmuneebahmad/Project-7-Laptop-Ecommerce_v2/network)
[![GitHub issues](https://img.shields.io/github/issues/officialmuneebahmad/Project-7-Laptop-Ecommerce_v2?style=for-the-badge)](https://github.com/officialmuneebahmad/Project-7-Laptop-Ecommerce_v2/issues)
[![GitHub license](https://img.shields.io/github/license/officialmuneebahmad/Project-7-Laptop-Ecommerce_v2?style=for-the-badge)](LICENSE.txt)

**A modern, responsive frontend for showcasing laptops with filtering capabilities.**

[Live Demo](https://laptopmart-v2.vercel.app)

</div>

## 📖 Overview

LaptopMart v2 is a sleek, client-side web application designed to present a catalog of laptops. Built with pure HTML, CSS, and JavaScript, and styled beautifully using Tailwind CSS, it offers a fast, interactive, and responsive user experience. This project serves as a robust frontend showcasing product listings and client-side filtering without relying on a backend server for data persistence.

## ✨ Features

-   🎯 **Interactive Product Catalog**: Browse a wide range of laptops with detailed listings.
-   🔍 **Client-Side Filtering**: Easily filter products based on various criteria (e.g., brand, price range, specifications).
-   📱 **Responsive Design**: Optimized for seamless viewing and interaction across all devices, from desktops to mobile phones.
-   ⚡ **Fast & Lightweight**: Pure frontend implementation ensures quick loading times and a smooth user experience.
-   🎨 **Modern UI with Tailwind CSS**: A clean, contemporary aesthetic leveraging the utility-first CSS framework.
-   ↔️ **Dynamic Navigation**: Smooth and interactive navigation elements powered by vanilla JavaScript.

## 🛠️ Tech Stack

**Frontend:**
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)

**DevOps:**
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 🚀 Quick Start

Follow these steps to get a development environment up and running on your local machine.

### Prerequisites
-   Node.js (LTS version recommended)
-   npm (comes with Node.js)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/officialmuneebahmad/Project-7-Laptop-Ecommerce_v2.git
    cd Project-7-Laptop-Ecommerce_v2
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```
    This will install `tailwindcss` and `postcss`, which are used to compile the CSS.

3.  **Start development server (Tailwind CSS watcher)**
    This command will watch for changes in `style.css` and `tailwind.config.js`, automatically recompiling `output.css`.
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Since this is a static site, you can open the `index.html` file directly in your browser. If you have a local web server (like `live-server` or a simple Python HTTP server), you can use that to serve the files.

    Visit `file:///path/to/your/Project-7-Laptop-Ecommerce_v2/index.html`
    (Or `http://localhost:XXXX` if using a local server)

## 📁 Project Structure

```
Project-7-Laptop-Ecommerce_v2/
├── filters/               # Placeholder for filtering logic or data
├── imgs/                  # Image assets for products and UI elements
├── laptops/               # Placeholder for laptop data or individual product pages
├── pages/                 # Placeholder for additional HTML pages
├── public/                # Static assets if applicable (currently empty)
├── svg/                   # SVG assets
├── useful_links/          # Placeholder for external resource links
├── node_modules/          # Installed Node.js dependencies
├── .git/                  # Git version control
├── LICENSE                # Project license file
├── index.html             # Main entry point for the application
├── navigation.js          # JavaScript for handling navigation logic
├── output.css             # Compiled Tailwind CSS output
├── package-lock.json      # npm dependency lock file
├── package.json           # Node.js project configuration and scripts
├── postcss.config.js      # PostCSS configuration
├── script.js              # Main JavaScript logic for product display and interactions
├── style.css              # Main CSS file, typically includes Tailwind directives
└── tailwind.config.js     # Tailwind CSS configuration
```

## ⚙️ Configuration

### Tailwind CSS Configuration
The `tailwind.config.js` file allows you to customize Tailwind's default configuration, including themes, variants, and plugins. This project uses it to define paths where Tailwind should scan for class names.

### PostCSS Configuration
`postcss.config.js` is used to configure PostCSS plugins. Here, it integrates `tailwindcss/nesting` and `autoprefixer` for enhanced CSS features and browser compatibility.

## 🔧 Development

### Available Scripts

| Command         | Description                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------ |
| `npm install`   | Installs all project dependencies.                                                                      |
| `npm run dev`   | Starts the PostCSS watcher, compiling `style.css` (with Tailwind) to `output.css` on changes.           |
| `npm run build` | Compiles `style.css` (with Tailwind) to a production-ready `output.css` once.                           |

### Development Workflow
1.  Run `npm run dev` in your terminal to enable live recompilation of your Tailwind CSS.
2.  Open `index.html` in your browser.
3.  Make changes to `index.html`, `script.js`, `style.css`, or `tailwind.config.js`. The browser will reflect HTML/JS changes upon refresh, and `output.css` will automatically update for styling changes.

## 🚀 Deployment

This project is a static web application, making it straightforward to deploy to various hosting services.

### Production Build
To generate the final, optimized CSS for production:
```bash
npm run build
```
This will create an `output.css` file suitable for deployment.

### Deployment Options
-   **Vercel**: The project's `homepage` URL indicates deployment on Vercel. You can connect your GitHub repository to Vercel for automatic deployments on every push.
-   **Netlify**: Similar to Vercel, Netlify offers seamless integration with GitHub for static site deployments.
-   **GitHub Pages**: You can host this project directly on GitHub Pages by pushing your `master` branch (or `docs` branch) content to it.
-   **Any Static Host**: Simply upload the entire project directory (including `index.html`, `script.js`, `output.css`, `imgs/`, etc.) to any static web hosting provider.

## 🤝 Contributing

We welcome contributions to enhance LaptopMart v2! If you have suggestions or would like to contribute, please feel free to fork the repository and submit a pull request.

### Development Setup for Contributors
The development setup is as described in the [Quick Start](#quick-start) section. Ensure you have Node.js installed and run `npm install` to set up the necessary tools for Tailwind CSS compilation.

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

-   **Tailwind CSS**: For providing an incredible utility-first CSS framework.
-   **PostCSS**: For transforming CSS with JavaScript plugins.

## 📞 Support & Contact

-   🐛 Issues: [GitHub Issues](https://github.com/officialmuneebahmad/Project-7-Laptop-Ecommerce_v2/issues)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Muneeb Ahmad from 🇵🇰

</div>
