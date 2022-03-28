import * as React from "react";
import {
	render,
	cleanup,
	fireEvent,
	screen,
	createEvent,
} from "@testing-library/react";

// Components
import FormFieldImageUpload from "./FormFieldImageUpload";

afterEach(cleanup);

const { getByText, getByTestId, queryByTestId } = screen;

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

const FormFieldImageUploadExample = () => {
	return (
		<FormFieldImageUpload
			fieldDef={{
				name: "imageUpload",
				label: "",
				disabled: false,
				inputSettings: {
					handleSetFocus: mockHandleSetFocus,
					options,
				}
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
	it('should display "Loading Image" and the circular progress component', () => {
		render(
			<FormFieldImageUpload
				fieldDef={{
					name: "imageUpload",
					label: "",
					disabled: true,
				}}
			/>
		);

		expect(getByText("Loading Image")).toBeTruthy();
		expect(getByTestId("circular-progress-test")).toBeTruthy();
	});
});

describe("FormFieldImageUpload when menu options are not received", () => {
	it("should not display ", () => {
		render(
			<FormFieldImageUpload
				fieldDef={{
					name: "imageUpload",
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
				files: [file]
			}
		})

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
