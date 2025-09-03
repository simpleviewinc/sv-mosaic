import theme from "@root/theme";
import styled from "styled-components";
import { Column } from "../common";

export const StyledWrapper = styled(Column)`
	gap: ${theme.spacing(3)};

	& .noResults {
		padding: ${theme.spacing(5)};
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& > .headerRow {
		display: flex;
		justify-content: space-between;
		align-items: center;
		-ms-flex: 0 0 auto;
		-webkit-flex: 0 0 auto;
		flex: 0 0 auto;
	}

	& .headerActions {
		display: flex;
		flex-direction: column;
	}

	&.loading {
		opacity: .5;
		pointer-events: none;
	}

	&.sticky {
		height: 100%;
	}
`;

export const StyledDataViewDisplay = styled.div`
	box-shadow: var(--mos-border-light), var(--mos-shadow-md);
	border-radius: ${theme.rounded.md};
	flex: 1;
	min-height: 0;
	overflow: auto;
`;

export const StyledDataViewContent = styled(Column)<{ $hasHeading?: boolean }>`
	flex: 1;
	min-height: 0;
	gap: ${theme.spacing(3)};

	${({ $hasHeading }) => !$hasHeading ? "" : `
		padding: ${theme.spacing(0, 6, 3)};
	`}
`;
