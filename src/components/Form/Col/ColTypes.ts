import { FieldDef, FormSpacing } from "../FormTypes";
import { FormMethods } from "../state/types";

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
}

export interface ColFieldProps {
	fieldName: string;
	fieldsDef: FieldDef[];
	state: any;
	colsInRow?: number;
	colIdx?: number;
	rowIdx?: number;
	sectionIdx?: number;
	spacing?: FormSpacing;
	methods: FormMethods;
}
