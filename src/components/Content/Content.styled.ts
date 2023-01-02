import styled from "styled-components";
import theme from "@root/theme";
import EditIcon from "@mui/icons-material/Edit";

export const MainWrapper = styled.div`
	font-family: ${theme.fontFamily};
	border-bottom: 2px solid ${theme.colors.gray200};
	margin: 32px 40px;
`;

export const TitleWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin: 16px 0;
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
		border-right: 1px solid ${theme.colors.gray200};
		padding-right: 16px;
		width: 16px;
	}
`;

export const ButtonsWrapper = styled.div`
	align-items: center;
	display: flex;

	.MuiButton-root {
		margin-left: 8px;
	}

	.button {
		border-right: 2px solid ${theme.colors.gray200};
		padding: 0 16px 0 16px;
	}

	.button:last-child {
		border-right: none;
		padding: 0;
	}
`;

export const Label = styled.p`
	color: ${theme.newColors.grey4["100"]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`;

export const FieldContainer = styled.div`
	margin-bottom: 24px;
	width: calc(100% / ${pr => pr.columns});
`;

export const TransformContainer = styled.div`
	color: ${theme.newColors.grey3["100"]};
	font-size: 14px;
`;

// Transforms styles
export const ChipsWrapper = styled.div`
	div:not(:last-child) {
		margin-right: 12px;
	}

	div {
		margin-bottom: 8px;
	}
`;


export const ColorValue = styled.p`
	color: ${theme.newColors.grey3["100"]};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`;

export const ContentRow = styled.div`
	display: flex;
	width: 100%;
`;
