import * as React from "react";
import { memo } from "react";
import type { DataViewControlDisplayProps } from "./DataViewControlDisplayTypes";
import Button from "../../Button";
import { StyledSpan } from "./DataViewControlDisplay.styled";

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
				variant="icon"
				color="black"
				mIcon={Icon}
				iconPosition="right"
				size="small"
				menuItems={options}
				menuValue={props.display}
				menuOnChange={props.onDisplayChange}
			/>
		</StyledSpan>
	);
}

export default memo(DataViewControlDisplay);
