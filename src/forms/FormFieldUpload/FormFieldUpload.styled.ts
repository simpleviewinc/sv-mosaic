import styled from "styled-components";

export const StyledFileGrid = styled.div`
	margin-top: 16px;
	width: ${(pr) => (pr.width ? pr.width : "600px")};
	max-width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
