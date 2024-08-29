import React, { useMemo, useCallback, ReactElement } from "react";

import type { FieldDef } from "@root/components/Field";
import type { NodeFormTypeProps } from "../FormFieldTextEditorTypes";

import Form, { useForm } from "@root/components/Form";
import { NodeFormFooter } from "./NodeFormFooter";

export function NodeFormImage({ editor, getFormValues, onClose }: NodeFormTypeProps): ReactElement {
	const controller = useForm();
	const { handleSubmit } = controller;

	const onSubmit = handleSubmit(useCallback(({ alt, src }) => {
		editor.chain().focus()
			.setImage({ alt, src })
			.run();

		onClose();
	}, [editor, onClose]));

	const fields = useMemo<FieldDef[]>(() => [
		{
			name: "src",
			label: "Source",
			type: "text",
			required: true,
			validateOn: "onSubmit",
		},
		{
			name: "alt",
			label: "Alternative Text",
			type: "text",
			validateOn: "onSubmit",
		},
	], []);

	return (
		<Form
			{...controller}
			fields={fields}
			spacing="compact"
			autoFocus
			getFormValues={getFormValues}
			onSubmit={onSubmit}
			bottomSlot={<NodeFormFooter />}
		/>
	);
}
