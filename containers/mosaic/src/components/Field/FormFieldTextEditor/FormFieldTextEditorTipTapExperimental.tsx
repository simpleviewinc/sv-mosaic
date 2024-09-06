import React from "react";
import FieldWrapper from "@root/components/FieldWrapper";
import { FormFieldTextEditorTipTap } from "./FormFieldTextEditorTipTap";
import { FieldDef } from "../FieldTypes";

/**
 * TODO: Remove once tip tap field is stable
 */
export function isTipTapField(type: FieldDef["type"]) {
	return typeof type === "function" && type.name === "FormFieldTextEditorTipTapExperimental";
}

export function FormFieldTextEditorTipTapExperimental(props: any) {
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
