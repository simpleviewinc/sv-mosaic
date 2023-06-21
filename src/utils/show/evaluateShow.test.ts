import { MosaicShow } from "@root/types";
import evaluateShow from "@root/utils/show/evaluateShow";

const rowArgs = {
	row: { id: "5a00d073b082d3e151c153b6", title: "Accesibility" }
};

describe("evaluateShow helper function", () => {
	it("should return true when show is undefined", () => {
		const show: MosaicShow = undefined;

		expect(evaluateShow(show, rowArgs)).toBe(true);
	});

	it("should return show if it's a boolean", () => {
		const show: MosaicShow = false

		expect(evaluateShow(show, rowArgs)).toBe(false);
	});

	it("should return true if all the elements of action.show are true", () => {
		const show: MosaicShow = [true, true, () => true]

		expect(evaluateShow(show, rowArgs)).toBe(true);
	});

	it("should return false if at least one element of action.show is false", () => {
		const show: MosaicShow = [true, () => false, true]

		expect(evaluateShow(show, rowArgs)).toBe(false);
	});
});
