import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";

// Utils
import { useForm } from "@root/components/Form";
import { required } from "@root/components/Form/validators";
import { renderButtons } from "../../../utils";

// Components
import Form from "@root/components/Form";

// Types
import { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "@root/components/Form/stories/utils";

export default {
	title: "Components/Form",
};

export const PerformanceWithSubmit = ({ showState }: typeof PerformanceWithSubmit.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const fields = useMemo(() : FieldDef[] => {
		const hundredFields: FieldDef[] = [];

		for (let i = 0; i < 100; i++) {
			hundredFields.push({
				name: `text${i}`,
				label: `Simple Text ${i}`,
				type: "text",
				instructionText: "testing",
				validators: [required],
			});
		}

		return hundredFields;
	}, []);

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

PerformanceWithSubmit.args = {
	showState: false,
};

PerformanceWithSubmit.argTypes = {
	showState: {
		name: "Show state",
	},
};
