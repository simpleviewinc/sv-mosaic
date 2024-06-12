import React, { memo, useCallback, useMemo, useRef } from "react";
import { FieldDef } from "../FormTypes";
import { getFieldConfig } from "..";
import { FieldProps } from "./FieldTypes";
import { FieldConfig, sanitizeFieldSize } from "@root/components/Field";
import FieldWrapper, { CustomFieldWrapper } from "@root/components/FieldWrapper";
import { useWrappedToggle } from "@root/utils/toggle";

const Field = ({
	fieldsDef,
	fieldName,
	colsInRow,
	colIdx,
	rowIdx,
	sectionIdx,
	state,
	spacing,
	methods,
	skeleton,
}: FieldProps) => {
	const field: FieldDef = useMemo(() => fieldsDef.find(({ name }) => name === fieldName), [fieldsDef, fieldName]);

	if (!field) {
		throw new Error(`No field declared for field name '${fieldName}' in section ${sectionIdx}, row ${rowIdx}, column ${colIdx}.`);
	}

	const isCustomField = typeof field.type !== "string";
	const { Component }: FieldConfig = getFieldConfig(field.type);
	const { setFieldValue, setFieldBlur } = methods;

	if (!Component) {
		throw new Error(`Invalid type ${field.type}`);
	}

	const disabled = useWrappedToggle(field, state, "disabled", false);
	const inputRef = useRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | undefined>();

	const onChange = useCallback((value: any) => {
		field.onChangeCb && field.onChangeCb();

		setFieldValue({
			name: field.name,
			value,
			touched: true,
		});
	}, [field, setFieldValue]);

	const onBlur = useCallback(() => {
		field.onBlurCb && field.onBlurCb();

		setFieldBlur({ name: field.name });
	}, [field, setFieldBlur]);

	const value = state?.internalData[field.name];
	const error = !disabled ? state.errors[field.name] : "";

	const size = sanitizeFieldSize(
		field.size,
		field.type,
	);

	const shouldShow = useWrappedToggle(field, state, "show");

	const sanitizedFieldDef = useMemo(() => ({ ...field, size }), [field, size]);

	const children = useMemo(() => (
		<Component
			fieldDef={sanitizedFieldDef}
			name={sanitizedFieldDef.name}
			value={value}
			error={error}
			onChange={onChange}
			onBlur={onBlur}
			ref={sanitizedFieldDef.ref}
			disabled={disabled}
			methods={methods}
			inputRef={inputRef}
			id={`${field.name}-input`}
			skeleton={skeleton}
		/>
	), [
		Component,
		sanitizedFieldDef,
		value,
		error,
		onChange,
		onBlur,
		disabled,
		methods,
		field.name,
		skeleton,
	]);

	if (!shouldShow) {
		return null;
	}

	const fieldWrapperProps = {
		fieldDef: sanitizedFieldDef,
		value: value,
		error: error,
		colsInRow: colsInRow,
		id: field.name,
		spacing: spacing,
		methods: methods,
		inputRef: inputRef,
		disabled: disabled,
		skeleton: skeleton,
	};

	return isCustomField ? (
		<CustomFieldWrapper {...fieldWrapperProps}>
			{children}
		</CustomFieldWrapper>
	) : (
		<FieldWrapper {...fieldWrapperProps}>
			{children}
		</FieldWrapper>
	);
};

export default memo(Field);
