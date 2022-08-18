import * as React from "react";
import { memo, useMemo } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ButtonRow from "../ButtonRow";
import Button from "../Button";
import { filterAction } from "./utils/bulkActionsUtils";
function DataViewActionsButtonRow(props) {
    const primaryActions = useMemo(() => {
        if (props.primaryActions === undefined) {
            return [];
        }
        return props.primaryActions.filter(action => {
            return filterAction(action, { row: props.originalRowData });
        }).map((action) => {
            const { name, show, onClick, ...buttonArgs } = action;
            const newOnClick = () => {
                onClick({ data: props.originalRowData });
            };
            return (React.createElement(Button, { ...buttonArgs, key: `primary_${name}`, attrs: { "data-mosaic-id": `action_primary_${name}` }, onClick: newOnClick }));
        });
    }, [props.primaryActions, props.originalRowData]);
    const additionalActions = useMemo(() => {
        if (props.additionalActions === undefined) {
            return [];
        }
        const additionalActions = props.additionalActions.filter(action => {
            return filterAction(action, { row: props.originalRowData });
        });
        // if no valid actions hide the dots
        if (additionalActions.length === 0) {
            return [];
        }
        return [
            React.createElement(Button, { key: "additional", color: "blue", variant: "icon", mIcon: MoreHorizIcon, attrs: { "data-mosaic-id": "additional_actions_dropdown" }, tooltip: "More actions", menuItems: additionalActions.map(action => {
                    const { name, show, onClick, ...menuArgs } = action;
                    return {
                        ...menuArgs,
                        attrs: { "data-mosaic-id": `action_additional_${name}` },
                        onClick: () => {
                            onClick({
                                data: props.originalRowData
                            });
                        }
                    };
                }) })
        ];
    }, [props.additionalActions, props.originalRowData]);
    // concat the buttons into a single row so that we have a single child allowing caching of the ButtonRow
    const buttons = useMemo(() => {
        return [
            ...primaryActions,
            ...additionalActions
        ];
    }, [primaryActions, additionalActions]);
    if (buttons.length === 0) {
        return null;
    }
    return (React.createElement(ButtonRow, null, buttons));
}
export default memo(DataViewActionsButtonRow);
