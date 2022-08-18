import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { H1 } from "../Typography";
import Button from "../Button";
import ButtonRow from "../ButtonRow";
import { useMosaicTranslation } from "../../i18n";
const StyledWrapper = styled.div `
	& {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px;
	}
	
	& > .left {
		display: flex;
		align-items: center;
	}

	& > .left > h1 {
		display: inline;
		padding: 0px 50px 0px 20px;
		margin: 0;
		position: relative;
		top: -2px;
	}
`;
function DrawerTopBar(props) {
    const { t } = useMosaicTranslation();
    return (React.createElement(StyledWrapper, null,
        React.createElement("div", { className: "left" },
            React.createElement(Button, { mIcon: CloseIcon, variant: "icon", color: "black", onClick: props.onClose }),
            React.createElement(H1, null, props.title)),
        React.createElement("div", { className: "right" },
            React.createElement(ButtonRow, null,
                props.onCancel &&
                    React.createElement(Button, { label: t("mosaic:common.cancel"), color: "black", variant: "text", onClick: props.onCancel }),
                props.onSave &&
                    React.createElement(Button, { label: t("mosaic:common.save"), color: "blue", variant: "contained", onClick: props.onSave }),
                props.onApply &&
                    React.createElement(Button, { label: t("mosaic:common.apply"), color: "blue", variant: "contained", onClick: props.onApply })))));
}
export default DrawerTopBar;
