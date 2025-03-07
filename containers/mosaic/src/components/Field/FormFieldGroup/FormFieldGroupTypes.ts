import type { FieldDef, FieldDefBase } from "../FieldTypes";

export interface GroupInputSettings {
	fields: FieldDef[];
	layout?: string[][][];
}

export type GroupData = Record<string, any>;

export type FieldDefGroup = FieldDefBase<"group", GroupInputSettings>;
