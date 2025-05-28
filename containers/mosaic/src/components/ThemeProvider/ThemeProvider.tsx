import type { PropsWithChildren } from "react";

import React, { useEffect } from "react";

import createElem from "@root/utils/dom/createElem";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import theme from "@root/theme";

type ElemDef<T extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap> = {
	tagName: T;
} & Partial<HTMLElementTagNameMap[T]>

const elemDefs: ElemDef[] = [
	{
		tagName: "link",
		rel: "preconnect",
		href: "https://fonts.googleapis.com",
	},
	{
		tagName: "link",
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "",
	},
	{
		tagName: "link",
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
	},
	{
		tagName: "style",
		innerHTML: `
			:root {
				font-family: ${theme.family.sans};
				font-optical-sizing: auto;
				font-weight: 400;
				font-style: normal;
				font-size: 14px;
				font-variation-settings:
					"wdth" 100;
			}
		`.trim(),
	},
];

const muiTheme = createTheme({
	typography: {
		fontFamily: theme.family.sans,
	},
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
	useEffect(() => {
		const elems = elemDefs.map(({ tagName, ...elemProps }) => createElem(tagName, {
			...elemProps,
			appendTo: document.head,
		}));

		return () => {
			for (const elem of elems) {
				document.head.removeChild(elem);
			}
		};
	}, []);

	return (
		<MuiThemeProvider theme={muiTheme}>
			{children}
		</MuiThemeProvider>
	);
};

export default ThemeProvider;
