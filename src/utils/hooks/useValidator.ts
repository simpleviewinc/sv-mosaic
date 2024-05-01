import { useEffect } from "react";
import { AddValidator } from "@root/components/Form/useForm/types";

export interface UseValidatorParams {
	name: string;
	addValidator: AddValidator;
	validator: Parameters<AddValidator>[0]["validator"];
	autoRevalidate?: boolean;
}

function useValidator({
	name,
	addValidator,
	validator,
	autoRevalidate,
}: UseValidatorParams) {
	useEffect(() => {
		const { remove } = addValidator({
			name: name,
			validator,
			validate: autoRevalidate,
		});

		return remove;
	}, [addValidator, name, validator, autoRevalidate]);
}

export default useValidator;
