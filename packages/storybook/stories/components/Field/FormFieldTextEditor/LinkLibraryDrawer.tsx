import type { ReactElement } from "react";
import React, { useMemo } from "react";
import BulletinIcon from "@mui/icons-material/PushPin";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import ContactIcon from "@mui/icons-material/PermContactCalendar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import type { FieldDef, TextEditorOnLinkParams } from "#mosaic/components/Field";
import Form, { useForm } from "#mosaic/components/Form";
import FieldWrapper from "#mosaic/components/FieldWrapper";
import type { ButtonProps } from "#mosaic/components/Button";

import { DrawerWrapper } from "./MediaGalleryDrawer.styled";
import { LinkLibraryAvatar } from "./LinkLibraryDrawer.styled";

type LinkLibraryDrawerProps = Partial<TextEditorOnLinkParams> & {
    onClose?: () => void;
}

const pages = [
	{
		id: "bulletin/vacations-pass-the-value-test",
		title: "Vacations pass the value test",
		category: "Bulletin",
		Icon: BulletinIcon,
	},
	{
		id: "bulletin/submit-special-offers-for-consumers-or-travel-advisors",
		title: "Submit Special Offers for Consumers or Travel Advisors",
		category: "Bulletin",
		Icon: BulletinIcon,
	},
	{
		id: "leisure-event/my-4th-street-simple-event",
		title: "My 4th Street Simple Event",
		category: "Leisure Event",
		Icon: CalendarIcon,
	},
	{
		id: "contact/anna-marie-yakubisin",
		title: "Anna Marie Yakubisin",
		category: "Contact",
		Icon: ContactIcon,
	},
	{
		id: "contact/mr-aaron-s-bilkins-junior",
		title: "Mr Aaron S Bilkins Junior",
		category: "Contact",
		Icon: ContactIcon,
	},
];

function LinkSelectionField(props: any) {
	const {
		fieldDef,
		value,
		error,
		methods,
		inputRef,
		disabled,
		skeleton,
		onChange,
	} = props;
	const { name } = fieldDef;

	return (
		<FieldWrapper
			fieldDef={fieldDef}
			value={value}
			error={error}
			id={name}
			methods={methods}
			inputRef={inputRef}
			disabled={disabled}
			skeleton={skeleton}
		>
			<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
				{pages.map(({ id, title, category, Icon }) => (
					<ListItemButton key={id} onClick={() => onChange(id)}>
						<ListItemAvatar>
							<LinkLibraryAvatar $selected={id === value}>
								<Icon />
							</LinkLibraryAvatar>
						</ListItemAvatar>
						<ListItemText primary={title} secondary={category} />
					</ListItemButton>
				))}
			</List>
		</FieldWrapper>
	);
}

export function LinkLibraryDrawer({ onClose, updateLink, removeLink, url, newTab, text }: LinkLibraryDrawerProps): ReactElement {
	const controller = useForm({ data: {
		newTab,
		url,
		text,
	} });
	const { handleSubmit } = controller;

	const fields: FieldDef[] = useMemo(() => [
		{
			name: "newTab",
			type: "toggle",
			label: "Open in New Tab",
		},
		{
			name: "text",
			type: "text",
			label: "Text",
		},
		{
			name: "url",
			type: LinkSelectionField,
			label: "Target",
			required: true,
		},
	], []);

	const buttons: ButtonProps[] = useMemo(() => [
		{
			label: "Remove",
			onClick: () => {
				removeLink();
				onClose();
			},
			intent: "danger",
			variant: "contained",
		},
		{
			label: "Cancel",
			onClick: onClose,
			intent: "secondary",
			variant: "contained",
		},
		{
			label: "Save",
			type: "submit",
			intent: "primary",
			variant: "contained",
		},
	], [removeLink, onClose]);

	const onSubmit = handleSubmit(({ data }) => {
		if (!updateLink) {
			throw new Error("Update image callback was not provided");
		}

		onClose();
		updateLink({
			url: data.url,
			newTab: data.newTab,
			text: data.text,
		});
	});

	return (
		<DrawerWrapper>
			<Form
				title="Select Page"
				fields={fields}
				onBack={onClose}
				buttons={buttons}
				onSubmit={onSubmit}
				{...controller}
			/>
		</DrawerWrapper>
	);
}
