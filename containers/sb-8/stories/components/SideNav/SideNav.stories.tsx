import * as React from "react";
import type { ReactElement } from "react";
import { useState, useMemo } from "react";

// Components
import type { Item, SideNavArgs } from "@root/components/SideNav";
import SideNav from "@root/components/SideNav";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import EventNoteIcon from "@mui/icons-material/EventNote";
import FolderIcon from "@mui/icons-material/Folder";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Link from "@mui/icons-material/Link";
import { toggleMap, toggleOptions } from "../../../utils";

export default {
	title: "Components/SideNav",
};

const homeContent = <h1>Welcome home!</h1>;

export const Playground = ({ parentHeight, showAssets, showMapPublisher, showDynamicContent }: typeof Playground.args): ReactElement => {
	const [content, setContent] = useState<JSX.Element>(homeContent);
	const [active, setActive] = useState("home");

	const onNav = (args: SideNavArgs) => {
		setActive(args.item.name);
		setContent(<h1>{args.item.label}</h1>);
	};

	const items = useMemo<Item[][]>(() => [
		[
			{
				label: "Home",
				name: "home",
				icon: HomeIcon,
				onNav: (args) => {
					setActive(args.item.name);
					setContent(homeContent);
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
			{
				label: "SV Link - Standard",
				name: "sv_link",
				icon: Link,
				attrs: {
					href: "https://www.simpleviewinc.com/",
				},
			},
			{
				label: "SV Link - Custom",
				name: "sv_link-custom",
				icon: Link,
				attrs: {
					href: "https://www.simpleviewinc.com/",
				},
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1 style={{ background: "#444", color: "white", padding: 10 }}>This is the custom link page. It uses its own onNav handler instead of the one provided to the SideNav</h1>);
				},
			},
			{
				label: "Google",
				name: "google",
				icon: Link,
				attrs: {
					href: "https://www.google.co.uk",
				},
				onNav: false,
			},
			{
				label: "Google (New Tab)",
				name: "google-new",
				icon: OpenInNew,
				attrs: {
					href: "https://www.google.co.uk",
					target: "_blank",
				},
				onNav: false,
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
				show: toggleMap[showAssets],
			},
			{
				label: "Map Publisher",
				name: "map-publisher",
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Map Publisher</h1>);
				},
				show: toggleMap[showMapPublisher],
			},
			{
				label: "Dynamic Content",
				name: "dynamic-content",
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Dynamic Content</h1>);
				},
				show: toggleMap[showDynamicContent],
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
	], [showAssets, showMapPublisher, showDynamicContent]);

	return (
		<div style={{ display: "flex", height: parentHeight }}>
			<SideNav items={items} active={active} onNav={onNav} />
			<div>{content}</div>
		</div>
	);
};

Playground.args = {
	parentHeight: 500,
	showAssets: "Undefined",
	showMapPublisher: "Undefined",
	showDynamicContent: "Undefined",
};

Playground.argTypes = {
	parentHeight: {
		name: "Parent height (px)",
	},
	showAssets: {
		name: "Show Assets",
		control: { type: "select" },
		options: toggleOptions,
	},
	showMapPublisher: {
		name: "Show Map Publisher",
		control: { type: "select" },
		options: toggleOptions,
	},
	showDynamicContent: {
		name: "Show Dynamic Content",
		control: { type: "select" },
		options: toggleOptions,
	},
};
