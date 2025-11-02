# Salla Web Components Complete Guide

Comprehensive guide to all available Salla Web Components for Twilight themes.

**Official Documentation:** [https://docs.salla.dev/](https://docs.salla.dev/)

## 📦 Table of Contents

1. [Form Components](#form-components)
2. [Product Components](#product-components)
3. [Cart Components](#cart-components)
4. [User Components](#user-components)
5. [Layout Components](#layout-components)
6. [Interactive Components](#interactive-components)
7. [Utility Components](#utility-components)

---

## 🔧 Form Components

### `<salla-button>`
Generic button component with Salla styling.

```html
<salla-button 
  type="primary"
  size="lg"
  loading="false"
  disabled="false">
  Click Me
</salla-button>
```

**Attributes:**
- `type`: primary, secondary, success, danger, warning, info
- `size`: sm, md, lg
- `loading`: true/false
- `disabled`: true/false

### `<salla-input>`
Styled input field.

```html
<salla-input 
  type="text"
  name="email"
  placeholder="Enter your email"
  required="true">
</salla-input>
```

### `<salla-select>`
Dropdown select component.

```html
<salla-select 
  name="country"
  placeholder="Select country">
  <option value="SA">Saudi Arabia</option>
  <option value="AE">UAE</option>
</salla-select>
```

### `<salla-checkbox>`
Checkbox input.

```html
<salla-checkbox 
  name="terms"
  value="1"
  required="true">
  I agree to terms
</salla-checkbox>
```

### `<salla-radio>`
Radio button input.

```html
<salla-radio 
  name="payment_method"
  value="credit_card">
  Credit Card
</salla-radio>
```

### `<salla-textarea>`
Multi-line text input.

```html
<salla-textarea 
  name="message"
  rows="5"
  placeholder="Your message">
</salla-textarea>
```

---

## 🛍️ Product Components

### `<salla-product-card>`
Complete product card display.

```html
<salla-product-card 
  product-id="{{ product.id }}"
  show-quick-view="true"
  show-wishlist="true">
</salla-product-card>
```

### `<salla-product-gallery>`
Product images gallery with zoom and thumbnails.

```html
<salla-product-gallery 
  images='{{ product.images|json_encode }}'
  thumbnail-position="left"
  zoom="true">
</salla-product-gallery>
```

**Attributes:**
- `thumbnail-position`: left, right, bottom
- `zoom`: true/false

### `<salla-product-options>`
Product options selector (size, color, etc.).

```html
<salla-product-options 
  product-id="{{ product.id }}"
  options='{{ product.options|json_encode }}'>
</salla-product-options>
```

### `<salla-product-availability>`
Shows product availability status.

```html
<salla-product-availability 
  product-id="{{ product.id }}"
  product-status="{{ product.status }}">
</salla-product-availability>
```

### `<salla-product-price>`
Displays product price with formatting.

```html
<salla-product-price 
  regular-price="{{ product.regular_price }}"
  sale-price="{{ product.sale_price }}"
  is-on-sale="{{ product.is_on_sale }}">
</salla-product-price>
```

### `<salla-quantity-selector>`
Quantity input with +/- buttons.

```html
<salla-quantity-selector 
  value="1"
  min="1"
  max="{{ product.quantity }}"
  step="1">
</salla-quantity-selector>
```

### `<salla-button-add-to-cart>`
Add to cart button.

```html
<salla-button-add-to-cart 
  product-id="{{ product.id }}"
  product-status="{{ product.status }}"
  quantity="1">
  Add to Cart
</salla-button-add-to-cart>
```

### `<salla-button-quickview>`
Quick view button for products.

```html
<salla-button-quickview 
  product-id="{{ product.id }}">
  Quick View
</salla-button-quickview>
```

### `<salla-product-quickview>`
Quick view modal (place once in layout).

```html
<salla-product-quickview></salla-product-quickview>
```

### `<salla-products-slider>`
Products carousel/slider.

```html
<salla-products-slider 
  products='{{ products|json_encode }}'
  auto-play="true"
  interval="5000">
</salla-products-slider>
```

### `<salla-product-reviews>`
Product reviews section.

```html
<salla-product-reviews 
  product-id="{{ product.id }}"
  allow-review="true">
</salla-product-reviews>
```

### `<salla-product-questions>`
Product Q&A section.

```html
<salla-product-questions 
  product-id="{{ product.id }}">
</salla-product-questions>
```

---

## 🛒 Cart Components

### `<salla-cart-drawer>`
Slide-out cart (place once in layout).

```html
<salla-cart-drawer 
  position="right"
  auto-open="true">
</salla-cart-drawer>
```

### `<salla-cart-items>`
Cart items list.

```html
<salla-cart-items></salla-cart-items>
```

### `<salla-cart-empty>`
Empty cart message.

```html
<salla-cart-empty>
  <p>Your cart is empty</p>
</salla-cart-empty>
```

### `<salla-cart-subtotal>`
Cart subtotal display.

```html
<salla-cart-subtotal></salla-cart-subtotal>
```

### `<salla-cart-total>`
Cart total display.

```html
<salla-cart-total></salla-cart-total>
```

### `<salla-cart-shipping>`
Shipping cost display.

```html
<salla-cart-shipping></salla-cart-shipping>
```

### `<salla-cart-tax>`
Tax amount display.

```html
<salla-cart-tax></salla-cart-tax>
```

### `<salla-cart-discount>`
Discount display.

```html
<salla-cart-discount></salla-cart-discount>
```

### `<salla-coupon-form>`
Coupon code input.

```html
<salla-coupon-form 
  placeholder="Enter coupon code">
</salla-coupon-form>
```

### `<salla-button-checkout>`
Proceed to checkout button.

```html
<salla-button-checkout>
  Proceed to Checkout
</salla-button-checkout>
```

### `<salla-button-cart>`
Cart icon with item count.

```html
<salla-button-cart 
  show-count="true">
</salla-button-cart>
```

### `<salla-button-clear-cart>`
Clear cart button.

```html
<salla-button-clear-cart>
  Clear Cart
</salla-button-clear-cart>
```

---

## 👤 User Components

### `<salla-user-menu>`
User account dropdown menu.

```html
<salla-user-menu></salla-user-menu>
```

### `<salla-login-form>`
Customer login form.

```html
<salla-login-form 
  redirect-url="/profile">
</salla-login-form>
```

### `<salla-register-form>`
Customer registration form.

```html
<salla-register-form 
  redirect-url="/profile">
</salla-register-form>
```

### `<salla-profile-form>`
Profile edit form.

```html
<salla-profile-form></salla-profile-form>
```

### `<salla-password-form>`
Change password form.

```html
<salla-password-form></salla-password-form>
```

### `<salla-addresses-list>`
Customer addresses list.

```html
<salla-addresses-list 
  allow-add="true"
  allow-edit="true"
  allow-delete="true">
</salla-addresses-list>
```

### `<salla-button-wishlist>`
Wishlist toggle button.

```html
<salla-button-wishlist 
  product-id="{{ product.id }}"
  show-count="false">
</salla-button-wishlist>
```

### `<salla-wishlist-items>`
Wishlist items display.

```html
<salla-wishlist-items></salla-wishlist-items>
```

### `<salla-notifications-list>`
User notifications.

```html
<salla-notifications-list 
  mark-as-read="true">
</salla-notifications-list>
```

---

## 🎨 Layout Components

### `<salla-main-menu>`
Main navigation menu.

```html
<salla-main-menu 
  style="horizontal"
  show-icons="true">
</salla-main-menu>
```

**Attributes:**
- `style`: horizontal, vertical
- `show-icons`: true/false

### `<salla-mobile-menu>`
Mobile navigation menu.

```html
<salla-mobile-menu 
  position="left">
</salla-mobile-menu>
```

### `<salla-breadcrumb>`
Breadcrumb navigation.

```html
<salla-breadcrumb 
  separator="/"
  show-home="true">
</salla-breadcrumb>
```

### `<salla-pagination>`
Page navigation.

```html
<salla-pagination 
  total="{{ products.total }}"
  per-page="{{ products.per_page }}"
  current-page="{{ products.current_page }}"
  show-numbers="true">
</salla-pagination>
```

### `<salla-footer>`
Footer section.

```html
<salla-footer></salla-footer>
```

---

## 🔍 Interactive Components

### `<salla-search>`
Search modal (place once in layout).

```html
<salla-search 
  placeholder="Search products..."
  show-suggestions="true">
</salla-search>
```

### `<salla-search-bar>`
Search input bar.

```html
<salla-search-bar 
  placeholder="Search..."
  show-button="true"
  autocomplete="true">
</salla-search-bar>
```

### `<salla-filter-categories>`
Category filter.

```html
<salla-filter-categories 
  style="list"
  show-count="true">
</salla-filter-categories>
```

### `<salla-filter-price>`
Price range filter.

```html
<salla-filter-price 
  min="{{ products.min_price }}"
  max="{{ products.max_price }}">
</salla-filter-price>
```

### `<salla-filter-brands>`
Brand filter.

```html
<salla-filter-brands 
  show-search="true"
  show-count="true">
</salla-filter-brands>
```

### `<salla-filter-rating>`
Rating filter.

```html
<salla-filter-rating 
  min-rating="1">
</salla-filter-rating>
```

### `<salla-products-sorter>`
Products sorting dropdown.

```html
<salla-products-sorter 
  options="price-asc,price-desc,name,date">
</salla-products-sorter>
```

### `<salla-button-clear-filters>`
Clear all filters button.

```html
<salla-button-clear-filters>
  Clear Filters
</salla-button-clear-filters>
```

### `<salla-active-filters>`
Display active filters.

```html
<salla-active-filters 
  allow-remove="true">
</salla-active-filters>
```

### `<salla-slider>`
Generic content slider.

```html
<salla-slider 
  auto-play="true"
  interval="5000"
  show-arrows="true"
  show-dots="true">
  <salla-slider-item>Content 1</salla-slider-item>
  <salla-slider-item>Content 2</salla-slider-item>
</salla-slider>
```

### `<salla-tabs>`
Tabbed content.

```html
<salla-tabs>
  <salla-tab-panel label="Tab 1">
    Content 1
  </salla-tab-panel>
  <salla-tab-panel label="Tab 2">
    Content 2
  </salla-tab-panel>
</salla-tabs>
```

### `<salla-modal>`
Modal dialog.

```html
<salla-modal 
  id="my-modal"
  size="md"
  show-close="true">
  <div slot="header">Modal Title</div>
  <div slot="body">Modal Content</div>
  <div slot="footer">Modal Footer</div>
</salla-modal>
```

---

## 🛠️ Utility Components

### `<salla-icon>`
Icon display.

```html
<salla-icon 
  name="shopping-cart"
  size="24"
  color="#000">
</salla-icon>
```

**Common Icons:**
- shopping-cart, heart, user, search, menu
- eye, trash, edit, check, close
- arrow-left, arrow-right, arrow-up, arrow-down
- star, star-filled, bell, calendar
- facebook, twitter, instagram, youtube

### `<salla-rating>`
Star rating display.

```html
<salla-rating 
  rating="{{ product.rating }}"
  reviews-count="{{ product.reviews_count }}"
  size="md"
  interactive="false">
</salla-rating>
```

### `<salla-badge>`
Badge/label component.

```html
<salla-badge 
  type="success"
  size="md">
  New
</salla-badge>
```

### `<salla-loading>`
Loading spinner.

```html
<salla-loading 
  size="md"
  text="Loading...">
</salla-loading>
```

### `<salla-social-share>`
Social media sharing buttons.

```html
<salla-social-share 
  url="{{ product.url }}"
  title="{{ product.name }}"
  image="{{ product.image }}"
  platforms="facebook,twitter,whatsapp,pinterest">
</salla-social-share>
```

### `<salla-social-links>`
Social media links.

```html
<salla-social-links 
  style="icons"
  size="md"
  color="primary">
</salla-social-links>
```

### `<salla-localization-selector>`
Language and currency switcher.

```html
<salla-localization-selector 
  show-flags="true"
  style="dropdown">
</salla-localization-selector>
```

### `<salla-payment-methods>`
Payment methods display.

```html
<salla-payment-methods 
  show-logos="true">
</salla-payment-methods>
```

### `<salla-newsletter-form>`
Newsletter subscription form.

```html
<salla-newsletter-form 
  placeholder="Enter your email"
  button-text="Subscribe">
</salla-newsletter-form>
```

### `<salla-comment-form>`
Comment submission form.

```html
<salla-comment-form 
  item-id="{{ product.id }}"
  item-type="product">
</salla-comment-form>
```

### `<salla-loyalty-program>`
Loyalty program display.

```html
<salla-loyalty-program 
  show-points="true"
  show-rewards="true">
</salla-loyalty-program>
```

---

## 📋 Usage Best Practices

### 1. Always Include in Master Layout
```twig
{# In <head> #}
{{ twilight.head }}

{# Before </body> #}
{{ twilight.footer }}
```

### 2. Component Initialization
Components are automatically initialized when the Salla SDK loads.

### 3. Custom Styling
```css
/* Override component styles */
salla-button-add-to-cart {
  --button-bg: #4A90E2;
  --button-color: #fff;
  --button-hover-bg: #3a7bc8;
}
```

### 4. Event Handling
```javascript
// Listen to component events
Salla.event.on('cart::item-added', (data) => {
  console.log('Item added:', data);
});
```

### 5. Conditional Display
```twig
{% if product.has_options %}
  <salla-product-options 
    product-id="{{ product.id }}">
  </salla-product-options>
{% endif %}
```

---

## 🔗 Resources

- **Official Documentation:** [https://docs.salla.dev/](https://docs.salla.dev/)
- **Web Components Guide:** [https://docs.salla.dev/](https://docs.salla.dev/)
- **Twilight SDK:** [https://docs.salla.dev/422610m0](https://docs.salla.dev/422610m0)
- **Developer Community:** [https://t.me/salladev](https://t.me/salladev)

---

**Note:** This guide is based on the latest Salla Twilight documentation. Always refer to the official documentation for the most up-to-date information.


