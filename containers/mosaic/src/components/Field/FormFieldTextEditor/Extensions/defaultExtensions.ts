import { common, createLowlight } from "lowlight";
import "highlight.js/styles/stackoverflow-light.min.css";

import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block-lowlight";
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
import Underline from "@tiptap/extension-underline";
import { WildCardContent } from "./WildCardContent";

const lowlight = createLowlight(common);

export const defaultExtensions = [
	Dropcursor,
	Document,
	Paragraph,
	Text,
	Bold,
	Blockquote,
	Code,
	CodeBlock.configure({
		lowlight,
	}),
	Image,
	Italic,
	Underline,
	Strike,
	Superscript,
	Subscript,
	Link.configure({
		openOnClick: false,
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
	WildCardContent,
];
