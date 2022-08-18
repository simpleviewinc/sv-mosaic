import * as React from "react";
// Components
import Tooltip from "../Tooltip";
import { StyledIconButton } from "./IconButton.styled";
const IconButton = (props) => {
    const { className, disabled = false, icon, tooltipText, onClick } = props;
    const MaterialIcon = icon;
    return tooltipText && !disabled ? (React.createElement(Tooltip, { text: tooltipText },
        React.createElement(StyledIconButton, { className: className, disabled: disabled, disableRipple: true, onClick: onClick },
            React.createElement(MaterialIcon, { "data-testid": 'icon-button-test' })))) : (React.createElement(StyledIconButton, { className: className, disabled: disabled, disableRipple: true, onClick: onClick },
        React.createElement(MaterialIcon, { "data-testid": 'icon-button-test' })));
};
export default IconButton;
