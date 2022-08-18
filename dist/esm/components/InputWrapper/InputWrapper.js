import * as React from "react";
import { StyledInputWrapper } from "./InputWrapper.styled";
const InputWrapper = ({ children }) => {
    return React.createElement(StyledInputWrapper, null, children);
};
export default InputWrapper;
