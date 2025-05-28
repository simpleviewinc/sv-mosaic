import styled from "styled-components";

// Utils
import theme from "@root/theme";
import ButtonRow from "@root/components/ButtonRow";

export const StyledAddressCard = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.newColors.almostBlack["100"]};
  background-color: ${theme.newColors.grey1["100"]};
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

export const StyledButtonRow = styled(ButtonRow)`
  align-self: flex-end;
  margin-top: auto;
`;
