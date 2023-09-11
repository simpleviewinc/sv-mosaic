import styled from "styled-components";
import theme from "@root/theme";
import EditIcon from "@mui/icons-material/Edit";

export const MainWrapper = styled.div`
	font-family: ${theme.fontFamily};
	padding: 16px 0px;
	margin: 0px 16px;

	&.content-wrapper + .content-wrapper {
		border-top: 2px solid ${theme.newColors.grey2["100"]};
	}

	&.card-wrapper {
		border: 2px solid ${theme.newColors.grey2["100"]};
		width: 100%;
		padding: 0px;
		margin: 0px;
	}

	& .card-content {
		padding: 0px 16px;
	}
`;

export const TitleWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;

	&.title-bar {
		background: ${theme.newColors.grey2["100"]};
		padding: 8px 16px;
	}
`;

export const Title = styled.span`
	color: ${theme.newColors.almostBlack["100"]};
	font-size: 16px;
	font-weight: ${theme.fontWeight.medium};
`;

export const StyledEditIcon = styled(EditIcon)`
	color: ${theme.newColors.grey3["100"]};
	cursor: pointer;

	&.MuiSvgIcon-root {
		border-right: 1px solid ${theme.newColors.grey2["100"]};
		padding-right: 16px;
		width: 16px;
	}
`;

export const Label = styled.p`
	color: ${theme.newColors.grey4["100"]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`;

export const FieldContainer = styled.div<{$columns?: number}>`
	margin-bottom: 24px;
	width: calc(100% / ${({ $columns }) => $columns});
`;

export const TransformContainer = styled.div`
	color: ${theme.newColors.grey3["100"]};
	font-size: 14px;
`;

// Transforms styles
export const ChipsWrapper = styled.div`
	display: flex;
	row-gap: 8px;
	flex-wrap: wrap;

	div:not(:last-child) {
		margin-right: 12px;
	}
`;


export const ColorValue = styled.p`
	color: ${theme.newColors.grey3["100"]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`;

export const ContentRowWrapper = styled.div`
	display: flex;
	width: 100%;

	&.card-row + .card-row {
		border-top: 2px solid ${theme.newColors.grey2["100"]};
		padding-top: 16px;
	}
`;
