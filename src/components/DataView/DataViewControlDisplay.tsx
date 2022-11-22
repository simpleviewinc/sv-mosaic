import * as React from "react";
import { memo } from "react";
import styled from "styled-components";
import { DataViewControlDisplayProps } from "./DataViewTypes";
import Button from "../Button";
import { default as MenuSelect } from "../MenuSelect";
import theme from "@root/theme";

const StyledSpan = styled.span`
	& .button {
		border-right: 2px solid ${theme.newColors.grey2["100"]};
		padding-right: 8px;
	}

	& .normalButton > button {
		color: ${theme.newColors.grey3["100"]};
	}

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
				menuContent={menuContent}
			/>
		</StyledSpan>
	)
}

export default memo(DataViewControlDisplay);
