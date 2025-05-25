#!/bin/bash

# Create icons directory if it doesn't exist
mkdir -p icons

# Convert SVG to different PNG sizes using magick command
magick icon.svg -background none -resize 16x16 icons/icon16.png
magick icon.svg -background none -resize 32x32 icons/icon32.png
magick icon.svg -background none -resize 48x48 icons/icon48.png
magick icon.svg -background none -resize 128x128 icons/icon128.png 