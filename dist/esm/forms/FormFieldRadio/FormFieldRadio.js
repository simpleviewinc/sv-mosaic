import * as React from "react";
// Components
import RadioButton from "../../components/RadioButton";
import { StyledRadioGroup } from "./FormFieldRadio.styled";
const FormFieldRadio = (props) => {
    var _a;
    const { fieldDef, onChange, value, onBlur, } = props;
    const listOfRadios = (React.createElement(React.Fragment, null, (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.options.map((option) => (React.createElement(RadioButton, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, key: option.label, label: option.label, value: option.value })))));
    return (React.createElement(StyledRadioGroup, { onChange: (e) => onChange && onChange(e.target.value), value: value, onBlur: (e) => onBlur && onBlur(e.target.value) }, listOfRadios));
};
export default FormFieldRadio;
