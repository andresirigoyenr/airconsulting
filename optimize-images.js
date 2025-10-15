import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicImagesDir = path.join(__dirname, 'public', 'images');
const srcAssetsImagesDir = path.join(__dirname, 'src', 'assets', 'images');

async function optimizeImages() {
  const directories = [publicImagesDir, srcAssetsImagesDir];

  // Define specific resize targets for known images
  const resizeTargets = {
    'bgcode.jpg': { width: 584, height: 389 },
    'logo.png': { width: 213, height: 80 }
  };

  for (const dir of directories) {
    if (!fs.existsSync(dir)) {
      console.log(`Directory ${dir} does not exist, skipping...`);
      continue;
    }

    const files = fs.readdirSync(dir).filter(file =>
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    for (const file of files) {
      const inputPath = path.join(dir, file);
      const outputDir = path.join(dir, 'optimized');

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      console.log(`Optimizing ${file}...`);

      let processedInput = inputPath;

      // Resize if specific target exists
      if (resizeTargets[file]) {
        const { width, height } = resizeTargets[file];
        const resizedPath = path.join(outputDir, `resized-${file}`);
        await sharp(inputPath)
          .resize(width, height, { fit: 'cover', position: 'center' })
          .jpeg({ quality: 85 })
          .toFile(resizedPath);
        processedInput = resizedPath;
        console.log(`Resized ${file} to ${width}x${height}`);
      }

      // Optimize to WebP
      await imagemin([processedInput], {
        destination: outputDir,
        plugins: [
          imageminWebp({ quality: 75 })
        ]
      });

      // Optimize original format
      await imagemin([processedInput], {
        destination: outputDir,
        plugins: [
          imageminMozjpeg({ quality: 75 }),
          imageminPngquant({ quality: [0.6, 0.8] })
        ]
      });

      console.log(`Optimized ${file}`);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
