import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";

// Components
import MUIHelpIcon from "@mui/icons-material/Help";

// Utils
import theme from "@root/theme/theme";
import { Description } from "./Utils/TitleWrapper.styled";
import { containerQuery } from "@root/utils/css";

export const TopRoot = styled.div<{$bottomBorder?: boolean}>`
	border-bottom: 2px solid ${theme.newColors.grey2["100"]};
	padding: 0 20px 20px;

	${containerQuery("sm", "FORM")} {
		padding-top: 20px;
	}

	${({$bottomBorder}) => !$bottomBorder && `
		${containerQuery("sm", "FORM")} {
			border-bottom: 0;
			padding-bottom: 0;
		}

		${containerQuery("xl", "FORM")} {
			padding-bottom: 20px;
		}
	`}

	${containerQuery("xl", "FORM")} {
		border-bottom: 2px solid ${theme.newColors.grey2["100"]};
	}
`

export const TopWrapper = styled.div`
	top: 0;
	z-index: 100;
	display: flex;
	flex-direction: column;

	${containerQuery("sm", "FORM")} {
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const PrimaryActions = styled.div`
	display: flex;
	margin: 0 -20px 20px;
	padding: 12px 20px;
	order: -1;
	justify-content: end;
  	background-color: ${theme.newColors.grey2["100"]};

	${containerQuery("sm", "FORM")} {
		order: 0;
		background: none;
		margin: 0;
		padding: 0;
  	}
`;

export const SmallBack = styled.button`
  margin-right: auto;
  border-radius: 0;
  border: 0;
  background: none;
  cursor: pointer;

  ${containerQuery("sm", "FORM")} {
	display: none;
  }
`

export const SmallBackIcon = styled(ClearIcon)`
  color: ${theme.newColors.almostBlack["100"]};
`;

// Title
export const Heading = styled.div`
	font-family: ${theme.fontFamily};

	${containerQuery("sm", "FORM")} {
		margin-right: auto;
		max-width: 50%;
	}
`;

export const TitleRow = styled.div`
	display: flex;
	align-items: center;
`;

export const LargeDescription = styled(Description)`
	display: none;

	${containerQuery("md", "FORM")} {
		display: block;
	}
`

export const SmallDescription = styled(Description)`
	width: 100%;

	${containerQuery("sm", "FORM")} {
		order: 1;
	}

	${containerQuery("md", "FORM")} {
		display: none;
	}
`

// Seoncdary actions
export const SecondaryActions = styled.div`
	display: flex;
	align-items: center;
	margin-top: 8px;

	${containerQuery("sm", "FORM")} {
		order: 1;
		flex-basis: 100%;
	}

	${containerQuery("md", "FORM")} {
		order: 0;
		flex-basis: auto;
		margin-bottom: 0;
		margin-right: 20px;
		margin-top: 0;

	}
`;

export const ActiveCheckboxWrapper = styled.div`
	& .custom-checkbox{
		padding: 6px;
	}

	margin-left: -6px;

	${containerQuery("md", "FORM")} {
		position: relative;
		margin-left: 20px;

		&::before{
			content: ' ';
			height: 1.4em;
			border-left: 2px solid ${theme.newColors.grey2["100"]};
			margin-right: 10px;
		}
	}
`

export const HelpIconWrapper = styled.div`
	order: 1;
	margin: 2px 0 2px auto;

	${containerQuery("md", "FORM")} {
		order: 0;
		margin-left: 16px;
	}
`;

export const HelpIcon = styled(MUIHelpIcon)`
	.MuiSvgIcon-root{
		display: block;
	}
`;
