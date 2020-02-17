import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import DrawerContent from "../DrawerContent.jsx";

function DataViewViewSaveDrawerContent(props) {
	const [state, setState] = useState({
		...props.data,
		type: (props.allowSharedViewSave === true) ? props.data.type : "mine"
	});
	
	const onSave = async function() {
		await props.onSave({
			...state
		});
		props.onClose();
	}
	
	const onSubmit = function(event) {
		event.preventDefault();
		onSave();
	}
	
	const handleChange = name => event => {
		setState({
			...state,
			[name] : event.target.value
		});
	}
	
	const handleSwitch = name => event => {
		setState({
			...state,
			type : event.target.checked ? "shared" : "mine"
		});
	}
	
	return (
		<DrawerContent
			title="Save View"
			onSave={onSave}
			onClose={props.onClose}
			onCancel={props.onClose}
			background="gray"
		>
			<form onSubmit={onSubmit} autoComplete="off">
				<FormGroup row>
					<TextField
						autoFocus={true}
						id="label"
						label="Label"
						value={state.label}
						onChange={handleChange("label")}
						fullWidth
						required
						variant="filled"
					/>
				</FormGroup>
				{
					props.allowSharedViewSave &&
					<FormGroup row>
						<FormControl margin="normal">
							<FormControlLabel
								control={
									<Switch
										checked={state.type === "shared"}
										onChange={handleSwitch("shared")}
										value="what"
										color="primary"
									/>
								}
								label="Show for all Users"
							/>
						</FormControl>
					</FormGroup>
					}
			</form>
		</DrawerContent>
	)
}

export default DataViewViewSaveDrawerContent;