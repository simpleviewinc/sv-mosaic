import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

// Utils
import { useForm } from "@root/components/Form";
import { required } from "@root/components/Form/validators";
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

export const PerformanceWithSubmit = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;
	const showState = boolean("Show state", false);

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const hundredFields = [];

	for (let i = 0; i < 100; i++) {
		hundredFields.push({
			name: `text${i}`,
			label: `Simple Text ${i}`,
			type: "text",
			instructionText: "testing",
			validators: [required],
		});
	}

	const fields = useMemo(() : FieldDef[] => hundredFields, []);

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<div style={{ height: "100vh" }}>
				<Form
					{...controller}
					buttons={renderButtons(handleSubmit)}
					fields={fields}
					title="Performance with submit"
				/>
			</div>
		</>
	);
};
