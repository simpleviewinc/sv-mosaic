import * as React from "react";
import MenuBase from "../MenuBase";
export default function FilterSingleSelectContent(props) {
    return (React.createElement(MenuBase, { anchorEl: props.anchorEl, open: Boolean(props.anchorEl), onClose: props.onClose }, props.children));
}
