"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var ChevronRight_1 = __importDefault(require("@mui/icons-material/ChevronRight"));
var ChevronLeft_1 = __importDefault(require("@mui/icons-material/ChevronLeft"));
var Button_1 = __importDefault(require("../Button"));
var DataViewPagerPopover_1 = __importDefault(require("./DataViewPagerPopover"));
var i18n_1 = require("../../i18n");
var StyledSpan = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: inline-flex;\n\talign-items: center;\n\twhite-space: nowrap;\n\n\t& > .pagerText { line-height: 100%; }\n"], ["\n\tdisplay: inline-flex;\n\talign-items: center;\n\twhite-space: nowrap;\n\n\t& > .pagerText { line-height: 100%; }\n"])));
function DataViewPager(props) {
    var t = (0, i18n_1.useMosaicTranslation)().t;
    var totalPages = Math.ceil(props.count / props.limit);
    var currentPage = (props.skip + props.limit) / props.limit;
    var startItem = (props.skip + 1);
    var endItem = Math.min(props.skip + props.limit, props.count);
    var skipClick = function (skip) { return function () {
        props.onSkipChange({ skip: skip });
    }; };
    var previousDisabled = currentPage === 1;
    var nextDisabled = currentPage === totalPages;
    if (totalPages === 0) {
        return null;
    }
    return (React.createElement(StyledSpan, null,
        React.createElement(Button_1["default"], { color: "black", variant: "icon", size: "small", mIcon: ChevronLeft_1["default"], onClick: skipClick(props.skip - props.limit), disabled: previousDisabled }),
        React.createElement(Button_1["default"], { color: "black", variant: "text", size: "small", tooltip: t("mosaic:DataView.jump_to_page"), label: "".concat(startItem, "-").concat(endItem, " of ").concat(props.count), popover: React.createElement(DataViewPagerPopover_1["default"], { currentPage: currentPage, totalPages: totalPages, limit: props.limit, onSkipChange: props.onSkipChange }) }),
        React.createElement(Button_1["default"], { color: "black", variant: "icon", size: "small", mIcon: ChevronRight_1["default"], onClick: skipClick(props.skip + props.limit), disabled: nextDisabled })));
}
exports["default"] = (0, react_1.memo)(DataViewPager);
var templateObject_1;
