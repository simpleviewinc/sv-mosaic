import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

// Utils
import { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";

// Components
import Form from "@root/components/Form";

// Types
import { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "@root/components/Form/stories/utils";

export default {
	title: "Components/Form",
	decorators: [withKnobs],
};

export const ConditionalFields = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;
	const KEY_PHRASE = "SHOW";

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
					name: "dependency",
					label: "Dependency",
					type: "text",
					instructionText: `Type "${KEY_PHRASE}" to show another field`,
					required: true,
				},
				{
					name: "dependent",
					label: "Dependent",
					type: "text",
					helperText: state.data.text2,
					show: ({ data }) => {
						return data?.dependency === KEY_PHRASE;
					},
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
				/>
			</div>
		</>
	);
};
