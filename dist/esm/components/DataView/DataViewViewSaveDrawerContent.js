import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import styled from "styled-components";
import DrawerContent from "../DrawerContent";
import { useMosaicTranslation } from "../../i18n";
const StyledForm = styled.form `
	& .font16 {
		font-size: 16px;
	}
`;
const InputLabelProps = {
    className: "font16"
};
const inputProps = {
    className: "font16"
};
const classes = {
    label: "font16"
};
function DataViewViewSaveDrawerContent(props) {
    const [state, setState] = useState({
        ...props.data,
        type: (props.allowSharedViewSave === true) ? props.data.type : "mine"
    });
    const { t } = useMosaicTranslation();
    const onSave = async function () {
        await props.onSave({
            ...state
        });
        props.onClose();
    };
    const onSubmit = function (event) {
        event.preventDefault();
        onSave();
    };
    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value
        });
    };
    const handleSwitch = name => event => {
        setState({
            ...state,
            type: event.target.checked ? "shared" : "mine"
        });
    };
    return (React.createElement(DrawerContent, { title: t("mosaic:DataView.save_view"), onSave: onSave, onClose: props.onClose, onCancel: props.onClose, background: "gray" },
        React.createElement(StyledForm, { onSubmit: onSubmit, autoComplete: "off" },
            React.createElement(FormGroup, { row: true },
                React.createElement(TextField, { autoFocus: true, id: "label", label: t("mosaic:common.label"), value: state.label, onChange: handleChange("label"), fullWidth: true, required: true, variant: "filled", InputLabelProps: InputLabelProps, inputProps: inputProps })),
            props.allowSharedViewSave &&
                React.createElement(FormGroup, { row: true },
                    React.createElement(FormControl, { margin: "normal" },
                        React.createElement(FormControlLabel, { classes: classes, control: React.createElement(Switch, { checked: state.type === "shared", onChange: handleSwitch("shared"), value: "what", color: "primary" }), label: t("mosaic:DataView.show_for_all_users") }))))));
}
export default DataViewViewSaveDrawerContent;
