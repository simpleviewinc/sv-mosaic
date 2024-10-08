import * as React from "react";
import { act } from "react";
import { render, cleanup, screen } from "@testing-library/react";

// Components
import Form, { useForm } from "@root/components/Form";
import { ReactElement } from "react";
import { FieldDef } from "@root/components/Field";
import { TextEditorInputSettings } from "@root/components/Field/FormFieldTextEditor/FormFieldTextEditorTypes";
import { renderButtons } from "@root/utils/storyUtils";

afterEach(cleanup);

const TextEditorExample = (
	props: TextEditorInputSettings & { disabled?: boolean },
): ReactElement => {
	const {
		direction = "ltr",
		maxCharacters = undefined,
		language = "en",
		spellcheck = false,
		disabled = false,
	} = props;

	const controller = useForm();
	const { handleSubmit } = controller;

	const fields: FieldDef[] = [
		{
			label: "Disabled test",
			name: "disabledTextEditor",
			type: "textEditor",
			disabled,
			inputSettings: {
				direction,
				maxCharacters,
				language,
				spellcheck,
			},
		},
	];

	return (
		<Form
			{...controller}
			title="Title"
			description="Description"
			fields={fields}
			buttons={renderButtons(handleSubmit)}
		/>
	);
};

const mockResizeObserver = vi.fn();
mockResizeObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null,
});
window.ResizeObserver = mockResizeObserver;

describe("TextEditor component", () => {
	it("should have an ltr direction", async () => {
		await act(() => {
			render(<TextEditorExample direction="ltr" />);
		});
		const editorContent = await screen.findByTestId("text-editor-testid");
		const joditContainer = editorContent.getElementsByClassName("jodit-container");

		expect(joditContainer[0]).toHaveAttribute("dir", "ltr");
	});

	it("should have an rtl direction", async () => {
		await act(() => {
			render(<TextEditorExample direction="rtl" />);
		});
		const editorContent = await screen.findByTestId("text-editor-testid");
		const joditContainer = editorContent.getElementsByClassName("jodit-container");

		expect(joditContainer[0]).toHaveAttribute("dir", "rtl");
	});

	it("should render in german (de)", async () => {
		await act(() => {
			render(<TextEditorExample language="de" />);
		});
		expect(await screen.findAllByLabelText("Fett")).toBeTruthy();
	});
});
