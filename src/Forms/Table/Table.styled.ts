import styled from 'styled-components';
import theme from '@root/theme'

// Components
import Button from '@root/forms/Button';

export const TableContainer = styled.div`
  border: 2px solid ${theme.colors.gray200};
  border-radius: 2px;
  margin: 0 40px;
  max-height: 600px;
  max-width: 1080px;
  padding-top: 16px;
`;

export const Th = styled.th`
  background-color: ${theme.colors.gray200};
  color: ${theme.colors.almostBlack};
  font-weight: ${theme.fontWeight.medium};
  padding: 16px 0;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  font-family: ${theme.fontFamily};
  margin-top: 16px;
  width: 1080px;
`;

export const Td = styled.td`
  padding: 16px 0;
`;

export const TdDrag = styled(Td)`
  padding-right: 14px;
`;

export const AddButton = styled(Button)`
  margin-left: 8px;
`;
