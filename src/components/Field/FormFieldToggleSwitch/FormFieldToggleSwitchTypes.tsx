import { FieldDefBase } from "@root/components/Field";

export type ToggleSwitchInputSettings = {
	toggleLabel?: string;
};

export type FieldDefToggleSwitchData = boolean;

export type FieldDefToggleSwitch = FieldDefBase<"toggleSwitch", ToggleSwitchInputSettings, FieldDefToggleSwitchData>;
