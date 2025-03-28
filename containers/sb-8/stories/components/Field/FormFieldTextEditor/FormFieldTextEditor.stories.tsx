// BUG TO BE FIXED
import * as React from "react";
import type { ReactElement } from "react";
import { useMemo, useState } from "react";

import Form, { useForm } from "@root/components/Form";
import type { ControlWithProps, FieldDef, TextEditorOnImageParams, TextEditorOnLinkParams } from "@root/components/Field";
import { getDefaultExtensions } from "@root/components/Field";
import { commonFieldControls, renderButtons } from "../../../../utils";
import Drawer from "@root/components/Drawer";

import { MediaGalleryDrawer } from "./MediaGalleryDrawer";
import { LinkLibraryDrawer } from "./LinkLibraryDrawer";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { SimpleViewAlert } from "./SimpleviewAlertExtension";
import { Sizes } from "@root/theme";
import { defaultControls } from "@root/components/Field/FormFieldTextEditor/textEditorUtils";

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
	instructionText,
	forceInstructionTooltip,
	helperText,
	maxCharacters,
	autolink,
	size,
	customControlConfig,
	customImageHandler,
	customLinkHandler,
	customExtensionExample,
	minHeight,
	maxHeight,
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
							...customControlConfig?.length ? customControlConfig : defaultControls,
							...customExtensionExample ? [[[customExtensionControl]]] : [],
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
						onLink: customLinkHandler ? setLinkDrawer : undefined,
						maxCharacters,
						minHeight: !minHeight ? undefined : minHeight,
						maxHeight: !maxHeight ? undefined : maxHeight,
					},
					disabled,
					helperText,
					instructionText,
					forceInstructionTooltip,
					size,
				},
			],
		[
			required,
			disabled,
			label,
			helperText,
			instructionText,
			forceInstructionTooltip,
			size,
			maxCharacters,
			autolink,
			customControlConfig,
			customImageHandler,
			customLinkHandler,
			customExtensionExample,
			minHeight,
			maxHeight,
		],
	);

	return (
		<div style={{ height: "100vh" }}>
			<Form
				{...controller}
				title="Text Editor Tiptap"
				fields={tiptapFields}
				buttons={renderButtons(handleSubmit)}
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
	...commonFieldControls.args,
	maxCharacters: 100,
	autolink: true,
	size: "lg",
	customControlConfig: [],
	customImageHandler: false,
	customLinkHandler: false,
	customExtensionExample: false,
	minHeight: "",
	maxHeight: "",
};

Playground.argTypes = {
	...commonFieldControls.args,
	maxCharacters: {
		name: "Maximum Characters",
	},
	autolink: {
		name: "Auto Link",
	},
	size: {
		name: "Size",
		options: Object.keys(Sizes),
		control: { type: "select" },
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
	minHeight: {
		name: "Minimum Height",
	},
	maxHeight: {
		name: "Maximum Height",
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
