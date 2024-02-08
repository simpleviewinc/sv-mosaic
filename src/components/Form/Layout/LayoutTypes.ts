import { FieldDef, FormSpacing, SectionDef } from "../FormTypes";
import { FormMethods } from "../state/types";

export interface LayoutProps {
	state: any;
	dispatch: any;
	fields: FieldDef[];
	sections: SectionDef[];
	registerRef?: (ref: HTMLElement) => () => void;
	spacing?: FormSpacing;
	methods: FormMethods;
}
