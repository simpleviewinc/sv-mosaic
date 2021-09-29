import * as React from "react";
import { useMemo, lazy, Suspense } from "react";
// import { FieldDefProps } from "../../components/Field";
const FormFieldText = lazy(() => import("../FormFieldText"));
const FormFieldTextArea = lazy(() => import("../FormFieldTextArea"));
const FormFieldCheckbox = lazy(() => import("../FormFieldCheckbox"));
// import { FormState } from "./FormTypes";
import { actions } from "./formUtils";

// interface FormProps {
// 	state: FormState;
// 	fields: FieldDefProps[];
// 	dispatch: any;
// }

const componentMap = {
	text: FormFieldText,
	textArea: FormFieldTextArea,
	checkbox: FormFieldCheckbox
};

function Form(props) {
	const onChangeMap = useMemo(() => {
		return props.fields.reduce((prev, curr) => {
			prev[curr.name] = async function (value) {
				await props.dispatch(
					actions.setFieldValue({
						name: curr.name,
						value
					})
				);

				if (curr.onChange) {
					/**
					 * Added value to this onChangeF
					 */
					curr.onChange();
				}
			};

			return prev;
		}, {});
	}, [props.fields]);

	return (
		<form>
			{props.fields.map((args) => {
				const { type, inputSettings, ...fieldProps } = args;

				const Component = componentMap[type];

				const onChange = onChangeMap[fieldProps.name];

				return (
					<Suspense fallback={<div>Loading...</div>} key={fieldProps.name}>
						<Component
							{...fieldProps}
							{...args}
							value={props.state.data[fieldProps.name] || ""}
							touched={props.state.touched[fieldProps.name] || false}
							/**
							 * Either error or errorText can be deleted since
							 * everytime theres an error there will be an error text,
							 * so our comparisons could be:
							 * <FormFieldText error={error && required} />
							 * this depending on the FormField
							 */
							error={props.state.errors[fieldProps.name] ? true : false}
							errorText={props.state.errors[fieldProps.name] || ""}
							onChange={onChange}
						/>
					</Suspense>
				);
			})}
		</form>
	);
}

export default Form;
