import type { Node } from "@tiptap/pm/model";

import BoldIcon from "@mui/icons-material/FormatBold";
import ClearIcon from "@mui/icons-material/FormatClear";
import AlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import AlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import AlignRightIcon from "@mui/icons-material/FormatAlignRight";
import AlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ImageIcon from "@mui/icons-material/Image";
import ItalicIcon from "@mui/icons-material/FormatItalic";
import LinkIcon from "@mui/icons-material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import UnderlineIcon from "@mui/icons-material/FormatUnderlined";
import StrikeIcon from "@mui/icons-material/FormatStrikethrough";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import SubscriptIcon from "@mui/icons-material/Subscript";
import BulletListIcon from "@mui/icons-material/FormatListBulleted";
import OrderedListIcon from "@mui/icons-material/FormatListNumbered";
import BlockquoteIcon from "@mui/icons-material/FormatQuote";
import CodeIcon from "@mui/icons-material/Code";

import type { Control, ControlMenu } from "../../FormFieldTextEditorTypes";

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
import { defaultAllowedProtocols, sanitizeUrl } from "@root/utils/string";

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
	cmd: ({ editor }) => editor.chain().focus().toggleBold().run(),
	Icon: BoldIcon,
	shortcut: {
		mac: "Cmd+B",
		pc: "Ctrl+B",
	},
};

export const controlItalic: Control = {
	name: "italic",
	label: "Italic",
	cmd: ({ editor }) => editor.chain().focus().toggleItalic().run(),
	Icon: ItalicIcon,
	shortcut: {
		mac: "Cmd+I",
		pc: "Ctrl+I",
	},
};

export const controlUnderline: Control = {
	name: "underline",
	label: "Underline",
	cmd: ({ editor }) => editor.chain().focus().toggleUnderline().run(),
	Icon: UnderlineIcon,
	shortcut: {
		mac: "Cmd+U",
		pc: "Ctrl+U",
	},
};

export const controlStrikethrough: Control = {
	name: "strike",
	label: "Strikethrough",
	cmd: ({ editor }) => editor.chain().focus().toggleStrike().run(),
	Icon: StrikeIcon,
	shortcut: {
		mac: "Cmd+Shift+S",
		pc: "Ctrl+Shift+S",
	},
};

export const controlSuperscript: Control = {
	name: "superscript",
	label: "Superscript",
	cmd: ({ editor }) => editor.chain().focus().toggleSuperscript().run(),
	Icon: SuperscriptIcon,
	shortcut: {
		mac: "Cmd+.",
		pc: "Ctrl+.",
	},
};

export const controlSubscript: Control = {
	name: "subscript",
	label: "Subscript",
	cmd: ({ editor }) => editor.chain().focus().toggleSubscript().run(),
	Icon: SubscriptIcon,
	shortcut: {
		mac: "Cmd+,",
		pc: "Ctrl+,",
	},
};

export const controlClear: Control = {
	name: "clear",
	label: "Clear Formatting",
	cmd: ({ editor }) => editor.chain().focus().unsetAllMarks().run(),
	Icon: ClearIcon,
};

export const controlBulletList: Control = {
	name: "bulletList",
	label: "Bullet List",
	cmd: ({ editor }) => editor.chain().focus().toggleBulletList().run(),
	Icon: BulletListIcon,
	shortcut: {
		mac: "Cmd+Shift+8",
		pc: "Ctrl+Shift+8",
	},
};

export const controlOrderedList: Control = {
	name: "orderedList",
	label: "Ordered List",
	cmd: ({ editor }) => editor.chain().focus().toggleOrderedList().run(),
	Icon: OrderedListIcon,
	shortcut: {
		mac: "Cmd+Shift+7",
		pc: "Ctrl+Shift+7",
	},
};

export const controlAlignLeft: Control = {
	name: "alignLeft",
	label: "Align Left",
	cmd: ({ editor }) => editor.chain().focus().setTextAlign("left").run(),
	Icon: AlignLeftIcon,
	shortcut: {
		mac: "Cmd+Shift+L",
		pc: "Ctrl+Shift+L",
	},
};

export const controlAlignCenter: Control = {
	name: "alignCenter",
	label: "Align Center",
	cmd: ({ editor }) => editor.chain().focus().setTextAlign("center").run(),
	Icon: AlignCenterIcon,
	shortcut: {
		mac: "Cmd+Shift+E",
		pc: "Ctrl+Shift+E",
	},
};

export const controlAlignRight: Control = {
	name: "alignRight",
	label: "Align Right",
	cmd: ({ editor }) => editor.chain().focus().setTextAlign("right").run(),
	Icon: AlignRightIcon,
	shortcut: {
		mac: "Cmd+Shift+R",
		pc: "Ctrl+Shift+R",
	},
};

export const controlAlignJustify: Control = {
	name: "alignJustify",
	label: "Align Justify",
	cmd: ({ editor }) => editor.chain().focus().setTextAlign("justify").run(),
	Icon: AlignJustifyIcon,
	shortcut: {
		mac: "Cmd+Shift+J",
		pc: "Ctrl+Shift+J",
	},
};

export const controlLink: Control = {
	name: "link",
	label: "Link",
	cmd: ({ editor, inputSettings: { onLink, allowedLinkProtocols = defaultAllowedProtocols } }) => {
		const { view } = editor;
		const { state, state: { selection: { from, to } } } = view;

		const link = editor.state.selection.$to.marks()
			.find(({ type }) => type.name === "link");

		const text = link ?
			// If the cursor is over an existing link, get the text content of that link
			editor.state.doc.nodeAt(to - 1)?.textContent :
			// Otherwise get the text of the selection
			state.doc.textBetween(from, to);

		const values = {
			url: link?.attrs.href,
			newTab: link?.attrs.target === "_blank",
			text,
		};

		onLink({
			...values,
			updateLink: ({ url, newTab, text }) => {
				const { state: { selection: { $from } } } = editor;
				editor.chain()
					.insertContent(text, { updateSelection: true })
					.setTextSelection({ from: $from.pos, to: $from.pos + text.length })
					.focus()
					.extendMarkRange("link")
					.setLink({
						href: sanitizeUrl(url, allowedLinkProtocols),
						target: newTab ? "_blank" : "",
					})
					.run();
			},
		});
	},
	Icon: LinkIcon,
};

export const controlLinkPreview: Control = {
	name: "linkPreview",
	label: "Open URL in new tab",
	cmd: ({ editor }) => {
		const link = editor.state.selection.$to.marks()
			.find(({ type }) => type.name === "link");

		if (!link || !link.attrs.href) {
			return;
		}

		window.open(link.attrs.href, "_blank");
	},
	Icon: OpenInNewIcon,
};

export const controlImage: Control = {
	name: "image",
	label: "Image",
	cmd: ({ editor, inputSettings: { onImage } }) => {
		// TypeScript thinks that selection doesn't have an
		// associated node even though it does
		const selectedNode = (editor.state.selection as unknown as { node: Node }).node;
		const image = selectedNode?.type.name === "image" ? selectedNode : undefined;

		const values = {
			src: image?.attrs.src || "",
			alt: image?.attrs.alt,
		};

		onImage({
			...values,
			updateImage: (params) => editor.chain().focus()
				.setImage(params)
				.run(),
		});
	},
	Icon: ImageIcon,
};

export const controlCodeBlock: Control = {
	name: "codeBlock",
	label: "Code Block",
	cmd: ({ editor }) => editor.chain().focus().toggleCodeBlock().run(),
	Icon: CodeIcon,
	shortcut: {
		mac: "Cmd+Alt+C",
		pc: "Ctrl+Alt+C",
	},
};

export const controlBlockquote: Control = {
	name: "blockquote",
	label: "Quote",
	cmd: ({ editor }) => editor.chain().focus().toggleBlockquote().run(),
	Icon: BlockquoteIcon,
	shortcut: {
		mac: "Cmd+Shift+B",
		pc: "Ctrl+Shift+B",
	},
};

export const controlUndo: Control = {
	name: "undo",
	label: "Undo",
	cmd: ({ editor }) => editor.chain().focus().undo().run(),
	Icon: UndoIcon,
	shortcut: {
		mac: "Cmd+Z",
		pc: "Ctrl+Z",
	},
};

export const controlRedo: Control = {
	name: "redo",
	label: "Redo",
	cmd: ({ editor }) => editor.chain().focus().redo().run(),
	Icon: RedoIcon,
	shortcut: {
		mac: "Cmd+Y",
		pc: "Ctrl+Y",
	},
};

export const predefinedControls: (Control | ControlMenu)[] = [
	controlAlignLeft,
	controlAlignCenter,
	controlAlignRight,
	controlAlignJustify,
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
	controlLinkPreview,
	controlImage,
	controlCodeBlock,
	controlBlockquote,
	controlUndo,
	controlRedo,
];
