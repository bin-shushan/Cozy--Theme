# Salla Theme Directory Structure

This document outlines the **exact** directory structure as required by [Salla's official documentation](https://docs.salla.dev/845945f0).

## ⚠️ IMPORTANT

This structure **MUST** be followed exactly as specified. Any deviation may result in theme rejection during the review process.

## 📁 Complete Directory Structure

```
[root]
│
├── src/
│   ├── assets/
│   │   ├── images/              # Theme images and assets
│   │   ├── js/
│   │   │   └── app.js          # Main JavaScript file
│   │   └── styles/
│   │       └── app.css         # Main stylesheet
│   │
│   ├── locales/
│   │   ├── ar.json             # Arabic translations
│   │   └── en.json             # English translations
│   │
│   └── views/
│       ├── components/
│       │   ├── footer/
│       │   │   ├── bottom.twig    # Footer bottom section
│       │   │   └── links.twig     # Footer links section
│       │   ├── header/
│       │   │   ├── main.twig      # Main header section
│       │   │   ├── nav.twig       # Navigation menu
│       │   │   └── top.twig       # Top header bar
│       │   ├── home/
│       │   │   └── (home-specific components)
│       │   ├── product/
│       │   │   └── card.twig      # Product card component
│       │   └── comments.twig      # Comments component
│       │
│       ├── layouts/
│       │   └── master.twig        # Master layout template
│       │
│       └── pages/
│           ├── blog/
│           │   ├── index.twig     # Blog listing page
│           │   └── single.twig    # Single blog post page
│           │
│           ├── brands/
│           │   ├── index.twig     # Brands listing page
│           │   └── single.twig    # Single brand page
│           │
│           ├── customer/
│           │   ├── notifications.twig  # Customer notifications
│           │   ├── profile.twig        # Customer profile
│           │   └── wishlist.twig       # Customer wishlist
│           │
│           ├── orders/
│           │   ├── index.twig     # Orders listing
│           │   └── single.twig    # Single order details
│           │
│           ├── product/
│           │   ├── index.twig     # Products listing page
│           │   └── single.twig    # Single product page
│           │
│           ├── cart.twig          # Shopping cart page
│           ├── index.twig         # Homepage (NOT home.twig!)
│           ├── loyalty.twig       # Loyalty program page
│           ├── page-single.twig   # Single page template
│           └── thank-you.twig     # Order thank you page
│
├── theme.json                     # Theme configuration
├── package.json                   # Node.js dependencies
└── .gitignore                     # Git ignore rules
```

## 🔑 Key Points

### 1. Homepage File Name
- ✅ **CORRECT:** `src/views/pages/index.twig`
- ❌ **WRONG:** `src/views/pages/home.twig`

### 2. Products Listing
- ✅ **CORRECT:** `src/views/pages/product/index.twig`
- ❌ **WRONG:** `src/views/pages/products.twig`

### 3. Single Product Page
- ✅ **CORRECT:** `src/views/pages/product/single.twig`
- ❌ **WRONG:** `src/views/pages/product-single.twig`

### 4. Component Structure
Components should be organized in subdirectories:
- ✅ **CORRECT:** `src/views/components/product/card.twig`
- ❌ **WRONG:** `src/views/components/product-card.twig`

### 5. Header/Footer Components
- ✅ **CORRECT:** `src/views/components/header/main.twig`
- ❌ **WRONG:** `src/views/components/header-main.twig`

## 📋 Required Files

### Essential Pages (Must Have)
1. `src/views/pages/index.twig` - Homepage
2. `src/views/pages/cart.twig` - Shopping cart
3. `src/views/pages/product/index.twig` - Products listing
4. `src/views/pages/product/single.twig` - Product details
5. `src/views/pages/thank-you.twig` - Order confirmation
6. `src/views/layouts/master.twig` - Master layout

### Customer Pages
1. `src/views/pages/customer/profile.twig`
2. `src/views/pages/customer/wishlist.twig`
3. `src/views/pages/customer/notifications.twig`

### Order Pages
1. `src/views/pages/orders/index.twig` - Orders list
2. `src/views/pages/orders/single.twig` - Order details

### Blog Pages
1. `src/views/pages/blog/index.twig` - Blog listing
2. `src/views/pages/blog/single.twig` - Blog post

### Brand Pages
1. `src/views/pages/brands/index.twig` - Brands listing
2. `src/views/pages/brands/single.twig` - Brand details

### Other Required Pages
1. `src/views/pages/loyalty.twig` - Loyalty program
2. `src/views/pages/page-single.twig` - Static pages

## 🎯 Component Includes

### In Twig Templates

When including components, use dot notation:

```twig
{# Product card #}
{% include 'components.product.card' with {product: product} %}

{# Header sections #}
{% include 'components.header.top' %}
{% include 'components.header.main' %}
{% include 'components.header.nav' %}

{# Footer sections #}
{% include 'components.footer.links' %}
{% include 'components.footer.bottom' %}

{# Comments #}
{% include 'components.comments' with {item: post} %}
```

## 📝 Localization Files

Both language files are **required**:

1. `src/locales/ar.json` - Arabic translations
2. `src/locales/en.json` - English translations

## 🎨 Assets Organization

```
src/assets/
├── images/          # Theme images
├── js/
│   └── app.js      # Main JavaScript (required)
└── styles/
    └── app.css     # Main stylesheet (required)
```

## ⚙️ Configuration Files

### theme.json (Root Level)
Contains theme metadata, settings, and configuration.

### package.json (Root Level)
Contains Node.js dependencies and scripts.

## 🚫 Common Mistakes to Avoid

1. ❌ Using `home.twig` instead of `index.twig` for homepage
2. ❌ Flat component structure instead of subdirectories
3. ❌ Wrong file naming (hyphens vs. subdirectories)
4. ❌ Missing required pages
5. ❌ Incorrect include paths in Twig templates
6. ❌ Missing localization files

## ✅ Verification Checklist

Before submitting your theme, verify:

- [ ] Homepage is named `index.twig` (not `home.twig`)
- [ ] Product pages are in `product/` subdirectory
- [ ] Components are organized in subdirectories (header/, footer/, product/)
- [ ] All required pages exist
- [ ] Both `ar.json` and `en.json` localization files exist
- [ ] `theme.json` is in root directory
- [ ] `master.twig` is in layouts directory
- [ ] Include paths use dot notation correctly
- [ ] No old/duplicate files exist

## 📚 Official Reference

This structure is based on the official Salla documentation:
- [Files and Folders Structure](https://docs.salla.dev/845945f0)

## 🎯 Current Project Structure Status

✅ All files are now correctly structured according to Salla's requirements.

## 📞 Need Help?

If you have questions about the structure:
1. Check [official documentation](https://docs.salla.dev/845945f0)
2. Join [Telegram community](https://t.me/salladev)
3. Review this STRUCTURE.md file

---

**Remember:** Following this structure exactly is **critical** for theme approval!


