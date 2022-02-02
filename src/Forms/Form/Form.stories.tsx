import * as React from 'react';
import { ReactElement, useEffect, useMemo, useState, useCallback } from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

// Utils
import { checkboxOptions } from '@root/forms/FormFieldCheckbox/FormFieldCheckboxUtils'
import { useTable, headers } from '@root/forms/Table/tableUtils';
import { useForm, actions } from "./formUtils";
import { validateEmail, validateSlow, required, validateNumber, validateURL } from "./validators";

// Components
import Form from './Form';
import Modal from '../../components/Modal';

// Types
import { TextFieldDef } from '../FormFieldText/FormFieldTextTypes';
import { FieldDef } from '../../components/Field';

export default {
	title: 'Forms|Form',
	decorators: [withKnobs],
};

export const KitchenSink = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const { addTableRow, editAction, extraActionsTable } = useTable(
		state.data,
		'table',
		dispatch
	);

	const deleteTableRow = () => {
		alert('Delete button clicked');
	};

	const imageVideoOptions = useMemo(() => [
		{
			label: 'Edit',
			action: () => alert('Edit button clicked'),
		},
		{
			label: 'Translate',
			action: () => alert('Translate button clicked'),
		},
	], []);

	const handleSetImage = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: [
					{
						label: 'Title',
						value:
							'Video Thumbnail - YouTube - Visit Santa Fe, New Mexico Video Thumbnail',
					},
					{
						label: 'Type',
						value: 'Image Video Thumbnail',
					},
					{
						label: 'Alt',
						value: '-',
					},
					{
						label: 'Size',
						value: '1280x720',
					},
					{
						label: 'Focus',
						value: 'No',
					},
					{
						label: 'Locales',
						value: '-',
					},
				]
			})
		);
		alert('Set image is called');
	};

	const handleSetVideo = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: [
					{
						label: 'Title',
						value: 'Video Example - This is a video example',
					},
					{
						label: 'Type',
						value: 'Video',
					},
					{
						label: 'Alt',
						value: '-',
					},
					{
						label: 'Size',
						value: '1280x720',
					},
					{
						label: 'Locales',
						value: 'es, en & in',
					},
				]
			})
		);
		alert('Set video is called');
	};

	const handleSetDocument = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: [
					{
						label: 'Title',
						value: 'Document example',
					},
					{
						label: 'Type',
						value: 'Document',
					},
					{
						label: 'Size',
						value: '333 bytes'
					},
					{
						label: 'Size on disk',
						value: '0 bytes',
					},
				]
			})
		);
		alert('Set document is called');
	};

	const handleRemoveImageVideoDocument = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: undefined
			})
		);
	};

	const imageVideoSrc = 'http://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg';

	const handleSetLink = () => {
		dispatch(
			actions.setFieldValue({
				name: 'linkSetup',
				value: {
					title:
						'Video Thumbnail - YouTube - Visit Santa Fe, New Mexico',
					type:
						'Asset Library - Image',
					url:
						'https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/santafenm/maxresdefault_97d9460d-0bb1-4870-9be8-2b9af118360e.jpg',
				}
			})
		);
	};

	const handleRemoveLinkSetup = () => {
		dispatch(
			actions.setFieldValue({
				name: 'linkSetup',
				value: undefined
			})
		);
	};

	let externalOptions = [
		{
			category: 'Category 1',
			label: 'Option 1',
			value: 'option_1-cat_1',
		},
		{
			category: 'Category 1',
			label: 'Option 2',
			value: 'option_2-cat_1',
		},
		{
			category: 'Category 1',
			label: 'Option 3',
			value: 'option_3-cat_1',
		},
		{
			category: 'Category 1',
			label: 'Option 4',
			value: 'option_4-cat_1',
		},
		{
			category: 'Category 2',
			label: 'Option 1 category 2',
			value: 'option_1-cat_2',
		},
		{
			category: 'Category 2',
			label: 'Test option category 2',
			value: 'option_2-cat_2',
		},
		{
			category: 'Category 2',
			label: 'Another option of catergory 2',
			value: 'option_3-cat_2',
		},
		{
			category: 'Category 2',
			label: 'Option 4 category 2',
			value: 'option_4-cat_2',
		},
		{
			category: 'Test Category',
			label: 'You can filter by category',
			value: 'option_1-test_category',
		},
		{
			category: 'Test Category',
			label: 'Very long label that does not fit',
			value: 'option_2-test_category',
		},
		{
			category: 'Category 4',
			label: 'Option 1 category 4',
			value: 'option_1-cat_4',
		},
		{
			label: 'Option without category',
			value: 'option_without_category',
		},
	];

	const updateOptionsCb = (newOption) => {
		externalOptions = [...externalOptions, newOption];
	};

	const fields = useMemo(
		() =>
			[
				{
					name: "textField",
					label: "Simple Text",
					type: "text",
				},
				{
					name: "textArea",
					label: "Text Area",
					type: "textArea",
				},
				{
					name: "check",
					label: "Checkbox",
					type: "checkbox",
					inputSettings: {
						options: checkboxOptions
					},
				},
				{
					name: "chipSelect",
					label: "Chip single select",
					type: "chip",
					inputSettings: {
						options: [
							{
								label: "Label 1",
								value: "label_1"
							},
							{
								label: "Label 2",
								value: "label_2"
							},
							{
								label: "Label 3",
								value: "label_3"
							}
						],
					},
				},
				{
					name: "dropdownSingle",
					label: "Dropdown single select",
					type: "dropdown",
					inputSettings: {
						options: [
							{ title: 'The Shawshank Redemption', year: 1994 },
							{ title: 'The Godfather', year: 1972 },
							{ title: 'The Godfather: Part II', year: 1974 },
							{ title: 'The Dark Knight', year: 2008 },
							{ title: '12 Angry Men', year: 1957 },
							{ title: "Schindler's List", year: 1993 },
							{ title: 'Pulp Fiction', year: 1994 },
							{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
							{ title: 'The Good, the Bad and the Ugly', year: 1966 },
							{ title: 'Fight Club', year: 1999 },
							{ title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
							{ title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
							{ title: 'Forrest Gump', year: 1994 },
							{ title: 'Inception', year: 2010 },
							{ title: 'The Lord of the Rings: The Two Towers', year: 2002 },
							{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
							{ title: 'Goodfellas', year: 1990 },
							{ title: 'The Matrix', year: 1999 },
							{ title: 'Seven Samurai', year: 1954 },
							{ title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
							{ title: 'City of God', year: 2002 },
							{ title: 'Se7en', year: 1995 },
						],
					},
				},
				{
					name: "phoneSelect",
					label: "Phone selection",
					type: "phone",
				},
				{
					name: "radio",
					label: "Radio selection",
					type: "radio",
					inputSettings: {
						options: [
							{
								label: "Label 1",
								value: "label_1"
							},
							{
								label: "Label 2",
								value: "label_2"
							},
							{
								label: "Label 3",
								value: "label_3"
							}
						],
					}
				},
				{
					name: 'toggleSwitch',
					label: 'Toggle field',
					type: 'toggleSwitch',
					inputSettings: {
						toggleLabel: 'To the side'
					}
				},
				{
					name: "color",
					label: "Regular example",
					type: "color",
				},
				{
					name: "date",
					label: "Single Date Picker",
					type: "date",
				},
				{
					name: "dateRange",
					label: "Date Range",
					type: "dateRange",
				},
				{
					name: "time",
					label: "Single Time Picker",
					type: "time",
				},
				{
					name: "dateTime",
					label: "Date and Time Picker",
					type: "dateTime",
				},
				{
					name: 'address',
					label: 'Address field',
					type: 'address'
				},
				{
					name: 'advancedSelection',
					label: 'Advanced Selection field',
					type: 'advancedSelection',
					inputSettings: {
						modalTitle: 'Advanced Selection Modal title',
						checkboxOptions: externalOptions,
						groupByCategory: false,
						updateOptionsCb,
					}
				},
				{
					name: 'imageVideoDocument',
					label: 'Image Video and Document field',
					type: 'imageVideoDocument',
					inputSettings: {
						options: imageVideoOptions,
						handleSetImage,
						handleSetDocument,
						handleSetVideo,
						handleRemove: handleRemoveImageVideoDocument,
						src: imageVideoSrc,
					}
				},
				{
					name: 'linkSetup',
					label: 'Link Setup field',
					type: 'linkSetup',
					inputSettings: {
						handleSetLink,
						handleRemove: handleRemoveLinkSetup
					}
				},
				/* {
					name: 'textEditor',
					label: 'Text Editor field',
					type: 'textEditor'
				}, */
				{
					name: 'table',
					label: 'Table example',
					type: 'table',
					inputSettings: {
						handleAddElement: addTableRow,
						handleEdit: editAction,
						handleDelete: deleteTableRow,
						extraActions: extraActionsTable,
						headers,
					}
				},
				// {
				// 	name: "addLink",
				// 	label: "Add link example",
				// 	type: "addLink",
				// },
				{
					name: "imageUpload",
					label: "Image Upload example",
					type: "imageUpload",
				},
				{
					name: "mapCoordinates",
					label: "Map Coordinates Example",
					type: "mapCoordinates",
					inputSettings: {
						apiKey: 'AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac'
					}
				},
			] as unknown as FieldDef[],
		[addTableRow, externalOptions]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
		</>
	);
};

export const FormWithLayout = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					instructionText: 'Instruction text text1',
					validators: [validateEmail, validateSlow],
					layout: { section: 0, row: 1, col: 0 }
				},
				{
					name: "text2",
					label: "Text with validators and dynamic help",
					type: "text",
					help: state.data.text2,
					instructionText: 'Instruction text text2',
					validators: [validateEmail, validateSlow]
				},
				{
					name: "text3",
					label: "Text that copies to the next input",
					type: "text",
					instructionText: 'Instruction text text3',
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text",
					instructionText: 'Instruction text text1'
				}
			] as FieldDef[],
		// [state.data.text2]
		[]
	);

	const sections = useMemo(() => [
		{
			title: "Section 1",
			description: "Description for section 1",
			fields: [
				// row 1
				[["text1"], ["text2"], ["text3"]],
				// row 2
				[["text3"], ["text4"], ["text1"]],
				[[]],
				// row 3
				[["text3"], ["text4"]]
			]
		},
		{
			title: "Section 2",
			description: "Description for section 2",
			fields: [
				// row 1
				[[], [], []],
				// row 2
				[["text3"], [], ["text1"]],
				[[]],
				// row 3
				[[], ["text4"]]
			]
		},
		{
			title: "Section 3",
			description: "Description for section 3",
			fields: [
				// row 1
				[[], [], []],
				// row 2
				[[], [], []],
				[[]],
				// row 3
				[[], []]
			]
		}
	], [fields]);

	useEffect(() => {
		dispatch(
			actions.setFieldValue({
				name: "text4",
				value: state.data.text3
			})
		);
	}, [state.data.text3]);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				sections={sections}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
			/>
		</>
	);
}

export const CodesandboxExample = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					instructionText: 'testing',
					validators: [validateEmail, validateSlow]
				},
				{
					name: "text2",
					label: "Text with validators and dynamic help",
					type: "text",
					help: state.data.text2,
					validators: [validateEmail, validateSlow]
				},
				{
					name: "text3",
					label: "Text that copies to the next input",
					type: "text"
					// onChange: function () {
					//   dispatch(actions.copyFieldToField({ from: "text3", to: "text4" }));
					// }
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text"
				}
			] as FieldDef[],
		// [state.data.text2]
		[]
	);

	useEffect(() => {
		dispatch(
			actions.setFieldValue({
				name: "text4",
				value: state.data.text3
			})
		);
	}, [state.data.text3]);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const setText1Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text1",
				value: "My New Value"
			})
		);
	};

	const setText2Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text2",
				value: "notanemail"
			})
		);
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<p>Here is the form</p>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
			<div>
				<p>
					Here are some buttons that are not part of the form, but can change
					values in the form proving communication between in/out of the form.
					Notice that settext2 runs the validation after setting the value.
				</p>
				<button onClick={setText1Value}>Set Text1 Value</button>
				<button onClick={setText2Value}>Set Text2 Value</button>
			</div>
		</>
	);
};

export const PerformanceTest = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const hundredFields = [];

	for (let i = 0; i < 100; i++) {
		hundredFields.push({
			name: `text${i}`,
			label: `Simple Text ${i}`,
			type: "text",
			instructionText: 'testing',
			validators: [validateEmail, validateSlow]
		})
	}

	const fields = useMemo(
		() => hundredFields as FieldDef[],
		[]
	);

	useEffect(() => {
		dispatch(
			actions.setFieldValue({
				name: "text4",
				value: state.data.text3
			})
		);
	}, [state.data.text3]);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const setText1Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text1",
				value: "My New Value"
			})
		);
	};

	const setText2Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text2",
				value: "notanemail"
			})
		);
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<p>Here is the form</p>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
			<div>
				<p>
					Here are some buttons that are not part of the form, but can change
					values in the form proving communication between in/out of the form.
					Notice that settext2 runs the validation after setting the value.
				</p>
				<button onClick={setText1Value}>Set Text1 Value</button>
				<button onClick={setText2Value}>Set Text2 Value</button>
			</div>
		</>
	);
};

export const PerformanceWithSubmit = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const hundredFields = [];

	for (let i = 0; i < 100; i++) {
		hundredFields.push({
			name: `text${i}`,
			label: `Simple Text ${i}`,
			type: "text",
			instructionText: 'testing',
			validators: [required]
		})
	}

	const fields = useMemo(
		() => hundredFields as FieldDef<TextFieldDef>[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				title='Performance with submit'
				onSubmit={onSubmit}
			/>
		</>
	);
};

export const SubmitExternalButtons = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Full Name",
					type: "text",
					instructionText: 'testing',
				},
				{
					name: "text2",
					label: "Email",
					type: "text",
					validators: [required, validateEmail]
				},
				{
					name: "text3",
					label: "Age",
					type: "text",
				},
				{
					name: "text4",
					label: "City",
					type: "text"
				}
			] as FieldDef[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const clickHandler = () => {
		dispatch(
			actions.submitForm()
		);
	}

	const submitForm = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(submitForm);
	}, [submitForm, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<p>Here is the form</p>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
			<button onClick={clickHandler}>Submit</button>
		</>
	);
};

export const SubmitInternalButtons = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const { addTableRow, editAction, extraActionsTable } = useTable(
		state.data,
		'table',
		dispatch
	);

	const deleteTableRow = () => {
		alert('Delete button clicked');
	};

	const imageVideoOptions = useMemo(() => [
		{
			label: 'Edit',
			action: () => alert('Edit button clicked'),
		},
		{
			label: 'Translate',
			action: () => alert('Translate button clicked'),
		},
	], []);

	const handleSetImage = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: [
					{
						label: 'Title',
						value:
							'Video Thumbnail - YouTube - Visit Santa Fe, New Mexico Video Thumbnail',
					},
					{
						label: 'Type',
						value: 'Image Video Thumbnail',
					},
					{
						label: 'Alt',
						value: '-',
					},
					{
						label: 'Size',
						value: '1280x720',
					},
					{
						label: 'Focus',
						value: 'No',
					},
					{
						label: 'Locales',
						value: '-',
					},
				]
			})
		);
		alert('Set image is called');
	};

	const handleSetVideo = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: [
					{
						label: 'Title',
						value: 'Video Example - This is a video example',
					},
					{
						label: 'Type',
						value: 'Video',
					},
					{
						label: 'Alt',
						value: '-',
					},
					{
						label: 'Size',
						value: '1280x720',
					},
					{
						label: 'Locales',
						value: 'es, en & in',
					},
				]
			})
		);
		alert('Set video is called');
	};

	const handleSetDocument = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: [
					{
						label: 'Title',
						value: 'Document example',
					},
					{
						label: 'Type',
						value: 'Document',
					},
					{
						label: 'Size',
						value: '333 bytes'
					},
					{
						label: 'Size on disk',
						value: '0 bytes',
					},
				]
			})
		);
		alert('Set document is called');
	};

	const handleRemoveImageVideoDocument = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: undefined
			})
		);
	};

	const imageVideoSrc = 'http://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg';

	const handleSetLink = () => {
		dispatch(
			actions.setFieldValue({
				name: 'linkSetup',
				value: {
					title:
						'Video Thumbnail - YouTube - Visit Santa Fe, New Mexico',
					type:
						'Asset Library - Image',
					url:
						'https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/santafenm/maxresdefault_97d9460d-0bb1-4870-9be8-2b9af118360e.jpg',
				}
			})
		);
	};

	const handleRemoveLinkSetup = () => {
		dispatch(
			actions.setFieldValue({
				name: 'linkSetup',
				value: undefined
			})
		);
	};

	let externalOptions = [
		{
			category: 'Category 1',
			label: 'Option 1',
			value: 'option_1-cat_1',
		},
		{
			category: 'Category 1',
			label: 'Option 2',
			value: 'option_2-cat_1',
		},
		{
			category: 'Category 1',
			label: 'Option 3',
			value: 'option_3-cat_1',
		},
		{
			category: 'Category 1',
			label: 'Option 4',
			value: 'option_4-cat_1',
		},
		{
			category: 'Category 2',
			label: 'Option 1 category 2',
			value: 'option_1-cat_2',
		},
		{
			category: 'Category 2',
			label: 'Test option category 2',
			value: 'option_2-cat_2',
		},
		{
			category: 'Category 2',
			label: 'Another option of catergory 2',
			value: 'option_3-cat_2',
		},
		{
			category: 'Category 2',
			label: 'Option 4 category 2',
			value: 'option_4-cat_2',
		},
		{
			category: 'Test Category',
			label: 'You can filter by category',
			value: 'option_1-test_category',
		},
		{
			category: 'Test Category',
			label: 'Very long label that does not fit',
			value: 'option_2-test_category',
		},
		{
			category: 'Category 4',
			label: 'Option 1 category 4',
			value: 'option_1-cat_4',
		},
		{
			label: 'Option without category',
			value: 'option_without_category',
		},
	];

	const updateOptionsCb = (newOption) => {
		externalOptions = [...externalOptions, newOption];
	};

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Full Name",
					type: "text",
					required: true,
					instructionText: 'testing',
					validators: [required],
				},
				{
					name: "text2",
					label: "age",
					type: "text",
					required: true,
					validators: [required],
				},
				{
					name: "check1",
					label: "Text that copies to the next input",
					type: "checkbox",
					required: true,
					inputSettings: {
						options: checkboxOptions,
					},
					validators: [required]
				},
				{
					name: "textArea",
					label: "Text Area",
					type: "textArea",
					required: true,
					validators: [required],
				},
				{
					name: "chip",
					label: "Text that receives copy",
					type: "chip",
					required: true,
					inputSettings: {
						options: [
							{
								label: "Label 1",
								value: "label_1"
							},
							{
								label: "Label 2",
								value: "label_2"
							},
							{
								label: "Label 3",
								value: "label_3"
							}
						],
					},
					validators: [required],
				},
				{
					name: "dropdownsingle",
					label: "Dropdown single select",
					type: "dropdown",
					required: true,
					inputSettings: {
						options: [
							{ title: 'The Shawshank Redemption', year: 1994 },
							{ title: 'The Godfather', year: 1972 },
							{ title: 'The Godfather: Part II', year: 1974 },
							{ title: 'The Dark Knight', year: 2008 },
							{ title: '12 Angry Men', year: 1957 },
							{ title: "Schindler's List", year: 1993 },
							{ title: 'Pulp Fiction', year: 1994 },
							{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
							{ title: 'The Good, the Bad and the Ugly', year: 1966 },
							{ title: 'Fight Club', year: 1999 },
							{ title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
							{ title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
							{ title: 'Forrest Gump', year: 1994 },
							{ title: 'Inception', year: 2010 },
							{ title: 'The Lord of the Rings: The Two Towers', year: 2002 },
							{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
							{ title: 'Goodfellas', year: 1990 },
							{ title: 'The Matrix', year: 1999 },
							{ title: 'Seven Samurai', year: 1954 },
							{ title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
							{ title: 'City of God', year: 2002 },
							{ title: 'Se7en', year: 1995 },
						],
					},
					validators: [required],
				},
				{
					name: "phoneSelect",
					label: "Phone selection",
					type: "phone",
					required: true,
					validators: [required]
				},
				{
					name: "radio",
					label: "Radio selection",
					type: "radio",
					required: true,
					inputSettings: {
						options: [
							{
								label: "Label 1",
								value: "label_1"
							},
							{
								label: "Label 2",
								value: "label_2"
							},
							{
								label: "Label 3",
								value: "label_3"
							}
						],
					},
					validators: [required],
				},
				{
					name: 'toggleSwitch',
					label: 'Toggle field',
					type: 'toggleSwitch',
					required: true,
					inputSettings: {
						toggleLabel: 'To the side'
					},
					validators: [required],
				},
				{
					name: "color",
					label: "Regular example",
					type: "color",
					required: true,
					validators: [required],
				},
				{
					name: "date",
					label: "Single Date Picker",
					type: "date",
					required: true,
					validators: [required],
				},
				{
					name: "dateRange",
					label: "Date Range",
					type: "dateRange",
					required: true,
					validators: [required],
				},
				{
					name: "time",
					label: "Single Time Picker",
					type: "time",
					required: true,
					validators: [required],
				},
				{
					name: "dateTime",
					label: "Date and Time Picker",
					type: "dateTime",
					required: true,
					validators: [required],
				},
				{
					name: 'address',
					label: 'Address field',
					type: 'address',
					required: true,
				},
				{
					name: 'advancedSelection',
					label: 'Advanced Selection field',
					type: 'advancedSelection',
					required: true,
					inputSettings: {
						modalTitle: 'Advanced Selection Modal title',
						checkboxOptions: externalOptions,
						groupByCategory: false,
						updateOptionsCb,
					}
				},
				{
					name: 'imageVideoDocument',
					label: 'Image Video and Document field',
					type: 'imageVideoDocument',
					required: true,
					inputSettings: {
						options: imageVideoOptions,
						handleSetImage,
						handleSetDocument,
						handleSetVideo,
						handleRemove: handleRemoveImageVideoDocument,
						src: imageVideoSrc,
					},
					validators: [required],
				},
				{
					name: 'linkSetup',
					label: 'Link Setup field',
					type: 'linkSetup',
					required: true,
					inputSettings: {
						handleSetLink,
						handleRemove: handleRemoveLinkSetup
					},
					validators: [required],
				},
				/* {
					name: 'textEditor',
					label: 'Text Editor field',
					type: 'textEditor',
					validators: [required],
				}, */
				{
					name: 'table',
					label: 'Table example',
					type: 'table',
					required: true,
					inputSettings: {
						handleAddElement: addTableRow,
						handleEdit: editAction,
						handleDelete: deleteTableRow,
						extraActions: extraActionsTable,
						headers
					},
				},
				// {
				// 	name: "addLink",
				// 	label: "Add link example",
				// 	type: "addLink",
				// 	instructionText: 'testing',
				// 	validators: [required],
				// },
				{
					name: "imageUpload",
					label: "Image Upload example",
					type: "imageUpload",
					required: true,
				},
				{
					name: "mapCoordinates",
					label: "Map Coordinates Example",
					type: "mapCoordinates",
					required: true,
					inputSettings: {
						apiKey: 'AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac'
					}
				},

			] as unknown as FieldDef[],
		[addTableRow, externalOptions]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert('Cancelling form, going back to previous site');
	};

	const cancelButtonAttrs = useMemo(() => ({
		disabled: !!state.data.text1 === false,
	}), [state.data.text1]);

	const submitButtonAttrs = useMemo(() => ({
		disabled: !!state.data.text2 === false,
		children: state?.data?.text2,
		smallerButton: true,
	}), [state.data.text2]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				cancelButtonAttrs={cancelButtonAttrs}
				onSubmit={onSubmit}
				submitButtonAttrs={submitButtonAttrs}
			/>
		</>
	);
};

export const GenericModal = (): ReactElement => {
	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

	const [open, setOpen] = useState(false);

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Full Name",
					type: "text",
					instructionText: 'testing',
					validators: [required, validateEmail],
				},
				{
					name: "text2",
					label: "age",
					type: "text",
					validators: [required],
				},
				{
					name: "check1",
					label: "Text that copies to the next input",
					type: "checkbox",
					inputSettings: {
						options: checkboxOptions,
					},
					validators: [required]
				},
			] as unknown as FieldDef[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		setOpen(false);
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		setOpen(false);
		alert('Cancelling form, going back to previous site');
	};

	const cancelButtonAttrs = useMemo(() => ({
		disabled: !!state.data.text1 === false,
	}), [state.data.text1]);

	const submitButtonAttrs = useMemo(() => ({
		children: state?.data?.text2,
		smallerButton: true,
	}), [state.data.text2]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Modal
				title={'yes'}
				state={state}
				dispatch={dispatch}
				fields={fields}
				open={open}
				onCancel={onCancel}
				cancelButtonAttrs={cancelButtonAttrs}
				onSubmit={onSubmit}
				submitButtonAttrs={submitButtonAttrs}
			/>
			<button onClick={() => setOpen(true)}>Open modal</button>
		</>
	);
};

export const FormAndModal = (): ReactElement => {
	const formReducer = useForm();
	const modalReducer = useForm();

	const [open, setOpen] = useState(false);

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Full Name",
					type: "text",
					instructionText: 'testing',
					validators: [required, validateEmail],
				},
				{
					name: "text2",
					label: "age",
					type: "text",
					validators: [required],
				},
				{
					name: "check1",
					label: "Text that copies to the next input",
					type: "checkbox",
					inputSettings: {
						options: checkboxOptions,
					},
					validators: [required]
				},
			] as unknown as FieldDef[],
		[]
	);

	useMemo(() => {
		formReducer.registerFields(fields);
		modalReducer.registerFields(fields);
	}, [fields, formReducer.registerFields, modalReducer.registerFields]);

	const onSubmit = useCallback((data) => {
		setOpen(false);
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [formReducer.state.validForm, modalReducer.state.validForm]);

	useMemo(() => {
		formReducer.registerOnSubmit(onSubmit);
		modalReducer.registerOnSubmit(onSubmit);
	}, [onSubmit, formReducer.registerOnSubmit, modalReducer.registerOnSubmit]);

	const onCancel = () => {
		setOpen(false);
		alert('Cancelling form, going back to previous site');
	};

	return (
		<>
			<pre>Form data: {JSON.stringify(formReducer.state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				state={formReducer.state}
				fields={fields}
				dispatch={formReducer.dispatch}
				events={formReducer.events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
			<pre>Modal data: {JSON.stringify(modalReducer.state, null, "  ")}</pre>
			<Modal
				title={'yes'}
				state={modalReducer.state}
				dispatch={modalReducer.dispatch}
				fields={fields}
				open={open}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
			<button onClick={() => setOpen(true)}>Open modal</button>
		</>
	);
};

export const CustomFields = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const CustomText = (props) => {
		return <input type='text' onChange={(e) => props.onChange(e.target.value)} />
	}

	const CustomTextArea = (props) => {
		return <textarea rows={4} cols={20} onChange={(e) => props.onChange(e.target.value)} />
	}

	const CustomCheckbox = (props) => {
		return (
			<>
				<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={(e) => props.onChange(e.target.value)} />
				<label htmlFor="vehicle1"> I have a bike</label><br />
			</>
		)
	}

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Custom Text",
					type: CustomText,
					instructionText: 'testing',
					helperText: 'helper text bottom',
					validators: [required]
				},
				{
					name: "textarea",
					label: "Custom textArea",
					type: CustomTextArea,
					instructionText: 'testing',
					helperText: 'helper text bottom',
					validators: [required]
				},
				{
					name: "checkbox",
					label: "Custom checkbox",
					type: CustomCheckbox,
					instructionText: 'testing',
					helperText: 'helper text bottom',
					validators: [required]
				},
			] as FieldDef[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const setText1Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text1",
				value: "My New Value"
			})
		);
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
			<div>
				<button onClick={setText1Value}>Set Text1 Value</button>
			</div>
		</>
	);
};

export const Validators = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "required",
					label: "Required",
					type: 'text',
					required: true,
				},
				{
					name: "email",
					label: "Email",
					type: 'text',
					validators: [validateEmail]
				},
				{
					name: "slow",
					label: "Slow",
					type: 'text',
					validators: [validateSlow]
				},
				{
					name: "number",
					label: "Number",
					type: 'text',
					validators: [validateNumber]
				},
				{
					name: "url",
					label: "URL",
					type: 'text',
					validators: [validateURL]
				},
			] as FieldDef<TextFieldDef>[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert('Cancelling form, going back to previous site');
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title='Validators story'
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onSubmit={onSubmit}
				onCancel={onCancel}
			/>
		</>
	);
};