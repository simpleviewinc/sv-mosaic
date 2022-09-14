import styled from "styled-components";
import theme from "@root/theme";
import EditIcon from "@mui/icons-material/Edit";

export const ColumnsContainer = styled.div`
	display: flex;
	margin-bottom: 32px;
	gap: 60px;

	&.collapsed {
		max-height: 179px;
		overflow: hidden;
	}

	&.expanded {
		height: fit-content;
	}
`;

export const ContentColumn = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

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
	font-weight: ${theme.fontWeight.medium};
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
		margin-left: 8px;
	}

	.iconButton {
		border-right: ${({ canShowMore }) => canShowMore ? `1px solid ${theme.colors.gray200}` : 0};
		padding-right: ${({ canShowMore }) => canShowMore ? "16px" : 0};
	}
`;

export const Label = styled.p`
	color: ${theme.colors.gray700};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`;

export const FieldContainer = styled.div`
	margin-bottom: 24px;
`;

export const TransformContainer = styled.div`
	color: ${theme.colors.gray600};
	font-size: 14px;
`;

// Transforms styles
export const ChipsWrapper = styled.div`
	div:not(:last-child) {
		margin-right: 12px;
	}
`;


export const ColorValue = styled.p`
	color: ${theme.colors.gray600};
	font-size: 14px;
	margin-bottom: 8px;
	margin-top: 0;
`;
