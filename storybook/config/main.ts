import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/stories/components/CheckboxControl/CheckboxControl.mdx',
    '../src/stories/components/CheckboxControlGroup/CheckboxControlGroup.mdx',
    '../src/stories/components/DateControl/DateControl.mdx',
    '../src/stories/components/FileInputControl/FileInputControl.mdx',
    '../src/stories/components/PasswordInputControl/PasswordInputControl.mdx',
    '../src/stories/components/RadioControl/RadioControl.mdx',
    '../src/stories/components/ReactSelectControl/ReactSelectControl.mdx',
    '../src/stories/components/SelectControl/SelectControl.mdx',
    '../src/stories/components/SelectInput/SelectInput.mdx',
    '../src/stories/components/SwitchControl/SwitchControl.mdx',
    '../src/stories/components/TextAreaControl/TextAreaControl.mdx',
    '../src/stories/components/TextInputControl/TextInputControl.mdx',
    '../src/stories/components/TimeControl/TimeControl.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
