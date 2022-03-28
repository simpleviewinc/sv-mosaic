import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@root/theme/theme";

const responsiveBreakpoint = BREAKPOINTS.topComponent.responsiveView;
const mobileBreakpoint = BREAKPOINTS.mobile;
const bigScreenBreakpoint = BREAKPOINTS.topComponent.bigScreenView;

export const useWindowResizer = (type) => {

	const [view, setView] = useState(null);

	const debounce = (func, timeout = 300) => {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => { func.apply(this, args); }, timeout);
		};
	}

	const setResponsivenessDebounced = debounce(() => setResponsiveness());

	useEffect(() => {
		if (type === "drawer") {
			setView("DRAWER");
		} else {
			setResponsivenessDebounced();
			window.addEventListener("resize", setResponsiveness);

			return () => {
				window.removeEventListener("resize", setResponsiveness);
			};
		}
	}, []);

	const setResponsiveness = () => {
		const innerWidth = window.innerWidth;
		if (innerWidth < mobileBreakpoint) {
			setView("MOBILE");
		} else if (innerWidth < responsiveBreakpoint && innerWidth >= mobileBreakpoint) {
			setView("RESPONSIVE");

		} else if (innerWidth > bigScreenBreakpoint) {
			setView("BIG_DESKTOP");
		} else {
			setView("DESKTOP");
		}
	};

	return { view };
}