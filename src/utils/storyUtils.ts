import { ButtonProps } from "@root/components/Button";
import { FormHandleSubmit } from "@root/components/Form/state/types";

export const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

export const renderButtons = (handleSubmit: FormHandleSubmit, show = { showCancel: true, showSave: true }): ButtonProps[] => [
	{
		label: "Cancel",
		onClick: onCancel,
		color: "gray",
		variant: "outlined",
		show: show.showCancel,
	},
	{
		label: "Save",
		onClick: () => handleSubmit((data) => alert("Form submitted with the following data: " + JSON.stringify(data, null, " "))),
		color: "yellow",
		variant: "contained",
		show: show.showSave,
	},
];
