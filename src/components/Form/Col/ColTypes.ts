import { FieldDef, FormSpacing } from "../FormTypes";

export interface ColPropsTypes {
	col: string[];
	// TODO Use something other than any
	state: any;
	fieldsDef: FieldDef[];
	dispatch: any;
	colsInRow?: number;
	colIdx?: number;
	rowIdx?: number;
	sectionIdx?: number;
	spacing?: FormSpacing;
}

export interface ColFieldProps {
	fieldName: string;
	fieldsDef: FieldDef[];
	state: any;
	dispatch: any;
	colsInRow?: number;
	colIdx?: number;
	rowIdx?: number;
	sectionIdx?: number;
	spacing?: FormSpacing;
}
