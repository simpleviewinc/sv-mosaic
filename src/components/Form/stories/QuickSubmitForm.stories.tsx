import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";

// Utils
import { useForm } from "@root/components/Form";

// Components
import Form from "../Form";

// Types
import { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "./utils";
import { ButtonProps } from "@root/components/Button";

export default {
	title: "Components/Form",
};

export const QuickSubmit = (): ReactElement => {
	const controller = useForm();
	const { handleSubmit } = controller;

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
					name: "firstName",
					label: "First Name",
					type: "text",
				},
				{
					name: "lastName",
					label: "Last Name",
					type: "text",
				},
			],
		[],
	);

	const buttons = useMemo<ButtonProps[]>(() => [
		{
			label: "Save",
			color: "yellow",
			variant: "contained",
			type: "submit",
		},
	], []);

	const onSubmit = handleSubmit((data) => {
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	});

	return (
		<div style={{ height: "100vh" }}>
			<Form
				{...controller}
				buttons={buttons}
				title="Quick Submit"
				fields={fields}
				onSubmit={onSubmit}
				autoFocus
			/>
		</div>
	);
};
