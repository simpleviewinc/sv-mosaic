import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

// Utils
import { SectionDef, useForm } from "@root/components/Form";

// Components
import Form from "@root/components/Form";

// Types
import { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "@root/components/Form/stories/utils";
import { ButtonProps } from "@root/components/Button";

export default {
	title: "Components/Form",
	decorators: [withKnobs],
};

const sections: SectionDef[] = [
	{
		title: "Other",
		fields: [
			[["age"]],
		],
	},
	{
		title: "Name",
		fields: [
			[["lastName"]],
			[["firstName"]],
		],
	},
];

export const QuickSubmit = (): ReactElement => {
	const useSections = boolean("Use Sections", false);

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
				{
					name: "age",
					label: "Age",
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
				sections={useSections ? sections : undefined}
				onSubmit={onSubmit}
				autoFocus
			/>
		</div>
	);
};
