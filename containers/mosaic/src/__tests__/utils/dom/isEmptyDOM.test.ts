import { isEmptyDOM } from "@root/utils/dom/isEmptyDOM";

function createDOM(html: string): HTMLElement {
	const parser = new DOMParser();
	const dom = parser.parseFromString(html, "text/html");

	return dom.body;
}

describe(__filename, function() {
	it("should consider dom that contains a inline element with text not to be empty", function() {
		const dom = createDOM("<span>Test</span>");
		expect(isEmptyDOM(dom)).toBe(false);
	});
	it("should consider dom that contains a block element with text not to be empty", function() {
		const dom = createDOM("<p>Test</p>");
		expect(isEmptyDOM(dom)).toBe(false);
	});
	it("should consider dom to not be empty if there is more than one element and at least one is a block level element", function() {
		const siblings = createDOM("<span></span><div></div>");
		expect(isEmptyDOM(siblings)).toBe(false);
	});
	it("should consider dom to not be empty if there is multiple block level elements", function() {
		const siblings = createDOM("<div></div><div></div>");
		expect(isEmptyDOM(siblings)).toBe(false);
	});
	it("should consider dom to be empty if a block element contains an empty inline element", function() {
		const siblings = createDOM("<div><span></span></div>");
		expect(isEmptyDOM(siblings)).toBe(true);
	});
	it("should consider dom to be empty if a block element contains another block level element", function() {
		const siblings = createDOM("<div><div></div></div>");
		expect(isEmptyDOM(siblings)).toBe(true);
	});
	it("should consider single block tag with no text empty", function() {
		const dom = createDOM("<div></div>");
		expect(isEmptyDOM(dom)).toBe(true);
	});
	it("should consider dom that only contains inline tags empty if none contain text", function() {
		const dom = createDOM("<span></span><span></span>");
		expect(isEmptyDOM(dom)).toBe(true);
	});
});
