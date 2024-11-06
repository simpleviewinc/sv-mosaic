import type { FormMethods, FormSpacing, SectionDef } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";

export interface LayoutProps {
	fields: FieldDef[];
	sections: SectionDef[];
	registerRef?: (ref: HTMLElement) => () => void;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
}
