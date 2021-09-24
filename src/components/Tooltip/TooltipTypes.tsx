import { ReactNode } from "react";

export interface TooltipProps {
	text: string;
	children: ReactNode;
	description?: string | JSX.Element;
}