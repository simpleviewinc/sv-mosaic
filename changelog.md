# sv-mosaic changelog

## 25.1.0 - 07/25/23

### Features

* `useScrollSpy`:
    * Introduces the useScrollSpy hook which can be used to watch a viewport and get updates about the section that is considered active based on it’s vertical position in the viewport

### Improvements & Fixes

* `Form`:
    * Utilises the new `useScrollSpy` hook to fix navigation indicator issues that were made apparent when viewing forms with multiple sections.
    * Introduces the `show` property as seen in the `Content` component. The `show` property can be used to conditionally show fields or even entire form sections based on real time form data.
* `ButtonRow`
	* Improve consistency by consuming the `ButtonRow` in more places across multiple Mosaic components. The components that now use the `ButtonRow` component are as follows:
		* `Card` (top buttons and bottom buttons)
		* `Content`
		* `DataViewActions`
		* `PageHeader`
		* `SummaryPageTopComponent`
		* `Form` (Desktop and Mobile views)
	* Exposes the `ButtonRow` for use by consuming products, which can improve consistency further

## 25.0.0 - 07/11/23
* `DataView`:
	* Reduced font weight of the bold-styled column type to keep consistency from `bold` to `500`
* `FormFieldText`:
	* Reverted a previous change that introduced a bug causing the multiline variation not to expand according to the content within
* `Content`
	* Introduced a `Blank` component than can be used to represent non-values, like empty strings and `undefined`. This component is now being consumed by `Content` and `Field` components. Right now, it's comprised of an em-dash.
* `FormFieldAdvancedSelection`
	* Drops behaviour that allows the user to click the draw backdrop to close the draw - the draw's "X" and back buttons' behaviour remains the same and will still close the draw. This release also drops the "unsaved changes" prompt that was displayed when the user attempted to close the draw after making selection adjustments.

## 24.0.0 - 06/06/23
* `Content`:
	* Fixed bug caused when the prop `buttons` is undefined. The component used to try to map over the prop when its length was greater than 0, but didn't take into account if it was defined.
* `DataViewTd`:
	* Added `aria-label` property to make it easier for external consumers to tag each cell in their tests.
* `SummaryPageTopComponent`:
	* Fixed bug caused when the prop `additionalActions` is undefined. The component used to try to map over the prop when its length was greater than 0, but didn't take into account if it was defined.
* `FormFieldDate`:
	* **BREAKING** Updated component to now reset the time to 00:00:00 when the `showTime` prop has a falsy value and the user makes any change in the date input. This prevents internal changes in the dates due to time-zone differences. This might be a breaking change in the sense that any custom logic added to account for this time shift could now need to change.
* `FormFieldNumberTable`:
	* Users can now move across the cells using their keyboard arrow keys.
	* Fixed bug caused when the prop `numberFormatOptions` was present but the user didn't have a value on one column. To make it easier to understand, if the column totals expected a value to be formatted but the column didn't have a value yet (on any of its cells), it would render a "NaN" because it would try to sum undefined values.

## 23.0.0 - 05/23/23
* `DataViewFilters`:
	* Updated internal logic to render `activeFilters` in the order they're passed by the developer and not the order they're set in the `filters` array. Added knob in storybook to test this functionality.
* `DataViewFilterDropdown`:
	* Updated spacing to make it consistent between filters.
* `DataViewFilterDropdownButtons`:
	* Updated spacing to make it consistent between filters.
* `DataViewFilterMultiselect`:
	* Updated spacing to make it consistent between filters.
* `DataViewFilterText`:
	* Updated internal logic to keep comparison when the user clicks on "Clear".
	* Updated spacing to make it consistent between filters.
* `Form`:
	* Now exporting `FieldDef` type through the Form types. This allows developers to import it directly without having to import each field's types individually.
	* Sections are now rendered as collapsible accordions which default to being expanded. Developers can decide whether they collapse a specific section or not through the new section prop `collapsed`. Added documentation for this in `Form` Readme.
	* **BREAKING** Removed unused prop `children` from `Section` component. Although the prop didn't seem to be used anywhere, it might be a breaking change if it was being consumed.
* `SummaryPageTopComponent`:
	* Updated spacing around description items. The first element had previously 0px of padding left, causing any element with padding to be overwritten.
* `NumberTable`:
	* Updated size of text fields from 72 to 90 px.
	* Added functionality for new optional prop `numberFormatOptions` as well as its proper documentation in `Form` Readme. This allows developers to format the calculated values of the table (totals) e.g. to dollars.
* `FormFieldAdvancedSelection`:
	* Updated styles to add space between chips and scrollbar.

## 22.0.0 - 05/09/23
* `DataView`:
	* Updated additional actions button from horizontal to vertical ellipsis.
	* Moved all DV subcomponents to their own folders. Each folder includes (as minimum) the component file (component.tsx), it's types file, and an index. Doing this also means all files importing these components have been updated.
	* **BREAKING** Moved some types / interfaces from DataViewTypes to their corresponding component. For example if DVTypes had a type called "DataViewTrDef" that was only used in DataViewTr, then it was moved to that component's types file.
	* **BREAKING** Removed unused props from several types / interfaces. E.g. DataViewFilterMultiselectDropwodnContent had a "value" prop, but the component didn't use that prop anywhere, so there was no reason for it to be expected in the interface.
	* **BREAKING** Cleaned props. Previously all props used to be optional (most of them will still be due to the nature of the DataView, as it only really requires few props), but now components have been updated to have optional and required props where needed.
	* Here are the components that have been updated (either changed from optional to required, or their type definition changed from any to a specific type):
		* `DataViewActionsButtonRow`: Moved types to their independent file.
		* `DataViewActionsRow`: Updated some types to match with their corresponding types from `DataViewProps`.
		* `DataViewBulkActionsButtonsRow`: Moved types from `DataViewTypes` to their independent file.
		* `DataViewBulkAllBar`: Moved types to their independent file and correctly typed them.
		* `DataViewColumnDrawer`: Types updated from optional to required.
		* `DataViewColumnControl`: Some types updated from optional to required.
		* `DataViewControlDisplay`: Moved types from `DataViewTypes` to their independent file.
		* `DataViewDisplayGrid`: Updated some types to match with their corresponding types from `DataViewProps`.
		* `DataViewDisplayGridSortControl`: Moved types to their independent file.
		* `DataViewDisplayList`: Moved types to their independent file, and updated some types from optional to required.
		* `DataViewDisplays`: Moved types from `DataViewTypes` to their independent file.
		* `DataViewFilters`: Moved types to their independent file, and updated some types from optional to required.
		* `DataViewControlLimit`: Moved types from `DataViewTypes` to their independent file.
		* `DataViewPagerPopover`: Moved types to their independent file.
		* `DataViewTBody`: Moved types to their independent file.
		* `DataViewTHead`: Moved types to their independent file, correctly typed them, and updated some types from optional to required.
		* `DataViewTd`: Moved types to their independent file, correctly typed them, and updated some types from optional to required.
		* `DataViewTitleBar`: Removed unused type `loading`.
		* `DataViewTr`: Some types updated from optional to required.
		* `DataView`: Updated casing on all types to make them match (this shouldn't impact consumers as these types were not being exported).
		* `DataViewViewControls`: Moved types to their independent file, correctly typed them, and updated some types from optional to required.
		* `DataViewViewDrawer`: Moved types to their independent file, correctly typed them, and updated some types from optional to required.
		* `DataViewViewDrawerContent`: Moved types to their independent file, correctly typed them, and updated some types from optional to required.
		* `DataViewViewSaveDrawer`: Moved types to their independent file, correctly typed them, and updated some types from optional to required.
		* `DataViewViewSaveDrawerContent`: Moved types to their independent file, correctly typed them, and updated some types from optional to required.
		* `DataViewFilterDropdown`: Moved types to their independent file, correctly typed them, and updated some types from optional to required.
		* `DataViewFilterDropdownButtons`: Moved types to their independent file.
		* `DataViewFilterMultiselectDropdownContent`: Correctly typed interfaces. Removed unused type `value`.
		* `DataViewFilterSingleSelect`: Correctly typed interfaces. Removed unused type `color`.
		* `DataViewFilterText`: Correctly typed interfaces.
		* `DataViewPrimaryFilters`: Some types updated from optional to required.
* `DataViewFilterText`:
	* Disabled autocomplete for `DataViewFilterTextDropdownContent`.
* `DataViewFilterMultiselect`:
	* Disabled autocomplete for `DataViewFilterMultiselectDropdownContent`.
	* **BREAKING** Properly typed `getOptions` prop. This might be a breaking change as it was previously being exported as type `any`.
* `types`:
	* Updated `MosaicObject` interface to receive generic (defaults to unknown) which makes it easier to create a generic object without having to create a new interface.
* `Form`:
	* **BREAKING** Updated types for `useForm` hook. This might be a breaking change as it was previously being exported as type `any`.
* `FormFieldAdvancedSelection`:
	* **BREAKING** Properly typed `getOptions` and `fieldDef` props. This might be a breaking change as they were previously being exported as type `any`.
* `FormFieldText`:
	* Updated styles to match height between regular and multiline variants.
* `TitleWrapper`:
	* Added native tooltip to title using the title property for text-like elements (e.g. <h1 title="my title" ...>). This component is being used in `Form`, `DataView`, and `SummaryPageTopComponent` so all titles will show this new tooltip when the user hovers over the title.
* `SummaryPageTopComponent`:
	* Fixed bug causing additional actions button to show even with empty array.
* `Content`:
	* Added show capability to buttons.
* `Automation tests`:
	* Updated naming conventions on all tests and pages to make then follow the same standard.

## 21.0.0 - 04/25/23
* `Button`:
	* Fixed visual bug causing buttons to show round corners when being clicked.
* `FormFieldDropdownSingleSelection`:
	* Improved clickable area for opening dropdown. Users previously had to intentionally click on the same line as the text to open the dropdown, now they can click anywhere inside the field to open it.
* `Form`:
	* Updated layout to prevent fields and columns from overlapping.
	* Fields (internal and custom) will now render a "-" when disabled if they don't have a value.
* `DataView`:
	* Fixed visual bug causing bold style to render as regular text.
* `FormFieldUpload`:
	* Field will no longer render the drag-and-drop / upload button when developers pass the disabled prop as true. This will also only render uploaded files (no error or pending) and remove the trash icon button from the file cards to prevent users from deleting them.
* `FormFieldAddress`:
	* Field will no longer render the `ADD ADDRESS` button when developers pass the disabled prop as true. This will also affect current cards by removing any button that might affect the value (e.g. edit, remove, additional actions, etc).
* `FormFieldImageUpload`:
	* Field will no longer render the drag-and-drop / upload button when developers pass the disabled prop as true. This will also affect current cards by removing any button that might affect the value (e.g. edit, remove, additional actions, etc).
* `FormFieldImageVideoLinkDocumentBrowsing`:
	* Field will no longer render the file buttons when developers pass the disabled prop as true. This will also affect current cards by removing any button that might affect the value (e.g. edit, remove, additional actions, etc).
* `FormFieldMapCoordinates`:
	* Field will no longer render the `ADD COORDINATES` button when developers pass the disabled prop as true. This will also affect current cards by removing any button that might affect the value (e.g. edit, remove, additional actions, etc).
* `Checkbox`:
	* Interface now extends all props from MUI's Checkbox component.
* **BREAKING** `CheckboxList`:
	* All data coming in and out of the component has changed from `string[]` to `MosaicLabelValue[]` but its behavior and logic remains the same.
		* checked: `string[]` -> `MosaicLabelValue[]`
		* onChange: `(checked: (string | { [key: string]: unknown; })[]): void` -> `(checked: ({ [key: string]: unknown; } | MosaicLabelValue)[]): void`
		* onChangeCb: `(checked: (string | { [key: string]: unknown; })[]): void` -> `(checked: ({ [key: string]: unknown; } | MosaicLabelValue)[]): void`
* `DataViewColumnDrawerContent`:
	* Internally updated component to pass and receive data from `CheckboxList` in the expected format. This won't affect any callbacks passed to the component as the data is being transformed to the required format by the callbacks (e.g. if an onApply cb was expecting `string[]` it will still receive data in that format).
* `DataViewFilterMultiselectDropdownContent`:
	* Internally updated component to pass and receive data from `CheckboxList` in the expected format. This won't affect any callbacks passed to the component as the data is being transformed to the required format by the callbacks (e.g. if an onApply cb was expecting `string[]` it will still receive data in that format).
* `FormFieldAdvancedSelection`:
	* Field will no longer render the `ADD` button when developers pass the disabled prop as true. When disabled, the field will render all of its selected options as regular non-clickable chips.
* `FormFieldCheckbox`:
	* Internally updated component to pass and receive data from `CheckboxList` in the expected format. This won't affect any callbacks passed to the component as the data is being transformed to the required format by the callbacks (e.g. if an onApply cb was expecting `string[]` it will still receive data in that format).
	* When disabled, the field will render all of its selected options as regular non-clickable chips.
* `FormFieldChipSingleSelect`:
	* When disabled, the field will render all of its selected options as regular non-clickable chips.
* `FormFieldDropdownSingleSelection`:
	* When disabled, the field will render all of its selected options as regular non-clickable chips.
* `FormFieldRadio`:
	* When disabled, the field will render all of its selected options as regular non-clickable chips.

## 20.0.0 - 04/11/23
* `Button`:
	* Added `yellow` color variant to `icon` buttons. This includes adding an example to storybook in both playground and kitchen sink.
* `DataView`:
	* **BREAKING** Internally updated `DataViewDisplayList`, `DataViewTBody`, `DataViewTHead`, and `DataViewTr` to fix bug causing "actions" column to get rendered even when no `primary` or `additional` actions were propped down. This might be a breaking change if any product consumes any of these components independently because a new mandatory prop `hasActions` has been added to these components; this prop is what decides whether the actions column gets rendered or not.
* `DataViewFilterDate`:
	* Added ReadMe and KitchenSink stories in storybook and renamed "Example" story to "Playground".
* `DataViewFilterText`:
	* Created ReadMe, Playground, and KitchenSink stories for the component.
* `Form`:
	* **BREAKING** Disabled fields will no longer be taken into account when validating the form. We believe it doesn't make much sense for the form to throw an error message on disabled fields because users cannot do anything to change their value. This might be breaking in the sense that previous forms with disabled fields will now be submitted even if those disabled fields have an invalid value.
	* Disabled fields will now render their label on almostBlack.
* `PageHeader`:
	* Created ReadMe, and Playground stories for the component.
* `Spinner`:
	* Created ReadMe, Playground, and KitchenSink stories for the component.
	* Internally updated component to fix issue causing the component not be able to render a "0%" value.
* `FormFieldDate`:
	* Updated disabled stylings. Field's value will now render as text in an almostBlack color.
* `FormFieldNumberTable`:
	* Added optional props `displaySumColumn` and `displaySumRow` that allow developers to decide whether the totals get rendered both by columns or rows respectively. This includes adding a knob to it's story's playground.
* `FormFieldPhoneSelectionDropdown`:
	* Updated disabled stylings. Field's value will now render as text in an almostBlack color.
* `FormFieldText`:
	* Updated disabled stylings. Field's value will now render as text in an almostBlack color.
* `Transforms`:
	* Added stories for `transform_chips`, `transform_colorPicker`, `transform_dateFormat`, and `transform_thumbnail`. Also updated wording in `transform_boolean` and `transform_join`.

## 19.0.0 - 03/28/23
* `SideNav`:
	* Added optional prop `attrs` that allows developers to pass any additional prop to each link (e.g. target, href, etc).
	* Updated styles. Removed top, left, and bottom borders so they don't overlap with other elements.
* `Form`:
	* **BREAKING** Removed prop `type`. This means forms will no longer conditionally style depending on whether they're on a drawer or not. This is breaking in the sense that any project previously using this prop might get errors and / or warnings when developing.
	* **BREAKING** Removed prop `onCancel`. It is now suggested to use the `onBack` prop as it receives the same arguments.
	* Improved styling for rendering scrollable area when the section tabs are on the side. Now using css flex instead of refs.
	* Removed bug causing "X" button to render next to the title in Form-like drawers.
	* Updated `defaultValue` mechanics. Developers can now pass "false" as a default value to fields (or any other value allowed within the "in" operator e.g. "property" in object).
	* Internally updated to now use the updated `SideNav` component. Props remain the same.
* **BREAKING** Replaced component `DrawerHeader` with `PageHeader`. This change mostly involves styling changes to make all pages look consistent. It's props are: `title`, `buttons`, and `onBack`. The component is being exported and used internally in the following components:
	* `AdvancedSelectionDrawer`.
	* `DataViewColumnDrawerContent`.
	* `DrawerContent`
* **BREAKING** Renamed `onClose` prop to `onBack` in `DrawerContent`.
* Internally updated the favorite icon next to the title to use our `Button` component in `SummaryPageTopComponent`.
* Fixed bug causing `FormFieldPhoneSelectionDropdown` to pass the country code as value when nothing else was written in the field.
* Fixed bug causing the "Upload Files" button in `FormFieldUpload` to not show hover state.
* `Chips`:
	* Now will only have a hover state if the `onClick` prop gets passed.
	* Added tooltip to chips that have the `onDelete` prop.
* `FormFieldAdvancedSelection`:
	* Updated drawer dimensions.
	* Internally added `onBack` so the drawer can be closed when clicking on the "left-arrow" button.
* `FormFieldAddress`:
	* Will now concatenate a street number to the first "Address" field if found by Google's autocomplete api.
	* Internally added `onBack` so the drawer can be closed when clicking on the "left-arrow" button.
* `FormFieldMapCoorindates`:
	* Internally added `onBack` so the drawer can be closed when clicking on the "left-arrow" button.
* `FormFieldMatrix`:
	* Internally added `onBack` so the drawer can be closed when clicking on the "left-arrow" button (ONLY IN STORY EXAMPLES).
* Updated table styles in `DataView`. Added more padding to the left and right of the first and last elements respectively, and adjusted table to align with title.

## 18.0.0 - 03/09/23
* Updated z-index when using tooltips in buttons to ensure they render on top of drawers.
* Updated disabling styling in `Form`. Opacity now looks the same as it currently does in DataView to maintain consistency.
* **BREAKING** `titleIcon` prop in `Card` component is now of type `SvgIconComponent` (previously `JSX.Element`). This makes the prop behave the same way as the mIcon prop in `Button`.
* Updated automation tests for `Drawers`.
* "States" field in `FormFieldAddress` has been relabeled to "State".
* **BREAKING** `Content` component changes:
	* `label` in `fields` prop is now of type `ReactNode` (previously `string`). This allows developers to pass strings, components, jsx, boooleans, numbers, and any other value accepted by this type (see more in: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L231).
	* Added optional prop `variant` which allows the strings "standard" or "card" as values. When the "card" variant gets passed, the `Content` component visually looks as the `Card` component, but maintains the same functionality and rendering mechanics. The prop defaults to "standard" when it doesn't get passed.
	* Removed 2 column limit, developers can pass as many columns as needed.
	* Updated styles and spacing to match `Card` component.
*  `Section` titles have been updated to use h2 (previously using h1).
* **BREAKING** Updated styles for `H1` component. This is a breaking change in the sense that it might visually push other elements around if being exported independently in another product due to changes in boldness, weight, size, font family, etc.
* Updated `DataView`, `Form`, `SummaryPageTopComponent`, and `DrawerHeader` to use newly updated `H1` component to maintain consistency.
* Added optional prop `onBack` to `DataView`, `Form`, and `SummaryPageTopComponent`. When this callback gets passed a left arrow icon gets rendered to the left of each component's title.
* **BREAKING** `Card` component changes:
	* `title` prop is now of type `string` (previously `JSX.Element`).
	* Updated styles and spacing to match `Content` component.
* Implemented `FormFieldNumberTable`. Field that renders a table with inputs in every cell. The component allows as many columns and rows as needed and displays the total per row, per column, and of the whole table. For more information about the props it receives please look at the documentation in storybook -> Form -> Readme -> FormFieldNumberTable.

## 17.0.0 - 02/28/23
* Improved section highlighting mechanics. This change prevents sections from being re-rendered when a change to a field occurs, making the section tabs to stay in the selected section.
* `DataView`:
	* `bulkActions` are no longer needed to render checkboxes.
	* Fixed `clear` functionality in all filters. Now clearing the filter values should only trigger a re-render when the filter had a value.
* **BREAKING** `FieldDef` no longer accepts the `maxCharacters` prop. Now it will only be accepted as part of the `inputSettings` that use the prop (e.g. `FormFieldText`, `FormFieldTextEditor`).
* `favorite` prop is now optional in `SummaryPageTopComponent`.
* `Chip` will no longer show the cursor as "pointer" when hovering unless the `onClick` prop gets passed.
* `onNav` prop is now optional in `SideNav`.
* `FormFieldUpload`:
	* Added knob that allows devs to controll the seconds mocked files should take to finish uploading.
	* If a limit gets passed the field will get disabled if the sum of the pending files (files currently being uploaded) and the successfully uploaded files is equal to the limit.
* `Button`:
	* `Icon` variant now can be rendered as a link by passing an href.
	* Updated css file to style buttons based on their class names and not on their html tag. This ensures we're styling all buttons the same, whether they're being transformed by MUI to spans, buttons, or anchor tags.
	* Improved and added knobs that better represent the expected props for the button component.
* Updated `FormFieldAdvancedSelection` to internally use `DataViewFilterMultiselect`. This results on styling changes but it shouldn't be a breaking change since none of the props and data returned to the form changed.
* Added the following prop to `DataViewFilterMultiselect`:
	* `limit` as an optional prop as part of its args. The component will default the value to 25 if none provided (this was the hardcoded value that has always been used so it shouldn't be a breaking change).
* Added the following props to `DataViewFilterMultiselectDropdownContent`:
	* `limit` -> same type definition as the `limit` from `DataViewFilterMultiselect`.
	* `onChange` -> optional prop callback that receives as parameter the new array of selected options.
	* `hideButtons` -> optional boolean. When passed, the buttons at the bottom (clear and apply) won't render.
	* `createNewOption` -> optional prop with the same type definition as the `createNewOption` prop from `AdvancedSelectionInputSettings`.
	* `selectLimit` -> optional prop with the same type definition as the `selectLimit` prop from `AdvancedSelectionInputSettings`.

## 16.0.0 - 02/14/23
* Created `FormFieldUpload`. This new field allows users to upload multiple files, showing the upload status of each one of them while being uploaded. See more in Form's readme.
* Added optional prop `progress` to `Spinner` component. This allows devs to define how much of the spinner should be filled e.g. 50%. Value expressed from 0 to 100.
* **BREAKING** Internally updated our field types enforcing consistency. This should only be a breaking change for consumers of mosaic that were incorrectly declaring fields (e.g. not passing the correct inputSettings to a field).
* Improved `getFormValues` and `defaultValues` mechanics in `Form`. This means forms will always prepopulate with getFormValues as long as its propped down and returns values, else it will use the defaultValues (if present). We also added 2 more knobs to test this functionality in storybook in the `Form Playground`.
* **BREAKING** `FormFieldPhoneSelectionDropdown` no longer receiving `placeholder` as part of its inputSettings.
* Improved styling around "No results" message in `DataView` to align with table.
* Updated `Button` and `DataView` stories to work with new storysource add-on.
* Updated `DataViewFilterDate` to use our Field component, making its styles closer to regular form fields.
* **BREAKING** Removed `FormFieldTextArea`. Developers can still use `FormFieldText` to render an input with multiple lines by using the newly added props `minRows` and `maxRows`.
* Fixed "Draggable requires a draggableId" issue in `DataView`.

## 15.0.0 - 01/31/23
* Internally updated the color scheme, naming conventions and references in all components of the following colors:
	* `Gray1`.
	* `Gray2`.
* Added `Storysource` addon to storybook. Developers will now be able to see the code used to create a specific story.
* Improved all `FormFields` documentation by adding a link that takes storybook readers to the props in `Form`'s readme. Also improved readability of `inputSettings` by changing them into a table view.
* Added story for `DataViewFilterMultiSelect`.
* **BREAKING** Removed implementation of `IconButton`. Not to be confused with `Button` variant `icon`. `IconButton` was a first approach at updating the styles of a previous iteration which were later moved to the `icon` variant of `Button`. Internally we were not using the `IconButton` anywhere so it should only be breaking if being consumed (e.g. import {IconButton} from "@simpleview/sv-mosaic).
* **BREAKING** Updated `Card`'s props:
	* bottomAction -> bottomActions (now array of button props).
	* topAction -> topActions (now array of button props).
* Updated spacing around Drawer fields: `FormFieldAddress`, `FormFieldAdvancedSelection`, and `FormFieldMapCoordinates` to make only the content scroll and keep the header in place.
* Updated internal refs in `FormFieldAdvancedSelection` to adjust component to screen size.
* **BREAKING** Updated `FormFieldMapCoordinates`' props:
	* apiKey -> googleMapsApiKey (remains as string).
* **BREAKING** Added autocomplete functionality to `FormFieldAddress`. This means the component now requires a `googleMapsApiKey` prop in order to work (more on this on the documentation).

## 14.0.0 - 01/17/23
* Internally updated the color scheme, naming conventions and references in all components of the following colors:
	* `Gray3`.
	* `Gray4`.
	* `SimplyGray`.
* `Matrix Field`:
	* Added Form and Browse examples in storybook.
	* Field can now be used in forms using `type: "matrix"`.
* `Form`:
	* Updated view mechanics and styles to now render the section tabs on the left as soon as there's available space.
	* Updated overall styles and sizings to match updates to design comps. These include: form alignment to the left, paddings around top component, tabs, and form layout.
	* Form will now scroll to the nearest error.
	* Disabled auto-complete on forms (there seems to be an issue with Chrome in which previous entries would still appear but it won't save new entries, this can be "fixed" by deleting all previously saved auto-complete data from the chrome settings).
	* Improved form-disabling mechanics when loading data from a DB by adding a new form action: `disableForm`.
	* Added new mechanics that allow developers to know when a field has been touched. The `Form`'s state now includes a new `touched` property which uses a MosaicObject format (e.g. touched: { "myField": true }). This will only get triggered when the user manually changes the value of a field, not when prepopulating.
* `FormFieldAdvancedSelection`:
	* Updated internal logic to fix duplicates and erased options bugs.
* `DataViewFilterMultiselect`:
	* Updated internal logix to keep showing options even when filtering.
	* Updated buttons to match newest design comps. Component will no longer show "Cancel" button, only "Clear" and "Apply".
	* **BREAKING** Updated filter to return `undefined` when no value is present, this allows us to prevent unnecessary triggered reloads.
* `DataViewFilterDate`:
	* Updated buttons to match newest design comps. Component will no longer show "Cancel" button, only "Clear" and "Apply".
	* Added optional arg `options` which is an array of `MosaicLabelValue` that contains a list magic values that the user can select from. When selecting a magic value, the data returned from the filter will have the following format `{option: string}` whereas when manually selecting a date it will look like `{rangeStart: Date, rangeEnd: Date}`.
	* Added new error message for when the user manually types an invalid date.
	* **BREAKING** Updated filter to return `undefined` when no value is present, this allows us to prevent unnecessary triggered reloads.
* `DataViewFilterText`:
	* Updated buttons to match newest design comps. Component will no longer show "Cancel" button, only "Clear" and "Apply".
* `DataViewFilterSingleSelect`:
	* **BREAKING** Updated filter to return `undefined` when no value is present, this allows us to prevent unnecessary triggered reloads.
* `DrawerHeader`: Updated title font to use Museo Sans, 20px size, and 400 weight.
* **BREAKING** `SideNav`: Updated props to closely match those used in `LeftNav`, this includes:
	* Renamed `links` to `items`.
	* Added required `onNav` prop which will allow devs to know which item has been clicked.
	* Each `item` previously had a prop called `onClick` which has now been renamed to `onNav`. This is an additional prop that "overrides" the global `onNav` that can be passed to the parent, which means that developers can add specific functionality for when an item gets clicked on.
* `DataView`:
	* Updated conditions for rendering `DataViewTitleBar` and `DataViewActionsRow` that were causing blank spaces to appear (this is an internal update).
	* Updated `DataViewViewDrawerContent` to match newest design comps.
	* Updated `DrawerContent` to now use `DrawerHeader` component.
	* Updated `DataViewDisplayList` to pass data to `DataViewTHead`, this allows bulk actions to work with the original data (previously working with transformed data).
	* Updated all of `StateViewDef`'s types to be optional (they were all previously required).
	* Updated "Clear filters" button to only update filters if they have value, this allows us to prevent unnecessary triggered reloads.
	* **BREAKING** DataView will now filter out bulk actions with property "show: false" to allow all its children components to only work with bulk actions that are actually being shown to the user. Reminder: not adding the "show" property to the actions will default to true.
	* **BREAKING** Moved responsibility of checking rows out of the DataView, this means developers are now responsible of implementing the following props:
		* `checked`: Optional array of booleans that represent the checked state of each row. Both `checked` and `onCheckChange` are needed (as well as a list of valid bulk actions) to render the checkboxes that allow users to select rows.
		* `onCheckChange`: Optional callback function that receives the new array of checked options, useful to tell the parent component which rows are checked. Both `checked` and `onCheckChange` are needed (as well as a list of valid bulk actions) to render the checkboxes that allow users to select rows.
		* `checkedAllPages`: Optional boolean which is used to determine if all options from all pages are being selected or not. Both `checkedAllPages` and `onCheckAllPagesChange` are needed (amongst other props) to render the checkboxes that allow users to select rows.
		* `onCheckAllPagesChange`: Optional callback function that receives a boolean that indicates the new value for `checkedAllPages`. Both `checkedAllPages` and `onCheckAllPagesChange` are needed (amongst other props) to render the checkboxes that allow users to select rows.
* `Button`: Updated internal mechanics to remove tooltip when opening a button menu.

## 13.0.0 - 01/03/23
* Internally updated the color scheme, naming conventions and references in all components of the following colors:
	* `DarkerRed`.
	* `AlmostBlack`.
* Changes to `DataView`:
	* Updated `DataViewFilterMultiSelect` styles to match newest figma comps.
	* Updated `DataViewFilterText` styles to match newest figma comps.
	* Updated `GridView` styles to match newest figma comps.
	* Updated `ListView` styles to match newest figma comps.
	* **BREAKING** Filters no longer supporting `types` (primary or optional). All filters will now render until the user selects them from the "filters" button, unless passed as part of the activeFilters prop.
	* Added better error messages when propping down an activeColumn or an activeFilter that doesn't exist.
	* Fixed "All" comparison functionality in categories with comparison filter (Only in storybook).
* Internally updated the `FormNav` tabs mechanics to now use the InteractionObserver API. This allows the last section tab to be selected even if the previous one is also in the screen at the same time.
* Added new optional prop `selectLimit` to `FormFieldAdvancedSelection`. This allows developers to limit the amount of options users can select.

## 12.0.0 - 11/29/22
* Internally updated the color scheme, naming conventions and references in all components of the following colors:
	* `DarkerRealTeal`.
	* `DarkRed`.
* **BREAKING** Added `getOptionsCountries` and `getOptionsStates` props to `FormFieldAddress`. This means the field is no longer responsible of providing the label and values for each country and / or state. These props are required and are expected to return a MosaicLabelValue[] in order to populate the dropdowns. The prop `getOptionsStates` will recieve as a parameter the value of the selected country.
* Improved form rendering mechanics / styles to prevent a second scrollbar to appear when rendering on large screens (when the section tabs show on the left side of the form).
* **BREAKING** Added optional `buttons` prop to the `Dialog` component. This prop receives an array of `ButtonProps`, this allows devs to add as many buttons as needed. Although this is an optional prop, the change might be breaking in the sense that any previously added Dialogs will no longer have the default buttons, so they won't have a way to close them unless added by the developers.
* **BREAKING** Completely re-engineered the `Drawers` component:
	* The component now receives a `drawers[]` prop that contains all the information needed to create the drawers (e.g. a json containing all the props, title, buttons, etc.), and a `children` prop which will be used to render a component with each element of the drawers array.
	* Created a new component called `DrawerHeader` that is being exported. This allows both our internal drawers and external devs' drawers to have the same "design language". This component receives the following optional props: `title`, `buttons[]`, and an `onCancel` callback (when present, this will show an "x" button to the left of the title).
* **BREAKING** Changes to `DataView`:
	* Updated `DataViewTitleBar`'s style and overall arrangement. The action button has been moved to the right, and the views buttons have been moved to the left. The filters have been moved up into this component.
	* Updated the `ColumnsDrawer` style to now use the previously mentioned `DrawerHeader`, the new `CheckboxList`, and updated the ability to arrange columns to now use drag-and-drop rather than arrows.
	* Created component `DataViewActionsRow` which now contains the list-grid selector, pagination, number of rows, etc. This change is only internal to improve code-readability and shouldn't impact external developers.
	* `Columns` button has been moved from inside the table to the `DataViewActionsRow`.
	* Updated the `DataViewTable` style. Added a new indeterminate state to the bulk actions checkbox when the following condition is true: 0 < selected rows < max number of rows.
	* **BREAKING** The types on all the previously mentioned components (and their sub-components) have been updated. They were mostly using `any` and now they should match what's expected from the DataView.

## 11.0.0 - 11/15/22
* **BREAKING** Updated `DataView` types: `activeFilters` will now always be an array of strings. Previously it was jumping between an array of strings and an object that had `comparison: string`, and `value: string[]`.
* Added optional prop `onReorder` to `DataView`. This now allows devs to reorder records with a Drag-and-drop functionality.
* Added optional prop `active` to the `SideNav` component. This now allows devs to update the active tab from outside the component. The component will still work with or without the active prop so devs don't need to worry about updating the active tab when clicking on the links.
* Internally updated the color scheme, naming conventions and references in all components of the following colors:
	* `SimplyGold`.
	* `DarkerSimplyGold`.
	* `RealTeal`.
* Updated the `AdvancedSelectionDrawer` style to now fully adapt to the available space.
* Updated the `FormFieldChipSingleSelect` style to evenly space chips when spanning multiple rows.

## 10.0.0 - 11/01/22
* Fixed `exists` and `not_exists` comparisons in `title with comparison` and `categories with comparison` filters in `DataView` (this only affected Storybook).
* **BREAKING** Completely removed the `filter` prop from the `SummaryPageTopComponent`.
* Added optional prop `popoverEvent` to the `Button` component. This allows only two types of events: `onClick` and `onHover`. When not present it will default to `onClick`.
* Updated sytling in the column order drawer in `DataView` to prevent the column title from pushing the arrows to the right.
* `Content` component:
	* **BREAKING** Updated the following props:
		* `fieldDef` has now been renamed to `fields` and its type has been changed from `ContentFieldDef[]` to `ContentField[]` but internally remains the same. The prop remains required.
		* `getValues` has now been renamed to `data` and its type has changed from `() => Promise<MosaicObject>` to `MosaicObject`. This means developers no longer have to provide a callback, they now only need to pass whatever amount of data they need. The prop remains required.
		* `onEdit` has now been renamed to `buttons` and its type has been changed from `() => void` to `ButtonProps[]`. This means developers can now pass an array of buttons which gives them full flexibility on the amount of callbacks and functionality they need. The prop remains optional.
	* Updated the internals of the component to now render the fields in rows rather than columns (this only affects styling).
* **BREAKING** Now exporting the `Popover` component.
* Design changes:
	* `Button`: Updated space between leading / trailing icons and text.
	* `Checkbox`: Updated label color.
	* Overall fields: Updated border when hovering and now allowing the instruction text to grow dynamically with the size of the field.
	* `Popover`: Fixed weird styling in separator line.
	* `Drawers`: Changed buttons order (this only affected Storybook).
	* `SummaryPageTopComponent`: Updated font-family and font-weights of title and description.
	* `TopComponent`: Updated font-family and font-weights of title and description.
	* `ImageVideoLinkDocumentBrowsing`: Updated component to vertically center the "No browsing options" text.
	* `FormFieldAddress`: Updated card's colors.

## 9.0.0 - 10/18/22
* **BREAKING** Transforms are no longer required in the `Content` component required anymore. If no transform is given to a field, the component will attempt to render what's directly in its value, if it fails it will throw an error.
* Updated `DataViewFilterDate`'s style to align with the design comps.
* Updated `DataViewFilterSingleSelect`'s style to align with the design comps.
* **BREAKING** Section tabs in `TopComponent` will now only appear after adding 2 or more sections. When having less, the sections will appear but not the tabs.
* Updated `AdvancedSelection` button copy from "Add Element" to "Add".
* **BREAKING** Updated `Required validator` to not trigger an error message if the value of the field is false. (Should only trigger when `undefined`).
* `FormFieldPhoneSelectionDropdown` no longer allows users to edit the country code via typing, they now need to select the country from the flag dropdown.
* **BREAKING** `FormFieldText` no longer supports `type: number`. This means the field will only "export" and "import" the value as string. From now on, every product / project is responsible of transforming the value from a string to a number (or whatever other type needed).
* Improved `Number validator` to trigger an error message when it contains any letter or special character not ususally supported by inputs with type number (i.e. -10.5e2 is valid whereas 12.0.02.3-5ew*20 is not).
* **BREAKING** `FormFieldCheckbox`:
	* Modified / added the following types:
		* `options` - Hardcoded list of `MosaicLabelValue[]`.
		* `getOptions` - Function used for getting options from a DB (should return a `MosaicLabelValue[]`).
	* Updated value from `string[]` to `MosaicLabelValue[]`.
* **BREAKING** `FormFieldChipSingleSelect`:
	* Modified / added the following types:
		* `options` - Hardcoded list of `MosaicLabelValue[]`.
		* `getOptions` - Function used for getting options from a DB (should return a `MosaicLabelValue[]`).
	* Updated value from `any` to `MosaicLabelValue`.
* **BREAKING** `FormFieldDropdownSingleSelection`:
	* Modified / added the following types:
		* `options` - Hardcoded list of `MosaicLabelValue[]`.
		* `getOptions` - Function used for getting options from a DB (should return a `MosaicLabelValue[]`).
	* Updated value from `string` to `MosaicLabelValue`.
* `FormFieldAdvancedSelection`:
	* Updated the chip and checkbox fields used inside the component to now comunicate using their new contracts / types. (This shouldn't be a breaking change as all changes were done internally and the component was already returning a value of MosaicLabelValue[]).
* **BREAKING** `FormFieldAddress`:
	* Updated the dropdown and checkbox fields used inside the component to now comunicate using their new contracts / types. This is a breaking change because now the values `country, state, and types` return MosaicLabelValue (country, state) or MosaicLabelValue[] (types).
* **BREAKING** `FormFieldMapCoordinates`:
	* Updated prop `address` to now use the same types as the as FormFieldAddress, which means `country, state, and types` now require to match the same types as above (in FormFieldAddress).

## 8.0.0 - 10/04/22
* Updated `Button` component's font-weight to 700.
* **BREAKING** All Fields will now return undefined when users fully delete their value.
* Updated automation tests to now run simultaneously to improve running times.

## 7.0.0 - 09/20/22
* **BREAKING** Updated `Typography` components to now only allow the same colors as `Buttons` ("black" | "blue" | "lightBlue" | "red" | "yellow" | "teal" | "gray" | "white"), previously accepted any string.
* Updated `Theme` file to directly export those colors.
	* This will allow devs to use the colors directly rather than having to transform the names, e.g. yellow buttons had to do something like: theme.colors.simplyGold, and now is theme.colors.yellow. This doesn't affect previous styles, only enhances the color list.
* Added better documentation for `pairedFields` in `Form`'s Readme.
* Updated `FormNav`'s scrolling listener to improve UX. Scrolling and moving between tabs feels smoother.
* Added `comparisonDefault` prop to `DataViewFilterText`.
	* Devs can now pass the prop as part of the current `args` prop that all filters currently receive.
	* The filter will throw an error if devs pass a `comparisonDefault` that's not part of the allowed valid comparisons.
* **BREAKING** Re-developed `Content` component (`Summary Page Content` in figma). The new `Content` component works almost in the same way as the `Form` component, it receives a fieldDef array with all the "metadata" from the fields, a getValues callback for populating the fields, and a sections array for positioning the fields. Please see Content.stories.mdx for detailed documentation on the new prop structure.
* Created 2 new transforms: transform_chips, and transform_colorPicker. These work in the exact same way as the other transforms, so they can be used interchangeably between the DataView and the Content component.

## 6.0.1
* Updated `FormFieldColorPicker` stories' height to make the color picker component clickable, and improve scrollable logic.
* Updated `FormFieldAddress` checkbox list's width when creating a new option.
* **BREAKING** `FormFieldAdvancedSelection`:
	* createNewOption prop now expects a MosaicLabelValue as return value.
* Addressed comments from the design team:
	* `Label` and `Chip` components now have font-weight medium (510).
	* Improved `Dialog` component's paddings.
	* Improved spacing between title and address in `FormFieldAddress`.
	* Improved margins between chips and "show more" button in `FormFieldAdvancedSelection`.
	* Added border to map in `FormFieldMapCoordinates`' card.
	* Added box-shadow to `FormFieldText` and `FormFieldTextArea`.
	* Improved padding space between the firs field in the form and the `TopComponent`.
	* Improved overall structure of theme.ts file.

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
