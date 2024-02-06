import { FieldDefBase } from "@root/components/Field";

export type TextEditorInputSettings = {
	spellcheck?: boolean;
	direction?: "rtl" | "ltr" | "";
	language?: string;
	maxCharacters?: number;
};

export type TextEditorData = string;

export type FieldDefTextEditor = FieldDefBase<"textEditor", TextEditorInputSettings, TextEditorData>;
