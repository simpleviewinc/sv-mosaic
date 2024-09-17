import type { TimeTuple } from "@root/components";

import { parseTime } from "@root/utils/date";

describe(__filename, function () {
	it("should validate a correct 24hr time string", () => {
		const value = "14:30";
		const result = parseTime(value);

		expect(result).toStrictEqual([14, 30, 0, 0]);
	});
	it("should validate a correct 24hr tuple", () => {
		const value: TimeTuple = [18, 25, 30, 500];
		const result = parseTime(value);

		expect(result).toStrictEqual([18, 25, 30, 500]);
	});
	it("should throw when the string is not two time components, minutes and hours", () => {
		const value = "6";

		// @ts-expect-error We are testing for something that could be an invalid type
		expect(() => parseTime(value)).toThrow("6 is not a valid 24hr time. It must contain hour and minute components separated by a colon.");
	});
	it("should throw when the string contains an invalid hour", () => {
		const value = "24:59";

		expect(() => parseTime(value)).toThrow("24:59 is not a valid 24hr time");
	});
	it("should throw when the string contains an invalid minute", () => {
		const value = "00:60";

		expect(() => parseTime(value)).toThrow("00:60 is not a valid 24hr time");
	});
});
