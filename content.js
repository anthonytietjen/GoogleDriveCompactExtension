// Ensure our styles are applied
console.log('Google Drive Compact View extension loaded');

// Wait for My Drive item and click its expander
const driveObserver = new MutationObserver((mutations, obs) => {
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

// Start both observers
driveObserver.observe(document.body, {
    childList: true,
    subtree: true
});

console.log('Started observing for My Drive item and side panel button'); 