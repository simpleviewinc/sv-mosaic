import * as React from "react";
import { memo, useMemo, useCallback } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { default as MenuSelect } from "../MenuSelect";
import Button from "../Button";
import theme from "../../theme";
function DataViewLimit(props) {
    const onChange = useCallback(function (val) {
        props.onLimitChange({ limit: Number(val) });
    }, [props.onLimitChange]);
    const options = useMemo(function () {
        return props.options.map(val => {
            return {
                label: val.toString(),
                value: val.toString()
            };
        });
    }, [props.options]);
    const menuContent = (React.createElement(MenuSelect, { options: options, onChange: onChange, value: props.limit.toString() }));
    return (React.createElement(Button, { color: "black", label: props.limit.toString(), variant: "text", size: "small", iconPosition: "right", mIcon: ExpandMoreIcon, mIconColor: theme.colors.gray600, menuContent: menuContent }));
}
export default memo(DataViewLimit);
