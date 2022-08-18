import * as React from "react";
import { memo } from "react";
import Button from "../../../components/Button";
const ResetButton = (props) => {
    var _a;
    const { value, fieldDef } = props;
    return (value && (React.createElement(Button, { color: "teal", variant: "text", label: "Reset", onClick: (_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.resetLocation, muiAttrs: { disableRipple: true }, attrs: { style: { margin: "auto auto 35px auto" } } })));
};
export default memo(ResetButton);
