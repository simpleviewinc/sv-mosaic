import Button from "@root/components/Button";
import styled from "styled-components";

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
