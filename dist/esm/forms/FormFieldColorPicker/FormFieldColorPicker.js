import * as React from "react";
import { memo, useState } from "react";
// External libraries
import { SketchPicker } from "react-color";
// Styles
import { ColorContainer, ColorDiv, Cover, PopOver } from "./ColorPicker.styled";
const FormFieldColorPicker = (props) => {
    const { fieldDef, value, onChange } = props;
    // State variables
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [color, setColor] = useState(null);
    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };
    const handleClose = () => {
        setDisplayColorPicker(false);
    };
    const onColorChange = (color) => {
        setColor(color);
        onChange(color.hex);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(ColorContainer, { displayColorPicker: displayColorPicker, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled },
            React.createElement(ColorDiv, { "data-testid": 'colordiv-test', disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, color: (color === null || color === void 0 ? void 0 : color.rgb) || value || { r: 0, g: 141, b: 168, a: 1 }, onClick: handleClick })),
        displayColorPicker && !(fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled) && (React.createElement(PopOver, null,
            React.createElement(Cover, { onClick: handleClose }),
            React.createElement(SketchPicker, { color: value ? color === null || color === void 0 ? void 0 : color.rgb : "#008DA8", onChange: onColorChange })))));
};
export default memo(FormFieldColorPicker);
