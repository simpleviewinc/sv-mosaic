export const BREAKPOINTS = {

	sm: "480px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1536px",

	mobile: 480,
	topComponent: {
		responsiveView: 1075,
		bigScreenView: 1200,
	},
};

export const CONTAINERS = {
	ASSET_CARD: "asset_card",
	CONTENT: "content",
	FORM: "form",
	FORM_COL: "form_column",
	CHECKBOX_LIST: "checkbox_list",
};

export enum Views {
	bigDesktop = "BIG_DESKTOP",
	desktop = "DESKTOP",
	drawer = "DRAWER",
	mobile = "MOBILE",
	responsive = "RESPONSIVE",
}

const colorMap = {
	almostBlack: "26,26,26",
	darkerRealTeal: "0, 87, 105",
	darkerRed: "133,0,0",
	darkerSimplyGold: "227, 165, 32",
	darkRed: "177,0,0",
	grey1: "250,250,250",
	grey2: "240,242,245",
	grey3: "107,111,124",
	grey4: "59,66,78",
	realTeal: "0, 141, 168",
	simplyGrey: "190,190,190",
	simplyBlue: "0,164,239",
	simplyGold: "253,185,36",
	simplyGreen: "141,198,63",
};

type MY_OBJECT_KEYS = keyof typeof colorMap;
type Color = Record<string, string>;

const newColors: Record<MY_OBJECT_KEYS, Color> = {
	almostBlack: {},
	darkerRealTeal: {},
	darkerRed: {},
	darkerSimplyGold: {},
	darkRed: {},
	grey1: {},
	grey2: {},
	grey3: {},
	grey4: {},
	realTeal: {},
	simplyGrey: {},
	simplyBlue: {},
	simplyGold: {},
	simplyGreen: {},
};

const opacities = [1, 0.8, 0.6, 0.4, 0.2, 0.1, 0.05];

const rgbaToRGB = (color: string, opacity: number) => {
	const colors = color.split(",");

	const rNum = Number(colors[0]);
	const gNum = Number(colors[1]);
	const bNum = Number(colors[2]);
	const alpha = Number(opacity);

	const r = Math.round((1 - alpha) * 255 + alpha * rNum);
	const g = Math.round((1 - alpha) * 255 + alpha * gNum);
	const b = Math.round((1 - alpha) * 255 + alpha * bNum);

	return `rgb(${r}, ${g}, ${b})`;
};

for (const [name, rgb] of Object.entries(colorMap)) {
	newColors[name] = {};
	for (const opacity of opacities) {
		newColors[name][opacity * 100] = rgbaToRGB(rgb, opacity);
	}
}

const colors = {
	black: newColors.almostBlack["100"],
	blackIntense: "#313131",
	blackWashed: "#eeeeee",
	blue: "#0070F2",
	blueIntense: "#0059bf",
	blueWashed: "#edf5fe",
	blueHover: "rgba(0, 89, 191, 1)",
	blueActive: "rgba(0, 71, 153, 1)",
	blueTeal: "#008DA8",
	tealHover: "#005769",
	tealOpacity: "rgb(0, 141, 168, 0.2)",
	lightBlue: "#edf5fe",
	lightBlueIntense: "#e2efff",
	// lightBlueWashed is the same as lightBlue because light blue is already pretty washed
	lightBlueWashed: "#edf5fe",
	lightRed: "#B100000D",
	red: "#b10000",
	redIntense: "#850000",
	redWashed: "#f2e3e3",
	redHover: "rgba(138, 0, 0, 1)",
	redActive: "rgba(110, 0, 0, 1)",
	gray: "#6B6F7C",
	grayIntense: "#555860",
	grayWashed: "#f0f1f2",
	gray100: "#FAFAFA",
	gray200: "#F0F2F5",
	gray200Intense: "#D7D8DC",
	// gray200Washed is the same as gray200 because gray200 is already pretty washed
	gray200Washed: "#F0F2F5",
	gray300: "#D7D8DC",
	gray400: "#9D9FA7",
	gray500: "#848791",
	gray600: "#6B6F7C",
	gray700: "#3B424E",
	gray800: "#0A1323",
	simplyGold: "#FDB924",
	yellow: "#FDB924",
	yellowIntense: "#E3A520",
	yellowWashed: "#FFF3D9",
	simplyGoldDisabled: "#FED57B",
	simplyGoldHover: "#E3A520",
	simplyGoldOpacity: "rgb(253, 185, 36, 0.3)",
	simplyGray: "#BEBEBE",
	disabledTextColor: "rgba(0, 0, 0, 0.38)",
	disableBackground: "rgb(249, 250, 251)",
	disableBorder: "rgb(228, 228, 228)",
	disabledBorderFocus: "rgb(164, 164, 164)",
	simplyGrayOpacity: "rgb(190, 190, 190, 0.3)",
	teal: "#008DA8",
	tealIntense: "#0D778C",
	tealWashed: "#e2f3f7",
	label: "#3B424E", //Same as gray700
	almostBlack: "#1A1A1A",
	errorBackground: "#B100000D",
	white: "#FFFFFF",
	whiteIntense: "#EEEEEE",
	whiteWashed: "rgba(255,255,255,.2)",
	blackDisabled: "rgba(0, 0, 0, 0.26)",
};

const borders = {
	black: `1px solid ${colors.gray800}`,
	lightGray: "1px solid rgba(0, 0, 0, .05)",
	gray: "1px solid rgba(0, 0, 0, .15)",
	fieldGray: "1px solid #CCCCCC",
	error: "1px solid #B10000",
	simplyGrey: `1px solid ${newColors.simplyGrey["100"]}`,
};

const legacyThemeProps = {
	/**
	 * @deprecated
	 */
	h1: `
		font-size: 20px;
		font-weight: 500;
	`,
	/**
	 * @deprecated
	 */
	h2: `
		font-size: 14px;
		font-weight: normal;
	`,
	/**
	 * @deprecated
	 */
	iconFontSize: "24px",
	/**
	 * @deprecated
	 */
	fontWeight: {
		/**
		 * @deprecated
		 */
		light: 100,
		/**
		 * @deprecated
		 */
		normal: 400,
		/**
		 * @deprecated
		 */
		medium: 500,
		/**
		 * @deprecated
		 */
		semiBold: 600,
		/**
		 * @deprecated
		 */
		bold: 700,
	},
	/**
	 * @deprecated
	 */
	colors,
	/**
	 * @deprecated
	 */
	newColors,
	/**
	 * @deprecated
	 */
	borders,
	/**
	 * @deprecated
	 */
	fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif",
	/**
	 * @deprecated
	 */
	museoFont: "Museo-Sans, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif",
	/**
	 * @deprecated
	 */
	animations: {
		backgroundMs: "250ms",
	},
	breakpoints: {
		/**
		 * @deprecated
		 */
		mobile: `${BREAKPOINTS.mobile}px`,
	},
	/**
	 * @deprecated
	 */
	fieldSpecs: {
		inputText: {
			height: "19px",
			padding: "12px 16px",
			totalHeight: "43px",
			shadow: `0px 0px 5px ${colors.almostBlack}26`,
		},
		selectors: {
			dimentions: "20px",
		},
		inputSpacing: {
			label: {
				marginBottom: "8px",
			},
			helperText: {
				marginTop: "8px",
			},
			fieldPadding: "15px",
		},
	},
};

// Typography
const fontSize = {
	display: {
		/** 72px */
		"2xl": "5.142857143rem",
		/** 60px */
		xl: "4.285714286rem",
		/** 48px */
		lg: "3.428571429rem",
		/** 36px */
		md: "2.571428571rem",
		/** 30px */
		sm: "2.142857143rem",
		/** 24px */
		xs: "1.714285714rem",
	},
	text: {
		/** 20px */
		"2xl": "1.428571429rem",
		/** 18px */
		xl: "1.285714286rem",
		/** 16px */
		lg: "1.142857143rem",
		/** 14px */
		md: "1rem",
		/** 12px */
		sm: "0.8571428571rem",
		/** 10px */
		xs: "0.7142857143rem",
	},
	body: {
		/** 20px */
		"2xl": "1.428571429rem",
		/** 18px */
		xl: "1.285714286rem",
		/** 16px */
		lg: "1.142857143rem",
		/** 14px */
		md: "1rem",
		/** 12px */
		sm: "0.8571428571rem",
		/** 10px */
		xs: "0.7142857143rem",
	},
};

const line = {
	"2xtight": "1.2em",
	xtight: "1.222222222em",
	tight: "1.25em",
	snug: "1.266666667em",
	normal: "1.285714286em",
	relaxed: "1.3em",
	loose: "1.333333333em",
	xloose: "1.4em",
	"2xloose": "1.428571429em",
	"3xloose": "1.5em",
	"4xloose": "1.555555556em",
	"8xloose": "1.8em",
};

const weight = {
	inherit: "inherit",
	/**
	 * Font weight 400
	 */
	regular: "400",
	/**
	 * Font weight 500
	 */
	medium: "500",
	/**
	 * Font weight 600
	 */
	semi: "600",
	/**
	 * Font weight 700
	 */
	bold: "700",
};

const family = {
	sans: ["Roboto", "sans-serif"].join(","),
	mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"].join(","),
};

// Borders and shadows
// https://codesandbox.io/p/sandbox/6dczss
// to be used like
// box-shadow: ${theme.border.dark}, ${theme.shadow.sm};
// The border definition MUST come first.
const shadow = {
	sm: "var(--mos-shadow-sm)",
	md: "var(--mos-shadow-md)",
	lg: "var(--mos-shadow-lg)",
	xl: "var(--mos-shadow-xl)",
	"2xl": "var(--mos-shadow-2xl)",
};

const border = {
	dark: "var(--mos-border-dark)",
	medium: "var(--mos-border-medium)",
	light: "var(--mos-border-light)",
};

// Envourage the dev to use standard factors, but still allow them to use arbitrary ones if necessary.
// Support long CSS unit syntax.
// Support string literals to do things like theme.spacing("1px", 2, 2) for "1px 8px 8px"
type SpacingFactor = 0 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | (number & {}) | (string & {});
const spacing = (...factors: SpacingFactor[]) => {
	return factors.map(factor => typeof factor === "string" ?
		factor :
		`${factor * 4}px`,
	).join(" ");
};

const color = {
	white: "#FFFFFF",
	black: "#101112",
	gray: {
		25: "#FCFCFD",
		50: "#F7F7F8",
		100: "#F1F2F3",
		200: "#E9E9EC",
		300: "#D9DADE",
		400: "#B2B5BD",
		500: "#898D99",
		600: "#6B6F7C",
		700: "#4B4E59",
		800: "#41434B",
		900: "#393A41",
		925: "#26272B",
		950: "#1B1C1F",
	},
	gold: {
		25: "#FFFDF7",
		50: "#FFFAEB",
		100: "#FFF1C6",
		200: "#FEDB89",
		300: "#FECB4B",
		400: "#FDB924",
		500: "#F9B11F",
		600: "#F4A910",
		700: "#E6A018",
		800: "#D19012",
		900: "#AF7402",
		950: "#8B5800",
	},
	red: {
		25: "#FFEFEF",
		50: "#FFDCDC",
		100: "#FFAEAE",
		200: "#FE7474",
		300: "#FC3E3E",
		400: "#EE2020",
		500: "#E40C0C",
		600: "#D10000",
		700: "#B10000",
		800: "#940808",
		900: "#850000",
		950: "#520000",
	},
	teal: {
		25: "#EEFAFB",
		50: "#E0F5F8",
		100: "#B3E4ED",
		200: "#72C7D6",
		300: "#49C4DA",
		400: "#03B4D3",
		500: "#009CB8",
		600: "#008DA8",
		700: "#00829B",
		800: "#0B697F",
		900: "#0E576B",
		950: "#023A4A",
	},
};

const rounded = {
	sm: "4px",
	md: "6px",
	full: "9999px",
};

const theme = {
	...legacyThemeProps,
	fontSize,
	line,
	weight,
	family,
	shadow,
	border,
	spacing,
	color,
	rounded,
} as const;

export type Theme = typeof theme;

export default theme;
