import styled from 'styled-components';
import {
  StyledIconProps,
  StyledWrapperProps,
  heights,
  iconPadding,
  StyledTextInputProps,
} from './TextFieldTypes';

export const StyledWrapper = styled.div<StyledWrapperProps>`
  position: relative;
  width: ${pr => pr.width};
  height: ${pr => heights[pr.innerSize]}px;
`;

export const StyledTextField = styled.input<StyledTextInputProps>`
  box-sizing: border-box;
  position: relative;
  background-color: ${(pr) => (pr.error ? '#ffe3e6' : '#FFF')};
  padding: 0;
  padding-left: ${(pr) =>
    iconPadding[pr.innerSize] +
    (pr.withIcon ? iconPadding[pr.innerSize] + 10 : 0)}px;
  height: ${(pr) => heights[pr.innerSize]}px;
  width: ${(pr) => pr.width};
  border-color: #e1e1e1;
  color: #000;
  ${(pr) =>
    pr.disabled
      ? `
    background-color: transparent;
    color: #5e5e5e;
    cursor: not-allowed;
    `
      : ''}
  border-radius: 0;
  outline: none;
  transition: 0.1s ease-out;

  box-shadow: inset 0 0 0 2px ${(pr) => (pr.error ? '#d93848' : 'transparent')};
  &:focus {
    box-shadow: inset 0 0 0 2px ${(pr) => (pr.error ? '#d93848' : '#000')};
  }
`;

export const StyledIcon = styled.div.withConfig({
  shouldForwardProp: (prop, defPropValFN) =>
    !['innerSize'].includes(prop) && defPropValFN(prop),
})<StyledIconProps>`
  box-sizing: border-box;
  position: absolute;
  left: ${(pr) => iconPadding[pr.innerSize]}px;
  top: 50%;
  transform: translateY(-50%);
`;
