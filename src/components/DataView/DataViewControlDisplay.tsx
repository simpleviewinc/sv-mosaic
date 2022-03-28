import * as React from "react";
import { memo } from "react";
import styled from "styled-components";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { DataViewControlDisplayProps } from "./DataViewTypes";
import Button from "../Button";
import { default as MenuSelect } from "../MenuSelect";
import theme from "../../utils/theme";

const StyledSpan = styled.span`
	& .labelIcon {
		font-size: ${theme.iconFontSize};
	}
`

function DataViewControlDisplay(props: DataViewControlDisplayProps) {
	const activeDisplay = props.displayOptions.find(val => val.name === props.display);
	const Icon = activeDisplay.mIcon;

	const options = props.displayOptions.map(val => {
		return {
			value : val.name,
			label : val.label,
			mIcon : val.mIcon,
		}
	});

	const menuContent = (
		<MenuSelect
			options={options}
			onChange={props.onDisplayChange}
			value={props.display}
		/>
	)
	
	return (
		<StyledSpan>
			<Button
				variant="text"
				color="black"
				label={<Icon/>}
				iconPosition="right"
				size="small"
				mIcon={ExpandMoreIcon}
				mIconColor={theme.colors.gray600}
				menuContent={menuContent}
			/>
		</StyledSpan>
	)
}

export default memo(DataViewControlDisplay);