/**
 * Salla Theme JavaScript
 * Main JavaScript file for the theme
 */

// Import Salla SDK
import { Salla } from '@salla.sa/twilight';

/**
 * Initialize Salla SDK
 */
Salla.onReady(() => {
  console.log('Salla Theme Initialized');
  
  // Initialize components
  initMobileMenu();
  initProductQuickView();
  initCartDrawer();
  initSearch();
  initViewModeToggle();
  initScrollToTop();
  initLazyLoading();
});

/**
 * Mobile Menu Functionality
 */
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      Salla.event.emit('mobile-menu::toggle');
    });
  }
}

/**
 * Product Quick View
 */
function initProductQuickView() {
  Salla.event.on('product::quick-view', (product) => {
    console.log('Quick view for product:', product.id);
  });
}

/**
 * Cart Drawer Functionality
 */
function initCartDrawer() {
  // Listen for add to cart events
  Salla.event.on('cart::item-added', (response) => {
    console.log('Item added to cart:', response);
    
    // Show notification
    Salla.notify.success(window.trans('common.item_added_to_cart'));
    
    // Open cart drawer
    Salla.event.emit('cart-drawer::open');
  });
  
  // Listen for cart updates
  Salla.event.on('cart::updated', (cart) => {
    console.log('Cart updated:', cart);
  });
  
  // Listen for item removal
  Salla.event.on('cart::item-removed', (response) => {
    Salla.notify.success(window.trans('common.item_removed_from_cart'));
  });
}

/**
 * Search Functionality
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
}

/**
 * Perform Search with Autocomplete
 */
function performSearch(query) {
  Salla.search.query(query)
    .then(results => {
      console.log('Search results:', results);
      // Display search results
    })
    .catch(error => {
      console.error('Search error:', error);
    });
}

/**
 * View Mode Toggle (Grid/List)
 */
function initViewModeToggle() {
  const viewModeButtons = document.querySelectorAll('.view-mode-btn');
  const productsGrid = document.querySelector('.products-grid');
  
  if (viewModeButtons.length && productsGrid) {
    viewModeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const viewMode = button.getAttribute('data-view');
        
        // Update active button
        viewModeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update grid view
        productsGrid.setAttribute('data-view', viewMode);
        
        // Save preference
        localStorage.setItem('products-view-mode', viewMode);
      });
    });
    
    // Load saved preference
    const savedViewMode = localStorage.getItem('products-view-mode');
    if (savedViewMode) {
      const button = document.querySelector(`[data-view="${savedViewMode}"]`);
      if (button) {
        button.click();
      }
    }
  }
}

/**
 * Scroll to Top Button
 */
function initScrollToTop() {
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.innerHTML = '<salla-icon name="arrow-up"></salla-icon>';
  scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollToTopBtn);
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });
  
  // Scroll to top on click
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Lazy Loading Images
 */
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
}

/**
 * Wishlist Functionality
 */
Salla.event.on('wishlist::item-added', (response) => {
  Salla.notify.success(window.trans('common.item_added_to_wishlist'));
});

Salla.event.on('wishlist::item-removed', (response) => {
  Salla.notify.success(window.trans('common.item_removed_from_wishlist'));
});

/**
 * Product Rating & Reviews
 */
Salla.event.on('review::submitted', (response) => {
  Salla.notify.success(window.trans('common.review_submitted'));
});

/**
 * Newsletter Subscription
 */
Salla.event.on('newsletter::subscribed', (response) => {
  Salla.notify.success(window.trans('common.newsletter_subscribed'));
});

/**
 * Filter & Sort Events
 */
Salla.event.on('filters::applied', (filters) => {
  console.log('Filters applied:', filters);
});

Salla.event.on('products::sorted', (sortOption) => {
  console.log('Products sorted by:', sortOption);
});

/**
 * Handle Errors
 */
Salla.event.on('error', (error) => {
  console.error('Salla error:', error);
  Salla.notify.error(error.message || window.trans('common.error_occurred'));
});

/**
 * Export for global access
 */
window.ThemeApp = {
  Salla,
  initMobileMenu,
  initProductQuickView,
  initCartDrawer,
  initSearch,
  performSearch
};


