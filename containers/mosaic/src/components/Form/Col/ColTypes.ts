import type { FieldDef } from "@root/components/Field";
import type { FormSpacing, FormMethods } from "@root/components/Form";

export interface ColPropsTypes {
	col: string[];
	// TODO Use something other than any
	state: any;
	fieldsDef: FieldDef[];
	colsInRow?: number;
	colIdx?: number;
	rowIdx?: number;
	sectionIdx?: number;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
}
