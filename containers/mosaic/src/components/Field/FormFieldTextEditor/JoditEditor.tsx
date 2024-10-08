import type { ReactElement } from "react";

import { Jodit } from "jodit";
import "jodit/build/jodit.min.css";
import React, { memo, useEffect, useRef, useMemo } from "react";

import type { MosaicFieldProps } from "@root/components/Field";
import type { TextEditorData, TextEditorInputSettings } from "./FormFieldTextEditorTypes";

import { EditorWrapper } from "./FormFieldTextEditor.styled";

const buttonList = [
	"source",
	"|",
	"bold",
	"italic",
	"underline",
	"strikethrough",
	"superscript",
	"subscript",
	"paragraph",
	"fontsize",
	"font",
	"ul",
	"ol",
	"indent",
	"outdent",
	"left",
	"center",
	"right",
	"justify",
	"link",
	"image",
	"eraser",
	"undo",
	"redo",
];

const JoditEditor = (
	props: MosaicFieldProps<"textEditor", TextEditorInputSettings, TextEditorData>,
): ReactElement => {
	const { fieldDef, onBlur, onChange, value, disabled, error, inputRef, id } = props;

	const {
		inputSettings = {},
	} = fieldDef;

	const {
		spellcheck = false,
		direction = "ltr",
		language = "en",
	} = inputSettings;

	const textArea = useRef(null);
	const jodit = useRef<Jodit>(null);
	const hasSetValue = useRef(false);

	const config = useMemo(() => ({
		cleanHTML: {
			fillEmptyParagraph: false,
		},
		namespace: "",
		disabled,
		buttonsXS: buttonList,
		buttons: buttonList,
		buttonsSM: buttonList,
		buttonsMD: buttonList,
		buttonsLG: buttonList,
		spellcheck,
		direction,
		language,
		tabIndex: 0,
		disablePlugins: [
			"add-new-line",
			"powered-by-jodit",
			"stat",
		],
	}), [
		disabled,
		spellcheck,
		direction,
		language,
	]);

	useEffect(() => {
		const blurHandler = value => {
			onBlur && onBlur(value);
		};

		const changeHandler = value => {
			onChange && onChange(value);
		};

		jodit.current = Jodit.make(textArea.current, config);

		jodit.current.events.on("blur", () => {
			const value = jodit.current.value === "<p><br></p>" ? "" : jodit.current.value;
			blurHandler(value);
		});

		jodit.current.events.on("change", () => {
			const value = jodit.current.value === "<p><br></p>" ? "" : jodit.current.value;
			changeHandler(value);
		});

		if (inputRef) {
			inputRef.current = jodit.current.selection as any;
		}

		return () => jodit.current.destruct();
	}, [onBlur, onChange, config, inputRef]);

	/**
	 * Ridiculous hack because Jodit sucks when trying
	 * to set a new text editor value
	 */
	useEffect(() => {
		if (!jodit.current || hasSetValue.current || value === undefined) {
			return;
		}

		hasSetValue.current = true;
		jodit.current.value = value;
	}, [value]);

	return (
		<EditorWrapper $error={!!error} data-testid="text-editor-testid" id={id}>
			<textarea ref={textArea} />
		</EditorWrapper>
	);
};

export default memo(JoditEditor);
