import type { Dispatch, MouseEvent, MutableRefObject, ReactElement, SetStateAction } from "react";
import type { Editor, Extensions } from "@tiptap/core";

import type { FieldDefBase } from "@root/components/Field";
import type { MosaicObject, MosaicToggle, SvgIconComponent } from "@root/types";
import type { PopperProps } from "@mui/material/Popper";
import type { FormState } from "@root/components/Form";

export type SelectionType =
	| "formatting"
	| "image"
	| "link";

export interface VirtualElement {
	getBoundingClientRect: () => DOMRect;
}

export interface ToolbarControlsProps {
	controls: ControlsConfig[];
	editor: Editor;
	selectionTypes?: SelectionType[];
	inputSettings: TextEditorInputSettings;
	disabled?: boolean;
}

export interface FloatingToolbarState {
	open: boolean;
	anchor?: VirtualElement;
	selectionTypes: SelectionType[];
}

export type FloatingToolbarProps = ToolbarControlsProps & FloatingToolbarState & {
	isBusy: MutableRefObject<boolean>;
};

export interface NodeFormTypeProps {
	editor: Editor;
	onClose: () => void;
	data: FormState["data"];
}

export type NodeFormState = {
	open: boolean;
	anchorEl?: PopperProps["anchorEl"];
} & ({
	type: "link";
	values: Partial<TextEditorUpdateLinkValues>;
	update: TextEditorUpdateLink;
	isTextBased?: boolean;
} | {
	type: "image";
	values: Partial<TextEditorUpdateImageValues>;
	update: TextEditorUpdateImage;
});

export type NodeFormSet = Dispatch<SetStateAction<NodeFormState>>;

export type ControlName = string;

export interface ControlBase {
	name: ControlName;
	label: string;
	shortcut?: ShortcutDef;
	show?: MosaicToggle<{ selectionTypes?: SelectionType[] }>;
}

export type ControlWithProps = ControlBase & {
	cmd: (params: {
		editor: Editor;
		inputSettings: TextEditorInputSettings;
		event: MouseEvent<HTMLButtonElement>;
	}) => void;
	Icon?: SvgIconComponent;
};

export type ControlComponentProps = {
	editor: Editor;
	onSelected?: () => void;
	inputSettings: TextEditorInputSettings;
	disabled?: boolean;
} & Omit<ControlWithComponent, "component">;

export type ControlWithComponent = ControlBase & {
	Component: (params: ControlComponentProps) => ReactElement;
};

export type Control = ControlWithProps | ControlWithComponent;

export type ControlMenu = ControlBase & {
	MenuButton?: (props: MenuButtonProps) => ReactElement;
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

export type ControlMenuConfig = Omit<ControlMenu, "controls"> & {
	controls: (ControlName | Control)[];
}

export type ControlConfig = ControlName | Control | ControlMenu;

export type ControlsConfig = (ControlMenuConfig | ControlConfig | ControlConfig[])[][];

export type EditorMode = "code" | "visual";

export interface ShortcutDef {
	pc: string;
	mac: string;
}

export interface TextEditorUpdateLinkValues {
	url: string;
	newTab?: boolean;
	text?: string;
}

export type TextEditorUpdateLink = (params: TextEditorUpdateLinkValues) => void;
export type TextEditorRemoveLink = () => void;
export type TextEditorOnLinkParams = Partial<TextEditorUpdateLinkValues> & {
	updateLink: TextEditorUpdateLink;
	removeLink: TextEditorRemoveLink;
	isTextBased?: boolean;
};

export interface TextEditorUpdateImageValues {
	src: string;
	alt?: string;
}

export type TextEditorUpdateImage = (params: TextEditorUpdateImageValues) => void;
export type TextEditorOnImageParams = Partial<TextEditorUpdateImageValues> & {
	updateImage: TextEditorUpdateImage;
};

export interface TextEditorInputSettings {
	controls?: ControlsConfig[];
	extensions?: Extensions;
	onLink?: (params: TextEditorOnLinkParams) => void;
	onImage?: (params: TextEditorOnImageParams) => void;
	allowedLinkProtocols?: string[];
	autolink?: boolean;
	maxCharacters?: number;
	minHeight?: number | string;
	maxHeight?: number | string;
	custom?: MosaicObject<any>;
}

export type TextEditorData = string;

export type FieldDefTextEditor = FieldDefBase<"textEditor", TextEditorInputSettings>;
