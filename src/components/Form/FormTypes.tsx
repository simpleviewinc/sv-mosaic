import { ButtonProps } from "@root/components/Button";
import { FieldDef } from "@root/components/Field";
import { ReactNode } from "react";
import { Section } from "@root/forms/FormNav/FormNavTypes";
import { MosaicObject } from "@root/types";

export interface SectionDef extends Section {
	title?: string;
	description?: string | JSX.Element;
	fields: string[][][];
	children?: ReactNode;
}

export interface FormProps {
	type?: "drawer";
	state: any;
	title?: string;
	fields: FieldDef[];
	sections?: SectionDef[];
	dispatch: any;
	onCancel?(...args: any): any;
	dialogOpen?: boolean;
	description?: string;
	getFormValues?(): Promise<MosaicObject>;
	handleDialogClose?: (val: boolean) => void;
	buttons?: ButtonProps[];
	tooltipInfo?: string;
	showActive?: boolean;
	setTopComponentDrawerHeight?: any;
	setFormLayoutPadding?: any;
}
