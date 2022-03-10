import { FormButtonProps } from "@root/forms/Button";
import { FieldDef } from "@root/components/Field";
import { ReactNode } from "react";
import { Section } from "../FormNav/FormNavTypes";
import { MosaicObject } from "@root/types";

export interface FormState {
	data: Record<string, any>;
	touched: Record<string, boolean>;
	errors: Record<string, string>;
}

export interface SectionDef extends Section {
	title?: string;
	description?: string | JSX.Element;
	fields: (string | FieldDef)[][][];
	children?: ReactNode;
}

export interface FormProps {
	title?: string;
	description?: string;
	type?: 'drawer';
	state: any;
	dispatch: any;
	events?: any;
	fields: FieldDef[];
	sections?: SectionDef[];
	onSubmit?(...args: any): any;
	submitButtonAttrs?: FormButtonProps;
	onCancel?(...args: any): any;
	cancelButtonAttrs?: FormButtonProps;
	getFormValues?(): Promise<MosaicObject>;
	onLoad?(...args: any): any;
}

