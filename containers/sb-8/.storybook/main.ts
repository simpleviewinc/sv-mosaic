import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      server: {
        watch: {
          usePolling: true,
          interval: 500
        }
      }
    });
  },
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  typescript: {
    reactDocgen: false,
  },
};
export default config;
