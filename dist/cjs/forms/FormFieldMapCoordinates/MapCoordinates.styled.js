"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.mapContainerStyle = exports.SuggestionDescription = exports.SuggestionsDescriptionContainer = exports.SuggestionsContainer = exports.StyledClearIcon = exports.StyledInputSearch = exports.LocationSearchInputWrapper = exports.MapContainer = exports.SwitchContainer = exports.LatitudeValue = exports.CoordinatesValues = exports.LatLngLabel = exports.MapImageColumn = exports.Column = exports.ButtonsWrapper = exports.CoordinatesCard = exports.StyledSpan = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
var FormFieldText_styled_1 = require("../FormFieldText/FormFieldText.styled");
// Components
var Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
// Styles for the MapCoordinates component
exports.StyledSpan = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 14px;\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: 14px;\n"])), theme_1["default"].colors.gray600, theme_1["default"].fontFamily);
exports.CoordinatesCard = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 2px solid ", ";\n  border-radius: 4px;\n  display: flex;\n  font-family: ", ";\n  ", "\n  padding: 16px;\n  padding-bottom: ", ";\n  position: relative;\n  width: 414px;\n  background-color: white;\n"], ["\n  border: 2px solid ", ";\n  border-radius: 4px;\n  display: flex;\n  font-family: ", ";\n  ", "\n  padding: 16px;\n  padding-bottom: ", ";\n  position: relative;\n  width: 414px;\n  background-color: white;\n"])), theme_1["default"].colors.gray200, theme_1["default"].fontFamily, function (pr) {
    return pr.hasAddress ? "max-height: 204px;" : "height: 174px;";
}, function (pr) { return pr.hasAddress ? "35px" : "16px"; });
exports.ButtonsWrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  right: 16px;\n  position: absolute;\n  top: 169px;\n\n  button:first-child {\n    border-right: ", ";\n    padding-right: ", ";\n  }\n\n  button:last-child {\n    padding-left: 16px;\n  }\n"], ["\n  display: flex;\n  right: 16px;\n  position: absolute;\n  top: 169px;\n\n  button:first-child {\n    border-right: ", ";\n    padding-right: ", ";\n  }\n\n  button:last-child {\n    padding-left: 16px;\n  }\n"])), function (pr) {
    return pr.hasAddress ? "2px solid ".concat(theme_1["default"].colors.gray200) : "";
}, function (pr) { return (pr.hasAddress ? "16px" : ""); });
exports.Column = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
exports.MapImageColumn = (0, styled_components_1["default"])(exports.Column)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-right: 16px;\n"], ["\n  margin-right: 16px;\n"])));
exports.LatLngLabel = styled_components_1["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: ", ";\n"], ["\n  color: ", ";\n  font-size: 14px;\n  font-weight: ", ";\n"])), theme_1["default"].colors.gray600, theme_1["default"].fontWeight.semiBold);
exports.CoordinatesValues = styled_components_1["default"].span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n"])), theme_1["default"].colors.almostBlack);
exports.LatitudeValue = (0, styled_components_1["default"])(exports.CoordinatesValues)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-bottom: 24px;\n"], ["\n  margin-bottom: 24px;\n"])));
exports.SwitchContainer = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-bottom: 16px;\n"], ["\n  margin-bottom: 16px;\n"])));
// Styles for the Map component
exports.MapContainer = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-bottom: 18px;\n"], ["\n  margin-bottom: 18px;\n"])));
// Styles for the LocationSearchInput component
exports.LocationSearchInputWrapper = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  margin-bottom: 8px;\n"], ["\n  margin-bottom: 8px;\n"])));
exports.StyledInputSearch = (0, styled_components_1["default"])(FormFieldText_styled_1.StyledTextField)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  min-width: 684px;\n\n  &.MuiTextField-root {\n    display: flex;\n  }\n"], ["\n  min-width: 684px;\n\n  &.MuiTextField-root {\n    display: flex;\n  }\n"])));
exports.StyledClearIcon = (0, styled_components_1["default"])(Clear_1["default"])(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
exports.SuggestionsContainer = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  border: ", ";\n  font-family: ", ";\n"], ["\n  border: ", ";\n  font-family: ", ";\n"])), theme_1["default"].borders.fieldGray, theme_1["default"].fontFamily);
exports.SuggestionsDescriptionContainer = styled_components_1["default"].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  background-color: ", ";\n  cursor: pointer;\n  width: 683px;\n"], ["\n  background-color: ", ";\n  cursor: pointer;\n  width: 683px;\n"])), function (_a) {
    var isSuggestionActive = _a.isSuggestionActive;
    return isSuggestionActive ? theme_1["default"].colors.gray200 : "white";
});
exports.SuggestionDescription = styled_components_1["default"].p(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  font-size: 14px;\n  margin: 0;\n  padding: 6px 16px 6px 16px;\n\n  &:active {\n    color: ", ";\n    font-weight: ", ";\n  }\n"], ["\n  font-size: 14px;\n  margin: 0;\n  padding: 6px 16px 6px 16px;\n\n  &:active {\n    color: ", ";\n    font-weight: ", ";\n  }\n"])), theme_1["default"].colors.gray800, theme_1["default"].fontWeight.bold);
exports.mapContainerStyle = {
    border: "2px solid ".concat(theme_1["default"].colors.gray200),
    height: "153px",
    width: "232px"
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
