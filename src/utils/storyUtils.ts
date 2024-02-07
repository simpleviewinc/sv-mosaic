import { formActions } from "@root/components/Form";
import { ButtonProps } from "@root/components/Button";

export const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

const onSubmit = async (dispatch) => {
	const { valid, data } = await dispatch(formActions.submitForm());
	if (!valid) return;

	alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
};

export const renderButtons = (dispatch: unknown, show = { showCancel: true, showSave: true }): ButtonProps[] => [
	{
		label: "Cancel",
		onClick: onCancel,
		color: "gray",
		variant: "outlined",
		show: show.showCancel,
	},
	{
		label: "Save",
		onClick: () => onSubmit(dispatch),
		color: "yellow",
		variant: "contained",
		show: show.showSave,
	},
];
