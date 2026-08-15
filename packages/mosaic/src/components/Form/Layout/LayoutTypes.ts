import type { FormMethods, FormSpacing, SectionDef } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import type { SectionRegisterRef } from "../Section/SectionTypes";

export interface LayoutProps {
	fields: FieldDef[];
	sections: SectionDef[];
	registerRef?: SectionRegisterRef;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
	/**
	 * Unique id for the owning Form instance (from `useId()`), threaded down
	 * to `Section` to scope its generated DOM ids per Form instance.
	 */
	formId?: string;
}
