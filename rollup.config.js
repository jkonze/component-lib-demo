import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';


import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: [
        '**/__tests__/**',
        '**/*.stories.tsx'
      ],
      clean: true
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    babel({ exclude: 'node_modules/**' , babelHelpers: 'bundled'}),
    commonjs()
  ],
  external: ['react', 'react-dom'],
}
