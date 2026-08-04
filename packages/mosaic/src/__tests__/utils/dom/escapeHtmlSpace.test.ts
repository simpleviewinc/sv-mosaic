import { escapeHtml } from "@root/utils/dom/escapeHtml";

describe(__filename, function () {
	it("should convert multiple spaces into a single space followed by &nbsp; entities", async () => {
		const html = "<p>   </p>";

		expect(escapeHtml(html)).toBe("<p> &nbsp;&nbsp;</p>");
	});

	it("should convert multple whitespace characters into a single space followed by &nbsp; entities", async () => {
		const html = `<p>

 </p>`;

		expect(escapeHtml(html)).toBe("<p> &nbsp;&nbsp;</p>");
	});

	it("should not convert single spaces", async () => {
		const html = "<p>Foo Bar</p>";

		expect(escapeHtml(html)).toBe("<p>Foo Bar</p>");
	});

	it("should convert space-only content between inline tags", async () => {
		const html = "<p><span>Foo</span>  <span>Bar</span></p>";

		expect(escapeHtml(html)).toBe("<p><span>Foo</span> &nbsp;<span>Bar</span></p>");
	});

	it("should not convert space-only content between block tags", async () => {
		const html = "<div><p>Foo</p>  <p>Bar</p></div>";

		expect(escapeHtml(html)).toBe("<div><p>Foo</p>  <p>Bar</p></div>");
	});
});
