import * as React from "react";
import { ResetButtonProps } from "../MapCoordinatesTypes";

// Components
import { ResetButtonContainer } from "../MapCoordinates.styled";

// Utils
import Button from "@root/components/Button/Button";

function ResetButton({
	show,
	onClick,
}: ResetButtonProps) {
	return show && (
		<ResetButtonContainer>
			<Button
				className="reset-button"
				color="teal"
				variant="text"
				label="Reset"
				onClick={onClick}
				size="large"
			/>
		</ResetButtonContainer>
	);
}

export default ResetButton;
