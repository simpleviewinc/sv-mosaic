import type { ButtonProps } from "@root/components/Button";
import type { FieldDef } from "@root/components/Field";
import type { TitleWrapperProps } from "@root/components/Title";
import type { MosaicGridConfig, MosaicToggle } from "@root/types";
import type { FormMethods, FormStable, FormState } from "./useForm/types";
import type { ReactNode } from "react";

export type FormSpacing = "normal" | "compact";

export interface Section {
	title?: string;
	id?: string;
}

export interface SectionDef extends Section {
	title?: string;
	description?: string | JSX.Element;
	fields: MosaicGridConfig;
	collapsed?: boolean;
	show?: MosaicToggle<FormState>;
	gridMinWidth?: string;
}

export interface AutofocusOptions {
	selectAll?: boolean;
}

export interface FormProps {
	state: FormState;
	stable: FormStable;
	title?: string;
	onBack?: (() => void) | ((...args: any) => void);
	backLabel?: TitleWrapperProps["backLabel"];
	fields: FieldDef[];
	sections?: SectionDef[];
	dialogOpen?: boolean;
	description?: string;
	handleDialogClose?: (val: boolean) => void;
	buttons?: ButtonProps[];
	scrollSpyThreshold?: number;
	fullHeight?: boolean;
	spacing?: FormSpacing;
	useSectionHash?: string | false;
	onSubmit?: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>["onSubmit"];
	methods: FormMethods;
	autoFocus?: boolean | AutofocusOptions;
	bottomSlot?: ReactNode;
	hideSectionNav?: boolean;
}

export interface FieldError {
	message: string;
}

export type ExternalToInternalValue = (value: any, fieldDef: FieldDef) => any;

export type InternalToExternalValue = (value: any, fieldDef: FieldDef) => any;

export interface FormContextState {
	state: FormState;
	methods: FormMethods;
}
