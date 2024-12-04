import isSameTime from "@root/utils/date/isSameTime";

describe(__dirname, () => {
	test("should return true if the same object is passed for both parameters", async () => {
		const date = new Date(2024, 11, 12, 12, 30, 0, 0);
		expect(isSameTime(date, date)).toBe(true);
	});
	test("should return true if the different dates are provided with the same time", async () => {
		const date1 = new Date(2024, 11, 12, 12, 30, 0, 0);
		const date2 = new Date(2024, 11, 12, 12, 30, 0, 0);
		expect(isSameTime(date1, date2)).toBe(true);
	});
	test("should return true if the different dates are provided with the same time even if they are different dates", async () => {
		const date1 = new Date(2024, 11, 12, 12, 30, 0, 0);
		const date2 = new Date(2025, 6, 25, 12, 30, 0, 0);
		expect(isSameTime(date1, date2)).toBe(true);
	});
	test("should return false if the hours of the date objects are different", async () => {
		const date1 = new Date(2024, 11, 12, 12, 30, 0, 0);
		const date2 = new Date(2024, 11, 12, 11, 30, 0, 0);
		expect(isSameTime(date1, date2)).toBe(false);
	});
	test("should return false if the minutes of the date objects are different", async () => {
		const date1 = new Date(2024, 11, 12, 12, 30, 0, 0);
		const date2 = new Date(2024, 11, 12, 12, 45, 0, 0);
		expect(isSameTime(date1, date2)).toBe(false);
	});
	test("should return false if the seconds of the date objects are different", async () => {
		const date1 = new Date(2024, 11, 12, 12, 30, 0, 0);
		const date2 = new Date(2024, 11, 12, 12, 30, 15, 0);
		expect(isSameTime(date1, date2)).toBe(false);
	});
	test("should return false if the milliseconds of the date objects are different", async () => {
		const date1 = new Date(2024, 11, 12, 12, 30, 0, 0);
		const date2 = new Date(2024, 11, 12, 12, 30, 0, 999);
		expect(isSameTime(date1, date2)).toBe(false);
	});
});
