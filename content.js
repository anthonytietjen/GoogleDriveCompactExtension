// Ensure our styles are applied
console.log('Google Drive Compact View extension loaded');

// Wait for My Drive item and click its expander
const observer = new MutationObserver((mutations, obs) => {
    const myDriveItem = document.querySelector('[data-tree-id="Dri"]');
    if (myDriveItem) {
        console.log('Found My Drive item');
        obs.disconnect();
        
        const expander = myDriveItem.querySelector('[data-target="expander"]');
        if (expander) {
            console.log('Clicking My Drive expander');
            expander.click();
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log('Started observing for My Drive item'); 