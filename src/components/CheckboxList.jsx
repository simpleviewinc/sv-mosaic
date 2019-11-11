import React from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { xor } from "lodash";
import jsvalidator from "jsvalidator";

import Checkbox from "./Checkbox.jsx";

const StyledDiv = styled.div`
	& > ul {
		padding: 0;
	}
	
	& > ul > .listItem {
		padding-top: 0px;
		padding-bottom: 0px;
	}
	
	& > ul > .listItem > .listItemIcon {
		min-width: auto;
	}
`

function CheckboxList(props) {
	jsvalidator.validate(props, {
		type : "object",
		schema : [
			{
				name : "checked",
				type : "array",
				schema : {
					type : "string"
				}
			},
			{
				name : "options",
				type : "array",
				schema : {
					type : "object",
					schema : [
						{ name : "value", type : "string" },
						{ name : "label", type : "string" }
					],
					allowExtraKeys : false
				}
			},
			{
				name : "onChange",
				type : "function"
			}
		],
		allowExtraKeys : false,
		throwOnInvalid : true
	});
	
	const handleToggle = (value) => () => {
		// toggle the item in the array
		const newChecked = xor(props.checked, [value]);
		props.onChange(newChecked);
	}
	
	return (
		<StyledDiv>
			<List
				dense
			>
				{
					props.options.map(option => {
						const checked = props.checked.indexOf(option.value) !== -1;
						
						return (
							<ListItem
								className="listItem"
								key={option.value}
								dense
								button
								onClick={handleToggle(option.value)}
							>
								<ListItemIcon className="listItemIcon">
									<Checkbox
										className={checked ? "checked" : ""}
										color="default"
										edge="start"
										checked={checked}
										disableRipple
									/>
								</ListItemIcon>
								<span>{option.label}</span>
							</ListItem>
						)
					})
				}
			</List>
		</StyledDiv>
	)
}

export default CheckboxList;