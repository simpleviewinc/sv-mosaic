import * as React from "react";
import type { ReactElement } from "react";
import { useMemo, useCallback } from "react";
import type { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { commonFieldControls, renderButtons } from "../../../../utils";
import { nanoid } from "nanoid";
import type { UploadFieldInputSettings } from "@root/components/Field/FormFieldUpload";

export default {
	title: "FormFields/FormFieldUpload",
};

export const Playground = ({
	label,
	required,
	disabled,
	instructionText,
	helperText,
	limit,
	prepop,
	prepopData,
	timeToLoad,
	timeToDelete,
	thumbnailUrl,
	fileUrl,
	downloadUrl,
	error,
	acceptCsv,
	maxFileSize,
	maxTotalSize,
}: typeof Playground.args): ReactElement => {
	const controller = useForm({ data: prepop ? prepopData : {} });
	const { state, handleSubmit } = controller;

	const accept = acceptCsv.trim() ? acceptCsv.split(",") : undefined;

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
						limit: limit === "No limit" ? undefined : Number(limit),
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
				title="Upload Field"
				fields={fields}
			/>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
		</>
	);
};

Playground.args = {
	...commonFieldControls.args,
	limit: "No limit",
	timeToLoad: 2,
	timeToDelete: 2,
	thumbnailUrl: "",
	fileUrl: "",
	downloadUrl: "",
	error: "",
	acceptCsv: "",
	maxFileSize: "",
	maxTotalSize: "",
	prepopData: {
		uploadField: [
			{
				id: 0,
				fileUrl: "https://res.cloudinary.com/simpleview/image/upload/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",
				thumbnailUrl: "https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1434940819/clients/grandrapids/Bluedoor%20Antiques-1_c08c7c71-ac14-43df-81a1-30909c362030.jpg",
				size: 2630000,
				name: "antiques.jpg",
			},
			{
				id: 1,
				fileUrl: "https://res.cloudinary.com/simpleview/image/upload/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",
				thumbnailUrl: "https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1470248934/clients/grandrapids/042_3_0916_jpeg_ff098b68-f123-4354-b615-9b8301289103.jpg",
				size: 760760,
				name: "beer-flight.jpg",
			},
			{
				id: 2,
				fileUrl: "https://res.cloudinary.com/simpleview/image/upload/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",
				thumbnailUrl: "https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1525706786/clients/grandrapids/IMG_4156_7a1894a8-6c36-43fa-87c2-f9593a9ccef2.jpg",
				size: 1.67e+7,
				name: "Bridges.jpg",
			},
		],
	},
};

Playground.argTypes = {
	...commonFieldControls.argTypes,
	limit: {
		name: "Upload Count Limit",
		control: { type: "select" },
		options: ["No limit", "1", "2", "3"],
	},
	timeToLoad: {
		name: "Seconds to Upload",
	},
	timeToDelete: {
		name: "Seconds to Delete",
	},
	thumbnailUrl: {
		name: "onUploadComplete Thumbnail URL",
	},
	fileUrl: {
		name: "onUploadComplete File URL",
	},
	downloadUrl: {
		name: "onUploadComplete Download URL",
	},
	error: {
		name: "Throw Upload Error",
	},
	acceptCsv: {
		name: "Comma Separated Accepted Extensions",
	},
	maxFileSize: {
		name: "Max File Size (KB)",
	},
	maxTotalSize: {
		name: "Max Total Size (KB)",
	},
};
