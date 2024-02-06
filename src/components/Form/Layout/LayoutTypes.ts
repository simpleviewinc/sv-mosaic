import { FieldDef, FormSpacing, SectionDef } from "../FormTypes";

export interface LayoutProps {
	state: any;
	dispatch: any;
	fields: FieldDef[];
	sections: SectionDef[];
	registerRef?: (ref: HTMLElement) => () => void;
	spacing?: FormSpacing;
}
