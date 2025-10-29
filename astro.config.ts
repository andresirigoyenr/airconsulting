// PASO 3: CÓDIGO FINAL Y CORREGIDO

import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';
import astrowind from './vendor/integration';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',
  compressHTML: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    tailwind({ // ACTIVADO
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: true,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    astrowind({
      config: './src/config.yaml',
    }),
  ],
  image: {
    domains: ['cdn.pixabay.com', 'images.unsplash.com'],
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },
  vite: {
   build: {
     rollupOptions: {
       output: {
         manualChunks: (id) => {
           if (id.includes('node_modules')) {
             if (id.includes('react') || id.includes('framer-motion')) {
               return 'react-vendor';
             }
             if (id.includes('astro')) {
               return 'astro-vendor';
             }
             return 'vendor';
           }
           if (id.includes('components/AnimatedCodeBackground')) {
             return 'animated-bg';
           }
           if (id.includes('components/ProcessSection') || id.includes('components/ServicesSection')) {
             return 'sections';
           }
         },
       },
     },
   },
   resolve: {
     alias: {
       '~': path.resolve(__dirname, './src'),
     },
   },
   optimizeDeps: {
     include: ['framer-motion', 'gsap', '@gsap/react', 'ogl', '@use-gesture/react'],
   },
 },
});
