import type { FieldPath, FormSpacing } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import type { FormMethods } from "../useForm/types";

export interface FieldProps {
	fieldName: string;
	fieldsDef: FieldDef[];
	colsInRow?: number;
	colIdx?: number;
	rowIdx?: number;
	sectionIdx?: number;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
	path?: FieldPath;
}
