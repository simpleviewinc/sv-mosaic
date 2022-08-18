import * as React from "react";
import { useContext, Fragment } from "react";
import LeftNavGroup from "./LeftNavGroup";
import { LeftNavContext } from "./LeftNavTypes";
/** Renders an array of navigation items. */
function LeftNavItems(props) {
    const leftNavContext = useContext(LeftNavContext);
    return (React.createElement(Fragment, null, props.items.map(val => {
        const Component = val.type === "group" ? LeftNavGroup : leftNavContext.ItemComponent;
        return (React.createElement(Component, { key: val.name, item: val, showLabel: props.showLabel, openName: props.openName, onOpen: props.onOpen }));
    })));
}
export default LeftNavItems;
