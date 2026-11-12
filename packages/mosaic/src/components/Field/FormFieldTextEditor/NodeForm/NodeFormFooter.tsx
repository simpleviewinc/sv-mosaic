import type { ReactElement } from "react";
import React from "react";

import Button from "@root/components/Button";
import { StyledFormFooter } from "@root/components/Form/Form.styled";
import { RemoveButton } from "./NodeForm.styled";

interface NodeFormFooterProps {
	onCancel: () => void;
	onRemove?: () => void;
}

export function NodeFormFooter({ onCancel, onRemove }: NodeFormFooterProps): ReactElement {
	return (
		<StyledFormFooter $spacing="compact">
			<Button
				intent="primary"
				variant="contained"
				label="Submit"
				type="submit"
			/>
			<Button
				intent="secondary"
				variant="text"
				label="Cancel"
				onClick={onCancel}
			/>
			{onRemove && (
				<RemoveButton
					intent="danger"
					variant="text"
					label="Remove"
					onClick={onRemove}
				/>
			)}
		</StyledFormFooter>
	);
}
