import * as React from "react";
import type { ReactElement } from "react";
import { useEffect, useMemo } from "react";

// Utils
import { useForm } from "#mosaic/components/Form";
import { renderButtons } from "@utils";

// Components
import Form from "#mosaic/components/Form";

// Types
import type { FieldDef } from "#mosaic/components/Field";

export default {
	title: "Components/Form",
};

export const SetFormValues = (): ReactElement => {
	const controller = useForm({
		disabled: true,
		skeleton: true,
	});

	const { methods: { setFormValues }, handleSubmit } = controller;

	const fields = useMemo(
		() : FieldDef[] =>
			[
				{
					name: "firstName",
					label: "First Name",
					type: "text",
				},
			],
		[],
	);

	useEffect(() => {
		(async () => {
			await new Promise((resolve) => setTimeout(() => resolve(null), 2000));
			setFormValues({
				values: { firstName: "Fluffy" },
				skeleton: false,
				disabled: false,
			});
		})();
	}, [setFormValues]);

	return (
		<Form
			{...controller}
			buttons={renderButtons(handleSubmit)}
			title="Profile"
			description="Give us some information to understand a little more about you."
			fields={fields}
		/>
	);
};

SetFormValues.args = {};

SetFormValues.argTypes = {};
