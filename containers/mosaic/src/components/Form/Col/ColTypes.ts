import type { FieldDef } from "@root/components/Field";
import type { FormSpacing, FormMethods, FieldPath } from "@root/components/Form";

export interface ColPropsTypes {
	col: string[];
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
