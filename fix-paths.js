const fs = require('fs');
const path = require('path');

// Function to fix absolute paths in HTML files
function fixPathsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix CSS paths
    content = content.replace(/href="\/_next\//g, 'href="./_next/');
    
    // Fix JS paths
    content = content.replace(/src="\/_next\//g, 'src="./_next/');
    
    // Fix any other absolute paths that might be in scripts
    content = content.replace(/href": "\/_next\//g, 'href": "./_next/');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed paths in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing paths in ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all HTML files
function fixAllHtmlFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist, skipping...`);
    return;
  }
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixAllHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      fixPathsInFile(filePath);
    }
  });
}

// Create .nojekyll file for GitHub Pages
function createNoJekyllFile() {
  const noJekyllPath = path.join('./out', '.nojekyll');
  try {
    fs.writeFileSync(noJekyllPath, '');
    console.log('Created .nojekyll file for GitHub Pages');
  } catch (error) {
    console.error('Error creating .nojekyll file:', error.message);
  }
}

// Main execution
console.log('Fixing absolute paths in static export...');
fixAllHtmlFiles('./out');
createNoJekyllFile();
console.log('Path fixing complete!');
