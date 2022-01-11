import { FormButtonProps } from "@root/forms/Button";
import { FieldDef } from "@root/components/Field";
import { ReactNode } from "react";
import { Section } from "../FormNav/FormNavTypes";

export interface FormState {
	data: Record<string, any>;
	touched: Record<string, boolean>;
	errors: Record<string, string>;
}

// export interface FieldProps {
// 	name: string;
// 	label?: string;
// 	required?: boolean;
// 	helperText?: string;
// 	instructionText?: string;
// 	onChange?: any;
// 	ref?: string | FieldDef;
// 	//customValidators?: Validator[]
// }

// export interface FieldDef extends FieldProps {
// 	component: any;
// 	inputSettings?: any;
// 	type?: string;
// 	layout?: {
// 		section?: number;
// 		row?: number;
// 		col?: number;
// 	};
// 	// validators?: { (): string | JSX.Element }[];
// }

export interface SectionDef extends Section {
	title?: string;
	description?: string | JSX.Element;
	fields: (string | FieldDef)[][][];
	children?: ReactNode;
}

export interface FormProps {
	state: any;
	dispatch: any;
	events?: any;
	title?: string;
	description?: string;
	fields: FieldDef[];
	sections?: SectionDef[];
	onSubmit?(...args: any): any;
	submitButtonAttrs?: FormButtonProps;
	onCancel?(...args: any): any;
	cancelButtonAttrs?: FormButtonProps;
}

