import styled from 'styled-components';
import theme from '@root/theme';

export const ColorContainer = styled.div`
  background: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.simplyGray};
  margin-bottom: ${(pr) => (pr.displayColorPicker ? '8px' : 0)};
  opacity: ${(pr) => (pr.disabled ? 0.5 : 1)};
  padding: 10px;
  width: fit-content;
`;

export const ColorDiv = styled.div`
  ${pr => `background: rgba(${pr.color.r}, ${pr.color.g}, ${pr.color.b}, ${pr.color.a});`}
  cursor: ${(pr) => (!pr.disabled ? 'pointer' : 'auto')};
  height: 31px;
  pointer-events: ${(pr) => (!pr.disabled ? 'auto' : 'none')};
  width: 80px;
`;

export const PopOver = styled.div`
  position: absolute;
  z-index: 2;
`;

export const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
