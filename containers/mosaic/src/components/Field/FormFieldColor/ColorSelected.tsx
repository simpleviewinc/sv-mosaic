import * as React from "react";
import type { ReactElement } from "react";
import { ColorContainer, ColorDiv } from "./FormFieldColor.styled";
import type { ColorSelectedProps } from "./FormFieldColorTypes";

const ColorSelected = (props: ColorSelectedProps): ReactElement => {
	const { disabled, color, onClick, id } = props;

	return (
		<ColorContainer
			disabled={disabled}
			onClick={onClick}
			type="button"
			id={id}
			aria-label="Select color"
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
