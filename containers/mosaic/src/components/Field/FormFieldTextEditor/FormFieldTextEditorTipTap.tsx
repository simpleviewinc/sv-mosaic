import React, { ReactElement, useState, useMemo, useEffect, useRef, useCallback } from "react";
import { useEditor, posToDOMRect, EditorOptions, Extensions } from "@tiptap/react";

import type { ControlBase, ControlsConfig, SelectionType, FloatingToolbarState, EditorMode, NodeFormState, TextEditorNextInputSettings, TextEditorData } from "./FormFieldTextEditorTypes";
import type { MosaicFieldProps } from "../FieldTypes";

import { Editor, Toolbar, CodeView, StyledTextEditor } from "./FormFieldTextEditorTipTap.styled";
import { NodeForm } from "./NodeForm";
import { ToolbarControls, ModeSwitch } from "./Toolbar";
import { transformScriptTags } from "./Extensions/Script";
import { isEmptyDOM } from "@root/utils/dom/isEmptyDOM";
import { FloatingToolbar } from "./FloatingToolbar";
import { controlBold, controlClear, controlImage, controlItalic, controlLink, controlStrikethrough, controlSuperscript, controlUnderline } from "./Toolbar/Controls/predefinedControls";
import { arrayDifference } from "@root/utils/array";
import { defaultExtensions } from "./Extensions/defaultExtensions";
import { escapeHtmlSpaces } from "@root/utils/dom/escapeHtmlSpaces";

const controls: ControlsConfig = [
	["headings"],
	["bold", "italic", ["underline", "strike", "superscript", "subscript", "clear"]],
	["bulletList", "orderedList"],
	["link", "image"],
	["codeBlock", "blockquote"],
];

const formattingShow: ControlBase["show"] = ({ selectionTypes = [] }) => selectionTypes.includes("formatting");

const floatingControls: ControlsConfig = [
	[
		{ ...controlBold, show: formattingShow },
		{ ...controlItalic, show: formattingShow },
		[
			{ ...controlUnderline, show: formattingShow },
			{ ...controlStrikethrough, show: formattingShow },
			{ ...controlSuperscript, show: formattingShow },
			{ ...controlClear, show: formattingShow },
		],
	],
	[
		{
			...controlLink,
			show: ({ selectionTypes = [] }) => selectionTypes.includes("link"),
		},
		{
			...controlImage,
			show: ({ selectionTypes = [] }) => selectionTypes.includes("image"),
		},
	],
];

export function FormFieldTextEditorTipTap({
	value = "",
	onChange,
	onBlur: onBlurProvided,
	fieldDef: {
		inputSettings,
		inputSettings: {
			extensions: providedExtensions,
		} = {},
	},
}: MosaicFieldProps<"textEditor", TextEditorNextInputSettings, TextEditorData>): ReactElement {
	const [mode, setMode] = useState<EditorMode>("visual");
	const [focus, setFocus] = useState(false);
	const [floatingToolbar, setFloatingToolbar] = useState<FloatingToolbarState>({
		open: false,
		selectionTypes: [],
	});
	const [nodeForm, setNodeForm] = useState<NodeFormState | null>(null);

	const extensions = useMemo<Extensions>(() => providedExtensions || defaultExtensions, [providedExtensions]);
	const updatesBlocked = useRef(false);
	const lastValidContent = useRef<string>(value);

	const onSelectionUpdate: EditorOptions["onSelectionUpdate"] = useCallback(({ editor }) => {
		setFloatingToolbar((state) => {
			const { view } = editor;
			const { state: { selection: { from, to } } } = view;

			const selectionTypes: SelectionType[] = [];
			const linkActive = editor.isActive("link");
			const imageActive = editor.isActive("image");

			if (linkActive) {
				selectionTypes.push("link");
			}

			if (imageActive) {
				selectionTypes.push("image");
			} else if (from !== to) {
				selectionTypes.push("formatting");
			}

			const open = selectionTypes.length > 0;

			if (!open) {
				if (!state.open) {
					return state;
				}

				return {
					open: false,
					selectionTypes: [],
				};
			}

			return {
				open: true,
				anchor: { getBoundingClientRect: () => posToDOMRect(view, from, to) } as HTMLElement,
				// Avoid a new array if it's the same to support downstream memoisation.
				selectionTypes: arrayDifference(state.selectionTypes, selectionTypes).length ? selectionTypes : state.selectionTypes,
			};
		});
	}, []);

	const onFocus = () => setFocus(true);

	const onBlur = () => {
		if (onBlurProvided) {
			onBlurProvided();
		}

		setFocus(false);
	};

	const editor = useEditor({
		content: String(value),
		extensions,
		onUpdate: ({ editor }) => {
			updatesBlocked.current = true;

			const content = isEmptyDOM(editor.view.dom) ? "" : escapeHtmlSpaces(transformScriptTags(editor.getHTML()));
			lastValidContent.current = content;
			onChange(content);
		},
		onSelectionUpdate,
	}, []);

	useEffect(() => {
		if (updatesBlocked.current) {
			updatesBlocked.current = false;
			return;
		}

		if (!editor || updatesBlocked.current) {
			return;
		}

		try {
			const content = String(value);
			editor.commands.setContent(content, false);
			lastValidContent.current = content;
		} catch (err) {
			editor.commands.setContent(lastValidContent.current, false);
		}
	}, [editor, value]);

	const closeNodeForm = () => {
		setNodeForm((state) => ({ ...state, open: false }));
		editor.chain().focus();
	};

	return (
		<StyledTextEditor>
			<Toolbar $focus={focus}>
				{mode === "visual" && (
					<ToolbarControls
						editor={editor}
						controls={controls}
						setNodeForm={setNodeForm}
						inputSettings={inputSettings}
					/>
				)}
				<ModeSwitch
					mode={mode}
					onChange={setMode}
					focus={focus}
				/>
			</Toolbar>
			{mode === "code" ? (
				<CodeView
					value={value}
					onChange={({ target: { value } }) => onChange(value)}
					onFocus={onFocus}
					onBlur={onBlur}
				/>
			) : (
				<Editor
					editor={editor}
					onFocus={onFocus}
					onBlur={onBlur}
				/>
			)}
			{nodeForm && (
				<NodeForm
					{...nodeForm}
					editor={editor}
					onClose={closeNodeForm}
				/>
			)}
			{(!nodeForm || !nodeForm.open) && (
				<FloatingToolbar
					{...floatingToolbar}
					editor={editor}
					controls={floatingControls}
					setNodeForm={setNodeForm}
					inputSettings={inputSettings}
				/>
			)}
		</StyledTextEditor>
	);
}
