import type { RGBColor } from "react-color";

/**
 * Convert an RGBA value to its HEX representation
 * @param rgbaColor: rgba color value
 * @returns hex color value
 */
export const RGBAToHexA = (rgbaColor: RGBColor) => {
	const r = rgbaColor.r.toString(16).padStart(2, "0");
	const g = rgbaColor.g.toString(16).padStart(2, "0");
	const b = rgbaColor.b.toString(16).padStart(2, "0");
	const a = rgbaColor.a ? Math.round(rgbaColor.a * 255).toString(16).padStart(2, "0") : "";

	return "#" + r + g + b + a;
};
