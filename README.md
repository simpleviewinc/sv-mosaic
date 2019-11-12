[![npm version](https://badge.fury.io/js/%40simpleview%2Fsv-mosaic.svg)](https://badge.fury.io/js/%40simpleview%2Fsv-mosaic)

# sv-mosaic

```
npm install sv-mosaic
```

Mosaic is a [React](https://reactjs.org/) user interface library designed to create admin interfaces. It is designed to be product agnostic allowing it to be utilized in any manner of Admin interface.

It is built on top of [React Material-UI](https://material-ui.com/) and is it recommended that you pin to the same version that Mosaic is using.

Examples: https://simpleviewinc.github.io/sv-mosaic/

# Usage

* Add sv-mosaic to your package.json and pin to a specific version.
* sv-mosaic has a host of `peerDependencies` which are not bundled into the library in order to minimize the bundle size of those that are using the package. You will need to ensure all of the `peerDependencies` of the package are satisfied. See the [package.json](package.json) for the current `peerDependencies`.

All components are exported individually and should be imported via destructuring to ensure proper tree-shaking.

```js
import { Grid } from "@simpleview/sv-mosaic"
```

## Components

### Grid

Grid is used to output a list or grid of items. It can support a whole variety of actions including primary actions, additional actions and bulk actions.

##### Props
* title - The title of the grid.
* columns - `array` of `object`
	* name - `string` - Unique name for this column.
	* column - `string` - defaults to `${column.name}` - When a column is displayed we need to know the name of the key in the data object that should populate this. By default `name` works. In some cases you might need to use the same data key but display it in multiple ways, you can use `column` for that purpose.
	* label - `string` - The displayed label of the column.
	* style - `string` - enum `bold` - When passed, the column will display as bold in the list-view.
	* sortable - `boolean` - Whether the column is sortable by the user.
	* transforms - `array of functions` - Functions which will receive the data from the column, manipulate the value, and then return it. An example of a transformation would be converting a JS `Date` object into a user-friendly string or converting boolean `true` to string `Yes`.
		* There are some helper functions within sv-mosaic that you can use to do some basic transforms.
* data - `array` of `object` - The data that should populate the list view. This prop should be populated based on the `filter`, `sort`, `limit`, and `skip`.
* filters - TODO
* filter - TODO
* activeFilters - TODO
* activeColumns - TODO
* primaryActions - TODO
* bulkActions - TODO
* additionalActions - TODO
* buttons - TODO
* view - `string` - enum `list`, `grid` - What type of view should be utilized.
* savedView - TODO
* views - TODO
* count - TODO
* sort - TODO
* limit - `number` - The number of items the list should display per page.
* limitOptions - `array` of `number` - default `[25, 50, 100]` - When passed allows customizing the page-size options that is displayed to the user. You can utilize this option if you want to expose larger or smaller pagesize options.
* onLimitChange - `function({ limit })` - A callback that will be executed with the new limit selected by the user. It is recommended that when the user changes the limit, your state alteration should also reset the `skip` to `0`.
* skip - `number` - The current number of rows being skipped by the user using `0` based indexing. Given a `limit` of `10` So the first page should have a `skip` of `0` and the second page would have a skip of `10`.
* onSkipChange - `function({ skip })` - A callback that will be executed with the new skip selected by the user.
* loading - `boolean` - Pass `true` when your Grid is fetching data or doing some alteration which needs to lock the UI. While `loading` is true, the majority of the UI elements in the grid are locked to prevent race conditions. Once the data has been fetched you will want to prop down `false` again.
* onSortChange - TODO
* onViewChange - TODO
* onActiveFiltersChange - TODO
* onColumnsChange - TODO
* onSavedViewSave - TODO
* onSavedViewChange - TODO
* onSavedViewRemove - TODO
* onSavedViewGetOptions - TODO

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