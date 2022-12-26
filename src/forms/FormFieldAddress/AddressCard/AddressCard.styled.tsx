import styled from "styled-components";

// Utils
import theme from "@root/theme";

export const StyledAddressCard = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.newColors.almostBlack["100"]};
  background-color: ${theme.newColors.grey1[100]};
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
	line-height: 20px;
  }
`;

export const AddressTitle = styled.span`
  font-weight: ${theme.fontWeight.semiBold};
  margin-bottom: 12px !important;
`;

export const ButtonsWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  margin-top: auto;

  span:first-child {
    border-right: 1px solid ${theme.colors.simplyGray};
    padding-right: 16px;
  }

  span:last-child {
    padding-left: 16px;
  }
`;
