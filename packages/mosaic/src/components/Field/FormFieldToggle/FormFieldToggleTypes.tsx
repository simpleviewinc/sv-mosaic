import type { FieldDefBase } from "@root/components/Field";

export interface ToggleInputSettings {
	toggleLabel?: string;
}

export type FieldDefToggleData = boolean;

export type FieldDefToggle = FieldDefBase<"toggle", ToggleInputSettings>;
