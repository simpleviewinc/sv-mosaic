import React from "react";

import theme from "../utils/theme.js";
import Dialog from "../components/Dialog.jsx";

function RemoveDialog(props) {
	const title = `Delete?`;
	const text = `
		Do you really want to delete this item? This action is permanent and cannot be undone.
	`;
	
	const buttons = [
		{
			name : "cancel",
			label : "Cancel",
			border : true,
			color : theme.colors.lightGray,
			onClick : props.onCancel
		},
		{
			name : "remove",
			label : "Delete",
			border : true,
			color : theme.colors.red,
			onClick : props.onOk
		}
	]
	
	return (
		<Dialog
			title={title}
			text={text}
			buttons={buttons}
		></Dialog>
	)
}

export default RemoveDialog;