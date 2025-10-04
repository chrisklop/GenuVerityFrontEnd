const { chromium } = require('playwright');

async function captureScreenshots() {
  const browser = await chromium.launch();
  
  try {
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    
    const page = await context.newPage();
    
    console.log('📸 Capturing current site (after my changes)...');
    
    // Capture current deployed version
    await page.goto('https://genuverity-front-end.vercel.app/', {
      waitUntil: 'networkidle'
    });
    
    // Wait for any dynamic content
    await page.waitForTimeout(2000);
    
    await page.screenshot({ 
      path: 'current-home.png', 
      fullPage: true 
    });
    console.log('✅ Current home page captured');
    
    // Check mobile viewport too
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: 'current-home-mobile.png', 
      fullPage: true 
    });
    console.log('✅ Current mobile view captured');
    
    // Check nav functionality by going to another page
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://genuverity-front-end.vercel.app/how-it-works', {
      waitUntil: 'networkidle'
    });
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: 'current-how-it-works.png', 
      fullPage: true 
    });
    console.log('✅ Current How It Works page captured');
    
    // Analyze the elements
    console.log('\n🔍 Analyzing navigation elements...');
    
    const navElements = await page.evaluate(() => {
      const nav = document.querySelector('nav');
      const logo = document.querySelector('img[alt="GenuVerity"]');
      const navLinks = document.querySelectorAll('nav a');
      const themeToggle = document.querySelector('[aria-label*="mode"]');
      
      return {
        navExists: !!nav,
        navDisplay: nav ? getComputedStyle(nav).display : 'none',
        logoExists: !!logo,
        logoHeight: logo ? logo.offsetHeight : 0,
        logoWidth: logo ? logo.offsetWidth : 0,
        navLinksCount: navLinks.length,
        navLinksVisible: Array.from(navLinks).map(link => ({
          text: link.textContent?.trim(),
          visible: getComputedStyle(link).display !== 'none'
        })),
        themeToggleExists: !!themeToggle
      };
    });
    
    console.log('Navigation Analysis:');
    console.log('- Nav exists:', navElements.navExists);
    console.log('- Nav display:', navElements.navDisplay);
    console.log('- Logo exists:', navElements.logoExists);
    console.log('- Logo dimensions:', `${navElements.logoWidth}x${navElements.logoHeight}px`);
    console.log('- Nav links count:', navElements.navLinksCount);
    console.log('- Nav links:', navElements.navLinksVisible);
    console.log('- Theme toggle exists:', navElements.themeToggleExists);
    
  } catch (error) {
    console.error('❌ Error during visual analysis:', error);
  } finally {
    await browser.close();
  }
}

captureScreenshots().catch(console.error);