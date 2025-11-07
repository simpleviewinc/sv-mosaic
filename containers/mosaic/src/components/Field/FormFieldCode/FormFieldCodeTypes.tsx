import type Monaco from "monaco-editor";
import type { FieldDefBase } from "@root/components/Field";

interface CodeFieldAutosizeSettings {
	/**
	 * Enables automatic height adjustment based on content.
	 * When true, the editor will grow and shrink dynamically.
	 */
	autogrow: true;

	/**
	 * Minimum height in pixels for the autogrow editor.
	 * The editor will never shrink below this height.
	 *
	 * @default 100
	 */
	minHeight?: number;

	/**
	 * Maximum height in pixels for the autogrow editor.
	 * The editor will never grow beyond this height and will show scrollbars if needed.
	 *
	 * @default 500
	 */
	maxHeight?: number;
}

interface CodeFieldFixedHeightSettings {
	/**
	 * Disables automatic height adjustment.
	 * When false or undefined, the editor maintains a fixed height.
	 */
	autogrow?: false;

	/**
	 * Fixed height in pixels for the editor.
	 * When autogrow is disabled, the editor will maintain this exact height.
	 *
	 * @default 300
	 */
	height?: number;
}

/**
 * Configuration settings for the CodeField component's input behavior and appearance.
 * This type combines Monaco editor configuration with size settings for the code editor.
 *
 * @example
 * ```typescript
 * const inputSettings: CodeFieldInputSettings = {
 *   theme: "dark",
 *   language: "javascript",
 *   autogrow: true,
 *   minHeight: 200,
 *   maxHeight: 500,
 *   monacoOptions: {
 *     fontSize: 14,
 *     wordWrap: "on"
 *   }
 * }
 * ```
 *
 * @example Fixed height configuration
 * ```typescript
 * const fixedHeightSettings: CodeFieldInputSettings = {
 *   theme: "light",
 *   language: "typescript",
 *   height: 400,
 *   onMount: (editor, monaco) => {
 *     editor.focus();
 *   }
 * }
 * ```
 */
export type CodeFieldInputSettings = {
	/**
	 * Visual theme for the Monaco editor. Can be "light", "dark", or a custom theme object.
	 * Determines the color scheme and styling of the code editor.
	 *
	 * @default "light"
	 */
	theme?: "light" | "dark" | Monaco.editor.IStandaloneThemeData;

	/**
	 * Programming language for syntax highlighting and IntelliSense support.
	 * Supports any language identifier recognized by Monaco editor (e.g., "javascript", "typescript", "html", "css", "json").
	 *
	 * @example "javascript" | "typescript" | "html" | "css" | "json" | "markdown"
	 */
	language?: string;

	/**
	 * Callback function executed when the Monaco editor is mounted and ready.
	 * Provides access to the editor instance and Monaco API for advanced configuration.
	 *
	 * @param editor - The Monaco editor instance
	 * @param monaco - The Monaco editor API
	 *
	 * @example
	 * ```typescript
	 * onMount: (editor, monaco) => {
	 *   editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
	 *     console.log('Save shortcut pressed');
	 *   });
	 * }
	 * ```
	 */
	onMount?: (editor: Monaco.editor.IStandaloneCodeEditor, monaco: typeof Monaco) => void;

	/**
	 * Advanced Monaco editor configuration options.
	 * Allows fine-tuning of editor behavior, appearance, and features.
	 *
	 * @example
	 * ```typescript
	 * monacoOptions: {
	 *   fontSize: 16,
	 *   lineNumbers: "on",
	 *   wordWrap: "on",
	 *   minimap: { enabled: false },
	 *   scrollBeyondLastLine: false
	 * }
	 * ```
	 */
	monacoOptions?: Monaco.editor.IStandaloneEditorConstructionOptions;
} & (CodeFieldAutosizeSettings | CodeFieldFixedHeightSettings)

/**
 * Props for the MonacoCodeEditor component.
 * Extends CodeFieldInputSettings with additional props for controlled input behavior.
 */
export type MonacoCodeEditorProps = CodeFieldInputSettings & {
	/**
	 * Whether the editor is disabled and non-interactive.
	 * When true, the editor becomes read-only and visually indicates its disabled state.
	 */
	disabled?: boolean;

	/**
	 * Current value/content of the code editor.
	 * This is the text content displayed and edited within the Monaco editor.
	 */
	value?: string;

	/**
	 * Callback function triggered when the editor content changes.
	 * Receives the new value as a string or a function that returns the new value.
	 *
	 * @param value - New editor content or function to derive new content
	 * @param options - Additional options passed to the change handler
	 */
	onChange?: (value: string | ((current: string) => string), options?: any) => Promise<void>;
}

/**
 * Type representing the data stored and managed by a code field.
 * This is simply a string containing the code/text content.
 */
export type CodeFieldData = string;

/**
 * Field definition type specifically for code fields.
 * Extends the base field definition with code field input settings.
 */
export type FieldDefCode = FieldDefBase<"code", CodeFieldInputSettings>;
