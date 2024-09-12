import React from "react";

import type { FieldDef } from "../FieldTypes";

import FieldWrapper from "@root/components/FieldWrapper";
import { FormFieldTextEditorTipTap } from "./FormFieldTextEditorTipTap";

/**
 * TODO: Remove once tip tap field is stable
 */
export function isTipTapField(type: FieldDef["type"]) {
	return typeof type === "function";
}

export function FormFieldTextEditorTipTapFieldType(props: any) {
	const {
		fieldDef,
		value,
		error,
		methods,
		inputRef,
		disabled,
		skeleton,
	} = props;
	const { name } = fieldDef;

	return (
		<FieldWrapper
			fieldDef={fieldDef}
			value={value}
			error={error}
			id={name}
			methods={methods}
			inputRef={inputRef}
			disabled={disabled}
			skeleton={skeleton}
		>
			<FormFieldTextEditorTipTap
				{...props}
			/>
		</FieldWrapper>
	);
}
