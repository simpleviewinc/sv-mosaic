import type { Attributes } from "@tiptap/core";
import { Node } from "@tiptap/core";
import attributes from "./attributes.json";

const wildcardAttributes: Attributes = {};

for (const attribute of attributes) {
	wildcardAttributes[attribute] = {
		default: undefined,
	};
}

export const WildCardContent = Node.create({
	name: "wildCardContent",

	group: "block",

	content: "block*",

	inline: false,

	atom: false,

	addOptions() {
		return {
			HTMLAttributes: {},
		};
	},

	parseHTML() {
		return [
			{
				tag: "*",
				getAttrs: (dom) => {
					const attrs = {};
					for (let i = 0; i < dom.attributes.length; i++) {
						const attr = dom.attributes[i];
						attrs[attr.name] = attr.value;
					}
					return {
						tagName: dom.tagName.toLowerCase(),
						...attrs,
					};
				},
			},
		];
	},

	renderHTML({ node }) {
		const { tagName, ...attrs } = node.attrs;
		return [tagName, attrs, 0];
	},

	addAttributes() {
		return {
			tagName: {
				default: "div",
			},
			...wildcardAttributes,
			...this.options.HTMLAttributes,
		};
	},
});
