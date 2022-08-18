import * as React from "react";
import { useMemo, useCallback } from "react";
import { xor } from "lodash";
import Checkbox from "../Checkbox";
import { useStateRef } from "../../utils/reactTools";
import FormGroup from "@mui/material/FormGroup";
const CheckboxList = (props) => {
    var _a;
    const checkedRef = useStateRef(props.checked);
    const handleToggle = useCallback((value) => () => {
        // toggle the item in the array
        const newChecked = xor(checkedRef.current, [value]);
        // TODO: Review with Owen
        //props.onChange(newChecked.length > 0 ? newChecked : undefined);
        props.onChange(newChecked);
    }, [checkedRef, props.onChange]);
    const callbacks = useMemo(() => {
        var _a;
        return (_a = props === null || props === void 0 ? void 0 : props.options) === null || _a === void 0 ? void 0 : _a.map((option) => handleToggle(option.value));
    }, [props.options, handleToggle]);
    return (React.createElement(FormGroup, { className: `${props.className} listItem`, onBlur: props.onBlur, style: props.style }, (_a = props === null || props === void 0 ? void 0 : props.options) === null || _a === void 0 ? void 0 : _a.map((option, i) => {
        var _a, _b;
        const checked = ((_a = props === null || props === void 0 ? void 0 : props.checked) === null || _a === void 0 ? void 0 : _a.length) > 0 ? ((_b = props.checked) === null || _b === void 0 ? void 0 : _b.filter(o => o === option.value).length) > 0 : false;
        return (React.createElement(Checkbox, { className: checked ? "checked" : "", checked: checked, label: option.label, disabled: props.disabled, key: `${option.value}-${i}`, onClick: callbacks[i] }));
    })));
};
export default CheckboxList;
