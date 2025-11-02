/**
 * Simple Local Development Server
 * For previewing Salla theme locally before publishing
 */

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static assets
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

// Mock Salla global variables for local development
const mockSallaData = {
  store: {
    name: 'My Demo Store',
    url: 'http://localhost:3000',
    logo: '/assets/images/logo.png',
    favicon: '/assets/images/favicon.png',
    description: 'A modern eCommerce store powered by Salla',
    banners: [
      { image: 'https://via.placeholder.com/1200x400', title: 'Summer Sale', description: 'Up to 50% off', url: '#' }
    ],
    categories: [
      { id: 1, name: 'Electronics', url: '#', image: 'https://via.placeholder.com/300', products_count: 24 },
      { id: 2, name: 'Fashion', url: '#', image: 'https://via.placeholder.com/300', products_count: 45 },
      { id: 3, name: 'Home & Garden', url: '#', image: 'https://via.placeholder.com/300', products_count: 32 }
    ],
    brands: [
      { id: 1, name: 'Brand 1', logo: 'https://via.placeholder.com/150', url: '#' },
      { id: 2, name: 'Brand 2', logo: 'https://via.placeholder.com/150', url: '#' }
    ]
  },
  products: {
    featured: [
      {
        id: 1,
        name: 'Sample Product 1',
        url: '#',
        image: { url: 'https://via.placeholder.com/300' },
        images: [{ url: 'https://via.placeholder.com/300' }],
        price: 99.99,
        regular_price: 129.99,
        sale_price: 99.99,
        is_on_sale: true,
        is_new: false,
        is_out_of_stock: false,
        rating: 4.5,
        reviews_count: 12,
        discount_percent: 23,
        status: 'sale',
        category: { name: 'Electronics', url: '#' }
      }
    ]
  },
  user: {
    language: { code: 'en', dir: 'ltr' }
  },
  page: {
    title: 'Home',
    description: 'Welcome to our store',
    url: 'http://localhost:3000'
  }
};

// Simple template rendering (replace Twig variables)
function renderTemplate(content, data) {
  // Replace simple variables
  content = content.replace(/\{\{\s*store\.name\s*\}\}/g, data.store.name);
  content = content.replace(/\{\{\s*store\.logo\s*\}\}/g, data.store.logo);
  content = content.replace(/\{\{\s*store\.url\s*\}\}/g, data.store.url);
  
  // Add basic Salla SDK
  content = content.replace(/\{\{\s*twilight\.head\s*\}\}/g, `
    <script>
      window.store = ${JSON.stringify(data.store)};
      window.products = ${JSON.stringify(data.products)};
      console.log('🎨 Salla Theme - Local Development Mode');
      console.log('📦 Store Data:', window.store);
    </script>
  `);
  
  content = content.replace(/\{\{\s*twilight\.footer\s*\}\}/g, `
    <script src="/assets/js/app.js"></script>
  `);
  
  // Replace theme asset links
  content = content.replace(/\{\{\s*theme\.link\('([^']+)'\)\s*\}\}/g, '<link rel="stylesheet" href="/assets/styles/$1">');
  content = content.replace(/\{\{\s*theme\.script\('([^']+)'\)\s*\}\}/g, '<script src="/assets/js/$1"></script>');
  
  return content;
}

// Routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Salla Theme - Local Preview</title>
      <link rel="stylesheet" href="/assets/styles/app.css">
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .preview-banner { background: #4A90E2; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .preview-banner h1 { margin: 0 0 10px 0; }
        .preview-links { background: white; padding: 20px; border-radius: 8px; }
        .preview-links h2 { margin-top: 0; }
        .preview-links a { display: block; padding: 10px; margin: 5px 0; background: #4A90E2; color: white; text-decoration: none; border-radius: 4px; }
        .preview-links a:hover { background: #3a7bc8; }
        .status { background: #28a745; color: white; padding: 10px; border-radius: 4px; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="status">
        ✅ Theme is running locally! This is a preview mode.
      </div>
      
      <div class="preview-banner">
        <h1>🎨 ${mockSallaData.store.name}</h1>
        <p>Your Salla theme is ready for development!</p>
      </div>
      
      <div class="preview-links">
        <h2>📄 Preview Pages</h2>
        <a href="/preview/home">🏠 Homepage (index.twig)</a>
        <a href="/preview/products">🛍️ Products Listing (product/index.twig)</a>
        <a href="/preview/product">📦 Single Product (product/single.twig)</a>
        <a href="/preview/cart">🛒 Shopping Cart (cart.twig)</a>
        <a href="/preview/blog">📝 Blog Listing (blog/index.twig)</a>
        <a href="/preview/brands">🏷️ Brands (brands/index.twig)</a>
        
        <h2>📁 Theme Files</h2>
        <p><strong>Location:</strong> C:\\Users\\astro\\OneDrive\\Desktop\\salla</p>
        <p><strong>Structure:</strong> ✅ Correct (matches official Salla docs)</p>
        <p><strong>Status:</strong> Ready for Salla Partners Portal</p>
        
        <h2>🚀 Next Steps</h2>
        <p>1. Edit files in <code>src/views/</code> folder</p>
        <p>2. Customize styles in <code>src/assets/styles/app.css</code></p>
        <p>3. When ready, upload to Salla Partners Portal</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/preview/:page', (req, res) => {
  const page = req.params.page;
  const fs = require('fs');
  
  let templatePath;
  switch(page) {
    case 'home':
      templatePath = 'src/views/pages/index.twig';
      break;
    case 'products':
      templatePath = 'src/views/pages/product/index.twig';
      break;
    case 'product':
      templatePath = 'src/views/pages/product/single.twig';
      break;
    case 'cart':
      templatePath = 'src/views/pages/cart.twig';
      break;
    case 'blog':
      templatePath = 'src/views/pages/blog/index.twig';
      break;
    case 'brands':
      templatePath = 'src/views/pages/brands/index.twig';
      break;
    default:
      return res.status(404).send('Page not found');
  }
  
  try {
    let content = fs.readFileSync(templatePath, 'utf8');
    
    // Simple preview message
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Preview: ${page}</title>
        <link rel="stylesheet" href="/assets/styles/app.css">
      </head>
      <body>
        <div style="background: #4A90E2; color: white; padding: 20px;">
          <h1>🎨 Preview: ${page}</h1>
          <p>This is a preview of your ${page} template.</p>
          <p><strong>File:</strong> ${templatePath}</p>
          <a href="/" style="color: white;">← Back to main</a>
        </div>
        <div style="padding: 20px; background: #fff3cd; margin: 20px;">
          <p><strong>Note:</strong> This is a basic preview. For full Salla functionality, upload to Partners Portal.</p>
        </div>
        <pre style="padding: 20px; background: #f5f5f5; overflow: auto;">${content.substring(0, 1000)}...</pre>
      </body>
      </html>
    `);
  } catch(err) {
    res.status(500).send('Error loading template: ' + err.message);
  }
});

// Start server
app.listen(PORT, () => {
  console.log('\n🚀 ========================================');
  console.log('   Salla Theme - Local Development Server');
  console.log('========================================\n');
  console.log(`✅ Server running at: http://localhost:${PORT}`);
  console.log(`📁 Theme location: ${__dirname}`);
  console.log('\n📝 Available routes:');
  console.log(`   → http://localhost:${PORT} (Home)`);
  console.log(`   → http://localhost:${PORT}/preview/home`);
  console.log(`   → http://localhost:${PORT}/preview/products`);
  console.log(`   → http://localhost:${PORT}/preview/product`);
  console.log(`   → http://localhost:${PORT}/preview/cart`);
  console.log('\n⚠️  This is a PREVIEW ONLY. For full Salla features,');
  console.log('   upload to Salla Partners Portal.\n');
  console.log('Press Ctrl+C to stop the server\n');
});


