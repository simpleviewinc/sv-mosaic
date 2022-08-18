import * as React from "react";
import { memo, useState, useMemo } from "react";
// Components
import Tooltip from "../../components/Tooltip";
import Checkbox from "../../components/Checkbox";
import MobileView from "./Views/MobileView";
import DrawerView from "./Views/DrawerView";
import ResponsiveView from "./Views/ResponsiveView";
import DesktopView from "./Views/DesktopView";
// Styles
import { StyledHelpIcon, StyledHelpIconWrapper } from "./TopComponent.styled";
const TopComponent = (props) => {
    const { buttons, description, onCancel, showActive, title, tooltipInfo, sections, view = "RESPONSIVE", sectionsRefs } = props;
    // State variables
    const [activeChecked, setActiveChecked] = useState(false);
    const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
    const handleCloseTooltip = () => {
        setTooltipIsOpen(false);
    };
    const handleOpenTooltip = () => {
        setTooltipIsOpen(true);
    };
    const handleActiveClick = () => {
        setActiveChecked(!activeChecked);
    };
    const checkbox = useMemo(() => (React.createElement(Checkbox, { label: "Active", checked: activeChecked, onClick: handleActiveClick })), [activeChecked, handleActiveClick]);
    const helpIcon = useMemo(() => (React.createElement(StyledHelpIconWrapper, { onClick: () => setTooltipIsOpen(!tooltipIsOpen), showActive: showActive, isResponsiveView: view === "RESPONSIVE" },
        React.createElement(Tooltip, { open: tooltipIsOpen, onOpen: handleOpenTooltip, onClose: handleCloseTooltip, text: tooltipInfo },
            React.createElement(StyledHelpIcon, null)))), [
        showActive,
        view,
        tooltipInfo,
        setTooltipIsOpen,
        tooltipIsOpen,
        handleOpenTooltip,
        handleCloseTooltip,
    ]);
    const RenderView = () => {
        if (view === "MOBILE")
            return (React.createElement(MobileView, { buttons: buttons, title: title, description: description, helpIcon: helpIcon, checkbox: checkbox, onCancel: onCancel, showActive: showActive, tooltipInfo: tooltipInfo, view: view }));
        if (view === "DRAWER")
            return (React.createElement(DrawerView, { title: title, onCancel: onCancel, tooltipInfo: tooltipInfo, helpIcon: helpIcon, buttons: buttons, view: view }));
        if (view === "RESPONSIVE")
            return (React.createElement(ResponsiveView, { title: title, description: description, showActive: showActive, tooltipInfo: tooltipInfo, helpIcon: helpIcon, checkbox: checkbox, buttons: buttons, sections: sections, view: view, sectionsRefs: sectionsRefs }));
        if (view === "DESKTOP" || view === "BIG_DESKTOP")
            return (React.createElement(DesktopView, { sectionsRefs: sectionsRefs, title: title, description: description, showActive: showActive, tooltipInfo: tooltipInfo, helpIcon: helpIcon, checkbox: checkbox, buttons: buttons, sections: sections, view: view }));
        return null;
    };
    return React.createElement(RenderView, null);
};
export default memo(TopComponent);
