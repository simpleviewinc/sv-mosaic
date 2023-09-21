import { MosaicCSSContainer } from "@root/types";

export type TitleWrapperProps = {
	title: string;
	description?: string;
	onBack?: (() => void) | ((e: any) => void)
	collapse?: MosaicCSSContainer
}

export type TitleBackButtonProps = Pick<TitleWrapperProps, "collapse"> & {
    onClick: TitleWrapperProps["onBack"]
}
