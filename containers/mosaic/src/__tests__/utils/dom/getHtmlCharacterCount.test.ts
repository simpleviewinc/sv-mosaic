import { getHtmlCharacterCount } from "@root/utils/dom/getHtmlCharacterCount";

describe(__filename, function () {
	it("should count simple text strings with no tags", async () => {
		const html = "Test 12345";

		expect(getHtmlCharacterCount(html)).toBe(10);
	});

	it("should count text contained with tags, without counting the markup", async () => {
		const html = "<p>Test 12345</p>";

		expect(getHtmlCharacterCount(html)).toBe(10);
	});

	it("should count non-first block elements as a single character", async () => {
		const html = `<p>Test 12345</p>
		<p>Test 12345</p>`;

		expect(getHtmlCharacterCount(html)).toBe(21);
	});

	it("should count multiple whitespace characters as a single character", async () => {
		const html = "<p>   Test 12345</p>";

		expect(getHtmlCharacterCount(html)).toBe(11);
	});

	it("should count non-breaking space entities as a single character", async () => {
		const html = "<p>Test&nbsp;&nbsp;12345</p>";

		expect(getHtmlCharacterCount(html)).toBe(11);
	});

	it("should count multi-unit characters as a single character", async () => {
		const html = "<p>🙂</p>";

		expect(getHtmlCharacterCount(html)).toBe(1);
	});

	it("should count spaces between inline elements", async () => {
		const html = "<p><span>Test</span> <span>12345</span></p>";

		expect(getHtmlCharacterCount(html)).toBe(10);
	});
});
