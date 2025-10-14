import '@amsterdam/design-system-tokens/dist/index.css';
import '@amsterdam/design-system-tokens/dist/compact.theme.css';
import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';

import type { Preview, StoryContext, StoryFn } from '@storybook/react-vite';

import { Page } from '@amsterdam/design-system-react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { clsx } from 'clsx';

import { viewports } from './viewports';
import '../src/styles/overrides.css';

export const decorators = [
  (Story: StoryFn, { args }: StoryContext) => (
    <Page
      className={clsx({
        'ams-docs-dark-background': args['color'] === 'inverse',
        'ams-docs-light-background': args['color'] === 'contrast',
      })}
      lang="nl"
    >
      <Story />
    </Page>
  ),
  withThemeByClassName({
    defaultTheme: 'Spacious',
    themes: {
      Compact: 'ams-theme--compact',
      Spacious: '',
    },
  }),
];

export const parameters = {
  backgrounds: {
    disable: true,
    grid: {
      disable: true,
    },
  },
  controls: {
    sort: 'alpha', // Sorts controls in the Controls addon
  },
  docs: {
    controls: {
      sort: 'alpha', // Sorts controls in the Controls doc block – https://github.com/storybookjs/storybook/issues/25386#issuecomment-1905468177
    },
  },
  html: {
    root: '.ams-page',
  },
  viewMode: 'docs',
  viewport: {
    viewports,
  },
};

export const tags = ['autodocs'];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
