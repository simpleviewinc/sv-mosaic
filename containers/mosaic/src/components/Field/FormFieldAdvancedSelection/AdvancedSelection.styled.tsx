import styled from "styled-components";
import theme from "@root/theme";

// MUI
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ChipsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;

  & > :not(:last-child) {
    margin-right: 12px;
  }

  & > * {
    margin-top: 8px;
  }
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

export const StyledSkeletonWrapper = styled.div`
  display: flex;
  gap: 16px;

  & .MuiSkeleton-root {
    border-radius: 99999em;
  }
`;
