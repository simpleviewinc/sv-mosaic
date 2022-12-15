import { BREAKPOINTS } from "@root/theme/theme";
import { BaseTopComponentProps } from "@root/forms/TopComponent";

const responsiveBreakpoint = BREAKPOINTS.topComponent.responsiveView;
const mobileBreakpoint = BREAKPOINTS.mobile;
const bigScreenBreakpoint = BREAKPOINTS.topComponent.bigScreenView;


export const getView = (type, formContainerWidth): BaseTopComponentProps["view"] => {
	if (type === "drawer") {
		return "DRAWER";
	}

	if (formContainerWidth < mobileBreakpoint) {
		return "MOBILE";
	} else if (
		formContainerWidth < responsiveBreakpoint &&
		formContainerWidth >= mobileBreakpoint
	) {
		return "RESPONSIVE";
	} else if (formContainerWidth >= bigScreenBreakpoint) {
		return "BIG_DESKTOP";
	} else {
		return "DESKTOP";
	}
};

