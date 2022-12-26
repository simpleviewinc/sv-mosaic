import styled from "styled-components";
import theme from "@root/theme";

// MUI
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const StyledInput = styled.input`
  background-color: ${theme.newColors.grey1[100]};
  border: none;
  color: ${theme.newColors.almostBlack["100"]};
  flex-grow: 1;
  font-family: ${theme.fontFamily};
  font-size: 16px;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${theme.newColors.grey3["100"]};
  }
`;

export const InputWrapper = styled.div`
  align-items: center;
  background-color: ${theme.newColors.grey1[100]};
  border: 1px solid ${theme.colors.simplyGray};
  display: flex;
  height: 49px;
  justify-content: space-between;
  margin: 15px 15px 5px 15px;
  padding: 12px ${pr => pr.createNewOption ? "8px" : "16px"} 12px 16px;
  width: ${pr => pr.isMobileView ? "" : "620px"};

  &:focus-within {
    border: 1px solid ${theme.newColors.almostBlack["100"]};
    box-shadow: ${theme.fieldSpecs.inputText.shadow};
  }

  & span:first-child {
	background-color: red;
  }

  &:hover {
    background-color: ${theme.colors.gray200};
    & input {
      background-color: ${theme.colors.gray200};
    }
  }
`;

export const ChipsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  width: ${pr => pr.isMobileView || !pr.isModalOpen ? "" : "620px"};

  & > :not(:last-child) {
    margin-right: 12px;
  }

  & > * {
    margin-top: 8px;
  }
`;

export const OptionsCheckedModalWrapper = styled.div`
  margin: ${({ isModalOpen }) => (isModalOpen ? "15px" : "")};
`;

export const ShowHideSpan = styled.span`
  color: ${theme.newColors.grey3["100"]};
  cursor: pointer;
  display: flex;
  font-family: ${theme.fontFamily};
  width: fit-content;
  font-weight: ${theme.fontWeight.bold};
  font-size: 16px;
  margin-top: 16px;
`;

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  color: ${theme.newColors.grey3["100"]};
  margin-left: 14px;
`;

export const StyledExpandLessIcon = styled(ExpandLessIcon)`
  color: ${theme.newColors.grey3["100"]};
  margin-left: 14px;
`;

export const CategoryTitle = styled.span`
  color: ${theme.newColors.almostBlack["100"]};
  display: inline-block;
  font-family: ${theme.fontFamily};
  font-size: 16px;
  font-weight: ${theme.fontWeight.medium};
  margin-bottom: 16px;
`;

export const AdvancedSelectionWrapper = styled.div`
  max-width: 600px;
`;

export const StyledFormWrapper = styled.div`
	& .checkbox-list-field-wrapper div:first-child {
		width: 100% !important;
	}
`;
