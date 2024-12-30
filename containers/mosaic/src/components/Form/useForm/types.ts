import type { MosaicObject } from "@root/types";
import type { FieldObj, FieldDef } from "@root/components/Field";
import type { SectionDef } from "@root/components/Form";

export type ActionTypes =
    | "FIELD_TOUCHED"
    | "FIELD_VALIDATE"
    | "FIELD_UNVALIDATE"
    | "FORM_START_DISABLE"
    | "FORM_END_DISABLE"
    | "FORM_RESET"
    | "FORM_START_BUSY"
    | "FORM_END_BUSY";

export interface LegacyFormAction {
	type: ActionTypes;
	value: any;
	internalValue?: any;
	name?: string;
	clearErrors?: boolean;
	touched?: boolean;
}

export interface ActionSetFieldErrors {
	type: "SET_FIELD_ERRORS";
	errors: FormState["errors"];
	merge?: boolean;
	moveToError?: boolean;
}

export interface ActionSetFieldValues {
	type: "SET_FIELD_VALUES";
	values: MosaicObject<string>;
	internalValues: MosaicObject<string>;
	merge?: boolean;
	touched?: FormState["touched"];
	loadingInitial?: boolean;
	disabled?: boolean;
}

export interface ActionSetFormWaits {
	type: "SET_FORM_WAITS";
	waits: FormWait[];
}

export interface ActionReset {
	type: "RESET";
	data: MosaicObject<any>;
	internalData: MosaicObject<any>;
}

export type ActionSetSubmitWarning = FormState["submitWarning"] & {
	type: "SET_SUBMIT_WARNING";
};

export interface ActionDisable {
	type: "FORM_DISABLE";
	disabled: boolean;
	loadingInitial?: boolean;
}

export type FormAction =
	| ActionSetFieldErrors
	| ActionSetFieldValues
	| ActionSetFormWaits
	| ActionReset
	| ActionSetSubmitWarning
	| ActionDisable
    | LegacyFormAction;

export type FieldPath = string[];

export interface ValidateFieldParams {
	name: string;
	validateLinkedFields?: boolean;
	path?: FieldPath;
}

export type ValidateField = (params: ValidateFieldParams) => Promise<void>;

export type ValidateForm = () => Promise<boolean>;

export type SubmitForm = () => Promise<{ valid: boolean; data: any; activeFields?: string[] }>;

export type OnSubmitSuccess = (params: { data: any; activeFields: string[] }) => void;
export type OnSubmitError = (params: { data: any }) => void;

export type FormHandleSubmit = (onSuccess: OnSubmitSuccess, onError?: OnSubmitError) => () => Promise<void>;

export interface SetFormValuesParams {
	values: MosaicObject<any>;
	path?: FieldPath;
	initial?: boolean;
	validate?: boolean;
}

export type SetFormValues = (params: SetFormValuesParams) => void;

export interface SetFieldValueParams {
	name: string;
	value: unknown | ((current: unknown) => unknown);
	validate?: boolean;
	touched?: boolean;
	path?: FieldPath;
}

export type SetFieldValue = (params: SetFieldValueParams) => void;

export interface SetFieldBlurParams {
	name: string;
	path?: FieldPath;
}

export type SetFieldBlur = (params: SetFieldBlurParams) => void;

export interface RemoveWaitParams {
	names: string[];
}

export interface FormWait {
	name: string;
	message: string;
	disableForm: boolean;
}

export type RemoveWait = (params?: RemoveWaitParams) => void;

export type AddWaitParams = Pick<FormWait, "name" | "message"> & {
	disableForm?: FormWait["disableForm"];
};

export interface AddWaitResult {
	remove: () => void;
}

export type AddWait = (params?: AddWaitParams) => AddWaitResult;

export interface DisableFormParams {
	disabled?: boolean;
	initial?: boolean;
}

export type DisableForm = (params: DisableFormParams) => void;

export interface MountFieldParams {
	name: string;
	fieldRef?: HTMLDivElement;
	inputRef?: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
}

export type UnmountField = () => void;

export interface MountFieldResult {
	unmount: UnmountField;
}

export type MountField = (params: MountFieldParams) => MountFieldResult;

export interface FormInitParams {
	fields: FieldDef[];
	sections?: SectionDef[];
}

export type FormInit = (params: FormInitParams) => void;

export type SetSubmitWarning = (params: FormState["submitWarning"]) => void;

export type FormReset = () => void;

export interface FormMethods {
	setFormValues: SetFormValues;
	setFieldValue: SetFieldValue;
	setFieldBlur: SetFieldBlur;
	disableForm: DisableForm;
	submitForm: SubmitForm;
	addWait: AddWait;
	removeWait: RemoveWait;
	mountField: MountField;
	init: FormInit;
	reset: FormReset;
	setSubmitWarning: SetSubmitWarning;
}

export type FormTouched = MosaicObject<boolean>;

export interface FormState {
	internalData: MosaicObject<any>;
	data: MosaicObject<any>;
	errors: MosaicObject<string>;
	disabled: boolean;
	touched: MosaicObject<boolean | FormTouched>;
	submitWarning: { open: boolean; lead: string; reasons: string[] };
	waits: FormWait[];
	loadingInitial: boolean;
}

export interface UseFormReturn {
	state: FormState;
	stable: FormStable;
	methods: FormMethods;
	handleSubmit: FormHandleSubmit;
}

export type FormStable = FormState & {
	initialData: MosaicObject<any>;
	fields: Record<string, FieldObj>;
	mounted: Record<string, false | { fieldRef?: HTMLDivElement; inputRef?: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement }>;
	hasBlurred: Record<string, boolean>;
	hasSubmitted: boolean;
	moveToError: boolean;
};

export type ValidatorFn = (
	value: any,
	data: MosaicObject<any>,
	options: any,
	internalValue: any,
	internalData: MosaicObject<any>,
	fieldDef: FieldObj
) => Promise<string | undefined>;

export interface Validator { fn: ValidatorFn; options: any }
