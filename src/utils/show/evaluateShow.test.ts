import { MosaicShow } from "@root/types";
import evaluateShow from "@root/utils/show/evaluateShow";

const CORRECT_VALUE = "bar";
const INCORRECT_VALUE = "car";

const showArgs = {
	foo: CORRECT_VALUE
};

type ShowArgs = typeof showArgs;

describe("evaluateShow helper function", () => {
	it("should return true when show parameter is undefined", () => {
		const show: MosaicShow = undefined;

		expect(evaluateShow(show)).toBe(true);
	});

	it("should return true when show parameter is true", () => {
		const show: MosaicShow = true;

		expect(evaluateShow(show)).toBe(true);
	});

	it("should return false when show parameter is false", () => {
		const show: MosaicShow = false;

		expect(evaluateShow(show)).toBe(false);
	});

	it("should return true when show parameter is a function that returns true", () => {
		const show: MosaicShow<ShowArgs> = ({foo}) => foo === CORRECT_VALUE;

		expect(evaluateShow(show, showArgs)).toBe(true);
	});

	it("should return false when show parameter is a function that returns false", () => {
		const show: MosaicShow<ShowArgs> = ({foo}) => foo === INCORRECT_VALUE;

		expect(evaluateShow(show, showArgs)).toBe(false);
	});

	it("should return true when show parameter is an array whose members are all true or functions that return true", () => {
		const show: MosaicShow<ShowArgs> = [true, ({foo}) => foo === CORRECT_VALUE, true];

		expect(evaluateShow(show, showArgs)).toBe(true);
	});

	it("should return true when show parameter is an array whose members have at least one false or function that returns false", () => {
		const show: MosaicShow<ShowArgs> = [false, ({foo}) => foo === INCORRECT_VALUE, true];

		expect(evaluateShow(show, showArgs)).toBe(false);
	});
});
