import * as React from "react";
import { useMemo, ReactElement } from "react";
import {
	boolean,
	withKnobs,
	text,
	number,
} from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { onCancel, renderButtons } from "@root/utils/storyUtils";
import { UploadDef } from "./FormFieldUploadTypes";

export default {
	title: "FormFields/FormFieldUpload",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const { state, dispatch	} = useForm();

	const limit = number("Limit", undefined);
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const label = text("Label", "Label");
	const error = boolean("Trigger errors when loading", true);

	const onFileAdd = async ({blob, onChunkComplete, onUploadComplete, onError}) => {
		let chunk = 1;
		const chunkInterval = setInterval(async () => {
			await onChunkComplete({percent: chunk * .25});
			chunk++;
			if (chunk > 4) clearInterval(chunkInterval);
		}, 750);

		if (error && Math.random() < 0.5) {
			await onError("File size exceeded");
			return;
		}

		await onUploadComplete({
			id: blob.lastModified,
			name: blob.name,
			size: `${blob.size} bytes`,
			url: Math.random() < 0.5 ? URL.createObjectURL(blob) : undefined
		});
	};

	const onFileDelete = ({id}) => {
		console.log("file deleted", id);
	}

	const fields = useMemo(
		() =>
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
						limit,
						onFileAdd,
						onFileDelete
					}
				},
			] as FieldDef<UploadDef>[],
		[
			label,
			required,
			disabled,
			helperText,
			instructionText,
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
				onCancel={onCancel}
			/>
		</>
	);
};
