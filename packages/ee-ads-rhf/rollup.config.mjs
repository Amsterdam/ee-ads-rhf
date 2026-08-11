import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import dts from 'rollup-plugin-dts';
import fs from 'fs';
import postcss from 'rollup-plugin-postcss';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const isWatch = process.env.ROLLUP_WATCH === 'true';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        globals: outputGlobals,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        globals: outputGlobals,
      },
    ],
    external: (id) =>
      [
        'react',
        'react-dom',
        'react-hook-form',
        '@amsterdam/design-system-assets',
        '@amsterdam/design-system-css',
        '@amsterdam/design-system-react',
        '@amsterdam/design-system-react-icons',
        '@amsterdam/design-system-tokens',
      ].some((pkg) => id === pkg || id.startsWith(pkg + '/')),
    plugins: [
      peerDepsExternal(),
      resolve({ browser: true }),
      commonjs(),
      nodePolyfills(),
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      postcss({
        modules: {
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
        use: ['sass'],
        extract: false, // don't generate a separate .css file unless you want to
        minimize: true,
        sourceMap: true,
      }),
    ],
  },
  // Bundles the .d.ts files tsc already emitted to dist/index.d.ts into
  // itself (input === output). Skipped in watch mode: rollup would watch
  // that file as an input and immediately re-trigger on its own output,
  // failing with "Cannot import the generated bundle".
  ...(isWatch
    ? []
    : [
        {
          input: './dist/index.d.ts',
          output: [{ file: 'dist/index.d.ts', format: 'es' }],
          plugins: [dts()],
          external: [/\.scss$/, /\.css$/],
        },
      ]),
];
