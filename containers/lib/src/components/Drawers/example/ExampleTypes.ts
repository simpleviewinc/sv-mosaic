import { FieldDef } from "@root/components/Field";

export type PageConfig = FormConfig | GridConfig;

export type AnyFunc = (...args: any) => any;

export interface FormConfig {
	type: "form";
	title: string;
	fields: FieldDef[];
}

export interface GridConfig {
	type: "grid";
	title: string;
	data: Record<string, string>[];
}

export interface DrawerDef {
	config: PageConfig;
	callbacks?: PageCallbacks;
}

export type PageCallbacks = Record<string, AnyFunc>;

export interface AppState {
	content: Record<string, any>;
	drawers: DrawerDef[];
}
