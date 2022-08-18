import * as React from "react";
import { memo } from "react";
import { StyledTextArea } from "./FormFieldTextArea.styled";
const TextArea = (props) => {
    var _a, _b, _c;
    const { fieldDef, error, onChange, onBlur, value, } = props;
    const errorWithMessage = (error === null || error === void 0 ? void 0 : error.trim().length) > 0;
    return (React.createElement(StyledTextArea, { id: fieldDef.name, value: value, onChange: (e) => onChange && onChange(e.target.value), onBlur: (e) => onBlur && onBlur(e.target.value), variant: 'outlined', error: (errorWithMessage || (errorWithMessage && (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required))), className: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.className, placeholder: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.placeholder, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, multiline: true, fieldSize: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.size, inputProps: { maxLength: ((_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.maxCharacters) > 0 ? (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.maxCharacters : null }, required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required }));
};
export default memo(TextArea);
