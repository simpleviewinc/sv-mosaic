import { FieldDefBase } from "@root/components/Field";

export type ToggleInputSettings = {
	toggleLabel?: string;
};

export type FieldDefToggleData = boolean;

export type FieldDefToggle = FieldDefBase<"toggle", ToggleInputSettings>;
