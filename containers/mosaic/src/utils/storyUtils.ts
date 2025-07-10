import type { ButtonProps } from "@root/components/Button";
import type { FormHandleSubmit } from "@root/components/Form/useForm/types";

export const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

export const renderButtons = (handleSubmit: FormHandleSubmit, show = { showCancel: true, showSave: true }): ButtonProps[] => [
	{
		label: "Cancel",
		onClick: onCancel,
		intent: "secondary",
		variant: "contained",
		show: show.showCancel,
	},
	{
		label: "Save",
		onClick: handleSubmit(({ data, activeFields }) => alert(`Form submitted with the following data: ${JSON.stringify(data, null, " ")}\nActive fields: ${JSON.stringify(activeFields, null, "")}`)),
		intent: "primary",
		variant: "contained",
		show: show.showSave,
	},
];

const commonToggleMap = {
	Undefined: undefined,
	True: true,
	False: false,
	"Function that returns true": () => true,
	"Function that returns false": () => false,
};

export const toggleMap = {
	...commonToggleMap,
	"Array of true values": [true, true, true],
	"Array with one falsy value": [true, false, true],
	"Array of functions that return true": [() => true, () => true],
	"Array of functions, one returns false": [() => false, () => true],
};

export const toggleOptions = Object.keys(toggleMap) as (keyof typeof toggleMap)[];

export const toggleMapInverse = {
	...commonToggleMap,
	"Array of false values": [false, false, false],
	"Array with one truthy value": [false, true, false],
	"Array of functions that return false": [() => false, () => false],
	"Array of functions, one returns true": [() => true, () => false],
};

export const toggleOptionsInverse = Object.keys(toggleMapInverse) as (keyof typeof toggleMapInverse)[];
