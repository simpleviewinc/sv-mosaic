import * as React from "react";
import { ReactElement } from "react";
import { ColorContainer, ColorDiv } from "./ColorPicker.styled";
import { ColorSelectedProps } from "./ColorPickerTypes";

const ColorSelected = (props: ColorSelectedProps): ReactElement => {
	const { disabled, color, onClick, displayColorPicker, id } = props;

	return (
		<ColorContainer
			$disabled={disabled}
			$displayColorPicker={displayColorPicker}
			onClick={onClick}
			type="button"
			id={id}
		>
			<ColorDiv
				data-testid="colordiv-test"
				$disabled={disabled}
				$color={color}
			/>
		</ColorContainer>
	);
};

export default ColorSelected;
