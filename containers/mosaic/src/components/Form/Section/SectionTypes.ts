import type { MosaicToggle } from "@root/types";
import type { FormSpacing } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import type { FormMethods } from "../useForm/types";
import type { RowPropTypes } from "../Row";

export interface SectionPropTypes {
	title: string;
	sectionIdx: number;
	description: string | JSX.Element;
	fieldsDef: FieldDef[];
	rows: RowPropTypes["row"][];
	collapsed?: boolean;
	show?: MosaicToggle;
	registerRef?: (ref: HTMLElement) => () => void;
	gridMinWidth?: string;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
}
