import styled from "styled-components";
import theme from "@root/theme";
import { Sizes } from "@root/theme/sizes";

// Components
import Button from "@root/components/Button";

export const TableContainer = styled.div`
  background-color: white;
  border: 2px solid ${theme.colors.gray200};
  border-radius: 2px;
  max-width: 1080px;
  padding-top: 16px;
`;

export const THead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const Th = styled.th`
  color: ${theme.colors.almostBlack};
  font-weight: ${theme.fontWeight.medium};
  padding: 16px 30px 16px 8px;
  text-align: left;
`;

export const ThDrag = styled.th`
  width: 1%;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  font-family: ${theme.fontFamily};
  width: 100%;

  tr td:nth-child(2) {
    width: 1%;
    white-space: nowrap;
  }

  td:nth-child(3) {
    color: ${theme.colors.almostBlack};
    font-weight: ${theme.fontWeight.medium};
  }
`;

export const Td = styled.td`
  padding: 16px 30px 16px 8px;
  min-width: 72px;
  width: 312px;
  max-width: 312px;
`;

export const TdDrag = styled.td`
  padding: 16px 14px 16px 8px;
`;

export const AddButton = styled(Button)`
  margin-left: 8px;
  margin-bottom: 16px;
`;

export const Container = styled.div`
  max-height: 548px;
  overflow: auto;
  width: 100vw;
  max-width: 1080px;
`;

export const StyledIconButton = styled(Button)`
  .MuiIconButton-root {
    margin-right: 8px;
  }
`;

export const AddElementContainer = styled.div`
  align-items: center;
  background-color: ${theme.colors.gray200};
  display: flex;
  justify-content: center;
  padding: 32px 0;
  width: ${Sizes.lg};
`;

export const StyledTr = styled.tr`
  ${(pr) =>
		pr.isDragging
			? `
        &:active {
            background-color: ${theme.colors.gray200};
        }`
			: ""}
`;

export const TrHead = styled.tr`
  background-color: ${theme.colors.gray200};
`;
