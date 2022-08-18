import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ButtonRow from "../ButtonRow";
import Button from "../Button";
import DataViewViewDrawer from "./DataViewViewDrawer";
import DataViewViewSaveDrawer from "./DataViewViewSaveDrawer";
import { useMosaicTranslation } from "../../i18n";
const ViewSpan = styled.span `
	display: inline-flex;
	align-items: center;
	
	& > .icon {
		margin-right: 3px;
	}

	& > p {
		margin: 0;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical; 
	}
`;
const TitleButton = styled(Button) `
	max-width: 300px;
`;
function DataViewViewControls(props) {
    const [state, setState] = useState({
        viewOpen: false,
        saveOpen: false
    });
    const { t } = useMosaicTranslation();
    const toggleViewDrawer = function () {
        setState({
            ...state,
            viewOpen: !state.viewOpen
        });
    };
    const toggleSaveDrawer = function () {
        setState({
            ...state,
            saveOpen: !state.saveOpen
        });
    };
    const ViewLabel = (React.createElement(ViewSpan, null,
        React.createElement(ViewQuiltIcon, { className: "icon" }),
        React.createElement("p", null, props.savedView.label)));
    const saveMenuItems = [
        {
            label: t("mosaic:DataView.save_as_new_view"),
            onClick: function () {
                toggleSaveDrawer();
            }
        },
        {
            label: t("mosaic:DataView.overwrite_current_view"),
            disabled: props.savedView.type === "default" || (props.savedView.type === "shared" && !props.savedViewAllowSharedViewSave),
            onClick: async function () {
                await props.savedViewCallbacks.onSave({
                    ...props.savedView,
                    state: props.savedViewState
                });
            }
        }
    ];
    const savedViewData = {
        id: undefined,
        label: "",
        type: "mine",
        state: props.savedViewState
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "right" },
            React.createElement(ButtonRow, null,
                React.createElement(Button, { mIcon: ExpandMoreIcon, iconPosition: "right", label: t("mosaic:DataView.save_as"), variant: "outlined", size: "small", color: "blue", menuItems: saveMenuItems }),
                React.createElement(TitleButton, { mIcon: ExpandMoreIcon, iconPosition: "right", label: ViewLabel, variant: "contained", size: "small", color: "lightBlue", onClick: toggleViewDrawer }))),
        React.createElement(DataViewViewSaveDrawer, { open: state.saveOpen, data: savedViewData, onClose: toggleSaveDrawer, onSave: props.savedViewCallbacks.onSave, allowSharedViewSave: props.savedViewAllowSharedViewSave }),
        React.createElement(DataViewViewDrawer, { open: state.viewOpen, onClose: toggleViewDrawer, onRemove: props.savedViewCallbacks.onRemove, onSave: props.savedViewCallbacks.onSave, onChange: props.savedViewCallbacks.onChange, onGetOptions: props.savedViewCallbacks.onGetOptions, allowSharedViewSave: props.savedViewAllowSharedViewSave })));
}
export default DataViewViewControls;
