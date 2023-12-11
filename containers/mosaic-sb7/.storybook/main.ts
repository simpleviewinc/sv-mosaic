import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    const result = mergeConfig(config, {
      server: {
        watch: {
          usePolling: true,
          interval: 100,
        }
      }
    });

    return result;
  },
};
export default config;
