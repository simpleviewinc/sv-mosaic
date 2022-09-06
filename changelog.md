# sv-mosaic changelog

## 6.0.1
* Updated `FormFieldColorPicker` stories' height to make the color picker component clickable, and improve scrollable logic
* Updated `FormFieldAddress` checkbox list's width when creating a new option.
* **BREAKING** `FormFieldAdvancedSelection`:
	* createNewOption prop now expects a MosaicLabelValue as return value.

## 6.0.0
* Refactored to output a cjs and esm bundle to improve import efficiency both in Node (which will use cjs) and when running in webpack environments (which will use esm).
* Now supports [subpath exports](https://nodejs.org/api/packages.html#subpath-exports). It is recommended to use a subpath export to improve the speed of your import statements, especially when only importing a few pieces of mosaic. See the "exports" key for a list of what's exported.
* **BREAKING** - Some references were exported under "Grid" naming schema and this was deprecated in 2019. Those dual exports have been removed. The following shows the old export and the new export. You only need to refactor if using the old export.
	* Grid -> DataView
	* GridFilterText -> DataViewFilterText
	* GridFilterDropdown -> DataViewFilterDropdown
	* GridFilterDropdownButtons -> DataViewFilterDropdownButtons
	* GridFilterMultiselect -> DataViewFilterMultiselect
	* GridPrimaryFilter -> DataViewPrimaryFilter
* Updated project to use latest version of React (18.2.0).
* Moved all files from jsx to tsx.
* Added exports for `Drawers` and `SummaryPageTopComponent`.
* **BREAKING** `Internals` folder is now gone. For the private DataView internals they are moved into the `DataView folder` and renamed to be `DataViewX`, for items that were used in multiple places they were moved them into their own component folders.
* `DataView`:
	* View title now adds ellipsis if text is larger than 1 line.
	* **BREAKING** Previously all of the DataView types were optional, we're currently changing `columns` and `data` to be required, with more to be changed in the near future following the move from jsx to tsx.
* **BREAKING** Added `DataView-` prefix to the following components:
	* FilterDate -> DataViewFilterDate.
	* FilterSingleSelect -> DataViewFilterSingleSelect.
* `Form`:
	* **BREAKING** Moved component from "./forms/Form" to "./components/Form".
	* Major overall restyling to all fields mostly to reduce spacing (e.g. reduced paddings around fields and between tabs and title in top component, reduced height of text fields, etc).
	* Added DMS example in storybook to show how Forms would look like in a real application.
* Added 2 optional props to fields (in fieldDef): `onBlurCb` and `onChangeCb` both of these callback functions will be called after finishing executing the respective internal events in the field they were called. These can receive as optional parameter the value of the field.
* `FormFieldColorPicker` now accepts and returns opacity.
* `FormFieldAddress`:
	* Trimmed down unnecessary attributes from our `countriesStates.json` file used in `FormFieldAddress` which helped us reduce bundle size.
	* **BREAKING** Zip code now works as string.
	* Added limit props. Developers can now define amountPerType, amountShipping, amountBilling, and amountPhysical. If none of these props get propped down then all will default to 1 (same as it has been currenlty working). The amountPerType will get overwritten if one of the specific amounts get propped too, i.e if amountPerType = 3, and amountShipping = 1, that means users can only add a maximum of 1 shipping address, 3 billing and 3 physical.
* `FormFieldAdvancedSelection`:
	* **BREAKING** Field now receives `MosaicLabelValue[]` (Array of objects with the keys: label, value. See Form's readme) instead of `string[]` as value.
	* **BREAKING** Removed `getSelected` prop. This is no longer needed as the label can be directly passed with the value.
	* **BREAKING** Prop `checkboxOptions` has been renamed to `options` to match all other components that use an array of options.
* `FormFieldMapCoordinates`:
	* If no location gets propped, the map will center at 0,0.
	* Added optional `zoom` prop.
	* Visual updates (changed pointer to cross-hair, bigger map, bigger drawer).
	* Marker can now be dragged to another position. The map won't re-center when clicking or dragging the marker. It will only re-center when manually adding coordinates or a location.
	* Added validation to latitude (between -90 and 90) and longitude (between -180 and 180).
	* Map card now rendering static map.

## 5.1.1 - 8/9/22
* Added missing semicolon to line 31 in FormNav.styled.tsx.

## 5.1.0 - 8/9/22
* Fields will now automatically validate onChange after 300ms without interaction.
* Updated sections logic internally.
	* Forms will now throw an error if devs add a field that doesn't exist to a section.
	* Scrolling now using useRef rather than ids.
* Categories with comparison filter in DataView:
	* Fixed "Not In" comparison not working as expected.
	* "Exists" and "Not Exists" now clear selected options.
	* "Load More" button no longer disappears when clicking "clear".
* Keyword filter no longer using regex for filtering.
* DataView View settings:
	* "Save as new option" no longer reuses current view settings.
	* Deleting a view no longer keeps that view's settings and moves user to "default view".
* AUTOMATION TESTING:
	* FormFieldChipSingleSelect
	* FormFieldColorPicker
	* FormFieldDateField
	* FormFieldDropdownSingleSelection
	* FormFieldImageUpload

## 5.0.0 - 7/26/22
* **BREAKING** - Major changes in Forms (See more Forms documentation in Storybook):
	* Devs don't need to register `fields` anymore, instead they must only pass the `fields` array directly as prop.
	* Devs don't need to register an `onSubmit` function anymore, instead they need to add a button to the `buttons` prop that internally executes the `submitForm` action.
	* Devs can pass as many buttons as needed through the `buttons` prop.
		* Each button from `buttons` prop array use the same contract as regular buttons plus an additional `show` prop.
	* Added `init` action to `formActions` this is in charge of registering the fields.
	* Updated `submitForm` action from `formActions`, now this action validates the entire form (calls the action validateForm) and returns the valid value and the form's data (json with names and values of all fields) at that point in time.
* Updated project to latest version of MUI (5.8.7).
* Updated `DataView's` `created` and `updated` filters to now use newest MOS date pickers.
* Added `FormFieldTextEditor` back again.
* Solved "Unmounted state update" warnings caused by `DataViewFilterMultiselect` and `FilterSingleSelect`.
* Updated `FormFieldColorPicker's` return value to now be just a string with the hex code.
* Added conditional to `DataView` to prevent showing showing the bulk-action-checkbox if no bulk actions are propped down.
* Solved unit tests' warnings.
* Added "more actions" tooltip to additional actions button in `DataView`.
* Limited length of view name in `DataView`.
* Limited length of filter in `DataView`.
* Improved Form's rendering performance.

## 6/3/2021
* Adds `onAllClick` as an option on `bulkActions`. If specified it will allow a user to select content across all pages.

## 1/6/2021
* Fixes an issue with LeftNav flyouts closing when they shouldn't. Thanks @TreavorPhilyaw

## 12/23/2020
* `LeftNavItemDef` now supports custom `attrs` which add arbitrary keys to the primary `a` tag for each link, this can be used to apply `href` and `target` and tracking.
* `LeftNavItemDef` now support their own `onNav` function in case of odd edge cases.

## 11/24/2020
* `LeftNavItemRootDef` now supports `pinned : "bottom"` to anchor a nav item to the bottom of the screen.

## 7/20/2020
* `Button` now supports `href`.
* `Button` now takes a `muiAttrs` that can be used to pass any attributes on to the MUI component beneath for cases that Mosaic does not yet support.

## 7/17/2020
* Published 3.2.0
* `Checkbox`, `CheckboxList` converted to TypeScript and Storybook documentation added.
* Added style hardening to various components to fix BBS conflicts with their Bootstrap environment.

## 6/23/2020
* Publish 3.0.0
* Implemented `i18n` capability throughout much of the `DataView`. Documentation available in the i18n section of the Storybook.
* You will need to add `react-i18next` and `i18next` to your dependencies in order to use Mosaic.
* `DataView` the text filter will now `trim()` the data prior to passing it back to the filter system.
* Adds `P` typography element for when you want a simple paragraph styled according to mosaic.

## 5/29/2020
* Publish 2.2.0
* `LeftNav` nears completion. All variants are functional and being sent to QA and review from different Product Owners.

## 5/21/2020
* Publish 2.1.2
* `DataView` will no longer require an `id` column due to developer feedback.

## 3/31/2020
* Published 2.1.0
* `DataView` will now scroll to the top when a user pages or filters.
* `DataView` props `columns`, `primaryActions`, `additionalActions`, and `bulkActions` are now Typescript compliant.
* `primaryActions`, `bulkActions` now support all properties that `Button` supports.
* `additionalActions` now support all properties that `MenuItem` supports.
* `DataView` mandates that a column  with `id` exists because it is necessary for internal functioning of the component.
* Clicking on the `DataView` pager will allow the user to jump to a specific page.
* `Button` now supports `tooltip`.

## 3/25/2020
* The DataView pager now can be clicked to jump to a specific page. No changes are needed within applications to gain this behavior.
* `Button` now supports tooltip.
* `Button` popover option now exposes the `onClose` method via context API to allow programmatic closing from within the popover.

## 3/20/2020
* **BREAKING** - The **View** system has been renamed to **Displays** to differentiate between **Saved Views**. **Saved Views** are for saving the state of the DataView including sort, columns, display, and limit. **Displays** are for determining how the data displays, whether `list` or `grid`.
* Adds `data-mosaic-id` to primary buttons, actions, additional actions and bulk actions. This can be used for external targeting and unit testing.
* `Button` converted to typescript.
* `ButtonRow` converted to typescript.
* `Button`, `MenuItem` now accept arbitrary `attrs` which be used to pass custom attributes to pass to the root dom-element. It is not recommended to use this for styling.
* Primary and optional filters should now wrap cleanly if there are more than fit in one line.
* Grid view now supports sorting.
* **BREAKING** - Grid view requires a `gridColumnsMap` for mapping which columns will be used in grid.

## 3/6/2020
* **BREAKING** - The format of all column transforms has changed from `function(data) {}` to `function({ data, row })`. This allows your transforms to have access to all keys on the row and not just that columns data. In some cases you may need to synthesize multiple columns.
* **BREAKING** - The `gray` button color is no longer supported. Utilize the `black` color scheme. The `gray` was too close to the disabled state to be visually useful.
* FilterMultiSelect will now auto-focus the keyword
* Added column style capabilities including `bold`, `italic` and many more. See the DataView docs for more info.
* Corrected an issue with the Sort arrow pointing in the wrong direction.
* Fixed an issue with the Checkbox showing on the Grid view when there were no bulk actions.
* Converted more components to TypeScript.
* Fixed an issue with the Date mechanics not working due to errors with `moment`, we have switched to `date-fns` internally.
* `MenuSelect` now allows `mIcon` and `color` passthroughs to `MenuItem`.
* Added documentation for all official transforms.
* Adds typography with `H1`, `H3` and `BodyText` components for ease in UI typographic consistency.
* Major style clean-up through the top section of the DataView. Elements are spaced, colored and organized properly. Previously some elements were a little haphazard in terms of spacing.
* The theme file now includes better colors per the updated styleguide, including all of the different shades of gray.
* Added style-hardening so that the styles of Mosaic are intact when pulled into a system which has it's own external CSS.

## 2/20/2020
* `savedViewAllowSharedViewSave` has been added to `DataView` props, it defaults to `false` meaning that if you want users to be able to create shared views, you will need to pass `true` here. Otherwise they will only be able to create views for their own user.
* Added single select dropdown filter `FilterSingleSelect`.
* Published a lot more documentation in the Storybook.
* Published `0.4.0` on npm.

## 2/14/2020
* `transform_boolean` now exported on the root level.

## 2/11/2020
* Published `0.3.0` on npm.
* Added date range filter component `FilterDate`.
* Transforms `transform_dateFormat`, `transform_get`, `transform_thumbnail`  now exported on the root level.

## 2/6/2020
* Added `sticky` to DataView in order to allow a grid to be constrained by its parent and stick the headers or bulk actions (depending on view mode) to the top of the DataView.

## 1/30/2019
* Renamed `Grid` component to `DataView`. `Grid` is still being exported but is considered deprecated. Update your implementations to import `DataView` as soon as possible. For consistency, several supporting components were re-named and should be updated from their deprecated names too:
  * `GridFilterText` is now `DataViewFilterText`
  * `GridFilterDropdown` is now `DataViewFilterDropdown`
  * `GridFilterDropdownButtons` is now `DataViewFilterDropdownButtons`
  * `GridFilterMultiselect` is now `DataViewFilterMultiselect`
  * `GridPrimaryFilter` is now `DataViewPrimaryFilter`

## 11/12/2019
* New Bundle - an updated bundle is now available.

## 11/11/2019
* Adds Rollup - rollup has been added in order to allow mosaic and its components to be consumed via npm third parties.
