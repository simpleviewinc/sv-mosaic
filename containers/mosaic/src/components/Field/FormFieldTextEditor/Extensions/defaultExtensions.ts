import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import Dropcursor from "@tiptap/extension-dropcursor";
import Document from "@tiptap/extension-document";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import History from "@tiptap/extension-history";
import Image from "@tiptap/extension-image";
import Italic from "@tiptap/extension-italic";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import { Script } from "./Script";
import Strike from "@tiptap/extension-strike";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { WildCardContent } from "./WildCardContent";

export const getDefaultExtensions = ({ autolink }: { autolink?: boolean } = {}) => {
	return [
		Dropcursor,
		Document,
		Paragraph,
		Text,
		Bold,
		Blockquote,
		Code,
		CodeBlock,
		Image.configure({
			inline: true,
		}),
		Italic,
		Underline,
		Strike,
		Superscript,
		Subscript,
		Link.configure({
			openOnClick: false,
			autolink,
		}),
		Heading.configure({
			levels: [1, 2, 3, 4, 5, 6],
		}),
		OrderedList,
		BulletList,
		ListItem,
		HardBreak,
		History,
		Script,
		TextAlign.configure({
			types: ["heading", "paragraph"],
		}),
		WildCardContent,
	];
};
