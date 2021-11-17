import styled from 'styled-components';
import theme from '@root/theme';

export const ColorContainer = styled.div`
  background: ${theme.colors.gray100};
  border: 1px solid ${theme.colors.simplyGray};
  margin-bottom: ${(pr) => (pr.displayColorPicker ? '8px' : 0)};
  opacity: ${(pr) => (pr.disabled ? 0.5 : 1)};
  padding: 10px;
`;

export const ColorDiv = styled.div`
  background: ${(pr) => pr.color};
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
