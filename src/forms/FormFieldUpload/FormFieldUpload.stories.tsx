import * as React from "react";
import { useMemo, ReactElement, useCallback, useEffect, useState } from "react";
import {
	boolean,
	withKnobs,
	text,
	number,
} from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { formActions, useForm } from "@root/components/Form";
import { onCancel, renderButtons } from "@root/utils/storyUtils";
import { UploadDef } from "./FormFieldUploadTypes";
import { nanoid } from "nanoid";

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

	const onFileDelete = ({id}) => {
		alert("DELETED FILE: " + id);
	}

	const getFormValues = useCallback(async () => {
		await new Promise(res => setTimeout(res, 1000));

		return {
			"uploadField": [
				{
					"id": "1",
					"name": "roomBlocks.xslx",
					"size": "386359 bytes",
				},
				{
					"id": "2",
					"name": "floorplan.jpg",
					"size": "282010 bytes",
				},
				{
					"id": "3",
					"name": "SV.png",
					"size": "151418 bytes",
					"url": "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_520,q_75,w_780/v1/clients/simpleview/15_bbd7902e-9b13-473b-a94e-a1347fdab277.jpg"
				},
				{
					"id": "4",
					"name": "MyHotel-AZ.png",
					"size": "1447671 bytes"
				},
				{
					"id": "5",
					"name": "opportunity.pdf",
					"size": "20842780 bytes"
				},
				{
					"id": "6",
					"name": "summit.png",
					"size": "840038 bytes",
					"url": "https://ttra.com/wp-content/uploads/2022/02/Simpleview-Summit.jpg"
				},
			],
		}
	}, []);

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
				getFormValues={loadReady && getFormValues}
				onCancel={onCancel}
			/>
		</>
	);
};
