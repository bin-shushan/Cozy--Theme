# Quick Start Guide - Salla Theme Development

This is a quick reference guide to get you started with your Salla theme development based on the Twilight framework.

## 🚀 5-Minute Setup

### Step 1: Install Salla CLI
```bash
npm install -g @salla.sa/cli
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Login to Salla
```bash
salla login
```

### Step 4: Link to Your Store
```bash
salla theme link
```

### Step 5: Start Development
```bash
npm run dev
```

That's it! Your theme is now running locally.

## 📝 Essential Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run publish` | Publish theme to marketplace |
| `salla theme link` | Link theme to store |
| `salla login` | Login to Salla account |

## 📂 Key Files to Edit

### 1. Theme Configuration
**File:** `theme.json`
- Update theme name, description
- Change colors and fonts
- Add features list

### 2. Main Layout
**File:** `src/views/layouts/master.twig`
- Modify overall HTML structure
- Update meta tags
- Change header/footer includes

### 3. Homepage
**File:** `src/views/pages/home.twig`
- Edit homepage sections
- Add/remove components
- Customize layout

### 4. Styles
**File:** `src/assets/styles/app.css`
- Change colors (CSS variables)
- Modify spacing
- Update fonts

### 5. JavaScript
**File:** `src/assets/js/app.js`
- Add custom functionality
- Handle Salla events
- Initialize components

## 🎨 Quick Customizations

### Change Colors
Edit `src/assets/styles/app.css`:
```css
:root {
  --color-primary: #YOUR_COLOR;
  --color-secondary: #YOUR_COLOR;
}
```

### Change Fonts
Edit `src/assets/styles/app.css`:
```css
:root {
  --font-primary: 'Your Font', sans-serif;
}
```

Update `src/views/layouts/master.twig` to include your font:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Add Custom Page
1. Create file: `src/views/pages/my-page.twig`
2. Extend master layout:
```twig
{% extends "layouts/master" %}

{% block content %}
  <h1>My Custom Page</h1>
{% endblock %}
```

## 🧩 Common Twig Snippets

### Display Product
```twig
{% include 'components.product-card' with {product: product} %}
```

### Loop Through Products
```twig
{% for product in products %}
  {{ product.name }}
{% endfor %}
```

### Check Condition
```twig
{% if product.is_on_sale %}
  <span class="sale">Sale!</span>
{% endif %}
```

### Format Price
```twig
{{ product.price|money }}
```

### Translate Text
```twig
{{ trans('common.add_to_cart') }}
```

## 🛠️ Common Salla Components

### Add to Cart Button
```html
<salla-button-add-to-cart 
  product-id="{{ product.id }}">
</salla-button-add-to-cart>
```

### Wishlist Button
```html
<salla-button-wishlist 
  product-id="{{ product.id }}">
</salla-button-wishlist>
```

### Rating Display
```html
<salla-rating 
  rating="{{ product.rating }}" 
  reviews-count="{{ product.reviews_count }}">
</salla-rating>
```

### Search Bar
```html
<salla-search-bar></salla-search-bar>
```

## 🎯 Common JavaScript Events

### Listen to Cart Events
```javascript
Salla.event.on('cart::item-added', (response) => {
  // Item added to cart
});
```

### Open Cart Drawer
```javascript
Salla.event.emit('cart-drawer::open');
```

### Show Notification
```javascript
Salla.notify.success('Success message');
```

## 📦 Project Structure Overview

```
├── src/
│   ├── assets/
│   │   ├── styles/app.css     ← Edit styles here
│   │   └── js/app.js          ← Edit JavaScript here
│   └── views/
│       ├── layouts/
│       │   └── master.twig    ← Main layout
│       ├── pages/
│       │   ├── home.twig      ← Homepage
│       │   ├── cart.twig      ← Cart page
│       │   └── products.twig  ← Products page
│       ├── partials/
│       │   ├── header.twig    ← Header
│       │   └── footer.twig    ← Footer
│       └── components/
│           └── product-card.twig  ← Product card
├── theme.json                  ← Theme config
└── package.json               ← Dependencies
```

## ✅ Pre-Publishing Checklist

- [ ] Test on mobile devices
- [ ] Test RTL (Arabic) layout
- [ ] Check all pages load correctly
- [ ] Verify cart functionality
- [ ] Test product quick view
- [ ] Check wishlist works
- [ ] Test search functionality
- [ ] Add theme screenshots
- [ ] Update theme.json information
- [ ] Test in different browsers
- [ ] Check console for errors
- [ ] Optimize images

## 🆘 Troubleshooting

### Theme not loading?
```bash
salla login
salla theme link
```

### Changes not appearing?
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Restart dev server

### Component not working?
- Check browser console for errors
- Ensure `{{ twilight.head }}` is in `<head>`
- Ensure `{{ twilight.footer }}` is before `</body>`

## 📚 Learn More

- **Full Documentation:** See `README.md`
- **Development Guide:** See `DEVELOPMENT_GUIDE.md`
- **Official Docs:** [https://docs.salla.dev/](https://docs.salla.dev/)
- **Twilight Guide:** [https://salla.dev/blog/all-in-one-twilight-guide-for-salla-developers/](https://salla.dev/blog/all-in-one-twilight-guide-for-salla-developers/)
- **Community:** [Telegram](https://t.me/salladev)

## 🎉 Next Steps

1. Customize colors and fonts
2. Edit homepage layout
3. Add your branding
4. Create custom components
5. Test thoroughly
6. Publish to marketplace

---

**Need Help?** Join the [Salla Developer Community](https://t.me/salladev)


