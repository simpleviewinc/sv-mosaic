import * as React from "react";
import { StyledSwitch } from "./ToggleSwitch.styled";
import StyledFormControlLabel from "../StyledFormControlLabel";
const ToggleSwitch = (props) => {
    const { checked, label, labelPlacement = "end", required = false, disabled = false, onChange, onBlur, } = props;
    return (React.createElement(StyledFormControlLabel, { label: label, labelPlacement: labelPlacement, disabled: disabled, control: React.createElement(StyledSwitch, { onBlur: (e) => onBlur && onBlur(e.target.checked), checked: !!checked, onChange: (e) => onChange && onChange(e.target.checked), required: required }) }));
};
export default ToggleSwitch;
