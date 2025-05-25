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

// Wait for and click the "Hide side panel" button
const sidePanelObserver = new MutationObserver((mutations, obs) => {
    const hideSidePanelButton = document.querySelector('[aria-label="Hide side panel"]');
    if (hideSidePanelButton) {
        console.log('Found Hide side panel button');
        // Find all divs and look for one with cursor: pointer
        const divs = hideSidePanelButton.querySelectorAll('div');
        const clickableDiv = Array.from(divs).find(div => 
            window.getComputedStyle(div).cursor === 'pointer'
        );
        
        if (clickableDiv) {
            console.log('Found clickable div with cursor: pointer');
            setTimeout(() => {
                clickableDiv.click();
            }, 5000);
        } else {
            console.log('No clickable div found');
        }
        obs.disconnect();
    }
});

// Start both observers
driveObserver.observe(document.body, {
    childList: true,
    subtree: true
});

sidePanelObserver.observe(document.body, {
    childList: true,
    subtree: true
});

console.log('Started observing for My Drive item and side panel button'); 