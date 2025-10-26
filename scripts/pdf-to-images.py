#!/usr/bin/env python3
"""
PDF to Images Converter
Converts each page of a PDF to a high-quality PNG image.
Organizes images in folders by prototype number.

Usage:
    python3 pdf-to-images.py <prototype_number>
    python3 pdf-to-images.py 1          # Convert prototype 1
    python3 pdf-to-images.py all        # Convert all prototypes

Output Structure:
    exported-images/
    ├── prototype-1/
    │   ├── page-1.png
    │   └── page-2.png
    ├── prototype-2/
    │   ├── page-1.png
    │   └── page-2.png
    └── ...
"""

import fitz  # PyMuPDF
import os
import sys
from pathlib import Path


def pdf_to_images(pdf_path, output_dir, prototype_name, dpi=300):
    """
    Convert PDF pages to PNG images.

    Args:
        pdf_path: Path to the PDF file
        output_dir: Directory to save images
        prototype_name: Name for the output folder (e.g., 'prototype-1')
        dpi: Resolution for output images (default: 300 for print quality)

    Returns:
        List of created image paths
    """
    # Create output directory
    prototype_dir = Path(output_dir) / prototype_name
    prototype_dir.mkdir(parents=True, exist_ok=True)

    # Open PDF
    try:
        pdf_document = fitz.open(pdf_path)
    except Exception as e:
        print(f"❌ Error opening PDF: {e}")
        return []

    image_paths = []
    total_pages = pdf_document.page_count

    print(f"📄 Converting {prototype_name} ({total_pages} pages) to images...")

    # Convert each page
    for page_num in range(total_pages):
        page = pdf_document[page_num]

        # Calculate zoom for desired DPI
        # PDF default is 72 DPI, so zoom = desired_dpi / 72
        zoom = dpi / 72
        mat = fitz.Matrix(zoom, zoom)

        # Render page to pixmap (image)
        pix = page.get_pixmap(matrix=mat, alpha=False)

        # Create output filename
        output_path = prototype_dir / f"page-{page_num + 1}.png"

        # Save as PNG
        pix.save(output_path)
        image_paths.append(str(output_path))

        print(f"   ✓ Page {page_num + 1}/{total_pages} → {output_path.name}")

    pdf_document.close()

    print(f"✅ Converted {total_pages} pages to {prototype_dir}\n")
    return image_paths


def convert_prototype(prototype_id, base_dir):
    """Convert a single prototype PDF to images."""
    pdf_path = Path(base_dir) / "exported-pdfs" / f"prototype-{prototype_id}.pdf"
    output_dir = Path(base_dir) / "exported-images"

    if not pdf_path.exists():
        print(f"⚠️  PDF not found: {pdf_path}")
        return False

    pdf_to_images(
        pdf_path=str(pdf_path),
        output_dir=str(output_dir),
        prototype_name=f"prototype-{prototype_id}",
        dpi=300  # High quality for verification
    )
    return True


def convert_all_prototypes(base_dir):
    """Convert all prototype PDFs to images."""
    success_count = 0
    fail_count = 0

    print("🚀 Converting all prototypes to images...\n")

    for i in range(1, 11):
        if convert_prototype(i, base_dir):
            success_count += 1
        else:
            fail_count += 1

    print("=" * 60)
    print(f"✅ Conversion Complete!")
    print("=" * 60)
    print(f"📊 Success: {success_count}/10")
    if fail_count > 0:
        print(f"❌ Failed: {fail_count}/10")
    print(f"📁 Location: {Path(base_dir) / 'exported-images'}")
    print("=" * 60)


def main():
    # Get script directory (team-resume/scripts)
    script_dir = Path(__file__).parent
    base_dir = script_dir.parent  # team-resume/

    if len(sys.argv) < 2:
        print("Usage: python3 pdf-to-images.py <prototype_number|all>")
        print("Examples:")
        print("  python3 pdf-to-images.py 1      # Convert prototype 1")
        print("  python3 pdf-to-images.py all    # Convert all prototypes")
        sys.exit(1)

    arg = sys.argv[1].lower()

    if arg == "all":
        convert_all_prototypes(base_dir)
    else:
        try:
            prototype_id = int(arg)
            if 1 <= prototype_id <= 10:
                convert_prototype(prototype_id, base_dir)
            else:
                print(f"❌ Prototype number must be between 1 and 10, got: {prototype_id}")
                sys.exit(1)
        except ValueError:
            print(f"❌ Invalid argument: {arg}")
            print("Use a number (1-10) or 'all'")
            sys.exit(1)


if __name__ == "__main__":
    main()
