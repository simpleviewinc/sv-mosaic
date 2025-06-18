import type { ReactElement } from "react";
import type Monaco from "monaco-editor";

import React, { memo, useCallback, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

import type { CodeFieldData, CodeFieldInputSettings } from "./FormFieldCodeTypes";
import type { MosaicFieldProps } from "@root/components/Field";
import { Wrapper } from "./FormFieldCode.styles";

const options: Monaco.editor.IStandaloneEditorConstructionOptions = {
	minimap: { enabled: false },
};

const CodeField = ({
	value,
	onChange,
	fieldDef: {
		inputSettings = {},
	},
}: MosaicFieldProps<"code", CodeFieldInputSettings, CodeFieldData>): ReactElement => {
	const {
		theme = "light",
	} = inputSettings;
	const editorRef = useRef<null | { editor: Monaco.editor.IStandaloneCodeEditor; monaco: typeof Monaco }>(null);

	const setTheme = useCallback((theme: CodeFieldInputSettings["theme"]) => {
		if (!editorRef?.current?.monaco) {
			return;
		}

		const { editor, monaco } = editorRef.current;

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

	const handleEditorMount = useCallback((editor: Monaco.editor.IStandaloneCodeEditor, monaco: typeof Monaco) => {
		editorRef.current = { editor, monaco };

		const model = editor.getModel();
		if (model) {
			model.setEOL(monaco.editor.EndOfLineSequence.LF);
		}

		setTheme(theme);
	}, [setTheme, theme]);

	useEffect(() => setTheme(theme), [setTheme, theme]);

	return (
		<Wrapper>
			<Editor
				height="500px"
				defaultLanguage="typescript"
				options={options}
				value={value}
				onChange={onChange}
				onMount={handleEditorMount}
			/>
		</Wrapper>
	);
};

export default memo(CodeField);
