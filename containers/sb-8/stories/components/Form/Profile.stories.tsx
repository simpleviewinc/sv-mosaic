import * as React from "react";
import { ReactElement, useEffect, useMemo, useCallback } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

// Utils
import { useForm } from "@root/components/Form";
import { validateEmail, validateSlow } from "@root/utils/form/validators";
import { renderButtons, toggleMap, toggleOptions } from "../../../utils";
import { getOptionsCountries, getOptionsStates } from "@root/components/Field/FormFieldAddress/utils/optionGetters";

// Components
import Form from "@root/components/Form";

// Types
import { FieldDef, UploadFieldInputSettings } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "@root/components/Form/stories/utils";
import { DataViewProps } from "@root/components/DataView";
import { joinAnd } from "@root/utils/string";
import { nanoid } from "nanoid";

export default {
	title: "Components/Form",
};

const initialSection1Fields = [
	[["firstName"], ["lastName"], ["initials"]],
	[["dob"], [], []],
	[["sex"], ["gender"], ["otherGender"]],
	[["profilePicture"]],
];

function randomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const factors = (number: number) => Array
	.from(Array(number + 1), (_, i) => i)
	.filter(i => number % i === 0);

export const Profile = ({
	showState,
	height,
	section1Fields,
	showFirstName,
	showLastName,
	showInitials,
	skeleton,
}: typeof Profile.args): ReactElement => {
	const controller = useForm();
	const { state, methods: { setFieldValue }, handleSubmit } = controller;

	useEffect(() => {
		document.body.style.margin = "0px";

		return () => {
			document.body.style.margin = ORIGINAL_BODY_MARGIN;
		};
	}, []);

	const gridConfig: DataViewProps = useMemo(() => ({
		columns: [{ name: "id", label: "ID" }, { name: "title", label: "Title" }, { name: "description", label: "Description" }],
		primaryActions: [
			{
				name: "delete",
				color: "black",
				variant: "icon",
				mIcon: DeleteIcon,
				onClick: ({ data }) => {
					setFieldValue({
						name: "favouriteNumbers",
						value: (numbers = []) => numbers.filter(({ id }) => id !== data.id),
						touched: true,
					});
				},
			},
		],
		data: state.data.formMatrix,
		limit: 25,
		display: "list",
		activeColumns: ["id", "title", "description"],
	}), [setFieldValue, state.data.formMatrix]);

	const onFileAdd: UploadFieldInputSettings["onFileAdd"] = useCallback(async ({ file, onChunkComplete, onUploadComplete }) => {
		for (let i = 0; i < 10; i++) {
			await new Promise(resolve => setTimeout(() =>
				resolve(
					onChunkComplete({ percent: (i + 1) * 0.1 }),
				), (2 * 1000) / 10),
			);
		}

		await onUploadComplete({
			id: nanoid(),
			name: file.name,
			size: file.size,
			thumbnailUrl: ["image/gif", "image/jpeg", "image/png"].includes(file.type) ? URL.createObjectURL(file) : "",
			fileUrl: URL.createObjectURL(file),
		});
	}, []);

	const onFileDelete = useCallback(async () => {
		await new Promise((resolve) => setTimeout(() => resolve(null), 2 * 1000));
	}, []);

	const fields = useMemo(
		() : FieldDef[] =>
			[
				{
					name: "firstName",
					label: "First Name",
					type: "text",
					required: true,
					instructionText: "Please use the name that you were given at birth.",
					show: toggleMap[showFirstName],
				},
				{
					name: "lastName",
					label: "Last Name",
					type: "text",
					required: true,
					instructionText: "Please use the family name that you had at birth.",
					show: toggleMap[showLastName],
				},
				{
					name: "initials",
					label: "Initials",
					type: "text",
					required: true,
					instructionText: "If you don't interact with this field, it'll be generated for you based on your first and last names.",
					show: toggleMap[showInitials],
				},
				{
					name: "dob",
					label: "Date of Birth",
					type: "date",
					required: true,
					instructionText: "Pick from the datepicker or enter a MM/DD/YYYY formatted date.",
				},
				{
					name: "sex",
					label: "Sex",
					type: "radio",
					required: true,
					instructionText: "This is the gender you were assigned at birth.",
					inputSettings: {
						options: [{ value: "male", label: "Male" }, { value: "female", label: "Female" }],
					},
				},
				{
					name: "gender",
					label: "Gender",
					type: "dropdown",
					required: true,
					instructionText: "This is the gender that you identify as now.",
					inputSettings: {
						options: [{ value: "male", label: "Male" }, { value: "female", label: "Female" }, { value: "other", label: "Other (Please specify)" }, { value: "undisclosed", label: "Prefer not to say" }],
					},
				},
				{
					name: "otherGender",
					label: "Gender Specified",
					type: "text",
					required: true,
					instructionText: "Please tell us what gender you identify as.",
					show: ({ data }) => data.gender && data.gender.value === "other",
				},
				{
					name: "profilePicture",
					label: "Profile picture",
					type: "upload",
					instructionText: "A profile picture is not required, but it's nice to put a face to the name.",
					inputSettings: {
						onFileAdd,
						onFileDelete,
					},
				},
				{
					name: "email",
					label: "Email Address",
					type: "text",
					required: true,
					validators: [validateEmail, validateSlow],
				},
				{
					name: "phone",
					label: "Phone",
					type: "phone",
					required: true,
					instructionText: "Your primary phone number. It can be a mobile or a home or work telephone.",
				},
				{
					name: "secondaryPhone",
					label: "Secondary Phone",
					type: "phone",
					instructionText: "Good to have just in case we can't catch you on your primary phone.",
				},
				{
					name: "addresses",
					label: "Addresses",
					type: "address",
					required: true,
					instructionText: "Provide us with at least 1 physical address at which we can contact you.",
					inputSettings: {
						amountPhysical: 3,
						getOptionsCountries,
						getOptionsStates,
						googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
					},
				},
				{
					name: "favouriteColor",
					label: "Favourite Colour",
					type: "color",
				},
				{
					name: "favouriteNumbers",
					label: "What are your favourite numbers?",
					type: "matrix",
					required: true,
					instructionText: "There must be at least 1 that you like. Pun intended.",
					inputSettings: {
						dataView: gridConfig,
						buttons: [
							{
								label: "Add",
								onClick: () => {
									const id = randomNumber(1, 1000);
									const idFactors = factors(id);

									setFieldValue({
										name: "favouriteNumbers",
										value: (numbers = []) => [...numbers, { id, title: id, description: `I ❤️ ${id} because it has ${idFactors.length} factors which are ${joinAnd(idFactors.map(String))}` }],
										touched: true,
									});
								},
								color: "teal",
								variant: "text",
								mIcon: AddIcon,
							},
						],
					},
				},
				{
					name: "hobbies",
					label: "What do you like?",
					type: "textEditor",
					required: true,
					instructionText: "In a few words, describe to us your most distinguishing hobbies.",
				},
				{
					name: "animalsOrVehicles",
					label: "Would you rather talk about animals or vehicles?",
					type: "radio",
					required: true,
					inputSettings: {
						options: [{ value: "animals", label: "Animals" }, { value: "vehicles", label: "Vehicles" }],
					},
				},
				{
					name: "vehiclesRace",
					label: "If you had to choose to race around the nurburgring, what would it be?",
					type: "text",
					required: true,
				},
				{
					name: "vehiclesSleep",
					label: "If you had to choose a car to sleep in for a week, what would it be?",
					type: "text",
					required: true,
				},
				{
					name: "vehiclesTrip",
					label: "If you had to choose a car to road trip from east to west coast USA, what would it be?",
					type: "text",
					required: true,
				},
				{
					name: "animalsBattle",
					label: "If had to choose to ride an animal into battle, what would it be?",
					type: "text",
					required: true,
				},
				{
					name: "animalsCompanion",
					label: "If had to choose an animal to be your companion for life, what would it be?",
					type: "text",
					required: true,
				},
				{
					name: "animalsTalk",
					label: "If you could communicate with any animal, what would it be?",
					type: "text",
					required: true,
				},
			],
		[
			showFirstName,
			showLastName,
			showInitials,
			gridConfig,
			setFieldValue,
			onFileAdd,
			onFileDelete,
		],
	);

	const sections = useMemo(() => [
		{
			title: "About You",
			description: "The official stuff",
			fields: section1Fields,
		},
		{
			title: "Contact Details",
			description: "How would we get in touch with you otherwise?",
			fields: [
				[["email"], [], []],
				[["phone"], ["secondaryPhone"], []],
				[["addresses"]],
			],
		},
		{
			title: "Preferences",
			description: "What you're into",
			fields: [
				// row 1
				[["favouriteNumbers"]],
				[["favouriteColor"]],
				[["hobbies"]],
				[["animalsOrVehicles"]],
			],
		},
		{
			title: "Vehicles",
			description: "Speed through these questions...",
			fields: [
				[["vehiclesRace"]],
				[["vehiclesSleep"]],
				[["vehiclesTrip"]],
			],
			show: ({ data }) => data.animalsOrVehicles && data.animalsOrVehicles.value === "vehicles",
		},
		{
			title: "Animals",
			description: "Humans don't count.",
			fields: [
				[["animalsBattle"]],
				[["animalsCompanion"]],
				[["animalsTalk"]],
			],
			show: ({ data }) => data.animalsOrVehicles && data.animalsOrVehicles.value === "animals",
		},
	], [section1Fields]);

	useEffect(() => {
		if (state.touched.initials) {
			return;
		}

		const initials = [
			typeof state.data.firstName === "string" && state.data.firstName.length ? state.data.firstName[0] : "",
			typeof state.data.lastName === "string" && state.data.lastName.length ? state.data.lastName[0] : "",
		].filter(Boolean).join("");

		setFieldValue({
			name: "initials",
			value: initials,
		});
	}, [
		state.data.firstName,
		state.data.lastName,
		state.touched.initials,
		setFieldValue,
	]);

	return (
		<>
			{
				showState && <pre>{JSON.stringify(state, null, "  ")}</pre>
			}
			<div style={{ height }}>
				<Form
					{...controller}
					buttons={renderButtons(handleSubmit)}
					title="Profile"
					description="Give us some information to understand a little more about you."
					sections={sections}
					fields={fields}
					skeleton={skeleton}
				/>
			</div>
		</>
	);
};

// const showState = boolean("Show state", false);
// 	const showSimpleText = select("Show Simple Text", toggleOptions, "Undefined");
// 	const showBigText = select("Show Big Text", toggleOptions, "Undefined");
// 	const showTextFieldValidatesEmail = select("Show TextField that validates email", toggleOptions, "Undefined");
// 	const skeleton = boolean("Skeleton", false);

Profile.args = {
	showState: false,
	height: "100vh",
	section1Fields: initialSection1Fields,
	showFirstName: true,
	showLastName: true,
	showInitials: true,
	skeleton: false,
};

Profile.argTypes = {
	showState: {
		name: "Show state",
	},
	height: {
		name: "Height",
	},
	section1Fields: {
		name: "Section 1 Fields",
	},
	showFirstName: {
		name: "Show First Name Field",
		control: { type: "select" },
		options: toggleOptions,
	},
	showLastName: {
		name: "Show Last Name Field",
		control: { type: "select" },
		options: toggleOptions,
	},
	showInitials: {
		name: "Show Initials Field",
		control: { type: "select" },
		options: toggleOptions,
	},
	skeleton: {
		name: "Skeleton",
	},
};
