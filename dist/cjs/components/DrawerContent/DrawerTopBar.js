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
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var Typography_1 = require("../Typography");
var Button_1 = __importDefault(require("../Button"));
var ButtonRow_1 = __importDefault(require("../ButtonRow"));
var i18n_1 = require("../../i18n");
var StyledWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t& {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tpadding: 12px;\n\t}\n\t\n\t& > .left {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t& > .left > h1 {\n\t\tdisplay: inline;\n\t\tpadding: 0px 50px 0px 20px;\n\t\tmargin: 0;\n\t\tposition: relative;\n\t\ttop: -2px;\n\t}\n"], ["\n\t& {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tpadding: 12px;\n\t}\n\t\n\t& > .left {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t& > .left > h1 {\n\t\tdisplay: inline;\n\t\tpadding: 0px 50px 0px 20px;\n\t\tmargin: 0;\n\t\tposition: relative;\n\t\ttop: -2px;\n\t}\n"])));
function DrawerTopBar(props) {
    var t = (0, i18n_1.useMosaicTranslation)().t;
    return (react_1["default"].createElement(StyledWrapper, null,
        react_1["default"].createElement("div", { className: "left" },
            react_1["default"].createElement(Button_1["default"], { mIcon: Close_1["default"], variant: "icon", color: "black", onClick: props.onClose }),
            react_1["default"].createElement(Typography_1.H1, null, props.title)),
        react_1["default"].createElement("div", { className: "right" },
            react_1["default"].createElement(ButtonRow_1["default"], null,
                props.onCancel &&
                    react_1["default"].createElement(Button_1["default"], { label: t("mosaic:common.cancel"), color: "black", variant: "text", onClick: props.onCancel }),
                props.onSave &&
                    react_1["default"].createElement(Button_1["default"], { label: t("mosaic:common.save"), color: "blue", variant: "contained", onClick: props.onSave }),
                props.onApply &&
                    react_1["default"].createElement(Button_1["default"], { label: t("mosaic:common.apply"), color: "blue", variant: "contained", onClick: props.onApply })))));
}
exports["default"] = DrawerTopBar;
var templateObject_1;
