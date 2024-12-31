import * as React from "react";
import type { ReactElement } from "react";
import { useEffect, useMemo } from "react";

// Utils
import { useForm } from "@root/components/Form";
import { validateEmail, validateSlow, validateNumber, validateURL } from "@root/utils/form/validators";
import { renderButtons } from "../../../utils";

// Components
import Form from "@root/components/Form";

// Types
import type { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "@root/components/Form/stories/utils";

export default {
	title: "Components/Form",
};

export const Validators = ({ showState }: typeof Validators.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "required",
					label: "Required",
					type: "text",
					required: true,
				},
				{
					name: "email",
					label: "Email",
					type: "text",
					validators: [validateEmail],
				},
				{
					name: "slow",
					label: "Slow",
					type: "text",
					validators: [validateSlow],
				},
				{
					name: "number",
					label: "Number",
					type: "text",
					validators: [validateNumber],
				},
				{
					name: "url",
					label: "URL",
					type: "text",
					validators: [validateURL],
				},
				{
					name: "startDate",
					type: "date",
					label: "Start date",
					validators: [{ fn: "validateDateRange", options: { endDateName: "endDate" } }],
					validates: ["endDate"],
				},
				{
					name: "endDate",
					type: "date",
					label: "End date",
					validators: [{ fn: "validateDateRange", options: { startDateName: "startDate" } }],
					validates: ["startDate"],
				},
				{
					name: "startDateWithTime",
					type: "date",
					label: "Start date With Time",
					validators: [{ fn: "validateDateRange", options: { endDateName: "endDateWithTime" } }],
					validates: ["endDateWithTime"],
					inputSettings: {
						showTime: true,
					},
					required: true,
				},
				{
					name: "endDateWithTime",
					type: "date",
					label: "End date With Time",
					validators: [{ fn: "validateDateRange", options: { startDateName: "startDateWithTime" } }],
					validates: ["startDateWithTime"],
					inputSettings: {
						showTime: true,
					},
					required: true,
				},
				{
					name: "minDate",
					type: "date",
					label: "Minimum Date",
					instructionText: "Enter a date on or after 12 Feb 2024",
					inputSettings: {
						minDate: new Date(2024, 1, 12, 0, 0, 0, 0),
					},
				},
				{
					name: "maxDate",
					type: "date",
					label: "Maximum Date",
					instructionText: "Enter a date on or before 25 Jun 2024",
					inputSettings: {
						maxDate: new Date(2024, 5, 25, 23, 59, 59, 999),
					},
				},
				{
					name: "dateBounds",
					type: "date",
					label: "Date boundary",
					instructionText: "Enter a date between 1 Jan 2024 and 31 Dec 2024",
					inputSettings: {
						minDate: new Date(2024, 0, 1, 0, 0, 0, 0),
						maxDate: new Date(2024, 11, 31, 23, 59, 59, 999),
					},
				},
			],
		[],
	);

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<div style={{ height: "100vh" }}>
				<Form
					{...controller}
					buttons={renderButtons(handleSubmit)}
					title="Validators story"
					fields={fields}
				/>
			</div>
		</>
	);
};

Validators.args = {
	showState: false,
};

Validators.argTypes = {
	showState: {
		name: "Show state",
	},
};
