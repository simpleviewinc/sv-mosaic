import { FieldDefMapCoordinates } from "@root/forms/FormFieldMapCoordinates";
import { FieldDefMatrix } from "@root/forms/FormFieldMatrix";
import { FieldDefPhoneSelection } from "@root/forms/FormFieldPhoneSelectionDropdown";
import { FieldDefRadio } from "@root/forms/FormFieldRadio";
import { FieldDefTable } from "@root/forms/FormFieldTable";
import { FieldDefText } from "@root/forms/FormFieldText";
import { FieldDefTextEditor } from "@root/forms/FormFieldTextEditor/FormFieldTextEditorTypes";
import { FieldDefToggleSwitch } from "@root/forms/FormFieldToggleSwitch";
import { MosaicObject } from "@root/types";
import React, { HTMLAttributes, ReactNode } from "react";

// MOSAIC GENERIC CONTRACT
export interface MosaicFieldProps<T extends string, U = any, V = any> {
	/**
	 * Field identifier that matches the field name.
	 */
	id?: string;
	/**
	 * Object that contains all the properties from the current field defined
	 * by the developer.
	 */
	fieldDef: FieldDefBase<T, U, V>;
	/**
	 * Function that listens to changes on the field and updates its value.
	 */
	onChange?: (e: V) => Promise<void>;
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
}

// SHARED FIELD DEFINITION - DEVELOPER GENERIC CONTRACT
export interface FieldDefBase<Type = any, T = any, U = any> {
	/**
	 * Significant name related to its field.
	 */
	name: string;
	/**
	 * React ref for the field
	 */
	ref?: JSX.Element;
	/**
	 * Label that will sit on top of the field.
	 */
	label: string | undefined;
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
	disabled?: boolean;
	/**
	 * Settings that belong to a specific field.
	 * They are defined within each field implementation.
	 */
	inputSettings?: T;
	/**
	 * Used to show and limit the characters.
	 */
	maxCharacters?: number;
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
	 * Object that defines the position of the current field in the
	 * form layout.
	 */
	layout?: {
		section?: number,
		row?: number,
		col?: number,
	};
	/**
	 * Array of validators to be executed by the form when on blur or
	 * when submitted.
	 */
	validators?: ((() => string | undefined | JSX.Element) | string | { fn: string; options: any })[];
	/**
	 * Identifier passed by the developer
	 */
	id?: string;
	/**
	 * Optional value that devs can define for a field to begin with.
	 */
	defaultValue?: U;
	/**
	 * Array of fields linked to a specific field.
	 */
	pairedFields?: string[];
	/**
	 * Callback executed when the current fields has changed
	 */
	onBlurCb?: (value?: any) => void;
	/**
	 * Callback executed when the current fields has changed
	 */
	onChangeCb?: (value?: any) => void | Promise<void>;
}

type FieldDefCustom = FieldDefBase<React.ElementType, MosaicObject, any>

export type FieldDef =
  | FieldDefText
  | FieldDefToggleSwitch
  | FieldDefTextEditor
  | FieldDefRadio
  | FieldDefPhoneSelection
  | FieldDefTable
  | FieldDefMatrix
  | FieldDefCustom
	| FieldDefMapCoordinates;


/* const fields: FieldDef[] = [
  {
    name: "text",
    label: "Text",
    type: "text",
    inputSettings: {
      maxCharacters: 10,
			spellcheck: true,
			direction: "ltr",
    }
  },
  {
    name: "text",
    label: "text",
    type: "text",
    inputSettings: {
			placeholder: "",
			type: "password",
			toggleLabel: "",
			test: false
    },
    defaultValue: "asd"
  },
  {
    name: "bogus_type",
    label: "Bogus type property",
    type: "bogus"
  },
	{
		name: "toggleSwitchDefault",
		label: "Default example",
		type: "toggleSwitch",
		required: false,
		disabled: false,
		inputSettings: {
			toggleLabel: "Toggle label",
			spellCheck: true,
			placeholder: "",
			amountPerType: 2
		},
		helperText: "Helper text",
		instructionText: "Instruction text",
	},
]

 */
