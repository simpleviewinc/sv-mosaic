import * as React from "react";
import type {
	ReactElement } from "react";
import {
	memo,
	useState,
} from "react";
import theme from "@root/theme";

// External libraries
import type { ColorResult } from "react-color";
import { SketchPicker } from "react-color";

// Types
import type { MosaicFieldProps } from "@root/components/Field";

// Styles
import { PopOver } from "./FormFieldColor.styled";
import ColorSelected from "./ColorSelected";
import type { ColorData } from "./FormFieldColorTypes";
import Skeleton from "@mui/material/Skeleton";
import { RGBAToHexA } from "./colorUtils";
import testIds from "@root/utils/testIds";

const popoverSlotProps = {
	paper: {
		"data-testid": testIds.FORM_FIELD_COLOR_POPOVER,
	} as any,
};

const FormFieldColor = (
	props: MosaicFieldProps<"color", unknown, ColorData>,
): ReactElement => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
	const {
		value,
		onChange,
		onBlur,
		disabled,
		skeleton,
		id,
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
		onBlur && onBlur();
	};

	const onColorChange = (color: ColorResult) => {
		setColor(color);
		onChange(RGBAToHexA(color.rgb));
	};

	if (skeleton) {
		return (
			<Skeleton
				data-testid={testIds.FORM_FIELD_SKELETON}
				variant="rectangular"
				width={102}
				height={52}
			/>
		);
	}

	return (
		<>
			<ColorSelected
				disabled={disabled}
				color={color?.rgb || value || { r: 0, g: 141, b: 168, a: 1 }}
				onClick={handleClick}
				id={id}
			/>
			{!disabled && (
				<PopOver
					open={displayColorPicker}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					slotProps={popoverSlotProps}
				>
					<SketchPicker color={value || theme.newColors.realTeal["100"]} onChange={onColorChange} />
				</PopOver>
			)}
		</>
	);
};

export default memo(FormFieldColor);
