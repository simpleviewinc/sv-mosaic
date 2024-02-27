import React, { memo, useCallback, useMemo } from "react";
import { FieldDef } from "../FormTypes";
import { getFieldConfig } from "./fieldConfigMap";
import { ColFieldProps } from "./ColTypes";
import Field, { FieldConfig, sanitizeFieldSize } from "@root/components/Field";
import { useWrappedToggle } from "@root/utils/toggle";

const ColField = ({
	fieldsDef,
	fieldName,
	colsInRow,
	colIdx,
	rowIdx,
	sectionIdx,
	state,
	spacing,
	methods,
}: ColFieldProps) => {
	const field: FieldDef = useMemo(() => fieldsDef.find(({ name }) => name === fieldName), [fieldsDef, fieldName]);

	if (!field) {
		throw new Error(`No field declared for field name '${fieldName}' in section ${sectionIdx}, row ${rowIdx}, column ${colIdx}.`);
	}

	const isCustomField = typeof field.type !== "string";
	const { Component }: FieldConfig = getFieldConfig(field.type);

	if (!Component) {
		throw new Error(`Invalid type ${field.type}`);
	}

	const disabled = useWrappedToggle(field, state, "disabled", false);

	const onChange = useCallback((value: any) => {
		field.onChangeCb && field.onChangeCb();

		methods.setFieldValue({
			name: field.name,
			value,
			touched: true,
		});
	}, [field, methods]);

	const onBlur = useCallback(() => {
		field.onBlurCb && field.onBlurCb();

		methods.setFieldBlur({ name: field.name });
	}, [field, methods]);

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
	]);

	if (!shouldShow) {
		return null;
	}

	return isCustomField ? (
		children
	) : (
		<Field
			fieldDef={sanitizedFieldDef}
			value={value}
			error={error}
			colsInRow={colsInRow}
			id={field.name}
			spacing={spacing}
			methods={methods}
		>
			{children}
		</Field>
	);
};

export default memo(ColField);
