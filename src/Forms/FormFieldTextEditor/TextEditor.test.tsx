import * as React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Components
import { useForm } from "../Form/formUtils";
import { ReactElement, useCallback, useMemo } from "react";
import { FieldDef } from "@root/components/Field";
import Form from "../Form/Form";
import { TextEditorDef } from "./TextEditorTypes";

afterEach(cleanup);

const TextEditorExample = (
	props: TextEditorDef & { disabled?: boolean }
): ReactElement => {
	const {
		direction = "ltr",
		maxCharacters = undefined,
		language = "en",
		spellcheck = false,
		disabled = false,
	} = props;

	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	const fields = [
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
	] as FieldDef[];

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
			title="Title"
			description="Description"
			state={state}
			fields={fields}
			dispatch={dispatch}
			events={events}
			onSubmit={onSubmit}
		/>
	);
};

describe("TextEditor component", () => {
	it("should be disabled", async () => {
		render(<TextEditorExample disabled={true} />);
		const editorContent = await screen.findByTestId("text-editor-testid");

		expect(
			editorContent.firstChild.childNodes[1].firstChild
		).not.toHaveAttribute("contenteditable");
	});

	it("should have an ltr direction", async () => {
		render(<TextEditorExample direction={"ltr"} />);
		const editorContent = await screen.findByTestId("text-editor-testid");

		expect(editorContent.firstChild).toHaveAttribute("dir", "ltr");
	});

	it("should have an rtl direction", async () => {
		render(<TextEditorExample direction={"rtl"} />);
		const editorContent = await screen.findByTestId("text-editor-testid");

		expect(editorContent.firstChild).toHaveAttribute("dir", "rtl");
	});

	it("should render in german (de)", async () => {
		render(<TextEditorExample language={"de"} />);
		expect(await screen.findAllByLabelText("Fett")).toBeTruthy();
	});

	it("should spellcheck", async () => {
		render(<TextEditorExample spellcheck={true} />);
		const editorContent = await screen.findByTestId("text-editor-testid");

		expect(editorContent.firstChild.childNodes[1].firstChild).toHaveAttribute(
			"spellcheck",
			"true"
		);
	});
});
