import type { ReactElement } from "react";
import React, { useMemo, useCallback } from "react";

import type { FieldDef } from "@root/components/Field";
import type { NodeFormTypeProps, TextEditorUpdateLink } from "../FormFieldTextEditorTypes";

import Form from "@root/components/Form/Form";
import { useForm } from "@root/components/Form/useForm/useForm";
import { LinkOpen } from "./LinkOpen";
import { NodeFormFooter } from "./NodeFormFooter";

type NodeFormLinkProps = NodeFormTypeProps & {
	update: TextEditorUpdateLink;
};

export function NodeFormLink({ editor, getFormValues, onClose, update }: NodeFormLinkProps): ReactElement {
	const controller = useForm();
	const { state: { data: { url } }, handleSubmit } = controller;

	const onSubmit = handleSubmit(useCallback(({ data: { url, newTab, text } }) => {
		update({ url, newTab, text });
	}, [update]));

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
			name: "text",
			label: "Text",
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
