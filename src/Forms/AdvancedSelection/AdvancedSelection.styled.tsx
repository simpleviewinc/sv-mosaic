import styled from 'styled-components';
import theme from '@root/theme';

// MUI
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Field from '@root/components/Field';

export const StyledInput = styled.input`
  background-color: ${theme.colors.gray100};
  border: none;
  color: ${theme.colors.almostBlack};
  flex-grow: 1;
  font-family: ${theme.fontFamily};
  font-size: 16px;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${theme.colors.gray600};
  }
`;

export const InputWrapper = styled.div`
  background-color: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.simplyGray};
  display: flex;
  height: 49px;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 16px;
  width: ${pr => pr.isMobileView ? '' : '650px'};

  &:focus-within {
    border: 1px solid ${theme.colors.almostBlack};
  }
`;

export const ChipsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  width: ${pr => pr.isMobileView || !pr.isModalOpen ? '' : '684px'};

  & > :not(:last-child) {
    margin-right: 12px;
  }

  & > * {
    margin-top: 8px;
  }
`;

export const StyledField = styled(Field)`
  &.advanced_selection > div:nth-child(2) {
    margin-top: 52px;
    max-height: 80px;
  }
`;

export const OptionsCheckedModalWrapper = styled.div`
  margin-bottom: ${(pr) => (pr.isModalOpen ? '40px' : '')};
`;

export const CheckboxListWrapper = styled.div`
  height: 353px;
  overflow-y: auto;
  padding-right: 16px;

  .MuiFormGroup-root {
    .MuiFormControlLabel-root {
      width: fit-content;
      word-wrap: break-word;
    }
  }
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
`;

export const StyledExpandLessIcon = styled(ExpandLessIcon)`
  color: ${theme.colors.gray600};
  margin-left: 14px;
`;

export const CategoryTitle = styled.span`
  color: ${theme.colors.almostBlack};
  display: inline-block;
  font-family: ${theme.fontFamily};
  font-size: 16px;
  font-weight: ${theme.fontWeight.medium};
  margin-bottom: 16px;
`;

export const AdvancedSelectionWrapper = styled.div`
  max-width: 620px;
`;
