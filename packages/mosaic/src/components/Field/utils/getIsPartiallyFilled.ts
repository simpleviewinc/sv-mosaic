import type { FieldSection } from "@mui/x-date-pickers/models";

/**
 * Returns true when some but not all field sections have a value.
 * Matches MUI X's internal partial-fill check used on blur.
 */
export function getIsPartiallyFilled(sections: FieldSection[]): boolean {
	const filledCount = sections.filter((section) => section.value !== "").length;

	return filledCount > 0 && filledCount < sections.length;
}
