import { MosaicCSSContainer } from "@root/types";

export interface TitleWrapperProps {
	title: string;
	description?: string;
	onBack?: (() => void) | ((e: any) => void);
	backLabel?: TitleBackButtonProps["label"];
	collapse?: MosaicCSSContainer;
}

export type TitleBackButtonProps = Pick<TitleWrapperProps, "collapse"> & {
	onClick: TitleWrapperProps["onBack"];
	label?: string;
};
