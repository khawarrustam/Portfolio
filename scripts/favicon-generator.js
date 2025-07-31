// favicon-generator.js
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function generateFavicons() {
  try {
    const img = await loadImage(path.join(__dirname, 'public/assets/ranaKhawarAli.jpg'));
    const sizes = [16, 32, 48, 64, 128, 256];
    
    // Create favicon directory if it doesn't exist
    const faviconDir = path.join(__dirname, 'public/favicon');
    if (!fs.existsSync(faviconDir)) {
      fs.mkdirSync(faviconDir);
    }
    
    // Generate favicons of different sizes
    for (const size of sizes) {
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext('2d');
      
      // Create a circular avatar
      ctx.beginPath();
      ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      
      // Draw the image
      ctx.drawImage(img, 0, 0, size, size);
      
      // Add a border (optional)
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = size / 16;
      ctx.stroke();
      
      // Save the image
      const buffer = canvas.toBuffer('image/png');
      fs.writeFileSync(path.join(faviconDir, `favicon-${size}x${size}.png`), buffer);
      
      console.log(`Generated favicon-${size}x${size}.png`);
    }
    
    console.log('Favicon generation complete!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
