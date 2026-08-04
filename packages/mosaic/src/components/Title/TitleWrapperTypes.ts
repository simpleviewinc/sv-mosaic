import type { MosaicCSSContainer } from "@root/types";
import type { ReactNode } from "react";

export interface TitleWrapperProps {
	title: ReactNode;
	description?: string;
	onBack?: (() => void) | ((e: any) => void);
	backLabel?: TitleBackButtonProps["label"];
	collapse?: MosaicCSSContainer;
}

export type TitleBackButtonProps = Pick<TitleWrapperProps, "collapse"> & {
	onClick: TitleWrapperProps["onBack"];
	label?: string;
};
