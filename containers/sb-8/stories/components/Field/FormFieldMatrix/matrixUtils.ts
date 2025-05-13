export const rootDefaultView = {
	id: "default",
	label: "All",
	type: "default",
	state: {
		limit: 25,
		skip: 0,
		filter: {},
		sort: {
			name: "title",
			dir: "asc",
		},
		display: "list",
		activeFilters: [],
		activeColumns: ["image", "title", "categories", "created"],
	},
};

export const defaultView = {
	...rootDefaultView,
	state: {
		...rootDefaultView.state,
		display:  "list",
	},
};

export const listColumns = [
	{
		name: "id",
		label: "ID",
	},
	{
		name: "description",
		label: "Description",
	},
	{
		name: "title",
		label: "Title",
	},
];
