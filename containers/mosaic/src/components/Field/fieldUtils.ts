import { Sizes } from "@root/theme";
import type { FieldDef, FieldDefCustom } from "./FieldTypes";

export const defaultFieldSizeMap: Record<Exclude<FieldDef["type"], FieldDefCustom["type"]>, Sizes> = {
	text: Sizes.md,
	checkbox: Sizes.md,
	chip: Sizes.md,
	dropdown: Sizes.md,
	phone: Sizes.sm,
	radio: Sizes.sm,
	toggle: Sizes.md,
	color: Sizes.sm,
	date: Sizes.md,
	time: Sizes.md,
	address: Sizes.full,
	textEditor: Sizes.lg,
	advancedSelection: Sizes.md,
	mapCoordinates: Sizes.sm,
	matrix: Sizes.full,
	upload: Sizes.md,
	number: Sizes.sm,
	numberTable: Sizes.full,
	raw: Sizes.full,
};

export function sanitizeFieldSize(size: undefined | Sizes | string | number, type: FieldDef["type"]): string {
	if (!size) {
		return typeof type === "string" ? defaultFieldSizeMap[type] : "full";
	}

	if (Sizes[size]) {
		return Sizes[size];
	}

	return String(size);
}
