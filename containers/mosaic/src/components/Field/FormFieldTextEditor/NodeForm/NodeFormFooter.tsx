import type { ReactElement } from "react";
import React from "react";

import Button from "@root/components/Button";
import { StyledFormFooter } from "@root/components/Form/Form.styled";
import { RemoveButton } from "./NodeForm.styled";

interface NodeFormFooterProps {
	onRemove?: () => void;
}

export function NodeFormFooter({ onRemove }: NodeFormFooterProps): ReactElement {
	return (
		<StyledFormFooter $spacing="compact">
			<Button
				color="yellow"
				variant="contained"
				label="Submit"
				type="submit"
			/>
			{onRemove && (
				<RemoveButton
					color="red"
					variant="text"
					label="Remove"
					onClick={onRemove}
				/>
			)}
		</StyledFormFooter>
	);
}
