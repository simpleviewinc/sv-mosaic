import createElem from "@root/utils/dom/createElem";

describe(__dirname, () => {
	afterEach(() => {
		vi.unstubAllGlobals();
	});

	it("should create an element", () => {
		const elem = createElem("div");
		expect(elem).toBeInstanceOf(HTMLDivElement);
	});

	it("should create an element with properties", () => {
		const elem = createElem("div", { id: "test", className: "test-class" });
		expect(elem.id).toBe("test");
		expect(elem.className).toBe("test-class");
	});

	it("should append the element to a specified parent", () => {
		const elem = createElem("span", { appendTo: document.body });
		expect(document.body.childNodes[0]).toBe(elem);
	});

	it("should throw an error if document is not available", () => {
		vi.stubGlobal("document", undefined);
		expect(() => createElem("div")).toThrowError("Document is not available. This function should be run in a browser environment.");
	});
});
