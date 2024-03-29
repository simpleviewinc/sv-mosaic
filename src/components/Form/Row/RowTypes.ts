import { FieldDef, FormSpacing } from "../FormTypes";
import { FormMethods } from "../useForm/types";

export interface RowPropTypes {
	row: string[][];
	state: any;
	fieldsDef: FieldDef[];
	rowIdx?: number;
	sectionIdx?: number;
	gridMinWidth?: string;
	spacing?: FormSpacing;
	methods: FormMethods;
}
