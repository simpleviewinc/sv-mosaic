import { escapeHtmlSpaces } from "@root/utils/dom/escapeHtmlSpaces";

describe(__filename, function () {
	it("should convert multiple spaces into a single space followed by &nbsp; entities", async () => {
		const html = "<p>   </p>";

		expect(escapeHtmlSpaces(html)).toBe("<p> &nbsp;&nbsp;</p>");
	});

	it("should convert multple whitespace characters into a single space followed by &nbsp; entities", async () => {
		const html = `<p>

 </p>`;

		expect(escapeHtmlSpaces(html)).toBe("<p> &nbsp;&nbsp;</p>");
	});

	it("should not convert single spaces", async () => {
		const html = "<p>Foo Bar</p>";

		expect(escapeHtmlSpaces(html)).toBe("<p>Foo Bar</p>");
	});

	it("should not convert space-only content between tags", async () => {
		const html = "<p><span>Foo</span>    <span>Bar</span></p>";

		expect(escapeHtmlSpaces(html)).toBe("<p><span>Foo</span>    <span>Bar</span></p>");
	});
});
