import type { MosaicGridConfig } from "@root/types";
import type { FieldDef, FieldDefBase } from "../FieldTypes";

export interface GroupInputSettings {
	fields: FieldDef[];
	layout?: MosaicGridConfig;
}

export type GroupData = Record<string, any>;

export type FieldDefGroup = FieldDefBase<"group", GroupInputSettings>;
