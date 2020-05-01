import * as React from "react";
import { useState, Fragment, useMemo } from "react";
import { boolean, select, withKnobs, text } from "@storybook/addon-knobs";
import styled from "styled-components";
import { LoremIpsum } from "react-lorem-ipsum";

import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ImageIcon from '@material-ui/icons/Image';
import ExtensionIcon from '@material-ui/icons/Extension';
import BuildIcon from '@material-ui/icons/Build';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import TranslateIcon from '@material-ui/icons/Translate';
import MapIcon from '@material-ui/icons/Map';

import Button from "../Button";
import LeftNav from "./LeftNav";
import { LeftNavItemDef, LeftNavProps } from "./LeftNavTypes";
import { useStoryBookCssReset } from "../../utils/reactTools";

import "../../utils/storyBookCssReset.css";

export default {
	title : "Components|LeftNav",
	decorators : [withKnobs]
}

const StyledTopBar = styled.div`
	flex: 0 0 auto;
	background: #1a1a1a;
	color: white;
	padding: 6px 16px;
	display: flex;
	align-items: center;
	min-height: 36px;
	box-sizing: border-box;

	& > .menuButton {
		margin-right: 12px;
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	& > .logo {
		max-height: 20px;
	}
`;

const FakeTopBar = function(props: any) {
	return (
		<StyledTopBar>
			{
				props.variant === "hidden" &&
				<span title="Open Navigation" className="menuButton">
					<MenuIcon onClick={props.openNav}/>
				</span>
			}
			<img src="https://auth.simpleviewinc.com/static_shared/simpleview_reverse.png" className="logo"/>
		</StyledTopBar>
	)
}

const AppDiv = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;

	& > .main {
		flex: 1 1 0;
		overflow: hidden;
		display: flex;
	}

	& > .main > .left {
		flex: 0 0 auto;
		overflow-y: auto;
	}

	& > .main > .content {
		padding: 16px;
		flex: 1 1 0;
		overflow-y: auto;
	}

	& h1 {
		margin-top: 0px;
	}
`;

const localKey = "sv-mosaic-left-nav-variant";

const NavWrapper = function(props: any) {
	useStoryBookCssReset();

	const [state, setState] = useState({
		open : false,
		variant : (localStorage.getItem(localKey) ?? "full") as LeftNavProps["variant"],
		label : "Home",
		name : "home"
	});

	const onClick = function() {
		setState({
			...state,
			open : true
		});
	}

	const onClose = function() {
		setState({
			...state,
			open : false
		})
	}

	const onNav: LeftNavProps["onNav"] = function({ item }) {
		setState({
			...state,
			open : false,
			label : item.label,
			name : item.name
		})
	}

	const onVariantChange = function(variant) {
		localStorage.setItem("sv-mosaic-left-nav-variant", variant);

		setState({
			...state,
			variant
		})
	}

	const lorem = useMemo(() => {
		return <LoremIpsum p={10}/>
	}, []);

	return (
		<AppDiv>
			<FakeTopBar variant={state.variant} openNav={onClick}/>
			<div className="main">
				<div className="left">
					<LeftNav
						active={state.name}
						open={state.open}
						items={props.items}
						variant={state.variant}
						onClose={onClose}
						onNav={onNav}
						onVariantChange={onVariantChange}
					/>
				</div>
				<div className="content">
					<h1>{state.label}</h1>
					<h2>{state.name}</h2>
					{lorem}
				</div>
			</div>
		</AppDiv>
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
];

const blogItems = (blog) => [
	{
		name : `modules.blog.${blog}.authors`,
		label : "Authors"
	},
	{
		name : `modules.blog.${blog}.categories`,
		label : "Categories"
	},
	{
		name : `modules.blog.${blog}.posts`,
		label : "Posts"
	},
	{
		name : `modules.blog.${blog}.tags`,
		label : "Tags"
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
	},
	blog : {
		name : "modules.blog",
		label : "Public Relations",
		items : [
			{
				name : "modules.blog.articles",
				label : "Articles",
				items : blogItems("articles")
			},
			{
				name : "modules.blog.blog",
				label : "Blog",
				items : blogItems("blog")
			},
			{
				name : "modules.blog.meetings",
				label : "Meetings Blog",
				items : blogItems("meetings")
			}
		]
	}
}

const dataSets: { [key: string]: LeftNavItemDef[] } = {
	qa : [
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
						},
						{
							name : "menu2.child2.child3",
							label : "Child 3 with icon",
							mIcon : ImageIcon
						}
					]
				},
				{
					name : "menu2.child3",
					label : "Child 3",
					items : [
						{
							name : "menu2.child3.child1",
							label : "Child 1"
						},
						{
							name : "menu2.child3.child2",
							label : "Group 1",
							type : "group",
							items : [
								{
									name : "menu2.child3.child2.chil1",
									label : "Child 1"
								},
								{
									name : "menu2.child3.child2.child2",
									label : "Child 2"
								}
							]
						}
					]
				}
			]
		},
		{
			name : "menu3",
			label : "Menu 3"
		},
		{
			name : "menu4",
			label : "Menu 4 with a really really long title"
		},
		{
			name : "menu5",
			label : "Menu5 with a really long title and an icon",
			mIcon : ImageIcon
		},
		{
			name : "group1",
			label : "Group 1",
			type : "group",
			items : [
				{
					name : "group1.menu1",
					label : "Menu 1",
					mIcon : ImageIcon
				},
				{
					name : "group1.menu2",
					label : "Menu 2"
				}
			]
		},
		{
			name : "group2",
			label : "Group 2",
			type : "group",
			mIcon : ImageIcon,
			items : [
				{
					name : "group2.menu1",
					label : "Menu 1",
					mIcon : ImageIcon
				},
				{
					name : "group2.menu2",
					label : "Menu 2"
				}
			]
		}
	],
	cms : [
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
				navSections.blog,
				navSections.translation
			]
		},
		navSections.settings
	],
	cms_flat : [
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
				navSections.blog,
				navSections.translation
			]
		},
		{
			...navSections.settings,
			type : "group"
		}
	],
	root_icons : [
		{
			name : "home",
			label : "Home",
			showLabel : false,
			mIcon : HomeIcon
		},
		{
			...navSections.sitemap,
			showLabel : false
		},
		{
			...navSections.assets,
			mIcon : ImageIcon,
			showLabel : false
		},
		{
			...navSections.collections,
			mIcon : DashboardIcon,
			showLabel : false
		},
		{
			...navSections.blog,
			mIcon : ChromeReaderModeIcon,
			showLabel : false
		},
		{
			...navSections.translation,
			mIcon : TranslateIcon,
			showLabel : false
		},
		{
			name : "modules",
			label : "Modules",
			mIcon : ExtensionIcon,
			showLabel : false,
			items : [
				navSections.assetRequest,
				navSections.autoResponder,
				
				navSections.dynamic,
				navSections.mapPublisher,
				navSections.mediaGallery,
				navSections.translation
			]
		},
		{
			...navSections.settings,
			showLabel : false
		}
	]
}

export const cmsFlatIA = () => {
	// const dataSet = select("Data", ["qa", "cms", "cms_flat", "root_icons"], "cms_flat");

	const items = dataSets["cms_flat"];

	return (
		<NavWrapper items={items}/>
	)
}