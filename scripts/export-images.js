import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync, unlinkSync } from 'fs';
import { exec, spawn } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Convert PDF to images using Python script
 */
async function pdfToImages(prototypeId) {
  const pythonScript = join(__dirname, 'pdf-to-images.py');

  return new Promise((resolve, reject) => {
    const process = spawn('python3', [pythonScript, prototypeId.toString()]);

    let output = '';
    let errorOutput = '';

    process.stdout.on('data', (data) => {
      const text = data.toString();
      output += text;
      console.log(text.trim());
    });

    process.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });

    process.on('close', (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        reject(new Error(`PDF to images conversion failed: ${errorOutput}`));
      }
    });
  });
}

const prototypes = [
  { id: 1, name: 'Prototype1', url: 'http://localhost:5173/prototype1', filename: 'prototype-1.pdf' },
  { id: 2, name: 'Prototype2', url: 'http://localhost:5173/prototype2', filename: 'prototype-2.pdf' },
  { id: 3, name: 'Prototype3', url: 'http://localhost:5173/prototype3', filename: 'prototype-3.pdf' },
  { id: 4, name: 'Prototype4', url: 'http://localhost:5173/prototype4', filename: 'prototype-4.pdf' },
  { id: 5, name: 'Prototype5', url: 'http://localhost:5173/prototype5', filename: 'prototype-5.pdf' },
  { id: 6, name: 'Prototype6', url: 'http://localhost:5173/prototype6', filename: 'prototype-6.pdf' },
  { id: 7, name: 'Prototype7', url: 'http://localhost:5173/prototype7', filename: 'prototype-7.pdf' },
  { id: 8, name: 'Prototype8', url: 'http://localhost:5173/prototype8', filename: 'prototype-8.pdf' },
  { id: 9, name: 'Prototype9', url: 'http://localhost:5173/prototype9', filename: 'prototype-9.pdf' },
  { id: 10, name: 'Prototype10', url: 'http://localhost:5173/prototype10', filename: 'prototype-10.pdf' }
];

async function generateImages(prototype, outputDir, browser, keepPdfs = false) {
  console.log(`🖼️  Generating images for ${prototype.name}...`);

  const page = await browser.newPage();

  try {
    // Navigate to the prototype with comprehensive wait conditions
    await page.goto(prototype.url, {
      waitUntil: ['load', 'networkidle0'], // Both conditions
      timeout: 30000
    });

    // Emulate print media (CRITICAL for @media print styles)
    await page.emulateMediaType('print');

    // Wait for Google Fonts to load (CRITICAL)
    await page.evaluateHandle('document.fonts.ready');

    // Wait for React rendering completion signal
    await page.waitForFunction(() => {
      return window.pdfReady === true ||
             document.querySelectorAll('.a4-page').length >= 1;
    }, { timeout: 5000 }).catch(() => {
      // Fallback if no ready signal - just log warning
      console.log(`   ⚠️  No pdfReady signal found for ${prototype.name}`);
    });

    // Final safety buffer for any remaining animations
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check for content overflow (diagnostic)
    const hasOverflow = await page.evaluate(() => {
      const pages = document.querySelectorAll('.a4-page');
      return Array.from(pages).some(p => p.scrollHeight > p.clientHeight);
    });

    if (hasOverflow) {
      console.log(`   ⚠️  Overflow detected in ${prototype.name}`);
    }

    // Check page count (diagnostic)
    const pageCount = await page.evaluate(() => {
      return document.querySelectorAll('.a4-page').length;
    });

    console.log(`   📄 Detected ${pageCount} page(s)${hasOverflow ? ' (with overflow)' : ''}`);

    // Generate PDF - always overwrites existing file with same name
    const pdfPath = join(outputDir, prototype.filename);
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true, // Use CSS @page rules
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    });

    console.log(`   ✓ Saved: ${prototype.filename}`);

    // CRITICAL: Get actual page count from generated PDF using macOS mdls
    let actualPageCount = 0;
    try {
      const { stdout } = await execAsync(
        `mdls -raw -name kMDItemNumberOfPages "${pdfPath}"`
      );
      actualPageCount = parseInt(stdout.trim(), 10);
      console.log(`   📄 Actual PDF pages: ${actualPageCount}`);
    } catch (error) {
      console.log(`   ⚠️  Could not verify page count: ${error.message}`);
    }

    // Convert PDF to images
    console.log(`   🖼️  Converting to images...`);
    try {
      await pdfToImages(prototype.id);

      // Delete the PDF after successful conversion (unless --keep-pdfs flag is set)
      if (!keepPdfs) {
        try {
          unlinkSync(pdfPath);
          console.log(`   🗑️  PDF deleted (images are source of truth)`);
        } catch (deleteError) {
          console.log(`   ⚠️  Could not delete PDF: ${deleteError.message}`);
        }
      } else {
        console.log(`   📄 PDF kept: ${prototype.filename}`);
      }
    } catch (error) {
      console.log(`   ⚠️  Image conversion failed: ${error.message}`);
    }

    return { success: true, prototype: prototype.name, pageCount, hasOverflow, actualPageCount };
  } catch (error) {
    console.error(`   ✗ Failed to generate ${prototype.name}:`, error.message);
    return { success: false, prototype: prototype.name, error: error.message };
  } finally {
    await page.close();
  }
}

async function generateAllImages(prototypeId = null, keepPdfs = false) {
  // Create output directories
  const pdfDir = join(__dirname, '..', 'exported-pdfs');
  const imageDir = join(__dirname, '..', 'exported-images');

  if (!existsSync(pdfDir)) {
    mkdirSync(pdfDir, { recursive: true });
  }
  if (!existsSync(imageDir)) {
    mkdirSync(imageDir, { recursive: true });
    console.log(`✓ Created output directory: ${imageDir}\n`);
  }

  // Determine which prototypes to generate
  let targetPrototypes;
  if (prototypeId) {
    const prototype = prototypes.find(p => p.id === parseInt(prototypeId));
    if (!prototype) {
      console.error(`❌ Prototype ${prototypeId} not found. Valid IDs: 1-10`);
      process.exit(1);
    }
    targetPrototypes = [prototype];
    console.log(`🚀 Generating images for Prototype ${prototypeId}...\n`);
  } else {
    targetPrototypes = prototypes;
    console.log(`🚀 Generating images for all ${prototypes.length} prototypes...\n`);
  }

  // Launch browser with font rendering optimizations
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=none', // CRITICAL: Font quality
      '--force-color-profile=srgb'   // Color accuracy
    ]
  });

  try {
    const results = [];

    // Sequential processing with result tracking
    for (const prototype of targetPrototypes) {
      const result = await generateImages(prototype, pdfDir, browser, keepPdfs);
      results.push(result);
    }

    // Summary report
    const succeeded = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    const withOverflow = results.filter(r => r.success && r.hasOverflow).length;

    console.log('\n' + '='.repeat(60));
    console.log('✅ Image Generation Complete!');
    console.log('='.repeat(60));
    console.log(`📊 Success: ${succeeded}/${results.length}`);
    if (failed > 0) {
      console.log(`❌ Failed: ${failed}/${results.length}`);
    }
    if (withOverflow > 0) {
      console.log(`⚠️  With Overflow: ${withOverflow}/${results.length}`);
    }
    console.log(`📁 Images Location: ${imageDir}`);
    if (keepPdfs) {
      console.log(`📁 PDFs Location: ${pdfDir}`);
      console.log(`📄 PDFs kept (use --keep-pdfs flag)`);
    } else {
      console.log(`📄 PDFs deleted (images are source of truth)`);
    }
    console.log('='.repeat(60));

    // List any failures
    if (failed > 0) {
      console.log('\nFailed Prototypes:');
      results.filter(r => !r.success).forEach(r => {
        console.log(`  • ${r.prototype}: ${r.error}`);
      });
    }

  } catch (error) {
    console.error('❌ Error generating PDFs:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Parse command line arguments
// Usage:
//   npm run export-images              -> generates all images (deletes PDFs)
//   npm run export-images --keep-pdfs  -> generates all images (keeps PDFs)
//   npm run export-images 1            -> generates only Prototype 1 (deletes PDF)
//   npm run export-images 1 --keep-pdfs -> generates only Prototype 1 (keeps PDF)
const args = process.argv.slice(2);
const keepPdfs = args.includes('--keep-pdfs');
const prototypeId = args.find(arg => !arg.startsWith('--') && !isNaN(parseInt(arg)));

// Run the script
generateAllImages(prototypeId, keepPdfs).catch(error => {
  console.error(error);
  process.exit(1);
});
