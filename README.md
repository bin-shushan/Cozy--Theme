# My First Salla Theme

A modern, responsive, and feature-rich Salla theme built with the Twilight framework. This theme is designed to provide an exceptional eCommerce experience for Salla stores with full RTL support, multi-language capabilities, and optimized performance.

## 📋 Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Development](#development)
- [Theme Configuration](#theme-configuration)
- [Customization](#customization)
- [Deployment](#deployment)
- [Salla Twilight Documentation](#salla-twilight-documentation)
- [Support](#support)

## ✨ Features

- ✅ **Responsive Design** - Mobile-first approach with full responsive support
- ✅ **RTL Support** - Full right-to-left language support for Arabic
- ✅ **Multi-Language** - Support for multiple languages
- ✅ **SEO Optimized** - Built-in SEO best practices
- ✅ **Fast Loading** - Optimized assets and lazy loading
- ✅ **Product Quick View** - View product details without leaving the page
- ✅ **Wishlist** - Save favorite products for later
- ✅ **Cart Drawer** - Slide-out cart for quick access
- ✅ **Search Autocomplete** - Smart search with suggestions
- ✅ **Product Reviews** - Customer reviews and ratings
- ✅ **Social Sharing** - Share products on social media
- ✅ **Modern UI Components** - Built with Salla Web Components
- ✅ **Customizable** - Easy to customize colors, fonts, and layout

## 📦 Requirements

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** or **yarn**
- **Salla CLI** - Install globally: `npm install -g @salla.sa/cli`
- **Salla Partner Account** - Register at [Salla Partners Portal](https://salla.partners)

## 🚀 Installation

### 1. Clone or Download the Theme

```bash
# If using Git
git clone <repository-url>
cd my-first-salla-theme

# Or download and extract the ZIP file
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Link to Your Salla Store

```bash
salla theme link
```

Follow the prompts to authenticate and select your store.

### 4. Start Development Server

```bash
npm run dev
# or
salla theme serve
```

Your theme will be available at the local development URL provided by Salla CLI.

## 📁 Project Structure

```
my-first-salla-theme/
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   └── app.css          # Main stylesheet
│   │   └── js/
│   │       └── app.js           # Main JavaScript file
│   └── views/
│       ├── layouts/
│       │   └── master.twig      # Main layout template
│       ├── pages/
│       │   ├── home.twig        # Homepage
│       │   ├── cart.twig        # Cart page
│       │   ├── products.twig    # Products listing
│       │   └── product/
│       │       └── single.twig  # Single product page
│       ├── partials/
│       │   ├── header.twig      # Header component
│       │   └── footer.twig      # Footer component
│       └── components/
│           ├── product-card.twig # Product card component
│           └── blog-card.twig    # Blog card component
├── theme.json                    # Theme configuration
├── package.json                  # Node.js dependencies
├── .gitignore                    # Git ignore rules
└── README.md                     # This file
```

## 🛠️ Development

### Available Commands

- **Start Development Server**
  ```bash
  npm run dev
  ```

- **Build for Production**
  ```bash
  npm run build
  ```

- **Publish Theme**
  ```bash
  npm run publish
  ```

### Development Workflow

1. **Make Changes** - Edit Twig templates, CSS, or JavaScript files
2. **Preview** - Changes will be automatically reflected in your development store
3. **Test** - Test all features thoroughly on different devices
4. **Build** - Run the build command to prepare for production
5. **Publish** - Publish to Salla Theme Marketplace

### Hot Reload

The Salla CLI provides hot reload functionality. Any changes you make to your theme files will be automatically reflected in your browser.

## ⚙️ Theme Configuration

### Basic Configuration

Edit `theme.json` to configure your theme:

```json
{
  "name": "My First Salla Theme",
  "version": "1.0.0",
  "description": "A modern and responsive Salla theme",
  "author": {
    "name": "Your Name",
    "email": "your.email@example.com"
  }
}
```

### Color Customization

Colors can be customized in `src/assets/styles/app.css`:

```css
:root {
  --color-primary: #4A90E2;
  --color-secondary: #7B68EE;
  --color-success: #28a745;
  --color-danger: #dc3545;
}
```

### Font Customization

Update fonts in the CSS variables:

```css
:root {
  --font-primary: 'Cairo', sans-serif;
  --font-secondary: 'Roboto', sans-serif;
}
```

## 🎨 Customization

### Adding New Pages

1. Create a new Twig file in `src/views/pages/`
2. Extend the master layout: `{% extends "layouts/master" %}`
3. Add your content in the content block

Example:

```twig
{% extends "layouts/master" %}

{% block content %}
  <div class="custom-page">
    <h1>My Custom Page</h1>
    <!-- Your content here -->
  </div>
{% endblock %}
```

### Creating Custom Components

1. Create a new Twig file in `src/views/components/`
2. Include it in your pages: `{% include 'components.your-component' %}`

### Styling

All styles are in `src/assets/styles/app.css`. The theme uses CSS variables for easy customization.

### JavaScript Functionality

Add custom JavaScript in `src/assets/js/app.js`. The theme uses the Salla SDK for storefront functionality.

## 🚢 Deployment

### Before Publishing

1. ✅ Test all pages and features
2. ✅ Check responsive design on multiple devices
3. ✅ Verify RTL layout for Arabic
4. ✅ Test on different browsers
5. ✅ Optimize images and assets
6. ✅ Update theme.json with correct information
7. ✅ Add screenshots in `images/screenshots/`
8. ✅ Update version number

### Publishing to Salla Marketplace

1. **Build the Theme**
   ```bash
   npm run build
   ```

2. **Publish**
   ```bash
   npm run publish
   ```

3. **Follow the CLI prompts** to complete the publishing process

4. **Submit for Review** - Your theme will be reviewed by Salla team

### Theme Screenshots

Add the following screenshots to `images/screenshots/`:
- `home.png` - Homepage screenshot
- `product.png` - Product page screenshot
- `cart.png` - Cart page screenshot
- `checkout.png` - Checkout page screenshot

Also add a `thumbnail.png` in the `images/` directory (recommended size: 600x400px).

## 📚 Salla Twilight Documentation

For comprehensive documentation on Salla Twilight, visit:

- **Main Documentation**: [https://docs.salla.dev/](https://docs.salla.dev/)
- **Twilight Guide**: [https://salla.dev/blog/all-in-one-twilight-guide-for-salla-developers/](https://salla.dev/blog/all-in-one-twilight-guide-for-salla-developers/)
- **Getting Started**: [https://docs.salla.dev/twilight/getting-started](https://docs.salla.dev/twilight/getting-started)
- **Theme Architecture**: [https://docs.salla.dev/twilight/theme-architecture](https://docs.salla.dev/twilight/theme-architecture)
- **Twig Templates**: [https://docs.salla.dev/twilight/twig](https://docs.salla.dev/twilight/twig)
- **Web Components**: [https://docs.salla.dev/twilight/components](https://docs.salla.dev/twilight/components)
- **JavaScript SDK**: [https://docs.salla.dev/twilight/js-sdk](https://docs.salla.dev/twilight/js-sdk)

### Key Documentation Sections

1. **Getting Started** - Create, develop, and publish themes
2. **Files and Folders** - Understanding theme structure
3. **Twig Templates** - Template engine syntax and filters
4. **Theme Architecture** - Layouts, pages, and components
5. **JS SDK** - JavaScript SDK for Salla APIs
6. **Web Components** - Pre-built UI components

## 🏗️ Theme Architecture

### Layouts

The theme uses a master layout (`src/views/layouts/master.twig`) that includes:
- HTML structure
- SEO meta tags
- CSS and JavaScript includes
- Header and footer
- Salla Web Components initialization

### Pages

Pages extend the master layout and define page-specific content:
- **Home** - Homepage with featured products, categories, and banners
- **Products** - Product listing with filters and sorting
- **Product Single** - Detailed product page
- **Cart** - Shopping cart page
- **Checkout** - Checkout process
- **Account** - Customer account pages

### Components

Reusable components for consistent UI:
- **Product Card** - Display product information
- **Blog Card** - Display blog post preview
- **Header** - Site header with navigation
- **Footer** - Site footer with links

### Salla Web Components

The theme uses Salla's pre-built web components:
- `<salla-button-add-to-cart>` - Add to cart functionality
- `<salla-button-wishlist>` - Wishlist functionality
- `<salla-cart-drawer>` - Slide-out cart
- `<salla-search>` - Search modal
- `<salla-product-quickview>` - Quick view modal
- And many more...

## 🔧 Troubleshooting

### Common Issues

**Issue: Theme not loading**
- Ensure you're logged in: `salla login`
- Check if theme is linked: `salla theme link`

**Issue: Changes not reflecting**
- Clear browser cache
- Restart development server
- Check console for errors

**Issue: Salla components not working**
- Ensure `{{ twilight.head }}` is in `<head>`
- Ensure `{{ twilight.footer }}` is before `</body>`
- Check JavaScript console for errors

## 💬 Support

For support and questions:

- **Salla Developers Community**: [Telegram](https://t.me/salladev)
- **Documentation**: [https://docs.salla.dev/](https://docs.salla.dev/)
- **Partners Portal**: [https://salla.partners](https://salla.partners)

## 📄 License

MIT License - Feel free to use this theme for your projects.

## 🙏 Acknowledgments

- Built with [Salla Twilight](https://salla.dev/)
- Uses [Twig](https://twig.symfony.com/) template engine
- Icons provided by Salla Icon Library

---

**Happy Theming! 🎉**

For more information, visit the [Salla Developers Portal](https://salla.dev/) or join the [Developer Community](https://t.me/salladev).


