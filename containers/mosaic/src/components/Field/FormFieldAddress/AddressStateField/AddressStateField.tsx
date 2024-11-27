import type { ReactElement } from "react";

import React, { memo, useCallback, useContext, useEffect, useMemo } from "react";

import FormFieldDropdown from "../../FormFieldDropdown";
import FieldWrapper from "@root/components/FieldWrapper";
import { FormContext } from "@root/components/Form/FormContext";
import { get } from "lodash";

function AddressStateField(props): ReactElement {
	const { fieldDef, path, value } = props;
	const { inputSettings } = fieldDef;
	const { getOptionsStates } = inputSettings;

	const { state, methods } = useContext(FormContext);
	const { setFieldValue } = methods;
	const country = useMemo(() => get(state.data, [...(path || []), "country"]), [state, path]);

	const getOptions = useCallback(async () => {
		if (!country) {
			return [];
		}

		return getOptionsStates(country.value);
	}, [country, getOptionsStates]);

	/**
	 * Where "state" means geographical state, not app state:
	 *
	 * Unsets the state if the country changes and the currently
	 * selected state cannot be located in the list of states
	 * for that given country.
	 */

	useEffect(() => {
		if (!value) {
			return;
		}

		const maybeUnsetState = async () => {
			if (!country) {
				setFieldValue({
					name: "state",
					path,
					value: undefined,
				});

				return;
			}

			const availableStates = await getOptionsStates(country.value);
			const matchingState = availableStates.find(({ label }) => label.toLowerCase().includes(value.label.toLowerCase()));

			if (matchingState) {
				return;
			}

			setFieldValue({
				name: "state",
				path,
				value: undefined,
			});
		};

		maybeUnsetState();
	}, [country, path, getOptionsStates, setFieldValue, value]);

	return (
		<FieldWrapper
			error={props.error}
			id={fieldDef.name}
			fieldDef={{
				name: fieldDef.name,
				type: "addressState",
				label: fieldDef.label,
				required: fieldDef.required,
				size: fieldDef.size,
			}}
			methods={props.methods}
			disabled={props.disabled}
			useRealLabel
		>
			<FormFieldDropdown
				{...props}
				fieldDef={{
					...fieldDef,
					inputSettings: {
						...inputSettings,
						getOptions,
					},
				}}
			/>
		</FieldWrapper>
	);
}

export default memo(AddressStateField);
