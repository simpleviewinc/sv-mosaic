import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import type { FloatingToolbarProps } from "@root/components/Field/FormFieldTextEditor/FormFieldTextEditorTypes";

import testIds from "@root/utils/testIds";
import { FloatingToolbar } from "@root/components/Field/FormFieldTextEditor/FloatingToolbar";
import { defaultControls } from "@root/components/Field/FormFieldTextEditor/textEditorUtils";

async function setup(props: Partial<FloatingToolbarProps> = {}) {
	const isBusy = { current: false };

	const [{ Editor }, { Document }, { Text }, { Paragraph }] = await Promise.all([
		import("@tiptap/core"),
		import("@tiptap/extension-document"),
		import("@tiptap/extension-text"),
		import("@tiptap/extension-paragraph"),
	]);

	const editor = new Editor({
		extensions: [Document, Paragraph, Text],
	});

	const renderResult = await act(() => render(
		<FloatingToolbar
			anchor={document.createElement("div")}
			controls={defaultControls}
			isBusy={isBusy}
			editor={editor}
			inputSettings={{}}
			open
			selectionTypes={[]}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should flag a busy status if the mouse enters the component", async () => {
		const isBusy = { current: false };

		await setup({ isBusy });

		const toolbar = screen.getByTestId(testIds.TEXT_EDITOR_FLOATING_TOOLBAR);
		await act(async () => fireEvent.mouseEnter(toolbar));
		expect(isBusy.current).toBe(true);
	});

	it("should flag a busy status if the mouse is down on the component", async () => {
		const isBusy = { current: false };

		await setup({ isBusy });

		const toolbar = screen.getByTestId(testIds.TEXT_EDITOR_FLOATING_TOOLBAR);
		await act(async () => fireEvent.mouseDown(toolbar));
		expect(isBusy.current).toBe(true);
	});

	it("should flag a non-busy status if the mouse leaves the component", async () => {
		const isBusy = { current: true };

		await setup({ isBusy });

		const toolbar = screen.getByTestId(testIds.TEXT_EDITOR_FLOATING_TOOLBAR);
		await act(async () => fireEvent.mouseLeave(toolbar));
		expect(isBusy.current).toBe(false);
	});
});
