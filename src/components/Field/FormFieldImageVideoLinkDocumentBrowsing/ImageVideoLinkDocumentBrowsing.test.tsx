import * as React from "react";
import { render, cleanup, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Components
import Form, { formActions, useForm } from "@root/components/Form";

// Utils
import { menuOptions } from "../../../forms/MenuFormFieldCard/MenuFormFieldUtils";
import {
	documentExample,
	imageAssetExample,
	imageVideoSrc,
	linkExample,
	videoAssetExample,
} from "./ImageVideoLinkDocumentBrowsingUtils";
import { FieldDef } from "@root/components/Field/FieldTypes";
import { ButtonProps } from "@root/components/Button";
import { act } from "react-dom/test-utils";

const setImageCallback = jest.fn();
const setDocumentCallback = jest.fn();
const setVideoCallback = jest.fn();
const setLinkCallback = jest.fn();

const ImageVideoLinkDocumentBrowsingExample = () => {
	const {	state, dispatch	} = useForm();

	const setImage = async () => {
		setImageCallback();
		await dispatch(
			formActions.setFieldValue({
				name: "imageVideoLinkDocumentBrowsing",
				value: imageAssetExample,
			}),
		);
	};

	const setVideo = async () => {
		setVideoCallback();
		await dispatch(
			formActions.setFieldValue({
				name: "imageVideoLinkDocumentBrowsing",
				value: videoAssetExample,
			}),
		);
	};

	const setDocument = async () => {
		await dispatch(
			formActions.setFieldValue({
				name: "imageVideoLinkDocumentBrowsing",
				value: documentExample,
			}),
		);
		setDocumentCallback();
	};

	const setLink = async () => {
		await dispatch(
			formActions.setFieldValue({
				name: "imageVideoLinkDocumentBrowsing",
				value: linkExample,
			}),
		);
		setLinkCallback();
	};

	const handleRemove = () => {
		dispatch(
			formActions.setFieldValue({
				name: "imageVideoLinkDocumentBrowsing",
				value: [],
			}),
		);
	};

	const fields: FieldDef[] = [
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
	];

	const onSubmit = async () => {
		const { valid, data } = await dispatch(formActions.submitForm());
		if (!valid) return;

		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	};

	const buttons: ButtonProps[] = [
		{
			label: "Save",
			onClick: onSubmit,
			color: "yellow",
			variant: "contained",
		},
	];

	return (
		<Form
			buttons={buttons}
			title='Form Title'
			description='Description'
			state={state}
			fields={fields}
			dispatch={dispatch}
		/>
	);
};

afterEach(cleanup);

const { getByText, queryByText, getByTestId, findByText, queryByTestId, findByTestId } = screen;
const mockResizeObserver = jest.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
});
window.ResizeObserver = mockResizeObserver;

jest.setTimeout(30000);
describe("ImageVideoLinkDocumentBrowsing component", () => {
	it("should display all browsing options", async () => {
		await act(async () => {
			render(<ImageVideoLinkDocumentBrowsingExample />);
		});

		expect(getByText("Browse:")).toBeTruthy();
		expect(getByText("Image")).toBeTruthy();
		expect(getByText("Document")).toBeTruthy();
		expect(getByText("Video")).toBeTruthy();
		expect(getByText("Link")).toBeTruthy();
	});
});

describe("ImageVideoLinkDocumentBrowsing when an image is loaded", () => {
	beforeEach(async () => {
		await act(async () => {
			render(<ImageVideoLinkDocumentBrowsingExample />);
		});
	});

	it("should trigger the setImage function twice since the browse button executes it when is clicked", async () => {
		const browseTestId = await findByTestId("browse-image-test");
		await act(async () => {
			browseTestId.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const browseButton = await findByText("Browse");
		await act(async () => {
			browseButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		await waitFor(() => {
			expect(setImageCallback).toHaveBeenCalledTimes(2);
		});
	});

	it("should show only the first 4 labels and values of the asset loaded", async() => {
		const browseTestId = await findByTestId("browse-image-test");
		await act(async () => {
			browseTestId.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

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
		const browseTestId = await findByTestId("browse-image-test");
		await act(async () => {
			browseTestId.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const moreButton = await findByText("More");
		await act(async () => {
			fireEvent.click(moreButton);
		});

		expect(await findByText("Focus")).toBeInTheDocument();
		expect(await findByText("Locales")).toBeInTheDocument();
	});

	it("should remove the image loaded and return to the inital step where the browsing options are shown", async () => {
		const browseTestId = await findByTestId("browse-image-test");
		await act(async () => {
			browseTestId.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const removeButton = await findByText("Remove");
		await act(async () => {
			removeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

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
	beforeEach(async () => {
		await act(async () => {
			render(<ImageVideoLinkDocumentBrowsingExample />);
		});
	});

	it("should trigger the setLink function twice since the browse button also executes it when is clicked", async () => {
		const browseTestId = await findByTestId("browse-link-test");
		await act(async () => {
			browseTestId.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const browseButton = await findByText("Browse");
		await act(async () => {
			browseButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		await waitFor(() => {
			expect(setLinkCallback).toHaveBeenCalledTimes(2);
		});
	});

	it("should show labels and values of the link loaded", async () => {
		const browseTestId = await findByTestId("browse-link-test");
		await act(async () => {
			browseTestId.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

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
	beforeEach(async () => {
		await act(async () => {
			render(<ImageVideoLinkDocumentBrowsingExample />);
		});
	});

	it("should trigger the setLink function twice since the browse button also executes it when is clicked", async () => {
		const browseTestId = await findByTestId("browse-document-test");
		await act(async () => {
			browseTestId.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const browseButton = await findByText("Browse");
		await act(async () => {
			browseButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		await waitFor(() => {
			expect(setDocumentCallback).toHaveBeenCalledTimes(2);
		});
	});

	it("should show the labels and values of the document loaded", async () => {
		const browseTestId = await findByTestId("browse-document-test");
		await act(async () => {
			browseTestId.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

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
	beforeEach(async () => {
		await act(async () => {
			render(<ImageVideoLinkDocumentBrowsingExample />);
		});
	});

	it("should trigger the setVideo function twice since the browse button also executes it when is clicked", async () => {
		const browseTestId = await findByTestId("browse-video-test");
		await act(async () => {
			browseTestId.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const browseButton = await findByText("Browse");
		await act(async () => {
			browseButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		await waitFor(() => {
			expect(setVideoCallback).toHaveBeenCalledTimes(2);
		});
	});

	it("should show the labels and values of the video loaded", async () => {
		const browseTestId = await findByTestId("browse-video-test");
		await act(async () => {
			browseTestId.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

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
