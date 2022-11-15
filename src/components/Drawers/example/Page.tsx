// import * as React from "react";
// import styled from "styled-components";
// import Grid from "./Grid";
// import Form, { formActions, useForm } from "@root/components/Form";
// import { PageDef } from "./ExampleTypes";
// import { Callbacks } from "../DrawersTypes";
// import { useMemo } from "react";
// import Button, { ButtonProps } from "@root/components/Button";

// const components = {
// 	Grid,
// 	Form
// };

// interface PageProps {
// 	name: string;
// 	id: number;
// 	navigate: (...args: any) => any;
// 	context: string;
// 	callbacks?: Callbacks;
// }

// const DrawerWrap = styled.div`
// 	width: 75vw;
// 	`;

// const MainWrap = styled.div`
// 	width: 100%;
// 	`;

// const Page = ({ name, navigate, context, callbacks, id }: PageProps): JSX.Element => {
// 	const { state, dispatch } = useForm();

// 	const onSubmit = async () => {
// 		const { valid, data } = await dispatch(formActions.submitForm());
// 		if (!valid) return;

// 		callbacks.passData(data["text1"]);
// 		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
// 	};

// 	const fields = useMemo(
// 		() =>
// 			[
// 				{
// 					name: "text1",
// 					label: "Simple Text",
// 					type: "text",
// 					instructionText: "testing",
// 				},
// 			],
// 		[]
// 	);

// 	const onCancel = () => {
// 		alert("Cancelling form, going back to previous site");

// 		navigate({context: "back"});
// 	};

// 	const updateField = (value) => {
// 		dispatch(formActions.setFieldValue({name: "text1", value}));

// 		navigate({context: "back"});
// 	}

// 	const buttons: ButtonProps[] = [
// 		{
// 			label: "Cancel",
// 			onClick: onCancel,
// 			color: "gray",
// 			variant: "outlined"
// 		},
// 		{
// 			label: "Save",
// 			onClick: onSubmit,
// 			color: "yellow",
// 			variant: "contained"
// 		}
// 	];

// 	const pages: PageDef<any>[] = [
// 		{
// 			name: "grid",
// 			component: "Grid",
// 			args: {
// 				title: "Test Grid"
// 			}
// 		},
// 		{
// 			name: "grid2",
// 			component: "Grid",
// 			args: {
// 				title: "Test Grid 2"
// 			}
// 		},
// 		{
// 			name: "form",
// 			component: "Form",
// 			args: {
// 				title: "Test Form",
// 				buttons: buttons,
// 				description: "Test description",
// 				type: "drawer",
// 				state,
// 				fields,
// 				dispatch,
// 				onCancel,
// 			}
// 		},
// 		{
// 			name: "form2",
// 			component: "Form",
// 			args: {
// 				title: "Test Form 2"
// 			}
// 		}
// 	];

// 	const def = pages.find((val) => val.name === name);
// 	if (def === undefined) {
// 		throw new Error("wut");
// 	}

// 	const Component = components[def.component];
// 	const Wrap = context === "main" ? MainWrap : DrawerWrap;

// 	return (
// 		<Wrap>
// 			<Component
// 				key={name}
// 				id={id}
// 				config={def}
// 				navigate={navigate}
// 				context={context}
// 				callbacks={callbacks}
// 				{...def.args}
// 			/>
// 			{def.component === "Form" &&
// 				<Button
// 					color="teal"
// 					variant="outlined"
// 					label="Open New Drawer Form"
// 					onClick={() =>
// 						navigate({
// 							context: "drawer",
// 							name: "form",
// 							callbacks: { passData: updateField }
// 						})
// 					}
// 				/>
// 			}
// 		</Wrap>
// 	);
// }

// export default Page;

import * as React from "react";
import Form from "./FormExample";
// import Form from "@root/components/Form";
import Grid from "./Grid";
import { PageConfig, PageCallbacks } from "./Exampletypes";

interface ConfigableMethod {
  (config: any): JSX.Element;
}

const componentMap: Record<PageConfig["type"], ConfigableMethod> = {
	form: Form,
	grid: Grid
};

function Page({
	config,
	callbacks
}: {
  config: PageConfig;
  callbacks: PageCallbacks;
}) {
	const Component = componentMap[config.type];

	return <Component config={config} callbacks={callbacks} />;
}

export default Page;
