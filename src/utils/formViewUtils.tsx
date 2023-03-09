import * as React from "react";
import { BREAKPOINTS } from "@root/theme/theme";
import { ViewType } from "@root/forms/TopComponent";
import {
	createContext,
	ReactElement,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";
import { debounce } from "lodash";
import { Views } from "@root/theme/theme";

const responsiveBreakpoint = BREAKPOINTS.topComponent.responsiveView;
const mobileBreakpoint = BREAKPOINTS.mobile;
const bigScreenBreakpoint = BREAKPOINTS.topComponent.bigScreenView;

export const getView = (formContainerWidth: number): ViewType => {
	if (formContainerWidth < mobileBreakpoint) {
		return Views.mobile;
	} else if (
		formContainerWidth < responsiveBreakpoint &&
    formContainerWidth >= mobileBreakpoint
	) {
		return Views.responsive;
	} else if (formContainerWidth >= bigScreenBreakpoint) {
		return Views.bigDesktop;
	} else {
		return Views.desktop;
	}
};

export const useViewResizer = ({ formContainerRef }) => {
	const [view, setView] = useState(getView(window.innerWidth));

	const setFormView = (formContainerWidth: number) => {
		const view = getView(formContainerWidth);
		setView(view);
	};

	const setFormViewDebounced = debounce(setFormView, 300);

	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			setFormViewDebounced(entries[0].contentRect.width);
		});

		observer.observe(formContainerRef?.current);

		return () =>
			formContainerRef.current && observer.unobserve(formContainerRef.current);
	}, []);

	return { view };
};

const ViewContext = createContext<string>("");

interface ViewProviderProps {
  children: ReactNode;
  value: string;
}

export const ViewProvider = ({
	value,
	children,
}: ViewProviderProps): ReactElement => {
	return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
};

export const useView = (defaultValue?: string) => {
	const view = useContext(ViewContext);

	if (!view) {
		throw new Error("useView must be used within a ViewProvider");
	}

	return view || defaultValue;
};
