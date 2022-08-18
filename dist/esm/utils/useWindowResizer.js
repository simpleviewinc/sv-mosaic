import { useState, useEffect } from "react";
import { BREAKPOINTS } from "../theme/theme";
import { debounce } from "lodash";
const responsiveBreakpoint = BREAKPOINTS.topComponent.responsiveView;
const mobileBreakpoint = BREAKPOINTS.mobile;
const bigScreenBreakpoint = BREAKPOINTS.topComponent.bigScreenView;
const getView = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth < mobileBreakpoint) {
        return "MOBILE";
    }
    else if (innerWidth < responsiveBreakpoint &&
        innerWidth >= mobileBreakpoint) {
        return "RESPONSIVE";
    }
    else if (innerWidth > bigScreenBreakpoint) {
        return "BIG_DESKTOP";
    }
    else {
        return "DESKTOP";
    }
};
export const useWindowResizer = (type) => {
    const [view, setView] = useState(getView());
    const setResponsiveness = () => {
        const view = getView();
        setView(view);
    };
    const setResponsivenessDebounced = debounce(setResponsiveness, 300);
    useEffect(() => {
        if (type === "drawer") {
            setView("DRAWER");
        }
        else {
            setResponsivenessDebounced();
            window.addEventListener("resize", setResponsiveness);
            return () => {
                window.removeEventListener("resize", setResponsiveness);
            };
        }
    }, []);
    return { view };
};
