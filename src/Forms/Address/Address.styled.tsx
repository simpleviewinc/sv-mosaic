import styled from 'styled-components';

// Utils
import theme from '@root/theme';

// Components
import Label from '@root/components/Field/Label';

export const StyledLabel = styled(Label)`
  margin-bottom: 16px;
`;

export const AddAddressWrapper = styled.div`
  align-items: center;
  background-color: ${theme.colors.gray200};
  display: flex;
  justify-content: center;
  min-height: 204px;
  width: 300px;
`;

export const Row = styled.div`
  display: flex;
`;
