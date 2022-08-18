import * as React from "react";
import { useCallback, useContext } from "react";
import { LeftNavContext } from "./LeftNavTypes";
import LeftNavItem from "./LeftNavItem";
function LeftNavItemMobile(props) {
    const { item, onOpen } = props;
    const leftNavContext = useContext(LeftNavContext);
    const onClick = useCallback((event) => {
        if (!item.items) {
            leftNavContext.onNav({ item, event });
        }
        else {
            onOpen(item.name);
        }
    }, []);
    const attrs = {
        onClick
    };
    return (React.createElement(LeftNavItem, { ...props, attrs: attrs }));
}
export default LeftNavItemMobile;
