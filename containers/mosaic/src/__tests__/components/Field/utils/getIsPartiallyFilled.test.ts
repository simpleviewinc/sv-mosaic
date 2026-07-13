import { getIsPartiallyFilled } from "@root/components/Field/utils/getIsPartiallyFilled";
import type { FieldSection } from "@mui/x-date-pickers/models";

function section(value: string): FieldSection {
	return {
		value,
		format: "MM",
		maxLength: 2,
		placeholder: "MM",
		type: "month",
		contentType: "digit",
		hasLeadingZerosInFormat: true,
		hasLeadingZerosInInput: true,
		modified: false,
		startSeparator: "",
		endSeparator: "/",
	};
}

describe(__dirname, () => {
	it("should return false when all sections are empty", () => {
		expect(getIsPartiallyFilled([section(""), section(""), section("")])).toBe(false);
	});

	it("should return false when all sections are filled", () => {
		expect(getIsPartiallyFilled([section("01"), section("31"), section("2024")])).toBe(false);
	});

	it("should return true when some but not all sections are filled", () => {
		expect(getIsPartiallyFilled([section("12"), section(""), section("")])).toBe(true);
	});
});
