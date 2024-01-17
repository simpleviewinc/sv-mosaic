import * as React from "react";
import {
	render,
	cleanup,
	fireEvent,
	screen,
	createEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import FormFieldImageUpload from "./FormFieldImageUpload";

afterEach(cleanup);

const { getByText, getByTestId, queryByTestId, queryByText } = screen;

const mockHandleSetFocus = jest.fn();
const mockHandleEdit = jest.fn();
const mockHandleTranslate = jest.fn();
const options = [
	{
		label: "Edit",
		action: mockHandleEdit,
	},
	{
		label: "Translate",
		action: mockHandleTranslate,
	},
];

const FormFieldImageUploadExample = ({
	useFocusHandler = true,
}: {
  useFocusHandler?: boolean;
}) => {
	return (
		<FormFieldImageUpload
			fieldDef={{
				name: "imageUpload",
				label: "",
				type: "imageUpload",
				disabled: false,
				inputSettings: {
					handleSetFocus: useFocusHandler ? mockHandleSetFocus : null,
					options,
				},
			}}
		/>
	);
};

describe("FormFieldImageUpload component", () => {
	it("should display default view", () => {
		render(<FormFieldImageUploadExample />);
		const setLinkButton = getByText("UPLOAD FILES");
		const dragAndDropText = getByText("Drag & Drop files here or");

		expect(setLinkButton).toBeTruthy();
		expect(dragAndDropText).toBeTruthy();
	});

	it("should upload image file", () => {
		const file = new File(["hello"], "hello.png", { type: "image/png" });

		render(<FormFieldImageUploadExample />);

		const input = getByTestId("input-file-test") as HTMLInputElement;

		fireEvent.change(input, {
			target: { files: [file] },
		});

		expect(input.files[0]).toStrictEqual(file);
		expect(input.files).toHaveLength(1);
	});
});

describe("FormFieldImageUpload disabled state", () => {
	it("should disabled the upload files button", () => {
		render(
			<FormFieldImageUpload
				fieldDef={{
					name: "imageUpload",
					type: "imageUpload",
					label: "",
				}}
				disabled
			/>
		);

		const uploadButton = getByText("UPLOAD FILES");
		expect(uploadButton).toBeDisabled();
	});
});

describe("FormFieldImageUpload when menu options are not received", () => {
	it("should not display ", () => {
		render(
			<FormFieldImageUpload
				fieldDef={{
					name: "imageUpload",
					type: "imageUpload",
					label: "",
					disabled: false,
				}}
			/>
		);

		expect(queryByTestId("menu-container-test")).toBe(null);
	});
});

describe("FormFieldImageUpload drag and drop events", () => {
	const file = new File(["hello"], "hello.png", {
		type: "image/png",
	});
	let fileDropzone;
	let fileList;
	global.URL.createObjectURL = jest.fn();

	beforeEach(() => {
		render(<FormFieldImageUploadExample />);
		fileList = [file];
		fileDropzone = getByText("Drag & Drop files here or");
	});

	it("should test drop event", () => {
		const fileDropEvent = createEvent.drop(fileDropzone);

		Object.defineProperty(fileDropEvent, "dataTransfer", {
			value: {
				files: [file],
			},
		});

		fireEvent(fileDropzone, fileDropEvent);

		const viewButton = getByText("View");
		fireEvent.click(viewButton);

		const setFocusButton = getByText("Set Focus");
		const canvasElement = getByTestId("canvas-el-test");

		expect(setFocusButton).toBeTruthy();
		expect(canvasElement).toBeTruthy();

		// Triggering setFocusButton callback
		// when the set focus button is clicked

		fireEvent.click(setFocusButton);
		expect(mockHandleSetFocus).toHaveBeenCalled();
	});

	it('should display "Release and Drop" when an image file enters in the drop zone', () => {
		const fileDragEnterEvent = createEvent.dragEnter(fileDropzone);

		Object.defineProperty(fileDragEnterEvent, "dataTransfer", {
			value: {
				files: {
					item: (itemIndex) => fileList[itemIndex],
					length: fileList.length,
				},
			},
		});

		fireEvent(fileDropzone, fileDragEnterEvent);

		expect(getByText("Release and Drop")).toBeTruthy();
	});
});

describe("FormFieldImageUpload without the setFocus handler", () => {
	const file = new File(["hello"], "hello.png", {
		type: "image/png",
	});
	let fileDropzone;
	global.URL.createObjectURL = jest.fn();

	beforeEach(() => {
		render(<FormFieldImageUploadExample useFocusHandler={false} />);
		fileDropzone = getByText("Drag & Drop files here or");
	});

	it("should not show the 'View button since the setFocus callback is not defined'", () => {
		const fileDropEvent = createEvent.drop(fileDropzone);
		Object.defineProperty(fileDropEvent, "dataTransfer", {
			value: {
				files: [file],
			},
		});

		fireEvent(fileDropzone, fileDropEvent);

		expect(queryByText("Set Focus")).toBe(null);
		expect(queryByTestId("View")).toBe(null);
	});
});
