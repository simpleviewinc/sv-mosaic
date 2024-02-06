import { Sizes } from "@root/theme";
import { FieldDef, FieldDefCustom } from "./FieldTypes";

export const defaultFieldSizeMap: Record<Exclude<FieldDef["type"], FieldDefCustom["type"]>, Sizes> = {
	text: Sizes.sm,
	checkbox: Sizes.md,
	chip: Sizes.md,
	dropdown: Sizes.sm,
	phone: Sizes.sm,
	radio: Sizes.sm,
	toggleSwitch: Sizes.md,
	imageVideoDocumentLink: Sizes.lg,
	color: Sizes.sm,
	date: Sizes.md,
	time: Sizes.md,
	address: Sizes.full,
	textEditor: Sizes.lg,
	advancedSelection: Sizes.md,
	mapCoordinates: Sizes.sm,
	imageUpload: Sizes.lg,
	matrix: Sizes.full,
	upload: Sizes.md,
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
