import { MosaicObject } from "@root/types";
import type { FieldDefSanitized, FieldDef } from "@root/components/Field";
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

export type LegacyFormAction = {
	type: ActionTypes;
	value: any;
	internalValue?: any;
	name?: string;
	clearErrors?: boolean;
	touched?: boolean;
};

export type ActionSetFieldErrors = {
	type: "SET_FIELD_ERRORS";
	errors: MosaicObject<string>;
	merge?: boolean;
	moveToError?: boolean;
};

export type ActionSetFieldValues = {
	type: "SET_FIELD_VALUES";
	values: MosaicObject<string>;
	internalValues: MosaicObject<string>;
	merge?: boolean;
	touched?: boolean;
	loadingInitial?: boolean;
	disabled?: boolean;
};

export type ActionSetFormWaits = {
	type: "SET_FORM_WAITS";
	waits: FormWait[];
};

export type ActionReset = {
	type: "RESET";
	data: MosaicObject<any>;
	internalData: MosaicObject<any>;
};

export type ActionSetSubmitWarning = FormState["submitWarning"] & {
	type: "SET_SUBMIT_WARNING";
};

export type ActionDisable = {
	type: "FORM_DISABLE";
	disabled: boolean;
	loadingInitial?: boolean;
};

export type FormAction =
	| ActionSetFieldErrors
	| ActionSetFieldValues
	| ActionSetFormWaits
	| ActionReset
	| ActionSetSubmitWarning
	| ActionDisable
    | LegacyFormAction;

export type GetFieldErrorParams = {
	name: string;
	/**
	 * Get error for only the validators specified
	 */
	include?: Validator["fn"][];
};

export type GetFieldError = (params: GetFieldErrorParams) => Promise<string | undefined>;

export type GetFieldErrorsParams = {
	names: (string | { name: string, include: Validator["fn"][] })[];
};

export type GetFieldErrorsResult = {
	errors: MosaicObject<string | undefined>;
	count: number;
};

export type GetFieldErrors = (params: GetFieldErrorsParams) => Promise<GetFieldErrorsResult>;

export type FieldCanBeValidatedParams = {
	name: string;
};

export type FieldCanBeValidated = (params: FieldCanBeValidatedParams) => boolean;

export type ValidateFieldParams = {
	name: string;
	validateLinkedFields?: boolean;
};

export type ValidateField = (params: ValidateFieldParams) => Promise<void>;

export type ValidateForm = () => Promise<boolean>;

export type SubmitForm = () => Promise<{ valid: boolean; data: any }>;

export type OnSubmitSuccess = (data: any) => void;
export type OnSubmitError = (data: any) => void;

export type FormHandleSubmit = (onSuccess: OnSubmitSuccess, onError?: OnSubmitError) => () => Promise<void>;

export type SetFormValuesParams = {
	values: MosaicObject<any>;
	initial?: boolean;
};

export type SetFormValues = (params: SetFormValuesParams) => void;

export type SetFieldValueParams = {
	name: string;
	value: unknown | ((current: unknown) => unknown);
	validate?: boolean;
	touched?: boolean;
};

export type SetFieldValue = (params: SetFieldValueParams) => void;

export type SetFieldBlurParams = {
	name: string;
};

export type SetFieldBlur = (params: SetFieldBlurParams) => void;

export type RemoveWaitParams = {
	names: string[];
};

export type FormWait = {
	name: string;
	message: string;
	disableForm: boolean;
};

export type RemoveWait = (params?: RemoveWaitParams) => void;

export type AddWaitParams = Pick<FormWait, "name" | "message"> & {
	disableForm?: FormWait["disableForm"];
};

export type AddWaitResult = {
	remove: () => void;
};

export type AddWait = (params?: AddWaitParams) => AddWaitResult;

export type DisableFormParams = {
	disabled?: boolean;
	initial?: boolean;
};

export type DisableForm = (params: DisableFormParams) => void;

export type MountFieldParams = {
	name: string;
	fieldRef?: HTMLDivElement;
	inputRef?: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
};

export type UnmountField = () => void;

export type MountFieldResult = {
	unmount: UnmountField;
};

export type MountField = (params: MountFieldParams) => MountFieldResult;

export type RemoveValidator = () => void;

export type AddValidatorParams = {
	name: string;
	validator: () => undefined | string;
};

export type AddValidatorResult = {
	remove: RemoveValidator;
};

export type AddValidator = (params: AddValidatorParams) => AddValidatorResult;

export type FormInitParams = {
	fields: FieldDef[];
	sections?: SectionDef[];
};

export type FormInit = (params: FormInitParams) => void;

export type SetSubmitWarning = (params: FormState["submitWarning"]) => void;

export type FormReset = () => void;

export type FormMethods = {
	setFormValues: SetFormValues;
	setFieldValue: SetFieldValue;
	setFieldBlur: SetFieldBlur;
	disableForm: DisableForm;
	submitForm: SubmitForm;
	addWait: AddWait;
	removeWait: RemoveWait;
	mountField: MountField;
	addValidator: AddValidator;
	init: FormInit;
	reset: FormReset;
	setSubmitWarning: SetSubmitWarning;
};

export type FormState = {
	internalData: MosaicObject<any>;
	data: MosaicObject<any>;
	errors: MosaicObject<string>;
	disabled: boolean;
	touched: MosaicObject<boolean>;
	submitWarning: { open: boolean; lead: string; reasons: string[] };
	waits: FormWait[];
	loadingInitial: boolean;
};

export type UseFormReturn = {
	state: FormState;
	stable: FormStable;
	methods: FormMethods;
	handleSubmit: FormHandleSubmit;
};

export type FormStable = FormState & {
	initialData: MosaicObject<any>;
	fields: Record<string, FieldDefSanitized>;
	mounted: Record<string, false | { fieldRef?: HTMLDivElement; inputRef?: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement }>;
	internalValidators: Record<string, ((value: any) => string | undefined)[]>;
	hasBlurred: Record<string, boolean>;
	moveToError: boolean;
};

export type ValidatorFn = (value: any, data: MosaicObject<any>, options: any) => Promise<string | undefined>;

export type Validator = { fn: ValidatorFn; options: any };
