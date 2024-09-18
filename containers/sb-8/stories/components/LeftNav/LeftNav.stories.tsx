import * as React from "react";
import { useEffect, ReactElement } from "react";

import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ImageIcon from "@mui/icons-material/Image";
import ExtensionIcon from "@mui/icons-material/Extension";
import BuildIcon from "@mui/icons-material/Build";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HelpIcon from "@mui/icons-material/Help";
import LinkIcon from "@mui/icons-material/Link";

import MosaicContext from "@root/components/MosaicContext";
import useMosaicSettings from "@root/utils/useMosaicSettings";

import { LeftNavItemRootDef } from "@root/components/LeftNav";
import { NavWrapper } from "@root/components/LeftNav/NavWrapper";

import "@root/utils/storyBookCssReset.css";

export default {
	title : "Components/LeftNav",
};

const siteMapItems = (site) => [
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

const blogItems = (blog) => [
	{
		name : `modules.blog.${blog}.authors`,
		label : "Authors",
	},
	{
		name : `modules.blog.${blog}.categories`,
		label : "Categories",
	},
	{
		name : `modules.blog.${blog}.posts`,
		label : "Posts",
	},
	{
		name : `modules.blog.${blog}.tags`,
		label : "Tags",
	},
];

const navSections = {
	dynamic : {
		name : "modules.dynamic",
		label : "Dynamic Content",
		items : [
			{
				name : "modules.dynamic.personas",
				label : "Personas",
			},
			{
				name : "modules.dynamic.profiles",
				label : "Profiles",
			},
		],
	},
	assetRequest : {
		name : "modules.asset_request",
		label : "Asset Request",
		items : [
			{
				name : "modules.asset_request.items",
				label : "Items",
			},
			{
				name : "modules.asset_request.categories",
				label : "Categories",
			},
			{
				name : "modules.asset_request.tags",
				label : "Tags",
			},
			{
				name : "modules.asset_request.licenses",
				label : "Licenses",
			},
			{
				name : "modules.asset_request.requests",
				label : "Requests",
			},
		],
	},
	collections : {
		name : "modules.collections",
		label : "Collection Types",
		items : [
			{
				name : "modules.collections.blog",
				label : "Blog Categories",
			},
			{
				name : "modules.collections.experience",
				label : "Experience",
			},
			{
				name : "modules.collections.header",
				label : "Header Slides",
			},
			{
				name : "modules.collections.header_video",
				label : "Header Video Slides",
			},
		],
	},
	mapPublisher : {
		name : "modules.map_publisher",
		label : "Map Publisher",
	},
	mediaGallery : {
		name : "modules.media_gallery",
		label : "Media Gallery",
		items : [
			{
				name : "modules.media_gallery.galleries",
				label : "Galleries",
			},
			{
				name : "modules.media_gallery.albums",
				label : "Albums",
			},
			{
				name : "modules.media_gallery.album_items",
				label : "Album Items",
			},
			{
				name : "modules.media_gallery.tags",
				label : "Tags",
			},
		],
	},
	assets : {
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
	sitemap : {
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
		],
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
						label : "Document Categories",
					},
					{
						name : "settings.assets.image_categories",
						label : "Image Categories",
					},
					{
						name : "settings.assets.video_categories",
						label : "Video Categories",
					},
				],
			},
			{
				name : "settings.cms_tags",
				label : "CMS Tags",
			},
			{
				name : "settings.field_builder",
				label : "Field Builder",
				items : [
					{
						name : "settings.field_builder.assets_documents",
						label : "Asset Library - Documents",
					},
					{
						name : "settings.field_builder.assets_external",
						label : "Asset Library - External Links",
					},
					{
						name : "settings.field_builder.assets_images",
						label : "Asset Library - Images",
					},
					{
						name : "settings.field_builder.assets_videos",
						label : "Asset Library - Videos",
					},
					{
						name : "settings.field_builder.core_textbox",
						label : "Core - Textbox",
					},
				],
			},
			{
				name : "settings.nav",
				label : "Nav",
				items : [
					{
						name : "settings.nav.locale_tags",
						label : "Locale Tags",
					},
					{
						name : "settings.nav.nav_tags",
						label : "Nav Tags",
					},
				],
			},
			{
				name : "settings.tasks",
				label : "Tasks",
				items : [
					{
						name : "settings.tasks.categories",
						label : "Categories",
					},
				],
			},
			{
				name : "settings.users",
				label : "Users",
				items : [
					{
						name : "settings.users.manage",
						label : "Manage Users",
					},
					{
						name : "settings.users.roles",
						label : "Manage Roles",
					},
					{
						name : "settings.users.history",
						label : "User History",
					},
				],
			},
			{
				name : "settings.visitors",
				label : "Visitors",
				items : [
					{
						name : "settings.visitors.test_subscription",
						label : "Test Subscriptions",
					},
				],
			},
		],
	},
	autoResponder : {
		name : "modules.auto_responder",
		label : "Auto Responder",
		items : [
			{
				name : "modules.auto_responder.content",
				label : "Content",
			},
			{
				name : "modules.auto_responder.links",
				label : "Links",
			},
		],
	},
	translation : {
		name : "modules.translation",
		label : "Translation",
		items : [
			{
				name : "modules.translation.static",
				label : "Static Namespaces",
			},
		],
	},
	blog : {
		name : "modules.blog",
		label : "Public Relations",
		items : [
			{
				name : "modules.blog.articles",
				label : "Articles",
				items : blogItems("articles"),
			},
			{
				name : "modules.blog.blog",
				label : "Blog",
				items : blogItems("blog"),
			},
			{
				name : "modules.blog.meetings",
				label : "Meetings Blog",
				items : blogItems("meetings"),
			},
		],
	},
};

const dataSets: { [key: string]: LeftNavItemRootDef[] } = {
	qa : [
		{
			name : "short_icon",
			label : "Short Icon",
			mIcon : HomeIcon,
		},
		{
			name : "short_icon_children",
			label : "Short Icon Children",
			mIcon : ExtensionIcon,
			items : [
				{
					name : "short_icon_children.short",
					label : "Short",
				},
				{
					name : "short_icon_children.short_icon",
					label : "Short Icon",
					mIcon : HomeIcon,
				},
				{
					name : "short_icon_children.short_children",
					label : "Short Children",
					items : [
						{
							name :"short_icon_children.short_children.item",
							label : "Item",
						},
						{
							name : "short_icon_children.short_children.children",
							label : "With Children",
							items : [
								{
									name :"short_icon_children.short_children.children.item",
									label : "Item",
								},
								{
									name : "short_icon_children.short_children.children.children",
									label : "With Children",
									items : [
										{
											name :"short_icon_children.short_children.children.children.item",
											label : "Item",
										},
										{
											name : "short_icon_children.short_children.children.children.children",
											label : "With Children",
											items : [
												{
													name :"short_icon_children.short_children.children.children.children.item",
													label : "Item",
												},
												{
													name : "short_icon_children.short_children.children.children.children.children",
													label : "With Children",
													items : [
														{
															name :"short_icon_children.short_children.children.children.children.children.item",
															label : "Item",
														},
														{
															name : "short_icon_children.short_children.children.children.children.children.children",
															label : "With Children",
															items : [
																{
																	name :"short_icon_children.short_children.children.children.children.children.children.item",
																	label : "Item",
																},
																{
																	name : "short_icon_children.short_children.children.children.children.children.children.children",
																	label : "With Children",
																	items : [
																		{
																			name :"short_icon_children.short_children.children.children.children.children.children.children.item",
																			label : "Item",
																		},
																		{
																			name : "short_icon_children.short_children.children.children.children.children.children.children.children",
																			label : "With Children",
																			items : [
																				{
																					name :"short_icon_children.short_children.children.children.children.children.children.children.children.item",
																					label : "Item",
																				},
																				{
																					name : "short_icon_children.short_children.children.children.children.children.children.children.children.children",
																					label : "With Children",
																					items : [
																						{
																							name :"short_icon_children.short_children.children.children.children.children.children.children.children.children.item",
																							label : "Item",
																						},
																						{
																							name : "short_icon_children.short_children.children.children.children.children.children.children.children.children.children",
																							label : "With Children",
																							items : [
																								{
																									name :"short_icon_children.short_children.children.children.children.children.children.children.children.children.children.item",
																									label : "Item",
																								},
																							],
																						},
																					],
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					name : "short_icon_children.short_icon_children",
					label : "Short Icon Children",
					mIcon : HomeIcon,
					items : [
						{
							name : "short_icon_children.short_icon_children.item",
							label : "Item",
						},
					],
				},
				{
					name : "short_icon_children.long",
					label : "Long - lorem ipsum dolor sit amet",
				},
				{
					name : "short_icon_children.long_icon",
					label : "Long Icon - lorem ipsum dolor sit amet",
					mIcon : HomeIcon,
				},
				{
					name : "short_icon_children.long_children",
					label : "Long Children - lorem ipsum dolor sit amet",
					items : [
						{
							name : "short_icon_children.long_children.item",
							label : "Item",
						},
					],
				},
				{
					name : "short_icon_children.long_icon_children",
					label : "Long Icon Children - lorem ipsum dolor sit amet",
					mIcon : HomeIcon,
					items : [
						{
							name : "short_icon_children.long_icon_children.item",
							label : "Item",
						},
					],
				},
				// automate 20 entries to create a vertical scroller in the flyout
				...(
					new Array(35).fill(0).map((_, i) => {
						return {
							name : `short_icon_children.filler_item_${i}`,
							label : `Filler ${i}`,
						};
					})
				),
				{
					name : "short_icon_children.after_filler",
					label : "After Filler with Children",
					items : [
						{
							name : "short_icon_children.after_filler.item",
							label : "Item",
						},
					],
				},
			],
		},
		{
			name : "long_icon",
			label : "Long Icon - lorem ipsum dolor sit amet",
			mIcon : DashboardIcon,
		},
		{
			name : "long_icon_children",
			label : "Long Icon Children - lorem ipsum dolor sit amet",
			mIcon : AccountTreeIcon,
			items : [
				{
					name : "long_icon_children.item",
					label : "Item",
				},
			],
		},
		{
			name : "group_short_icon",
			label : "Group Short",
			type : "group",
			mIcon : ImageIcon,
			items : [
				{
					name : "group_short_icon.short",
					label : "Short",
				},
				{
					name : "group_short_icon.short_icon",
					label : "Short Icon",
					mIcon : HomeIcon,
				},
				{
					name : "group_short_icon.short_children",
					label : "Short Children",
					items : [
						{
							name : "group_short_icon.short_children.short_children.item",
							label : "Item",
						},
						{
							name : "group_short_icon.short_children.short_children.children",
							label : "With Children",
							items : [
								{
									name :"group_short_icon.short_children.short_children.children.item",
									label : "Item",
								},
								{
									name : "group_short_icon.short_children.short_children.children.children",
									label : "With Children",
									items : [
										{
											name : "group_short_icon.short_children.short_children.children.children.item",
											label : "Item",
										},
									],
								},
							],
						},
					],
				},
				{
					name : "group_short_icon.short_icon_children",
					label : "Short Icon Children",
					mIcon : HomeIcon,
					items : [
						{
							name : "group_short_icon.short_icon_children.item",
							label : "Item",
						},
					],
				},
				{
					name : "group_short_icon.long",
					label : "Long - lorem ipsum dolor sit amet",
				},
				{
					name : "group_short_icon.long_icon",
					label : "Long Icon - lorem ipsum dolor sit amet",
					mIcon : HomeIcon,
				},
				{
					name : "group_short_icon.long_children",
					label : "Long Children - lorem ipsum dolor sit amet",
					items : [
						{
							name : "group_short_icon.long_children.item",
							label : "Item",
						},
					],
				},
				{
					name : "group_short_icon.long_icon_children",
					label : "Long Icon Children - lorem ipsum dolor sit amet",
					mIcon : HomeIcon,
					items : [
						{
							name : "group_short_icon.long_icon_children.item",
							label : "Item",
						},
					],
				},
			],
		},
		{
			name : "group_long_icon",
			label : "Group Long Icon - lorem ipsum dolor sit amet",
			type : "group",
			mIcon : BuildIcon,
			items : [
				{
					name : "group_long_icon.item",
					label : "Item",
				},
			],
		},
		{
			name : "item_with_attrs",
			label : "Items With Attrs",
			mIcon : HomeIcon,
			attrs : {
				"data-attr" : "foo",
			},
		},
		{
			name : "click_variations",
			label : "Click Variations",
			mIcon : LinkIcon,
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
					label : "Href Only",
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
	],
	cms_flat : [
		{
			name : "home",
			label : "Home",
			mIcon : HomeIcon,
		},
		{
			...navSections.sitemap,
		},
		{
			...navSections.assets,
			mIcon : ImageIcon,
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
				navSections.translation,
			],
		},
		{
			...navSections.settings,
			type : "group",
		},
	],
	none: [],
};

export const Playground = ({ dataSet, locale }: typeof Playground.args): ReactElement => {
	const items = dataSets[dataSet];

	const mosaicSettings = useMosaicSettings();

	// If the user changes the locale knob we need to propagate to our i18n object
	useEffect(() => {
		if (mosaicSettings.i18n.language !== locale) {
			mosaicSettings.i18n.changeLanguage(locale);
		}
	}, [locale]);

	return (
		<MosaicContext.Provider value={mosaicSettings}>
			<div style={{ height: "100vh" }}>
				<NavWrapper items={items} />
			</div>
		</MosaicContext.Provider>
	);
};

Playground.args = {
	dataSet: "cms_flat",
	locale: "en",
};

Playground.argTypes = {
	dataSet: {
		name: "Data",
		options: ["qa", "cms_flat", "none"],
		control: { type: "select" },
	},
	locale: {
		name: "Locale",
		options: ["en", "es", "cimode", "de"],
		control: { type: "select" },
	},
};
