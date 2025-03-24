import type { Editor as TipTapEditor } from "@tiptap/core";

import { posToDOMRect } from "@tiptap/react";

import type { ControlBase, ControlsConfig, VirtualElement } from "./FormFieldTextEditorTypes";

import { controlBold, controlClear, controlImage, controlItalic, controlLink, controlLinkPreview, controlStrikethrough, controlSubscript, controlSuperscript, controlUnderline } from "./Toolbar/Controls/predefinedControls";

export const defaultControls: ControlsConfig[] = [
	[
		["headings"],
		[
			"bold",
			"italic",
			{
				name: "moreFormatting",
				label: "More formatting",
				controls: ["underline", "strike", "superscript", "subscript", "clear"],
			},
		],
		["bulletList", "orderedList"],
		[
			"alignLeft",
			"alignCenter",
			{
				name: "moreAlignment",
				label: "More alignment",
				controls: ["alignRight", "alignJustify"],
			},
		],
		[
			"link",
			{
				name: "moreBlocks",
				label: "More blocks",
				controls: ["image", "codeBlock", "blockquote"],
			},
		],
	],
	[
		["undo", "redo"],
	],
];

const formattingShow: ControlBase["show"] = ({ selectionTypes = [] }) => selectionTypes.includes("formatting");

export const floatingControls: ControlsConfig[] = [
	[
		[
			{ ...controlBold, show: formattingShow },
			{ ...controlItalic, show: formattingShow },
			[
				{ ...controlUnderline, show: formattingShow },
				{ ...controlStrikethrough, show: formattingShow },
				{ ...controlSuperscript, show: formattingShow },
				{ ...controlSubscript, show: formattingShow },
				{ ...controlClear, show: formattingShow },
			],
		],
		[
			{
				...controlLink,
			},
			{
				...controlLinkPreview,
				show: ({ selectionTypes = [] }) => selectionTypes.includes("link"),
			},
		],
		[
			{
				...controlImage,
				show: ({ selectionTypes = [] }) => selectionTypes.includes("image"),
			},
		],
	],
];

export function selectionVirtualElement({ view, state: { selection: { from, to } } }: TipTapEditor): VirtualElement {
	return {
		getBoundingClientRect: () => posToDOMRect(view, from, to),
	};
}
