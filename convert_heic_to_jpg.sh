#!/bin/bash

# Script to convert HEIC files to JPG in the images directory
# This preserves the original files and creates JPG versions

echo "Converting HEIC files to JPG..."

# Navigate to the images directory
cd images

# Find all HEIC files and convert them
for file in *.heic; do
  if [ -f "$file" ]; then
    filename="${file%.*}"
    echo "Converting $file to ${filename}.jpg"
    sips -s format jpeg "$file" --out "${filename}.jpg"
  fi
done

echo "Conversion complete!"
