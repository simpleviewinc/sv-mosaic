import Button from "@root/components/Button";
import PickerPanel from "@root/components/PickerPanel";
import styled from "styled-components";

export const StyledPickerPanel = styled(PickerPanel)`
	width: 700px;
`;

export const StyledSkeletonWrapper = styled.div`
	display: flex;
	gap: 16px;

	& .MuiSkeleton-root {
		border-radius: 99999em;
	}
`;

export const StyledButton = styled(Button)`
	margin-bottom: 8px;
`;
