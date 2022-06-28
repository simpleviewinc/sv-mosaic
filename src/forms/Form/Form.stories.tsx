import * as React from "react";
import { ReactElement, useEffect, useMemo, useState, useCallback } from "react";
import { boolean, object, text, withKnobs } from "@storybook/addon-knobs";

// Utils
import { checkboxOptions } from "@root/forms/FormFieldCheckbox/FormFieldCheckboxUtils"
import { useTable, headers } from "@root/forms/FormFieldTable/tableUtils";
import { useForm, formActions } from "@root/forms/Form";
import { useImageVideoLinkDocumentBrowsing, imageVideoSrc } from "@root/forms/FormFieldImageVideoLinkDocumentBrowsing/ImageVideoLinkDocumentBrowsingUtils";
import { validateEmail, validateSlow, required, validateNumber, validateURL } from "./validators";
import { menuOptions } from "../MenuFormFieldCard/MenuFormFieldUtils";

// Components
import Form from "./Form";
import Drawer from "@root/components/Drawer.jsx";

// Types
import { TextFieldDef } from "../FormFieldText/FormFieldTextTypes";
import { FieldDef } from "../../components/Field";
import { AdvancedSelectionDef } from "../FormFieldAdvancedSelection";
import { TableDef } from "../FormFieldTable";
import { ImageUploadDef } from "../FormFieldImageUpload";
import { MapCoordinatesDef } from "../FormFieldMapCoordinates";
import { ImageVideoDocumentLinkBrowsingDef } from "../FormFieldImageVideoLinkDocumentBrowsing";
import { FormFieldToggleSwitchDef } from "../FormFieldToggleSwitch";
import { FormFieldRadioDef } from "../FormFieldRadio";
import { DropdownSingleSelectionDef } from "../FormFieldDropdownSingleSelection";
import { FormFieldChipSingleSelectDef } from "../FormFieldChipSingleSelect";
import { FormFieldCheckboxDef } from "../FormFieldCheckbox";
import { TextAreaDef } from "../FormFieldTextArea";

export default {
	title: "Components/Form",
	decorators: [withKnobs],
};

const deleteTableRow = () => {
	alert("Delete button clicked");
};

const externalOptions = [
	{
		category: "Category 1",
		label: "Option 1",
		value: "option_1-cat_1",
	},
	{
		category: "Category 1",
		label: "Option 2",
		value: "option_2-cat_1",
	},
	{
		category: "Category 1",
		label: "Option 3",
		value: "option_3-cat_1",
	},
	{
		category: "Category 1",
		label: "Option 4",
		value: "option_4-cat_1",
	},
	{
		category: "Category 2",
		label: "Option 1 category 2",
		value: "option_1-cat_2",
	},
	{
		category: "Category 2",
		label: "Test option category 2",
		value: "option_2-cat_2",
	},
	{
		category: "Category 2",
		label: "Another option of catergory 2",
		value: "option_3-cat_2",
	},
	{
		category: "Category 2",
		label: "Option 4 category 2",
		value: "option_4-cat_2",
	},
	{
		category: "Test Category",
		label: "You can filter by category",
		value: "option_1-test_category",
	},
	{
		category: "Test Category",
		label: "Very long label that does not fit",
		value: "option_2-test_category",
	},
	{
		category: "Category 4",
		label: "Option 1 category 4",
		value: "option_1-cat_4",
	},
	{
		label: "Option without category",
		value: "option_without_category",
	},
];

const createNewOption = async (newOptionLabel) => {
	const value = `${newOptionLabel}_${externalOptions.length}`
	const newOption = {
		value,
		label: newOptionLabel,
	}

	//Insert to db
	externalOptions.push(newOption);

	return value;
}

const getSelected = async (selectedOptions) => {
	if (!selectedOptions) return;

	return selectedOptions.map((selectedOption) =>
		externalOptions.find(o => o.value === selectedOption)
	);
}

const onCancel = () => {
	alert("Cancelling form, going back to previous site");
};

export const Playground = (): ReactElement => {
	const [loadReady, setLoadReady] = useState(false);
	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

	const { addTableRow, editAction, extraActionsTable } = useTable(
		state.data,
		"table",
		dispatch
	);
	const { setImage, setVideo, setDocument, setLink, handleRemove } = useImageVideoLinkDocumentBrowsing(dispatch, "imageVideoDocumentLink");

	const prepopulate = boolean("Prepopulate", false);
	const required = boolean("Required", true);
	const disabled = boolean("Disabled", false);
	const showSections = boolean("Show sections", false);
	const prepopulateValues = object("Prepolulate values", {
		"textField": "Text field prepopulated",
		"numberField": 4596,
		"textArea": "Text area prepopulated",
		"check": [
			"label_1",
			"label_2"
		],
		"chipSelect": "label_1",
		"dropdownSingle": "1972",
		"phoneSelect": "15205751151",
		"radio": "label_3",
		"toggleSwitch": true,
		"color": {
			"hsl": {
				"h": 166.53061224489795,
				"s": 0.7241379310344827,
				"l": 0.6019607843137255,
				"a": 1
			},
			"hex": "#50e3c2",
			"rgb": {
				"r": 80,
				"g": 227,
				"b": 194,
				"a": 1
			},
			"hsv": {
				"h": 166.53061224489795,
				"s": 0.6475770925110133,
				"v": 0.8901960784313725,
				"a": 1
			},
			"oldHue": 55.13513513513513,
			"source": "hex"
		},
		"date": new Date(),
		"address": [
			{
				"id": 1,
				"address1": "8950 N. Oracle Road",
				"city": "Tuczon",
				"postalCode": "85704",
				"country": "US",
				"state": "AZ",
				"types": [
					"physical",
					"billing",
					"shipping"
				]
			}
		],
		"advancedSelection": [
			"option_1-cat_1",
			"option_3-cat_1",
			"option_1-cat_2",
			"option_3-cat_2"
		],
		"imageVideoDocumentLink": [
			{
				"label": "Title",
				"value": "Video Thumbnail - YouTube - Visit Santa Fe, New Mexico Video Thumbnail"
			},
			{
				"label": "Type",
				"value": "Image Video Thumbnail"
			},
			{
				"label": "Alt",
				"value": "-"
			},
			{
				"label": "Size",
				"value": "1280x720"
			},
			{
				"label": "Focus",
				"value": "No"
			},
			{
				"label": "Locales",
				"value": "-"
			}
		],
		"table": [
			{
				"id": "1",
				"items": [
					"John",
					"john@email.com",
					"01/01/2021",
					"3231-962-7516"
				]
			}
		],
		"imageUpload": {
			"imgName": "image (2).png",
			"size": 61571,
			"type": "image/png",
			"height": 600,
			"width": 777
		},
		"mapCoordinates": {
			"lat": 32.3395031,
			"lng": -110.9864294
		}
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
					name: "numberField",
					label: "Field of type number",
					type: "text",
					disabled,
					required,
					inputSettings: {
						type: "number",
					},
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
							{ label: "The Shawshank Redemption", value: "1994" },
							{ label: "The Godfather", value: "1972" },
							{ label: "The Godfather: Part II", value: "1974" },
							{ label: "The Dark Knight", value: "2008" },
							{ label: "12 Angry Men", value: 1957 },
							{ label: "Schindler's List", value: "1993" },
							{ label: "Pulp Fiction", value: "1994" },
							{ label: "The Lord of the Rings: The Return of the King", value: "2003" },
							{ label: "The Good, the Bad and the Ugly", value: "1966" },
							{ label: "Fight Club", value: "1999" },
							{ label: "The Lord of the Rings: The Fellowship of the Ring", value: "2001" },
							{ label: "Star Wars: Episode V - The Empire Strikes Back", value: "1980" },
							{ label: "Forrest Gump", value: "1994" },
							{ label: "Inception", value: "2010" },
							{ label: "The Lord of the Rings: The Two Towers", value: "2002" },
							{ label: "One Flew Over the Cuckoo's Nest", value: "1975" },
							{ label: "Goodfellas", value: "1990" },
							{ label: "The Matrix", value: "1999" },
							{ label: "Seven Samurai", value: "1954" },
							{ label: "Star Wars: Episode IV - A New Hope", value: "1977" },
							{ label: "City of God", value: "2002" },
							{ label: "Se7en", value: "1995" },
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
					name: "toggleSwitch",
					label: "Toggle field",
					disabled,
					required,
					type: "toggleSwitch",
					inputSettings: {
						toggleLabel: "To the side"
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
					name: "address",
					label: "Address field",
					type: "address",
					disabled,
					required
				},
				{
					name: "advancedSelection",
					label: "Advanced Selection field",
					type: "advancedSelection",
					disabled,
					required,
					inputSettings: {
						checkboxOptions: externalOptions,
						getSelected,
						createNewOption
					}
				} as FieldDef<AdvancedSelectionDef>,
				{
					name: "imageVideoDocumentLink",
					label: "Image Video and Document field",
					type: "imageVideoDocumentLink",
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
				// {
				// 	name: "textEditor",
				// 	label: "Text Editor field",
				// 	type: "textEditor",
				// 	disabled,
				// 	required
				// },
				{
					name: "table",
					label: "Table example",
					type: "table",
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
						apiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"
					}
				} as FieldDef<MapCoordinatesDef>,
			] as unknown as FieldDef[],
		[externalOptions, disabled, required]
	);

	const sections = [
		{
			title: text("Title section 1", "Section 1"),
			description: text("Description for section 1", "Description for section 1"),
			fields: [
				// row 1
				[["textField"], ["textArea"], ["check"]],
				// row 2
				[["chipSelect"], ["dropdownSingle"], ["table"]],
				[[]],
				// row 3
				[["phoneSelect"], ["radio"]]
			]
		},
		{
			title: text("Title section 2", "Section 2"),
			description: text("Description for section 2", "Description for section 2"),
			fields: [
				// row 1
				[[], [], []],
				// row 2
				[["toggleSwitch"], [], ["mapCoordinates"]],
				[[]],
				// row 3
				[[], ["advancedSelection"]]
			]
		},
		{
			title: text("Title section 3", "Section 3"),
			description: text("Description for section 3", "Description for section 3"),
			fields: [
				// row 1
				[["color"], ["date"],],
				// row 2
				// [["textEditor"], []]
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
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	useEffect(() => {
		const resetForm = async () => {
			await dispatch(formActions.resetForm());
			setLoadReady(true);
		};
		prepopulate ? resetForm() : setLoadReady(false);
	}, [prepopulate])

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				state={state}
				fields={fields}
				dispatch={dispatch}
				getFormValues={loadReady && onLoad}
				sections={showSections && sections}
				submitButtonAttrs={{ label: text("Submit button", "Save") }}
				cancelButtonAttrs={{ label: text("Cancel button", "Cancel") }}
				onCancel={onCancel}
			/>
		</>
	);
};

export const FormWithLayout = (): ReactElement => {
	const { state, dispatch, registerFields } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					instructionText: "Instruction text text1",
					validators: [validateEmail, validateSlow],
					layout: { section: 0, row: 1, col: 0 },
				},
				{
					name: "text2",
					label: "Text with validators and dynamic help",
					type: "text",
					help: state.data.text2,
					instructionText: "Instruction text text2",
					validators: [validateEmail, validateSlow]
				},
				{
					name: "text3",
					label: "Text that copies to the next input",
					type: "text",
					instructionText: "Instruction text text3",
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text",
					instructionText: "Instruction text text1"
				},
				{
					name: "color",
					label: "Color selector example",
					type: "color",
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
					name: "toggleSwitch",
					label: "Toggle field",
					type: "toggleSwitch",
					inputSettings: {
						toggleLabel: "To the side"
					}
				},
				{
					name: "imageUpload",
					label: "Image Upload example",
					type: "imageUpload",
					inputSettings: {
						options: menuOptions
					}
				},
				// {
				// 	name: "textEditor",
				// 	label: "Text Editor field",
				// 	type: "textEditor",
				// },
			] as FieldDef[],
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
				[["check"], ["text4"], ["color"]],
				[[]],
				// row 3
				[["toggleSwitch"], ["imageUpload"]]
			]
		},
		{
			title: "Section 2",
			description: "Description for section 2",
			fields: [
				// row 1
				[["check"], ["toggleSwitch"], ["color"]],
				// row 2
				[[], [], []],
				[[]],
				// row 3
				// [[], ["textEditor"]]
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
			formActions.setFieldValue({
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
				title={text("Title", "Form Title")}
				description={text("Description", "This is a description example")}
				sections={sections}
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
}

export const PerformanceWithSubmit = (): ReactElement => {
	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

	const hundredFields = [];

	for (let i = 0; i < 100; i++) {
		hundredFields.push({
			name: `text${i}`,
			label: `Simple Text ${i}`,
			type: "text",
			instructionText: "testing",
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
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
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
				title='Performance with submit'
				onCancel={onCancel}
			/>
		</>
	);
};

export const RuntimeBehaviors = (): ReactElement => {
	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					instructionText: "testing",
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
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	useEffect(() => {
		dispatch(
			formActions.setFieldValue({
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
			formActions.setFieldValue({
				name: "text1",
				value: "My New Value"
			})
		);
	};

	const setText2Value = function () {
		dispatch(
			formActions.setFieldValue({
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
	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Full Name",
					type: "text",
					instructionText: "testing",
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
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const clickHandler = () => {
		dispatch(
			formActions.submitForm()
		);
	}

	const submitForm = useCallback((data) => {
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
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
					label: "Email",
					type: "text",
					instructionText: "testing",
					validators: [required, validateEmail],
				},
				{
					name: "text2",
					label: "Age",
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
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		setOpen(false);
		alert("Cancelling form, going back to previous site");
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
					submitButtonAttrs={submitButtonAttrs}
				/>
			</Drawer>
			<button onClick={() => setOpen(true)}>Open drawer</button>
		</>
	);
};

export const CustomFields = (): ReactElement => {
	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

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
					checked={value === "Bike"}
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
					instructionText: "testing",
					helperText: "helper text bottom",
					validators: [required]
				},
				{
					name: "textarea",
					label: "Custom textArea",
					type: CustomTextArea,
					instructionText: "testing",
					helperText: "helper text bottom",
					validators: [required]
				},
				{
					name: "checkbox",
					label: "Custom checkbox",
					type: CustomCheckbox,
					instructionText: "testing",
					helperText: "helper text bottom",
					validators: [required]
				},
			] as FieldDef[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const setText1Value = function () {
		dispatch(
			formActions.setFieldValue({
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
				onCancel={onCancel}
			/>
			<div>
				<button onClick={setText1Value}>Set Text1 Value</button>
			</div>
		</>
	);
};

export const Validators = (): ReactElement => {
	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "required",
					label: "Required",
					type: "text",
					required: true,
				},
				{
					name: "email",
					label: "Email",
					type: "text",
					validators: [validateEmail]
				},
				{
					name: "slow",
					label: "Slow",
					type: "text",
					validators: [validateSlow]
				},
				{
					name: "number",
					label: "Number",
					type: "text",
					validators: [validateNumber]
				},
				{
					name: "url",
					label: "URL",
					type: "text",
					validators: [validateURL]
				},
				{
					name: "startDate",
					type: "date",
					label: "Start date",
					required: false,
					disabled: false,
					helperText: "Helper text",
					instructionText: "Instruction text",
					validators: [{ fn: "validateDateRange", options: { endDateName: "endDate" } }],
					pairedFields: ["endDate"],
					inputSettings: {
						showTime: false,
					},
				},
				{
					name: "endDate",
					type: "date",
					label: "End date",
					required: false,
					disabled: false,
					helperText: "Helper text",
					instructionText: "Instruction text",
					validators: [{ fn: "validateDateRange", options: { startDateName: "startDate" } }],
					pairedFields: ["startDate"],
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
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert("Cancelling form, going back to previous site");
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title='Validators story'
				state={state}
				fields={fields}
				dispatch={dispatch}
				onCancel={onCancel}
			/>
		</>
	);
};

export const DefaultValues = (): ReactElement => {
	const { state, dispatch, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "required",
					label: "Required",
					type: "text",
					required: true,
					defaultValue: "Passing default value",
				},
			] as FieldDef<TextFieldDef>[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
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
				onCancel={onCancel}
			/>
		</>
	);
};