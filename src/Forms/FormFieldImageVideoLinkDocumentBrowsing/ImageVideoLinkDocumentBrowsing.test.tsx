import * as React from "react";
import { useMemo, useCallback } from "react";
import { render, cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Components
import Form from "../Form/Form";

// Utils
import { menuOptions } from "../MenuFormFieldCard/MenuFormFieldUtils";
import { actions, useForm } from "../Form/formUtils";
import {
	documentExample,
	imageAssetExample,
	imageVideoSrc,
	linkExample,
	videoAssetExample,
} from "./ImageVideoLinkDocumentBrowsingUtils";
import { ImageVideoDocumentLinkBrowsingDef } from "./ImageVideoLinkDocumentBrowsingTypes";
import { FieldDef } from "@root/components/Field/FieldTypes";

const setImageCallback = jest.fn();
const setDocumentCallback = jest.fn();
const setVideoCallback = jest.fn();
const setLinkCallback = jest.fn();

const ImageVideoLinkDocumentBrowsingExample = () => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	const setImage = async () => {
		setImageCallback();
		await dispatch(
			actions.setFieldValue({
				name: "imageVideoLinkDocumentBrowsing",
				value: imageAssetExample,
			})
		);
	};

	const setVideo = async () => {
		setVideoCallback();
		await dispatch(
			actions.setFieldValue({
				name: "imageVideoLinkDocumentBrowsing",
				value: videoAssetExample,
			})
		);
	};

	const setDocument = async () => {
		await dispatch(
			actions.setFieldValue({
				name: "imageVideoLinkDocumentBrowsing",
				value: documentExample,
			})
		);
		setDocumentCallback();
	};

	const setLink = async () => {
		await dispatch(
			actions.setFieldValue({
				name: "imageVideoLinkDocumentBrowsing",
				value: linkExample
			})
		);
		setLinkCallback();
	};

	const handleRemove = () => {
		dispatch(
			actions.setFieldValue({
				name: "imageVideoLinkDocumentBrowsing",
				value: [],
			})
		);
	};

	const fields = [
		{
			name: "imageVideoLinkDocumentBrowsing",
			label: "Image Video Link Document Browsing",
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
	] as FieldDef<ImageVideoDocumentLinkBrowsingDef>[];

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert(
				"Form submitted with the following data: " +
          JSON.stringify(data, null, " ")
			);
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<Form
			title='Form Title'
			description='Description'
			state={state}
			fields={fields}
			dispatch={dispatch}
			events={events}
			onSubmit={onSubmit}
		/>
	);
};

afterEach(cleanup);

const { getByText, queryByText, getByTestId, findByText, queryByTestId } = screen;

describe("ImageVideoLinkDocumentBrowsing component", () => {
	it("should display all browsing options", () => {
		render(<ImageVideoLinkDocumentBrowsingExample />);
	
		expect(getByText("Browse:")).toBeTruthy();
		expect(getByText("Image")).toBeTruthy();
		expect(getByText("Document")).toBeTruthy();
		expect(getByText("Video")).toBeTruthy();
		expect(getByText("Link")).toBeTruthy();
	});
});

describe("ImageVideoLinkDocumentBrowsing when an image is loaded", () => {
	beforeEach(() => {
		render(<ImageVideoLinkDocumentBrowsingExample />);
	});

	it("should trigger the setImage function twice since the browse button executes it when is clicked", async () => {
		fireEvent.click(getByTestId("browse-image-test"));
		fireEvent.click(await findByText("Browse"));

		await waitFor(() => {			
			expect(setImageCallback).toHaveBeenCalledTimes(2);
		});
	});

	it("should show only the first 4 labels and values of the asset loaded", async() => {
		fireEvent.click(getByTestId("browse-image-test"));

		await waitFor(() => {
			expect(getByTestId("image-test")).toBeTruthy();
			expect(getByText("Title")).toBeTruthy();
			expect(getByText("Video Thumbnail - YouTube - Visit Santa Fe, New Mexico Video Thumbnail")).toBeTruthy();
			expect(getByText("Type")).toBeTruthy();
			expect(getByText("Image Video Thumbnail")).toBeTruthy();
			expect(getByText("Alt")).toBeTruthy();
			expect(getByText("-")).toBeTruthy();
			expect(getByText("Size")).toBeTruthy();
			expect(getByText("1280x720")).toBeTruthy();
			expect(queryByText("Focus")).toBe(null);
			expect(queryByText("Locales")).toBe(null);
		});		
	});

	it("should show the missing labels inside a tooltip", async () => {
		document.createRange = () => ({
			setStart: jest.fn(),
			setEnd: jest.fn(),
			// The types of the common Ancestor Container object in the following line
			// are ignored just for practical purposes to run the test.
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			commonAncestorContainer: {
				nodeName: "BODY",
				ownerDocument: document,
			},
		});
		fireEvent.click(getByTestId("browse-image-test"));
		fireEvent.mouseOver(getByTestId("tooltip-test-id"));

		expect(await findByText("Focus")).toBeInTheDocument();
		expect(await findByText("Locales")).toBeInTheDocument();
	});

	it("should remove the image loaded and return to the inital step where the browsing options are shown", async () => {
		fireEvent.click(getByTestId("browse-image-test"));
		fireEvent.click(getByText("Remove"));

		await waitFor(() => {
			expect(getByText("Browse:")).toBeTruthy();
			expect(getByText("Image")).toBeTruthy();
			expect(getByText("Document")).toBeTruthy();
			expect(getByText("Video")).toBeTruthy();
			expect(getByText("Link")).toBeTruthy();
		});	
	});
});

describe("ImageVideoLinkDocumentBrowsing when a link is loaded", () => {
	beforeEach(() => {
		render(<ImageVideoLinkDocumentBrowsingExample />);
	});

	it("should trigger the setLink function twice since the browse button also executes it when is clicked", async () => {
		fireEvent.click(getByTestId("browse-link-test"));
		fireEvent.click(await findByText("Browse"));

		await waitFor(() => {
			expect(setLinkCallback).toHaveBeenCalledTimes(2);
		});
	});

	it("should show labels and values of the link loaded", async () => {
		fireEvent.click(getByTestId("browse-link-test"));

		await waitFor(() => {
			expect(getByText("URL")).toBeTruthy();
			expect(getByText("https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/santafenm/maxresdefault_97d9460d-0bb1-4870-9be8-2b9af118360e.jpg")).toBeTruthy();
			expect(getByText("Type")).toBeTruthy();
			expect(getByText("Asset Library - Image")).toBeTruthy();
			expect(getByText("Title")).toBeTruthy();
			expect(getByText("Video Thumbnail - YouTube - Visit Santa Fe, New Mexico")).toBeTruthy();
			expect(queryByTestId("image-test")).toBe(null);
		});
	});
});

describe("ImageVideoLinkDocumentBrowsing when a document is loaded", () => {
	beforeEach(() => {
		render(<ImageVideoLinkDocumentBrowsingExample />);
	});

	it("should trigger the setLink function twice since the browse button also executes it when is clicked", async () => {
		fireEvent.click(getByTestId("browse-document-test"));
		fireEvent.click(await findByText("Browse"));

		await waitFor(() => {
			expect(setDocumentCallback).toHaveBeenCalledTimes(2);
		});
	});

	it("should show the labels and values of the document loaded", async () => {
		fireEvent.click(getByTestId("browse-document-test"));

		await waitFor(() => {
			expect(getByText("Title")).toBeTruthy();
			expect(getByText("Document example")).toBeTruthy();
			expect(getByText("Size")).toBeTruthy();
			expect(getByText("333 bytes")).toBeTruthy();
			expect(getByText("Size on disk")).toBeTruthy();
			expect(getByText("0 bytes")).toBeTruthy();
			expect(queryByTestId("image-test")).toBe(null);
		});
	});
});

describe("ImageVideoLinkDocumentBrowsing when a video is loaded", () => {
	beforeEach(() => {
		render(<ImageVideoLinkDocumentBrowsingExample />);
	});
	
	it("should trigger the setVideo function twice since the browse button also executes it when is clicked", async () => {
		fireEvent.click(getByTestId("browse-video-test"));
		fireEvent.click(await findByText("Browse"));

		await waitFor(() => {
			expect(setVideoCallback).toHaveBeenCalledTimes(2);
		});
	});

	it("should show the labels and values of the video loaded", async () => {
		fireEvent.click(getByTestId("browse-video-test"));

		await waitFor(() => {
			expect(getByText("Title")).toBeTruthy();
			expect(getByText("Video Example - This is a video example")).toBeTruthy();
			expect(getByText("Type")).toBeTruthy();
			expect(getByText("Alt")).toBeTruthy();
			expect(getByText("-")).toBeTruthy();
			expect(getByText("Size")).toBeTruthy();
			expect(getByText("1280x720")).toBeTruthy();
			expect(getByText("More")).toBeTruthy();
			expect(getByTestId("image-test")).toBeTruthy();
		});
	});
});
