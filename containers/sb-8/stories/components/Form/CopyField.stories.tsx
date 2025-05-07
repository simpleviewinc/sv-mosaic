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

const ORIGINAL_BODY_MARGIN = document.body.style.margin;

export const CopyField = ({ showState }: typeof CopyField.args): ReactElement => {
	const controller = useForm();
	const { state, methods: { setFieldValue }, handleSubmit } = controller;

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const fields = useMemo(
		() : FieldDef[] =>
			[
				{
					name: "name",
					label: "Name",
					type: "text",
					required: true,
				},
				{
					name: "slug",
					label: "Slug",
					type: "text",
					required: true,
					helperText: "The text for this field will be populated with a slugified version the name field, but only if this field hasn't been touched",
				},
			],
		[],
	);

	useEffect(() => {
		if (!state.touched.slug) {
			const transformedLabel = state.data.name?.trim().toLowerCase().replace(/ {1,}/g, "_").replace(/[^a-z_]/g, "");
			setFieldValue({ name: "slug", value: transformedLabel });
		}
	}, [setFieldValue, state.data.name, state.touched]);

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

CopyField.args = {
	showState: false,
};

CopyField.argTypes = {
	showState: {
		name: "Show state",
	},
};
