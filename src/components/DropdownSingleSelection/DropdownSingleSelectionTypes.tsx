export interface DropdownSingleSelectionProps {
	[key: string]: any;
	label: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	helperText?: string;
	instructionText?: string;
	error?: boolean;
	errorText?: string;
	size?: Sizes;
	options: {
		title: string
	}[]
}

export enum Sizes {
	xs = "100px",
	sm = "280px",
	md = "450px",
	lg = "620px",
}