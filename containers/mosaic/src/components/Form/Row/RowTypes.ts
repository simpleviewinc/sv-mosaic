import type { FieldPath, FormSpacing } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import type { FormMethods } from "../useForm/types";
import type { ColPropsTypes } from "../Col";

export interface RowPropTypes {
	row: ColPropsTypes["col"][];
	fieldsDef: FieldDef[];
	rowIdx?: number;
	sectionIdx?: number;
	gridMinWidth?: string;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
	path?: FieldPath;
}
