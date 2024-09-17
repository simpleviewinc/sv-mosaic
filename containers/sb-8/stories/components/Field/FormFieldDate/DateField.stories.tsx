import * as React from "react";
import { ReactElement, useMemo } from "react";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";
import { textIsValidDate } from "@root/utils/date";
import { DATE_FORMAT_FULL } from "@root/constants";

export default {
	title: "FormFields/FormFieldDateField",
};

export const Playground = ({
	label,
	required,
	skeleton,
	disabled,
	instructionText,
	helperText,
	showTime,
	minDateStr,
	defaultTime,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const minDate = minDateStr && textIsValidDate(minDateStr, DATE_FORMAT_FULL) ? new Date(
		Number(minDateStr.split("/")[2]),
		Number(minDateStr.split("/")[1]) - 1,
		Number(minDateStr.split("/")[0]),
	) : undefined;

	const fields = useMemo(
		(): FieldDef[] => [
			{
				name: "date",
				type: "date",
				label,
				required,
				disabled,
				helperText,
				instructionText,
				inputSettings: {
					showTime,
					minDate,
					defaultTime: "12:05",
				},
			},
		],
		[label, required, disabled, helperText, instructionText, showTime, minDate, defaultTime],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Date Field"
				fields={fields}
				skeleton={skeleton}
			/>
		</>
	);
};

Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
	skeleton: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	showTime: false,
	minDateStr: "",
	defaultTime: "",
};

Playground.argTypes = {
	label: {
		name: "Label",
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
	skeleton: {
		name: "Skeleton",
	},
	instructionText: {
		name: "Instruction Text",
	},
	helperText: {
		name: "Helper Text",
	},
	showTime: {
		name: "Show Time",
	},
	minDateStr: {
		name: "Minimum Date",
	},
	defaultTime: {
		name: "Default Time",
	}
};

const getFormValues = async () => {
	return {
		dateTimePrefilled: new Date("2023-07-31T14:00:00.000Z"),
	};
};

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;
	const helperText = "Helper text";
	const instructionText = "Instruction text";

	const fields: FieldDef[] = useMemo(
		() =>
			[
				{
					name: "singleDate",
					type: "date",
					label: "Single Date Calendar",
					required: false,
					disabled: false,
					helperText,
					instructionText,
					inputSettings: {
						showTime: false,
					},
				},
				{
					name: "dateTime",
					type: "date",
					label: "Date Time Input",
					required: false,
					disabled: false,
					helperText,
					instructionText,
					inputSettings: {
						showTime: true,
					},
				},
				{
					name: "dateTimePrefilled",
					type: "date",
					label: "Date Time with preset values",
					required: false,
					disabled: false,
					helperText,
					instructionText,
					inputSettings: {
						showTime: true,
					},
				},
				{
					name: "requiredDateTime",
					type: "date",
					label: "Required Single Date Calendar",
					required: true,
					disabled: false,
					helperText,
					instructionText,
					inputSettings: {
						showTime: true,
					},
				},
			],
		[],
	);

	return (
		<>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title="Date Field Calendar"
				description="This is a description example"
				fields={fields}
				getFormValues={getFormValues}
			/>
			<h3>Date.toString()</h3>
			<pre>
				{Object.keys(state.data).map((key, index) => (
					<div key={index}>
						{key}
						:
						{" "}
						{state.data[key] && state.data[key].toString()}
					</div>
				))}
			</pre>
			<h3>State</h3>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
		</>
	);
};
