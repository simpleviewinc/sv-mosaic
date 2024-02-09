import { ButtonProps } from "@root/components/Button";
import { FormMethods } from "@root/components/Form/state/types";

export const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

const onSubmit = async (methods: FormMethods) => {
	const { valid, data } = await methods.submitForm();
	if (!valid) return;

	alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
};

export const renderButtons = (methods: FormMethods, show = { showCancel: true, showSave: true }): ButtonProps[] => [
	{
		label: "Cancel",
		onClick: onCancel,
		color: "gray",
		variant: "outlined",
		show: show.showCancel,
	},
	{
		label: "Save",
		onClick: () => onSubmit(methods),
		color: "yellow",
		variant: "contained",
		show: show.showSave,
	},
];
