import type { FieldIsActive } from "../types";

import { getToggle, wrapToggle } from "@root/utils/toggle";
import { stateFromStable } from "../utils";
import getField from "./getField";

const fieldIsActive: FieldIsActive = ({
	name,
	path,
	stable,
}) => {
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
};

export default fieldIsActive;
