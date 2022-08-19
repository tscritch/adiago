import postcss from 'rollup-plugin-postcss';
import pluginTypescript from '@rollup/plugin-typescript';
import pluginCommonjs from '@rollup/plugin-commonjs';
import pluginNodeResolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import * as path from 'path';
import pkg from './package.json';

const moduleName = pkg.name.replace(/^@.*\//, '');
const author = pkg.author;
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;
const excludedDepedencies = [...Object.keys(pkg.devDependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

export default [
  {
    input: ['./src/index.ts'],
    output: {
      file: './dist/index.js',
      format: 'es',
      exports: 'named',
      banner
    },
    external: excludedDepedencies,
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: ['.js', '.ts', 'tsx']
      }),
      babel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, '.babelrc.js')
      }),
      postcss({
        config: {
          path: './postcss.config.js'
        },
        extensions: ['.css'],
        minimize: true,
        extract: true,
        inject: {
          insertAt: 'top'
        }
      })
    ]
  }
];
