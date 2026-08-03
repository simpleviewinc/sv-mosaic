import styled from "styled-components";

// Utils
import theme from "@root/theme/theme";
import { Description } from "@root/components/Title/TitleWrapper.styled";
import { containerQuery } from "@root/utils/css";
import Button from "@root/components/Button";

export const TopRoot = styled.div<{ $bottomBorder?: boolean; $hideSectionNav?: boolean }>`
	padding: ${theme.spacing(0, 6)};

	${({ $hideSectionNav }) => !$hideSectionNav && `
		padding-bottom: ${theme.spacing(5)};
		border-bottom: 1px solid ${theme.color.gray[300]};
	`}

	${containerQuery("sm", "FORM")} {
		padding-top: ${theme.spacing(5)};
	}

	${({ $bottomBorder, $hideSectionNav }) => !$bottomBorder && `
		${containerQuery("sm", "FORM")} {
			border-bottom: 0;
			padding-bottom: 0;
		}

		${!$hideSectionNav && `
			${containerQuery("xl", "FORM")} {
				padding-bottom: ${theme.spacing(5)};
			}
		`}
	`}

	${({ $hideSectionNav }) => !$hideSectionNav && `
		${containerQuery("xl", "FORM")} {
			border-bottom: 1px solid ${theme.color.gray[300]};
		}
	`}
`;

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
	margin: 0 -24px 24px;
	padding: 12px 24px;
	order: -1;
	justify-content: space-between;
  	background-color: ${theme.color.gray[100]};
	align-items: center;

	${containerQuery("sm", "FORM")} {
		order: 0;
		background: none;
		margin: 0;
		padding: 0;
		justify-content: end;
  	}
`;

export const SmallBack = styled(Button)`
	${containerQuery("sm", "FORM")} {
		display: none;
	}
`;

// Title
export const Heading = styled.div`
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
`;

export const SmallDescription = styled(Description)`
	width: 100%;

	${containerQuery("sm", "FORM")} {
		order: 1;
	}

	${containerQuery("md", "FORM")} {
		display: none;
	}
`;
