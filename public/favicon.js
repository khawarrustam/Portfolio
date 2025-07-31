// This script converts your profile picture to favicons of multiple sizes
function generateFavicons() {
  const img = new Image();
  img.src = '/assets/ranaKhawarAli.jpg';
  
  img.onload = function() {
    // Generate different sizes for different devices
    const sizes = [16, 32, 57, 60, 72, 76, 96, 114, 120, 144, 152, 180, 192];
    
    sizes.forEach(size => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      
      const ctx = canvas.getContext('2d');
      
      // Draw circular avatar
      ctx.beginPath();
      ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      
      // Draw the image
      ctx.drawImage(img, 0, 0, size, size);
      
      // Add a glowing border (more visible on larger icons)
      if (size > 32) {
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = size / 16;
        ctx.stroke();
        
        // Optional: Add a second border for more glow effect
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.5)';
        ctx.lineWidth = size / 20;
        ctx.stroke();
      }
      
      // Create appropriate link elements
      createLinkForSize(canvas, size);
    });
  };
}

function createLinkForSize(canvas, size) {
  const link = document.createElement('link');
  const imageData = canvas.toDataURL('image/png');
  
  // Different rel and sizes based on the icon size
  if (size === 16 || size === 32) {
    link.rel = "icon";
    link.type = "image/png";
    link.sizes = `${size}x${size}`;
  } else if (size === 180) {
    link.rel = "apple-touch-icon";
    link.sizes = `${size}x${size}`;
  } else if (size === 192) {
    link.rel = "icon";
    link.type = "image/png";
    link.sizes = `${size}x${size}`;
  } else {
    link.rel = "apple-touch-icon";
    link.sizes = `${size}x${size}`;
  }
  
  link.href = imageData;
  document.head.appendChild(link);
}

// Create a manifest link for PWA support
function createWebManifest() {
  const link = document.createElement('link');
  link.rel = "manifest";
  link.href = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
    name: "Rana Khawar Ali - MERN Stack & AI Engineer",
    short_name: "RKA Portfolio",
    description: "MERN Stack Developer, AI Engineer, UI Designer & Web Developer",
    icons: [{
      src: document.querySelector('link[sizes="192x192"]')?.href || "",
      sizes: "192x192",
      type: "image/png"
    }],
    theme_color: "#0d0d0d",
    background_color: "#0d0d0d",
    display: "standalone"
  }));
  
  document.head.appendChild(link);
}

// Run after page load
window.addEventListener('load', () => {
  generateFavicons();
  // Add manifest after favicons are generated
  setTimeout(createWebManifest, 500);
});
