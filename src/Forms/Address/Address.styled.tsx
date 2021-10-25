import styled from 'styled-components';

// Utils
import theme from '@root/theme';

// Components
import Label from '@root/components/Field/Label';

export const StyledLabel = styled(Label)`
  margin-bottom: 16px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 300px;
    margin: auto;
    margin-bottom: 20px;
  }
`;

export const AddAddressWrapper = styled.div`
  align-items: center;
  background-color: ${theme.colors.gray200};
  display: flex;
  justify-content: center;
  min-height: 204px;
  width: 300px;
`;

export const FlexContainer = styled.div`
  display: flex;

  & > :not(:last-child) {
    margin-right: 35px;
  }

  @media (min-width: 1440px) {
    & > :not(:last-child) {
      margin-right: 80px;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    & > :not(:last-child) {
      margin-bottom: 20px;
      margin-right: 0px;
    }
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;
