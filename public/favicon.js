// Favicon fix script
(function() {
  const addFavicon = () => {
    const head = document.head || document.getElementsByTagName('head')[0];
    
    // Remove existing favicon links
    const existingFavicons = head.querySelectorAll('link[rel*="icon"], link[rel*="shortcut"]');
    existingFavicons.forEach(link => link.remove());
    
    // Add new favicon links
    const faviconLinks = [
      '<link rel="icon" type="image/png" sizes="32x32" href="./academy-consult-logo.png">',
      '<link rel="icon" type="image/png" sizes="16x16" href="./academy-consult-logo.png">',
      '<link rel="shortcut icon" href="./favicon.ico">',
      '<link rel="apple-touch-icon" sizes="180x180" href="./academy-consult-logo.png">'
    ];
    
    faviconLinks.forEach(link => {
      head.insertAdjacentHTML('beforeend', link);
    });
  };
  
  // Run immediately
  addFavicon();
  
  // Also run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addFavicon);
  }
})();
