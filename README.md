[![npm version](https://badge.fury.io/js/%40simpleview%2Fsv-mosaic.svg)](https://badge.fury.io/js/%40simpleview%2Fsv-mosaic)

# sv-mosaic

```
npm install sv-mosaic
```

Mosaic is a [React](https://reactjs.org/) user interface library designed to create admin interfaces. It is designed to be product agnostic allowing it to be utilized in any manner of Admin interface.

It is built on top of [React Material-UI](https://material-ui.com/) and is it recommended that you pin to the same version that Mosaic is using.

Examples: https://simpleviewinc.github.io/sv-mosaic/

[Changelog](changelog.md) - See the latest changes to sv-mosaic.

# Usage

* Add sv-mosaic to your package.json and pin to a specific version.
* sv-mosaic has a host of `peerDependencies` which are not bundled into the library in order to minimize the bundle size of those that are using the package. You will need to ensure all of the `peerDependencies` of the package are satisfied. See the [package.json](package.json) for the current `peerDependencies`.

All components are exported individually and should be imported via destructuring to ensure proper tree-shaking.

```js
import { DataView } from "@simpleview/sv-mosaic"
```

## Optimization Guidelines

In order to have `sv-mosaic` or any `react` package perform optimally, you will want to follow some basic guidelines.

##### Reduce bundle size

In order to keep your bundle size small you will want to ensure that you are statically importing all of your packages as well as only using the dependencies you need. If you are using Webpack make sure you are following their [Tree Shaking Guidelines](https://webpack.js.org/guides/tree-shaking/). For `@material-ui/icons` make sure you are following their [Bundle Size Guidelines](https://material-ui.com/guides/minimizing-bundle-size/).

##### Minimize component re-renders

You want to ensure that your components only re-render if they are really changing. Even if the UI doesn't visibly change, your component functions may still be executing and their render functions called, which can be very expensive. In order to verify that you are not doing extraneous re-renders, utilize the chrome React dev tools under the profiler tab. Click the red button to record, and then make one action in the UI, stop recording, and then check to see what components re-rendered, if any elements show up that you did not expect, then start to explore why.

##### Ensure callbacks do not regenerate every render

When working with React functional components, the function is called on every render. If your function props anything to a child that changes, the child will re-render even if it is wrapped in a `React.memo`. Callbacks are a common place where we can make this mistake. Unless cached with `useCallback`, `useMemo` or `useRef` the function passed each render will be a **different** function, requiring the child component to re-render as well.

Example: https://codepen.io/owenallenaz/pen/RwwYKxw . This codepen is a simple list app where you type an item into the text box, hit Add and it adds it to the list. What you'll notice is that even though List is wrapped in `React.memo()` it still re-renders on **every keystroke**. The reason for this is due to the `onRemove` function being a new function every render.

In general there are 2 common ways to prevent this. Both patterns are viable and encouraged, and they essentially boil down to whether you prefer to use reducers for their other benefits, or prefer to use callbacks.

**Reducer Pattern**

By calling a dispatcher we can wrap our `onRemove` function in `useCallback` since it no longer needs to know the current state. The downside of this pattern is that you are forced to use a reducer for your state management, and if you are not already using a reducer, this can be a larger refactor. If you are already using a reducer, this is easy.

Example: https://codepen.io/owenallenaz/pen/YzzOZbx

**StateRef Pattern**

This pattern is an easy-drop in to most functional components as the state is made accessible on a ref. Using a few lines of code you can cache a callback without a significant refactor. In addition the `stateRef` can be re-used for other callbacks as well.

Example: https://codepen.io/owenallenaz/pen/vYYzmOp

## Components

### DataView

A DataView is used to output a list or grid of items. It can support a whole variety of actions including primary actions, additional actions and bulk actions.

##### Actions

Actions are the tool for giving your user a way to alter/interact with a specific row or rows within your list view. In `sv-mosaic` there are 3 types of actions: bulkActions, primaryActions and additionalActions.

* primaryActions - Buttons that display on each row, which are displayed to all users. You will want to use this for your frequently one or two most used actions. If you have too many primary actions then the UI can get bulky and likely some should be moved into `additionalActions`.
* additionalActions - Menu items which display underneath the "..." on each row in the list view.
* bulkActions - When users utilize the checkboxes on the rows, it will bring up bulkActions so that they can perform them on all actions.

For the props necessary for each action, please see the props section below.

##### Saved Views

The DataView system supports saved views. When enabled, the user will receive buttons at the top-right of the DataView allowing them to change the view and save a new one. This allows users to change their filters, columns, view and then save it for later, allowing other users to use that view.

##### Props
* title - `string` - The title of the DataView.
* columns - `array` of `object`
	* name - `string` - Unique name for this column.
	* column - `string` - defaults to `${column.name}` - When a column is displayed we need to know the name of the key in the data object that should populate this. By default `name` works. In some cases you might need to use the same data key but display it in multiple ways, you can use `column` for that purpose.
	* label - `string` - The displayed label of the column.
	* style - `string` - enum `bold` - When passed, the column will display as bold in the list-view.
	* sortable - `boolean` - Whether the column is sortable by the user.
	* transforms - `array of functions` - Functions which will receive the data from the column, manipulate the value, and then return it. An example of a transformation would be converting a JS `Date` object into a user-friendly string or converting boolean `true` to string `Yes`.
		* There are some helper functions within sv-mosaic that you can use to do some basic transforms.
* data - `array` of `object` - The data that should populate the list view. This prop should be populated based on the `filter`, `sort`, `limit`, and `skip`.
* filters - `array` of `object` - The primary and optional `Filters` which will be available in the `DataView`.
	* name - `string` required - A unique name used to identify the filter.
	* label - `string` required - A label to display for the user interacting with the filter.
	* component - `jsx component` required - A jsx component which handles the type of filter rendered.
		* DataViewFilterText - A text filter with comparisons which allows the user to specify filter text.
		* DataViewMultiselect - A list of options with comparisons which allows the user to select one or more values from the list.
		* FilterDate - A calendar picker which allows the user to select a date range.
	* type - `string` enum ["primary", "optional"] required - Indicates whether the component is displayed on the DataView or hidden under the addtional filters.
	* onChange - `function` required - A function which handles a the value of the filter changing. 
	* args - `object` - An object detailing arguments to be passed into the jsx component.
* filter - `object` - An object representing the total filtering logic applied to data in the `DataView`.
* activeFilters - `array` of `string` - List of filter names from the filters array which are active in the `DataView`.
* activeColumns - `array` of `string` - List of column names from the columns array which are displayed in the `DataView`.
* primaryActions - `array` of `object` - A list of actions which are always visible for each item in the `DataView`.
	* name - `string` required - A unique name for this action.
	* onClick - `function` required - A handler function to be invoked when this action is used.
	* color - enum - Supports the same values as the color prop in `Button`.
	* variant - enum - Supports the same values as the variant prop in `Button`.
	* mIcon - `Material-UI Icon` - An icon from `material-ui`.
	* label - `string` - A label to inform the user what action they will be choosing.
	* show - `function` or `boolean - A value or function controlling whether or not to display this action. 
* bulkActions - `array` of `objects` - A list of actions which are available when one or more item(s) are selected in the `DataView`.
	* format of the object is the same as primaryActions
* additionalActions - `array` of `object` - A list of actions which are hidden under the additional actions button for each item in the `DataView`.
	* name - `string` required - A unique name for this action.
	* onClick  - `function` required - a handler function to be invoked when this action is used.
	* label - `string` - A label to inform the user what action they will be choosing
	* show - `function` or `boolean` - A value or function controlling whether or not to display this action. If a function is specified, it should return `true` or `false`.
* buttons - `array` of `object` - A group of `Buttons` which will be displayed at the top of the `DataView` to the side of the `DataView` title.
* view - `string` - enum `list`, `grid` - What type of view should be utilized.
* savedView - `object` - A view to be loaded in the `DataView`.
* views - `array` of `object` - A list of saved views to be provided as options in the saved view switcher.
* count - `number` - The number of items from the data key which match the current filter.
* sort - `object` - The current sort applied to the `DataView`.
	* name - `string` - The name of one of the `DataView`'s activeColumns containing the sortable data.
	* dir - `string` enum ["asc", "desc"] - The direction (ascending or descending), to sort the data.
* sticky - `boolean` - Controls whether or not the DataView is constrained in size. If set to true, the DataView will scroll within a parent element's dimensions instead of being dynamically sized. When sticky is enabled, the column headers in list view and the bulk actions in grid view will both stick to the top of the DataView as it is scrolled.
* limit - `number` - The number of items the list should display per page.
* limitOptions - `array` of `number` - default `[25, 50, 100]` - When passed allows customizing the page-size options that is displayed to the user. You can utilize this option if you want to expose larger or smaller pagesize options.
* onLimitChange - `function({ limit })` - A callback that will be executed with the new limit selected by the user. It is recommended that when the user changes the limit, your state alteration should also reset the `skip` to `0`.
* skip - `number` - The current number of rows being skipped by the user using `0` based indexing. Given a `limit` of `10` So the first page should have a `skip` of `0` and the second page would have a skip of `10`.
* onSkipChange - `function({ skip })` - A callback that will be executed with the new skip selected by the user.
* loading - `boolean` - Pass `true` when your DataView is fetching data or doing some alteration which needs to lock the UI. While `loading` is true, the majority of the UI elements in the DataView are locked to prevent race conditions. Once the data has been fetched you will want to prop down `false` again.
* onSortChange - `function` - A callback function which is invoked when the sort of the `DataView` is changed. Returns a data object listing the chosen sort column and direction.
* onViewChange - `function` - A callback function which is invoked when a new view changes. Returns a data object detailing parameters of the new view.
* onActiveFiltersChange - function - A callback function which is invoked when the active filters change. Will be passed a data object containing a list of active filters and a filter object.
* onColumnsChange - `function` - A callback function which is invoked when the columns displayed in the `DataView` change. Will be passed a data object containing the new list of active columns.
* onSavedViewSave - `function` - A callback function which is invoked when a saved view is saved. This function will be passed a data object containing the view information.
* onSavedViewChange - `function` - A callback function which is invoked when a different saved view is loaded. This function will be passed a data object containing the view details.
* onSavedViewRemove - `function` - A callback function which is invoked with a saved view is deleted. This function will be passed a data object containing information about the removed view.
* onSavedViewGetOptions - `function` -  A callback function which is used to provide an array of views to the SavedView component. Useful when loading a list of saved views from a user profile.

### Button

Displays a button. See the example app at https://simpleviewinc.github.io/sv-mosaic/ for examples of what the different button variants and colors look like.

##### Props
* label - `string` or `jsx` - optional - The contents of the buttons label. For complicated buttons which are more than just text, you can pass JSX and it will render inside the button. Be careful to not overuse the JSX capability.
* className - `string` - optional - A string of classes to append to the root element.
* color - `string` - required enum `["black", "blue", "lightBlue", "red", "gray"]` - The color of the button.
* variant - `string` - required enum `["icon", "outlined", "contained", "text"]` - The display type of the button. See the example app to know what each variant looks like.
* iconPosition - `string` - default `left` - When a button has a `label` AND an `mIcon` it will determine which side of the button to place the `mIcon`.
* mIcon - `Material-UI Icon` - An icon from `material-ui`.
	* Example - `import AddIcon from '@material-ui/icons/Add'` and then you would pass `mIcon : AddIcon`.
	* Ensure you are loading the icons correctly per the optimization guidelines.
* onClick - `function` - optional - The function that will be executed when the button is clicked.
* fullWidth - `boolean` - optional - Buttons default to only displaying the width required for their content. If `fullWidth` is `true` it will stretch the button to use all allowable space.
* disabled - `boolean` - optional - When `true` the button will be displayed, but a user will not be able to interact with it.
* popover - `jsx` - optional - When passed, it will open the JSX within a popover when the user clicks on the button. Useful when you want to display an arbitrary block of content when the user clicks on the button.
* menuItems - `array` of `object` - optional - When passed will open a menu with the passed items when a user clicks on the button. The props are passed to the `Menu` component, see the docs for that component for what props are available.

# Installation

* Ensure you have [sv-kubernetes](https://github.com/simpleviewinc/sv-kubernetes) installed.
* If you want your windows box to have TypeScript completions of npm packages.
	* Install Node via https://nodejs.org/en/download/, easiest method is the Windows Install 64-bit. It may ask you to restart your box.
	* In windows cmd
		```
		cd d:\PATH\TO\sv-kubernetes\containers\sv-mosaic
		npm install
		```
* Putty/Shell into sv-kubernetes
	* Install the container
		* `sudo sv install sv-mosaic --type=container --branch=develop`
	* Run the container
		```
		cd /sv/containers/sv-mosaic
		sudo npm run docker
		npm start
		```

The service should now be accessible at http://kube.simpleview.io:10000/

# Unit Testing

* Ensure you have sv-mosaic installed per the instructions above.
* Putty/Shell into sv-kubernetes
	* Run the container
		```
		cd /sv/containers/sv-mosaic
		sudo npm run docker
		npm test
		```



## Repo Structure

When external parties consume this project the assumption is that all entities are "top-level" meaning that it you can destructure all necessary imports. This is necessary to ensure optimal and easy tree shaking.

```js
import { DataView, FilterDate, transform_get } from "@simpleview/sv-mosaic";
```

All TypeScript `type` and `interface` definitions should be unique across the project. So we cannot have an interface called `Props` instead it should be `DataViewProps`.

* components - Each exported component should either be in this folder directly or have it's own folder.
	* [component] - e.g. DataView, FilterDate
		* index.ts
			* This file File which should re-export the primary component as default. So if in the folder /FilterDate/ then index.ts should re-export /FilterDate/FilterDate.tsx.
			* This file should also export all entities in the [ComponentTypes].ts file. This makes the type definitions usable throughout the project and by external consumers.
		* [Component].tsx - The primary component file.
		* [ComponentTypes].ts - If the component needs to declare it's own typescript Interfaces or Types througout the folder, declare them here.
		* [Additional].tsx - For private components needed by this component, simply place them in this folder and do not re-export them in the index.ts.
		* [Component].test.js - Jest file for testing this component.
* utils - Folder for non-react javascript utilities. Some of these are re-exported by the root index.ts, and some are private to the project.
* index.ts - The primary entrypoint for the project. It will re-export all entities from all public components.