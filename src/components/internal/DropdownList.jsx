import React from "react";
import jsvalidator from "jsvalidator";

import Dropdown from "./Dropdown.jsx";

function DropdownList(props) {
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
							name : "name",
							type : "string",
							required : true
						},
						{
							name : "label",
							type : "string",
							required : true
						},
						{
							name : "onClick",
							type : "function",
							required : true
						}
					],
					allowExtraKeys : false
				}
			}
		],
		allowExtraKeys : false
	});
	
	const itemsDom = props.items.map(item => {
		function onClick() {
			console.log("CLICKED", item);
		}
		
		return (
			<li key={item.name} onClick={onClick}>{item.label}</li>
		)
	});
	
	return (
		<Dropdown>{itemsDom}</Dropdown>
	)
}

export default DropdownList;