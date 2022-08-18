import * as React from "react";
import { memo } from "react";
// Components
import PhoneInput from "react-phone-input-2";
// Types and styles
import "react-phone-input-2/lib/bootstrap.css";
import { PhoneInputWrapper, StyledDisabledText, } from "./FormFieldPhoneSelectionDropdown.styled";
const FormFieldPhoneSelectionDropdown = (props) => {
    var _a, _b, _c;
    const { fieldDef, error, onChange, onBlur, value, } = props;
    return !(fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled) ? (React.createElement(PhoneInputWrapper, { error: !!((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required) && error), onBlur: (e) => onBlur && onBlur(e.target.value) },
        React.createElement(PhoneInput, { autoFormat: !!((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.autoFormat), country: ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.country) ? fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings.country : "us", disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, onChange: onChange, placeholder: (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.placeholder, value: value, inputProps: {
                required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required,
            } }))) : (value ? React.createElement(StyledDisabledText, null,
        "Phone value: ",
        value) : React.createElement(StyledDisabledText, null, "Phone field disabled"));
};
export default memo(FormFieldPhoneSelectionDropdown);
