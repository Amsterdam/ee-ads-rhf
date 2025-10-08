import baseConfig from '../../eslint.config.mjs';
import storybook from 'eslint-plugin-storybook';

export default [
  ...baseConfig,
  {
    files: ['**/*.stories.@(js|jsx|ts|tsx|mjs|cjs)'],
    ...storybook.configs['flat/recommended'][0],
  },
  {
    ignores: ['!.storybook'],
  },
];
