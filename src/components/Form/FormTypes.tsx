import { ButtonProps } from "@root/components/Button";
import { FieldDef } from "@root/components/Field";
import { FieldDefCustom } from "@root/components/Field";
import { TitleWrapperProps } from "@root/components/Title";
import { MosaicGridConfig, MosaicObject, MosaicToggle } from "@root/types";
import { FormState } from "./state/types";

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

export interface FormProps {
	state: any;
	title?: string;
	onBack?: (() => void) | ((...args: any) => void);
	backLabel?: TitleWrapperProps["backLabel"];
	fields: FieldDef[];
	sections?: SectionDef[];
	dispatch: any;
	dialogOpen?: boolean;
	description?: string;
	getFormValues?(): Promise<MosaicObject>;
	handleDialogClose?: (val: boolean) => void;
	buttons?: ButtonProps[];
	showActive?: boolean;
	scrollSpyThreshold?: number;
	fullHeight?: boolean;
	spacing?: FormSpacing;
	useSectionHash?: string | false
}

export interface FieldError {
	message: string;
}

export type FieldValueResolver = (value: any, fieldDef: FieldDef) => { internalValue: any; value: any };

export { FieldDef, FieldDefCustom };
