import * as React from "react";
import { Fragment, useContext } from "react";

import { MenuBaseContext } from "../MenuBase";
import MenuItem from "../MenuItem";
import { MenuSelectProps } from "./MenuSelectTypes";

export default function MenuSelect(props: MenuSelectProps) {
	const menuContext = useContext(MenuBaseContext);

	const options = [
		...props.options
	]

	if (props.placeholder !== undefined) {
		options.unshift({
			label : <i>{props.placeholder}</i>,
			value : ""
		})
	}

	const menuItems = options.map(val => {
		const onClick = function() {
			props.onChange(val.value);
			menuContext.onClose();
		}

		const selected = val.value === props.value;

		return (
			<MenuItem
				key={val.value}
				label={val.label}
				selected={selected}
				onClick={onClick}
			/>
		)
	})
	
	return (
		<Fragment>
			{menuItems}
		</Fragment>
	)
}