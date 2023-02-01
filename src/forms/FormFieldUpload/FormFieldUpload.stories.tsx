import * as React from "react";
import { useMemo, ReactElement, useCallback, useEffect, useState } from "react";
import {
	boolean,
	withKnobs,
	text,
	select,
} from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { formActions, useForm } from "@root/components/Form";
import { onCancel, renderButtons } from "@root/utils/storyUtils";
import { nanoid } from "nanoid";
import { defaultValues } from "./uploadUtils";

export default {
	title: "FormFields/FormFieldUpload",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const { state, dispatch	} = useForm();

	const limit = select(
		"Limit",
		["No limit", 1, 2, 3],
		"No limit"
	);
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const label = text("Label", "Label");
	const error = boolean("Trigger errors when loading", true);
	const mockDB = boolean("Mock get files from DB", false);

	const [loadReady, setLoadReady] = useState(false);

	useEffect(() => {
		const resetForm = async () => {
			await dispatch(formActions.resetForm());
			setLoadReady(true);
		};
		mockDB ? resetForm() : setLoadReady(false);
	}, [mockDB]);


	const onFileAdd = async ({blob, onChunkComplete, onUploadComplete, onError}) => {
		for (let i = 0; i < 10; i++) {
			await new Promise(resolve => setTimeout(() =>
				resolve(
					onChunkComplete({percent: (i + 1) * 0.1})
				), 300)
			);
		}

		if (error && Math.random() < 0.3) {
			await onError("File size exceeded");
			return;
		}

		await onUploadComplete({
			id: nanoid(),
			name: blob.name,
			size: `${blob.size} bytes`,
			url: Math.random() < 0.7 ? URL.createObjectURL(blob) : undefined
		});
	};

	const onFileDelete = async ({id}) => {
		alert("DELETED FILE: " + id);
	}

	const getFormValues = useCallback(async () => {
		await new Promise(res => setTimeout(res, 1000));

		return defaultValues;
	}, []);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "uploadField",
					label,
					type: "upload",
					required,
					disabled,
					helperText,
					instructionText,
					inputSettings: {
						limit: limit === "No limit" ? undefined : limit,
						onFileAdd,
						onFileDelete
					}
				},
			],
		[
			label,
			required,
			disabled,
			helperText,
			instructionText,
			limit,
		]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				state={state}
				fields={fields}
				dispatch={dispatch}
				getFormValues={loadReady && getFormValues}
				onCancel={onCancel}
			/>
		</>
	);
};
