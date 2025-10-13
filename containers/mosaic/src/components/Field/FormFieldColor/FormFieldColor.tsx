import type { ReactElement } from "react";
import type { ColorResult } from "react-color";

import React, { memo, useState } from "react";
import { SketchPicker } from "react-color";
import Skeleton from "@mui/material/Skeleton";
import ClearIcon from "@mui/icons-material/Clear";

import type { MosaicFieldProps } from "@root/components/Field";
import type { ColorData } from "./FormFieldColorTypes";

import ColorSelected from "./ColorSelected";
import { RGBAToHexA } from "./colorUtils";
import testIds from "@root/utils/testIds";
import { NoColor, StyledPopover, StyledWrapper } from "./FormFieldColor.styled";
import Button from "@root/components/Button";
import { StyledPopoverPaper } from "@root/components/common";

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
		onChange(RGBAToHexA(color.rgb));
	};

	const clearColor = () => {
		onChange(undefined);
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
			<StyledWrapper>
				<ColorSelected
					disabled={disabled}
					color={value}
					onClick={handleClick}
					id={id}
				/>
				{value ? (
					<Button
						intent="danger"
						variant="text"
						size="small"
						label="Remove color"
						onClick={clearColor}
						mIcon={ClearIcon}
					/>
				) : (
					<NoColor>No color selected</NoColor>
				)}
			</StyledWrapper>
			{!disabled && (
				<StyledPopover
					open={displayColorPicker}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					slotProps={popoverSlotProps}
					slots={{ paper: StyledPopoverPaper }}
				>
					<SketchPicker color={value} onChange={onColorChange} />
				</StyledPopover>
			)}
		</>
	);
};

export default memo(FormFieldColor);
