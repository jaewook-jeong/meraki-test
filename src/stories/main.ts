import { mergeConfig } from 'vite';
const path = require('path');
import type { StorybookConfig } from '@storybook/react-vite';


const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-css-modules'],
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
    });
  },
};

export default config