"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var jsvalidator_1 = __importDefault(require("jsvalidator"));
var Button_1 = __importDefault(require("../Button"));
var ButtonRow_1 = __importDefault(require("../ButtonRow"));
var i18n_1 = require("../../i18n");
var StyledWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tmargin-top: 1rem;\n\t}\n"], ["\n\t& {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tmargin-top: 1rem;\n\t}\n"])));
function DataViewFilterDropdownButtons(props) {
    jsvalidator_1["default"].validate(props, {
        type: "object",
        schema: [
            {
                name: "onClear",
                type: "function"
            },
            {
                name: "onCancel",
                type: "function"
            },
            {
                name: "onApply",
                type: "function"
            },
            {
                name: "disableApply",
                type: "boolean"
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    var t = (0, i18n_1.useMosaicTranslation)().t;
    return (react_1["default"].createElement(StyledWrapper, null,
        react_1["default"].createElement(ButtonRow_1["default"], null,
            react_1["default"].createElement(Button_1["default"], { label: t("mosaic:common.clear"), color: "black", variant: "text", onClick: props.onClear })),
        react_1["default"].createElement(ButtonRow_1["default"], null,
            react_1["default"].createElement(Button_1["default"], { label: t("mosaic:common.cancel"), color: "black", variant: "text", onClick: props.onCancel }),
            react_1["default"].createElement(Button_1["default"], { label: t("mosaic:common.apply"), color: "blue", variant: "contained", onClick: props.onApply, disabled: (props.disableApply !== undefined) ? props.disableApply : false }))));
}
exports["default"] = DataViewFilterDropdownButtons;
var templateObject_1;
