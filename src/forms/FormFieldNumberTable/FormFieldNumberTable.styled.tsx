import styled from "styled-components";
import theme from "@root/theme";
import { StyledTextField } from "@root/forms/FormFieldText/FormFieldText.styled";
import TextField from "@mui/material/TextField";

export const StyledInput = styled(StyledTextField)`
  width: 72px;
` as typeof TextField;

export const NumberTableContainer = styled.div`
  font-family: ${theme.fontFamily};
  border: 1px solid ${theme.newColors.grey2["100"]};
`;

export const TitleContainer = styled.div`
  align-items: center;
  background: ${theme.newColors.grey2["100"]};
  display: flex;
  padding: 16px 24px;
`;

export const Title = styled.span`
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
`;

export const TableContainer = styled.div`
  padding: 32px 40px;
`;

export const TableTitle = styled.span`
  color: ${theme.newColors.almostBlack["100"]};
  font-weight: ${theme.fontWeight.medium};
  font-size: 16px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin-top: 8px;
`;

export const Th = styled.th`
  padding: 24px 16px;
  font-weight: ${theme.fontWeight.medium};
  font-size: 14px;
  text-align: left;
`;

export const TrHead = styled.tr`
  background-color: ${theme.newColors.grey2["100"]};

  th:first-child {
    padding-left: 24px;
  }
`;

export const Td = styled.td`
  padding: 16px 0;
`;

export const TdInput = styled(Td)`
  padding-left: 16px;
  padding-right: 16px;
`;

export const TdTItle = styled(Td)`
  padding-left: 24px;
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 14px;
`;

export const TdTotals = styled.td`
  padding-left: 16px;
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.newColors.almostBlack["100"]};
  font-size: 14px;
`;

export const TBody = styled.tbody`
	tr {
		border-bottom: 1px solid ${theme.newColors.grey2["100"]};
	}

	tr:last-child {
		border: none;
	}
`;

export const TrTotals = styled.tr`
  background-color: ${theme.newColors.grey1["100"]};

  td:last-child {
    font-weight: ${theme.fontWeight.medium};
		padding-left: 24px;
  }
`;
