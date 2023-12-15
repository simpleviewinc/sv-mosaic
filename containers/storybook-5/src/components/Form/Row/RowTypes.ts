import { FieldDef, FormSpacing } from "../FormTypes";

export interface RowPropTypes {
	row: string[][];
	state: any;
	fieldsDef: FieldDef[];
	dispatch: any;
	rowIdx?: number;
	sectionIdx?: number;
	gridMinWidth?: string;
	spacing?: FormSpacing;
}
