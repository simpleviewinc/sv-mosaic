import * as React from "react";
import { memo, useRef } from "react";
import { EditorWrapper } from "./FormFieldTextEditor.styled";
import JoditEditor from "jodit-react";
const FormFieldTextEditor = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { fieldDef, onChange, onBlur, value, error, } = props;
    const editor = useRef(null);
    const buttonList = [
        "source",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "superscript",
        "subscript",
        "paragraph",
        "fontsize",
        "font",
        "ul",
        "ol",
        "indent",
        "outdent",
        "left",
        "center",
        "right",
        "justify",
        "link",
        "image",
        "eraser",
        "undo",
        "redo",
    ];
    const config = {
        namespace: "",
        disabled: (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled) ? fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.disabled : false,
        buttonsXS: buttonList,
        buttons: buttonList,
        buttonsSM: buttonList,
        buttonsMD: buttonList,
        buttonsLG: buttonList,
        spellcheck: ((_a = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _a === void 0 ? void 0 : _a.spellcheck) ? (_b = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _b === void 0 ? void 0 : _b.spellcheck : false,
        direction: ((_c = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _c === void 0 ? void 0 : _c.direction) ? (_d = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _d === void 0 ? void 0 : _d.direction : "ltr",
        language: ((_e = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _e === void 0 ? void 0 : _e.language) ? (_f = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _f === void 0 ? void 0 : _f.language : "en",
        limitChars: ((_g = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _g === void 0 ? void 0 : _g.maxCharacters) ? (_h = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.inputSettings) === null || _h === void 0 ? void 0 : _h.maxCharacters : undefined,
    };
    const updateValue = async (e) => {
        await onChange(e);
        if (onBlur)
            await onBlur(e);
    };
    return (React.createElement(EditorWrapper, { error: error, "data-testid": 'text-editor-testid' },
        React.createElement(JoditEditor, { ref: editor, value: value, config: config, onBlur: (e) => updateValue(e) })));
};
export default memo(FormFieldTextEditor);
