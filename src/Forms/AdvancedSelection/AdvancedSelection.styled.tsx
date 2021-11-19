import styled from 'styled-components';
import theme from '@root/theme';

export const StyledInput = styled.input`
  color: ${theme.colors.almostBlack};
  background-color: ${theme.colors.gray100};
  height: 51px;
  font-family: ${theme.fontFamily};
  font-size: 16px;
  margin-bottom: 40px;
  width: 684px;
  padding-left: 16px;

  ::placeholder {
    color: ${theme.colors.gray600};
  }
`;

export const ChipsWrapper = styled.div`
  margin-bottom: 40px;
  width: 684px;
  display: flex;
  flex-wrap: wrap;

  & > :not(:last-child) {
    margin-right: 12px;
  }

  & > * {
    margin-top: 8px;
  }
`;
