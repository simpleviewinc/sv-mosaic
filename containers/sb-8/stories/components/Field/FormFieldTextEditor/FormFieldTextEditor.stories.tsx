// BUG TO BE FIXED
import * as React from "react";
import type { ReactElement } from "react";
import { useMemo, useState } from "react";

import Form, { useForm } from "@root/components/Form";
import type { ControlWithProps, FieldDef, TextEditorOnImageParams, TextEditorOnLinkParams } from "@root/components/Field";
import { getDefaultExtensions } from "@root/components/Field";
import { renderButtons } from "../../../../utils";
import Drawer from "@root/components/Drawer";

import { MediaGalleryDrawer } from "./MediaGalleryDrawer";
import { LinkLibraryDrawer } from "./LinkLibraryDrawer";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { SimpleViewAlert } from "./SimpleviewAlertExtension";
import { controls } from "./controls";

export default {
	title: "FormFields/FormFieldTextEditor",
};

const customExtensionControl: ControlWithProps = {
	name: "simpleviewAlert",
	label: "Simpleview Alert",
	cmd: ({ editor }) => editor.chain().toggleSimpleviewAlert().run(),
	Icon: ChatBubbleIcon,
};

export const Playground = ({
	label,
	disabled,
	required,
	skeleton,
	instructionText,
	helperText,
	maxCharacters,
	autolink,
	customControlConfig,
	customImageHandler,
	customLinkHandler,
	customExtensionExample,
}: typeof Playground.args): ReactElement => {
	const controller = useForm();
	const [mediaDrawer, setMediaDrawer] = useState<null | TextEditorOnImageParams>(null);
	const [linkDrawer, setLinkDrawer] = useState<null | TextEditorOnLinkParams>(null);

	const { handleSubmit } = controller;

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
					type: "textEditor",
					required,
					inputSettings: {
						autolink,
						controls: [
							...customControlConfig?.length ? customControlConfig : controls,
							...customExtensionExample ? [[customExtensionControl]] : [],
						],
						extensions: customExtensionExample ? [...getDefaultExtensions(), SimpleViewAlert] : undefined,
						onImage: customImageHandler ? ({ updateImage, ...params }) => {
							setMediaDrawer({
								...params,
								updateImage: (params) => {
									updateImage(params);
									onClose();
								},
							});
						} : undefined,
						onLink: customLinkHandler ? ({ updateLink, ...params }) => {
							setLinkDrawer({
								...params,
								updateLink: (params) => {
									updateLink(params);
									onClose();
								},
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
			autolink,
			customControlConfig,
			customImageHandler,
			customLinkHandler,
			customExtensionExample,
		],
	);

	return (
		<div style={{ height: "100vh" }}>
			<Form
				{...controller}
				title="Text Editor Tiptap"
				fields={tiptapFields}
				buttons={renderButtons(handleSubmit)}
				skeleton={skeleton}
				fullHeight
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
		</div>
	);
};

Playground.args = {
	label: "Label",
	disabled: false,
	required: false,
	skeleton: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	maxCharacters: 100,
	autolink: true,
	customControlConfig: [],
	customImageHandler: false,
	customLinkHandler: false,
	customExtensionExample: false,
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
	maxCharacters: {
		name: "Maximum Characters",
	},
	autolink: {
		name: "Auto Link",
	},
	customControlConfig: {
		name: "Custom Control Config",
		type: {
			control: "object",
		},
	},
	customImageHandler: {
		name: "Custom Image Handler",
	},
	customLinkHandler: {
		name: "Custom Link Handler",
	},
	customExtensionExample: {
		name: "Custom Extension Example",
	},
};

const fields: FieldDef[] = [
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
