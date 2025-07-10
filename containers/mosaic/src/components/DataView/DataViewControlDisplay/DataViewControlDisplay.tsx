import * as React from "react";
import { memo } from "react";

import type { DataViewControlDisplayProps } from "./DataViewControlDisplayTypes";

import Button from "../../Button";
import { StyledSpan } from "./DataViewControlDisplay.styled";
import testIds from "@root/utils/testIds";

const attrs = { "data-testid": testIds.DATA_VIEW_DISPLAY_CONTROL };

function DataViewControlDisplay(props: DataViewControlDisplayProps) {
	const activeDisplay = props.displayOptions.find(val => val.name === props.display);
	const Icon = activeDisplay.mIcon;

	const options = props.displayOptions.map(val => {
		return {
			value : val.name,
			label : val.label,
			mIcon : val.mIcon,
		};
	});

	return (
		<StyledSpan>
			<Button
				variant="text"
				intent="secondary"
				mIcon={Icon}
				iconPosition="right"
				menuItems={options}
				menuValue={props.display}
				menuOnChange={props.onDisplayChange}
				attrs={attrs}
			/>
		</StyledSpan>
	);
}

export default memo(DataViewControlDisplay);
