import type { Dispatch, MouseEvent, ReactElement, SetStateAction } from "react";
import type { Editor, Extensions } from "@tiptap/core";

import type { FieldDefBase } from "@root/components/Field";
import type { MosaicToggle, SvgIconComponent } from "@root/types";
import type { PopperProps } from "@mui/material/Popper";
import type { FormProps } from "@root/components/Form";

export type SelectionType =
	| "formatting"
	| "image"
	| "link";

export interface VirtualElement {
	getBoundingClientRect: () => DOMRect;
}

export interface FloatingToolbarState {
	open: boolean;
	anchor?: VirtualElement;
	selectionTypes: SelectionType[];
}

export interface NodeFormTypeProps {
	editor: Editor;
	onClose: () => void;
	getFormValues: FormProps["getFormValues"];
}

export type NodeFormState = {
	open: boolean;
	anchorEl?: PopperProps["anchorEl"];
} & ({
	type: "link";
	values: Partial<TextEditorUpdateLinkValues>;
	update: TextEditorUpdateLink;
} | {
	type: "image";
	values: Partial<TextEditorUpdateImageValues>;
	update: TextEditorUpdateImage;
});

export type NodeFormSet = Dispatch<SetStateAction<NodeFormState>>;

export type ControlName = string;

export type ControlBase = {
	name: ControlName;
	label: string;
	shortcut?: ShortcutDef;
	show?: MosaicToggle<{ selectionTypes?: SelectionType[] }>;
};

export type ControlWithProps = ControlBase & {
	cmd: (params: {
		editor: Editor;
		inputSettings: TextEditorNextInputSettings;
	}) => void;
	Icon?: SvgIconComponent;
};

export type ControlComponentProps = {
	editor: Editor;
	onClose?: () => void;
	inputSettings: TextEditorNextInputSettings;
	disabled?: boolean;
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
	disabled?: boolean;
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

export interface TextEditorUpdateLinkValues {
	url: string;
	newTab?: boolean;
	text?: string;
}

export type TextEditorUpdateLink = (params: TextEditorUpdateLinkValues) => void;
export type TextEditorOnLinkParams = Partial<TextEditorUpdateLinkValues> & {
	updateLink: TextEditorUpdateLink;
};

export interface TextEditorUpdateImageValues {
	src: string;
	alt?: string;
}

export type TextEditorUpdateImage = (params: TextEditorUpdateImageValues) => void;
export type TextEditorOnImageParams = Partial<TextEditorUpdateImageValues> & {
	updateImage: TextEditorUpdateImage;
};

export type TextEditorNextInputSettings = {
	controls?: ControlsConfig;
	extensions?: Extensions;
	onLink?: (params: TextEditorOnLinkParams) => void;
	onImage?: (params: TextEditorOnImageParams) => void;
	allowedLinkProtocols?: string[];
	autolink?: boolean;
};

export type TextEditorData = string;

export type FieldDefTextEditor = FieldDefBase<"textEditor", TextEditorInputSettings>;
