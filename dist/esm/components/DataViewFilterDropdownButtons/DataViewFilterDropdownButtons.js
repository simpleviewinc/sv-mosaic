import React from "react";
import styled from "styled-components";
import jsvalidator from "jsvalidator";
import Button from "../Button";
import ButtonRow from "../ButtonRow";
import { useMosaicTranslation } from "../../i18n";
const StyledWrapper = styled.div `
	& {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
	}
`;
function DataViewFilterDropdownButtons(props) {
    jsvalidator.validate(props, {
        type: "object",
        schema: [
            {
                name: "onClear",
                type: "function"
            },
            {
                name: "onCancel",
                type: "function"
            },
            {
                name: "onApply",
                type: "function"
            },
            {
                name: "disableApply",
                type: "boolean"
            }
        ],
        allowExtraKeys: false,
        throwOnInvalid: true
    });
    const { t } = useMosaicTranslation();
    return (React.createElement(StyledWrapper, null,
        React.createElement(ButtonRow, null,
            React.createElement(Button, { label: t("mosaic:common.clear"), color: "black", variant: "text", onClick: props.onClear })),
        React.createElement(ButtonRow, null,
            React.createElement(Button, { label: t("mosaic:common.cancel"), color: "black", variant: "text", onClick: props.onCancel }),
            React.createElement(Button, { label: t("mosaic:common.apply"), color: "blue", variant: "contained", onClick: props.onApply, disabled: (props.disableApply !== undefined) ? props.disableApply : false }))));
}
export default DataViewFilterDropdownButtons;
