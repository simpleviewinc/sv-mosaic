import * as React from "react";
import { memo } from "react";
// Material UI
import InputAdornment from "@mui/material/InputAdornment";
import { StyledTextField } from "./FormFieldText.styled";
const TextField = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { fieldDef, error, onChange, onBlur, value, } = props;
    const leadingElement = ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.prefixElement)
        ? {
            startAdornment: (React.createElement(InputAdornment, { position: 'start' }, (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.prefixElement)),
        }
        : null;
    const onFieldChange = (e) => {
        var _a;
        const value = ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.type) === "number"
            ? Number(e.target.value)
            : e.target.value;
        onChange && onChange(value);
    };
    const errorWithMessage = (error === null || error === void 0 ? void 0 : error.trim().length) > 0;
    return (React.createElement(StyledTextField, { id: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.name, value: value, onChange: onFieldChange, onBlur: (e) => onBlur && onBlur(e.target.value), variant: 'outlined', error: (errorWithMessage || (errorWithMessage && (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required))), className: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.className, placeholder: (_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.placeholder, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, multiline: (_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.multiline, fieldSize: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.size, inputProps: { maxLength: ((_e = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _e === void 0 ? void 0 : _e.maxCharacters) > 0 ? (_f = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _f === void 0 ? void 0 : _f.maxCharacters : null }, InputProps: leadingElement, required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required, type: (_g = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _g === void 0 ? void 0 : _g.type }));
};
export default memo(TextField);
