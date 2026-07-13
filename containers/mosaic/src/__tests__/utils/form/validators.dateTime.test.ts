import { validateDate, validateTime } from "@root/utils/form/validators";

describe(__dirname, () => {
	it("should reject a partially filled date", async () => {
		await expect(validateDate(undefined, {}, {}, {
			date: null,
			isPartiallyFilled: true,
		})).resolves.toBe("Date is incomplete. Finish entering MM/DD/YYYY or clear the field");
	});

	it("should accept an empty date that is not partially filled", async () => {
		await expect(validateDate(undefined, {}, {}, {
			date: null,
			isPartiallyFilled: false,
		})).resolves.toBeUndefined();
	});

	it("should reject a partially filled time", async () => {
		await expect(validateTime(undefined, {}, {}, {
			time: null,
			isPartiallyFilled: true,
		})).resolves.toBe("Time is incomplete. Finish entering a 12hr time or clear the field");
	});

	it("should accept an empty time that is not partially filled", async () => {
		await expect(validateTime(undefined, {}, {}, {
			time: null,
			isPartiallyFilled: false,
		})).resolves.toBeUndefined();
	});
});
