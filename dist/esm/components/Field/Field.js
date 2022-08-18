import * as React from "react";
import { useState, useEffect, useRef, useMemo, memo } from "react";
import { StyledFieldContainer, StyledFieldWrapper } from "./Field.styled";
import { default as Label } from "./Label";
import { default as HelperText } from "./HelperText";
import { default as InstructionText } from "./InstructionText";
import { Sizes } from "../../theme";
import { debounce } from "lodash";
const Field = ({ children, error, fieldDef, colsInRow, value, }) => {
    var _a;
    const [renderAsTooltip, setRenderAsTooltip] = useState(false);
    const description = useRef(null);
    const fieldContainer = useRef(null);
    const fieldRef = useRef(null);
    const errorWithMessage = (error === null || error === void 0 ? void 0 : error.trim().length) > 0;
    const handleDescriptionRender = () => {
        const container = fieldContainer.current;
        const containerStyle = container && window.getComputedStyle(container);
        const widthcontainer = containerStyle && parseFloat(containerStyle.getPropertyValue("width"));
        const field = fieldRef.current;
        const fieldStyle = field && window.getComputedStyle(field);
        const fieldWidth = fieldStyle && parseFloat(fieldStyle.getPropertyValue("width"));
        setRenderAsTooltip(false);
        if (widthcontainer - fieldWidth > 20 && renderAsTooltip === true) {
            setRenderAsTooltip(false);
        }
        else {
            if (description.current) {
                const node = description.current;
                const nodeStyle = window.getComputedStyle(node);
                const marginLeft = parseFloat(nodeStyle.getPropertyValue("margin-left"));
                if (marginLeft > 20) {
                    setRenderAsTooltip(false);
                }
                else {
                    setRenderAsTooltip(true);
                }
            }
        }
    };
    const handleDescriptionDebounced = debounce(handleDescriptionRender, 300);
    useEffect(() => {
        if (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.instructionText)
            if (colsInRow === 1) {
                if ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "imageUpload" || (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "table") {
                    setRenderAsTooltip(true);
                }
                else {
                    handleDescriptionDebounced();
                    window.addEventListener("resize", handleDescriptionDebounced);
                    return () => {
                        window.removeEventListener("resize", handleDescriptionDebounced);
                    };
                }
            }
            else {
                setRenderAsTooltip(true);
            }
    }, []);
    const renderBottomText = () => {
        if ((errorWithMessage || (errorWithMessage && (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required)))) {
            return React.createElement(HelperText, { error: !!error }, error);
        }
        else if (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.helperText) {
            return React.createElement(HelperText, null, fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.helperText);
        }
    };
    const labelMargin = useMemo(() => {
        let labelMargin = "8px";
        if (
        //fieldDef?.type === 'advancedSelection' ||
        (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "imageUpload" ||
            (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "address") {
            return (labelMargin = "16px");
        }
        else if ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "table") {
            return (labelMargin = "13px");
        }
        return labelMargin;
    }, [fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type]);
    return (React.createElement(StyledFieldContainer, { className: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.className, style: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.style },
        React.createElement(StyledFieldWrapper, { error: errorWithMessage || (errorWithMessage && (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required)), size: ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "chip" || (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "linkSetup") ? Sizes.md : (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.type) === "table" ? "fit-content" : fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.size, ref: fieldRef },
            (((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.label) && ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.label) === null || _a === void 0 ? void 0 : _a.length) > 0)
                || (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.maxCharacters)
                || ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.instructionText) && renderAsTooltip))
                &&
                    React.createElement(Label, { labelMargin: labelMargin, disabled: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled, required: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.required, htmlFor: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.name, maxCharacters: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.maxCharacters, value: value, tooltip: renderAsTooltip, instructionText: fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.instructionText }, fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.label),
            children,
            renderBottomText()),
        ((fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.instructionText) && colsInRow === 1 && !renderAsTooltip) &&
            React.createElement(InstructionText, { ref: description, tooltip: renderAsTooltip, labelMargin: labelMargin }, fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.instructionText)));
};
export default memo(Field);
