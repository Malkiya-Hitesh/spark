const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building static site for Netlify...');

// Remove API routes directory temporarily for static build
const apiDir = path.join(__dirname, 'app', 'api');
const tempApiDir = path.join(__dirname, 'temp-api');

try {
  // Move API directory to temp location
  if (fs.existsSync(apiDir)) {
    fs.renameSync(apiDir, tempApiDir);
    console.log('Moved API routes to temp directory');
  }

  // Build the static site
  console.log('Building Next.js static export...');
  execSync('npm run build', { stdio: 'inherit' });

  // Move API directory back
  if (fs.existsSync(tempApiDir)) {
    fs.renameSync(tempApiDir, apiDir);
    console.log('Restored API routes');
  }

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  
  // Restore API directory if build failed
  if (fs.existsSync(tempApiDir)) {
    fs.renameSync(tempApiDir, apiDir);
    console.log('Restored API routes after build failure');
  }
  
  process.exit(1);
}
