import styled from 'styled-components';
import theme from '@root/theme';

// MUI
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  width: 684px;

  & > :not(:last-child) {
    margin-right: 12px;
  }

  & > * {
    margin-top: 8px;
  }
`;

export const OptionsCheckedModalWrapper = styled.div`
  margin-bottom: 40px;
`;

export const ShowHideSpan = styled.span`
  color: ${theme.colors.gray700};
  cursor: pointer;
  display: flex;
  font-family: ${theme.fontFamily};
  width: fit-content;
`;

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  color: ${theme.colors.gray600};
  margin-left: 14px;
;
`;

export const StyledExpandLessIcon = styled(ExpandLessIcon)`
  color: ${theme.colors.gray600};
  margin-left: 14px;
`;
