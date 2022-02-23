import styled from 'styled-components';

// Utils
import theme from '@root/theme';

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
  flex-wrap: wrap;

  & > :not(:last-child) {
    margin-right: 25px;
  }

  & > * {
    margin-bottom: 20px;
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
    display: flex;
    flex-direction: column;
  }
`;
