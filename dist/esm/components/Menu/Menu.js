import React from "react";
import jsvalidator from "jsvalidator";
import MenuBase from "../MenuBase";
import MenuItem from "../MenuItem";
function Menu(props) {
    jsvalidator.validate(props, {
        type: "object",
        schema: [
            {
                name: "items",
                type: "array",
                schema: {
                    type: "object",
                    schema: [
                        {
                            name: "label",
                            type: "string"
                        },
                        {
                            name: "color",
                            type: "string",
                            enum: ["blue", "red", "black"]
                        },
                        {
                            name: "mIcon",
                            type: "object"
                        },
                        {
                            name: "disabled",
                            type: "boolean"
                        },
                        {
                            name: "selected",
                            type: "boolean"
                        },
                        {
                            name: "onClick",
                            type: "function"
                        },
                        {
                            name: "attrs",
                            type: "object"
                        }
                    ],
                    allowExtraKeys: false
                }
            },
            {
                name: "anchorEl",
                type: "object"
            },
            {
                name: "open",
                type: "boolean",
                required: true
            },
            {
                name: "onClose",
                type: "function",
                required: true
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    const menuItems = props.items.map((item, i) => {
        const onClick = function () {
            item.onClick();
            props.onClose();
        };
        return (React.createElement(MenuItem, { key: i, ...item, onClick: onClick }));
    });
    return (React.createElement(MenuBase, { anchorEl: props.anchorEl, open: props.open, onClose: props.onClose }, menuItems));
}
export default Menu;
