import type { FieldDefAddress, FieldDefAddressSingle } from "@root/components/Field/FormFieldAddress";
import type { FieldDefAdvancedSelection } from "@root/components/Field/FormFieldAdvancedSelection";
import type { FieldDefCheckbox } from "@root/components/Field/FormFieldCheckbox";
import type { FieldDefChip } from "@root/components/Field/FormFieldChips";
import type { FieldDefColor } from "@root/components/Field/FormFieldColor/FormFieldColorTypes";
import type { FieldDefDate } from "@root/components/Field/FormFieldDate/DateField";
import type { FieldDefTime } from "@root/components/Field/FormFieldTime/TimeField";
import type { FieldDefDropdown } from "@root/components/Field/FormFieldDropdown";
import type { FieldDefMapCoordinates } from "@root/components/Field/FormFieldMapCoordinates";
import type { FieldDefMatrix } from "@root/components/Field/FormFieldMatrix";
import type { FieldDefNumber } from "@root/components/Field/FormFieldNumber";
import type { FieldDefNumberTable } from "@root/components/Field/FormFieldNumberTable";
import type { FieldDefPhoneSelection } from "@root/components/Field/FormFieldPhone";
import type { FieldDefRadio } from "@root/components/Field/FormFieldRadio";
import type { FieldDefRaw } from "@root/components/Field/FormFieldRaw";
import type { FieldDefText } from "@root/components/Field/FormFieldText";
import type { FieldDefTextEditor } from "@root/components/Field/FormFieldTextEditor/FormFieldTextEditorTypes";
import type { FieldDefToggle } from "@root/components/Field/FormFieldToggle";
import type { FieldDefUpload } from "@root/components/Field/FormFieldUpload";
import type { MosaicToggle } from "@root/types";
import type { ElementType, HTMLAttributes, MemoExoticComponent, MutableRefObject, ReactNode } from "react";
import type { FieldValueResolver, FormSpacing } from "../Form";
import type { FieldPath, FormMethods, FormState, Validator } from "../Form/useForm/types";
import type { FieldDefGroup } from "./FormFieldGroup/FormFieldGroupTypes";

// MOSAIC GENERIC CONTRACT
export interface MosaicFieldProps<T = any, U = any, V = any> {
	/**
	 * Field identifier that matches the field name.
	 */
	id?: string;
	/**
	 * Object that contains all the properties from the current field defined
	 * by the developer.
	 */
	fieldDef: FieldDefBase<T, U>;
	/**
	 * Function that listens to changes on the field and updates its value.
	 */
	onChange?: (value: V | ((current: V) => V), options?: any) => Promise<void>;
	/**
	 * Function that listens to a blur event on the field and executes an action.
	 */
	onBlur?: (e?: any) => Promise<void>;
	/**
	 * Value written by the user into the text field.
	 */
	value?: V;
	// value?: any | string;
	/**
	 * Flag to style text field as erroneous.
	 */
	error?: string | boolean;
	/**
	 * React Element or component to be rendered as child of the field component.
	 */
	children?: ReactNode;
	/**
	 * Number that represents the amount of fields that share the same row.
	 */
	colsInRow?: number;
	/**
	 * Form action dispatcher
	 */
	dispatch?: any;
	/**
	 * Spacing type
	 */
	spacing?: FormSpacing;
	/**
	 * Whether or not the field is disabled
	 */
	disabled?: boolean;
	/**
	 * Methods that can be used to manipulate the form
	 */
	methods?: FormMethods;
	/**
	 * Reference to the field control, i.e. the HTML input,
	 * select or textarea element
	 */
	inputRef?: MutableRefObject<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
	/**
	 * Whether or not to display a skeleton representation
	 * of this component
	 */
	skeleton?: boolean;
	/**
	 * For fields with multiple input/controls, we should
	 * not render a label element because they can only target
	 * one control. Instead, render a legend element.
	 */
	useRealLabel?: boolean;
	/**
	 * The path to the field. A path with zero members is a
	 * root field.
	 */
	path?: FieldPath;
}

// SHARED FIELD DEFINITION - DEVELOPER GENERIC CONTRACT
export interface FieldDefBase<Type, T = any> {
	/**
	 * Significant name related to its field.
	 */
	name: string;
	/**
	 * React ref for the field
	 */
	ref?: MutableRefObject<any | undefined>;
	/**
	 * Label that will sit on top of the field.
	 */
	label?: string | undefined;
	/**
	 * Marks field as required
	 */
	required?: boolean;
	/**
	 * Text to help the user fill the current field.
	 */
	helperText?: string | JSX.Element;
	/**
	 * Instructions about how to fill the current field.
	 */
	instructionText?: string;
	/**
	 * Indicates whether the field can be written on or readonly.
	 */
	disabled?: MosaicToggle<FormState>;
	/**
	 * Settings that belong to a specific field.
	 * They are defined within each field implementation.
	 */
	inputSettings?: T;
	/**
	 * Defined between 100, 280, 450, and 620 px.
	 */
	size?: string;
	/**
	 * Allows additional styling to the current field via className.
	 */
	className?: HTMLAttributes<HTMLElement>["className"];
	/**
	 * Allows additional styling to the current field via style object.
	 */
	style?: HTMLAttributes<HTMLElement>["style"];
	/**
	 * Defines the type of component from a list of components
	 * found on Col.tsx. This also allows for a custom component type.
	 */
	type: Type;
	/**
	 * Array of validators to be executed by the form when on blur or
	 * when submitted.
	 */
	validators?: (((args?: any) => string | undefined | JSX.Element | Promise<undefined | string>) | string | { fn: string; options: any })[];
	/**
	 * When to validate the field
	 */
	validateOn?: FieldValidateOn;
	/**
	 * An array of other field names to validate when
	 * this one gets validated
	 */
	validates?: (string | { name: string; include: Validator["fn"][] })[];
	/**
	 * Identifier passed by the developer
	 */
	id?: string;
	/**
	 * Callback executed when the current fields has changed
	 */
	onBlurCb?: (value?: any) => void;
	/**
	 * Callback executed when the current fields has changed
	 */
	onChangeCb?: (value?: any) => void | Promise<void>;
	/**
	 * Whether or not to show this field
	 */
	show?: MosaicToggle<FormState>;
	/**
	 * How to resolve the field's value from the internal value. Defaults
	 * to an function that returns a like-for-like value
	 */
	getResolvedValue?: FieldValueResolver;
}

export type FieldDefCustom = FieldDefBase<((props?: any) => JSX.Element) | MemoExoticComponent<(props?: any) => JSX.Element>>;

export type FieldDef =
	| FieldDefText
	| FieldDefToggle
	| FieldDefTextEditor
	| FieldDefRadio
	| FieldDefPhoneSelection
	| FieldDefMatrix
	| FieldDefMapCoordinates
	| FieldDefDropdown
	| FieldDefDate
	| FieldDefTime
	| FieldDefColor
	| FieldDefChip
	| FieldDefCheckbox
	| FieldDefAdvancedSelection
	| FieldDefAddress
	| FieldDefAddressSingle
	| FieldDefUpload
	| FieldDefCustom
	| FieldDefNumber
	| FieldDefNumberTable
	| FieldDefRaw
	| FieldDefGroup;

export type Head<T extends any[]> = T extends [ ...infer Head, any ] ? Head : any[];

export type DropParam<T extends (...args: any) => any, R = any> = (...args: Head<Parameters<T>>) => R;

export type FieldObj = Omit<FieldDef, "getResolvedValue" | "fields"> & {
	getResolvedValue: DropParam<FieldValueResolver>;

	order: number;

	fields?: Record<string, FieldObj>;
};

export type FieldDefSanitized = FieldDef;

export type FieldValidateOn = "onBlur" | "onChange" | "onBlurAmend" | "onBlurChange" | "onSubmit";

export interface FieldConfig {
	Component: ElementType;
	validate: FieldValidateOn;
	getResolvedValue: FieldValueResolver;
}

