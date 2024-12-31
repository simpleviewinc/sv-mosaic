import type { MosaicObject } from "@root/types";
import type { FieldPath, FormStable, Validator } from "../types";

import getFieldError from "./getFieldError";
import getFieldPaths from "./getFieldPaths";

interface GetFieldErrorsParams {
	paths?: (FieldPath | { path: FieldPath; include: Validator["fn"][] })[];
	stable: FormStable;
}

interface GetFieldErrorsResult {
	errors: MosaicObject<string | undefined>;
	count: number;
}

async function getFieldErrors({
	stable,
	paths = getFieldPaths(stable.fields),
}: GetFieldErrorsParams): Promise<GetFieldErrorsResult> {
	const list = await Promise.all(paths.map(async item => {
		const { path, include } = !Array.isArray(item) ? item : {
			path: item,
			include: undefined,
		};

		const error = await getFieldError({
			name: path.at(-1),
			include,
			path: path.slice(0, -1),
			stable,
		});

		return [path.join("."), error];
	}));

	const errors = Object.fromEntries(list);
	const count = Object.values(errors).filter(Boolean).length;

	return { errors, count };
}

export default getFieldErrors;
