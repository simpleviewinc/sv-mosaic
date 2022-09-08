import * as React from "react";
import { ReactElement } from "react";
import { ColorContainer, ColorDiv } from "./ColorPicker.styled";
import { ColorSelectedProps } from "./ColorPickerTypes";

const ColorSelected = (props: ColorSelectedProps): ReactElement => {
	const { disabled, color, onClick, displayColorPicker } = props;

	return (
		<ColorContainer disabled={disabled} displayColorPicker={displayColorPicker}>
			<ColorDiv
				data-testid="colordiv-test"
				disabled={disabled}
				color={color}
				onClick={onClick}
			/>
		</ColorContainer>
	);
};

export default ColorSelected;
