import styled from 'styled-components';
import theme from '@root/theme';

const fontSize = 'font-size: 14px';

export const LinkCard = styled.div`
  background-color: #FFFFFF;
  border: 2px solid ${theme.colors.gray200};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  font-family: ${theme.fontFamily};
  justify-content: space-between;
  max-width: 700px;
  min-height: 204px;
  padding: 16px;
  width: fit-content;
`;

export const LinkInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 61px auto;
  grid-auto-rows: minmax(min-content, max-content);
  row-gap: 12px;
`;

export const StyledAnchor = styled.a`
  ${fontSize}
  word-break: break-all;
`;

export const LinkProperty = styled.span`
  color: ${theme.colors.gray600};
  ${fontSize}
  font-weight: ${theme.fontWeight.semiBold};
`;

export const LinkValue = styled.span`
  color: ${theme.colors.almostBlack};
  ${fontSize}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 16px;

  button:first-child {
    border-right: 2px solid ${theme.colors.gray200};
    padding-right: 16px;
  }

  button:last-child {
    padding-left: 16px;
  }
`;
