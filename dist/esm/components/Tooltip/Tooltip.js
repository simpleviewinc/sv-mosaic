import * as React from "react";
import { StyledAdvancedTooltip, StyledDefaultTooltip } from "./Tooltip.styled";
const Tooltip = (props) => {
    const { className, text = "", children, open, onClose, onOpen, type, placement = "top-start" } = props;
    return type !== "advanced" ? (React.createElement(StyledDefaultTooltip, { open: open, onClose: onClose, onOpen: onOpen, title: text, PopperProps: {
            disablePortal: true,
        }, "data-testid": 'tooltip-test-id' }, children)) : (React.createElement(StyledAdvancedTooltip, { className: className, open: open, onClose: onClose, onOpen: onOpen, title: text, arrow: true, placement: placement, PopperProps: {
            disablePortal: true,
        }, "data-testid": 'tooltip-test-id' }, children));
};
export default Tooltip;
