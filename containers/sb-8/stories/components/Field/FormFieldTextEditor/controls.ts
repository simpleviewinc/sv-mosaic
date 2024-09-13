import { SelectAll } from "@mui/icons-material";
import { ControlsConfig } from "@root/components/Field";

export const controls: ControlsConfig = [
	["headings"],
	["bold", "italic", ["underline", "strike", "superscript", "subscript", "clear"]],
	["bulletList", "orderedList"],
	["alignLeft", "alignCenter", ["alignRight", "alignJustify"]],
	["link", ["image", "codeBlock", "blockquote"]],
	["undo", "redo"],
];
