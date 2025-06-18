import type Monaco from "monaco-editor";
import type { FieldDefBase } from "@root/components/Field";

export interface CodeFieldInputSettings {
	theme?: "light" | "dark" | Monaco.editor.IStandaloneThemeData;
}

export type CodeFieldData = string;

export type FieldDefCode = FieldDefBase<"code", CodeFieldInputSettings>;
