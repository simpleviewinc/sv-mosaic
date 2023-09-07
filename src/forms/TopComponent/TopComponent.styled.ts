import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";

// Components
import HelpIcon from "@mui/icons-material/Help";

// Utils
import theme, { BREAKPOINTS, CONTAINERS } from "@root/theme/theme";
import Button from "@root/components/Button/Button";
import { StyledProps } from "@root/types";
import { TitleWrapperProps } from "./Utils/TitleWrapper";

export const TopWrapper = styled.div<{$bottomBorder?: boolean}>`
	top: 0;
	z-index: 100;
	display: flex;
	flex-direction: column;
	border-bottom: 2px solid ${theme.newColors.grey2["100"]};
	padding-bottom: 10px;

	@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.sm}) {
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
	}

	${({$bottomBorder}) => !$bottomBorder && `
		@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.sm}) {
			border-bottom: 0;
		}
	`}

	@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.xl}) {
		border-bottom: 2px solid ${theme.newColors.grey2["100"]};
		padding-top: 10px;
	}
`;

export const PrimaryActions = styled.div`
	display: flex;
  order: -1;
  justify-content: end;
  background-color: ${theme.newColors.grey2["100"]};
  padding: 12px 20px;

  @container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.sm}) {
	order: 0;
	background: none;
	padding-top: 20px;
	padding-bottom: 20px;
  }

  @container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.md}) {
	padding-left: 0;
  }
`;

export const SmallBack = styled.button`
  margin-right: auto;
  border-radius: 0;
  border: 0;
  background: none;
  cursor: pointer;

  @container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.sm}) {
	display: none;
  }
`

export const SmallBackIcon = styled(ClearIcon)`
  color: ${theme.newColors.almostBlack["100"]};
`;

// Title
export const Heading = styled.div`
	font-family: ${theme.fontFamily};
	padding: 20px 20px 0;
	margin-bottom: 5px;

	@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.sm}){
		margin-right: auto;
		max-width: 50%;
	}

	@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.lg}){
		max-width: 50%;
	}

	@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.xl}){
		margin-bottom: 20px;
		max-width: 50%;
	}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
`;

export const BackButton = styled(Button)<StyledProps<TitleWrapperProps, "collapse">>`
	margin-right: 16px;

	.MuiButtonBase-root{
		padding-left: 8px;
		padding-right: 6px;
	}

	.icon_left{
		margin-right: 0 !important;
	}

	${({$collapse}) => $collapse && `
		display: none;

		@container ${$collapse.name ? CONTAINERS[$collapse.name] : ""} (min-width: ${BREAKPOINTS[$collapse.minWidth]}) {
			display: block;
		}
	`}
`

export const Description = styled.div`
	color: ${theme.newColors.grey3["100"]};
	font-family: ${theme.museoFont};
	font-weight: ${theme.fontWeight.light};
	font-size: 14px;
	margin-top: 5px;
`;

// Seoncdary actions
export const SecondaryActions = styled.div`
	display: flex;
	padding-left: 20px;
	padding-right: 20px;
	align-items: center;

	@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.sm}){
		order: 1;
		flex-basis: 100%;
	}

	@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.md}){
		order: 0;
		flex-basis: auto;
		margin-bottom: 0;
	}
`;

export const StyledCheckboxWrapper = styled.div`
	margin-left: -12px;

	@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.md}){
		position: relative;
		margin-left: 16px;

		&::before{
			content: ' ';
			height: 1.4em;
			border-left: 2px solid ${theme.newColors.grey2["100"]};
			margin-right: 14px;
		}
	}
`

export const StyledHelpIconWrapper = styled.div`
	order: 1;
	margin-left: auto;

	@container ${CONTAINERS.FORM} (min-width: ${BREAKPOINTS.md}){
		order: 0;
	}
`;

export const StyledHelpIcon = styled(HelpIcon)`
	.MuiSvgIcon-root{
		display: block;
	}
`;
