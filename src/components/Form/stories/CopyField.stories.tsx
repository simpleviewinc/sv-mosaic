import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

// Utils
import { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";

// Components
import Form from "../Form";

// Types
import { FieldDef } from "@root/components/Field";

export default {
	title: "Components/Form",
	decorators: [withKnobs],
};

const ORIGINAL_BODY_MARGIN = document.body.style.margin;

export const CopyField = (): ReactElement => {
	const controller = useForm();
	const { state, methods } = controller;

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const showState = boolean("Show state", false);

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
			methods.setFieldValue({ name: "slug", value: transformedLabel });
		}
	}, [methods, state.data.name, state.touched]);

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<div style={{ height: "100vh" }}>
				<Form
					{...controller}
					buttons={renderButtons(methods)}
					title="Validators story"
					fields={fields}
				/>
			</div>
		</>
	);
};
