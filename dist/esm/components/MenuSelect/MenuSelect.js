import * as React from "react";
import { Fragment, useContext } from "react";
import { MenuBaseContext } from "../MenuBase";
import MenuItem from "../MenuItem";
export default function MenuSelect(props) {
    const menuContext = useContext(MenuBaseContext);
    const options = [
        ...props.options
    ];
    if (props.placeholder !== undefined) {
        options.unshift({
            label: React.createElement("i", null, props.placeholder),
            value: ""
        });
    }
    const menuItems = options.map(val => {
        const onClick = function () {
            props.onChange(val.value);
            menuContext.onClose();
        };
        const selected = val.value === props.value;
        return (React.createElement(MenuItem, { key: val.value, mIcon: val.mIcon, color: val.color, label: val.label, selected: selected, onClick: onClick }));
    });
    return (React.createElement(Fragment, null, menuItems));
}
