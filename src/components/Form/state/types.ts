import { MosaicObject } from "@root/types";
import { Dispatch } from "react";
import { FieldDef } from "../FormTypes";
import { FieldDefSanitized } from "@root/components/Field";

export type FormState = {
	internalData: MosaicObject<any>;
	data: MosaicObject<any>;
	errors: MosaicObject<string>;
	validating: MosaicObject;
	custom: unknown;
	disabled: boolean;
	touched: MosaicObject<boolean>;
	mounted: MosaicObject<boolean>;
	busyFields: MosaicObject<boolean>;
	submitWarning: string;
};

export type ActionTypes =
    | "FIELD_ON_CHANGE"
    | "FIELDS_ON_CHANGE"
    | "FIELD_TOUCHED"
    | "FIELD_VALIDATE"
    | "FIELD_UNVALIDATE"
    | "FORM_START_DISABLE"
    | "FORM_END_DISABLE"
    | "FORM_START_DISABLE"
    | "FORM_END_DISABLE"
    | "FORM_RESET"
    | "PROPERTY_RESET"
    | "MOUNT_FIELD"
    | "UNMOUNT_FIELD"
    | "FORM_START_BUSY"
    | "FORM_END_BUSY"
    | "SET_SUBMIT_WARNING";

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
};

export type FormAction =
	| ActionSetFieldErrors
    | LegacyFormAction;

type OptionalUndefinedParam<P, R> = P extends undefined ? (params?: P) => R : (params: P) => R;

export type FormActionThunk<P = undefined, R = void> = OptionalUndefinedParam<
	P,
	(dispatch: FormDispatch, getState: FormGetState, extraArgs: FormExtraArgs) => Promise<R>
>;

export type FormActionThunks = {
	init: FormActionThunk<{
		fields: FieldDef[];
	}>;
	setSubmitWarning: FormActionThunk<{
		value: string;
	}>;
	/**
	 * @deprecated Use form controller's method.setFieldValue instead
	 */
	setFieldValue: FormActionThunk<{
		name: string;
		value: unknown | ((current: unknown) => unknown);
		validate?: boolean;
		touched?: boolean;
	}>;
	setFieldBlur: FormActionThunk<{
		name: string;
		validate?: boolean;
	}>;
	/**
	 * @deprecated Now internal use only. There should never be a need
	 * for consumers to invoke validateField. If you are looking to validate
	 * a field when it is changed, use the `validate` property when invoking
	 * `setFieldValue`
	 */
	validateField: FormActionThunk<{
		name: string;
		validateLinkedFields?: boolean;
	}>;
	/**
	 * @deprecated Now internal use only. There should never be a need
	 * for consumers to invoke validateForm. If you are looking to validate
	 * fields when they are changed, use the `validate` property when invoking
	 * `setFormValues`
	 */
	validateForm: FormActionThunk<undefined, boolean>;
	/**
	 * @deprecated Use form controller's method.submitForm instead
	 */
	submitForm: FormActionThunk<undefined, {
		valid: boolean;
		data: any;
	}>;
	resetForm: FormActionThunk;
	setFormValues: FormActionThunk<MosaicObject>;
	disableForm: FormActionThunk<{
		disabled?: boolean;
	}>;
	startBusy: FormActionThunk<{
		name: string;
		value: string;
	}>;
	endBusy: FormActionThunk<{
		name: string;
	}>;
	mountField: FormActionThunk<{
		name: string;
	}>;
	unmountField: FormActionThunk<{
		name: string;
	}>;
	isSubmittable: FormActionThunk<undefined, boolean>;
	addValidator: FormActionThunk<{
		name: string;
		validator: any;
	}>;
	removeValidator: FormActionThunk<{
		name: string;
		validator: any;
	}>;
};

export type FormDispatch = (action: any) => any | Dispatch<FormAction>;

export type FormGetState = () => FormState;

export type GetFieldErrorParams = {
	name: string;
};

export type GetFieldError = (params: GetFieldErrorParams) => Promise<void | string>;

export type ValidateFieldParams = {
	name: string;
	validateLinkedFields?: boolean;
};

export type ValidateField = (params: ValidateFieldParams) => Promise<void>;

export type ValidateForm = () => Promise<boolean>;

export type SubmitForm = () => Promise<{ valid: boolean; data: any }>;

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

export type FormMethods = {
	setFieldValue: SetFieldValue;
	setFieldBlur: SetFieldBlur;
	submitForm: SubmitForm;
};

export type UseFormReturn = {
	state: FormState;
	dispatch: FormDispatch;
	methods: FormMethods;
};

export type FormExtraArgs = {
	fields: Record<string, FieldDefSanitized>;
	onSubmit: () => void;
	mounted: Record<string, boolean | undefined>;
	internalValidators: Record<string, ((value: any) => string | undefined)[]>;
	hasBlurred: Record<string, boolean>;
	data: MosaicObject<any>;
};

export type FormReducer = (state: FormState, action: FormAction) => FormState;
