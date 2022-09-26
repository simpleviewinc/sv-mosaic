import * as React from "react";
import { useMemo } from "react";
import FormFieldImageVideoLinkDocumentBrowsing, { FieldDef } from "@root/components/Field";
import { ImageVideoDocumentLinkBrowsingDef } from ".";
import {
	excludedFormFieldsControls,
	onCancel,
	renderButtons,
} from "@root/utils/storyUtils";
import { ComponentMeta } from "@storybook/react";

// Components
import Form, { useForm } from "@root/components/Form";

// Utils
import { menuOptions } from "@root/forms/MenuFormFieldCard/MenuFormFieldUtils";
import {
	useImageVideoLinkDocumentBrowsing,
	imageVideoSrc,
} from "./ImageVideoLinkDocumentBrowsingUtils";

export default {
	title: "FormFields/FormFieldImageVideoLinkDocumentBrowsing",
	component: FormFieldImageVideoLinkDocumentBrowsing,
} as ComponentMeta<typeof FormFieldImageVideoLinkDocumentBrowsing>;

const Template = (args) => {
	const { state, dispatch } = useForm();
	const {
		setImage,
		setVideo,
		setDocument,
		setLink,
		handleRemove,
	} = useImageVideoLinkDocumentBrowsing(
		dispatch,
		"imageVideoLinkDocumentBrowsing"
	);
	const {
		label,
		disabled,
		helperText,
		instructionText,
		required,
		withVideoOption,
		withDocumentOption,
		withImageOption,
		withLinkOption,
		withImage,
		src,
	} = args;

	const fields = useMemo(
		() =>
			[
				{
					name: "imageVideoLinkDocumentBrowsing",
					label,
					helperText,
					instructionText,
					type: "imageVideoDocumentLink",
					required,
					disabled,
					inputSettings: {
						options: menuOptions,
						handleSetImage: withImageOption ? setImage : undefined,
						handleSetDocument: withDocumentOption ? setDocument : undefined,
						handleSetVideo: withVideoOption ? setVideo : undefined,
						handleSetLink: withLinkOption ? setLink : undefined,
						handleRemove,
						src: withImage && src,
					},
				},
			] as FieldDef<ImageVideoDocumentLinkBrowsingDef>[],
		[
			label,
			required,
			disabled,
			menuOptions,
			setImage,
			withLinkOption,
			setLink,
			withDocumentOption,
			setDocument,
			withVideoOption,
			setVideo,
		]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="This is a description example"
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { exclude: excludedFormFieldsControls } };
Playground.args = {
	label: "Label",
	required: false,
	disabled: false,
	instructionText: "Instruction text",
	helperText: "Helper text",
	withVideoOption: false,
	withDocumentOption: false,
	withLinkOption: false,
	withImageOption: true,
	withImage: true,
	src: imageVideoSrc,
};


const KitchenSinkTemplate = (args) => {
	const { state, dispatch } = useForm();
	const {
		setImage,
		setVideo,
		setDocument,
		setLink,
		handleRemove,
	} = useImageVideoLinkDocumentBrowsing(dispatch, "browseAllOptions");
	const {
		setImage: browseImage,
		handleRemove: removeImage,
	} = useImageVideoLinkDocumentBrowsing(dispatch, "browseImage");
	const {
		setVideo: browseVideo,
		handleRemove: removeVideo,
	} = useImageVideoLinkDocumentBrowsing(dispatch, "browseVideo");
	const {
		setDocument: browseDocument,
		handleRemove: removeDocument,
	} = useImageVideoLinkDocumentBrowsing(dispatch, "browseDocument");
	const {
		setLink: browseLink,
		handleRemove: removeLink,
	} = useImageVideoLinkDocumentBrowsing(dispatch, "browseLink");
	const {
		setVideo: setVideoWithoutSrc,
		setImage: setImageWithoutSrc,
		handleRemove: removeImageOrVideo,
	} = useImageVideoLinkDocumentBrowsing(dispatch, "browseImageOrVideo");
	const { setImage: setImageDisabled } = useImageVideoLinkDocumentBrowsing(
		dispatch,
		"disabledExample"
	);

	const fields = useMemo(
		() =>
			[
				{
					name: "browseAllOptions",
					label:
						"Example with all types of browsing options (document, link, video and image) enabled",
					type: "imageVideoDocumentLink",
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetImage: setImage,
						handleSetDocument: setDocument,
						handleSetVideo: setVideo,
						handleSetLink: setLink,
						handleRemove,
						src: imageVideoSrc,
					},
				},
				{
					name: "browseImageOrVideo",
					label: "Browsing and image or video without a src image specified",
					type: "imageVideoDocumentLink",
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetImage: setImageWithoutSrc,
						handleSetVideo: setVideoWithoutSrc,
						handleRemove: removeImageOrVideo,
					},
				},
				{
					name: "browseImage",
					label: "Browsing an image",
					type: "imageVideoDocumentLink",
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetImage: browseImage,
						handleRemove: removeImage,
						src: imageVideoSrc,
					},
				},
				{
					name: "browseVideo",
					label: "Browsing a video",
					type: "imageVideoDocumentLink",
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetVideo: browseVideo,
						handleRemove: removeVideo,
						src: imageVideoSrc,
					},
				},
				{
					name: "browseDocument",
					label: "Browsing a document",
					type: "imageVideoDocumentLink",
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetDocument: browseDocument,
						handleRemove: removeDocument,
					},
				},
				{
					name: "browseLink",
					label: "Browsing a link",
					type: "imageVideoDocumentLink",
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetLink: browseLink,
						handleRemove: removeLink,
					},
				},
				{
					name: "withoutAnyBrowsingOption",
					label: "Without any browsing option",
					type: "imageVideoDocumentLink",
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
					},
				},
				{
					name: "disabledExample",
					label: "Disabled example",
					type: "imageVideoDocumentLink",
					required: false,
					disabled: true,
					inputSettings: {
						options: menuOptions,
						handleSetImage: setImageDisabled,
					},
				},
			] as FieldDef<ImageVideoDocumentLinkBrowsingDef>[],
		[menuOptions, setImage, setVideo, setDocument, handleRemove]
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(dispatch)}
				title="Form Title"
				description="This is a description example"
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const KitchenSink = KitchenSinkTemplate.bind({});
KitchenSink.parameters = { controls: { exclude: excludedFormFieldsControls } };
