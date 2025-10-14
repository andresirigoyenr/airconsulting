import fs from 'fs';
import path from 'path';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const publicImagesDir = path.join(__dirname, 'public', 'images');
const srcAssetsImagesDir = path.join(__dirname, 'src', 'assets', 'images');

async function optimizeImages() {
  const directories = [publicImagesDir, srcAssetsImagesDir];

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

      // Optimize to WebP
      await imagemin([inputPath], {
        destination: outputDir,
        plugins: [
          imageminWebp({ quality: 75 })
        ]
      });


      // Optimize original format
      await imagemin([inputPath], {
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
