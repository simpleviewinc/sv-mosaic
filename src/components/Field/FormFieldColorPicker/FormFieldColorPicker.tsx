import * as React from "react";
import {
	memo,
	ReactElement,
	useState,
} from "react";
import theme from "@root/theme";

// External libraries
import { ColorResult, SketchPicker, RGBColor } from "react-color";

// Types
import { MosaicFieldProps } from "@root/components/Field";

// Styles
import { PopOver } from "./ColorPicker.styled";
import ColorSelected from "./ColorSelected";
import { ColorData } from "./ColorPickerTypes";

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
	props: MosaicFieldProps<"color", unknown, ColorData>,
): ReactElement => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
	const {
		fieldDef,
		value,
		onChange,
		onBlur,
		disabled,
	} = props;

	// State variables
	const [displayColorPicker, setDisplayColorPicker] = useState(false);
	const [color, setColor] = useState<ColorResult>(null);

	const handleClick = (event) => {
		setDisplayColorPicker(!displayColorPicker);
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setDisplayColorPicker(false);
		setAnchorEl(null);
		onBlur();
	};

	const onColorChange = (color: ColorResult) => {
		setColor(color);
		onChange(RGBAToHexA(color.rgb));
	};

	const id = open ? `${fieldDef.name}-popover` : undefined;

	return (
		<>
			<ColorSelected
				disabled={disabled}
				color={color?.rgb || value || { r: 0, g: 141, b: 168, a: 1 }}
				onClick={handleClick}
			/>
			{!disabled && (
				<PopOver
					id={id}
					open={displayColorPicker}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}

				>
					<SketchPicker color={value || theme.newColors.realTeal["100"]} onChange={onColorChange} />
				</PopOver>
			)}
		</>
	);
};

export default memo(FormFieldColorPicker);
