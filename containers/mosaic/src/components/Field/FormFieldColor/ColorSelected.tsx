import * as React from "react";
import type { ReactElement } from "react";
import { ColorBackground, ColorContainer, ColorDiv } from "./FormFieldColor.styled";
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
			<ColorBackground>
				<ColorDiv
					data-testid="colordiv-test"
					$disabled={disabled}
					$color={color}
				/>
			</ColorBackground>
		</ColorContainer>
	);
};

export default ColorSelected;
