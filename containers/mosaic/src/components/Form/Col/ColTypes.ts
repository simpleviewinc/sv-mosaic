import type { FieldDef } from "@root/components/Field";
import type { FormSpacing, FormMethods, FieldPath } from "@root/components/Form";

export interface ColLayout {
	span?: "auto" | number;
	names: string[];
}

export interface ColPropsTypes {
	col: ColLayout | string[];
	fieldsDef: FieldDef[];
	colsInRow?: number;
	colIdx?: number;
	rowIdx?: number;
	sectionIdx?: number;
	gridMinWidth?: string;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
	path?: FieldPath;
}
