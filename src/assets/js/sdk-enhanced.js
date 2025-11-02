/**
 * Salla Twilight SDK - Enhanced Implementation
 * Complete API coverage based on official documentation
 * @see https://docs.salla.dev/422610m0
 */

import { Salla } from '@salla.sa/twilight';

/**
 * Initialize Salla SDK
 */
Salla.onReady(() => {
  console.log('🚀 Salla SDK Initialized');
  
  // Initialize all modules
  initAuth();
  initCart();
  initWishlist();
  initProduct();
  initSearch();
  initComments();
  initRating();
  initLoyalty();
  initBooking();
  initProfile();
  initOrder();
  initCurrency();
  initNotifications();
  initAnalytics();
});

/**
 * ==========================================
 * AUTHORIZATION APIs
 * ==========================================
 * Handle customer authentication
 * @see https://docs.salla.dev/422610m0
 */
function initAuth() {
  // Login event
  Salla.event.on('auth::login', (customer) => {
    console.log('Customer logged in:', customer);
    Salla.notify.success(window.trans('auth.login_success'));
  });

  // Logout event
  Salla.event.on('auth::logout', () => {
    console.log('Customer logged out');
    Salla.notify.info(window.trans('auth.logout_success'));
  });

  // Register event
  Salla.event.on('auth::register', (customer) => {
    console.log('Customer registered:', customer);
    Salla.notify.success(window.trans('auth.register_success'));
  });

  // Authentication error
  Salla.event.on('auth::error', (error) => {
    console.error('Auth error:', error);
    Salla.notify.error(error.message);
  });
}

/**
 * ==========================================
 * CART APIs
 * ==========================================
 * Manage shopping cart operations
 * @see https://docs.salla.dev/422610m0
 */
function initCart() {
  // Add item to cart
  Salla.event.on('cart::item-added', (response) => {
    console.log('Item added to cart:', response);
    Salla.notify.success(window.trans('cart.item_added'));
    
    // Open cart drawer
    Salla.event.emit('cart-drawer::open');
    
    // Update cart count
    updateCartCount(response.cart.items_count);
  });

  // Remove item from cart
  Salla.event.on('cart::item-removed', (response) => {
    console.log('Item removed from cart:', response);
    Salla.notify.success(window.trans('cart.item_removed'));
    updateCartCount(response.cart.items_count);
  });

  // Update cart item
  Salla.event.on('cart::item-updated', (response) => {
    console.log('Cart item updated:', response);
    updateCartCount(response.cart.items_count);
  });

  // Cart updated
  Salla.event.on('cart::updated', (cart) => {
    console.log('Cart updated:', cart);
    updateCartCount(cart.items_count);
  });

  // Clear cart
  Salla.event.on('cart::cleared', () => {
    console.log('Cart cleared');
    Salla.notify.success(window.trans('cart.cleared'));
    updateCartCount(0);
  });

  // Coupon applied
  Salla.event.on('cart::coupon-applied', (response) => {
    console.log('Coupon applied:', response);
    Salla.notify.success(window.trans('cart.coupon_applied'));
  });

  // Coupon removed
  Salla.event.on('cart::coupon-removed', () => {
    console.log('Coupon removed');
    Salla.notify.info(window.trans('cart.coupon_removed'));
  });
}

/**
 * ==========================================
 * WISHLIST APIs
 * ==========================================
 * Handle wishlist operations
 * @see https://docs.salla.dev/422610m0
 */
function initWishlist() {
  // Add to wishlist
  Salla.event.on('wishlist::item-added', (response) => {
    console.log('Item added to wishlist:', response);
    Salla.notify.success(window.trans('wishlist.item_added'));
    updateWishlistCount(response.count);
  });

  // Remove from wishlist
  Salla.event.on('wishlist::item-removed', (response) => {
    console.log('Item removed from wishlist:', response);
    Salla.notify.success(window.trans('wishlist.item_removed'));
    updateWishlistCount(response.count);
  });

  // Wishlist updated
  Salla.event.on('wishlist::updated', (wishlist) => {
    console.log('Wishlist updated:', wishlist);
    updateWishlistCount(wishlist.items_count);
  });
}

/**
 * ==========================================
 * PRODUCT APIs
 * ==========================================
 * Handle product-related operations
 * @see https://docs.salla.dev/422610m0
 */
function initProduct() {
  // Product quick view
  Salla.event.on('product::quick-view', (product) => {
    console.log('Product quick view opened:', product);
  });

  // Product options changed
  Salla.event.on('product::options-changed', (data) => {
    console.log('Product options changed:', data);
  });

  // Product availability check
  Salla.event.on('product::availability-checked', (data) => {
    console.log('Product availability checked:', data);
  });
}

/**
 * ==========================================
 * SEARCH APIs
 * ==========================================
 * Handle search functionality
 * @see https://docs.salla.dev/422610m0
 */
function initSearch() {
  const searchInput = document.querySelector('[data-search-input]');
  
  if (searchInput) {
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      
      searchTimeout = setTimeout(() => {
        const query = e.target.value;
        
        if (query.length >= 3) {
          performSearch(query);
        }
      }, 300);
    });
  }

  // Search completed
  Salla.event.on('search::completed', (results) => {
    console.log('Search completed:', results);
    displaySearchResults(results);
  });
}

/**
 * Perform search with autocomplete
 * @param {string} query 
 */
function performSearch(query) {
  Salla.search.query(query)
    .then(results => {
      console.log('Search results:', results);
      displaySearchResults(results);
    })
    .catch(error => {
      console.error('Search error:', error);
    });
}

/**
 * ==========================================
 * COMMENTS APIs
 * ==========================================
 * Handle comments/reviews
 * @see https://docs.salla.dev/422610m0
 */
function initComments() {
  // Comment submitted
  Salla.event.on('comment::submitted', (response) => {
    console.log('Comment submitted:', response);
    Salla.notify.success(window.trans('comment.submitted'));
  });

  // Comment updated
  Salla.event.on('comment::updated', (response) => {
    console.log('Comment updated:', response);
    Salla.notify.success(window.trans('comment.updated'));
  });

  // Comment deleted
  Salla.event.on('comment::deleted', () => {
    console.log('Comment deleted');
    Salla.notify.success(window.trans('comment.deleted'));
  });
}

/**
 * ==========================================
 * RATING APIs
 * ==========================================
 * Handle ratings for products, orders, etc.
 * @see https://docs.salla.dev/422610m0
 */
function initRating() {
  // Rating submitted
  Salla.event.on('rating::submitted', (response) => {
    console.log('Rating submitted:', response);
    Salla.notify.success(window.trans('rating.submitted'));
  });

  // Product reviewed
  Salla.event.on('review::submitted', (response) => {
    console.log('Review submitted:', response);
    Salla.notify.success(window.trans('review.submitted'));
  });
}

/**
 * ==========================================
 * LOYALTY APIs
 * ==========================================
 * Handle loyalty program
 * @see https://docs.salla.dev/422610m0
 */
function initLoyalty() {
  // Points earned
  Salla.event.on('loyalty::points-earned', (points) => {
    console.log('Points earned:', points);
    Salla.notify.success(window.trans('loyalty.points_earned', {points}));
  });

  // Points redeemed
  Salla.event.on('loyalty::points-redeemed', (points) => {
    console.log('Points redeemed:', points);
    Salla.notify.success(window.trans('loyalty.points_redeemed', {points}));
  });
}

/**
 * ==========================================
 * BOOKING APIs
 * ==========================================
 * Handle product/service bookings
 * @see https://docs.salla.dev/422610m0
 */
function initBooking() {
  // Booking created
  Salla.event.on('booking::created', (booking) => {
    console.log('Booking created:', booking);
    Salla.notify.success(window.trans('booking.created'));
  });

  // Booking updated
  Salla.event.on('booking::updated', (booking) => {
    console.log('Booking updated:', booking);
    Salla.notify.success(window.trans('booking.updated'));
  });

  // Booking cancelled
  Salla.event.on('booking::cancelled', () => {
    console.log('Booking cancelled');
    Salla.notify.info(window.trans('booking.cancelled'));
  });
}

/**
 * ==========================================
 * PROFILE APIs
 * ==========================================
 * Handle customer profile
 * @see https://docs.salla.dev/422610m0
 */
function initProfile() {
  // Profile updated
  Salla.event.on('profile::updated', (profile) => {
    console.log('Profile updated:', profile);
    Salla.notify.success(window.trans('profile.updated'));
  });

  // Password changed
  Salla.event.on('profile::password-changed', () => {
    console.log('Password changed');
    Salla.notify.success(window.trans('profile.password_changed'));
  });

  // Address added
  Salla.event.on('profile::address-added', (address) => {
    console.log('Address added:', address);
    Salla.notify.success(window.trans('profile.address_added'));
  });

  // Address updated
  Salla.event.on('profile::address-updated', (address) => {
    console.log('Address updated:', address);
    Salla.notify.success(window.trans('profile.address_updated'));
  });

  // Address deleted
  Salla.event.on('profile::address-deleted', () => {
    console.log('Address deleted');
    Salla.notify.success(window.trans('profile.address_deleted'));
  });
}

/**
 * ==========================================
 * ORDER APIs
 * ==========================================
 * Handle orders
 * @see https://docs.salla.dev/422610m0
 */
function initOrder() {
  // Order created
  Salla.event.on('order::created', (order) => {
    console.log('Order created:', order);
    // Track with analytics
    trackOrderCreated(order);
  });

  // Order updated
  Salla.event.on('order::updated', (order) => {
    console.log('Order updated:', order);
  });

  // Order cancelled
  Salla.event.on('order::cancelled', (order) => {
    console.log('Order cancelled:', order);
    Salla.notify.info(window.trans('order.cancelled'));
  });
}

/**
 * ==========================================
 * CURRENCY APIs
 * ==========================================
 * Handle currency switching
 * @see https://docs.salla.dev/422610m0
 */
function initCurrency() {
  // Currency changed
  Salla.event.on('currency::changed', (currency) => {
    console.log('Currency changed:', currency);
    // Reload page to update prices
    window.location.reload();
  });
}

/**
 * ==========================================
 * NOTIFICATIONS
 * ==========================================
 * Handle system notifications
 */
function initNotifications() {
  // Newsletter subscribed
  Salla.event.on('newsletter::subscribed', (response) => {
    console.log('Newsletter subscribed:', response);
    Salla.notify.success(window.trans('newsletter.subscribed'));
  });

  // Notification read
  Salla.event.on('notification::read', (notification) => {
    console.log('Notification read:', notification);
  });
}

/**
 * ==========================================
 * ANALYTICS & TRACKING
 * ==========================================
 * Track important events
 */
function initAnalytics() {
  // Track page views
  trackPageView();
  
  // Track product views
  if (window.product) {
    trackProductView(window.product);
  }
}

/**
 * ==========================================
 * UTILITY FUNCTIONS
 * ==========================================
 */

function updateCartCount(count) {
  const cartBadges = document.querySelectorAll('[data-cart-count]');
  cartBadges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'block' : 'none';
  });
}

function updateWishlistCount(count) {
  const wishlistBadges = document.querySelectorAll('[data-wishlist-count]');
  wishlistBadges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'block' : 'none';
  });
}

function displaySearchResults(results) {
  // Implement search results display
  console.log('Displaying search results:', results);
}

function trackPageView() {
  // Implement page view tracking
  if (window.gtag) {
    gtag('config', 'GA_MEASUREMENT_ID', {
      'page_path': window.location.pathname
    });
  }
}

function trackProductView(product) {
  // Implement product view tracking
  if (window.gtag) {
    gtag('event', 'view_item', {
      items: [{
        id: product.id,
        name: product.name,
        price: product.price
      }]
    });
  }
}

function trackOrderCreated(order) {
  // Implement order tracking
  if (window.gtag) {
    gtag('event', 'purchase', {
      transaction_id: order.id,
      value: order.total,
      currency: order.currency,
      items: order.items
    });
  }
}

/**
 * ==========================================
 * ERROR HANDLING
 * ==========================================
 */
Salla.event.on('error', (error) => {
  console.error('Salla error:', error);
  
  // Display user-friendly error message
  const message = error.message || window.trans('common.error_occurred');
  Salla.notify.error(message);
});

/**
 * Export for global access
 */
window.SallaSDK = {
  Salla,
  performSearch,
  updateCartCount,
  updateWishlistCount
};

export default Salla;


