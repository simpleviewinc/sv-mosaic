import styled from "styled-components";
import theme from "@root/theme";

export const StyledTd = styled.td`
	border-bottom: 1px solid ${theme.color.gray[200]};
	height: 40px;
	vertical-align: middle;

	${/* This ensures that the td collapses to it's content size if it doesn't have the .expandCell class */""}
	&:not(.expandCell) {
		width: 1%;
		white-space: nowrap;
	}

	&.bold > div {
		font-weight: ${theme.weight.semi};
	}

	&.italic {
		font-style: italic;
	}

	&.strikeThrough {
		text-decoration-line: line-through;
	}

	& > div.noWrap {
		white-space: nowrap;
	}

	& > div.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;
