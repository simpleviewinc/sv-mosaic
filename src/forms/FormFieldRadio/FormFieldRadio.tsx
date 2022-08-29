import * as React from "react";
import { ReactElement } from "react";

// Components
import RadioButton from "@root/components/RadioButton";

// Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import { FormFieldRadioDef } from "./FormFieldRadioTypes";
import { StyledRadioGroup } from "./FormFieldRadio.styled";

const FormFieldRadio = (props: MosaicFieldProps<FormFieldRadioDef, string>): ReactElement => {
	const {
		fieldDef,
		onChange,
		value,
		onBlur,
	} = props;

	const listOfRadios = (
		<>
			{fieldDef?.inputSettings?.options.map((option) => (
				<RadioButton
					disabled={fieldDef?.disabled}
					key={option.label}
					label={option.label}
					value={option.value}
				/>
			))}
		</>
	);

	return (
		<StyledRadioGroup
			onChange={(e) => onChange && onChange(e.target.value)}
			value={value ?? ""}
			onBlur={(e) => onBlur && onBlur(e.target.value)}
		>
			{listOfRadios}
		</StyledRadioGroup>
	);
};

export default FormFieldRadio;
