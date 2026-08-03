import { DisplayText } from "@simpleview/sv-mosaic/components/Typography";
import styled from "styled-components";

export const ButtonGrid = styled.div`
	margin-bottom: 24px;
`;

export const ButtonRow = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	gap: 32px;
	margin-bottom: 16px;
`;

export const ButtonCell = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	flex: 1 0 auto;
`;

export const ButtonHeading = styled(DisplayText).attrs({ size: "xs" })`
	margin-bottom: 12px;
`;
