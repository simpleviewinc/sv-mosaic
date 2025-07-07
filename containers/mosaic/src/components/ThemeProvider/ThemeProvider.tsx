import type { PropsWithChildren } from "react";

import React, { useEffect } from "react";

import createElem from "@root/utils/dom/createElem";
import { createTheme, ThemeProvider as MuiThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "@root/theme";
import type { ThemeProviderProps } from "./ThemeProviderTypes";
import baselineCss from "./baselineCss";

type ElemDef<T extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap> = {
	tagName: T;
	condition?: (props: ThemeProviderProps) => boolean;
} & Partial<HTMLElementTagNameMap[T]>

const elemDefs: ElemDef[] = [
	{
		condition: ({ injectGoogleFontCDN }) => injectGoogleFontCDN,
		tagName: "link",
		rel: "preconnect",
		href: "https://fonts.googleapis.com",
	},
	{
		condition: ({ injectGoogleFontCDN }) => injectGoogleFontCDN,
		tagName: "link",
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "",
	},
	{
		condition: ({ injectGoogleFontCDN }) => injectGoogleFontCDN,
		tagName: "link",
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
	},
	{
		condition: ({ injectRootFontStyles }) => injectRootFontStyles,
		tagName: "style",
		innerHTML: baselineCss,
	},
];

const muiTheme = createTheme({
	typography: {
		fontFamily: theme.family.sans,
	},
	components: {
		MuiChip: {
			styleOverrides: {
				root: {
					fontSize: "inherit",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					fontSize: "inherit",
					":focus": {
						outline: "none",
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					color: "inherit",
				},
			},
		},
	},
});

const ThemeProvider = ({
	children,
	injectGoogleFontCDN = true,
	injectRootFontStyles = true,
}: PropsWithChildren<ThemeProviderProps>) => {
	useEffect(() => {
		const elems = elemDefs
			.filter(({ condition }) => !condition || condition({ injectGoogleFontCDN, injectRootFontStyles }))
			.map(({ tagName, ...elemProps }) => createElem(tagName, {
				...elemProps,
				prependTo: document.head,
			}));

		return () => {
			for (const elem of elems) {
				document.head.removeChild(elem);
			}
		};
	}, [injectGoogleFontCDN, injectRootFontStyles]);

	return (
		<StyledEngineProvider injectFirst>
			<MuiThemeProvider theme={muiTheme}>
				{children}
			</MuiThemeProvider>
		</StyledEngineProvider>
	);
};

export default ThemeProvider;
