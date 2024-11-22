export const BREAKPOINTS = {

	sm: "480px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1536px",

	mobile : 480,
	topComponent : {
		responsiveView: 1075,
		bigScreenView: 1200,
	},
};

export const CONTAINERS = {
	ASSET_CARD: "asset_card",
	CONTENT: "content",
	FORM: "form",
	FORM_COL: "form_column",
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
	blue : "#0070F2",
	blueIntense: "#0059bf",
	blueWashed: "#edf5fe",
	blueHover : "rgba(0, 89, 191, 1)",
	blueActive : "rgba(0, 71, 153, 1)",
	blueTeal : "#008DA8",
	tealHover : "#005769",
	tealOpacity : "rgb(0, 141, 168, 0.2)",
	lightBlue: "#edf5fe",
	lightBlueIntense: "#e2efff",
	// lightBlueWashed is the same as lightBlue because light blue is already pretty washed
	lightBlueWashed: "#edf5fe",
	lightRed : "#B100000D",
	red : "#b10000",
	redIntense: "#850000",
	redWashed: "#f2e3e3",
	redHover : "rgba(138, 0, 0, 1)",
	redActive : "rgba(110, 0, 0, 1)",
	gray : "#6B6F7C",
	grayIntense: "#555860",
	grayWashed: "#f0f1f2",
	gray100 : "#FAFAFA",
	gray200 : "#F0F2F5",
	gray200Intense : "#D7D8DC",
	// gray200Washed is the same as gray200 because gray200 is already pretty washed
	gray200Washed : "#F0F2F5",
	gray300 : "#D7D8DC",
	gray400 : "#9D9FA7",
	gray500 : "#848791",
	gray600 : "#6B6F7C",
	gray700 : "#3B424E",
	gray800 : "#0A1323",
	simplyGold : "#FDB924",
	yellow : "#FDB924",
	yellowIntense: "#E3A520",
	yellowWashed: "#FFF3D9",
	simplyGoldDisabled : "#FED57B",
	simplyGoldHover : "#E3A520",
	simplyGoldOpacity : "rgb(253, 185, 36, 0.3)",
	simplyGray : "#BEBEBE",
	disabledTextColor: "rgba(0, 0, 0, 0.38)",
	disableBackground: "rgb(249, 250, 251)",
	disableBorder: "rgb(228, 228, 228)",
	disabledBorderFocus: "rgb(164, 164, 164)",
	simplyGrayOpacity : "rgb(190, 190, 190, 0.3)",
	teal : "#008DA8",
	tealIntense: "#0D778C",
	tealWashed: "#e2f3f7",
	label : "#3B424E", //Same as gray700
	almostBlack : "#1A1A1A",
	errorBackground: "#B100000D",
	white: "#FFFFFF",
	whiteIntense: "#EEEEEE",
	whiteWashed: "rgba(255,255,255,.2)",
	blackDisabled: "rgba(0, 0, 0, 0.26)",
};

const borders = {
	black : `1px solid ${colors.gray800}`,
	lightGray : "1px solid rgba(0, 0, 0, .05)",
	gray : "1px solid rgba(0, 0, 0, .15)",
	fieldGray : "1px solid #CCCCCC",
	error : "1px solid #B10000",
	simplyGrey: `1px solid ${newColors.simplyGrey["100"]}`,
};

export default {
	h1 : `
		font-size: 20px;
		font-weight: 500;
	`,
	h2 : `
		font-size: 14px;
		font-weight: normal;
	`,
	iconFontSize : "24px",
	fontWeight : {
		light: 100,
		normal: 400,
		medium: 500,
		semiBold: 600,
		bold: 700,
	},
	colors,
	newColors,
	borders,
	fontFamily : "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif",
	museoFont: "Museo-Sans, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif",
	animations : {
		backgroundMs : "250ms",
	},
	breakpoints : {
		mobile : `${BREAKPOINTS.mobile}px`,
	},
	fieldSpecs: {
		inputText: {
			height : "19px",
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
