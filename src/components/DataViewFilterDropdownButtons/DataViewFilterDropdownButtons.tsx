import React from "react";

import Button from "../Button";
import { useMosaicTranslation } from "@root/i18n";
import { StyledWrapper } from "./DataViewFilterDropdownButtons.styled";
import { DataViewFilterDropdownButtonsProps } from "./DataViewFilterDropdownButtonsTypes";

function DataViewFilterDropdownButtons(props: DataViewFilterDropdownButtonsProps) {
	const { t } = useMosaicTranslation();

	return (
		<StyledWrapper>
			<Button label={t("mosaic:common.clear")} color="black" variant="text" onClick={props.onClear} />
			<Button label={t("mosaic:common.apply")} color="yellow" variant="contained" onClick={props.onApply} disabled={(props.disableApply !== undefined) ? props.disableApply : false} />
		</StyledWrapper>
	);
}

export default DataViewFilterDropdownButtons;
