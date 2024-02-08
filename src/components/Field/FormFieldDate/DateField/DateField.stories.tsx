import * as React from "react";
import { ReactElement, useMemo } from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";
import { textIsValidDate } from "@root/utils/date";
import { DATE_FORMAT_FULL } from "@root/constants";

export default {
	title: "FormFields/FormFieldDateField",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, dispatch } = controller;

	const label = text("Label", "Date Field Picker");
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const showTime = boolean("Show time", false);
	const minDateStr = text("Minimum Date", "");

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
				},
			},
		],
		[label, required, disabled, helperText, instructionText, showTime, minDate],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				buttons={renderButtons(dispatch)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
			/>
		</>
	);
};

const getFormValues = async () => {
	return {
		dateTimePrefilled: new Date("2023-07-31T14:00:00.000Z"),
	};
};

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, dispatch } = controller;
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
				buttons={renderButtons(dispatch)}
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
