import type { StorybookConfig } from '@storybook/nextjs';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  staticDirs: ['../public', '../static'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: (config) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    config.plugins.push(new VanillaExtractPlugin());
    return config;
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
