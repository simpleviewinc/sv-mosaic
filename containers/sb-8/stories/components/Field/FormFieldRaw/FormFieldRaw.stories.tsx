import type { ReactElement } from "react";
import React, { useMemo } from "react";
import styled from "styled-components";

// Components
import Form, { useForm } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";
import { commonFieldControls, renderButtons } from "../../../../utils";

export default {
	title: "FormFields/FormFieldRaw",
};

const RawValueWrapper = styled.div`
    background-color: #aa1919;
    border: 3px solid #570202;
    color: white;
    padding: 1rem 2rem;
    border-radius: 99999em;
`;

function RawValue() {
	return (
		<RawValueWrapper>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		</RawValueWrapper>
	);
}

export const Playground = ({
	label,
	hideLabel,
	required,
	disabled,
	instructionText,
	forceInstructionTooltip,
	helperText,
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: { raw: <RawValue /> } });
	const { handleSubmit } = controller;

	const fields: FieldDef[] = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "raw",
					label,
					hideLabel,
					type: "raw",
					required,
					disabled,
					helperText,
					instructionText,
					forceInstructionTooltip,
				},
			],
		[label, hideLabel, required, disabled, helperText, instructionText, forceInstructionTooltip],
	);

	return (
		<>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Raw Field"
				fields={fields}
			/>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args(),
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
};
