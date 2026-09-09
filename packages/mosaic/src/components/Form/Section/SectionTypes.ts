import type { MosaicToggle } from "@root/types";
import type { FormSpacing } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import type { FormMethods } from "../useForm/types";
import type { RowPropTypes } from "../Row";

/**
 * Single source of truth for the `registerRef` contract shared by `Section`,
 * `Layout`, and `useScrollSpy` — the section's own element plus its heading
 * element (used to move focus on section-nav activation).
 */
export type SectionRegisterRef = (params: { id: string; elem: Element; headingElem?: Element; index: number }) => () => void;

export interface SectionPropTypes {
	title: string;
	sectionIdx: number;
	description: string | JSX.Element;
	fieldsDef: FieldDef[];
	rows: RowPropTypes["row"][];
	collapsed?: boolean;
	show?: MosaicToggle;
	registerRef?: SectionRegisterRef;
	gridMinWidth?: string;
	spacing?: FormSpacing;
	methods: FormMethods;
	skeleton?: boolean;
	id?: string;
	/**
	 * Unique id for the owning Form instance (from `useId()`), used to scope
	 * this section's generated DOM ids so multiple Forms on one page never
	 * collide even when their `SectionDef.id`s match.
	 */
	formId?: string;
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
