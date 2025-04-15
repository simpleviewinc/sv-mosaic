import styled from "styled-components";
import theme from "@root/theme";

export const ColumnTitle = styled.h2`
	color: ${theme.newColors.almostBlack["100"]};
	font-size: 20px;
	font-weight: ${theme.fontWeight.normal};
	line-height: 24px;
	margin: 0px;
`;

export const StyledWrapper = styled.div`
	display: flex;
	margin-top: 30px;

	& > .left {
		border-right: 2px solid ${theme.newColors.grey2["100"]};
		flex: 1;
		margin: 0 32px 0 40px;
		width: 265px;
	}

	& > .left .listItem {
		margin: 14px 0px 0px -10px;
		background: white;
	}

	& > .right {
		flex: 1;
		margin: 0 44px 0 32px;
		width: 280px;
	}

	& > .right .droppable-columns {
		margin-top: 4px;
	}
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
	border-bottom: 1px solid ${theme.newColors.grey2["100"]};
	display: flex;


	.MuiSvgIcon-root {
		color: ${theme.newColors.grey3["100"]};
	}
`;

export const ColumnDraggable = styled.div`
	align-items: center;
	cursor: grab;
	display: flex;
	flex-grow: 1;
	padding: 20px 0;
`;

export const ColumnItemLabel = styled.div`
	margin-left: 16px;
	color: ${theme.newColors.almostBlack["100"]};
	font-weight: ${theme.fontWeight.normal};
`;
