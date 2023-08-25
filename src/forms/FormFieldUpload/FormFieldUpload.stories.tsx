import * as React from "react";
import { useMemo, ReactElement, useCallback, useEffect, useState } from "react";
import {
	boolean,
	withKnobs,
	text,
	select,
	number
} from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { formActions, useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";
import { nanoid } from "nanoid";
import { defaultValues } from "./uploadUtils";
import { UploadFieldInputSettings } from "./FormFieldUploadTypes";

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
	const error = boolean("Trigger errors when loading", false);
	const mockDB = boolean("Mock get files from DB", false);
	const timeToLoad = number("Time to load (seconds)", 2);

	const [loadReady, setLoadReady] = useState(false);

	useEffect(() => {
		const resetForm = async () => {
			await dispatch(formActions.resetForm());
			setLoadReady(true);
		};
		mockDB ? resetForm() : setLoadReady(false);
	}, [mockDB]);

	const onFileAdd: UploadFieldInputSettings["onFileAdd"] = async ({ file, onChunkComplete, onUploadComplete }) => {
		for (let i = 0; i < 10; i++) {
			await new Promise(resolve => setTimeout(() =>
				resolve(
					onChunkComplete({ percent: (i + 1) * 0.1 })
				), (timeToLoad * 1000) / 10)
			);
		}

		if (error) {
			throw new Error("File size exceeded");
		}

		await onUploadComplete({
			id: nanoid(),
			name: file.name,
			size: `${file.size} bytes`,
			url: URL.createObjectURL(file)
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
			timeToLoad,
			error
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
			/>
		</>
	);
};
