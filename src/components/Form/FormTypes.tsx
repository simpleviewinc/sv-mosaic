import { ButtonProps } from "@root/components/Button";
import { FieldDef } from "@root/components/Field";
import { FieldDefCustom } from "@root/components/Field";
import { TitleWrapperProps } from "@root/components/Title";
import { MosaicGridConfig, MosaicObject, MosaicToggle } from "@root/types";
import { FormMethods, FormStable, FormState } from "./useForm/types";

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
	state: FormState;
	stable: FormStable;
	title?: string;
	onBack?: (() => void) | ((...args: any) => void);
	backLabel?: TitleWrapperProps["backLabel"];
	fields: FieldDef[];
	sections?: SectionDef[];
	dialogOpen?: boolean;
	description?: string;
	getFormValues?(): Promise<MosaicObject>;
	handleDialogClose?: (val: boolean) => void;
	buttons?: ButtonProps[];
	showActive?: boolean;
	scrollSpyThreshold?: number;
	fullHeight?: boolean;
	spacing?: FormSpacing;
	useSectionHash?: string | false;
	onSubmit?: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>["onSubmit"];
	methods: FormMethods;
}

export interface FieldError {
	message: string;
}

export type FieldValueResolver = (value: any, fieldDef: FieldDef) => { internalValue: any; value: any };

export { FieldDef, FieldDefCustom };
