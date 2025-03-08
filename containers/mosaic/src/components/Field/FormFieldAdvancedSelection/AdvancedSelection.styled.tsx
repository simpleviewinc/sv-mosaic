import styled from "styled-components";

export const StyledSkeletonWrapper = styled.div`
  display: flex;
  gap: 16px;

  & .MuiSkeleton-root {
    border-radius: 99999em;
  }
`;
