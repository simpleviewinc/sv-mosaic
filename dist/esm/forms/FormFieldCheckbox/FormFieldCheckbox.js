import * as React from "react";
import { memo } from "react";
import { StyledCheckboxList } from "./FormFieldCheckbox.styled";
const FormFieldCheckbox = (props) => {
    var _a;
    const { fieldDef, onChange, onBlur, value } = props;
    return (React.createElement(StyledCheckboxList, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, checked: value, options: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.options, onChange: onChange, onBlur: onBlur, style: fieldDef.style, className: fieldDef.className }));
};
export default memo(FormFieldCheckbox);
