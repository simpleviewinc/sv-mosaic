"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var Checkbox_styled_1 = require("./Checkbox.styled");
var Checkbox = function (props) {
    var _a;
    return (React.createElement(React.Fragment, null,
        React.createElement(Checkbox_styled_1.StyledFormControlLabel, { label: props.label, labelPlacement: "end", "data-testid": "label-test-id", value: "end", disabled: props.disabled, control: React.createElement(Checkbox_styled_1.StyledCheckbox, { "data-testid": "checkbox-test-id", className: "\n\t\t\t\t\t\tcustom-checkbox\n\t\t\t\t\t\t".concat(props.checked ? "checked" : "", "\n\t\t\t\t\t\t").concat(props.className ? props.className : "", "\n\t\t\t\t\t"), color: "default", edge: props.edge, checked: props.checked, onClick: props.onClick, indeterminate: props.indeterminate, disableRipple: true }) }),
        ((_a = props.helperText) === null || _a === void 0 ? void 0 : _a.trim().length) > 0 &&
            React.createElement(Checkbox_styled_1.StyledHelperText, null, props.helperText)));
};
exports["default"] = (0, react_1.memo)(Checkbox);
