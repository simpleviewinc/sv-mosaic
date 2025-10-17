export const BREAKPOINTS = {
	sm: "480px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1536px",
};

export const CONTAINERS = {
	ASSET_CARD: "asset_card",
	CONTENT: "content",
	FORM: "form",
	FORM_COL: "form_column",
	CHECKBOX_LIST: "checkbox_list",
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
	icon: {
		sm: "18px",
		md: "24px",
		lg: "36px",
		xl: "48px",
	},
};

const line = {
	/** 1.2em */
	"2xtight": "1.2em",
	/** 1.222222222em */
	xtight: "1.222222222em",
	/** 1.25em */
	tight: "1.25em",
	/** 1.266666667em */
	snug: "1.266666667em",
	/** 1.285714286em */
	normal: "1.285714286em",
	/** 1.3em */
	relaxed: "1.3em",
	/** 1.333333333em */
	loose: "1.333333333em",
	/** 1.4em */
	xloose: "1.4em",
	/** 1.428571429em */
	"2xloose": "1.428571429em",
	/** 1.5em */
	"3xloose": "1.5em",
	/** 1.555555556em */
	"4xloose": "1.555555556em",
	/** 1.8em */
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
	translucent: {
		grey: {
			100: "rgba(0, 0, 0, 0.06)",
		},
		gold: {
			100: "rgba(255, 192, 0, 0.27)",
		},
	},
};

const rounded = {
	xs: "3px",
	sm: "4px",
	md: "6px",
	full: "9999px",
};

const theme = {
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
