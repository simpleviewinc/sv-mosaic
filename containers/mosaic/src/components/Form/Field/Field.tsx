import React, { memo, useCallback, useContext, useMemo, useRef } from "react";
import get from "lodash/get";

import type { FieldConfig, FieldDef } from "@root/components/Field";
import type { FieldProps } from "./FieldTypes";

import getFieldConfig from "@root/utils/form/getFieldConfig";
import { sanitizeFieldSize } from "@root/components/Field/fieldUtils";
import FieldWrapper, { CustomFieldWrapper } from "@root/components/FieldWrapper";
import { useWrappedToggle } from "@root/utils/toggle";
import { FormContext } from "../FormContext";

const Field = ({
	fieldsDef,
	fieldName,
	colsInRow,
	colIdx,
	rowIdx,
	sectionIdx,
	spacing,
	methods,
	skeleton,
	path,
}: FieldProps) => {
	const { state } = useContext(FormContext);
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

	const onChange = useCallback((value: any, options: any = {}) => {
		field.onChangeCb && field.onChangeCb();

		setFieldValue({
			name: field.name,
			value,
			touched: true,
			validate: options.validate,
			path,
		});
	}, [field, setFieldValue, path]);

	const onBlur = useCallback(() => {
		field.onBlurCb && field.onBlurCb();

		setFieldBlur({
			name: field.name,
			path,
		});
	}, [field, setFieldBlur, path]);

	const value = get(state.internalData, [...(path || []), field.name]);
	const error = !disabled ? state.errors[`${[...(path || []), field.name].join(".")}`] : undefined;

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
			id={`${(field.id ?? field.name)}-input`}
			skeleton={skeleton}
			path={path}
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
		field.id,
		field.name,
		skeleton,
		path,
	]);

	if (!shouldShow) {
		return null;
	}

	const fieldWrapperProps = {
		fieldDef: sanitizedFieldDef,
		path: path,
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
