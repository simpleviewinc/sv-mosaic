import styled from "styled-components";
import theme from "@root/theme";

export const ColumnTitle = styled.h2`
  color: ${theme.newColors.almostBlack["100"]};
  font-size: 20px;
  font-weight: ${theme.fontWeight.normal};
  line-height: 24px;
  margin: 0 0 24px 0;
`;

export const StyledWrapper = styled.div`
  display: flex;
  margin-top: 30px;

  & > .left {
    border-right: 2px solid ${theme.newColors.grey2["100"]};
    flex: 1;
    padding: 0 32px 0 40px;
    width: 265px;
  }

  & > .left .listItem {
    margin: 3px 0px;
    background: white;
  }

  & > .right {
    flex: 1;
    margin: 0 44px 0 32px;
    width: 280px;
  }
`;

export const ColumnItem = styled.div`
  align-items: center;
	border-bottom: 1px solid ${theme.newColors.grey2["100"]};
  display: flex;
  padding: 20px 0 20px 0;

  span {
    margin-left: 23px;
  }

  .MuiSvgIcon-root {
    color: ${theme.newColors.grey3["100"]};
  }
`;
