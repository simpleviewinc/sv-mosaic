import * as React from "react";
import type { ReactElement } from "react";

import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ImageIcon from "@mui/icons-material/Image";
import ExtensionIcon from "@mui/icons-material/Extension";
import HelpIcon from "@mui/icons-material/Help";

import MosaicContext from "#mosaic/components/MosaicContext";
import { useMosaicSettings } from "#mosaic/utils/hooks";

import { MainMenuNavWrapper } from "./MainMenuNavWrapper";
import type { MainMenuItemRootDef } from "@simpleview/sv-mosaic/components/MainMenu";

export default {
	title : "Components/MainMenu",
};

const siteMapItems = (site: string) => [
	{
		name : `sitemap.${site}.main`,
		label : "Main Navigation",
	},
	{
		name : `sitemap.${site}.secondary`,
		label : "Secondary Navigation",
	},
	{
		name : `sitemap.${site}.footer`,
		label : "Footer Navigation",
	},
	{
		name : `sitemap.${site}.landing`,
		label : "Landing Pages",
	},
	{
		name : `sitemap.${site}.system`,
		label : "System",
	},
	{
		name : `sitemap.${site}.microsites`,
		label : "Microsites",
	},
];

const items: MainMenuItemRootDef[] = [
	{
		name : "home",
		label : "Home",
		mIcon : HomeIcon,
	},
	{
		name : "sitemap",
		label : "Sitemap",
		mIcon : AccountTreeIcon,
		items : [
			{
				name : "sitemap.primary",
				label : "Primary",
				items : siteMapItems("primary"),
			},
			{
				name : "sitemap.dutch",
				label : "Dutch",
				items : siteMapItems("dutch"),
			},
			{
				name : "sitemap.french",
				label : "French",
				items : siteMapItems("french"),
			},
			{
				name : "sitemap.spanish",
				label : "Spanish",
				items : siteMapItems("spanish"),
			},
			{
				name : "sitemap.ethiophia",
				label : "Federal Democratic Republic of Ethiopia",
				items : siteMapItems("ethiophia"),
			},
		],
	},
	{
		mIcon : ImageIcon,
		name : "assets",
		label : "Assets",
		items : [
			{
				name : "assets.documents",
				label : "Documents",
			},
			{
				name : "assets.external",
				label : "External Links",
			},
			{
				name : "assets.images",
				label : "Images",
			},
			{
				name : "assets.videos",
				label : "Videos",
			},
		],
	},
	{
		name: "long.names",
		label: "Long menu labels that have no business being so long",
		type: "item",
		items: [
			{
				name: "super.long.name",
				label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut sapien nulla. Sed vestibulum magna eu ante tincidunt, sit amet sagittis turpis gravida. Sed et tincidunt diam.",
				type: "item",
			},
		],
	},
	{
		name : "modules",
		label : "Action Types",
		type : "group",
		mIcon : ExtensionIcon,
		items : [
			{
				name : "click_variations.default",
				label : "Default",
			},
			{
				name : "click_variations.default_with_href",
				label : "Default with href",
				attrs : {
					href : "https://www.google.com/",
				},
			},
			{
				name : "click_variations.href_only",
				label : "Href, default prevented",
				onNav : false,
				attrs : {
					href : "https://www.google.com/",
				},
			},
			{
				name : "click_variations.href_new_window",
				label : "Href, new window",
				onNav : false,
				attrs : {
					href : "https://www.google.com/",
					target : "_blank",
				},
			},
			{
				name : "click_variations.custom_handler",
				label : "Custom Handler",
				onNav : function() {
					alert("Custom handler!");
				},
			},
		],
	},
	{
		name : "pinned_bottom",
		label : "Pinned Bottom",
		pinned : "bottom",
		mIcon : HelpIcon,
		items : [
			{
				name : "pinned_bottom.short",
				label : "Short",
			},
			{
				name : "pinned_bottom.short_icon",
				label : "Short Icon",
				mIcon : HomeIcon,
			},
			{
				name : "pinned_bottom.short_icon_children",
				label : "Short Icon Children",
				mIcon : HomeIcon,
				items : [
					{
						name : "pinned_bottom.short_icon_children.item",
						label : "Item",
					},
				],
			},
		],
	},
];

export const Playground = ({ mobileBreakpoint }: typeof Playground.args): ReactElement => {
	const mosaicSettings = useMosaicSettings();

	return (
		<MosaicContext.Provider value={mosaicSettings}>
			<div style={{ height: "100vh" }}>
				<MainMenuNavWrapper
					items={items}
					mobileBreakpoint={mobileBreakpoint}
				/>
			</div>
		</MosaicContext.Provider>
	);
};

Playground.args = {
	mobileBreakpoint: 1024,
};

Playground.argTypes = {
	mobileBreakpoint: {
		name: "Mobile Breakpoint",
		control: { type: "number" },
	},
};
