import styled from 'styled-components';
import theme from '@root/theme';

export const DragAndDropContainer = styled.div`
  align-items: center;
  background-color: ${theme.colors.gray200};
  display: flex;
  flex-direction: column;
  height: 204px;
  justify-content: center;
  width: 300px;
`;

export const DragAndDropSpan = styled.span`
  color: ${theme.colors.gray600};
  font-size: 16px;
  margin-bottom: 24px;
`;
