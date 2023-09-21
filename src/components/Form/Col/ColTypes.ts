import { FieldDef } from "../FormTypes";

export interface ColPropsTypes {
	col: (string | FieldDef)[];
	// TODO Use something other than any
	state: any;
	fieldsDef: FieldDef[];
	dispatch: any;
	colsInRow?: number;
	colIdx?: number;
	rowIdx?: number;
	sectionIdx?: number;
}
