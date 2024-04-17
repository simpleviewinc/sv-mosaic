import * as React from "react";
import { useMemo, ReactElement, useCallback, useEffect, useState } from "react";
import {
	boolean,
	withKnobs,
	text,
	select,
	number,
} from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { renderButtons } from "@root/utils/storyUtils";
import { nanoid } from "nanoid";
import { UploadFieldInputSettings } from "./FormFieldUploadTypes";

export default {
	title: "FormFields/FormFieldUpload",
	decorators: [withKnobs],
};

const initialValues = {
	uploadField: [
		{
			id: 0,
			fileUrl: "http://placekitten.com/200/300",
			thumbnailUrl: "http://placekitten.com/64/64",
			size: Math.random(),
			name: "Lipsum",
		},
		{
			id: 1,
			fileUrl: "http://placekitten.com/537/355",
			thumbnailUrl: "http://placekitten.com/65/65",
			size: Math.random(),
			name: "Lipsum",
		},
		{
			id: 2,
			fileUrl: "http://placekitten.com/642/245",
			thumbnailUrl: "http://placekitten.com/55/55",
			size: Math.random(),
			name: "Lipsum",
		},
	],
};

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit, methods: { reset } } = controller;

	const limit = select(
		"Limit",
		["No limit", 1, 2, 3],
		"No limit",
	);
	const mockDB = boolean("Prepopulate", false);
	const timeToLoad = number("Secs to upload", 2);
	const timeToDelete = number("Secs to delete", 2);
	const thumbnailUrl = text("onUploadComplete thumbail URL", "");
	const fileUrl = text("onUploadComplete file URL", "");
	const downloadUrl = text("onUploadComplete download URL", "");
	const error = text("Throw upload error", "");
	const acceptCsv = text("Comma separated accepted extensions", "");
	const maxFileSize = text("Max file size (KB)", "");
	const maxTotalSize = text("Max total size (KB)", "");
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const skeleton = boolean("Skeleton", false);
	const helperText = text("Helper text", "Helper text");
	const instructionText = text("Instruction text", "Instruction text");
	const label = text("Label", "Label");

	// One line change

	const accept = acceptCsv.trim() ? acceptCsv.split(",") : undefined;

	const [loadReady, setLoadReady] = useState(false);

	useEffect(() => {
		const resetForm = async () => {
			reset();
			setLoadReady(true);
		};
		mockDB ? resetForm() : setLoadReady(false);
	}, [reset, mockDB]);

	const onFileAdd: UploadFieldInputSettings["onFileAdd"] = useCallback(async ({ file, onChunkComplete, onUploadComplete }) => {
		for (let i = 0; i < 10; i++) {
			await new Promise(resolve => setTimeout(() =>
				resolve(
					onChunkComplete({ percent: (i + 1) * 0.1 }),
				), (timeToLoad * 1000) / 10),
			);
		}

		if (file.name === "broken_file") {
			throw new Error("This file is broken");
		}

		if (error) {
			throw new Error(error);
		}

		await onUploadComplete({
			id: nanoid(),
			name: file.name,
			size: file.size,
			thumbnailUrl: thumbnailUrl || (["image/gif", "image/jpeg", "image/png"].includes(file.type) ? URL.createObjectURL(file) : ""),
			fileUrl: fileUrl || URL.createObjectURL(file),
			downloadUrl: downloadUrl,
		});
	}, [
		timeToLoad,
		thumbnailUrl,
		fileUrl,
		downloadUrl,
		error,
	]);

	const onFileDelete = useCallback(async () => {
		await new Promise((resolve) => setTimeout(() => resolve(null), timeToDelete * 1000));
	}, [timeToDelete]);

	const getFormValues = useCallback(async () => ({
		...initialValues,
	}), []);

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
						onFileDelete,
						accept,
						maxFileSize: maxFileSize ? Number(maxFileSize) * 1000 : undefined,
						maxTotalSize: maxTotalSize ? Number(maxTotalSize) * 1000 : undefined,
					},
				},
			],
		[
			label,
			required,
			disabled,
			helperText,
			instructionText,
			limit,
			onFileAdd,
			accept,
			maxFileSize,
			maxTotalSize,
			onFileDelete,
		],
	);

	return (
		<>
			<Form
				{...controller}
				buttons={renderButtons(handleSubmit)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
				getFormValues={loadReady && getFormValues}
				skeleton={skeleton}
			/>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
		</>
	);
};
