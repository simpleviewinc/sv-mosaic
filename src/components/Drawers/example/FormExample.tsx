import * as React from "react";
import { useContext } from "react";
import { FormConfig, PageCallbacks } from "./ExampleTypes";
import AppContext from "./AppContext";
import Form, { useForm } from "@root/components/Form";
import { ButtonProps } from "@root/components/Button";

function FormExample({
	config,
	callbacks,
}: {
	config: FormConfig;
	callbacks: PageCallbacks;
}) {
	const appContext = useContext(AppContext);
	const controller = useForm();
	const { state, methods } = controller;

	const buttons = [
		{
			label: "Cancel",
			onClick: appContext.removeDrawer,
			color: "gray" as ButtonProps["color"],
			variant: "outlined" as ButtonProps["variant"],
		},
		{
			label: "Save",
			onClick: () => callbacks.save(state.data),
			color: "yellow" as ButtonProps["color"],
			variant: "contained" as ButtonProps["variant"],
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
							methods.setFieldValue({
								name: "from_parent",
								value: JSON.stringify(data),
							});

							appContext.removeDrawer();
						},
					},
				}),
			color: "teal" as ButtonProps["color"],
			variant: "outlined" as ButtonProps["variant"],
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
