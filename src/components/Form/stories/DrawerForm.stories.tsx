import * as React from "react";
import { ReactElement, useState, useMemo } from "react";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";

// Utils
import { useForm, formActions, SectionDef } from "@root/components/Form";

// Components
import Form from "../Form";
import Button, { ButtonProps } from "@root/components/Button";
import Drawer from "@root/components/Drawer/Drawer";

// Types
import { FieldDef } from "@root/components/Field";

import theme, { BREAKPOINTS } from "@root/theme/theme";
import uniqueId from "lodash/uniqueId";
import { Sizes } from "@root/theme";
import { getOptionsCountries, getOptionsStates } from "@root/components/Field/FormFieldAddress/utils/optionGetters";
import styled from "styled-components";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { validateEmail } from "../validators";

export default {
	title: "Components/Form",
	decorators: [withKnobs],
};

const baseTextField = {
	type: "text",
	instructionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",
	required: true,
	inputSettings: {
		maxCharacters: 20,
	},
};

const baseAddressField = {
	type: "address",
	required: true,
	inputSettings: {
		getOptionsCountries: getOptionsCountries,
		getOptionsStates: getOptionsStates,
		googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
	},
};

const baseMapCoordinatesField = {
	type: "mapCoordinates",
	instructionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",
	inputSettings: {
		googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
	},
};

const Heading = styled.h2`
	font-family: ${theme.museoFont};
	font-size: 26px;
	font-weight: ${theme.fontWeight.light};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: ${theme.colors.simplyGray};
	margin: 8px -12px 0;
	display: flex;
	align-items: center;

	&::after{
		content: " ";
		flex-grow: 1;
		border-top: 1px solid ${theme.newColors.grey2["100"]};
		margin-left: 16px;
		margin-top: 4px;
	}
`;

async function getFormValues() {
	return {
		petsHeading: <Heading>Pets</Heading>,
		destinationsHeading: <Heading>Destinations</Heading>,
		novaScotia: { lat: 44.64933472911243, lng: -63.615047475871876 },
		eiffelTower: { lat: 48.858348895100555, lng: 2.294492026111051 },
		lochNessMonster: { lat: 57.27050873488408, lng: -4.493444954407284 },
	};
}

const sections: SectionDef[] = [
	{
		title: "Text field sizes",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",
		fields: [
			[["text-xs"]],
			[["text-sm"]],
			[["text-md"]],
			[["text-lg"]],
		],
	},
	{
		title: "Fields with grid layout",
		fields: [
			[["firstName"], ["lastName"], ["dob"]],
			[["profilePicture"], ["biography"], []],
			[["homeAddress"], ["workAddress"], ["altAddress"]],
			[["petsHeading"]],
			[["favouritePet", "firstPet", "desiredPet"]],
			[["destinationsHeading"]],
			[["whereToGo"]],
			[["availableStart"], ["availableEnd"]],
			[["novaScotia"], ["eiffelTower"], ["lochNessMonster"]],
		],
	},
];

const options = {
	default: `${parseInt(BREAKPOINTS.sm, 10) - 160}px`,
	sm: BREAKPOINTS.sm,
	md: BREAKPOINTS.md,
	lg: BREAKPOINTS.lg,
	xl: BREAKPOINTS.xl,
	"2xl": BREAKPOINTS["2xl"],
};

export const DrawerForm = (): ReactElement => {
	const { state, dispatch } = useForm();

	const fields = useMemo<FieldDef[]>(() => [
		{
			...baseTextField,
			name: "text-xs",
			label: "Extra small text",
			size: Sizes.xs,
		},
		{
			...baseTextField,
			name: "text-sm",
			label: "Small text",
			size: Sizes.sm,
		},
		{
			...baseTextField,
			name: "text-md",
			label: "Medium text",
			size: Sizes.md,
		},
		{
			...baseTextField,
			name: "text-lg",
			label: "Email address",
			size: Sizes.lg,
			validators: [validateEmail],
		},
		{
			...baseTextField,
			name: "firstName",
			label: "First Name",
		},
		{
			...baseTextField,
			name: "lastName",
			label: "Last Name",
		},
		{
			type: "date",
			name: "dob",
			label: "Date of Birth",
		},
		{
			name: "profilePicture",
			label: "Profile Picture",
			type: "upload",
			inputSettings: {
				onFileAdd: async ({ onUploadComplete }) => {
					onUploadComplete({ name: "Test", fileUrl: "https://www.google.com", id: uniqueId(), size: 1098 });
				},
				onFileDelete: async () => {
					// This is fine
				},
			},
			required: true,
		},
		{
			...baseTextField,
			name: "biography",
			label: "Biography",
			size: Sizes.lg,
			inputSettings: {
				multiline: true,
				minRows: 8,
			},
		},
		({
			name: "petsHeading",
			type: "raw",
		} as any),
		{
			label: "Favourite Pet",
			name: "favouritePet",
			required: true,
			type: "dropdown",
			inputSettings: {
				options: [{ value: "dog", label: "Dog" }, { value: "cat", label: "Cat" }, { value: "rabbit", label: "Rabbit" }],
			},
		},
		{
			label: "First Pet",
			name: "firstPet",
			required: true,
			type: "dropdown",
			inputSettings: {
				options: [{ value: "dog", label: "Dog" }, { value: "cat", label: "Cat" }, { value: "rabbit", label: "Rabbit" }],
			},
		},
		{
			label: "Desired Pet",
			name: "desiredPet",
			required: true,
			type: "chip",
			inputSettings: {
				options: [{ value: "kangaroo", label: "Kangaroo" }, { value: "cow", label: "Cow" }, { value: "duckbillPlatypus", label: "Duckbill Platypus" }, { value: "raccoon", label: "Raccoon" }, { value: "hog", label: "Hog" }, { value: "madagascarHissingCockroach", label: "Madagascar Hissing Cockroach" }, { value: "pronghorn", label: "Pronghorn" }, { value: "alligator", label: "Alligator" }],
			},
		},
		{
			...baseAddressField,
			name: "homeAddress",
			label: "Home address",
		},
		{
			...baseAddressField,
			name: "workAddress",
			label: "Work address",
		},
		{
			...baseAddressField,
			name: "altAddress",
			label: "Alternative address",
		},
		{
			name: "mostVisitedLocations",
			label: "Most visited locations",
			type: "advancedSelection",
		},
		{
			name: "booksRead",
			label: "Books read",
			type: "advancedSelection",
			inputSettings: {
				options: [{ value: "the", label: "The Great Gatsby" }, { value: "cow", label: "To Kill a Mockingbird" }, { value: "duckbillPlatypus", label: "Pride and Prejudice" }, { value: "raccoon", label: "The Book Thief" }, { value: "hog", label: "Lord of the Flies" }, { value: "madagascarHissingCockroach", label: "The Catcher in the Rye" }],
			},
		},
		({
			name: "destinationsHeading",
			type: "raw",
		} as any),
		{
			name: "whereToGo",
			label: "Where do you want to go?",
			type: "matrix",
			instructionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",
			inputSettings: {
				dataView: {
					columns: [{
						name: "name",
						label: "Name",
					}],
					data: [{ id: 1, name: "Australia" }, { id: 2, name: "Japan" }],
				},
				buttons: [
					{
						label: "Add",
						onClick: () => null,
						color: "teal",
						variant: "text",
						mIcon: AddCircleOutline,
					},
				],
			},
		},
		{
			name: "availableStart",
			label: "When are you available?",
			type: "date",
			instructionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",
			inputSettings: {
				showTime: true,
			},
		},
		{
			name: "availableEnd",
			label: " ",
			type: "date",
			instructionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis arcu sed rutrum maximus.",
			inputSettings: {
				showTime: true,
			},
		},
		{
			...baseMapCoordinatesField,
			name: "eiffelTower",
			label: "Where is the Eiffel tower?",
			inputSettings: {
				...baseMapCoordinatesField.inputSettings,
				initialCenter: { lat: 57.27050873488408, lng: -4.493444954407284 },
			},
		},
		{
			...baseMapCoordinatesField,
			name: "lochNessMonster",
			label: "Where's the Loch Ness monster?",
			inputSettings: {
				...baseMapCoordinatesField.inputSettings,
				initialCenter: { lat: 48.858348895100555, lng: 2.294492026111051 },
			},
		},
		{
			...baseMapCoordinatesField,
			name: "novaScotia",
			label: "Where is Nova Scotia?",
			inputSettings: {
				...baseMapCoordinatesField.inputSettings,
				initialCenter: { lat: 48.858348895100555, lng: 2.294492026111051 },
			},
		},
	], []);

	const showSections = boolean("Show sections", false, "Layout");
	const drawWidth = select("Draw Width", options, options.default, "Layout");
	const description = text("Description", "", "Misc");
	const showActive = boolean("Show active", false, "Misc");

	const [open, setOpen] = useState(false);

	const onCancel = () => setOpen(false);

	const onDrawerSubmit = async () => {
		const { data, valid } = await dispatch(formActions.submitForm());
		if (!valid) return;

		setOpen(false);
		alert("Form submitted with the following data: " + JSON.stringify(data, null, " "));
	};

	const buttons: ButtonProps[] = [
		{
			label: "Save",
			onClick: onDrawerSubmit,
			color: "yellow",
			variant: "contained",
		},
	];

	return (
		<>
			<Drawer
				open={open}
				onClose={onCancel}
				PaperProps={{
					sx: { width: "90%" },
				}}
			>
				<div style={{ width: drawWidth }}>
					<Form
						buttons={buttons}
						title='Drawer form example'
						state={state}
						dispatch={dispatch}
						fields={fields}
						onBack={onCancel}
						sections={showSections ? sections : undefined}
						showActive={showActive}
						description={description || undefined}
						getFormValues={getFormValues}
					/>
				</div>
			</Drawer>
			<div style={{ margin: 20 }}>
				<Button
					onClick={() => setOpen(true)}
					label="Open Drawer"
					color="yellow"
					variant="contained"
				/>
			</div>
		</>
	);
};
