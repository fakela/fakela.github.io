#!/bin/bash
# Generate PNG thumbnails from PDF writing samples
# Requires: pdftoppm (from poppler) and sips (macOS)
#
# Usage: bash scripts/generate-thumbnails.sh

DOWNLOADS_DIR="public/downloads"
OUTPUT_DIR="public/images/samples"

mkdir -p "$OUTPUT_DIR"

echo "Generating thumbnails from PDFs in $DOWNLOADS_DIR..."

for pdf in "$DOWNLOADS_DIR"/*.pdf; do
  [ -f "$pdf" ] || continue

  basename=$(basename "$pdf" .pdf)
  output="$OUTPUT_DIR/${basename}.png"

  if [ -f "$output" ]; then
    echo "  Skip: $basename (already exists)"
    continue
  fi

  echo "  Processing: $basename"

  # Render first page to PNG at 300 DPI
  pdftoppm -png -f 1 -l 1 -r 150 "$pdf" "$OUTPUT_DIR/${basename}_tmp"

  # pdftoppm appends -1 to the filename
  tmpfile="$OUTPUT_DIR/${basename}_tmp-1.png"
  if [ -f "$tmpfile" ]; then
    # Resize to 600px wide for thumbnails
    sips --resampleWidth 600 "$tmpfile" --out "$output" > /dev/null 2>&1
    rm "$tmpfile"
    echo "  Created: $output"
  else
    echo "  Warning: Failed to render $basename"
  fi
done

echo ""
echo "Done. Thumbnails saved to $OUTPUT_DIR/"
echo ""
echo "Note: For blog posts that link to external URLs, you'll need to"
echo "take screenshots manually and save them as PNG files in $OUTPUT_DIR/"
