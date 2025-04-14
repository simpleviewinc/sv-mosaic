import * as React from "react";
import type { ReactElement } from "react";
import { useEffect, useMemo, useCallback } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

// Utils
import { useForm } from "@root/components/Form";
import { validateDateRange, validateEmail, validatePostcode, validateSlow } from "@root/utils/form/validators";
import { renderButtons, toggleMap, toggleOptions } from "../../../utils";
import { getOptionsCountries, getOptionsStates } from "@root/mock/options";

// Components
import Form from "@root/components/Form";

// Types
import type { FieldDef, UploadFieldInputSettings } from "@root/components/Field";

import { ORIGINAL_BODY_MARGIN } from "@root/components/Form/stories/utils";
import type { DataViewProps } from "@root/components/DataView";
import { joinAnd } from "@root/utils/string";
import { nanoid } from "nanoid";

export default {
	title: "Components/Form",
};

const initialSection1Fields = [
	[["firstName"], ["lastName"], ["initials"]],
	[["dob"], [], []],
	[["sex"]],
	[["profilePicture"]],
	[["referralType"], ["referralTypeOther"]],
];

function randomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const factors = (number: number) => Array
	.from(Array(number + 1), (_, i) => i)
	.filter(i => number % i === 0);

export const Profile = ({
	showState,
	hideSectionNav,
	height,
	section1Fields,
	showFirstName,
	showLastName,
	showInitials,
	showAboutYou,
	showContactDetails,
	showYourWork,
	showPreferences,
}: typeof Profile.args): ReactElement => {
	const controller = useForm({ data: {
		workDates: {
			current: true,
		},
	} });
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
					name: "referralType",
					label: "How did you hear about us?",
					type: "dropdown",
					required: true,
					inputSettings: {
						options: [
							{ value: "socialMedia", label: "Social Media (e.g., Facebook, Twitter, Instagram)" },
							{ value: "searchEngine", label: "Search Engine (e.g., Google, Bing)" },
							{ value: "friendFamily", label: "Friend or Family" },
							{ value: "onlineAd", label: "Online Advertisement" },
							{ value: "emailNewsletter", label: "Email Newsletter" },
							{ value: "blogWebsite", label: "Blog or Website" },
							{ value: "eventConference", label: "Event or Conference" },
							{ value: "printAd", label: "Print Advertisement (e.g., magazine, newspaper)" },
							{ value: "radioTv", label: "Radio or TV" },
							{ value: "other", label: "Other" },
						],
					},
				},
				{
					name: "referralTypeOther",
					label: "Please specify where you heard about us",
					type: "text",
					required: true,
					show: ({ data }) => data.referralType && data.referralType.value === "other",
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
					name: "ukWorker",
					label: "I have a job",
					type: "toggle",
				},
				{
					name: "jobRole",
					label: "Job Role",
					type: "text",
					required: true,
					show: ({ data }) => Boolean(data.ukWorker),
				},
				{
					name: "workAddress",
					label: "Work Address",
					type: "group",
					show: ({ data }) => Boolean(data.ukWorker),
					instructionText: "This is where your company is registered. If you're a remote worker, it's not your house.",
					inputSettings: {
						layout: [
							[["address1"], ["address2"]],
							[["city"]],
							[["country"], ["postalCode"]],
						],
						fields: [
							{
								name: "address1",
								label: "Address 1",
								type: "text",
								size: "full",
								required: true,
							},
							{
								name: "address2",
								label: "Address 2",
								type: "text",
								size: "full",
							},
							{
								name: "city",
								label: "City",
								type: "text",
								required: true,
								size: "full",
							},
							{
								name: "country",
								type: "dropdown",
								label: "Country",
								size: "full",
								required: true,
								inputSettings: {
									getOptions: getOptionsCountries,
								},
								validates: [{
									name: "postalCode",
									include: [validatePostcode],
								}],
							},
							{
								name: "postalCode",
								type: "text",
								label: "Postal Code",
								size: "full",
								required: true,
								validators: [
									{ fn: "validatePostcode", options: { countryField: "country" } },
								],
							},
						],
					},
				},
				{
					name: "workDates",
					label: "When did you hold this position?",
					type: "group",
					show: ({ data }) => Boolean(data.ukWorker),
					inputSettings: {
						layout: [
							[["current"]],
							[["startDate"], ["endDate"], []],
						],
						fields: [
							{
								name: "current",
								type: "toggle",
								label: "This is my current position",
								validates: [
									{
										name: "startDate",
										include: [validateDateRange],
									},
									{
										name: "endDate",
										include: [validateDateRange],
									},
								],
							},
							{
								name: "startDate",
								type: "date",
								label: "Start date",
								required: true,
								validators: [{ fn: "validateDateRange", options: { endDateName: "endDate" } }],
								validates: ["endDate"],
							},
							{
								name: "endDate",
								type: "date",
								label: "End date",
								required: true,
								validators: [{ fn: "validateDateRange", options: { startDateName: "startDate" } }],
								validates: ["startDate"],
								disabled: ({ data }) => Boolean(data.workDates?.current),
							},
						],
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
					name: "favouriteCatPicture",
					label: "Favourite Cat Picture",
					type: "upload",
					instructionText: "Everyone has a favourite cat picture.",
					inputSettings: {
						onFileAdd,
						onFileDelete,
						limit: 1,
					},
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
			show: showAboutYou,
		},
		{
			title: "Contact Details",
			description: "How would we get in touch with you otherwise?",
			fields: [
				[["email"], [], []],
				[["phone"], ["secondaryPhone"], []],
				[["addresses"]],
			],
			show: showContactDetails,
		},
		{
			title: "Your work",
			description: "How do you make a living?",
			fields: [
				[["ukWorker"]],
				[["jobRole"]],
				[["workAddress"]],
				[["workDates"]],
			],
			show: showYourWork,
		},
		{
			title: "Preferences",
			description: "What you're into",
			fields: [
				// row 1
				[["favouriteNumbers"]],
				[["favouriteColor"]],
				[["hobbies"]],
				[["favouriteCatPicture"]],
				[["animalsOrVehicles"]],
			],
			show: showPreferences,
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
	], [
		section1Fields,
		showAboutYou,
		showContactDetails,
		showYourWork,
		showPreferences,
	]);

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
					hideSectionNav={hideSectionNav}
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
	hideSectionNav: false,
	height: "100vh",
	section1Fields: initialSection1Fields,
	showFirstName: true,
	showLastName: true,
	showInitials: true,
	skeleton: false,
	showAboutYou: true,
	showContactDetails: true,
	showYourWork: true,
	showPreferences: true,
};

Profile.argTypes = {
	showState: {
		name: "Show state",
	},
	hideSectionNav: {
		name: "Hide Section Navigation",
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
	showAboutYou: {
		name: "Show About You Section",
	},
	showContactDetails: {
		name: "Show Contact Details Section",
	},
	showYourWork: {
		name: "Show You Work Section",
	},
	showPreferences: {
		name: "Show Preferences Section",
	},
};
