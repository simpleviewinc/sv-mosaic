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
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var theme_1 = __importDefault(require("../../theme"));
var Button_1 = __importDefault(require("../Button"));
var Typography_1 = require("../Typography");
var LabelWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\n\t& > .dropdownIcon {\n\t\tcolor: ", ";\n\t\tmargin-left: 4px;\n\t\tmargin-right: -4px;\n\t}\n\n\t& > .removeIcon {\n\t\tmargin-left: 4px;\n\t\tmargin-right: -4px;\n\t\tcolor: black;\n\t\tbackground-color: ", "12;\n\t\tborder-radius: 20px;\n\t\tpadding: 3px;\n\t\tbox-sizing: border-box;\n\t}\n\n\t& > .removeIcon:hover {\n\t\tbackground-color: ", "45;\n\t}\n\n\t& > .filter-label {\n\t\tfont-weight: ", ";\n\t\tmargin-right: 8px;\n\t\ttext-transform: capitalize;\n\t}\n\n\t& > .filter-value {\n\t\tfont-weight: ", ";\n\t\tmargin-right: 8px;\n\t\ttext-transform: none;\n\t}\n\n\t&.type_optional > * {\n\t\tcolor: ", ";\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\n\t& > .dropdownIcon {\n\t\tcolor: ", ";\n\t\tmargin-left: 4px;\n\t\tmargin-right: -4px;\n\t}\n\n\t& > .removeIcon {\n\t\tmargin-left: 4px;\n\t\tmargin-right: -4px;\n\t\tcolor: black;\n\t\tbackground-color: ", "12;\n\t\tborder-radius: 20px;\n\t\tpadding: 3px;\n\t\tbox-sizing: border-box;\n\t}\n\n\t& > .removeIcon:hover {\n\t\tbackground-color: ", "45;\n\t}\n\n\t& > .filter-label {\n\t\tfont-weight: ", ";\n\t\tmargin-right: 8px;\n\t\ttext-transform: capitalize;\n\t}\n\n\t& > .filter-value {\n\t\tfont-weight: ", ";\n\t\tmargin-right: 8px;\n\t\ttext-transform: none;\n\t}\n\n\t&.type_optional > * {\n\t\tcolor: ", ";\n\t}\n"])), theme_1["default"].colors.gray600, theme_1["default"].colors.blue, theme_1["default"].colors.blue, theme_1["default"].fontWeight.normal, theme_1["default"].fontWeight.normal, theme_1["default"].colors.blue);
function DataViewPrimaryFilter(props) {
    jsvalidator_1["default"].validate(props, {
        type: "object",
        schema: [
            { name: "label", type: "string", required: true },
            { name: "value", type: "string" },
            { name: "color", type: "string", required: false },
            { name: "type", type: "string", "enum": ["primary", "optional"], required: true },
            { name: "onRemove", type: "function", required: true },
            { name: "onClick", type: "function", required: true }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    var remove = function (e) {
        // stops the outer wrapping click handler from firing
        e.stopPropagation();
        // call the passed in onRemove function
        props.onRemove();
    };
    var variant = props.type === "primary" ? "text" : "contained";
    var color = props.type === "primary" ? "black" : "lightBlue";
    var label = (react_1["default"].createElement(LabelWrapper, { className: "\n\t\t\t\ttype_".concat(props.type, "\n\t\t\t") },
        react_1["default"].createElement(Typography_1.BodyText, { className: "filter-label" },
            props.label,
            ":"),
        react_1["default"].createElement(Typography_1.BodyText, { className: "filter-value", color: props.color ? props.color : color },
            react_1["default"].createElement("b", null, props.value || "Any")),
        props.type === "optional" &&
            react_1["default"].createElement(Close_1["default"], { className: "icon removeIcon", onClick: remove })));
    return (react_1["default"].createElement(Button_1["default"], { color: props.color ? props.color : color, variant: variant, size: "small", onClick: props.onClick, label: label, iconPosition: "right", mIcon: ExpandMore_1["default"] }));
}
exports["default"] = DataViewPrimaryFilter;
var templateObject_1;
