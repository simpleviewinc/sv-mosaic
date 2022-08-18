"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CanvasContainer = exports.StyledCanvas = exports.SetFocusSpan = exports.StyledCircularProgress = exports.UploadButton = exports.SizeValue = exports.SizeLabel = exports.ImgLoaded = exports.ButtonsContainer = exports.ImageCard = exports.MenuColumn = exports.ImagePropertiesColumn = exports.ImageColumn = exports.Row = exports.Column = exports.FileInput = exports.DragAndDropSpan = exports.DragAndDropContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = __importDefault(require("../../theme"));
var ImageVideoLinkDocumentBrowsing_styled_1 = require("../FormFieldImageVideoLinkDocumentBrowsing/ImageVideoLinkDocumentBrowsing.styled");
// Components
var Button_1 = __importDefault(require("../../components/Button"));
var CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
exports.DragAndDropContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  border: ", ";\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  height: 204px;\n  justify-content: center;\n  position: relative;\n  width: 300px;\n"], ["\n  align-items: center;\n  border: ", ";\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  height: 204px;\n  justify-content: center;\n  position: relative;\n  width: 300px;\n"])), function (pr) { return (pr.isOver ? "1px dashed ".concat(theme_1["default"].colors.blueTeal) : ""); }, function (pr) { return (pr.isOver ? "#008DA81A" : theme_1["default"].colors.gray200); });
exports.DragAndDropSpan = styled_components_1["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 16px;\n  margin-bottom: ", ";\n"], ["\n  color: ", ";\n  font-size: 16px;\n  margin-bottom: ", ";\n"])), function (pr) { return (pr.isOver ? theme_1["default"].colors.blueTeal : theme_1["default"].colors.gray600); }, function (pr) { return (pr.isOver ? "" : "24px"); });
exports.FileInput = styled_components_1["default"].input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n\n  &:focus {\n    outline: none;\n  }\n"], ["\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n\n  &:focus {\n    outline: none;\n  }\n"])));
exports.Column = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
exports.Row = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  align-items: baseline;\n  display: flex;\n"], ["\n  align-items: baseline;\n  display: flex;\n"])));
exports.ImageColumn = (0, styled_components_1["default"])(exports.Column)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
exports.ImagePropertiesColumn = (0, styled_components_1["default"])(exports.Column)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-left: 16px;\n"], ["\n  margin-left: 16px;\n"])));
exports.MenuColumn = (0, styled_components_1["default"])(exports.Column)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-left: auto;\n"], ["\n  margin-left: auto;\n"])));
exports.ImageCard = (0, styled_components_1["default"])(ImageVideoLinkDocumentBrowsing_styled_1.AssetCard)(templateObject_9 || (templateObject_9 = __makeTemplateObject([""], [""])));
exports.ButtonsContainer = (0, styled_components_1["default"])(ImageVideoLinkDocumentBrowsing_styled_1.ButtonsWrapper)(templateObject_10 || (templateObject_10 = __makeTemplateObject([""], [""])));
exports.ImgLoaded = styled_components_1["default"].img(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  border: 2px solid ", ";\n  object-fit: contain;\n"], ["\n  border: 2px solid ", ";\n  object-fit: contain;\n"])), theme_1["default"].colors.gray200);
exports.SizeLabel = (0, styled_components_1["default"])(ImageVideoLinkDocumentBrowsing_styled_1.AssetLabel)(templateObject_12 || (templateObject_12 = __makeTemplateObject([""], [""])));
exports.SizeValue = (0, styled_components_1["default"])(ImageVideoLinkDocumentBrowsing_styled_1.AssetValue)(templateObject_13 || (templateObject_13 = __makeTemplateObject([""], [""])));
exports.UploadButton = (0, styled_components_1["default"])(Button_1["default"])(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  z-index: 1;\n"], ["\n  z-index: 1;\n"])));
exports.StyledCircularProgress = (0, styled_components_1["default"])(CircularProgress_1["default"])(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  &.MuiCircularProgress-colorPrimary {\n    color: ", ";\n  }\n\n  margin-bottom: 24px;\n"], ["\n  &.MuiCircularProgress-colorPrimary {\n    color: ", ";\n  }\n\n  margin-bottom: 24px;\n"])), theme_1["default"].colors.blueTeal);
exports.SetFocusSpan = styled_components_1["default"].span(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  align-self: center;\n  color: ", ";\n  font-family: ", ";\n  font-size: 14px;\n  margin-left: 18px;\n"], ["\n  align-self: center;\n  color: ", ";\n  font-family: ", ";\n  font-size: 14px;\n  margin-left: 18px;\n"])), theme_1["default"].colors.almostBlack, theme_1["default"].fontFamily);
// ImageUploadCanvas component styles
exports.StyledCanvas = styled_components_1["default"].canvas(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  background-color: ", ";\n  opacity: 0.4;\n"], ["\n  background-color: ", ";\n  opacity: 0.4;\n"])), theme_1["default"].colors.almostBlack);
exports.CanvasContainer = styled_components_1["default"].div(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;
