import type { ReactElement } from "react";
import React, { useMemo, useCallback } from "react";

import type { FieldDef } from "@root/components/Field";
import type { NodeFormTypeProps, TextEditorUpdateImage } from "../FormFieldTextEditorTypes";

import Form, { useForm } from "@root/components/Form";
import { NodeFormFooter } from "./NodeFormFooter";

type NodeFormImageProps = NodeFormTypeProps & {
	update: TextEditorUpdateImage;
};

export function NodeFormImage({ getFormValues, update }: NodeFormImageProps): ReactElement {
	const controller = useForm();
	const { handleSubmit } = controller;

	const onSubmit = handleSubmit(useCallback(({ data: { alt, src } }) => {
		update({ alt, src });
	}, [update]));

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
