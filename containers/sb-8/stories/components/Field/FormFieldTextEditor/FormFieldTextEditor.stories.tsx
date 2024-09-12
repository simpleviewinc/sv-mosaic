// BUG TO BE FIXED
import * as React from "react";
import { useMemo, useState, ReactElement } from "react";

import Form, { useForm } from "@root/components/Form";
import { FieldDef, FormFieldTextEditorTipTapFieldType, TextEditorOnImageParams, TextEditorOnLinkParams } from "@root/components/Field";
import { renderButtons } from "@root/utils/storyUtils";
import Drawer from "@root/components/Drawer";

import { MediaGalleryDrawer } from "./MediaGalleryDrawer";
import { LinkLibraryDrawer } from "./LinkLibraryDrawer";

export default {
	title: "FormFields/FormFieldTextEditor",
};

export const Playground = ({
	label,
	disabled,
	required,
	skeleton,
	instructionText,
	helperText,
	spellcheck,
	direction,
	language,
	maxCharacters,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "textEditor",
					label,
					type: "textEditor",
					required,
					inputSettings: {
						spellcheck,
						direction,
						language,
						maxCharacters,
					},
					disabled,
					helperText,
					instructionText,
				},
			],
		[
			direction,
			required,
			disabled,
			label,
			helperText,
			instructionText,
			maxCharacters,
			spellcheck,
			language,
		],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				title="Text Editor Field"
				fields={fields}
				buttons={renderButtons(handleSubmit)}
				skeleton={skeleton}
			/>
		</>
	);
};

Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
	skeleton: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	spellcheck: false,
	direction: "ltr",
	language: "en",
	maxCharacters: 100,
};

Playground.argTypes = {
	label: {
		name: "Label",
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
	skeleton: {
		name: "Skeleton",
	},
	instructionText: {
		name: "Instruction Text",
	},
	helperText: {
		name: "Helper Text",
	},
	spellcheck: {
		name: "Direction",
		control: { type: "select" },
		options: ["ltr", "rtl"],
	},
	direction: {
		name: "Direction",
	},
	language: {
		name: "Language",
	},
	maxCharacters: {
		name: "Maximum Characters",
	},
};

const fields: FieldDef[] = [
	{
		name: "spellCheck",
		label: "Text editor with spellcheck active",
		type: "textEditor",
		required: false,
		inputSettings: {
			spellcheck: true,
		},
	},
	{
		name: "ltr",
		label: "Text editor with left to right direction",
		type: "textEditor",
		required: false,
		inputSettings: {
			direction: "ltr",
		},
	},
	{
		name: "rtl",
		label: "Text editor with right to left direction",
		type: "textEditor",
		required: false,
		inputSettings: {
			direction: "rtl",
		},
	},
	{
		name: "german",
		label: "Text editor in german (de) language",
		type: "textEditor",
		required: false,
		inputSettings: {
			language: "de",
		},
	},
	{
		name: "maxChars",
		label: "Text editor with max character limit",
		type: "textEditor",
		required: false,
		inputSettings: {
			maxCharacters: 20,
		},
	},
	{
		name: "disabled",
		label: "Disabled text editor",
		type: "textEditor",
		required: false,
		disabled: true,
	},
];

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, handleSubmit } = controller;

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				title="Text Editor Kitchen Sink"
				description="This is a description example"
				fields={fields}
				buttons={renderButtons(handleSubmit)}
			/>
		</>
	);
};

export const Tiptap = ({
	label,
	disabled,
	required,
	skeleton,
	instructionText,
	helperText,
	maxCharacters,
	customImageHandler,
	customLinkHandler,
}: typeof Tiptap.args): ReactElement => {
	const controller = useForm();
	const [mediaDrawer, setMediaDrawer] = useState<null | TextEditorOnImageParams>(null);
	const [linkDrawer, setLinkDrawer] = useState<null | TextEditorOnLinkParams>(null);

	const { state, handleSubmit } = controller;

	const onClose = () => {
		setMediaDrawer(null);
		setLinkDrawer(null);
	};

	const tiptapFields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "textEditor",
					label,
					type: FormFieldTextEditorTipTapFieldType,
					required,
					inputSettings: {
						onImage: customImageHandler ? ({ updateImage, ...params }) => {
							setMediaDrawer({
								...params,
								updateImage: (params) => {
									updateImage(params);
									onClose();
								}
							});
						} : undefined,
						onLink: customLinkHandler ? ({ updateLink, ...params }) => {
							setLinkDrawer({
								...params,
								updateLink: (params) => {
									updateLink(params);
									onClose();
								}
							});
						} : undefined,
						maxCharacters,
					},
					disabled,
					helperText,
					instructionText,
				},
			],
		[
			required,
			disabled,
			label,
			helperText,
			instructionText,
			maxCharacters,
			customImageHandler,
			customLinkHandler,
		],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				{...controller}
				title="Text Editor Tiptap"
				fields={tiptapFields}
				buttons={renderButtons(handleSubmit)}
				skeleton={skeleton}
			/>
			<Drawer
				open={Boolean(mediaDrawer)}
				onClose={onClose}
			>
				{mediaDrawer && (
					<MediaGalleryDrawer
						onClose={onClose}
						{...mediaDrawer}
					/>
				)}
			</Drawer>
			<Drawer
				open={Boolean(linkDrawer)}
				onClose={onClose}
			>
				{linkDrawer && (
					<LinkLibraryDrawer
						onClose={onClose}
						{...linkDrawer}
					/>
				)}
			</Drawer>
		</>
	);
};

Tiptap.args = {
	label: "Label",
	disabled: false,
	required: false,
	skeleton: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	maxCharacters: 100,
	customImageHandler: false,
	customLinkHandler: false,
};

Tiptap.argTypes = {
	label: {
		name: "Label",
	},
	disabled: {
		name: "Disabled",
	},
	required: {
		name: "Required",
	},
	skeleton: {
		name: "Skeleton",
	},
	instructionText: {
		name: "Instruction Text",
	},
	helperText: {
		name: "Helper Text",
	},
	maxCharacters: {
		name: "Maximum Characters",
	},
	customImageHandler: {
		name: "Custom Image Handler",
	},
	customLinkHandler: {
		name: "Custom Link Handler",
	},
};
