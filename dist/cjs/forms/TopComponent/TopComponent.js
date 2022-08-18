"use strict";
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
// Components
var Tooltip_1 = __importDefault(require("../../components/Tooltip"));
var Checkbox_1 = __importDefault(require("../../components/Checkbox"));
var MobileView_1 = __importDefault(require("./Views/MobileView"));
var DrawerView_1 = __importDefault(require("./Views/DrawerView"));
var ResponsiveView_1 = __importDefault(require("./Views/ResponsiveView"));
var DesktopView_1 = __importDefault(require("./Views/DesktopView"));
// Styles
var TopComponent_styled_1 = require("./TopComponent.styled");
var TopComponent = function (props) {
    var buttons = props.buttons, description = props.description, onCancel = props.onCancel, showActive = props.showActive, title = props.title, tooltipInfo = props.tooltipInfo, sections = props.sections, _a = props.view, view = _a === void 0 ? "RESPONSIVE" : _a, sectionsRefs = props.sectionsRefs;
    // State variables
    var _b = (0, react_1.useState)(false), activeChecked = _b[0], setActiveChecked = _b[1];
    var _c = (0, react_1.useState)(false), tooltipIsOpen = _c[0], setTooltipIsOpen = _c[1];
    var handleCloseTooltip = function () {
        setTooltipIsOpen(false);
    };
    var handleOpenTooltip = function () {
        setTooltipIsOpen(true);
    };
    var handleActiveClick = function () {
        setActiveChecked(!activeChecked);
    };
    var checkbox = (0, react_1.useMemo)(function () { return (React.createElement(Checkbox_1["default"], { label: "Active", checked: activeChecked, onClick: handleActiveClick })); }, [activeChecked, handleActiveClick]);
    var helpIcon = (0, react_1.useMemo)(function () { return (React.createElement(TopComponent_styled_1.StyledHelpIconWrapper, { onClick: function () { return setTooltipIsOpen(!tooltipIsOpen); }, showActive: showActive, isResponsiveView: view === "RESPONSIVE" },
        React.createElement(Tooltip_1["default"], { open: tooltipIsOpen, onOpen: handleOpenTooltip, onClose: handleCloseTooltip, text: tooltipInfo },
            React.createElement(TopComponent_styled_1.StyledHelpIcon, null)))); }, [
        showActive,
        view,
        tooltipInfo,
        setTooltipIsOpen,
        tooltipIsOpen,
        handleOpenTooltip,
        handleCloseTooltip,
    ]);
    var RenderView = function () {
        if (view === "MOBILE")
            return (React.createElement(MobileView_1["default"], { buttons: buttons, title: title, description: description, helpIcon: helpIcon, checkbox: checkbox, onCancel: onCancel, showActive: showActive, tooltipInfo: tooltipInfo, view: view }));
        if (view === "DRAWER")
            return (React.createElement(DrawerView_1["default"], { title: title, onCancel: onCancel, tooltipInfo: tooltipInfo, helpIcon: helpIcon, buttons: buttons, view: view }));
        if (view === "RESPONSIVE")
            return (React.createElement(ResponsiveView_1["default"], { title: title, description: description, showActive: showActive, tooltipInfo: tooltipInfo, helpIcon: helpIcon, checkbox: checkbox, buttons: buttons, sections: sections, view: view, sectionsRefs: sectionsRefs }));
        if (view === "DESKTOP" || view === "BIG_DESKTOP")
            return (React.createElement(DesktopView_1["default"], { sectionsRefs: sectionsRefs, title: title, description: description, showActive: showActive, tooltipInfo: tooltipInfo, helpIcon: helpIcon, checkbox: checkbox, buttons: buttons, sections: sections, view: view }));
        return null;
    };
    return React.createElement(RenderView, null);
};
exports["default"] = (0, react_1.memo)(TopComponent);
