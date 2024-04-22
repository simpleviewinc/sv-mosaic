import { FieldDef, FormSpacing } from "../FormTypes";
import { FormMethods } from "../useForm/types";

export interface FieldProps {
	fieldName: string;
	fieldsDef: FieldDef[];
	state: any;
	colsInRow?: number;
	colIdx?: number;
	rowIdx?: number;
	sectionIdx?: number;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
}
