import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
	stories: [
		"../stories/Introduction.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../stories/**/*.mdx",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		{
			name: "@storybook/addon-docs",
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
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
					interval: 500,
				},
			},
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
