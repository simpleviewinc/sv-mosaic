import * as React from "react";
// Components
import ToggleSwitch from "../../components/ToggleSwitch";
const FormFieldToggleSwitch = (props) => {
    var _a;
    const { fieldDef, onBlur, onChange, value, } = props;
    return (React.createElement(ToggleSwitch, { disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, checked: value, label: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.toggleLabel, onChange: onChange, onBlur: onBlur, required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required }));
};
export default FormFieldToggleSwitch;
