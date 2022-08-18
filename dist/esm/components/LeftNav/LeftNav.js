import * as React from "react";
import { useMemo, useCallback } from "react";
import { LeftNavContext } from "./LeftNavTypes";
import LeftNavMobile from "./LeftNavMobile";
import LeftNavDesktop from "./LeftNavDesktop";
// how long to wait onMouseLeave to hide the navigation
const leaveTimeout = 300;
// how long to wait onMouseEnter to show the navigation
const enterTimeout = 100;
// the default z-index to use for the drawer system
const defaultZIndex = 100;
function LeftNav(props) {
    var _a;
    for (const val of props.items) {
        if (val.mIcon === undefined) {
            throw new Error(`All top-level navigation items require a mIcon for proper display. '${val.name}' lacks an icon.`);
        }
    }
    const zIndex = (_a = props.zIndex) !== null && _a !== void 0 ? _a : defaultZIndex;
    const Component = props.variant === "mobile" ? LeftNavMobile : LeftNavDesktop;
    const onNav = useCallback((args) => {
        var _a, _b;
        // if the handler has onNav false, let the browser handle
        if (args.item.onNav === false) {
            return;
        }
        // if we have an href and it was a ctrl click (win) or command + click (mac) then let the browser handle it
        if (((_b = (_a = args.item) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.href) !== undefined && (args.event.ctrlKey || args.event.metaKey)) {
            // let the default browser handler take care of it
            return;
        }
        // we have determined we will handle it, so preventDefault to prevent the browser from taking over
        args.event.preventDefault();
        if (typeof args.item.onNav === "function") {
            // if the nav item has it's own onNav function
            args.item.onNav(args);
            props.onClose();
        }
        else {
            // else we all onNav for the main app to navigate
            props.onNav(args);
        }
    }, [props.onNav]);
    const contextValue = useMemo(() => {
        const context = {
            active: props.active,
            variant: props.variant,
            zIndex,
            leaveTimeout,
            enterTimeout,
            onNav
        };
        return context;
    }, [props.variant, zIndex, props.active]);
    return (React.createElement(LeftNavContext.Provider, { value: contextValue },
        React.createElement(Component, { ...props })));
}
export default LeftNav;
