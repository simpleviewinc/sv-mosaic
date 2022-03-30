import styled from "styled-components";

export const DateTimePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateTimeInputRow = styled.div`
  display: flex;

  & > :not(:last-child) {
    margin-right: 60px;
  }
`;
