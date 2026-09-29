import { createContext, useContext } from "react";

export interface DrawerContextValue {
	registerTitle: (id: string | null) => void;
	registerInitialFocus: (element: HTMLElement | null) => void;
}

export const DrawerContext = createContext<DrawerContextValue | null>(null);

export const useDrawerContext = () => useContext(DrawerContext);
