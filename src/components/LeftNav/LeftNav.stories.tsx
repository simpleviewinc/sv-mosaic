import * as React from "react";
import { useState, Fragment } from "react";

import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ImageIcon from '@material-ui/icons/Image';
import ExtensionIcon from '@material-ui/icons/Extension';
import BuildIcon from '@material-ui/icons/Build';

import Button from "../Button";
import LeftNav from "./LeftNav";
import { LeftNavItemDef, LeftNavProps } from "./LeftNavTypes";

export default {
	title : "Components|LeftNav"
}

const NavWrapper = function(props: any) {
	const [state, setState] = useState({
		open : false
	});

	const onClick = function() {
		setState({
			open : true
		});
	}

	const onClose = function() {
		setState({
			open : false
		})
	}

	const onNav: LeftNavProps["onNav"] = function({ item }) {
		alert(`Navigating to ${item.name}`);
		onClose();
	}

	return (
		<Fragment>
			<Button
				color="black"
				variant="icon"
				mIcon={MenuIcon}
				onClick={onClick}
			/>
			<LeftNav
				open={state.open}
				items={props.items}
				onClose={onClose}
				onNav={onNav}
			/>
		</Fragment>
	)
}

const siteMapItems = (site) => [
	{
		name : `sitemap.${site}.main`,
		label : "Main Navigation"
	},
	{
		name : `sitemap.${site}.secondary`,
		label : "Secondary Navigation"
	},
	{
		name : `sitemap.${site}.footer`,
		label : "Footer Navigation"
	},
	{
		name : `sitemap.${site}.landing`,
		label : "Landing Pages"
	},
	{
		name : `sitemap.${site}.system`,
		label : "System"
	},
	{
		name : `sitemap.${site}.microsites`,
		label : "Microsites"
	}
]

const navSections = {
	dynamic : {
		name : "modules.dynamic",
		label : "Dynamic Content",
		items : [
			{
				name : "modules.dynamic.personas",
				label : "Personas"
			},
			{
				name : "modules.dynamic.profiles",
				label : "Profiles"
			}
		]
	},
	assetRequest : {
		name : "modules.asset_request",
		label : "Asset Request",
		items : [
			{
				name : "modules.asset_request.items",
				label : "Items"
			},
			{
				name : "modules.asset_request.categories",
				label : "Categories"
			},
			{
				name : "modules.asset_request.tags",
				label : "Tags"
			},
			{
				name : "modules.asset_request.licenses",
				label : "Licenses"
			},
			{
				name : "modules.asset_request.requests",
				label : "Requests"
			}
		]
	},
	collections : {
		name : "modules.collections",
		label : "Collection Types",
		items : [
			{
				name : "modules.collections.blog",
				label : "Blog Categories"
			},
			{
				name : "modules.collections.experience",
				label : "Experience"
			},
			{
				name : "modules.collections.header",
				label : "Header Slides"
			},
			{
				name : "modules.collections.header_video",
				label : "Header Video Slides"
			}
		]
	},
	mapPublisher : {
		name : "modules.map_publisher",
		label : "Map Publisher"
	},
	mediaGallery : {
		name : "modules.media_gallery",
		label : "Media Gallery",
		items : [
			{
				name : "modules.media_gallery.galleries",
				label : "Galleries"
			},
			{
				name : "modules.media_gallery.albums",
				label : "Albums"
			},
			{
				name : "modules.media_gallery.album_items",
				label : "Album Items"
			},
			{
				name : "modules.media_gallery.tags",
				label : "Tags"
			}
		]
	},
	assets : {
		name : "assets",
		label : "Assets",
		items : [
			{
				name : "assets.documents",
				label : "Documents"
			},
			{
				name : "assets.external",
				label : "External Links"
			},
			{
				name : "assets.images",
				label : "Images"
			},
			{
				name : "assets.videos",
				label : "Videos"
			}
		]
	},
	sitemap : {
		name : "sitemap",
		label : "Sitemap",
		mIcon : AccountTreeIcon,
		items : [
			{
				name : "sitemap.primary",
				label : "Primary",
				items : siteMapItems("primary")
			},
			{
				name : "sitemap.dutch",
				label : "Dutch",
				items : siteMapItems("dutch")
			},
			{
				name : "sitemap.french",
				label : "French",
				items : siteMapItems("french")
			},
			{
				name : "sitemap.spanish",
				label : "Spanish",
				items : siteMapItems("spanish")
			}
		]
	},
	settings : {
		name : "settings",
		label : "Settings",
		mIcon : BuildIcon,
		items : [
			{
				name : "settings.assets",
				label : "Assets",
				items : [
					{
						name : "settings.assets.document_categories",
						label : "Document Categories"
					},
					{
						name : "settings.assets.image_categories",
						label : "Image Categories"
					},
					{
						name : "settings.assets.video_categories",
						label : "Video Categories"
					}
				]
			},
			{
				name : "settings.cms_tags",
				label : "CMS Tags"
			},
			{
				name : "settings.field_builder",
				label : "Field Builder",
				items : [
					{
						name : "settings.field_builder.assets_documents",
						label : "Asset Library - Documents"
					},
					{
						name : "settings.field_builder.assets_external",
						label : "Asset Library - External Links"
					},
					{
						name : "settings.field_builder.assets_images",
						label : "Asset Library - Images"
					},
					{
						name : "settings.field_builder.assets_videos",
						label : "Asset Library - Videos"
					},
					{
						name : "settings.field_builder.core_textbox",
						label : "Core - Textbox"
					}
				]
			},
			{
				name : "settings.nav",
				label : "Nav",
				items : [
					{
						name : "settings.nav.locale_tags",
						label : "Locale Tags"
					},
					{
						name : "settings.nav.nav_tags",
						label : "Nav Tags"
					}
				]
			},
			{
				name : "settings.tasks",
				label : "Tasks",
				items : [
					{
						name : "settings.tasks.categories",
						label : "Categories"
					}
				]
			},
			{
				name : "settings.users",
				label : "Users",
				items : [
					{
						name : "settings.users.manage",
						label : "Manage Users"
					},
					{
						name : "settings.users.roles",
						label : "Manage Roles"
					},
					{
						name : "settings.users.history",
						label : "User History"
					}
				]
			},
			{
				name : "settings.visitors",
				label : "Visitors",
				items : [
					{
						name : "settings.visitors.test_subscription",
						label : "Test Subscriptions"
					}
				]
			}
		]
	},
	autoResponder : {
		name : "modules.auto_responder",
		label : "Auto Responder",
		items : [
			{
				name : "modules.auto_responder.content",
				label : "Content"
			},
			{
				name : "modules.auto_responder.links",
				label : "Links"
			}
		]
	},
	translation : {
		name : "modules.translation",
		label : "Translation",
		items : [
			{
				name : "modules.translation.static",
				label : "Static Namespaces"
			}
		]
	}
}

export const example = () => {
	const items: LeftNavItemDef[] = [
		{
			name : "menu1",
			label : "Menu 1",
			mIcon : HomeIcon
		},
		{
			name : "menu2",
			label : "Menu 2",
			items : [
				{
					name : "menu2.child1",
					label : "Child 1"
				},
				{
					name : "menu2.child2",
					label : "Child 2",
					items : [
						{
							name : "menu2.child2.child1",
							label : "Child 1"
						},
						{
							name : "menu2.child2.child2",
							label : "Child 2"
						}
					]
				}
			]
		},
		{
			name : "menu3",
			label : "Menu 3"
		}
	]
	
	return (
		<NavWrapper items={items}/>
	)
}

export const cms = () => {
	const items: LeftNavItemDef[] = [
		{
			name : "home",
			label : "Home",
			mIcon : HomeIcon
		},
		{
			...navSections.sitemap,
			mIcon : AccountTreeIcon
		},
		{
			...navSections.assets,
			mIcon : ImageIcon
		},
		{
			name : "modules",
			label : "Modules",
			mIcon : ExtensionIcon,
			items : [
				navSections.assetRequest,
				navSections.autoResponder,
				navSections.collections,
				navSections.dynamic,
				navSections.mapPublisher,
				navSections.mediaGallery,
				navSections.translation
			]
		},
		navSections.settings
	]

	return (
		<NavWrapper items={items}/>
	)
}

export const cmsFlatIA = () => {
	const items = [
		{
			name : "home",
			label : "Home",
			mIcon : HomeIcon
		},
		{
			...navSections.sitemap
		},
		{
			...navSections.assets,
			mIcon : ImageIcon
		},
		{
			name : "modules",
			label : "Modules",
			type : "group",
			mIcon : ExtensionIcon,
			items : [
				navSections.assetRequest,
				navSections.autoResponder,
				navSections.collections,
				navSections.dynamic,
				navSections.mapPublisher,
				navSections.mediaGallery,
				navSections.translation
			]
		},
		{
			...navSections.settings,
			type : "group"
		}
	]

	return (
		<NavWrapper items={items}/>
	)
}