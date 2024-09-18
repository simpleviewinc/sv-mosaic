import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";

// Utils
import { useForm } from "@root/components/Form";
import { renderButtons } from "../../../utils";

// Components
import Form from "@root/components/Form";

// Types
import { FieldDef } from "@root/components/Field";

export default {
	title: "Components/Form",
};

const ORIGINAL_BODY_MARGIN = document.body.style.margin;

export const VaryingSections = ({ showState }: typeof VaryingSections.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const fields = useMemo(
		() : FieldDef[] =>
			[
				...Array(80).fill(null).map<FieldDef>((_, i) => ({
					name: `field_${i}`,
					label: `Field ${i}`,
					type: "text",
				})),
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
				[["field_1"]],
				[["field_2"]],
			],
		},
		{
			title: "Section 2",
			description: "Description for section 2",
			collapsed: false,
			fields: [
				// row 1
				[["field_3"]],
			],
		},
		{
			title: "Section 3",
			description: "Description for section 3",
			collapsed: false,
			fields: [
				// row 1
				[["field_4"]],
				[["field_5"]],
				[["field_6"]],
				[["field_7"]],
				[["field_8"]],
			],
		},
		...Array(10).fill(null).map((_, i) => ({
			title: `Section ${i + 4}`,
			description: `Description for section ${i + 4}`,
			collapsed: true,
			fields: [
				// row 1
				[[`field_${i * 5 + 9}`]],
				[[`field_${i * 5 + 10}`]],
				[[`field_${i * 5 + 11}`]],
				[[`field_${i * 5 + 12}`]],
				[[`field_${i * 5 + 13}`]],
			],
		})),
		{
			title: "Section 14",
			description: "Description for section 14",
			collapsed: false,
			fields: [
				// row 1
				[["field_59"]],
				[["field_60"]],
				[["field_61"]],
				[["field_62"]],
				[["field_63"]],
			],
		},
		{
			title: "Section 15",
			description: "Description for section 15",
			collapsed: false,
			fields: [
				// row 1
				[["field_64"]],
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
					buttons={renderButtons(handleSubmit)}
					title="Varying Sections"
					fields={fields}
					sections={sections}
				/>
			</div>
		</>
	);
};

VaryingSections.args = {
	showState: false,
};

VaryingSections.argTypes = {
	showState: {
		name: "Show state",
	},
};
