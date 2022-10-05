import React from "react";
// import jsvalidator from "jsvalidator";

import Button from "../Button";
import ButtonRow from "../ButtonRow";
import { useMosaicTranslation } from "@root/i18n";
import { StyledWrapper, StyledButtonRow } from "./DataViewFilterDropdownButtons.styled";

interface DataViewFilterDropdownButtonsProps {
	onClear?: any;
	onCancel?: any;
	disableApply?: any;
	onApply?: any;
}
// interface DataViewFilterDropdownButtons {
// 	onClear: () => void;
// 	onCancel: () => void;
// 	disableApply?: boolean;
// 	onApply: () => void
// }

//TODO PROPS
function DataViewFilterDropdownButtons(props: DataViewFilterDropdownButtonsProps) {
	// jsvalidator.validate(props, {
	// 	type : "object",
	// 	schema : [
	// 		{
	// 			name : "onClear",
	// 			type : "function"
	// 		},
	// 		{
	// 			name : "onCancel",
	// 			type : "function"
	// 		},
	// 		{
	// 			name : "onApply",
	// 			type : "function"
	// 		},
	// 		{
	// 			name : "disableApply",
	// 			type : "boolean"
	// 		}
	// 	],
	// 	allowExtraKeys : false,
	// 	throwOnInvalid : true
	// });

	const { t } = useMosaicTranslation();

	return (
		<StyledWrapper>
			<ButtonRow>
				<Button label={t("mosaic:common.clear")} color="black" variant="text" onClick={props.onClear}/>
			</ButtonRow>
			<StyledButtonRow>
				<Button label={t("mosaic:common.cancel")} color="black" variant="text" onClick={props.onCancel}/>
				<Button label={t("mosaic:common.apply")} color="teal" variant="text" onClick={props.onApply} disabled={ (props.disableApply !== undefined) ? props.disableApply : false }/>
			</StyledButtonRow>
		</StyledWrapper>
	)
}

export default DataViewFilterDropdownButtons;
