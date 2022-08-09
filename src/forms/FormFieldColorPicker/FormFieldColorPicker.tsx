import * as React from "react";
import { memo, ReactElement, useState } from "react";
// External libraries
import { ColorResult, SketchPicker, RGBColor } from "react-color";

// Types
import { MosaicFieldProps } from "@root/components/Field";

// Styles
import { ColorContainer, ColorDiv, Cover, PopOver } from "./ColorPicker.styled";

/**
 * Convert an RGBA value to its HEX representation
 * @param rgbaColor: rgba color value
 * @returns hex color value
*/
export const RGBAToHexA = (rgbaColor: RGBColor) => {
	let r = rgbaColor.r.toString(16);
	let g = rgbaColor.g.toString(16);
	let b = rgbaColor.b.toString(16);
	let a = Math.round(rgbaColor.a * 255).toString(16);

	if (r.length === 1) r = "0" + r;
	if (g.length === 1) g = "0" + g;
	if (b.length === 1) b = "0" + b;
	if (a.length === 1) a = "0" + a;

	return "#" + r + g + b + a;
};

const FormFieldColorPicker = (
	props: MosaicFieldProps<unknown, string>
): ReactElement => {
	const { fieldDef, value, onChange } = props;

	// State variables
	const [displayColorPicker, setDisplayColorPicker] = useState(false);
	const [color, setColor] = useState<ColorResult>(null);

	const handleClick = () => {
		setDisplayColorPicker(!displayColorPicker);
	};

	const handleClose = () => {
		setDisplayColorPicker(false);
	};
	
	const onColorChange = (color: ColorResult) => {
		setColor(color);
		onChange(RGBAToHexA(color.rgb));
	};

	return (
		<>
			<ColorContainer
				displayColorPicker={displayColorPicker}
				disabled={fieldDef?.disabled}
			>
				<ColorDiv
					data-testid='colordiv-test'
					disabled={fieldDef?.disabled}
					color={color?.rgb || value || { r: 0, g: 141, b: 168, a: 1 }}
					onClick={handleClick}
				/>
			</ColorContainer>
			{displayColorPicker && !fieldDef?.disabled && (
				<PopOver>
					<Cover onClick={handleClose} />
					<SketchPicker color={value || "#008DA8"} onChange={onColorChange} />
				</PopOver>
			)}
		</>
	);
};

export default memo(FormFieldColorPicker);
