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
	registerRef?: (params: { id: string; elem: Element; index: number }) => () => void;
	gridMinWidth?: string;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
	id?: string;
}

export type SectionContentProps = Pick<SectionPropTypes,
	| "description"
	| "rows"
	| "sectionIdx"
	| "fieldsDef"
	| "gridMinWidth"
	| "spacing"
	| "methods"
	| "skeleton"
>
