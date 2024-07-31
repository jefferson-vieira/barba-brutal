import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/**/*.ts?(x)'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  minify: true,
  sourcemap: true,
});
