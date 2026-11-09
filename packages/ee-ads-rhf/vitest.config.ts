import { defineConfig } from 'vitest/config';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    clearMocks: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/vitest-setup.ts'],
  },
});
