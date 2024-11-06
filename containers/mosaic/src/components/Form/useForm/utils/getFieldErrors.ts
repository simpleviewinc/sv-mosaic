import type { GetFieldErrors } from "../types";

import getFieldError from "./getFieldError";

const getFieldErrors: GetFieldErrors = async ({
	names,
	path,
	deep,
	stable,
}) => {
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
};

export default getFieldErrors;
