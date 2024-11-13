import type { FieldPath, FormSpacing } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import type { FormMethods } from "../useForm/types";

export interface RowPropTypes {
	row: string[][];
	fieldsDef: FieldDef[];
	rowIdx?: number;
	sectionIdx?: number;
	gridMinWidth?: string;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
	path?: FieldPath;
}
