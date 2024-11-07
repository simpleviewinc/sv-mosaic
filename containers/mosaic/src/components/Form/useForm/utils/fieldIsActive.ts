import type { FieldPath, FormStable } from "../types";

import { getToggle, wrapToggle } from "@root/utils/toggle";
import { stateFromStable } from "../utils";
import getField from "./getField";

interface FieldIsActiveParams {
	name: string;
	path?: FieldPath;
	stable: FormStable;
}

function fieldIsActive({
	name,
	path,
	stable,
}: FieldIsActiveParams): boolean {
	const { mounted } = stable;

	if (!mounted[name]) {
		return false;
	}

	const field = getField({ name, path, stable });

	const disabledWrapped = wrapToggle(field.disabled, stateFromStable(stable), false);
	const disabled = getToggle(disabledWrapped);

	if (disabled) {
		return false;
	}

	return true;
}

export default fieldIsActive;
