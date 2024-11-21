import * as React from "react";
import type { ReactElement } from "react";
import { useEffect, useMemo } from "react";

// Utils
import { useForm } from "@root/components/Form";
import { required } from "@root/utils/form/validators";
import { renderButtons } from "../../../utils";

// Components
import Form from "@root/components/Form";

// Types
import type { FieldDef, MosaicFieldProps } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "@root/components/Form/stories/utils";
import styled, { keyframes } from "styled-components";

export default {
	title: "Components/Form",
};

const shake = keyframes`
	0% { transform: translateX(0) }
	25% { transform: translateX(5px) }
	50% { transform: translateX(-5px) }
	75% { transform: translateX(5px) }
	100% { transform: translateX(0) }
`;

const ErrorMessage = styled.div`
	background: #b95252;
	color: white;
	padding: 1rem;
	font-size: 16px;
	font-family: sans-serif;
	animation-name: ${shake};
	animation-duration: 0.5s;
	animation-iteration-count: 1;
`;

const TitleField = (props: MosaicFieldProps): React.ReactElement => {
	const { onChange, onBlur, value, error } = props;

	return (
		<>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onBlur={onBlur}
				style={{ padding: "1rem", fontSize: 24, borderRadius: 0, border: "2px dashed #ccc" }}
				placeholder="Title"
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</>
	);
};

const StoryField = (props: MosaicFieldProps): React.ReactElement => {
	const { onChange, onBlur, value, error } = props;

	return (
		<>
			<textarea
				rows={10}
				value={value}
				cols={20}
				onChange={(e) => onChange(e.target.value)}
				onBlur={onBlur}
				placeholder="Start your story here..."
				style={{ padding: "1rem", fontSize: 18, fontFamily: "serif", borderRadius: 0, border: "2px dashed #ccc" }}
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</>
	);
};

const SaveAsDraftField = (props: MosaicFieldProps): React.ReactElement => {
	const { onChange, onBlur, value, fieldDef: { label } } = props;

	return (
		<>
			<div>
				<input
					type="checkbox"
					id="vehicle1"
					name="vehicle1"
					value="Bike"
					onChange={(e) => onChange(value ? undefined : e.target.value)}
					onBlur={onBlur}
					checked={value === "Bike"}
				/>
				<label htmlFor="vehicle1">
					{label}
				</label>
			</div>
		</>
	);
};

export const CustomFields = ({ showState }: typeof CustomFields.args): ReactElement => {
	const controller = useForm();
	const { state, methods: { setFieldValue }, handleSubmit } = controller;

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
					name: "title",
					label: "Title",
					type: TitleField,
					validators: [required],
				},
				{
					name: "story",
					label: "Story",
					type: StoryField,
					validators: [required],
				},
				{
					name: "checkbox",
					label: "Save as draft",
					type: SaveAsDraftField,
				},
			],
		[],
	);

	const setText1Value = function () {
		setFieldValue({
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
					buttons={renderButtons(handleSubmit)}
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

CustomFields.args = {
	showState: false,
};

CustomFields.argTypes = {
	showState: {
		name: "Show state",
	},
};
