import type { ReactElement } from "react";
import set from "lodash/fp/set";

import React, { memo, useCallback, useContext, useEffect, useMemo } from "react";

import type { AddressFieldInputSettings } from "../AddressTypes";
import type { MosaicFieldProps } from "../../FieldTypes";
import type { MosaicLabelValue } from "@root/types";

import FormFieldDropdown from "../../FormFieldDropdown";
import FieldWrapper from "@root/components/FieldWrapper";
import { FormContext } from "@root/components/Form/FormContext";
import get from "lodash/get";

function AddressStateField(props: MosaicFieldProps<"dropdown", AddressFieldInputSettings, MosaicLabelValue>): ReactElement {
	const { fieldDef, path } = props;
	const { inputSettings } = fieldDef;
	const { getOptionsStates } = inputSettings;

	const { state, methods } = useContext(FormContext);
	const { addHook } = methods;
	const country = useMemo(() => get(state.data, [...(path || []), "country"]), [state, path]);

	const getOptions = useCallback(async () => {
		if (!country) {
			return [];
		}

		return getOptionsStates(country.value);
	}, [country, getOptionsStates]);

	useEffect(() => addHook("setFieldValueData", ({ data, internalData, ...rest }) => {
		if (
			rest.name !== "country" ||
			rest.path.join(".") !== (path || []).join(".")
		) {
			return;
		}

		return {
			data: set([...(path || []), "state"], undefined, data),
			internalData: set([...(path || []), "state"], undefined, internalData),
		};
	}), [addHook, path]);

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
			path={path}
			methods={props.methods}
			disabled={props.disabled}
			useRealLabel
			skeleton={props.skeleton}
		>
			<FormFieldDropdown
				{...props}
				fieldDef={{
					...fieldDef,
					inputSettings: {
						...inputSettings,
						options: getOptions,
					},
				}}
			/>
		</FieldWrapper>
	);
}

export default memo(AddressStateField);
