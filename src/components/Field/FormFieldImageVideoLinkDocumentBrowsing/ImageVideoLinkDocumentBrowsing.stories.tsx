import * as React from "react";
import { ReactElement, useMemo } from "react";
import { text, withKnobs, boolean } from "@storybook/addon-knobs";
import { FieldDef } from "@root/components/Field";
import { renderButtons } from "@root/utils/storyUtils";

// Components
import Form, { useForm } from "@root/components/Form";

// Utils
import { menuOptions } from "@root/forms/MenuFormFieldCard/MenuFormFieldUtils";
import { useImageVideoLinkDocumentBrowsing, imageVideoSrc } from "./ImageVideoLinkDocumentBrowsingUtils";

export default {
	title: "FormFields/FormFieldImageVideoLinkDocumentBrowsing",
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const controller = useForm();
	const { state, dispatch, methods, handleSubmit } = controller;
	const { setImage, setVideo, setDocument, setLink, handleRemove } = useImageVideoLinkDocumentBrowsing(dispatch, methods, "imageVideoLinkDocumentBrowsing");

	const label = text("Label", "Label");
	const disabled = boolean("Disabled", false);
	const required = boolean("Required", false);
	const withVideoOption = boolean("Show video browsing option", false);
	const withDocumentOption = boolean("Show document browsing option", false);
	const withImageOption = boolean("Show image browsing option", true);
	const withLinkOption = boolean("Show link browsing option", false);
	const withImage = boolean("Show image", true);

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "imageVideoLinkDocumentBrowsing",
					label,
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
						src: withImage && imageVideoSrc,
					},
				},
			],
		[label, required, disabled, menuOptions, setImage, withLinkOption, setLink, withDocumentOption, setDocument, withVideoOption, setVideo],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(handleSubmit)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
				{...controller}
			/>
		</>
	);
};

export const KitchenSink = (): ReactElement => {
	const controller = useForm();
	const { state, dispatch, methods, handleSubmit } = controller;
	const { setImage, setVideo, setDocument, setLink, handleRemove } = useImageVideoLinkDocumentBrowsing(dispatch, methods, "browseAllOptions");
	const { setImage: browseImage, handleRemove: removeImage } = useImageVideoLinkDocumentBrowsing(dispatch, methods, "browseImage");
	const { setVideo: browseVideo, handleRemove: removeVideo } = useImageVideoLinkDocumentBrowsing(dispatch, methods, "browseVideo");
	const { setDocument: browseDocument, handleRemove: removeDocument } = useImageVideoLinkDocumentBrowsing(dispatch, methods, "browseDocument");
	const { setLink: browseLink, handleRemove: removeLink } = useImageVideoLinkDocumentBrowsing(dispatch, methods, "browseLink");
	const { setVideo: setVideoWithoutSrc, setImage: setImageWithoutSrc, handleRemove: removeImageOrVideo } = useImageVideoLinkDocumentBrowsing(dispatch, methods, "browseImageOrVideo");
	const { setImage: setImageDisabled } = useImageVideoLinkDocumentBrowsing(dispatch, methods, "disabledExample");

	const fields = useMemo(
		(): FieldDef[] =>
			[
				{
					name: "browseAllOptions",
					label: "Example with all types of browsing options (document, link, video and image) enabled",
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
			],
		[menuOptions, setImage, setVideo, setDocument, handleRemove],
	);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				buttons={renderButtons(handleSubmit)}
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				fields={fields}
				{...controller}
			/>
		</>
	);
};
