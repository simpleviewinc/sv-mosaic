import styled from "styled-components";
import theme from "../../theme";
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
	color: ${theme.colors.almostBlack};
	font-size: 16px;
	font-weight: ${theme.fontWeight.semiBold};
`;

export const StyledEditIcon = styled(EditIcon)`
	color: ${theme.colors.gray600};
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
		padding-left: 16px;
	}

	.iconButton {
		border-right: ${({ isMaxContent }) => isMaxContent ? 0 : `1px solid ${theme.colors.gray200}`};
		padding-right: ${({ isMaxContent }) => isMaxContent ? 0 : "16px"};
	}
`;

export const ContentRow = styled.div`
	display: flex;
	width: 100%;
`;

export const ContentColumn = styled.div`
	& > div {
		margin-right: ${({ cols }) => cols === 1 ? 0 : "60px" };
	}

	width: calc(100% / ${pr => pr.cols});
`;

export const LabelValueWrapper = styled.div`
	margin-bottom: 16px;
`;

export const Value = styled.span`
	color: ${theme.colors.gray600};
	margin-left: ${({ isFile }) => isFile ? "24px" : "8px"};
	font-size: ${({ isFile }) => isFile ? "12px" : "14px"};
`;

// Styles for the paragraph content type
export const Paragraph = styled.p`
	color: ${theme.colors.gray700};
	font-size: 14px;
	margin: 0;
`;

// Styles for the LabelValue content type

export const Label = styled.span`
	color: ${theme.colors.gray700};
	font-size: 14px;
`;

// Styles for the tags content type
export const ChipsWrapper = styled.div`
	margin: 24px 0 40px;
	div:not(:last-child) {
		margin-right: 12px;
	}
`;


// Styles for the file content type
export const LabelWrapper = styled.div`
	align-items: flex-start;
	display: flex;

	.MuiSvgIcon-root {
		color: ${theme.colors.almostBlack}
		margin-right: 8px;
		width: 16px;
	}
`;
