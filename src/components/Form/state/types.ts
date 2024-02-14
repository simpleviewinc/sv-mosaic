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
	validForm: boolean;
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
    | "FORM_VALIDATE"
    | "FORM_START_DISABLE"
    | "FORM_END_DISABLE"
    | "FORM_VALIDATE"
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

export type FormAction =
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
	setFieldValue: FormActionThunk<{
		name: string;
		value: unknown;
		validate?: boolean;
		touched?: boolean;
	}>;
	setFieldBlur: FormActionThunk<{
		name: string;
		validate?: boolean;
	}>;
	validateField: FormActionThunk<{
		name: string;
		validateLinkedFields?: boolean;
	}>;
	validateForm: FormActionThunk<undefined, boolean>;
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

export type UseFormReturn = {
	state: FormState;
	dispatch: FormDispatch;
};

export type FormExtraArgs = {
	fields: FieldDefSanitized[];
	fieldMap: Record<string, FieldDefSanitized>;
	onSubmit: () => void;
	mounted: Record<string, boolean | undefined>;
	internalValidators: Record<string, ((value: any) => string | undefined)[]>;
	hasBlurred: Record<string, boolean>;
	data: MosaicObject<any>;
};

export type FormReducer = (state: FormState, action: FormAction) => FormState;
