# sv-mosaic changelog

## 2/20/2020
* `savedViewAllowSharedViewSave` has been added to `DataView` props.
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