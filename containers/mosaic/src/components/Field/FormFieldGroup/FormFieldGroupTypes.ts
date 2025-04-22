import type { SectionPropTypes } from "@root/components/Form/Section";
import type { FieldDef, FieldDefBase } from "../FieldTypes";

export interface GroupInputSettings {
	fields: FieldDef[];
	layout?: SectionPropTypes["rows"];
}

export type GroupData = Record<string, any>;

export type FieldDefGroup = FieldDefBase<"group", GroupInputSettings>;
