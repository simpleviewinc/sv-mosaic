import { FormFieldTextEditorTipTap, MosaicFieldProps, TextEditorNextInputSettings } from "@root/components/Field";
import testIds from "@root/utils/testIds";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import React, { act } from "react";

type SetupParams = Pick<MosaicFieldProps, "value"> & {
	onLink?: TextEditorNextInputSettings["onLink"];
	onImage?: TextEditorNextInputSettings["onImage"];
};

async function setup({ value = "<p>Test</p>", onLink, onImage }: SetupParams = {}) {
	const onChangeMock = vi.fn();
	const renderResult = await act(() => render(
		<FormFieldTextEditorTipTap
			fieldDef={{
				name: "textEditor",
				type: "textEditor",
				inputSettings: {
					onLink,
					onImage,
				},
			}}
			value={value}
			onChange={onChangeMock}
		/>,
	));

	return {
		...renderResult,
		onChangeMock,
		user: userEvent.setup(),
	};
}

/**
 * Only used when a control is clicked that results in the canvas
 * being immediately focused afterwards. Without waiting for the
 * short promise, it can get flaky. Presumably due to the way Tiptap
 * dispatches the focus event asynchronously.
 */
function clickAndWait(user: UserEvent, element: HTMLElement) {
	return waitFor(async () => {
		await user.click(element);
		await new Promise((resolve) => setTimeout(() => resolve(null)));
	});
}

describe("TextEditorTiptap component - Text formatting", () => {
	it("should render the correct elements when heading 1 is chosen", async () => {
		const { user, onChangeMock } = await setup();

		await user.click(screen.getByTestId(testIds.TEXT_EDITOR_HEADING_MENU));
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_HEADING_CONTROL}-1`));

		expect(onChangeMock).toBeCalledWith("<h1>Test</h1>");
	});

	it("should render the correct elements when heading 2 is chosen", async () => {
		const { user, onChangeMock } = await setup();

		await user.click(screen.getByTestId(testIds.TEXT_EDITOR_HEADING_MENU));
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_HEADING_CONTROL}-2`));

		expect(onChangeMock).toBeCalledWith("<h2>Test</h2>");
	});

	it("should render the correct elements when heading 3 is chosen", async () => {
		const { user, onChangeMock } = await setup();

		await user.click(screen.getByTestId(testIds.TEXT_EDITOR_HEADING_MENU));
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_HEADING_CONTROL}-3`));

		expect(onChangeMock).toBeCalledWith("<h3>Test</h3>");
	});

	it("should render the correct elements when heading 4 is chosen", async () => {
		const { user, onChangeMock } = await setup();

		await user.click(screen.getByTestId(testIds.TEXT_EDITOR_HEADING_MENU));
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_HEADING_CONTROL}-4`));

		expect(onChangeMock).toBeCalledWith("<h4>Test</h4>");
	});

	it("should render the correct elements when heading 5 is chosen", async () => {
		const { user, onChangeMock } = await setup();

		await user.click(screen.getByTestId(testIds.TEXT_EDITOR_HEADING_MENU));
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_HEADING_CONTROL}-5`));

		expect(onChangeMock).toBeCalledWith("<h5>Test</h5>");
	});

	it("should render the correct elements when heading 6 is chosen", async () => {
		const { user, onChangeMock } = await setup();

		await user.click(screen.getByTestId(testIds.TEXT_EDITOR_HEADING_MENU));
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_HEADING_CONTROL}-6`));

		expect(onChangeMock).toBeCalledWith("<h6>Test</h6>");
	});

	it("should render the correct elements when bold is chosen", async () => {
		const { user, onChangeMock } = await setup();

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		const control = screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:bold`);

		await clickAndWait(user, control);
		await user.type(canvas, "A");

		expect(onChangeMock).toBeCalledWith("<p>Test<strong>A</strong></p>");

		await user.tripleClick(canvas);
		await user.click(control);

		expect(onChangeMock).toBeCalledWith("<p><strong>TestA</strong></p>");
	});

	it("should render the correct elements when italic is chosen", async () => {
		const { user, onChangeMock } = await setup();

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		const control = screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:italic`);

		await clickAndWait(user, control);
		await user.type(canvas, "A");

		expect(onChangeMock).toBeCalledWith("<p>Test<em>A</em></p>");

		await user.tripleClick(canvas);
		await user.click(control);

		expect(onChangeMock).toBeCalledWith("<p><em>TestA</em></p>");
	});

	it("should render the correct elements when underline is chosen", async () => {
		const { user, onChangeMock } = await setup();

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		const menu = screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-1-2`);

		await user.click(menu);

		await clickAndWait(user, screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:underline`));
		await user.type(canvas, "A");

		expect(onChangeMock).toBeCalledWith("<p>Test<u>A</u></p>");

		await user.tripleClick(canvas);
		await user.click(menu);
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:underline`));

		expect(onChangeMock).toBeCalledWith("<p><u>TestA</u></p>");
	});

	it("should render the correct elements when strikethrough is chosen", async () => {
		const { user, onChangeMock } = await setup();

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		const menu = screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-1-2`);

		await user.click(menu);

		await clickAndWait(user, screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:strike`));
		await user.type(canvas, "A");

		expect(onChangeMock).toBeCalledWith("<p>Test<s>A</s></p>");

		await user.tripleClick(canvas);
		await user.click(menu);
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:strike`));

		expect(onChangeMock).toBeCalledWith("<p><s>TestA</s></p>");
	});

	it("should render the correct elements when superscript is chosen", async () => {
		const { user, onChangeMock } = await setup();

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		const menu = screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-1-2`);

		await user.click(menu);

		await clickAndWait(user, screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:superscript`));
		await user.type(canvas, "A");

		expect(onChangeMock).toBeCalledWith("<p>Test<sup>A</sup></p>");

		await user.tripleClick(canvas);
		await user.click(menu);
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:superscript`));

		expect(onChangeMock).toBeCalledWith("<p><sup>TestA</sup></p>");
	});

	it("should render the correct elements when subscript is chosen", async () => {
		const { user, onChangeMock } = await setup();

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		const menu = screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-1-2`);

		await user.click(menu);

		await clickAndWait(user, screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:subscript`));
		await user.type(canvas, "A");

		expect(onChangeMock).toBeCalledWith("<p>Test<sub>A</sub></p>");

		await user.tripleClick(canvas);
		await user.click(menu);
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:subscript`));

		expect(onChangeMock).toBeCalledWith("<p><sub>TestA</sub></p>");
	});

	it("should strip formatting elements when clear formatting is chosen", async () => {
		const { user, onChangeMock } = await setup({ value: "<p><em><strong>Test</strong></em></p>" });

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		const menu = screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-1-2`);

		await user.tripleClick(canvas);
		await user.click(menu);
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:clear`));

		expect(onChangeMock).toBeCalledWith("<p>Test</p>");
	});

	it("should render the correct elements when bullet list is chosen", async () => {
		const { user, onChangeMock } = await setup();

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:bulletList`));

		expect(onChangeMock).toBeCalledWith("<ul><li><p>Test</p></li></ul>");
	});

	it("should render the correct elements when ordered list is chosen", async () => {
		const { user, onChangeMock } = await setup();

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:orderedList`));

		expect(onChangeMock).toBeCalledWith("<ol><li><p>Test</p></li></ol>");
	});

	it("should render the correct element attribute text alignments are chosen", async () => {
		const { user, onChangeMock } = await setup();

		const menu = screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-3-2`);

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:alignCenter`));

		expect(onChangeMock).toBeCalledWith("<p style=\"text-align: center\">Test</p>");

		await user.click(menu);
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:alignRight`));

		expect(onChangeMock).toBeCalledWith("<p style=\"text-align: right\">Test</p>");

		await user.click(menu);
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:alignJustify`));

		expect(onChangeMock).toBeCalledWith("<p style=\"text-align: justify\">Test</p>");

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:alignLeft`));

		expect(onChangeMock).toBeCalledWith("<p>Test</p>");
	});

	it("should render the correct elements when code block is chosen", async () => {
		const { user, onChangeMock } = await setup();

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-4-1`));
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:codeBlock`));

		expect(onChangeMock).toBeCalledWith("<pre><code>Test</code></pre>");
	});

	it("should render the correct elements when quote is chosen", async () => {
		const { user, onChangeMock } = await setup();

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-4-1`));
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:blockquote`));

		expect(onChangeMock).toBeCalledWith("<blockquote><p>Test</p></blockquote>");
	});
});

describe("TextEditorTiptap component - Linking text", () => {
	it("should render the correct elements when a link is applied to existing text", async () => {
		const { user, onChangeMock } = await setup();

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);

		await user.tripleClick(canvas);
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:link`));

		const url = screen.getByLabelText("URL*");
		const submit = screen.getByRole("button", { name: "Submit" });

		await user.type(url, "https://www.example.com");
		await user.click(submit);

		expect(onChangeMock).toBeCalledWith("<p><a target=\"\" rel=\"noopener noreferrer nofollow\" href=\"https://www.example.com\">Test</a></p>");
	});

	it("should render the correct elements when a link is applied to new text", async () => {
		const { user, onChangeMock } = await setup({ value: "" });

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:link`));

		const url = screen.getByLabelText("URL*");
		const submit = screen.getByRole("button", { name: "Submit" });

		await user.type(url, "https://www.example.com");
		await user.click(submit);

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);
		await user.type(canvas, "A");

		expect(onChangeMock).toBeCalledWith("<p><a target=\"\" rel=\"noopener noreferrer nofollow\" href=\"https://www.example.com\">A</a></p>");
	});

	it("should remove the correct elements when text is unlinked", async () => {
		const value = "<p><a target=\"\" rel=\"noopener noreferrer nofollow\" href=\"https://www.example.com\">Test</a></p>";
		const { user, onChangeMock } = await setup({ value });

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);

		await user.tripleClick(canvas);
		await user.click(screen.getAllByTestId(`${testIds.TEXT_EDITOR_CONTROL}:link`)[0]);

		const remove = screen.getByRole("button", { name: "Remove" });

		await user.click(remove);

		expect(onChangeMock).toBeCalledWith("<p>Test</p>");
	});

	it("should provide the custom onLink handler with the url and new tab", async () => {
		const onLinkMock = vi.fn<TextEditorNextInputSettings["onLink"]>();

		const value = "<p><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://www.example.com\">Test</a></p>";
		const { user } = await setup({ value, onLink: onLinkMock });

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);

		await user.tripleClick(canvas);
		await user.click(screen.getAllByTestId(`${testIds.TEXT_EDITOR_CONTROL}:link`)[0]);

		expect(onLinkMock).toBeCalledWith(expect.objectContaining({
			url: "https://www.example.com",
			newTab: true,
		}));
	});

	it("should render the correct elements when a link is applied to new text using custom link handler", async () => {
		const onLinkMock = vi.fn<TextEditorNextInputSettings["onLink"]>(({ updateLink }) => updateLink({
			url: "https://www.example.com",
			newTab: true,
		}));

		const { user, onChangeMock } = await setup({ onLink: onLinkMock });

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);

		await user.tripleClick(canvas);
		await user.click(screen.getAllByTestId(`${testIds.TEXT_EDITOR_CONTROL}:link`)[0]);

		expect(onChangeMock).toBeCalledWith("<p><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://www.example.com\">Test</a></p>");
	});
});

describe("TextEditorTiptap component - Managing images", () => {
	it("should render the correct elements when an image is added", async () => {
		const { user, onChangeMock } = await setup({ value: "" });

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-4-1`));
		await user.click(screen.getAllByTestId(`${testIds.TEXT_EDITOR_CONTROL}:image`)[0]);

		const source = screen.getByLabelText("Source*");
		const submit = screen.getByRole("button", { name: "Submit" });

		await user.type(source, "https://www.placehold.it/200");
		await user.click(submit);

		expect(onChangeMock).toBeCalledWith("<img src=\"https://www.placehold.it/200\">");
	});

	it("should provide the custom onImage handler with the source and alt text", async () => {
		const onImageMock = vi.fn<TextEditorNextInputSettings["onImage"]>();

		const value = "<img alt=\"Placeholder Image\" src=\"https://www.placehold.it/200\">";
		const { user } = await setup({ value, onImage: onImageMock });

		const canvas = screen.getByTestId(testIds.TEXT_EDITOR_CANVAS);

		await user.tripleClick(canvas);
		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-4-1`));
		await user.click(screen.getAllByTestId(`${testIds.TEXT_EDITOR_CONTROL}:image`)[0]);

		expect(onImageMock).toBeCalledWith(expect.objectContaining({
			src: "https://www.placehold.it/200",
			alt: "Placeholder Image",
		}));
	});

	it("should render the correct elements when an image is added using custom link handler", async () => {
		const onImageMock = vi.fn<TextEditorNextInputSettings["onImage"]>(({ updateImage }) => updateImage({
			src: "https://www.placehold.it/200",
			alt: "Placeholder Image",
		}));

		const { user, onChangeMock } = await setup({ value: "", onImage: onImageMock });

		await user.click(screen.getByTestId(`${testIds.TEXT_EDITOR_CONTROL}:menu-4-1`));
		await user.click(screen.getAllByTestId(`${testIds.TEXT_EDITOR_CONTROL}:image`)[0]);

		expect(onChangeMock).toBeCalledWith("<img src=\"https://www.placehold.it/200\" alt=\"Placeholder Image\">");
	});
});
