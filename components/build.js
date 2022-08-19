// esbuild script
const { build } = require('esbuild');
const { dependencies, peerDependencies } = require('./package.json');
const stylePlugin = require('esbuild-style-plugin');

build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist',
  bundle: true,
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies)),
  plugins: [
    stylePlugin({
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')]
      }
    })
  ]
});
