"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.StyledDocumentIcon = exports.StyledLinkIcon = exports.StyledVideoIcon = exports.StyledImageIcon = exports.StyledAnchor = exports.RoundBackground = exports.StyledImg = exports.StyledTooltip = exports.MoreText = exports.MenuColumn = exports.AssetPropertiesColumn = exports.Column = exports.Td = exports.TableRow = exports.ButtonsWrapper = exports.AssetLabelTooltip = exports.AssetValue = exports.AssetLabel = exports.AssetCard = exports.BrowseSpan = exports.BrowseOptionContainer = exports.BrowseOptionSpan = exports.BrowsingContainer = exports.BrowseOptionsContainer = exports.ImageVideoLinkDocumentBrowsingContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// Utils
var theme_1 = __importDefault(require("../../theme"));
// Components
var Tooltip_1 = __importDefault(require("../../components/Tooltip"));
var Image_1 = __importDefault(require("@mui/icons-material/Image"));
var Videocam_1 = __importDefault(require("@mui/icons-material/Videocam"));
var Link_1 = __importDefault(require("@mui/icons-material/Link"));
var InsertDriveFile_1 = __importDefault(require("@mui/icons-material/InsertDriveFile"));
exports.ImageVideoLinkDocumentBrowsingContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: fit-content;\n"], ["\n\twidth: fit-content;\n"])));
exports.BrowseOptionsContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 61px;\n\n\tdiv:last-child {\n    margin-right: 0px;\n  }\n"], ["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 61px;\n\n\tdiv:last-child {\n    margin-right: 0px;\n  }\n"])));
exports.BrowsingContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 204px;\n\tmin-width: 300px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 204px;\n\tmin-width: 300px;\n"])), theme_1["default"].colors.gray200);
exports.BrowseOptionSpan = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tmargin-top: 8px;\n\tcolor: ", ";\n"], ["\n\tmargin-top: 8px;\n\tcolor: ", ";\n"])), theme_1["default"].colors.almostBlack);
exports.BrowseOptionContainer = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 67px;\n  width: 79px;\n\tmargin-right: 8px;\n"], ["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 67px;\n  width: 79px;\n\tmargin-right: 8px;\n"])));
exports.BrowseSpan = styled_components_1["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 16px;\n  margin-bottom: 24px;\n  margin-top: 43px;\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: 16px;\n  margin-bottom: 24px;\n  margin-top: 43px;\n"])), theme_1["default"].colors.gray600, theme_1["default"].fontFamily);
/**
 * Card styles. The following styles are used also
 * by the FormFieldImageUpload: AssetCard, AssetLabel,
 * AssetValue and ButtonsWrapper.
 */
exports.AssetCard = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  background-color: white;\n  border: 2px solid ", ";\n  border-radius: 4px;\n  padding: 16px;\n  position: relative;\n  width: 664px;\n\tmin-height: 168px;\n"], ["\n  display: flex;\n  background-color: white;\n  border: 2px solid ", ";\n  border-radius: 4px;\n  padding: 16px;\n  position: relative;\n  width: 664px;\n\tmin-height: 168px;\n"])), theme_1["default"].colors.gray200);
exports.AssetLabel = styled_components_1["default"].span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: ", ";\n  margin-right: 24px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n  font-weight: ", ";\n  margin-right: 24px;\n"])), theme_1["default"].colors.gray600, theme_1["default"].fontWeight.semiBold);
exports.AssetValue = styled_components_1["default"].span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n"])), theme_1["default"].colors.almostBlack);
exports.AssetLabelTooltip = (0, styled_components_1["default"])(exports.AssetLabel)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-right: 12px;\n"], ["\n  margin-right: 12px;\n"])));
exports.ButtonsWrapper = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: flex;\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n\n  .first {\n    border-right: 2px solid ", ";\n    padding-right: 16px;\n  }\n\n  span > button:last-child {\n    padding-left: 16px;\n  }\n"], ["\n  display: flex;\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n\n  .first {\n    border-right: 2px solid ", ";\n    padding-right: 16px;\n  }\n\n  span > button:last-child {\n    padding-left: 16px;\n  }\n"])), theme_1["default"].colors.gray200);
exports.TableRow = styled_components_1["default"].tr(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 14px;\n"], ["\n  font-family: ", ";\n  font-size: 14px;\n"])), theme_1["default"].fontFamily);
exports.Td = styled_components_1["default"].td(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  padding-bottom: 12px;\n  vertical-align: top;\n"], ["\n  padding-bottom: 12px;\n  vertical-align: top;\n"])));
exports.Column = styled_components_1["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
exports.AssetPropertiesColumn = (0, styled_components_1["default"])(exports.Column)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n\tmargin-left: ", ";\n"], ["\n\tmargin-left: ", ";\n"])), function (_a) {
    var hasImage = _a.hasImage;
    return hasImage ? "16px" : "0";
});
exports.MenuColumn = (0, styled_components_1["default"])(exports.Column)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  margin-left: auto;\n"], ["\n  margin-left: auto;\n"])));
exports.MoreText = styled_components_1["default"].span(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: ", ";\n  margin-left: 12px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n  font-weight: ", ";\n  margin-left: 12px;\n"])), theme_1["default"].colors.blueTeal, theme_1["default"].fontWeight.bold);
exports.StyledTooltip = (0, styled_components_1["default"])(Tooltip_1["default"])(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  .tooltip {\n    color: inherit;\n    font-weight: inherit;\n  }\n"], ["\n  .tooltip {\n    color: inherit;\n    font-weight: inherit;\n  }\n"])));
exports.StyledImg = styled_components_1["default"].img(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  border: 2px solid ", ";\n  object-fit: cover;\n"], ["\n  border: 2px solid ", ";\n  object-fit: cover;\n"])), theme_1["default"].colors.gray200);
exports.RoundBackground = styled_components_1["default"].div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  align-items: center;\n  cursor: ", ";\n  background-color: ", ";\n  border-radius: 22px;\n  display: flex;\n  height: 40px;\n  justify-content: center;\n\topacity: ", ";\n\tpointer-events: ", ";\n  width: 40px;\n"], ["\n  align-items: center;\n  cursor: ", ";\n  background-color: ", ";\n  border-radius: 22px;\n  display: flex;\n  height: 40px;\n  justify-content: center;\n\topacity: ", ";\n\tpointer-events: ", ";\n  width: 40px;\n"])), function (_a) {
    var disabled = _a.disabled;
    return (!disabled ? "pointer" : "auto");
}, theme_1["default"].colors.blueTeal, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 0.5 : 1);
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "none" : "");
});
exports.StyledAnchor = styled_components_1["default"].a(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 16px;\n  word-break: break-all;\n"], ["\n  color: ", ";\n  font-size: 16px;\n  word-break: break-all;\n"])), theme_1["default"].colors.blueTeal);
// Icons
var iconStyle = "\n\t&.MuiSvgIcon-root {\n\t\tcolor: white;\n\t\theight: 16px;\n\t\twidth: 16px;\n\t}\t\n";
exports.StyledImageIcon = (0, styled_components_1["default"])(Image_1["default"])(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), iconStyle);
exports.StyledVideoIcon = (0, styled_components_1["default"])(Videocam_1["default"])(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), iconStyle);
exports.StyledLinkIcon = (0, styled_components_1["default"])(Link_1["default"])(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), iconStyle);
exports.StyledDocumentIcon = (0, styled_components_1["default"])(InsertDriveFile_1["default"])(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), iconStyle);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25;
