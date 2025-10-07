import { CardWrapper } from "@root/components/Card/Card.styled";
import styled from "styled-components";

export const StyledCardWrapper = styled(CardWrapper)`
  width: 300px;
`;

export const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const AddressLine = styled.div`
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;
