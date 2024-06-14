import type { FormSpacing } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
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
	skeleton?: boolean;
}
