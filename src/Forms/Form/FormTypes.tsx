import { ReactNode } from "react";

export interface FormState {
	data: Record<string, any>;
	touched: Record<string, boolean>;
	errors: Record<string, string>;
}

export interface FieldProps {
  name: string;
  label?: string;
  required?: boolean;
  helperText?: string;
  instructionText?: string;
  onChange?: any;
  ref?: string | FieldDef;
  //customValidators?: Validator[]
}

export interface FieldDef extends FieldProps {
  component: any;
  inputSettings?: any;
	type?: string;
  layout?: {
    section?: number;
    row?: number;
    col?: number;
  };
  // validators?: { (): string | JSX.Element }[];
}

export interface SectionDef {
  title?: string;
  description?: string | JSX.Element;
  fields: (string | FieldDef)[][][];
  children?: ReactNode;
}