import React from "react";

import Button from "../Button";
import { useMosaicTranslation } from "@root/i18n";
import { StyledWrapper } from "./DataViewFilterDropdownButtons.styled";
import type { DataViewFilterDropdownButtonsProps } from "./DataViewFilterDropdownButtonsTypes";

function DataViewFilterDropdownButtons(props: DataViewFilterDropdownButtonsProps) {
	const { t } = useMosaicTranslation();

	return (
		<StyledWrapper>
			<Button label={t("mosaic:common.clear")} intent="secondary" variant="contained" onClick={props.onClear} />
			<Button label={t("mosaic:common.apply")} intent="primary" variant="contained" onClick={props.onApply} disabled={(props.disableApply !== undefined) ? props.disableApply : false} />
		</StyledWrapper>
	);
}

export default DataViewFilterDropdownButtons;
