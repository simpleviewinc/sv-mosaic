import type { ReactElement } from "react";
import type { EditorOptions, Extensions } from "@tiptap/react";

import React, { useState, useMemo, useEffect, useRef, useCallback, memo } from "react";
import { useEditor } from "@tiptap/react";
import Skeleton from "@mui/material/Skeleton";

import type { SelectionType, FloatingToolbarState, EditorMode, NodeFormState, TextEditorNextInputSettings, TextEditorData } from "./FormFieldTextEditorTypes";
import type { MosaicFieldProps } from "../FieldTypes";

import { Editor, CodeView, StyledTextEditor, PrimaryToolbar } from "./FormFieldTextEditorTipTap.styled";
import { NodeForm } from "./NodeForm";
import { ToolbarControls, ModeSwitch } from "./Toolbar";
import { transformScriptTags } from "./Extensions/Script";
import { isEmptyDOM } from "@root/utils/dom/isEmptyDOM";
import { FloatingToolbar } from "./FloatingToolbar";
import { arrayDifference } from "@root/utils/array";
import { defaultExtensions } from "./Extensions/defaultExtensions";
import { escapeHtmlSpaces } from "@root/utils/dom/escapeHtmlSpaces";
import testIds from "@root/utils/testIds";
import { defaultControls, floatingControls, selectionVirtualElement } from "./textEditorUtils";

function FormFieldTextEditorTipTapUnmemoised({
	value = "",
	onChange,
	onBlur: onBlurProvided,
	fieldDef: {
		inputSettings: providedInputSettings,
		inputSettings: {
			extensions: providedExtensions,
			controls = defaultControls,
		} = {},
	},
	disabled,
	skeleton,
}: MosaicFieldProps<"textEditor", TextEditorNextInputSettings, TextEditorData>): ReactElement {
	const [mode, setMode] = useState<EditorMode>("visual");
	const [focus, setFocus] = useState(false);
	const floatingToolbarBusy = useRef(false);
	const [floatingToolbar, setFloatingToolbar] = useState<FloatingToolbarState>({
		open: false,
		selectionTypes: [],
	});
	const [nodeForm, _setNodeForm] = useState<NodeFormState | null>(null);

	const setNodeForm: typeof _setNodeForm = (value) => {
		floatingToolbarBusy.current = false;
		_setNodeForm(value);
	};

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
				anchor: selectionVirtualElement(editor),
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
		editable: !disabled,
	}, []);

	const inputSettings = useMemo<TextEditorNextInputSettings>(() => ({
		...providedInputSettings,
		onLink: providedInputSettings.onLink || (({ updateLink, ...values }) => setNodeForm({
			open: true,
			type: "link",
			values,
			anchorEl: selectionVirtualElement(editor),
			update: (...params) => {
				setNodeForm(null);
				updateLink(...params);
			},
		})),
		onImage: providedInputSettings.onImage || (({ updateImage, ...values }) => setNodeForm({
			open: true,
			type: "image",
			values,
			anchorEl: selectionVirtualElement(editor),
			update: (...params) => {
				setNodeForm(null);
				updateImage(...params);
			},
		})),
	}), [editor, providedInputSettings]);

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
			console.error(err);
		}
	}, [editor, value]);

	const closeNodeForm = () => {
		setNodeForm((state) => ({ ...state, open: false }));
		editor.chain().focus();
	};

	if (skeleton) {
		return (
			<Skeleton
				variant="rectangular"
				width="100%"
				height={130}
			/>
		);
	}

	return (
		<StyledTextEditor $disabled={disabled}>
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
						inputSettings={inputSettings}
						disabled={disabled}
					/>
				</PrimaryToolbar>
			)}
			{mode === "code" ? (
				<CodeView
					value={value}
					onChange={({ target: { value } }) => onChange(value)}
					onFocus={onFocus}
					onBlur={onBlur}
					disabled={disabled}
				/>
			) : (
				<Editor
					editor={editor}
					onFocus={onFocus}
					onBlur={onBlur}
					disabled={disabled}
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
					inputSettings={inputSettings}
					isBusy={floatingToolbarBusy}
				/>
			)}
		</StyledTextEditor>
	);
}

export const FormFieldTextEditorTipTap = memo(FormFieldTextEditorTipTapUnmemoised);
