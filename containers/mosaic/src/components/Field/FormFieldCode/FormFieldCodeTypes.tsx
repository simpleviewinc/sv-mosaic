import type Monaco from "monaco-editor";
import type { FieldDefBase } from "@root/components/Field";

interface CodeFieldAutosizeSettings {
	autogrow: true;
	minHeight?: number;
	maxHeight?: number;
}

interface CodeFieldFixedHeightSettings {
	autogrow?: false;
	height?: number;
}

export type CodeFieldInputSettings = {
	theme?: "light" | "dark" | Monaco.editor.IStandaloneThemeData;
	language?: string;
	onMount?: (editor: Monaco.editor.IStandaloneCodeEditor, monaco: typeof Monaco) => void;
	monacoOptions?: Monaco.editor.IStandaloneEditorConstructionOptions;
} & (CodeFieldAutosizeSettings | CodeFieldFixedHeightSettings)

export type MonacoCodeEditorProps = CodeFieldInputSettings & {
	disabled?: boolean;
	value?: string;
	onChange?: (value: string | ((current: string) => string), options?: any) => Promise<void>;
}

export type CodeFieldData = string;

export type FieldDefCode = FieldDefBase<"code", CodeFieldInputSettings>;
