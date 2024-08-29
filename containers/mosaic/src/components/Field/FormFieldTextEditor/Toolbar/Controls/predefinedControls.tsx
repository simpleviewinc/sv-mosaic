import "highlight.js/styles/stackoverflow-light.min.css";

import BoldIcon from "@mui/icons-material/FormatBold";
import ClearIcon from "@mui/icons-material/FormatClear";
import ItalicIcon from "@mui/icons-material/FormatItalic";
import UnderlineIcon from "@mui/icons-material/FormatUnderlined";
import StrikeIcon from "@mui/icons-material/FormatStrikethrough";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import SubscriptIcon from "@mui/icons-material/Subscript";
import BulletListIcon from "@mui/icons-material/FormatListBulleted";
import OrderedListIcon from "@mui/icons-material/FormatListNumbered";
import BlockquoteIcon from "@mui/icons-material/FormatQuote";
import CodeIcon from "@mui/icons-material/Code";

import type { Control, ControlMenu } from "../../FormFieldTextEditorTypes";

import { LinkControl } from "./LinkControl";
import { ImageControl } from "./ImageControl";
import {
	ControlHeading1,
	ControlHeading2,
	ControlHeading3,
	ControlHeading4,
	ControlHeading5,
	ControlHeading6,
	ControlNormalText,
} from "./ControlHeadings";
import { TextStyleMenuButton } from ".";

const controlNormalText: Control = {
	name: "normal-text",
	label: "Normal Text",
	Component: ControlNormalText,
	shortcut: {
		mac: "Cmd+Alt+0",
		pc: "Ctrl+Alt+0",
	},
};

const controlHeading1: Control = {
	name: "heading-1",
	label: "Heading 1",
	Component: ControlHeading1,
	shortcut: {
		mac: "Cmd+Alt+1",
		pc: "Ctrl+Alt+1",
	},
};

const controlHeading2: Control = {
	name: "heading-2",
	label: "Heading 2",
	Component: ControlHeading2,
	shortcut: {
		mac: "Cmd+Alt+2",
		pc: "Ctrl+Alt+2",
	},
};

const controlHeading3: Control = {
	name: "heading-3",
	label: "Heading 3",
	Component: ControlHeading3,
	shortcut: {
		mac: "Cmd+Alt+3",
		pc: "Ctrl+Alt+3",
	},
};

const controlHeading4: Control = {
	name: "heading-4",
	label: "Heading 4",
	Component: ControlHeading4,
	shortcut: {
		mac: "Cmd+Alt+4",
		pc: "Ctrl+Alt+4",
	},
};

const controlHeading5: Control = {
	name: "heading-5",
	label: "Heading 5",
	Component: ControlHeading5,
	shortcut: {
		mac: "Cmd+Alt+5",
		pc: "Ctrl+Alt+5",
	},
};

const controlHeading6: Control = {
	name: "heading-6",
	label: "Heading 6",
	Component: ControlHeading6,
	shortcut: {
		mac: "Cmd+Alt+6",
		pc: "Ctrl+Alt+6",
	},
};

export const controlHeadings: ControlMenu = {
	name: "headings",
	label: "Headings",
	MenuButton: TextStyleMenuButton,
	controls: [
		controlNormalText,
		controlHeading1,
		controlHeading2,
		controlHeading3,
		controlHeading4,
		controlHeading5,
		controlHeading6,
	],
};

export const controlBold: Control = {
	name: "bold",
	label: "Bold",
	cmd: (editor) => editor.chain().focus().toggleBold().run(),
	Icon: BoldIcon,
	shortcut: {
		mac: "Cmd+B",
		pc: "Ctrl+B",
	},
};

export const controlItalic: Control = {
	name: "italic",
	label: "Italic",
	cmd: (editor) => editor.chain().focus().toggleItalic().run(),
	Icon: ItalicIcon,
	shortcut: {
		mac: "Cmd+I",
		pc: "Ctrl+I",
	},
};

export const controlUnderline: Control = {
	name: "underline",
	label: "Underline",
	cmd: (editor) => editor.chain().focus().toggleUnderline().run(),
	Icon: UnderlineIcon,
	shortcut: {
		mac: "Cmd+U",
		pc: "Ctrl+U",
	},
};

export const controlStrikethrough: Control = {
	name: "strike",
	label: "Strikethrough",
	cmd: (editor) => editor.chain().focus().toggleStrike().run(),
	Icon: StrikeIcon,
	shortcut: {
		mac: "Cmd+Shift+S",
		pc: "Ctrl+Shift+S",
	},
};

export const controlSuperscript: Control = {
	name: "superscript",
	label: "Superscript",
	cmd: (editor) => editor.chain().focus().toggleSuperscript().run(),
	Icon: SuperscriptIcon,
	shortcut: {
		mac: "Cmd+.",
		pc: "Ctrl+.",
	},
};

export const controlSubscript: Control = {
	name: "subscript",
	label: "Subscript",
	cmd: (editor) => editor.chain().focus().toggleSubscript().run(),
	Icon: SubscriptIcon,
	shortcut: {
		mac: "Cmd+,",
		pc: "Ctrl+,",
	},
};

export const controlClear: Control = {
	name: "clear",
	label: "Clear Formatting",
	cmd: (editor) => editor.chain().focus().unsetAllMarks().run(),
	Icon: ClearIcon,
};

export const controlBulletList: Control = {
	name: "bulletList",
	label: "Bullet List",
	cmd: (editor) => editor.chain().focus().toggleBulletList().run(),
	Icon: BulletListIcon,
	shortcut: {
		mac: "Cmd+Shift+8",
		pc: "Ctrl+Shift+8",
	},
};

export const controlOrderedList: Control = {
	name: "orderedList",
	label: "Ordered List",
	cmd: (editor) => editor.chain().focus().toggleOrderedList().run(),
	Icon: OrderedListIcon,
	shortcut: {
		mac: "Cmd+Shift+7",
		pc: "Ctrl+Shift+7",
	},
};

export const controlLink: Control = {
	name: "link",
	label: "Link",
	Component: LinkControl,
};

export const controlImage: Control = {
	name: "image",
	label: "Image",
	Component: ImageControl,
};

export const controlCodeBlock: Control = {
	name: "codeBlock",
	label: "Code Block",
	cmd: (editor) => editor.chain().focus().toggleCodeBlock().run(),
	Icon: CodeIcon,
	shortcut: {
		mac: "Cmd+Alt+C",
		pc: "Ctrl+Alt+C",
	},
};

export const controlBlockquote: Control = {
	name: "blockquote",
	label: "Quote",
	cmd: (editor) => editor.chain().focus().toggleBlockquote().run(),
	Icon: BlockquoteIcon,
	shortcut: {
		mac: "Cmd+Shift+B",
		pc: "Ctrl+Shift+B",
	},
};

export const predefinedControls: (Control | ControlMenu)[] = [
	controlHeadings,
	controlBold,
	controlItalic,
	controlUnderline,
	controlStrikethrough,
	controlSuperscript,
	controlSubscript,
	controlClear,
	controlBulletList,
	controlOrderedList,
	controlLink,
	controlImage,
	controlCodeBlock,
	controlBlockquote,
];
