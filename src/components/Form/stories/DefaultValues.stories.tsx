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

export const DefaultValues = (): ReactElement => {
	const controller = useForm();
	const { state, dispatch } = controller;

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
					name: "required",
					label: "Required",
					type: "text",
					required: true,
					defaultValue: "Passing default value",
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
					buttons={renderButtons(dispatch)}
					title="Validators story"
					fields={fields}
				/>
			</div>
		</>
	);
};
