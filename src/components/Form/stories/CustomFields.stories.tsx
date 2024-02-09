import * as React from "react";
import { ReactElement, useEffect, useMemo } from "react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

// Utils
import { useForm } from "@root/components/Form";
import { required } from "../validators";
import { renderButtons } from "@root/utils/storyUtils";

// Components
import Form from "../Form";

// Types
import { FieldDef } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "./utils";

export default {
	title: "Components/Form",
	decorators: [withKnobs],
};

export const CustomFields = (): ReactElement => {
	const controller = useForm();
	const { state, methods } = controller;

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const showState = boolean("Show state", false);

	const CustomText = ({ onChange, value }: { onChange: (e: string) => void; value: string }) => {
		return <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />;
	};

	const CustomTextArea = ({ onChange, value }: { onChange: (e: string) => void; value: string }) => {
		return <textarea rows={4} value={value} cols={20} onChange={(e) => onChange(e.target.value)} />;
	};

	const CustomCheckbox = ({ onChange, value }: { onChange: (e: string) => void; value: string }) => {
		return (
			<div>
				<input
					type="checkbox"
					id="vehicle1"
					name="vehicle1"
					value="Bike"
					onChange={(e) => onChange(value ? undefined : e.target.value)}
					checked={value === "Bike"}
				/>
				<label htmlFor="vehicle1"> I have a bike</label>
				<br />
			</div>
		);
	};

	const fields = useMemo(
		() : FieldDef[] =>
			[
				{
					name: "text1",
					label: "Custom Text",
					type: CustomText,
					instructionText: "testing",
					helperText: "helper text bottom",
					validators: [required],
				},
				{
					name: "textarea",
					label: "Custom textArea",
					type: CustomTextArea,
					instructionText: "testing",
					helperText: "helper text bottom",
					validators: [required],
				},
				{
					name: "checkbox",
					label: "Custom checkbox",
					type: CustomCheckbox,
					instructionText: "testing",
					helperText: "helper text bottom",
					validators: [required],
				},
			],
		[],
	);

	const setText1Value = function () {
		methods.setFieldValue({
			name: "text1",
			value: "My New Value",
		});
	};

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<div style={{ height: "100vh" }}>
				<Form
					{...controller}
					buttons={renderButtons(methods)}
					title="Custom components"
					fields={fields}
				/>
			</div>
			<div>
				<button onClick={setText1Value}>Set Text1 Value</button>
			</div>
		</>
	);
};
