import React, { ReactElement, useState, useMemo, useEffect, useRef, useCallback, memo } from "react";
import { useEditor, posToDOMRect, EditorOptions, Extensions } from "@tiptap/react";

import type { ControlBase, ControlsConfig, SelectionType, FloatingToolbarState, EditorMode, NodeFormState, TextEditorNextInputSettings, TextEditorData } from "./FormFieldTextEditorTypes";
import type { MosaicFieldProps } from "../FieldTypes";

import { Editor, CodeView, StyledTextEditor, PrimaryToolbar } from "./FormFieldTextEditorTipTap.styled";
import { NodeForm } from "./NodeForm";
import { ToolbarControls, ModeSwitch } from "./Toolbar";
import { transformScriptTags } from "./Extensions/Script";
import { isEmptyDOM } from "@root/utils/dom/isEmptyDOM";
import { FloatingToolbar } from "./FloatingToolbar";
import { controlBold, controlClear, controlImage, controlItalic, controlLink, controlStrikethrough, controlSuperscript, controlUnderline } from "./Toolbar/Controls/predefinedControls";
import { arrayDifference } from "@root/utils/array";
import { defaultExtensions } from "./Extensions/defaultExtensions";
import { escapeHtmlSpaces } from "@root/utils/dom/escapeHtmlSpaces";
import testIds from "@root/utils/testIds";

const defaultControls: ControlsConfig = [
	["headings"],
	["bold", "italic", ["underline", "strike", "superscript", "subscript", "clear"]],
	["bulletList", "orderedList"],
	["alignLeft", "alignCenter", ["alignRight", "alignJustify"]],
	["link", ["image", "codeBlock", "blockquote"]],
	["undo", "redo"],
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
			show: ({ selectionTypes = [] }) => !selectionTypes.includes("image"),
		},
		{
			...controlImage,
			show: ({ selectionTypes = [] }) => selectionTypes.includes("image"),
		},
	],
];

function FormFieldTextEditorTipTapUnmemoised({
	value = "",
	onChange,
	onBlur: onBlurProvided,
	fieldDef: {
		inputSettings,
		inputSettings: {
			extensions: providedExtensions,
			controls = defaultControls,
		} = {},
	},
}: MosaicFieldProps<"textEditor", TextEditorNextInputSettings, TextEditorData>): ReactElement {
	const [mode, setMode] = useState<EditorMode>("visual");
	const [focus, setFocus] = useState(false);
	const floatingToolbarBusy = useRef(false);
	const [floatingToolbar, setFloatingToolbar] = useState<FloatingToolbarState>({
		open: false,
		selectionTypes: [],
	});
	const [nodeForm, _setNodeForm] = useState<NodeFormState | null>(null);

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
		editorProps: {
			attributes: {
				"data-testid": testIds.TEXT_EDITOR_CANVAS,
			},
		},
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
		} catch (error) {
			editor.commands.setContent(lastValidContent.current, false);
			console.warn("Could not set rich text content for given value", { error, value });
		}
	}, [editor, value]);

	const setNodeForm: typeof _setNodeForm = (value) => {
		floatingToolbarBusy.current = false;
		_setNodeForm(value);
	};

	const closeNodeForm = () => {
		setNodeForm((state) => ({ ...state, open: false }));
		editor.chain().focus();
	};

	return (
		<StyledTextEditor>
			<ModeSwitch
				mode={mode}
				onChange={setMode}
				focus={focus}
			/>
			{mode === "visual" && (
				<PrimaryToolbar $focus={focus} data-testid={testIds.TEXT_EDITOR_PRIMARY_TOOLBAR}>
					<ToolbarControls
						editor={editor}
						controls={controls}
						setNodeForm={setNodeForm}
						inputSettings={inputSettings}
					/>
				</PrimaryToolbar>
			)}
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
			{(focus || floatingToolbarBusy.current) && (!nodeForm || !nodeForm.open) && (
				<FloatingToolbar
					{...floatingToolbar}
					editor={editor}
					controls={floatingControls}
					setNodeForm={setNodeForm}
					inputSettings={inputSettings}
					isBusy={floatingToolbarBusy}
				/>
			)}
		</StyledTextEditor>
	);
}

export const FormFieldTextEditorTipTap = memo(FormFieldTextEditorTipTapUnmemoised);
