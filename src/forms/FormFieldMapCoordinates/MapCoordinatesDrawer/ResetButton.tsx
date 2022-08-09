import * as React from "react";
import { memo, ReactElement } from "react";
import Button from "@root/components/Button";
import { ResetButtonContainer } from "../MapCoordinates.styled";

const ResetButton = (props: { value: any; fieldDef: any }): ReactElement => {
	const { value, fieldDef } = props;

	return (
		<ResetButtonContainer hasValue={value}>
			<Button
				className="reset-button"
				color="teal"
				disabled={!value}
				variant="text"
				label="Reset"
				onClick={fieldDef?.inputSettings?.resetLocation}
			/>
		</ResetButtonContainer>
	);
};

export default memo(ResetButton);
