
const blockedResources = [
    'google-analytics.com',
    'doubleclick.net',
    'adservice.google.com',
    'googleadservices.com'
  ];

async function blockAds(page) {
    await page.route('**/*', route => {
        const url = route.request().url();
        if (url.includes('ads') || url.includes('doubleclick') || url.includes('googlesyndication')) {
            console.log(`Blocked: ${url}`);
            route.abort();
        } else {
            route.continue();
        }
    });
}

module.exports = { blockAds };