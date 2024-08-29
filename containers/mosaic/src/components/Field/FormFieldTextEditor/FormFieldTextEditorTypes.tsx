import type { Dispatch, MouseEvent, ReactElement, SetStateAction } from "react";
import type { Editor, Extensions } from "@tiptap/core";

import type { FieldDefBase } from "@root/components/Field";
import type { MosaicToggle, SvgIconComponent } from "@root/types";
import type { PopperProps } from "@mui/material/Popper";
import { FormProps } from "@root/components/Form";

export type SelectionType =
	| "formatting"
	| "image"
	| "link";

export interface FloatingToolbarState {
	open: boolean;
	anchor?: { getBoundingClientRect: () => DOMRect };
	selectionTypes: SelectionType[];
}

export type NodeFormType = "link" | "image";

export interface NodeFormTypeProps {
	editor: Editor;
	onClose: () => void;
	getFormValues: FormProps["getFormValues"];
}

export interface NodeFormState {
	open: boolean;
	anchorEl?: PopperProps["anchorEl"];
	values?: any;
	type: NodeFormType;

}

export type NodeFormSet = Dispatch<SetStateAction<NodeFormState>>;

export type ControlName =
	| "headings"
	| "normal-text"
	| "heading-1"
	| "heading-2"
	| "heading-3"
	| "heading-4"
	| "heading-5"
	| "heading-6"
	| "bold"
	| "italic"
	| "underline"
	| "strike"
	| "superscript"
	| "subscript"
	| "clear"
	| "bulletList"
	| "orderedList"
	| "link"
	| "image"
	| "codeBlock"
	| "blockquote";

export type ControlBase = {
	name: ControlName;
	label: string;
	shortcut?: ShortcutDef;
	show?: MosaicToggle<{ selectionTypes?: SelectionType[] }>;
};

export type ControlWithProps = ControlBase & {
	cmd: (editor: Editor) => void;
	Icon?: SvgIconComponent;
};

export type ControlComponentProps = {
	editor: Editor;
	onClose?: () => void;
	setNodeForm: NodeFormSet;
	inputSettings: TextEditorNextInputSettings;
} & Omit<ControlWithComponent, "component">;

export type ControlWithComponent = ControlBase & {
	Component: (params: ControlComponentProps) => ReactElement;
};

export type Control = ControlWithProps | ControlWithComponent;

export type ControlMenu = ControlBase & {
	MenuButton: (props: MenuButtonProps) => ReactElement;
	controls: Control[];
};

export interface MenuButtonProps {
	onClick: (e: MouseEvent<HTMLButtonElement>) => void;
	editor: Editor;
}

export type Controls = (
	| Control
	| Control[]
	| ControlMenu
)[][];

export type ControlConfig = ControlName | Control | ControlMenu;

export type ControlsConfig = (ControlConfig | ControlConfig[])[][];

export type EditorMode = "code" | "visual";

export type ShortcutDef = {
	pc: string;
	mac: string;
};

export type TextEditorInputSettings = {
	spellcheck?: boolean;
	direction?: "rtl" | "ltr" | "";
	language?: string;
	maxCharacters?: number;
};

export type TextEditorUpdateLink = (params: {
	url: string;
	newTab?: boolean;
}) => void;

export type TextEditorNextInputSettings = {
	extensions?: Extensions;
	onLink?: (params: {
		url?: string;
		newTab?: boolean;
		updateLink: TextEditorUpdateLink;
	}) => void;
};

export type TextEditorData = string;

export type FieldDefTextEditor = FieldDefBase<"textEditor", TextEditorInputSettings>;
