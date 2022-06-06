import * as React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import Form, { useForm } from "../../../forms/Form";
import { PageDef } from "./ExampleTypes";
import { Callbacks } from "../DrawersTypes";
import { useCallback, useMemo } from "react";

const components = {
	Grid,
	Form
};

interface PageProps {
	name: string;
	id: number;
	navigate: (...args: any) => any;
	context: string;
	callbacks?: Callbacks;
}

const DrawerWrap = styled.div`
	width: 75vw;
	`;

const MainWrap = styled.div`
	width: 100%;
	`;

const Page = ({ name, navigate, context, callbacks, id }: PageProps): JSX.Element => {

	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

	const onSubmit = useCallback((data) => {
		callbacks.passData(data["text1"]);
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
		// navigate({context: "back"});
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const fields = useMemo(
		() => 
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					inputSettings: {
						type: "number",
					},
					instructionText: "testing",
				},
			],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onCancel = () => {
		alert("Cancelling form, going back to previous site");

		navigate({context: "back"});
	};

	const pages: PageDef<any>[] = [
		{
			name: "grid",
			component: "Grid",
			args: {
				title: "Test Grid"
			}
		},
		{
			name: "grid2",
			component: "Grid",
			args: {
				title: "Test Grid 2"
			}
		},
		{
			name: "form",
			component: "Form",
			args: {
				title: "Test Form",
				description: "Test description",
				type: "drawer",
				state,
				fields,
				dispatch,
				onCancel,
			}
		},
		{
			name: "form2",
			component: "Form",
			args: {
				title: "Test Form 2"
			}
		}
	];

	const def = pages.find((val) => val.name === name);
	if (def === undefined) {
		throw new Error("wut");
	}

	const Component = components[def.component];
	const Wrap = context === "main" ? MainWrap : DrawerWrap;

	return (
		<Wrap>
			<Component
				key={name}
				id={id}
				config={def}
				navigate={navigate}
				context={context}
				callbacks={callbacks}
				{...def.args}
			/>
		</Wrap>
	);
}

export default Page;