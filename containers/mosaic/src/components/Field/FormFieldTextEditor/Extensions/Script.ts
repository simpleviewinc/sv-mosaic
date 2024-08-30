import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { ScriptNodeView } from "./ScriptNodeView";
import { mutateHtml } from "@root/utils/dom/mutateHtml";

export const Script = Node.create({
	name: "script",

	group: "block",

	content: "inline*",

	code: true,

	draggable: true,

	parseHTML() {
		return [
			{
				tag: "script",
				preserveWhitespace: "full",
			},
		];
	},

	renderHTML({ HTMLAttributes }) {
		return [
			"span",
			mergeAttributes({ "data-type": this.name }, this.options.HTMLAttributes, HTMLAttributes),
			0,
		];
	},

	addNodeView() {
		return ReactNodeViewRenderer(ScriptNodeView, {
			className: "tiptap-block",
		});
	},
});

export function transformScriptTags(html: string): string {
	// Avoid extra work and bail early if there is nothing to replace
	if (!html.includes(`<span data-type="${Script.name}">`)) {
		return html;
	}

	return mutateHtml(html, ({ elem }) => {
		if (!elem) {
			return;
		}

		if (elem.tagName.toLowerCase() !== "span") {
			return;
		}

		if (elem.getAttribute("data-type") !== Script.name) {
			return;
		}

		const outerHTML = elem.outerHTML
			.replace(new RegExp(`^<span data-type="${Script.name}">`), "<script>")
			.replace(/<\/span>$/, "</script>");

		elem.outerHTML = outerHTML;
	});
}
