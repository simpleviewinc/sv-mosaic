import React from "react";
import FieldWrapper from "@root/components/FieldWrapper";
import { FormFieldTextEditorTipTap } from "./FormFieldTextEditorTipTap";

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
