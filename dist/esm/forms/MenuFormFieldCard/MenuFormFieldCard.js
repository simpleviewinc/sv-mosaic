import * as React from "react";
import { memo, useState } from "react";
// Components
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../components/Button";
// Styles
import { StyledMenu } from "./MenuFormFieldCard.styled";
const MenuFormFieldCard = (props) => {
    const { className, disabled, options } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMoreIconClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const closeMenuHandler = () => {
        setAnchorEl(null);
    };
    return (React.createElement("div", { className: className },
        React.createElement(Button, { "data-testid": "icon-button-test", color: "gray", variant: "icon", mIcon: MoreVertIcon, onClick: handleMoreIconClick, disabled: disabled }),
        React.createElement(StyledMenu, { anchorEl: anchorEl, anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
            }, transformOrigin: {
                vertical: "top",
                horizontal: "left",
            }, keepMounted: true, open: open, onClose: closeMenuHandler }, options === null || options === void 0 ? void 0 : options.map((option) => (React.createElement(MenuItem, { key: `label-${option.label}`, onClick: option.action }, option.label))))));
};
export default memo(MenuFormFieldCard);
