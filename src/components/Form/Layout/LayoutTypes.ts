import { FieldDef, FormSpacing, SectionDef } from "../FormTypes";
import { FormMethods } from "../useForm/types";

export interface LayoutProps {
	state: any;
	fields: FieldDef[];
	sections: SectionDef[];
	registerRef?: (ref: HTMLElement) => () => void;
	spacing?: FormSpacing;
	methods: FormMethods;
}
