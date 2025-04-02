const args = <T = unknown>({ prepopData }: { prepopData?: T } = {}) => ({
	label: "Label",
	hideLabel: false,
	disabled: false,
	required: false,
	prepop: false,
	prepopData,
	instructionText: "Instruction text",
	forceInstructionTooltip: false,
	helperText: "Helper text",
});

const argTypes = {
	label: {
		name: "Label",
	},
	hideLabel: {
		name: "Hide Label",
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
	prepop: {
		name: "Prepopulate",
	},
	prepopData: {
		name: "Prepopulate Data",
		if: { arg: "prepop" },
	},
	instructionText: {
		name: "Instruction Text",
	},
	forceInstructionTooltip: {
		name: "Force Instruction Tooltip",
	},
	helperText: {
		name: "Helper Text",
	},
};

export const commonFieldControls = {
	args,
	argTypes,
};
