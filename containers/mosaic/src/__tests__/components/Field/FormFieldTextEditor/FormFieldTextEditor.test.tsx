import { render, screen, waitFor, within } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";
import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";

import type { TextEditorData, TextEditorInputSettings } from "@root/components/Field/FormFieldTextEditor/FormFieldTextEditorTypes";
import type { FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldTestType from "../FormFieldTestType";
import { FormFieldTextEditor } from "@root/components/Field/FormFieldTextEditor/FormFieldTextEditor";
import testIds from "@root/utils/testIds";

vi.mock("@monaco-editor/react", () => {
	const FakeEditor = jest.fn(props => {
		return (
			<textarea
				onChange={e => props.onChange(e.target.value)}
				value={props.value}
			/>
		);
	});

	return {
		default: FakeEditor,
	};
});

const defaultFieldDef: FieldDefBase<"textEditor", TextEditorInputSettings> = {
	name: "textEditor",
	label: "Text Editor",
	type: "textEditor",
};

async function setup(
	{ value = "<p>Test</p>", ...props }: Partial<MosaicFieldProps<"textEditor", TextEditorInputSettings, TextEditorData>> = {},
	{
		stateful = false,
		userEventOptions,
	}: {
		stateful?: boolean;
		userEventOptions?: Parameters<typeof userEvent.setup>[0];
	} = {},
) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<FormFieldTestType
			Component={FormFieldTextEditor}
			fieldDef={defaultFieldDef}
			onChange={onChangeMock}
			stateful={stateful}
			value={value}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(userEventOptions),
	};
}

describe(__dirname, () => {
	it("should render the text editor form field", async () => {
		await setup();

		expect(screen.queryByTestId("mos:TextEditor:canvas")).toBeInTheDocument();
	});

	type FormattingTest = {
		value?: string;
		controlTestId: string;
		menuTestId?: string;
	} & ({
		/**
		 * This formatting option mutates an inline-level element like `<strong></strong>`
		 */
		inline: true;
		result: {
			formatAndType: string;
			selectAndFormat: string;
		};
	} | {
		/**
		 * This formatting option mutates a block-level element like `<h1></h1>`
		 */
		inline: false;
		result: string;
	})

	const formattingTests: TestDef<FormattingTest>[] = [
		{
			name: "should render the correct elements when bold is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:bold`,
				inline: true,
				result: {
					formatAndType: "<p>Test<strong>A</strong></p>",
					selectAndFormat: "<p><strong>TestA</strong></p>",
				},
			},
		},
		{
			name: "should render the correct elements when italic is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:italic`,
				inline: true,
				result: {
					formatAndType: "<p>Test<em>A</em></p>",
					selectAndFormat: "<p><em>TestA</em></p>",
				},
			},
		},
		{
			name: "should render the correct elements when underline is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:underline`,
				menuTestId: `${testIds.TEXT_EDITOR_CONTROL}:menu-1-2`,
				inline: true,
				result: {
					formatAndType: "<p>Test<u>A</u></p>",
					selectAndFormat: "<p><u>TestA</u></p>",
				},
			},
		},
		{
			name: "should render the correct elements when strikethrough is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:strike`,
				menuTestId: `${testIds.TEXT_EDITOR_CONTROL}:menu-1-2`,
				inline: true,
				result: {
					formatAndType: "<p>Test<s>A</s></p>",
					selectAndFormat: "<p><s>TestA</s></p>",
				},
			},
		},
		{
			name: "should render the correct elements when superscript is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:superscript`,
				menuTestId: `${testIds.TEXT_EDITOR_CONTROL}:menu-1-2`,
				inline: true,
				result: {
					formatAndType: "<p>Test<sup>A</sup></p>",
					selectAndFormat: "<p><sup>TestA</sup></p>",
				},
			},
		},
		{
			name: "should render the correct elements when subscript is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:subscript`,
				menuTestId: `${testIds.TEXT_EDITOR_CONTROL}:menu-1-2`,
				inline: true,
				result: {
					formatAndType: "<p>Test<sub>A</sub></p>",
					selectAndFormat: "<p><sub>TestA</sub></p>",
				},
			},
		},
		{
			name: "should strip formatting elements when clear formatting is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:clear`,
				menuTestId: `${testIds.TEXT_EDITOR_CONTROL}:menu-1-2`,
				inline: false,
				value: "<p><em><strong>Test</strong></em></p>",
				result: "<p>Test</p>",
			},
		},
		{
			name: "should render the correct elements when heading 1 is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:heading-1`,
				menuTestId: testIds.TEXT_EDITOR_HEADING_MENU,
				inline: false,
				result: "<h1>Test</h1>",
			},
		},
		{
			name: "should render the correct elements when heading 2 is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:heading-2`,
				menuTestId: testIds.TEXT_EDITOR_HEADING_MENU,
				inline: false,
				result: "<h2>Test</h2>",
			},
		},
		{
			name: "should render the correct elements when heading 3 is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:heading-3`,
				menuTestId: testIds.TEXT_EDITOR_HEADING_MENU,
				inline: false,
				result: "<h3>Test</h3>",
			},
		},
		{
			name: "should render the correct elements when heading 4 is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:heading-4`,
				menuTestId: testIds.TEXT_EDITOR_HEADING_MENU,
				inline: false,
				result: "<h4>Test</h4>",
			},
		},
		{
			name: "should render the correct elements when heading 5 is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:heading-5`,
				menuTestId: testIds.TEXT_EDITOR_HEADING_MENU,
				inline: false,
				result: "<h5>Test</h5>",
			},
		},
		{
			name: "should render the correct elements when heading 6 is chosen",
			args: {
				controlTestId: `${testIds.TEXT_EDITOR_CONTROL}:heading-6`,
				menuTestId: testIds.TEXT_EDITOR_HEADING_MENU,
				inline: false,
				result: "<h6>Test</h6>",
			},
		},
	];

	testArray(formattingTests, async ({ controlTestId, menuTestId, inline, result, value }) => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			value,
		});

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		const menu = menuTestId && screen.getByTestId(menuTestId);

		if (inline) {
			if (menu) {
				await user.click(menu);
			}

			const { formatAndType, selectAndFormat } = result;

			await user.click(screen.getByTestId(controlTestId));
			await waitFor(() => expect(canvas).toHaveFocus());
			await user.type(canvas, "A");

			expect(onChangeMock).toBeCalledWith(formatAndType);

			await user.tripleClick(canvas);
			if (menu) {
				await user.click(menu);
			}
			const [control] = screen.getAllByTestId(controlTestId);
			await user.click(control);

			expect(onChangeMock).toBeCalledWith(selectAndFormat);
		} else {
			await user.tripleClick(canvas);

			if (menu) {
				await user.click(menu);
			}

			await user.click(screen.getByTestId(controlTestId));

			expect(onChangeMock).toBeCalledWith(result);
		}
	});

	it("should render the correct elements when an image is added", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ value: "", onChange: onChangeMock });

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-4-1`));
		await user.click(screen.getAllByTestId(`${testIds.TEXT_EDITOR_CONTROL}:image`)[0]);

		const source = screen.getByLabelText("Source*");
		const submit = screen.getByRole("button", { name: "Submit" });

		await user.type(source, "https://www.placehold.it/200");
		await user.click(submit);

		expect(onChangeMock).toBeCalledWith("<p><img src=\"https://www.placehold.it/200\"></p>");
	});

	it("should render the correct elements when an image is added using custom image handler", async () => {
		const onImageMock = vi.fn<TextEditorInputSettings["onImage"]>(({ updateImage }) => updateImage({
			src: "https://www.placehold.it/200",
			alt: "Placeholder Image",
		}));

		const onChangeMock = vi.fn();

		const { user } = await setup({
			value: "",
			onChange: onChangeMock,
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					onImage: onImageMock,
				},
			},
		});

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-4-1`));
		await user.click(screen.getAllByTestId(`${testIds.TEXT_EDITOR_CONTROL}:image`)[0]);

		expect(onChangeMock).toBeCalledWith("<p><img src=\"https://www.placehold.it/200\" alt=\"Placeholder Image\"></p>");
	});

	it("should show the link control in the floating toolbar if a link is active in the current selection", async () => {
		const { user } = await setup({ value: "<p><a href=\"https://www.example.com\">Test Link</a></p>" });

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		await user.click(canvas);
		expect(canvas).toHaveFocus();
		await user.keyboard("{ArrowLeft}");
		const toolbar = screen.getByTestId(testIds.TEXT_EDITOR_FLOATING_TOOLBAR);
		expect(toolbar).toBeInTheDocument();
		const control = within(toolbar).getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:link`);
		expect(control).toBeInTheDocument();
	});

	it("should render the correct elements when a link is added", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ value: "", onChange: onChangeMock });

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:link`));

		const url = screen.getByLabelText("URL*");
		const text = screen.getByLabelText("Text*");

		await user.type(url, "example.com");
		await user.type(text, "Test Link");
		await user.click(screen.getByRole("button", { name: "Submit" }));

		expect(onChangeMock).toBeCalledWith("<p><a target=\"\" rel=\"noopener noreferrer nofollow\" href=\"https://example.com\">Test Link</a></p>");
	});

	it("should render the correct elements when a link is added using custom link handler", async () => {
		const onLinkMock = vi.fn<TextEditorInputSettings["onLink"]>(({ updateLink }) => updateLink({
			url: "example.com",
			text: "Test Link",
		}));

		const onChangeMock = vi.fn();

		const { user } = await setup({
			value: "",
			onChange: onChangeMock,
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					onLink: onLinkMock,
				},
			},
		});

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:link`));

		expect(onChangeMock).toBeCalledWith("<p><a target=\"\" rel=\"noopener noreferrer nofollow\" href=\"https://example.com\">Test Link</a></p>");
	});

	it("should hide the floating toolbar if there are no selection types", async () => {
		const { user } = await setup({ value: "<p><a href=\"https://www.example.com\">Test Link</a></p>" });

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);

		await user.click(canvas);
		expect(canvas).toHaveFocus();
		await user.keyboard("{ArrowLeft}");
		const toolbar = screen.getByTestId(testIds.TEXT_EDITOR_FLOATING_TOOLBAR);
		expect(toolbar).toBeInTheDocument();
		await user.tripleClick(canvas);
		await user.keyboard("{Backspace}");
		expect(toolbar).not.toBeInTheDocument();
	});

	it("should close the node form when user clicks outside", async () => {
		const { user } = await setup();

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:link`));
		const nodeForm = screen.getByTestId(testIds.TEXT_EDITOR_NODE_FORM);
		expect(nodeForm).toBeInTheDocument();
		await user.click(canvas);
		expect(nodeForm).not.toBeInTheDocument();
		expect(canvas).toHaveFocus();
	});

	it("should fire the on blur handler when the date picker is closed", async () => {
		const onBlurMock = vi.fn();

		const { user } = await setup({ onBlur: onBlurMock });

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		await user.click(canvas);
		expect(canvas).toHaveFocus();
		await user.keyboard("{Tab}");
		expect(onBlurMock).toBeCalled();
	});

	it("should not get caught in an update loop when controlled", async () => {
		const { user } = await setup(undefined, { stateful: true });

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		await user.click(canvas);
		await user.keyboard("abc");
	});

	it.only("should not throw an error but warn when malformed HTML is provided in the source tab", async () => {
		const warnMock = vi.spyOn(console, "warn").mockImplementation(() => null);
		const { user } = await setup(undefined, { stateful: true });

		const source = screen.getByRole("button", { name: "Source" });
		const visual = screen.getByRole("button", { name: "Visual" });
		expect(source).toBeInTheDocument();
		expect(visual).toBeInTheDocument();
		await user.click(source);
		const textArea = screen.getByRole("textbox");
		await user.click(textArea);
		await user.paste("<Foo<>>");
		await user.click(visual);
		expect(warnMock).toBeCalled();
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});

	it("should accept script in HTML content without executing it", async () => {
		const alertMock = vi.spyOn(window, "alert");

		await setup({ value: "<p>Test!</p><script>alert(\"Test\");</script>" });

		expect(screen.getByTestId(testIds.TEXT_EDITOR_SCRIPT_NODE)).toBeInTheDocument();
		expect(alertMock).not.toBeCalled();
	});

	// TODO: assert styles when we've migrated to emotion

	// TODO I can't get this passing and I have no idea why.
	// it("should show the image control in the floating toolbar if an image is active in the current selection", async () => {
	// 	const { user } = await setup({ value: "<p><img src=\"https://placehold.co/100x100\"></p>" });

	// 	const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
	// 	const image = canvas.querySelector("img");
	// 	expect(image).toBeInTheDocument();
	// 	await user.click(canvas);
	// 	expect(canvas).toHaveFocus();
	// 	await user.keyboard("{ArrowLeft}");
	// 	await new Promise((resolve) => setTimeout(() => resolve(null), 1000));
	// 	const toolbar = screen.getByTestId(testIds.TEXT_EDITOR_FLOATING_TOOLBAR);
	// 	expect(toolbar).toBeInTheDocument();
	// 	const control = within(toolbar).getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:image`);
	// 	expect(control).toBeInTheDocument();
	// });
});
