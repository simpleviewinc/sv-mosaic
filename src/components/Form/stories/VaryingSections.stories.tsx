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

export const VaryingSections = (): ReactElement => {
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
					name: "field",
					label: "Field",
					type: "text",
				},
			],
		[],
	);

	const sections = useMemo(() => [
		{
			title: "Section 1",
			description: "Description for section 1",
			collapsed: true,
			fields: [
				// row 1
				[["field"]],
				[["field"]],
			],
		},
		{
			title: "Section 2",
			description: "Description for section 2",
			collapsed: false,
			fields: [
				// row 1
				[["field"]],
			],
		},
		{
			title: "Section 3",
			description: "Description for section 3",
			collapsed: false,
			fields: [
				// row 1
				[["field"]],
				[["field"]],
				[["field"]],
				[["field"]],
				[["field"]],
			],
		},
		...Array(10).fill(null).map((_, i) => ({
			title: `Section ${i + 4}`,
			description: `Description for section ${i + 4}`,
			collapsed: true,
			fields: [
				// row 1
				[["field"]],
				[["field"]],
				[["field"]],
				[["field"]],
				[["field"]],
			],
		})),
		{
			title: "Section 14",
			description: "Description for section 14",
			collapsed: false,
			fields: [
				// row 1
				[["field"]],
				[["field"]],
				[["field"]],
				[["field"]],
				[["field"]],
			],
		},
		{
			title: "Section 15",
			description: "Description for section 15",
			collapsed: false,
			fields: [
				// row 1
				[["field"]],
			],
		},
	], []);

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<div style={{ height: "100vh" }}>
				<Form
					{...controller}
					buttons={renderButtons(methods)}
					title="Varying Sections"
					fields={fields}
					sections={sections}
				/>
			</div>
		</>
	);
};
