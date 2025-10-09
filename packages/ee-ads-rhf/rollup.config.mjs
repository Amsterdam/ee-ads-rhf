import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import dts from 'rollup-plugin-dts';
import filesize from 'rollup-plugin-filesize';
import fs from 'fs';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

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
    external: ['react', 'react-dom'],
    plugins: [
      peerDepsExternal({ includeDependencies: true }),
      resolve({ browser: true }),
      commonjs(),
      nodePolyfills(),
      typescript({
        tsconfig: './tsconfig.json',
        outputToFilesystem: true,
        declaration: true,
        declarationDir: 'dist',
        exclude: ['**/*.test.ts', '**/*.test.tsx'],
      }),
      filesize(),
    ],
  },
  {
    input: './dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
