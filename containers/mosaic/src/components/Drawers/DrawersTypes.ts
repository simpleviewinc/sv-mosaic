import type { ReactNode } from "react";

export interface DrawersProps<T> {
	drawers: T[];
	children: (drawerDef: T) => ReactNode;
}
