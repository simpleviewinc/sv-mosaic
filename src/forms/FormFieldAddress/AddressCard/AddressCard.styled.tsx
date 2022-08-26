import styled from "styled-components";

// Utils
import theme from "@root/theme";

export const StyledAddressCard = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.almostBlack};
  background-color: ${theme.colors.gray100};
  font-family: ${theme.fontFamily};
  height: 204px;
  padding: 24px 16px 16px 24px;
  width: 300px;

  & span {
    font-size: 14px;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const AddressTitle = styled.span`
  font-weight: ${theme.fontWeight.semiBold};
  margin-bottom: 12px;
`;

export const ButtonsWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  margin-top: auto;

  span:first-child {
    border-right: 2px solid ${theme.colors.gray200};
    padding-right: 16px;
  }

  span:last-child {
    padding-left: 16px;
  }
`;
