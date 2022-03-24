import * as React from 'react';
import { ReactElement, useEffect, useMemo, useState, useCallback } from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';

// Utils
import { checkboxOptions } from '@root/forms/FormFieldCheckbox/FormFieldCheckboxUtils'
import { useTable, headers } from '@root/forms/FormFieldTable/tableUtils';
import { useForm, actions } from "./formUtils";
import { useImageVideoLinkDocumentBrowsing, imageVideoSrc } from '@root/forms/FormFieldImageVideoLinkDocumentBrowsing/ImageVideoLinkDocumentBrowsingUtils';
import { validateEmail, validateSlow, required, validateNumber, validateURL } from "./validators";
import { menuOptions } from '../MenuFormFieldCard/MenuFormFieldUtils';

// Components
import Form from './Form';
import Drawer from '@root/components/Drawer.jsx';

// Types
import { TextFieldDef } from '../FormFieldText/FormFieldTextTypes';
import { FieldDef } from '../../components/Field';
import { AdvancedSelectionDef } from '../FormFieldAdvancedSelection';
import { TableDef } from '../FormFieldTable';
import { ImageUploadDef } from '../FormFieldImageUpload';
import { MapCoordinatesDef } from '../FormFieldMapCoordinates';
import { ImageVideoDocumentLinkBrowsingDef } from '../FormFieldImageVideoLinkDocumentBrowsing';
import { FormFieldToggleSwitchDef } from '../FormFieldToggleSwitch';
import { FormFieldRadioDef } from '../FormFieldRadio';
import { DropdownSingleSelectionDef } from '../FormFieldDropdownSingleSelection';
import { FormFieldChipSingleSelectDef } from '../FormFieldChipSingleSelect';
import { FormFieldCheckboxDef } from '../FormFieldCheckbox';
import { TextAreaDef } from '../FormFieldTextArea';

export default {
	title: 'Forms|Form',
	decorators: [withKnobs],
};

const deleteTableRow = () => {
	alert('Delete button clicked');
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

const createNewOption = (newOption) => {
	externalOptions = [...externalOptions, newOption];
};

const getSelected = async (selectedOptions) => {
	if (!selectedOptions) return;

	return selectedOptions.map((selectedOption) =>
		externalOptions.find(o => o.value === selectedOption)
	);
}

const onCancel = () => {
	alert('Cancelling form, going back to previous site');
};

export const Playground = (): ReactElement => {
	const [loadReady, setLoadReady] = useState(false);
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const { addTableRow, editAction, extraActionsTable } = useTable(
		state.data,
		'table',
		dispatch
	);
	const { setImage, setVideo, setDocument, setLink, handleRemove } = useImageVideoLinkDocumentBrowsing(dispatch, 'imageVideoDocumentLink');

	const prepopulate = boolean('Prepopulate', false);
	const required = boolean('Required', true);
	const disabled = boolean('Disabled', false);
	const showSections = boolean('Show sections', false);
	const prepopulateValues = object('Prepolulate values', {
		'textField': 'Text field prepopulated',
		'textArea': 'Text area prepopulated',
		'check': [
			"label_1",
			"label_2"
		],
		'advancedSelection': [
			'option_1-cat_1',
			'option_3-cat_1',
			'option_1-cat_2',
			'option_3-cat_2'
		]
	});

	const fields = useMemo(
		() =>
			[
				{
					name: "textField",
					label: "Simple Text",
					type: "text",
					disabled,
					required
				} as FieldDef<TextFieldDef>,
				{
					name: "textArea",
					label: "Text Area",
					type: "textArea",
					disabled,
					required
				} as FieldDef<TextAreaDef>,
				{
					name: "check",
					label: "Checkbox",
					type: "checkbox",
					disabled,
					required,
					inputSettings: {
						options: checkboxOptions
					},
				} as FieldDef<FormFieldCheckboxDef>,
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
					disabled,
					required
				} as FieldDef<FormFieldChipSingleSelectDef>,
				{
					name: "dropdownSingle",
					label: "Dropdown single select",
					type: "dropdown",
					disabled,
					required,
					inputSettings: {
						options: [
							{ title: 'The Shawshank Redemption', value: 1994 },
							{ title: 'The Godfather', value: 1972 },
							{ title: 'The Godfather: Part II', value: 1974 },
							{ title: 'The Dark Knight', value: 2008 },
							{ title: '12 Angry Men', value: 1957 },
							{ title: "Schindler's List", value: 1993 },
							{ title: 'Pulp Fiction', value: 1994 },
							{ title: 'The Lord of the Rings: The Return of the King', value: 2003 },
							{ title: 'The Good, the Bad and the Ugly', value: 1966 },
							{ title: 'Fight Club', value: 1999 },
							{ title: 'The Lord of the Rings: The Fellowship of the Ring', value: 2001 },
							{ title: 'Star Wars: Episode V - The Empire Strikes Back', value: 1980 },
							{ title: 'Forrest Gump', value: 1994 },
							{ title: 'Inception', value: 2010 },
							{ title: 'The Lord of the Rings: The Two Towers', value: 2002 },
							{ title: "One Flew Over the Cuckoo's Nest", value: 1975 },
							{ title: 'Goodfellas', value: 1990 },
							{ title: 'The Matrix', value: 1999 },
							{ title: 'Seven Samurai', value: 1954 },
							{ title: 'Star Wars: Episode IV - A New Hope', value: 1977 },
							{ title: 'City of God', value: 2002 },
							{ title: 'Se7en', value: 1995 },
						],
					},
				} as FieldDef<DropdownSingleSelectionDef>,
				{
					name: "phoneSelect",
					label: "Phone selection",
					type: "phone",
					disabled,
					required
				},
				{
					name: "radio",
					label: "Radio selection",
					type: "radio",
					disabled,
					required,
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
				} as FieldDef<FormFieldRadioDef>,
				{
					name: 'toggleSwitch',
					label: 'Toggle field',
					disabled,
					required,
					type: 'toggleSwitch',
					inputSettings: {
						toggleLabel: 'To the side'
					}
				} as FieldDef<FormFieldToggleSwitchDef>,
				{
					name: "color",
					label: "Color selector example",
					disabled,
					required,
					type: "color",
				},
				{
					name: "date",
					label: "Single Date Picker",
					type: "date",
					disabled,
					required,
				},
				{
					name: 'address',
					label: 'Address field',
					type: 'address',
					disabled,
					required
				},
				{
					name: 'advancedSelection',
					label: 'Advanced Selection field',
					type: 'advancedSelection',
					disabled,
					required,
					inputSettings: {
						checkboxOptions: externalOptions,
						getSelected,
						createNewOption
					}
				} as FieldDef<AdvancedSelectionDef>,
				{
					name: 'imageVideoDocumentLink',
					label: 'Image Video and Document field',
					type: 'imageVideoDocumentLink',
					disabled,
					required,
					inputSettings: {
						options: menuOptions,
						handleSetImage: setImage,
						handleSetDocument: setDocument,
						handleSetVideo: setVideo,
						handleSetLink: setLink,
						handleRemove,
						src: imageVideoSrc,
					}
				} as FieldDef<ImageVideoDocumentLinkBrowsingDef>,
				{
					name: 'textEditor',
					label: 'Text Editor field',
					type: 'textEditor',
					disabled,
					required
				},
				{
					name: 'table',
					label: 'Table example',
					type: 'table',
					disabled,
					required,
					inputSettings: {
						handleAddElement: addTableRow,
						handleEdit: editAction,
						handleDelete: deleteTableRow,
						extraActions: extraActionsTable,
						headers,
					}
				} as FieldDef<TableDef>,
				{
					name: "imageUpload",
					label: "Image Upload example",
					type: "imageUpload",
					disabled,
					required,
					inputSettings: {
						options: menuOptions
					}
				} as FieldDef<ImageUploadDef>,
				{
					name: "mapCoordinates",
					label: "Map Coordinates Example",
					type: "mapCoordinates",
					disabled,
					required,
					inputSettings: {
						apiKey: 'AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac'
					}
				} as FieldDef<MapCoordinatesDef>,
			] as unknown as FieldDef[],
		[externalOptions, disabled, required]
	);

	const sections = [
		{
			title: text('Title section 1', 'Section 1'),
			description: text('Description for section 1', 'Description for section 1'),
			fields: [
				// row 1
				[['textField'], ['textArea'], ['check']],
				// row 2
				[['chipSelect'], ['dropdownSingle'], ['table']],
				[[]],
				// row 3
				[['phoneSelect'], ['radio']]
			]
		},
		{
			title: text('Title section 2', 'Section 2'),
			description: text('Description for section 2', 'Description for section 2'),
			fields: [
				// row 1
				[[], [], []],
				// row 2
				[['toggleSwitch'], [], ['mapCoordinates']],
				[[]],
				// row 3
				[[], ['advancedSelection']]
			]
		},
		{
			title: text('Title section 3', 'Section 3'),
			description: text('Description for section 3', 'Description for section 3'),
			fields: [
				// row 1
				[['color'], ['date'],],
				// row 2
				[['textEditor'], []]
			]
		}
	];

	const onLoad = useCallback(async () => {
		return {
			...prepopulateValues
		};
	}, [prepopulateValues]);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, ' '));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	useEffect(() => {
		const resetForm = async () => {
			await dispatch(actions.resetForm());
			setLoadReady(true);
		};
		prepopulate ? resetForm() : setLoadReady(false);
	}, [prepopulate])

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				state={state}
				fields={fields}
				dispatch={dispatch}
				getFormValues={loadReady && onLoad}
				events={events}
				sections={showSections && sections}
				submitButtonAttrs={{ label: text('Submit button', 'Save') }}
				cancelButtonAttrs={{ label: text('Cancel button', 'Cancel') }}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};

export const FormWithLayout = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: 'text1',
					label: 'Simple Text',
					type: 'text',
					instructionText: 'Instruction text text1',
					validators: [validateEmail, validateSlow],
					layout: { section: 0, row: 1, col: 0 },
				},
				{
					name: 'text2',
					label: 'Text with validators and dynamic help',
					type: 'text',
					help: state.data.text2,
					instructionText: 'Instruction text text2',
					validators: [validateEmail, validateSlow]
				},
				{
					name: 'text3',
					label: 'Text that copies to the next input',
					type: 'text',
					instructionText: 'Instruction text text3',
				},
				{
					name: 'text4',
					label: 'Text that receives copy',
					type: 'text',
					instructionText: 'Instruction text text1'
				},
				{
					name: 'color',
					label: 'Color selector example',
					type: 'color',
				},
				{
					name: 'check',
					label: 'Checkbox',
					type: 'checkbox',
					inputSettings: {
						options: checkboxOptions
					},
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
					name: 'imageUpload',
					label: 'Image Upload example',
					type: 'imageUpload',
					inputSettings: {
						options: menuOptions
					}
				},
				{
					name: 'textEditor',
					label: 'Text Editor field',
					type: 'textEditor',
				},
			] as FieldDef[],
		[]
	);

	const sections = useMemo(() => [
		{
			title: 'Section 1',
			description: 'Description for section 1',
			fields: [
				// row 1
				[['text1'], ['text2'], ['text3']],
				// row 2
				[['check'], ['text4'], ['color']],
				[[]],
				// row 3
				[['toggleSwitch'], ['imageUpload']]
			]
		},
		{
			title: 'Section 2',
			description: 'Description for section 2',
			fields: [
				// row 1
				[['check'], ['toggleSwitch'], ['color']],
				// row 2
				[[], [], []],
				[[]],
				// row 3
				[[], ['textEditor']]
			]
		},
		{
			title: 'Section 3',
			description: 'Description for section 3',
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
				name: 'text4',
				value: state.data.text3
			})
		);
	}, [state.data.text3]);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	return (
		<>
			<pre>{JSON.stringify(state, null, '  ')}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				sections={sections}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
			/>
		</>
	);
}

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
				onCancel={onCancel}
			/>
		</>
	);
};

export const RuntimeBehaviors = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

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
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text"
				}
			] as FieldDef[],
		[]
	);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

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
			<Form
				title='Runtime behaviors'
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onSubmit={onSubmit}
				onCancel={onCancel}
			/>
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

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

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
			<Form
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onSubmit={onSubmit}
				onCancel={onCancel}
			/>
			<button onClick={clickHandler}>Submit</button>
		</>
	);
};

export const DrawerForm = (): ReactElement => {
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
		label: state?.data?.text2,
	}), [state.data.text2]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Drawer
				open={open}
				onClose={onCancel}
			>
				<Form
					title='Drawer form example'
					type='drawer'
					state={state}
					dispatch={dispatch}
					fields={fields}
					onCancel={onCancel}
					cancelButtonAttrs={cancelButtonAttrs}
					onSubmit={onSubmit}
					submitButtonAttrs={submitButtonAttrs}
				/>
			</Drawer>
			<button onClick={() => setOpen(true)}>Open drawer</button>
		</>
	);
};

export const CustomFields = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const CustomText = ({ onChange, value }: { onChange: (e: string) => void; value: string }) => {
		return <input type='text' value={value} onChange={(e) => onChange(e.target.value)} />
	}

	const CustomTextArea = ({ onChange, value }: { onChange: (e: string) => void; value: string }) => {
		return <textarea rows={4} value={value} cols={20} onChange={(e) => onChange(e.target.value)} />
	}

	const CustomCheckbox = ({ onChange, value }: { onChange: (e: string) => void; value: string }) => {
		return (
			<>
				<input
					type="checkbox"
					id="vehicle1"
					name="vehicle1"
					value="Bike"
					onChange={(e) => onChange(value ? undefined : e.target.value)}
					checked={value === 'Bike'}
				/>
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

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

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
			<Form
				title='Custom components'
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onSubmit={onSubmit}
				onCancel={onCancel}
			/>
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
				{
					name: 'startDate',
					type: 'date',
					label: 'Start date',
					required: false,
					disabled: false,
					helperText: 'Helper text',
					instructionText: 'Instruction text',
					validators: [{ fn: 'validateDateRange', options: { endDateName: 'endDate' } }],
					pairedFields: ['endDate'],
					inputSettings: {
						showTime: false,
					},
				},
				{
					name: 'endDate',
					type: 'date',
					label: 'End date',
					required: false,
					disabled: false,
					helperText: 'Helper text',
					instructionText: 'Instruction text',
					validators: [{ fn: 'validateDateRange', options: { startDateName: 'startDate' } }],
					pairedFields: ['startDate'],
					inputSettings: {
						showTime: false,
					},
				},
			] as FieldDef[],
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

export const DefaultValues = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "required",
					label: "Required",
					type: 'text',
					required: true,
					defaultValue: 'Passing default value',
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
