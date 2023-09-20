import { ButtonProps } from "@root/components/Button";
import { FieldDef } from "@root/components/Field";
import { Section } from "@root/forms/FormNav/FormNavTypes";
import { TitleWrapperProps } from "@root/forms/TopComponent/Utils/TitleWrapperTypes";
import { MosaicGridConfig, MosaicObject, MosaicShow } from "@root/types";



export interface SectionDef extends Section {
	title?: string;
	description?: string | JSX.Element;
	fields: MosaicGridConfig;
	collapsed?: boolean;
	show?: MosaicShow
}

export interface FormProps {
	state: any;
	title?: string;
	onBack?: (() => void) | ((...args: any) => void);
	backLabel?: TitleWrapperProps["backLabel"]
	fields: FieldDef[];
	sections?: SectionDef[];
	dispatch: any;
	dialogOpen?: boolean;
	description?: string;
	getFormValues?(): Promise<MosaicObject>;
	handleDialogClose?: (val: boolean) => void;
	buttons?: ButtonProps[];
	tooltipInfo?: string;
	showActive?: boolean;
	scrollSpyThreshold?: number;
}

export { FieldDef };
