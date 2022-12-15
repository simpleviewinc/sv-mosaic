import * as React from "react";
import { ReactElement, useState } from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import SideNav, { Item, SideNavArgs } from ".";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import EventNoteIcon from "@mui/icons-material/EventNote";
import FolderIcon from "@mui/icons-material/Folder";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default {
	title: "Components/SideNav",
	decorators: [withKnobs],
} as Meta;

export const Example = (): ReactElement => {
	const [content, setContent] = useState<JSX.Element>(<h1>Home</h1>);
	const [active, setActive] = useState("home");

	const onNav = (args: SideNavArgs) => {
		setActive(args.item.name);
		setContent(<h1>{args.item.label}</h1>);
	};

	const items: Item[][] = [
		[
			{
				label: "Home",
				name: "home",
				icon: HomeIcon,
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Home</h1>);
				},
			},
			{
				label: "Accounts",
				name: "accounts",
				icon: AccountCircleIcon,
			},
			{
				label: "Gallery",
				name: "gallery",
				icon: CollectionsIcon,
			},
			{
				label: "Visitors",
				name: "visitors",
			},
			{
				label: "Sitemap",
				name: "sitemap",
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Sitemap</h1>);
				},
			},
		],
		[
			{
				label: "Assets",
				name: "assets",
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Assets</h1>);
				},
			},
			{
				label: "Map Publisher",
				name: "map-publisher",
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Map Publisher</h1>);
				},
			},
			{
				label: "Dynamic Content",
				name: "dynamic-content",
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Dynamic Content</h1>);
				},
			},
		],
		[
			{
				label: "Tasks",
				name: "tasks",
				badge: "10",
				icon: TaskAltIcon,
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Tasks</h1>);
				},
				action: {
					icon: AddCircleOutlineIcon,
					onClick: () => alert("Add task clicked"),
				},
			},
			{
				label: "Documents",
				name: "documents",
				icon: FolderIcon,
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Documents</h1>);
				},
			},
			{
				label: "Notes",
				name: "notes",
				badge: "00",
				icon: EventNoteIcon,
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Notes</h1>);
				},
			},
		],
	];

	const parentHeight = number("Parent height (px)", 500);

	return (
		<div style={{ display: "flex", height: parentHeight }}>
			<SideNav items={items} active={active} onNav={onNav} />
			<div>{content}</div>
		</div>
	);
};
