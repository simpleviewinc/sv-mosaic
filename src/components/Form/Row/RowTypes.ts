import { FieldDef, FormSpacing } from "../FormTypes";
import { FormMethods } from "../state/types";

export interface RowPropTypes {
	row: string[][];
	state: any;
	fieldsDef: FieldDef[];
	dispatch: any;
	rowIdx?: number;
	sectionIdx?: number;
	gridMinWidth?: string;
	spacing?: FormSpacing;
	methods: FormMethods;
}
