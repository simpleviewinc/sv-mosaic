import styled from "styled-components";
import theme from "@root/theme";
import EditIcon from "@mui/icons-material/Edit";
import { CONTAINERS } from "@root/theme/theme";
import { containerQuery } from "@root/utils/css";

export const MainWrapper = styled.div`
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

export const StyledEditIcon = styled(EditIcon)`
	color: ${theme.newColors.grey3["100"]};
	cursor: pointer;

	&.MuiSvgIcon-root {
		border-right: 1px solid ${theme.newColors.grey2["100"]};
		padding-right: 16px;
		width: 16px;
	}
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
	margin-bottom: 8px;
	margin-top: 0;
`;

export const FieldsList = styled.div`
	container-type: inline-size;
	container-name: ${CONTAINERS.CONTENT};
`;

export const ContentRowWrapper = styled.dl<{ $columns?: number }>`
	display: grid;
	gap: 0 12px;
	width: 100%;
	margin: 0;
	grid-template-columns: repeat(${({ $columns }) => $columns} ,minmax(0,1fr));

	&.card-row + .card-row {
		border-top: 2px solid ${theme.newColors.grey2["100"]};
		padding-top: 16px;
	}

	${({ $columns }) => `
		grid-template-columns: repeat(1,minmax(0,1fr));

		${containerQuery("md", "CONTENT")} {
			grid-template-columns: repeat(${$columns > 1 ? 2 : 1},minmax(0,1fr));
		}

		${containerQuery("lg", "CONTENT")} {
			grid-template-columns: repeat(${$columns},minmax(0,1fr));
		}
	`}

`;

export const FieldContainer = styled.div<{ $margin?: boolean }>`
	${({ $margin }) => $margin && `
		margin-bottom: 24px;
	`}
`;

export const FieldTerm = styled.dt`
	color: ${theme.newColors.grey4["100"]};
	margin-bottom: 8px;
	margin-top: 0;
	display: flex;
	align-items: center;
	gap: 8px;
	min-height: 24px;
`;

export const FieldDefinition = styled.dd`
	color: ${theme.newColors.grey3["100"]};
	margin: 0;
	width: 100%;
`;

export const FieldDefinitionInner = styled.span`
	vertical-align: middle;
	overflow: hidden;
	word-wrap: break-word;
`;
