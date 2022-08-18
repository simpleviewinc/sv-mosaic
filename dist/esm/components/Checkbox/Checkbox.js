import * as React from "react";
import { memo } from "react";
import { StyledCheckbox, StyledFormControlLabel, StyledHelperText } from "./Checkbox.styled";
const Checkbox = (props) => {
    var _a;
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledFormControlLabel, { label: props.label, labelPlacement: "end", "data-testid": "label-test-id", value: "end", disabled: props.disabled, control: React.createElement(StyledCheckbox, { "data-testid": "checkbox-test-id", className: `
						custom-checkbox
						${props.checked ? "checked" : ""}
						${props.className ? props.className : ""}
					`, color: "default", edge: props.edge, checked: props.checked, onClick: props.onClick, indeterminate: props.indeterminate, disableRipple: true }) }),
        ((_a = props.helperText) === null || _a === void 0 ? void 0 : _a.trim().length) > 0 &&
            React.createElement(StyledHelperText, null, props.helperText)));
};
export default memo(Checkbox);
