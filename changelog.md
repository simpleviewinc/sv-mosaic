# sv-mosaic changelog

## 3/6/2020
* **BREAKING** - The format of all column transforms has changed from `function(data) {}` to `function({ data, row })`. This allows your transforms to have access to all keys on the row and not just that columns data. In some cases you may need to synthesize multiple columns.
* FilterMultiSelect will now auto-focus the keyword
* Added column style capabilities including `bold`, `italic` and many more. See the DataView docs for more info.
* Corrected an issue with the Sort arrow pointing in the wrong direction.
* Fixed an issue with the Checkbox showing on the Grid view when there were no bulk actions.
* Converted more components to TypeScript.
* Fixed an issue with the Date mechanics not working due to errors with `moment`, we have switched to `date-fns` internally.
* `MenuSelect` now allows `mIcon` and `color` passthroughs to `MenuItem`.
* Added documentation for all official transforms.
* Adds typography with `H1`, `H3` and `BodyText` components for ease in UI typographic consistency.

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