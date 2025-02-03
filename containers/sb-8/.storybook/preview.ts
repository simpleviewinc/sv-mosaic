import type { Preview } from "@storybook/react";
import "./documentation.css";

import "./mosaic-preview.css";

const preview: Preview = {
	parameters: {
		layout: "fullscreen",
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		/**
     * There's a problem with the react-element-to-jsx-string 15.0.0
     * package that causes Storybook to hang indefinitely when any
     * component props refer to a DOM element. This is a tempoary
     * fix.
     *
     * @link https://github.com/storybookjs/storybook/issues/19575
     */
		docs: {
			source: { type: "code" },
		},
	},
};

export default preview;
