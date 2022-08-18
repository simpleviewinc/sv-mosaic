import * as React from "react";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "../Button";
import DataViewColumnDrawer from "./DataViewColumnDrawer";
import { useMosaicTranslation } from "../../i18n";
export default function DataViewColumnControl(props) {
    const [state, setState] = useState({
        open: false
    });
    const { t } = useMosaicTranslation();
    const gearClick = function () {
        setState({
            ...state,
            open: !state.open
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { color: "black", label: t("mosaic:DataView.columns"), variant: "icon", size: "small", mIcon: SettingsIcon, onClick: gearClick, iconPosition: "left", tooltip: "Update columns and their order." }),
        props.onChange !== undefined &&
            React.createElement(DataViewColumnDrawer, { open: state.open, columns: props.columns, allColumns: props.allColumns, onChange: props.onChange, onClose: gearClick })));
}
