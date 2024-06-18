import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";

// Utils
import { SectionDef, useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";

// Components
import Form from "@root/components/Form";

// Types
import { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "@root/components/Form/stories/utils";

export default {
	title: "Components/Form",
};

export const ConditionalSections = ({ showState }: typeof ConditionalSections.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;
	const KEY_PHRASE = "SHOW";

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const sections = useMemo<SectionDef[]>(() => {
		return [
			{
				title: "Section 1",
				description: "Description for section 1",
				fields: [
					// row 1
					[["dependency"]],
					// row 2
					[["section_show"]],
				],
			},
			{
				title: "Section 2",
				description: "Description for section 2",
				fields: [
					[["dependent"]],
				],
				show: ({ data }) => data?.dependency === KEY_PHRASE && data?.section_show,
			},
		];
	}, []);

	const fields = useMemo(
		() : FieldDef[] =>
			[
				{
					name: "dependency",
					label: "Dependency",
					type: "text",
					instructionText: `Type "${KEY_PHRASE}" to show another field`,
					required: true,
				},
				{
					name: "section_show",
					label: "Show another section",
					type: "toggle",
					show: ({ data }) => {
						return data?.dependency === KEY_PHRASE;
					},
				},
				{
					name: "dependent",
					label: "Dependent",
					type: "text",
					required: true,
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
					title="Runtime behaviors"
					fields={fields}
					sections={sections}
				/>
			</div>
		</>
	);
};

ConditionalSections.args = {
	showState: false,
};

ConditionalSections.argTypes = {
	showState: {
		name: "Show state",
	},
};
