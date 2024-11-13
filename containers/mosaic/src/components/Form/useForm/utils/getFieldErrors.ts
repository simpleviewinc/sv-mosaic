import type { MosaicObject } from "@root/types";
import type { FieldPath, FormStable, Validator } from "../types";

import getFieldError from "./getFieldError";

interface GetFieldErrorsParams {
	names: (string | { name: string; include: Validator["fn"][] })[];
	path?: FieldPath;
	deep?: boolean;
	stable: FormStable;
}

interface GetFieldErrorsResult {
	errors: MosaicObject<string | undefined>;
	count: number;
}

async function getFieldErrors({
	names,
	path,
	deep,
	stable,
}: GetFieldErrorsParams): Promise<GetFieldErrorsResult> {
	const list = await Promise.all(names.map(async item => {
		const { name, include } = typeof item === "object" ? item : {
			name: item,
			include: undefined,
		};

		const error = await getFieldError({ name, include, path, deep, stable });
		return [name, error];
	}));

	const errors = Object.fromEntries(list);
	const count = Object.values(errors).filter(Boolean).length;

	return { errors, count };
}

export default getFieldErrors;
