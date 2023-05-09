import { ButtonProps } from "@root/components/Button";
import { FieldDef } from "@root/components/Field";
import { Section } from "@root/forms/FormNav/FormNavTypes";
import { MosaicObject } from "@root/types";

export interface SectionDef extends Section {
	title?: string;
	description?: string | JSX.Element;
	fields: string[][][];
	collapsed?: boolean;
}

export interface FormProps {
	state: any;
	title?: string;
	onBack?: (() => void) | ((...args: any) => void);
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
}

export { FieldDef };
