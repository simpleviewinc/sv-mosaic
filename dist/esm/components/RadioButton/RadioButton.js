import * as React from "react";
import { StyledRadioButton } from "./RadioButton.styled";
import StyledFormControlLabel from "../StyledFormControlLabel";
const RadioButton = (props) => {
    const { label, required, disabled, value } = props;
    return (React.createElement(StyledFormControlLabel, { label: label, labelPlacement: 'end', value: value, disabled: disabled, control: React.createElement(StyledRadioButton, { "data-testid": 'radio-button-test', disabled: disabled, required: required }) }));
};
export default RadioButton;
