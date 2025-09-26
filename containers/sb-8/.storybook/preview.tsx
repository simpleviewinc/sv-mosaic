import React from "react";
import type { Preview } from "@storybook/react";
import ThemeProvider from "#mosaic/components/ThemeProvider";

import "./mosaic-preview.css";
import "./docs-fonts.css";

const preview: Preview = {
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	parameters: {
		options: {
			storySort: (a, b) => {
				const explicitStoryOrder = [
					"Introduction",
					"Contexts/ThemeProvider",
				];

				const aIndex = explicitStoryOrder.indexOf(a.title);
				const bIndex = explicitStoryOrder.indexOf(b.title);

				if (aIndex < 0 && bIndex < 0) {
					return 0;
				}

				if (bIndex < 0) {
					return -1;
				}

				if (aIndex < 0) {
					return 1;
				}

				return aIndex - bIndex;
			},
		},
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
