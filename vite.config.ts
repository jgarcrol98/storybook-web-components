import path from 'path';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { defineConfig } from 'vite';
import { webComponentPath } from './cli/promp/inquierer-wc';

export const chuckRenameFileNames = (chunkInfo: any, chuckSection: string) => {
  if (chunkInfo.name === 'index') {
    const entryModule = chunkInfo.moduleIds[chunkInfo.moduleIds.length - 1];

    const segments = path.dirname(entryModule).split('/');
    const segment = segments[segments.length - 1];

    chunkInfo.name = segment;
    return `${segment}/wc-${segment}.js`;
  }
  return `shared/${chuckSection}/[name].${chuckSection}.js`;
};

export default defineConfig({
  appType: 'custom',
  mode: 'development',
  base: './',
  server: {},
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: webComponentPath,
      output: {
        dir: 'dist',
        entryFileNames: chunkInfo => chuckRenameFileNames(chunkInfo, 'entries'),
        assetFileNames: chunkInfo => 'shared/assets/[name].asset.[ext]',
        chunkFileNames: chunkInfo => chuckRenameFileNames(chunkInfo, 'chucks'),
      },
    },
    minify: true,
    sourcemap: false,
  },
  esbuild: { legalComments: 'none' },
  plugins: [
    // @ts-expect-error wrong type
    minifyHTML.default(),
  ],
});
