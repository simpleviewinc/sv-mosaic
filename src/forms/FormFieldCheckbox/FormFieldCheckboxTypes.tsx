import { MosaicLabelValue } from "@root/types";

/**
 * Interface that defines structure of the options that the
 * checkbox list receives.
 */
// export interface CheckboxOption {
// 	label: string;
// 	value: string | { [key: string]: unknown };
// }

type FormFieldCheckboxLocalOptions = {
	/**
	* List of options
	*/
	options: MosaicLabelValue[];
}

type FormFieldCheckboxExternalOptions = {
	/**
	 * Used to get options from db.
	 */
	getOptions: () => Promise<MosaicLabelValue[]>;
}

type UnionKeys<T> = T extends T ? keyof T : never;

type StrictUnionHelper<T, TAll> =
    T extends any
    ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>> : never;

export type StrictUnion<T> = StrictUnionHelper<T, T>

export type FormFieldCheckboxDef = StrictUnion<FormFieldCheckboxLocalOptions | FormFieldCheckboxExternalOptions>;
