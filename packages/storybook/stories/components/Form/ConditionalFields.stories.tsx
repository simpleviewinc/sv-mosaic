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

import { ORIGINAL_BODY_MARGIN } from "@utils/dom";

export default {
	title: "Components/Form",
};

export const ConditionalFields = ({ showState }: typeof ConditionalFields.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;
	const KEY_PHRASE = "SHOW";

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

ConditionalFields.args = {
	showState: false,
};

ConditionalFields.argTypes = {
	showState: {
		name: "Show state",
	},
};
