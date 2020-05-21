# sv-mosaic changelog

## 5/21/2020
* Publish 2.1.1
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