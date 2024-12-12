import { sanitizeFieldSize } from "@root/components";

describe(__dirname, () => {
	test("should return the default size as listed in the type map for a recognised field type", async () => {
		expect(sanitizeFieldSize(undefined, "text")).toBe("450px");
	});

	test("should return full size for custom field types", async () => {
		expect(sanitizeFieldSize(undefined, () => null)).toBe("full");
	});

	test("should return the css value of a given size if the size is a recognised size identifier", async () => {
		expect(sanitizeFieldSize("lg", "textEditor")).toBe("620px");
	});

	test("should return literal size as a CSS value if it's otherwise unrecognizable", async () => {
		expect(sanitizeFieldSize("999px", "textEditor")).toBe("999px");
	});
});
