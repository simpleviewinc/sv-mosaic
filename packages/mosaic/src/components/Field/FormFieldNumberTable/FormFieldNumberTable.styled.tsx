import styled from "styled-components";
import theme from "@root/theme";

export const StyledTable = styled.table`
	border-collapse: collapse;
	background-color: white;
	width: 100%;
`;

export const Th = styled.th`
	padding: ${theme.spacing(6, 4)};
	font-weight: ${theme.weight.medium};
	text-align: left;
`;

export const TrHead = styled.tr`
	background-color: ${theme.color.gray[50]};

	th:first-child {
		padding-left: ${theme.spacing(6)};
	}

	th:last-child {
		padding-right: ${theme.spacing(6)};
	}
`;

export const Td = styled.td`
  padding: ${theme.spacing(4)};

	&:first-child {
		padding-left: ${theme.spacing(6)};
	}

	&:last-child {
		padding-right: ${theme.spacing(6)};
	}
`;

export const TdTitle = styled(Td)`
	font-weight: ${theme.weight.medium};
`;

export const RowTitle = styled.p`
	margin: 0;
	font-weight: ${theme.weight.medium};
`;

export const RowSubtitle = styled.p`
	margin: ${theme.spacing(2, 0, 0)};
`;

export const TdTotals = styled.td`
	padding-left: ${theme.spacing(4)};
	font-weight: ${theme.weight.medium};
`;

export const TBody = styled.tbody`
	tr {
		border-bottom: 1px solid ${theme.color.gray[200]};
	}

	tr:last-child,
	tr:nth-last-child(2) {
		border: none;
	}
`;

export const TrTotals = styled.tr`
	background-color: ${theme.color.gray[50]};
`;
