import * as React from "react";
import { useContext } from "react";
import type { FormConfig, PageCallbacks } from "./ExampleTypes";
import AppContext from "./AppContext";
import Form, { useForm } from "#mosaic/components/Form";
import type { ButtonProps } from "@simpleview/sv-mosaic/components/Button";

function FormExample({
	config,
	callbacks,
}: {
	config: FormConfig;
	callbacks: PageCallbacks;
}) {
	const appContext = useContext(AppContext);
	const controller = useForm();
	const { state, methods: { setFieldValue } } = controller;

	const buttons: ButtonProps[] = [
		{
			label: "Cancel",
			onClick: appContext.removeDrawer,
			intent: "secondary",
			variant: "contained",
		},
		{
			label: "Save",
			onClick: () => callbacks.save(state.data),
			intent: "primary",
			variant: "contained",
			show: callbacks.save ? true : false,
		},
		{
			label: "Open new form",
			onClick: () =>
				appContext.addDrawer({
					config: {
						type: "form",
						title: "Sub-Form",
						fields: [
							{
								name: "wut",
								label: "Wut",
								type: "text",
							},
							{
								name: "is",
								label: "Is",
								type: "text",
							},
							{
								name: "this",
								label: "This",
								type: "text",
							},
							{
								name: "from_parent",
								label: "From Parent",
								type: "text",
							},
						],
					},
					callbacks: {
						save: (data) => {
							setFieldValue({
								name: "from_parent",
								value: JSON.stringify(data),
							});

							appContext.removeDrawer();
						},
					},
				}),
			intent: "secondary",
			variant: "contained",
			tooltip: "Clicking opens form in a new drawer",
		},
	];

	return (
		<div>
			<Form
				title={config.title}
				fields={config.fields}
				buttons={buttons}
				onBack={appContext.removeDrawer}
				{...controller}
			/>
			<p>
				Data:
				{JSON.stringify(state.data)}
			</p>
		</div>
	);
}

export default FormExample;
