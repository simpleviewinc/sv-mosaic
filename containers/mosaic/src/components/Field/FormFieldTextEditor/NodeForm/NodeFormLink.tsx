import React, { useMemo, useCallback, ReactElement } from "react";

import type { FieldDef } from "@root/components/Field";
import type { NodeFormTypeProps } from "../FormFieldTextEditorTypes";

import Form, { useForm } from "@root/components/Form";
import { LinkOpen } from "./LinkOpen";
import { NodeFormFooter } from "./NodeFormFooter";

export function NodeFormLink({ editor, getFormValues, onClose }: NodeFormTypeProps): ReactElement {
	const controller = useForm();
	const { state: { data: { url } }, handleSubmit } = controller;

	const onSubmit = handleSubmit(useCallback(({ url, newTab }) => {
		editor.chain().focus()
			.extendMarkRange("link")
			.setLink({
				href: url,
				target: newTab ? "_blank" : "",
			})
			.run();

		onClose();
	}, [editor, onClose]));

	const onRemove = useCallback(() => {
		editor.chain().focus()
			.extendMarkRange("link")
			.unsetLink()
			.run();

		onClose();
	}, [editor, onClose]);

	const fields = useMemo<FieldDef[]>(() => [
		{
			name: "url",
			label: "URL",
			type: "text",
			required: true,
			validateOn: "onSubmit",
		},
		{
			name: "open",
			type: () => <LinkOpen url={url} />,
			show: ({ data }) => Boolean(data.url),
		},
		{
			name: "newTab",
			label: "Open in new tab",
			type: "toggle",
		},
	], [url]);

	return (
		<Form
			{...controller}
			fields={fields}
			spacing="compact"
			autoFocus
			getFormValues={getFormValues}
			onSubmit={onSubmit}
			bottomSlot={(
				<NodeFormFooter onRemove={onRemove} />
			)}
		/>
	);
}
