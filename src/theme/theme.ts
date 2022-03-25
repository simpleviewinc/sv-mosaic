export const BREAKPOINTS = {
	mobile : 480,
	topComponent : {
		responsiveView: 1075,
		bigScreenView: 1718,
	}
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
		normal: 400,
		medium: 500,
		semiBold: 600,
		bold: 700
	},
	colors : {
		black : "#0A1323",
		blue : "#0070F2",
		blueHover : "rgba(0, 89, 191, 1)",
		blueActive : "rgba(0, 71, 153, 1)",
		blueTeal : "#008DA8",
		blueTealHover : "#005769",
		blueTealOpacity : "rgb(0, 141, 168, 0.2)",
		grayHover : "#F0F2F5",
		labelDisabled : "#838791",
		lightRed : "#B100000D",
		red : "#b10000",
		redHover : "rgba(138, 0, 0, 1)",
		redActive : "rgba(110, 0, 0, 1)",
		gray100 : "#FAFAFA",
		gray200 : "#F0F2F5",
		gray300 : "#D7D8DC",
		gray400 : "#9D9FA7",
		gray500 : "#848791",
		gray600 : "#6B6F7C",
		gray700 : "#3B424E",
		gray800 : "#0A1323",
		simplyGold : "#FDB924",
		simplyGoldDisabled : "#FED57B",
		simplyGoldHover : "#E3A520",
		simplyGoldOpacity : 'rgb(253, 185, 36, 0.3)',
		simplyGray : '#BEBEBE',
		simplyGrayOpacity : 'rgb(190, 190, 190, 0.3)',
		assistiveText : "#6B6F7C", //Same as gray600
		label : "#3B424E", //Same as gray700
		almostBlack : "#1A1A1A",
		errorBackground: "#B100000D",
	},
	borders : {
		black : "1px solid #0A1323",
		lightGray : "1px solid rgba(0, 0, 0, .05)",
		gray : "1px solid rgba(0, 0, 0, .15)",
		fieldGray : "1px solid #CCCCCC",
		error : "1px solid #B10000",
		simplyGray: "1px solid #BEBEBE"
	},
	fontFamily : "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif",
	animations : {
		backgroundMs : "250ms"
	},
	breakpoints : {
		mobile : `${BREAKPOINTS.mobile}px`
	}
}
