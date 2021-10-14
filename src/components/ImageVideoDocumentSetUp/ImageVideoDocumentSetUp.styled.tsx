import styled from 'styled-components';

import theme from '@root/theme';

export const SetUpButtonsWrapper = styled.div`
  align-items: center;
  background-color: ${theme.colors.gray200};
  display: flex;
  justify-content: center;
  min-height: 204px;
  width: 300px;
`;

export const AssetCard = styled.div`
  display: inline-flex;
  border: 2px solid ${theme.colors.gray200};
  padding: 16px;
  position: relative;
  width: 700px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 16px;
  bottom:16px;

  button:first-child {
    border-right: 2px solid ${theme.colors.gray200};
    padding-right: 16px;
  }

  button:last-child {
    padding-left: 16px;
  }
`;

export const AssetLabel = styled.span`
  color: ${theme.colors.gray600};
  flex-shrink: 0;
  margin-right: 24px;
  width: 37px;
`;
