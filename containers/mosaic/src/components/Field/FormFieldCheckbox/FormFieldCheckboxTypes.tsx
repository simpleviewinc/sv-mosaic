import type { FieldDefBase } from "@root/components/Field";
import type { MosaicLabelValue } from "@root/types";

interface FormFieldCheckboxLocalOptions {
	/**
	* List of options
	*/
	options: MosaicLabelValue[];
}

interface FormFieldCheckboxExternalOptions {
	/**
	 * Used to get options from db.
	 *
	 * @deprecated Use the `options` input setting instead.
	 */
	getOptions: () => Promise<MosaicLabelValue[]>;
}

type UnionKeys<T> = T extends T ? keyof T : never;

type StrictUnionHelper<T, TAll> =
	T extends any ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>> : never;

export type StrictUnion<T> = StrictUnionHelper<T, T>;

export type FormFieldCheckboxInputSettings = StrictUnion<FormFieldCheckboxLocalOptions | FormFieldCheckboxExternalOptions>;

export type CheckboxData = MosaicLabelValue[];

export type FieldDefCheckbox = FieldDefBase<"checkbox", FormFieldCheckboxInputSettings>;
