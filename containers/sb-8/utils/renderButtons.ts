import type { ButtonProps } from "@root/components/Button";
import type { FormHandleSubmit } from "@root/components/Form/useForm/types";

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
		onClick: handleSubmit(({ data, activeFields }) => alert(`Form submitted with the following data: ${JSON.stringify(data, null, " ")}\nActive fields: ${JSON.stringify(activeFields, null, "")}`)),
		color: "yellow",
		variant: "contained",
		show: show.showSave,
	},
];
