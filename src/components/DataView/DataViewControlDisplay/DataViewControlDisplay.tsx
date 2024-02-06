import * as React from "react";
import { memo } from "react";
import { DataViewControlDisplayProps } from "./DataViewControlDisplayTypes";
import Button from "../../Button";
import { default as MenuSelect } from "../../MenuSelect";
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

	const menuContent = (
		<MenuSelect
			options={options}
			onChange={props.onDisplayChange}
			value={props.display}
		/>
	);

	return (
		<StyledSpan>
			<Button
				variant="icon"
				color="black"
				mIcon={Icon}
				iconPosition="right"
				size="small"
				menuContent={menuContent}
			/>
		</StyledSpan>
	);
}

export default memo(DataViewControlDisplay);
