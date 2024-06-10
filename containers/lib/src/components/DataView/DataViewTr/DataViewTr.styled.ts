import styled from "styled-components";
import theme from "@root/theme";
import { StyledIconButton } from "@root/components/Button/Button.styled";

export const TableRow = styled.tr<{ $isDragOverlay?: boolean }>`
	${({ $isDragOverlay }) => $isDragOverlay && `
		background: rgba(255,255,255,.9);
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
		position: relative;
		outline: 1px solid #ddd;
		outline-offset: -1px;
		z-index: 1;
	`}

	&.checked {
		background-color: ${theme.newColors.grey1["100"]};
	}
`;

export const TableRowDragHandle = styled(StyledIconButton)`
	&&{
		cursor: grab;
	}
`;
