import styled from "styled-components";
import theme from "@root/theme";
import { Text } from "@root/components/Typography";

export const StyledWrapper = styled.div`
	height: 100%;
	width: 700px;
`;

export const ColumnItem = styled.div<{ $isDragging?: boolean }>`
	${({ $isDragging }) => $isDragging && `
		background: rgba(255,255,255,.9);
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
		position: relative;
		outline: 1px solid #ddd;
		outline-offset: -1px;
		z-index: 1;
	`}

	align-items: center;
	border-bottom: 1px solid ${theme.color.gray[200]};
	display: flex;


	.MuiSvgIcon-root {
		color: ${theme.color.gray[500]};
	}
`;

export const ColumnDraggable = styled.div`
	align-items: center;
	cursor: grab;
	display: flex;
	flex-grow: 1;
	padding: ${theme.spacing(5, 5)};
`;

export const ColumnItemLabel = styled(Text).attrs({ tag: "div", size: "lg" })`
	margin-left: 16px;
`;
