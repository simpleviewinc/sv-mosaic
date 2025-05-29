import styled from "styled-components";
import theme from "@root/theme";

export const StyledTable = styled.table`
  border-collapse: collapse;
  color: ${theme.newColors.almostBlack["100"]};
  background-color: white;
  width: 100%;
`;

export const Th = styled.th`
  padding: 24px 16px;
  font-weight: ${theme.weight.medium};
  font-size: 14px;
  text-align: left;
`;

export const TrHead = styled.tr`
  background-color: ${theme.newColors.grey2["100"]};

  th:first-child {
    padding-left: 24px;
  }

  th:last-child {
    padding-right: 24px;
  }
`;

export const Td = styled.td`
  padding: 16px 16px;

  &:first-child {
	padding-left: 24px;
  }

  &:last-child {
	padding-right: 24px;
  }
`;

export const TdTitle = styled(Td)`
  font-weight: ${theme.weight.medium};
  font-size: 14px;
`;

export const RowTitle = styled.p`
  margin: 0;
  font-weight: ${theme.weight.medium};
  font-size: 14px;
`;

export const RowSubtitle = styled.p`
  margin: 8px 0 0 0;
  font-size: 14px;
`;

export const TdTotals = styled.td`
  padding-left: 16px;
  font-size: 14px;
`;

export const TBody = styled.tbody`
  tr {
    border-bottom: 1px solid ${theme.newColors.grey2["100"]};
  }

  tr:last-child,
  tr:nth-last-child(2) {
    border: none;
  }
`;

export const TrTotals = styled.tr`
  background-color: ${theme.newColors.grey1["100"]};
`;
