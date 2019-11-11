import React from "react";
import MUIMenu from "@material-ui/core/Menu";
import MenuItem from '@material-ui/core/MenuItem';
import jsvalidator from "jsvalidator";
import styled from "styled-components";

import theme from "../utils/theme.js";

const StyledMenuItem = styled(MenuItem)`
	& > .icon {
		margin-right: 10px;
	}

	& > .label {
		font-family: ${theme.fontFamily};
	}
`

const StyledIcon = styled.div`
	display: inline-flex;
`

const iconTypes = {
	blue : styled(StyledIcon)`
		& svg {
			color: ${theme.colors.blue};
		}
	`,
	red : styled(StyledIcon)`
		& svg {
			color: ${theme.colors.red};
		}
	`
}

function Menu(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "items",
				type : "array",
				schema : {
					type : "object",
					schema : [
						{
							name : "label",
							type : "string"
						},
						{
							name : "color",
							type : "string",
							enum : ["blue", "red", "black", "gray"]
						},
						{
							name : "mIcon",
							type : "object"
						},
						{
							name : "disabled",
							type : "boolean"
						},
						{
							name : "onClick",
							type : "function"
						}
					],
					allowExtraKeys : false
				}
			},
			{
				name : "anchorEl",
				type : "object"
			},
			{
				name : "open",
				type : "boolean",
				required : true
			},
			{
				name : "onClose",
				type : "function",
				required : true
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const menuItems = props.items.map((item, i) => {
		const Icon = item.mIcon;
		
		const onClick = function() {
			item.onClick();
			props.onClose();
		}
		
		const MyIcon = item.color !== undefined ? iconTypes[item.color] : StyledIcon;
		
		return (
			<StyledMenuItem key={i} onClick={onClick} disabled={item.disabled}>
				{
					item.mIcon &&
					<MyIcon className="icon">
						<Icon/>
					</MyIcon>
				}
				<span className="label">{item.label}</span>
			</StyledMenuItem>
		)
	});
	
	return (
		<MUIMenu
			anchorEl={props.anchorEl}
			open={props.open}
			onClose={props.onClose}
		>
			{menuItems}
		</MUIMenu>
	)
}

export default Menu;