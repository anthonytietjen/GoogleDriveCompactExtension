# Google Drive Compact View

A Chrome extension that makes the Google Drive interface more compact by modifying CSS styles.

## Features

- Removes unnecessary spacing and height from Google Drive interface elements
- Makes the interface more compact and efficient
- Currently modifies the `.a-U-J` class to remove fixed heights

## Installation

1. Clone this repository or download the ZIP file
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## Development

To modify the extension:

1. Edit the CSS in `styles.css` to add more compact styling rules
2. The extension will automatically apply changes when you reload it in Chrome

## Building Icons

If you need to regenerate the icons:

```bash
./generate_icons.sh
```

This requires ImageMagick to be installed on your system.

## License

MIT License 