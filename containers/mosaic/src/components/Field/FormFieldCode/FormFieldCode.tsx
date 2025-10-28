import type { ReactElement } from "react";
import type Monaco from "monaco-editor";

import React, { memo, useCallback, useEffect, useMemo, useRef } from "react";
import Editor from "@monaco-editor/react";

import type { CodeFieldData, CodeFieldInputSettings } from "./FormFieldCodeTypes";
import type { MosaicFieldProps } from "@root/components/Field";
import { Wrapper } from "./FormFieldCode.styled";

const verticalPadding = 8;

const CodeField = ({
	value,
	onChange,
	fieldDef: {
		inputSettings = {},
	},
	disabled,
	error,
}: MosaicFieldProps<"code", CodeFieldInputSettings, CodeFieldData>): ReactElement => {
	const {
		theme = "light",
		language,
		autogrow,
		onMount,
		monacoOptions = {},
	} = inputSettings;

	const editorRef = useRef<null | { editor: Monaco.editor.IStandaloneCodeEditor; monaco: typeof Monaco }>(null);
	const providedHeight = "height" in inputSettings ? inputSettings.height : 300;
	const minHeight = "minHeight" in inputSettings ? inputSettings.minHeight : 200;
	const maxHeight = "maxHeight" in inputSettings ? inputSettings.maxHeight : Infinity;

	const lineCount = editorRef.current?.editor?.getModel()?.getLineCount() ?? 4;
	const innerHeight = Math.max(lineCount * 19, minHeight);
	const height = autogrow ? Math.min(Math.max(lineCount * 19, minHeight), maxHeight) + verticalPadding * 2 : providedHeight;

	const options = useMemo<Monaco.editor.IStandaloneEditorConstructionOptions>(() => ({
		minimap: { enabled: false },
		...monacoOptions,
		fixedOverflowWidgets: true,
		readOnly: disabled,
		readOnlyMessage: { value: "Cannot edit disabled field" },
		...(autogrow ? {
			scrollbar: {
				alwaysConsumeMouseWheel: false,
				vertical: innerHeight < maxHeight ? "hidden" : "visible",
				handleMouseWheel: innerHeight < maxHeight ? false : true,
			},
			scrollBeyondLastLine: false,
		} : {
			scrollbar: {
				alwaysConsumeMouseWheel: false,
				vertical: "visible",
				handleMouseWheel: true,
			},
			scrollBeyondLastLine: true,
		}),
		padding: {
			top: verticalPadding,
			bottom: verticalPadding,
		},
	}), [autogrow, disabled, innerHeight, maxHeight, monacoOptions]);

	const setTheme = useCallback((theme: CodeFieldInputSettings["theme"]) => {
		if (!editorRef?.current?.monaco) {
			return;
		}

		const { monaco } = editorRef.current;

		if (theme === "light") {
			monaco.editor.defineTheme("mosaic-light", {
				base: "vs",
				inherit: true,
				rules: [],
				colors: {
					"editor.background": "#fafafa",
				},
			});

			monaco.editor.setTheme("mosaic-light");
		} else if (theme === "dark") {
			monaco.editor.setTheme("vs-dark");
		} else {
			monaco.editor.defineTheme("custom", theme);
			monaco.editor.setTheme("custom");
		}
	}, []);

	const setLanguage = useCallback((language: string | undefined) => {
		if (!editorRef?.current?.monaco || !language) {
			return;
		}

		const { editor, monaco } = editorRef.current;
		const model = editor.getModel();

		if (model) {
			monaco.editor.setModelLanguage(model, language);
		}
	}, []);

	const handleEditorMount = useCallback((editor: Monaco.editor.IStandaloneCodeEditor, monaco: typeof Monaco) => {
		editorRef.current = { editor, monaco };

		if (onMount) {
			onMount(editor, monaco);
		}

		const model = editor.getModel();
		if (model) {
			model.setEOL(monaco.editor.EndOfLineSequence.LF);
		}

		setTheme(theme);
		setLanguage(language);
	}, [onMount, setTheme, theme, setLanguage, language]);

	useEffect(() => setTheme(theme), [setTheme, theme]);
	useEffect(() => setLanguage(language), [setLanguage, language]);

	return (
		<Wrapper $error={Boolean(error)}>
			<Editor
				height={height}
				defaultLanguage={language}
				options={options}
				value={value}
				onChange={onChange}
				onMount={handleEditorMount}
			/>
		</Wrapper>
	);
};

export default memo(CodeField);
