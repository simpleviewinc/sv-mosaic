# sv-mosaic changelog

### 44.0.0 - 06/24/2025

* `FormFieldCheckbox`

  * [MOS-1550](https://simpleviewtools.atlassian.net/browse/MOS-1550 "https://simpleviewtools.atlassian.net/browse/MOS-1550") **Remove getOptions input setting from all fields that deprecate it**
    * **(BREAKING CHANGE)** (chore) Removes deprecated getOptions input setting for applicable (optionable) field types.
    * **(BREAKING CHANGE)** (ChipField) Removes the deprecated `onSelect` input setting.
* `FormFieldUpload`

  * [MOS-1649](https://simpleviewtools.atlassian.net/browse/MOS-1649 "https://simpleviewtools.atlassian.net/browse/MOS-1649") **File Upload Field Enhancements**
    * (FormFieldUpload) Add support for optional image dimensions for uploaded files.
* `Typography`

  * [MOS-1628](https://simpleviewtools.atlassian.net/browse/MOS-1628 "https://simpleviewtools.atlassian.net/browse/MOS-1628") **Typography Polish**
    * (Typography) Swaps out variants. Adds support for the size and weight props.
    * **(BREAKING CHANGE)** the `variant` prop now accepts `text`, `body` or `display`. Similarly, the helper components are now `Text`, `BodyText` and `DisplayText`. The typography [documentation](https://simpleviewinc.github.io/sv-mosaic/sb8/master/?path=/docs/components-typography--docs "https://simpleviewinc.github.io/sv-mosaic/sb8/master/?path=/docs/components-typography--docs") has been updated to list the variants and their default tag, available sizes and default weight.
    * **(BREAKING CHANGE)** `as` is no longer an accepted property - use `tag` instead..
    * **(BREAKING CHANGE)** `style` is not longer an accepted property - use `attrs` instead.
* Housekeeping

  * [MOS-1627](https://simpleviewtools.atlassian.net/browse/MOS-1627 "https://simpleviewtools.atlassian.net/browse/MOS-1627") **Initial Polish Setup**
    * **BREAKING CHANGE** Adds new theme tokens and deprecates the old ones. Introduce the theme provider which utilises a custom **MUI** theme, injects the Google font links and root CSS.

      * Normalises CSS.
      * Consumers should now wrap their entire app in Mosaic's `ThemeProvider` component.
    * Eliminate any unnecessary usage of the font-family style, resulting in all components and some stories using Roboto.
    * Updates all font weight and font size styles both in components and stories, to reflect the new theme tokens.
  * [MOS-1665](https://simpleviewtools.atlassian.net/browse/MOS-1665 "https://simpleviewtools.atlassian.net/browse/MOS-1665") **Bad import slowing mosaic**
    * (chore) Add icons-material to eslint rule to prevent loose importing of all icons.
    * (ChipList) Fix loose icon import.

### 43.2.1 - 06/10/2025

* `FormFieldAddress`
  * [MOS-1662](https://simpleviewtools.atlassian.net/browse/MOS-1662 "https://simpleviewtools.atlassian.net/browse/MOS-1662") **FormFieldAddress bug**
    * (AddressField) Nest the unique key used for the address drawer to prevent mutating the address object.
* `SummaryPageTopComponent`
  * [MOS-1647](https://simpleviewtools.atlassian.net/browse/MOS-1647 "https://simpleviewtools.atlassian.net/browse/MOS-1647") **TopSummary should accept title?: ReactNode**
    * (TopSummary) Adds support to provide an arbitrary `ReactNode` title which doesn't receive the same formatting as string-based titles.

### 43.2.0 - 05/27/2025

* `DataView`

  * [MOS-1623](https://simpleviewtools.atlassian.net/browse/MOS-1623 "https://simpleviewtools.atlassian.net/browse/MOS-1623") **Add a keyword search on the column UI**
    * (DataView) Implement keyword search input for columns. Amend column header.
* `FormFieldPhoneSelectionDropdown`

  * [MOS-1615](https://simpleviewtools.atlassian.net/browse/MOS-1615 "https://simpleviewtools.atlassian.net/browse/MOS-1615") **Phone Number adds additional digit, when field is edited**
    * (PhoneField) Allow international formatting toggle to pass down to underlying phone component.
  * [MOS-1621](https://simpleviewtools.atlassian.net/browse/MOS-1621 "https://simpleviewtools.atlassian.net/browse/MOS-1621") **Phone field country code size**
    * (Phone) Prevent the country selector from growing when the overall field width is
* Housekeeping

  * [MOS-1614](https://simpleviewtools.atlassian.net/browse/MOS-1614 "https://simpleviewtools.atlassian.net/browse/MOS-1614") **Optimisations for **WSL****
    * Revise container configuration to streamline developer experience and speed up CI. Drop the "publisher" and "mosaic-types" containers and let "storybook" and "mosaic" containers take care of their responsibilities respectively. Utilise docker layer caching instead of persisting things to the Circle workspace.
    * Enable Mosaic container to rebuild itself based on changes thereby eliminating the need to mount node_modules.
    * Rewrite Circle config to reduce some of the magic carried out by each job. Rely more on docker compose.
    * Improved Teams notifications.

### 43.1.0 - 04/28/2025

* `DataView`

  * [MOS-1579](https://simpleviewtools.atlassian.net/browse/MOS-1579 "https://simpleviewtools.atlassian.net/browse/MOS-1579") **Mosaic Dataview Grid Selection checkbox issue**
    * (DataView) Ensure a boolean is provided to item checkbox to avoid uncontrolled input inconsistencies.
  * [MOS-1617](https://simpleviewtools.atlassian.net/browse/MOS-1617 "https://simpleviewtools.atlassian.net/browse/MOS-1617") **Allow removal of columns using the right pane in the DataView**
    * (DataView) Adds a button to column drawer items that can be used to easily remove items.
* `Form`

  * [MOS-1619](https://simpleviewtools.atlassian.net/browse/MOS-1619 "https://simpleviewtools.atlassian.net/browse/MOS-1619") **Error when scrolling on a form after submission with incomplete fields**
    * Ensure the `onScrollFinished` handler is defined before invoking it to prevent throwing an error.
* `FormFieldAddress`

  * [MOS-1582](https://simpleviewtools.atlassian.net/browse/MOS-1582 "https://simpleviewtools.atlassian.net/browse/MOS-1582") **Reconfigure the layout of address sub fields**
    * (chore) Begin to retire MosaicGridConfig type.
    * (Form) Adds support for explicitly defining a number of grid segments a column should span, falling back to an automatic span if none is provided.
    * (AddressSingle) Update sub field layout and labels.
    * (Form) Adjust responsive breakpoints at which form layout will fall back to normal stacking.
* `FormFieldColorPicker`

  * [MOS-1533](https://simpleviewtools.atlassian.net/browse/MOS-1533 "https://simpleviewtools.atlassian.net/browse/MOS-1533") **Default colour picker UI**
    * (ColorField) Transparent pattern. No color selected indication. Clear color button. Better all-round styling.
* `FormFieldPhoneSelectionDropdown`

  * [MOS-1616](https://simpleviewtools.atlassian.net/browse/MOS-1616 "https://simpleviewtools.atlassian.net/browse/MOS-1616") **Providing the phone field with a phone number that cannot be parsed throws an error**
    * (PhoneField) Prevent throwing errors for numbers with unknown country codes, gracefully falling back to a question mark and no country code displayed.
* `FormFieldTextEditor`

  * [MOS-1611](https://simpleviewtools.atlassian.net/browse/MOS-1611 "https://simpleviewtools.atlassian.net/browse/MOS-1611") **Ensure the text editor node popover forms display above other content**
    * (TextEditor) Increases the z-index of the node form to ensure it sits above other UI in the same context.
* `FormFieldTime`

  * [MOS-1620](https://simpleviewtools.atlassian.net/browse/MOS-1620 "https://simpleviewtools.atlassian.net/browse/MOS-1620") **Time field is emitting the wrong kind of data**
    * (TimeField) Ensure time is emitted in correct string format instead of as a date object.
* Housekeeping

### 43.0.0 - 04/15/2025

* `Chip`
  * [MOS-1608](https://simpleviewtools.atlassian.net/browse/MOS-1608 "https://simpleviewtools.atlassian.net/browse/MOS-1608") **Text descenders being cut off**
    * (Chip) Increase the line height of Chip text whilst making it relative to the font size.
* `Content`
  * [MOS-1502](https://simpleviewtools.atlassian.net/browse/MOS-1502 "https://simpleviewtools.atlassian.net/browse/MOS-1502") **Remove support for the deprecated content section definition types**
    * **(BREAKING CHANGE)** (Content) Remove deprecated sections type.
* `Form`
  * [MOS-1588](https://simpleviewtools.atlassian.net/browse/MOS-1588 "https://simpleviewtools.atlassian.net/browse/MOS-1588") **getFormValues and error handling**
    * (Form) useForm hook now accepts `data`, `skeleton` and `disabled` as parameters that will be used for initial form state.
    * (Form) The parameter for `useForm().methods.setFormValues` now accepts `skeleton` and `disabled` properties that will be used to update the corresponding state properties if provided.
    * **(BREAKING CHANGE)** (Form) Drops support for the `getFormValues` property.
    * **(BREAKING CHANGE)** (Form) `disabled` state property is `false` by default instead of `true`, unless otherwise specified.
    * See [documentation](https://simpleviewinc.github.io/sv-mosaic/sb8/master/?path=/docs/components-form--form#prepopulated-values "https://simpleviewinc.github.io/sv-mosaic/sb8/master/?path=/docs/components-form--form#prepopulated-values") for new usage.
* Housekeeping
  * [MOS-1603](https://simpleviewtools.atlassian.net/browse/MOS-1603 "https://simpleviewtools.atlassian.net/browse/MOS-1603")
    * Perform a number of upgrades to the libraries that the Storybook container utilises.
    * Ensure all packages are pinned.
  * [MOS-1610](https://simpleviewtools.atlassian.net/browse/MOS-1610 "https://simpleviewtools.atlassian.net/browse/MOS-1610") **Remove "other" gender option.**
    * (chore) Removes other gender options, replaces conditional field demonstration with referral question.

### 42.1.0 - 04/01/2024

* `FormFieldPhoneSelectionDropdown`
  * [MOS-1607](https://simpleviewtools.atlassian.net/browse/MOS-1607 "https://simpleviewtools.atlassian.net/browse/MOS-1607") **FormFieldPhone dropdown seems to be present in the background but not visible**
    * (PhoneField) Increase z-index of phone field drop-down.
* `FormFieldTextEditor`
  * [MOS-1461](https://simpleviewtools.atlassian.net/browse/MOS-1461 "https://simpleviewtools.atlassian.net/browse/MOS-1461") **Tip Tap - add 'Remove Link' to the Custom Link Handler form**
    * (TextEditor) Provides a way for any custom link implementation to easily remove the current link.
  * [MOS-1574](https://simpleviewtools.atlassian.net/browse/MOS-1574 "https://simpleviewtools.atlassian.net/browse/MOS-1574") **Mosaic Tip Tap editor Accessibility Issues**
    * (TextEditor) Accessibility improvements to ensure control menus can be navigated using the keyboard.
    * (TextEditor) Ensure the text editor canvas only receives focus if a control menu item is selected and not if the menu is merely closed.
  * [MOS-1580](https://simpleviewtools.atlassian.net/browse/MOS-1580 "https://simpleviewtools.atlassian.net/browse/MOS-1580") **Mosiac - Tiptap Texteditor Labelling issue**
    * (TextEditor) Add support for menu button labels and tooltips.

### 42.0.0 - 03/17/2024

* `ChipList`

  * [MOS-1585](https://simpleviewtools.atlassian.net/browse/MOS-1585 "https://simpleviewtools.atlassian.net/browse/MOS-1585") **Create chiplist component**
    * (ChipList) Factor out chip list into a consumable component.
    * Slightly amend the styling of the show more/show less button.
* `Form`

  * [MOS-1583](https://simpleviewtools.atlassian.net/browse/MOS-1583 "https://simpleviewtools.atlassian.net/browse/MOS-1583") **Adjust the field error state red surrounds to avoid collisions**
    * (Form) Employ a thin space between errored fields that are adjacent to make it easier to distinguish them from one another.
* `FormFieldCheckbox`

  * [MOS-1581](https://simpleviewtools.atlassian.net/browse/MOS-1581 "https://simpleviewtools.atlassian.net/browse/MOS-1581") **Introduce useColumns input setting to the checkbox field**
    * (util) Adds a utility that can split an array up into a specified number of chunks.
    * (CheckboxList) Adds support to split checkbox items into up to 3 columns based on a number of items per column. The maximum number of items per column can be dictated by the `itemsPerColumn` property. This property defaults to 8. 0 or less can be provided to prevent columns altogether. The items will always be as evenly distributed as possible across columns.
    * (CheckboxField) Introduce the `itemsPerColumn` input setting to be passed down to the underlying CheckboxList.
* `FormFieldPhoneSelectionDropdown`

  * [MOS-1507](https://simpleviewtools.atlassian.net/browse/MOS-1507 "https://simpleviewtools.atlassian.net/browse/MOS-1507") **Migrate from react-phone-input-2 to react-phone-number-input**
    * (PhoneField) Complete implementation using new react-phone-number-input library.
    * (PhoneField) Drop `@simpleview/react-phone-input-2` dependency.
    * **(BREAKING CHANGE)** The phone field now emits a phone according to E.164 specification instead of before whereby the leading sign was omitted.
    * **(BREAKING CHANGE)** The `autoFormat` input setting no longer exists. The phone number is *always* formatted according to the chosen country.
    * Also fixes [MOS-1438](https://simpleviewtools.atlassian.net/browse/MOS-1438 "https://simpleviewtools.atlassian.net/browse/MOS-1438"), [MOS-1173](https://simpleviewtools.atlassian.net/browse/MOS-1173 "https://simpleviewtools.atlassian.net/browse/MOS-1173"), [MOS-1299](https://simpleviewtools.atlassian.net/browse/MOS-1299 "https://simpleviewtools.atlassian.net/browse/MOS-1299") and [MOS-1439](https://simpleviewtools.atlassian.net/browse/MOS-1439 "https://simpleviewtools.atlassian.net/browse/MOS-1439")
* Housekeeping

  * [MOS-1522](https://simpleviewtools.atlassian.net/browse/MOS-1522 "https://simpleviewtools.atlassian.net/browse/MOS-1522") **Improve unit test coverage for fields**
    * Substantial improvements to unit tests for field type components.
    * Unifies mock data
    * Adds types for `react-color`

### 41.0.0 - 03/04/2024

* `Form`
  * [MOS-1573](https://simpleviewtools.atlassian.net/browse/MOS-1573 "https://simpleviewtools.atlassian.net/browse/MOS-1573") **Hidden form field labels**
    * **BREAKING CHANGE** (Form) Makes FieldDef's label property required.
    * (Form) Introduces a new property `hideLabel` that prevents rendering the field label. Ensures that each applicable field control utilises the `aria-label` attribute so that they are labelled even if it’s not rendered on screen.
    * (util) Updates merge function to ensure properties that are absent from second merge candidate are added to the first.
    * (Form) Utilises the label in the address autocomplete field. Hide address 1 field label by default for single addresses. Adds missing labels to various fields.
  * [MOS-1576](https://simpleviewtools.atlassian.net/browse/MOS-1576 "https://simpleviewtools.atlassian.net/browse/MOS-1576") **Add setting to disable the left nav items when rendering a form**
    * (Form) Introduce a `hideSectionNav` form prop that gives product a way to always hide the section navigation, regardless of how many sections are defined.
  * [MOS-1577](https://simpleviewtools.atlassian.net/browse/MOS-1577 "https://simpleviewtools.atlassian.net/browse/MOS-1577") **Better error handling for improper field reference in section**
    * (Form) Adds to field sanitization check to validation fields referenced in sections exist in the list of field definitions.

### 40.1.0 - 02/18/2024

* `DataView`
  * [MOS-1478](https://simpleviewtools.atlassian.net/browse/MOS-1478 "https://simpleviewtools.atlassian.net/browse/MOS-1478") **DataView pager popover improvements**
    * (Button) Removes the outer popover wrapper, allowing individual popover contents to drive their own styles.
    * (Form) Adds a way to select all text when using the autofocus mechanic, with a default fallback to only focusing when a boolean is passed.
    * (DataView) Utilises the Form component for the pager popover to bring consistency and improved UX.
* `Form`
  * [MOS-1555](https://simpleviewtools.atlassian.net/browse/MOS-1555 "https://simpleviewtools.atlassian.net/browse/MOS-1555") **Scroll spy still not accurate**
    * (ScrollSpy) Introduce mechanism to invoke an action more accurately when a container has finished scrolling, not just when the animation is complete.
* `FormFieldAddress`
  * [MOS-1570](https://simpleviewtools.atlassian.net/browse/MOS-1570 "https://simpleviewtools.atlassian.net/browse/MOS-1570") **Address Field - State persists in options after removal of Country**
    * (AddressField) Utilise new form hook mechanic to clear the state field when the country field is changed instead of a side effect, preventing race conditions that caused stale address state options in some scenarios.
* `FormFieldAdvancedSelection`
  * [MOS-1558](https://simpleviewtools.atlassian.net/browse/MOS-1558 "https://simpleviewtools.atlassian.net/browse/MOS-1558") **Mosaic - Accessibility Issues with Chip selections**
    * (Chip) Addresses tab index of Chip delete icon to ensure it can be accessed using keyboard interaction. Also fixes some minor Chip styling issues.
* `FormFieldTextEditor`
  * [MOS-1458](https://simpleviewtools.atlassian.net/browse/MOS-1458 "https://simpleviewtools.atlassian.net/browse/MOS-1458") **Tiptap Text editor Images cannot be made links**
    * (TextEditor) Adds support for images to be wrapped in links.
  * [MOS-1512](https://simpleviewtools.atlassian.net/browse/MOS-1512 "https://simpleviewtools.atlassian.net/browse/MOS-1512") **Tiptap Text editor - Table - Align Left not functioning correctly**
    * (TextEditor) Resets the text alignment of table header cells.

### 40.0.0 - 02/04/2024

* `Checkbox`

  * [MOS-1468](https://simpleviewtools.atlassian.net/browse/MOS-1468 "https://simpleviewtools.atlassian.net/browse/MOS-1468") **Sort out the Checkbox and Checkbox list mechanics**
    * (Checkbox) Clean up checkbox, checkbox list and form field checkbox code
    * Introduces array/toggle utility, dropping reliance on lodash/xorBy.
* `FormFieldAdvancedSelection`

  * [MOS-1531](https://simpleviewtools.atlassian.net/browse/MOS-1531 "https://simpleviewtools.atlassian.net/browse/MOS-1531") **Eliminate unnecessary mechanics from advanced selection field**
    (AdvSelField) Removes mobile responsiveness redundancies because fields have their own sizing mechanics.
* `FormFieldTextEditor`

  * [MOS-1546](https://simpleviewtools.atlassian.net/browse/MOS-1546 "https://simpleviewtools.atlassian.net/browse/MOS-1546") **Improve the text editor toolbar a little bit**
    * **BREAKING CHANGE** (TextEditor) Adds support for rows of controls. The `controls` input setting now takes an extra level of array nesting, the top-most layer represents the rows that the controls will be displayed over.
    * (TextEditor) Adjust styling to control groups to ensure there can't be a trailing separator even when control groups wrap.
    * (TextEditor) Adjust styling to text block menu button to look more like a dropdown.
* `FormFieldTime`

  * [MOS-1551](https://simpleviewtools.atlassian.net/browse/MOS-1551 "https://simpleviewtools.atlassian.net/browse/MOS-1551")
    * (Form) Introduces form hooks, namely one that can modify the data when a field changes before the data is dispatched. This allows multiple points of data to be updated in sync with a single operation.
    * As a result, the bug that caused the `touched` object to be changed as soon as a date/time field with a default time was mounted has been solved.
    * Additionally as a result, the bug that caused the date/time field to not be validated by time a default time was set has been solved ([MOS-1552](https://simpleviewtools.atlassian.net/browse/MOS-1552 "https://simpleviewtools.atlassian.net/browse/MOS-1552")).
* Housekeeping

  * [MOS-1532](https://simpleviewtools.atlassian.net/browse/MOS-1532 "https://simpleviewtools.atlassian.net/browse/MOS-1532") **Standardise components that use options and getOptions**
    * (chore) Introduce useOptions utility hook and useMountWarning for deprecation warnings
    * (Fields) Utilise the new `useOptions` hook for the Checkbox, Dropdown, Radio and Chip fields.
    * **DEPRECATED** the use of the `getOptions` input setting for all of the fields listed in the previous point. Use `options` instead, which will now take a list of options *or* a function that returns a promise resolving to a list of options.

#### Improvements and Fixes

### 39.3.2 - 01/21/2024

#### Improvements and Fixes

* `Form`

  * [MOS-1530](https://simpleviewtools.atlassian.net/browse/MOS-1530 "https://simpleviewtools.atlassian.net/browse/MOS-1530") **Scroll spy innaccuracy**
    * Slightly refactor the Scroll Spy mechanic to avoid relying on debounced changes.
* `FormFieldDate`

  * [MOS-1547](https://simpleviewtools.atlassian.net/browse/MOS-1547 "https://simpleviewtools.atlassian.net/browse/MOS-1547") **Date/Time Form field issues**
    * (DateField) Always default to a minimum and maximum date for date fields.
    * (DateField) Utilise the Mosaic-styled text field
* Housekeeping

  * [MOS-1432](https://simpleviewtools.atlassian.net/browse/MOS-1432 "https://simpleviewtools.atlassian.net/browse/MOS-1432") **Rename all broken documentation links**
    * (chore) Updates broken documentation links

### 39.3.1 - 01/13/2024

#### Fixes

* `Form`

  * [MOS-1548](https://simpleviewtools.atlassian.net/browse/MOS-1548 "https://simpleviewtools.atlassian.net/browse/MOS-1548") **Issues with grouped fields**
    * (Form) Add the group itself to the list when collating a list of paths from field store.
    * (Form) Ensure group sub fields are properly mounted so that their corresponding DOM elements can be referenced for auto scrolling.
* `Content`

  * [MOS-1536](https://simpleviewtools.atlassian.net/browse/MOS-1536 "https://simpleviewtools.atlassian.net/browse/MOS-1536") **Correct content items row gap**
    * (Content) Swaps out the row-gap style for gap due to unknown bug.
* `Card`

  * [MOS-1534](https://simpleviewtools.atlassian.net/browse/MOS-1534 "https://simpleviewtools.atlassian.net/browse/MOS-1534") **Add ability to add count to Card title bar**
    * (Card) Introduces a way to display a numeric item count alongside the card title.
* Housekeeping

### 39.3.0 - 01/07/2024

#### Improvements and Fixes

* `Form`

  * [MOS-1535](https://simpleviewtools.atlassian.net/browse/MOS-1535 "https://simpleviewtools.atlassian.net/browse/MOS-1535") **Dates with time and related with a endDateName / startDateName do not validate correctly**
    * (Form) Changes the underlying form error mechanics by storing grouped field errors with flattened keys rather than nested objects.
* `FormFieldTextEditor`

  * [MOS-1460](https://simpleviewtools.atlassian.net/browse/MOS-1460 "https://simpleviewtools.atlassian.net/browse/MOS-1460") **Tiptap Text editor - Text class option issue**
    * (TextEditor) Allow text styling of multiple blocks by not disabling the text style dropdown. Indicates that there are multiple styles active in the selection.
  * [MOS-1525](https://simpleviewtools.atlassian.net/browse/MOS-1525 "https://simpleviewtools.atlassian.net/browse/MOS-1525") **Tiptap editor input settings adjustments**
    * (TextEditor) Adds minimum and maximum heights. Adds a "custom" input setting for exposing arbitrary callbacks to the editor.
* Housekeeping

### 39.2.1 - 12/12/2024

#### Fixes

* `FormFieldDate`
  * [MOS-1526](https://simpleviewtools.atlassian.net/browse/MOS-1526 "https://simpleviewtools.atlassian.net/browse/MOS-1526") **Date field default time bug**
    * (DateField) Fixes issue where date fields default time would overwrite any form value population.

### 39.2.0 - 12/10/2024

#### Improvements and Fixes

* `FormFieldAddress`

  * [MOS-1472](https://simpleviewtools.atlassian.net/browse/MOS-1472 "https://simpleviewtools.atlassian.net/browse/MOS-1472") **Add singleAddress or addressFlat form field type**
    * Introduces the `singleAddress` field type which, under the hood, gets transformed into a field group containing the desired address sub-fields.
    * By default, all sub-fields will be included, but they can also be cherry-picked using the `subFields` input setting.
    * Some sub-fields depend on other sub-fields being included. An error will be thrown if an attempt is made to include a sub-field without including its dependency fields. Available sub-fields and their dependencies are as follows:

      * `address1` (`country`, `city`, `state`, `postalCode`)
      * `address2` (`address1`)
      * `address3` (`address2`)
      * `state` (`country`, `postalCode`)
      * `city` (`country`, `state`, `postalCode`)
      * `postalCode` (no dependencies)
    * An address autocomplete field can be utilised for the `address1` field, though it is optional. By omitting the `googleMapsApiKey` input setting, a normal text field will be included instead.
* `FormFieldDate`

  * [MOS-1519](https://simpleviewtools.atlassian.net/browse/MOS-1519 "https://simpleviewtools.atlassian.net/browse/MOS-1519") **Utilise the new form grouping mechanic for the date field**
    * (DateField) Utilises field groups to show time and date sub fields when the date field is used with `showTime` input setting.
    * Allows for the date and time sub-fields to utilise their own validation rules and messages.
* `SummaryPageTopComponent`

  * [MOS-1515](https://simpleviewtools.atlassian.net/browse/MOS-1515 "https://simpleviewtools.atlassian.net/browse/MOS-1515") **SummaryTop additional actions wrong aria-label**
    * (TopSummary) Amends additional actions dropdown button to use the same tooltip as the DataView row additional actions.
* Housekeeping

  * [MOS-1518](https://simpleviewtools.atlassian.net/browse/MOS-1518 "https://simpleviewtools.atlassian.net/browse/MOS-1518") **Console log eslint rule**
    (chore) Upgrades to @simpleview/sv-mosaic-eslint@0.0.2 to utilises the `no-console` rule. This prevents console logging from making it into production.

### 39.1.0 - 11/26/2024

#### Improvements and Fixes

* `DataView`

  * [MOS-1410](https://simpleviewtools.atlassian.net/browse/MOS-1410 "https://simpleviewtools.atlassian.net/browse/MOS-1410") **DataViewFieldDate clear not clearing validation messages**
    * (DateFilter) Have the date filter's form revalidate once the field values are cleared.
  * [MOS-1505](https://simpleviewtools.atlassian.net/browse/MOS-1505 "https://simpleviewtools.atlassian.net/browse/MOS-1505") **Allow passing arbitrary CSS style object to DataViewColumn**
    * (DataView) Allows the passing of arbitrary styles to DataView columns alongside the existing styling flags.
* `Form`

  * [MOS-1503](https://simpleviewtools.atlassian.net/browse/MOS-1503 "https://simpleviewtools.atlassian.net/browse/MOS-1503") **Implement field grouping**
    * (Form) Implements field grouping support. Moves state into context.
  * [MOS-1508](https://simpleviewtools.atlassian.net/browse/MOS-1508 "https://simpleviewtools.atlassian.net/browse/MOS-1508") **Improve accuracy of the SideNav active section indicator**
    * (ScrollSpy) Force last section to be considered active if the viewport is scrolled all the way to the bottom, regardless of section height.
* `FormFieldDate`

  * [MOS-1474](https://simpleviewtools.atlassian.net/browse/MOS-1474 "https://simpleviewtools.atlassian.net/browse/MOS-1474") **Minimum date control issue in the FormFieldDateField > Playground **
    * (chore) Fixes the minimum date control for the date field story.
* `FormFieldTextEditor`

  * [MOS-1510](https://simpleviewtools.atlassian.net/browse/MOS-1510 "https://simpleviewtools.atlassian.net/browse/MOS-1510") **Allow artbitary HTML attributes to be used in the text editor**
    * (TextEditor) Allow any arbitary HTML attributes to be used in text editor source without being stripped out by Tiptap.
* Housekeeping

  * [MOS-1509](https://simpleviewtools.atlassian.net/browse/MOS-1509 "https://simpleviewtools.atlassian.net/browse/MOS-1509") **Continued improvements to unit tests**
    * Write improved unit tests for `DataViewFilterText` through `Drawers`
  * [MOS-1511](https://simpleviewtools.atlassian.net/browse/MOS-1511 "https://simpleviewtools.atlassian.net/browse/MOS-1511") **Upgrade ESLint**
    * Upgrades ESLint to v9 and migrate the configuration
    * Factors out ESLint config to `@simpleview/sv-mosaic-eslint` package
    * Consumes the newly created package in e2e-tests, mosaic and storybook containers.
    * Utilises `eslint-plugin-storybook` ESLint plugin in Storybook container.

### 39.0.0 - 11/12/2024

* `Content`
  * [MOS-1470](https://simpleviewtools.atlassian.net/browse/MOS-1470 "https://simpleviewtools.atlassian.net/browse/MOS-1470") **Address the overly complex section definition for the Content component**
    * (Content) **Deprecates** the old way (`string[][][]`) of defining sections and adds support for the new way (`string[][]`). Content section definitions **should be updated** at your earliest convenience to avoid breaking changes in a future release.
* `DataView`
  * [MOS-1440](https://simpleviewtools.atlassian.net/browse/MOS-1440 "https://simpleviewtools.atlassian.net/browse/MOS-1440") **Number field filter text accuracy**
    * (NumberFilter) Updates the text representing the applied filter for better accuracy.
* `Form`
  * [MOS-1498](https://simpleviewtools.atlassian.net/browse/MOS-1498 "https://simpleviewtools.atlassian.net/browse/MOS-1498") **Circular reference problems in load ordering**
    * (chore) Reduces circular references. Moves field config map into get field config to avoid hot reload issues related to circulars. Moves form utils into utils directory.
    * **(BREAKING CHANGE)** Validators have moved: instead of `@simpleview/sv-mosaic/components/Form/validators` they are now available at `@simpleview/sv-mosaic/utils/form/validators`
* `FormFieldAdvancedSelection`
  * [MOS-1412](https://simpleviewtools.atlassian.net/browse/MOS-1412 "https://simpleviewtools.atlassian.net/browse/MOS-1412") **Special characters )( causes issue with label display**
    * (util) Introduces a regex escape utility.
    * (AdvancedSelection) Ensures the keyword used for filtering options is escaped of any regex characters.
* `FormFieldDate`
  * [MOS-1414](https://simpleviewtools.atlassian.net/browse/MOS-1414 "https://simpleviewtools.atlassian.net/browse/MOS-1414") **Validation error giving bad example**
    * (TimeField) Updates time field placeholder and validation error to give a clearer message to the user.
* `FormFieldTextEditor`
  * [MOS-1499](https://simpleviewtools.atlassian.net/browse/MOS-1499 "https://simpleviewtools.atlassian.net/browse/MOS-1499") **Remove Jodit**
    * **(BREAKING CHANGE)** (TextEditor) Remove all things Jodit related. The legacy Jodit editor has now been dropped from the library and the new Tiptap editor is fully integrated into the form system. You should now use the `type: "textEditor"` field definition to load the new text editor field instead of referring to the `FormFieldTextEditorTipTapFieldType` component, which has been removed.
  * [MOS-1501](https://simpleviewtools.atlassian.net/browse/MOS-1501 "https://simpleviewtools.atlassian.net/browse/MOS-1501") **Provide custom text editor controls with the event**
    * (TextEditor) Adds the click event to the list of properties available on the parameter passed to control cmd callbacks.
* `FormFieldToggleSwitch`
  * [MOS-1500](https://simpleviewtools.atlassian.net/browse/MOS-1500 "https://simpleviewtools.atlassian.net/browse/MOS-1500") **Revert behaviour of FormFieldToggle implmented on MOS-1475**
    * (ToggleField) Revert toggle behaviour to ensure form data for toggle fields in an off position is false. Modifications to required validator to reject false value.
* `SideNav`
  * [MOS-1504](https://simpleviewtools.atlassian.net/browse/MOS-1504 "https://simpleviewtools.atlassian.net/browse/MOS-1504") **Section nav item keys**
    * (SideNav) Adds keys to the components rendered within each side nav item to prevent React errors being thrown in the console.

## Improvements and Fixes

### 38.0.0 - 10/29/2024

## Improvements and Fixes

* `FormFieldDate`

  * [MOS-1480](https://simpleviewtools.atlassian.net/browse/MOS-1480 "https://simpleviewtools.atlassian.net/browse/MOS-1480") **Default time setting behaviour**
    * (DateField) Modify the way that the default time is utilised, by only populating the time field once a date is chosen. The default time will be cleared when the date is cleared only if it has not been manually modified.
* `FormFieldTextEditor`

  * [MOS-1479](https://simpleviewtools.atlassian.net/browse/MOS-1479 "https://simpleviewtools.atlassian.net/browse/MOS-1479") **TipTap Text Editor : Copy paste moves content outside window bounds**
    * (TextEditor) Ensures text editor uses a scrollbar if the content is wider than the text area to prevent leakage outside of the boundaries.
  * [MOS-1482](https://simpleviewtools.atlassian.net/browse/MOS-1482 "https://simpleviewtools.atlassian.net/browse/MOS-1482") **Tip Tap Text Editor scrolled above viewport locks control panel at top of screen**
    * (TextEditor) Adjust control top offset when in a sticky position.
  * [MOS-1483](https://simpleviewtools.atlassian.net/browse/MOS-1483 "https://simpleviewtools.atlassian.net/browse/MOS-1483") **Add a text editor input setting to prevent auto linking**
    * (TextEditor) Introduces an input setting `autolink` that can disable the automatic linking strings that look like URLs/hosts.
* `FormFieldToggleSwitch`

  * [MOS-1475](https://simpleviewtools.atlassian.net/browse/MOS-1475 "https://simpleviewtools.atlassian.net/browse/MOS-1475") **FormFieldToggle - Required Control not working correctly**
    * (ToggleField) Ensure toggle value reverts to undefined when it is false for correct validation.
* Housekeeping

  * [MOS-1380](https://simpleviewtools.atlassian.net/browse/MOS-1380 "https://simpleviewtools.atlassian.net/browse/MOS-1380") **Utilise a new container to test the contents of distribution**
    * Introduces a container that imports consumable components, utils and transforms and runs a type check against them to prevent any regression when restructuring.
    * Updates CircleCI config to use the *current* base image
    * Consistently export component property types
    * **(BREAKING CHANGE)** Renamed `TopSummaryTypes` to `TopSummaryProps`
  * [MOS-1467](https://simpleviewtools.atlassian.net/browse/MOS-1467 "https://simpleviewtools.atlassian.net/browse/MOS-1467") **Improve unit test coverage Blank through DataView**
    * Covering components `Blank` through `DataViewFilterText`
    * Utilising the newly-added `@testing-library/user-event` for firing user events
    * Rewriting test suites to ensure all code that can be covered, is covered
    * Utilising better test locators, introducing more test IDs where other selectors aren’t viable
      * Standardising test IDs
    * Standardising test suites using a `setup`
    * A number of changes have also been made to the library better assist with testing. All new test IDs are available on the `testIds` object available at `@simpleview/sv-mosaic/utils/testIds`:
      * `Button` component now has an `aria-label` as the button label if it's a string, or the button tooltip if it's a string
      * `ButtonRow` test ID has changed from "button-row" to "mos:ButtonRow:row"
      * `Content` title icon test ID has changed from "contacts-icon-test" to "mos:Card:titleIcon"
      * `Checkbox` test ID has changed from "checkbox-test-id" to "mos:Checkbox:wrapper"
      * `Chip` test ID has changed from "delete-chip-testid"/"chip-testid" to "mos:Chip:root"
      * `Chip` delete icon test ID has changed from "delete-icon-test-id" to "mos:Chip:deleteIcon"
      * `Content` has a new test ID "mos:Content:root"
      * `Content` field tooltip icon has a new test ID "mos:Content:tooltipIcon"
      * `DataView` has a new test ID "mos:DataView:root"
      * A large number of new test IDs have been introduced to other `DataView` sub components. Those can be explored in the `testIds` [object](https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/utils/testIds.ts "https://github.com/simpleviewinc/sv-mosaic/blob/develop/containers/mosaic/src/utils/testIds.ts").
  * [MOS-1494](https://simpleviewtools.atlassian.net/browse/MOS-1494 "https://simpleviewtools.atlassian.net/browse/MOS-1494") **Lock down tiptap to a specific version**
    * (chore) Pin Tiptap package versions to 2.8.0

### 37.3.0 - 10/01/2024

## Improvements and Fixes

* `FormFieldAddress`

  * [MOS-1456](https://simpleviewtools.atlassian.net/browse/MOS-1456 "https://simpleviewtools.atlassian.net/browse/MOS-1456") **Address array needs to retain ID**
    * (AddressField) Ensure extra address object properties are preserved when being updated using the address drawer.
* `FormFieldDate`

  * [MOS-1457](https://simpleviewtools.atlassian.net/browse/MOS-1457 "https://simpleviewtools.atlassian.net/browse/MOS-1457") **Update date picker to allow defaulting of time on date selection**
    * (DateField) Adds default time input setting
    * (Form) Ensure field registration happens as early as possible. Organise Form and useForm imports.
* `FormFieldTextEditor`

  * [MOS-1476](https://simpleviewtools.atlassian.net/browse/MOS-1476 "https://simpleviewtools.atlassian.net/browse/MOS-1476") **TipTap Text Editor - Link and Image overlay issue**
    * (TextEditor) Increase the z-index of the built-in Tiptap node form to prevent it from appearing beneath the editor toolbar.
* `Menu`

  * [MOS-1473](https://simpleviewtools.atlassian.net/browse/MOS-1473 "https://simpleviewtools.atlassian.net/browse/MOS-1473") **Menu Items Not Keyboard Accessible**
    * (Menu) Drop the MenuSelect component and merge functionality in with the existing menu component.
    * (Menu) Improve menu item state colours and keyboard a11y.
* `ToggleSwitch`

  * [MOS-1466](https://simpleviewtools.atlassian.net/browse/MOS-1466 "https://simpleviewtools.atlassian.net/browse/MOS-1466") **Toggle field set to required:true should not show asterisk next to toggleLabel**
    * (ToggleField) Stop passing down the required prop to Material's switch to prevent duplicate asterisks.
* Housekeeping

  * [MOS-1420](https://simpleviewtools.atlassian.net/browse/MOS-1420 "https://simpleviewtools.atlassian.net/browse/MOS-1420") **Clean up codebase of legacy components and files**
    * (chore) Bunch of cleanup
    * (chore) Move upload-related styled components into the appropriate directory.
    * (chore) Remove MenuFormFieldCard
    * (chore) Tidy. Move mock functions away from library file structure. Remove redundant files.

### 37.2.2 - 09/24/2024

## Improvements and Fixes

* `FormFieldTextEditor`
  * Due to compatibility issues, the syntax highlighting for the code block extension has been dropped. Code blocks will now be rendered with the standard black text.

### 37.2.1 - 09/17/2024

## Improvements and Fixes

* `FormFieldTextEditor`

  * [MOS-1335](https://simpleviewtools.atlassian.net/browse/MOS-1335 "https://simpleviewtools.atlassian.net/browse/MOS-1335") **Text Editor Miscount of max character and odd behaviour**
    See [https://simpleviewtools.atlassian.net/browse/MOS-1428](https://simpleviewtools.atlassian.net/browse/MOS-1428 "https://simpleviewtools.atlassian.net/browse/MOS-1428")
  * [MOS-1388](https://simpleviewtools.atlassian.net/browse/MOS-1388 "https://simpleviewtools.atlassian.net/browse/MOS-1388") **TextEditor character count is still not completely accurate**
    See [https://simpleviewtools.atlassian.net/browse/MOS-1428](https://simpleviewtools.atlassian.net/browse/MOS-1428 "https://simpleviewtools.atlassian.net/browse/MOS-1428")
  * [MOS-1422](https://simpleviewtools.atlassian.net/browse/MOS-1422 "https://simpleviewtools.atlassian.net/browse/MOS-1422") **Bizarre busted test in Apex**
    See [https://simpleviewtools.atlassian.net/browse/MOS-1428](https://simpleviewtools.atlassian.net/browse/MOS-1428 "https://simpleviewtools.atlassian.net/browse/MOS-1428")
  * [MOS-1428](https://simpleviewtools.atlassian.net/browse/MOS-1428 "https://simpleviewtools.atlassian.net/browse/MOS-1428")
    * Implement new TipTap rich text editor which will become the replacement for Jodit
    * This field is currently being shipped alongside the current text editor field. Therefore, the `type` of fields using this field type should refer to the component `FormFieldTextEditorTipTapFieldType`. Found at `@root/components/Field`.
    * More information can be found in the documentation FormFields → FormFieldTextEditor → Docs - Tiptap
* Housekeeping

  * [MOS-1441](https://simpleviewtools.atlassian.net/browse/MOS-1441 "https://simpleviewtools.atlassian.net/browse/MOS-1441") **Upgrade test suite**
    * Replaces Jest with Vitest as test framework. That includes all test utility functions, plugins and mockers.
    * Cleanup any redundant Jest files. Note that Vitest still requires `@testing-library/jest-dom` for some assertions.
    * Provides the test container with the `<span data-highlighted="true"><span class="_11q7y4f7 _5pioz8co _189eyh40 _n3tdv77o _1il9nqa1 _19lc184f _d0altlke acronym-highlight" data-testid="acronym-highlight">CI</span></span>=true` envvar.
    * Adds a script to launch Vitest **UI** locally with test coverage data
    * Installs the `@testing-library/user-events` library.
  * [MOS-1454](https://simpleviewtools.atlassian.net/browse/MOS-1454 "https://simpleviewtools.atlassian.net/browse/MOS-1454") **Reorder story navigation**
    * (chore) Reorder story entry query to ensure documentation gets listed after component stories in the Storybook navigation.
  * [MOS-1455](https://simpleviewtools.atlassian.net/browse/MOS-1455 "https://simpleviewtools.atlassian.net/browse/MOS-1455") **Perform Mosaic container upgrades/maintenance**
    Perform Mosaic container upgrade tasks:
    * Upgrade `typescript@4.7.4` → `typescript@5.5.4`
    * Upgrade `typescript-transform-paths@3.3.1` → `typescript-transform-paths@3.5.0`
    * Upgrade `react^18.2.0` → `react@18.3.1`
    * Upgrade `react-dom@^18.2.0` → `react-dom@18.3.1`
    * Upgrade `@types/react@^18.0.15` → `@types/react@18.3.5`
    * Upgrade `@types/react-dom@^18.0.6` → `@types/react-dom@18.3.0`
    * Drop `ts-loader`
    * Drop `react-lorem-ipsum`
    * Drop `json-date-parser`
    * Pin all package versions
  * [MOS-1463](https://simpleviewtools.atlassian.net/browse/MOS-1463 "https://simpleviewtools.atlassian.net/browse/MOS-1463") **Replace ttypescript**
    * (chore) Swap out ttypescript for ts-patch

### 37.1.0 - 09/03/2024

### Improvements and Fixes

* `Form`

  * [MOS-1361](https://simpleviewtools.atlassian.net/browse/MOS-1361 "https://simpleviewtools.atlassian.net/browse/MOS-1361") **Questions being truncated instead of repositioned**
    * (Form) Have long form labels wrap into a new line rather than being truncated.
* `FormFieldChipSingleSelect`

  * [MOS-1430](https://simpleviewtools.atlassian.net/browse/MOS-1430 "https://simpleviewtools.atlassian.net/browse/MOS-1430") **Render the aria-selected attribute for Chips even when there is no selection**
    * (ChipField) Fallback to a false selected state to ensure aria-selected is always provided
* `FormFieldDropdownSingleSelection`

  * [MOS-1435](https://simpleviewtools.atlassian.net/browse/MOS-1435 "https://simpleviewtools.atlassian.net/browse/MOS-1435") **Dropdown with duplicate labels results in react `key` error spam**
    * (DropdownField) Ensure the dropdown (autocomplete) component uses the option's value as the key instead of the label to avoid React errors
* `FormFieldMapCoordinates`

  * [MOS-1431](https://simpleviewtools.atlassian.net/browse/MOS-1431 "https://simpleviewtools.atlassian.net/browse/MOS-1431") **Add Mousehover Tooltip to Drawer back arrows**
    * (TitleWrapper) Use back button label as a tooltip when hovered
    * (CoordsField) Updates back button label for coordinates entry draw
    * (AddressField) Updates back button label for address entry draw
* `FormFieldPhoneSelectionDropdown`

  * [MOS-1384](https://simpleviewtools.atlassian.net/browse/MOS-1384 "https://simpleviewtools.atlassian.net/browse/MOS-1384") **Phone field accessibility**
    * (PhoneField) Prevent opinionated phone functionality from causing accessibility issues.
* `FormFieldUpload`

  * [MOS-1381](https://simpleviewtools.atlassian.net/browse/MOS-1381 "https://simpleviewtools.atlassian.net/browse/MOS-1381") **Drag and Drop file area still functional when disabled**
    * (UploadField) Prevents file dropping and style changes on the upload drop zone if the field is disabled.
* Housekeeping

  * [MOS-1383](https://simpleviewtools.atlassian.net/browse/MOS-1383 "https://simpleviewtools.atlassian.net/browse/MOS-1383") **Scroll to section not working on Drawer form**
    * (Form) Set window height for drawer story to match the height of the viewport
  * [MOS-1405](https://simpleviewtools.atlassian.net/browse/MOS-1405 "https://simpleviewtools.atlassian.net/browse/MOS-1405") **Sticky not working in Dataview**
    * (DataView) Ensures the sticky parameter works by forcing the story to take up the full height of the viewport.
  * [MOS-1436](https://simpleviewtools.atlassian.net/browse/MOS-1436 "https://simpleviewtools.atlassian.net/browse/MOS-1436") **Upgrade MUI**
    * (chore) Upgrades MUI and sister packages to their latest stable version in the same major.

      * @mui/icons-material@^5.8.4 → @mui/icons-material@5.16.7
      * @mui/material@^5.8.7 → @mui/material@5.16.7
      * @mui/styles@^5.6.2 → @mui/styles@5.16.7

### 37.0.0 - 08/20/2024

### Improvements and Fixes

* `Form`
  * [MOS-1334](https://simpleviewtools.atlassian.net/browse/MOS-1334 "https://simpleviewtools.atlassian.net/browse/MOS-1334") **Tighten up the mechanics of form data**
    * (Form) We no longer "clean" the data that is provided within the submission handler, it will always match the data object that is in state. Instead, we now also provide a list of active fields that the consumer can use to transform the data themselves however they see fit.
    * **(BREAKING CHANGE)** The parameter provided to the submission callback is no longer the data object. Instead, it is an object containing the data and the names of the active fields: `{ data: any, activeFields: string[] }`
  * [MOS-1346](https://simpleviewtools.atlassian.net/browse/MOS-1346 "https://simpleviewtools.atlassian.net/browse/MOS-1346") **Setting form values does not provide a way to validate**
    * (Form) Validate values that are set as a result of the user picking coordinates on the map
    * (Form) Add support to validate when setting field values using `setFormValues`
* `FormFieldMapCoordinates`
  * [MOS-1355](https://simpleviewtools.atlassian.net/browse/MOS-1355 "https://simpleviewtools.atlassian.net/browse/MOS-1355") **Standardise the behaviour of the map coordinates draw**
    * (CoordField) Standardise the submission process of the drawer to use the form validation rather than disabling the save button.
  * [MOS-1434](https://simpleviewtools.atlassian.net/browse/MOS-1434 "https://simpleviewtools.atlassian.net/browse/MOS-1434") **Map Coordinates field Indenting inconsistent**
    * (CoordsField) Amend styling issues to reduce padding around the coordinate drawer map and bring the reset button in line with the coordinate fields.
    * (Button) Adds support for a large button size
* `FormFieldMatrix`
  * [MOS-1343](https://simpleviewtools.atlassian.net/browse/MOS-1343 "https://simpleviewtools.atlassian.net/browse/MOS-1343") **Matrix Add button not skeletonised**
    * (MatrixField) Implement a skeleton for the matrix field
* `FormFieldUpload`
  * [MOS-1433](https://simpleviewtools.atlassian.net/browse/MOS-1433 "https://simpleviewtools.atlassian.net/browse/MOS-1433") **Unable to upload new file after failed upload**
    * (UploadField) Default file upload percentage to undefined thereby correctly displaying the remove icon when there is no percentage
* Housekeeping
  * [MOS-1353](https://simpleviewtools.atlassian.net/browse/MOS-1353 "https://simpleviewtools.atlassian.net/browse/MOS-1353") **Stop exporting components from root entry file**
    * **(BREAKING CHANGE)** (chore) Moves component exports into a dedicated index file

### 36.2.2 - 08/05/2024

### Improvements and Fixes

* `Content`

  * [MOS-1321](https://simpleviewtools.atlassian.net/browse/MOS-1321 "https://simpleviewtools.atlassian.net/browse/MOS-1321") **Content responsiveness**
    * (Content) Use container media queries to stack content fields on top of one another where less space is available.
* `DataView`

  * [MOS-1314](https://simpleviewtools.atlassian.net/browse/MOS-1314 "https://simpleviewtools.atlassian.net/browse/MOS-1314") **Missing space in pager popover**
    * (DataView) Forces a space between "of" keyword and number of pages in pager popover.
* `Form`

  * [MOS-1298](https://simpleviewtools.atlassian.net/browse/MOS-1298 "https://simpleviewtools.atlassian.net/browse/MOS-1298") **Form label tooltips**
    * (Form) Adds title attributes to field labels to enable a native tooltip.
  * [MOS-1303](https://simpleviewtools.atlassian.net/browse/MOS-1303 "https://simpleviewtools.atlassian.net/browse/MOS-1303") **Validation onBlurChange validation behaviour issues**
    * (Form) Marks all fields as blurred if submission is attempted so that appropriate validation strategies work as expected.
* `FormFieldAddress`

  * [MOS-1302](https://simpleviewtools.atlassian.net/browse/MOS-1302 "https://simpleviewtools.atlassian.net/browse/MOS-1302") **Provide a way to allow an unlimited number of addresses**
    * (AddressField) Adds support to set no limit on the number of addresses that can be added for each or all types
  * [MOS-1427](https://simpleviewtools.atlassian.net/browse/MOS-1427 "https://simpleviewtools.atlassian.net/browse/MOS-1427") **Postcode validation message correction**
    * (AddressField) Updates the message given when an invalid postcode is provided to better reflect the label of the field.
* `FormFieldNumber`

  * [MOS-1429](https://simpleviewtools.atlassian.net/browse/MOS-1429 "https://simpleviewtools.atlassian.net/browse/MOS-1429") **Ensure new DataViewFilterNumber component is exported at the root**
    * (NumberFilter) Export at the root to ensure component is included in build.
* `Menu`

  * [MOS-1416](https://simpleviewtools.atlassian.net/browse/MOS-1416 "https://simpleviewtools.atlassian.net/browse/MOS-1416") **Add additional color options for icons on MenuItem**
    * (Menu) Adds menu item support for all appropriate icon colours.
* Housekeeping

  * [MOS-1294](https://simpleviewtools.atlassian.net/browse/MOS-1294 "https://simpleviewtools.atlassian.net/browse/MOS-1294") **Query about Submit External Buttons > Age field**
    * (Form) Updates the form documentation to demonstrate using an external method of submission
    * (chore) Remove redundant story
  * [MOS-1309](https://simpleviewtools.atlassian.net/browse/MOS-1309 "https://simpleviewtools.atlassian.net/browse/MOS-1309") **Replace non secure Storybook links**
    * (chore) Replace resource data images with SSL-enabled URLs

## 36.2.1 - 07/23/24

### Improvements and Fixes

* `DataView`

  * [MOS-1296](https://simpleviewtools.atlassian.net/browse/MOS-1296 "https://simpleviewtools.atlassian.net/browse/MOS-1296") **Selected Title Comparison representation**
    * (DataViewTextFilter) Use verbiage for the comparison description labels instead of technical operators.
  * [MOS-1390](https://simpleviewtools.atlassian.net/browse/MOS-1390 "https://simpleviewtools.atlassian.net/browse/MOS-1390") **Implement number filter**
    * (NumberFilter) Adds numerical "rating" mock data to be displayed and filtered in the `DataView` story
    * (DataViewFilters) Standardises the footers of all filter drop-down contents. Performs a little cleanup.
    * (NumberFilter) Initial implementation using the form's newly introduced `number` field. This filter allows for a minimum and maximum number to be entered and used as a filter. Accepts all of the input settings that the number field accepts apart from `placeholder`.
    * (NumberField) Moves story to the correct location
    * (NumberFilter) Creates an isolated story for the new filter component and also exhibits it in the main DataView story using record ratings.
* `FormFieldDate`

  * [MOS-1396](https://simpleviewtools.atlassian.net/browse/MOS-1396 "https://simpleviewtools.atlassian.net/browse/MOS-1396") **Clearing dates breaks the dateTime input**
    * (DateField) Ensures that an empty input (nullish time) - even though it is an acceptable input - is not considered a valid time.
* `FormFieldNumber`

  * [MOS-1392](https://simpleviewtools.atlassian.net/browse/MOS-1392 "https://simpleviewtools.atlassian.net/browse/MOS-1392") **Create a new "number" field type**
    * Introduces a number field type that supports restricting input to a given number of decimal places or whole numbers, signed numbers and prefix and suffixes.
* Housekeeping

  * [MOS-1417](https://simpleviewtools.atlassian.net/browse/MOS-1417 "https://simpleviewtools.atlassian.net/browse/MOS-1417") **Upgrade Storybook from 8.1.9 to 8.1.11**
    * (chore) Updates Storybook from 8.1.9 to 8.1.11
  * [MOS-1423](https://simpleviewtools.atlassian.net/browse/MOS-1423 "https://simpleviewtools.atlassian.net/browse/MOS-1423") **Address issues with DataView e2e tests**
    * A number of e2e tests for the DataView are brittle, use bad locators or are skipped altogether. This takes care of all of those issues.
  * [MOS-1425](https://simpleviewtools.atlassian.net/browse/MOS-1425 "https://simpleviewtools.atlassian.net/browse/MOS-1425") **Broken FieldDef export**
    * (Field) Exports field types from library main entry point

## 36.1.0 - 07/09/24

### Improvements and Fixes

* `Chip`

  * [MOS-1394](https://simpleviewtools.atlassian.net/browse/MOS-1394) **Add a aria-selected attribute to Chips used in FormFieldChip to represent selected state**
    * Gives chip container the listbox role and each chip an option role.
    * Gives selected chips the`aria-selected` attribute.
* `DataView`

  * [MOS-1387](https://simpleviewtools.atlassian.net/browse/MOS-1387) **Hidden buttons still have hoverable tooltips**
    * (DataView) Add tooltips to story row actions
    * (Button) Disable pointer events for invisible buttons
* `FormFieldAddress`

  * [MOS-1389](https://simpleviewtools.atlassian.net/browse/MOS-1389) **Validate Postal code relative to country**
    * (AddressField) Adds a postcode validator and applies it to the
      postcode field used in the address drawer. The validator will be
      automatically tested when the country field changes. If there is no
      country selected or the selected country is not supported by the
      postcode validator, the postcode will pass validation regardless of its
      value.
    * (Form) Adds support to provide a filter for which validators to test when providing a validates property to a field definition.
    * (AddressField) Adds postcode-validator dependency
  * [MOS-1391](https://simpleviewtools.atlassian.net/browse/MOS-1391) **Incorrect City for Address**
    Swaps the address component used for the "City" address field for `locality` instead of `administrative_area_zone_2` when there is no postal town component.
* `FormFieldAdvancedSelection`

  * [MOS-1386](https://simpleviewtools.atlassian.net/browse/MOS-1386) **Advanced Selection chips vanish when you are adding new options**
    Have selected chips retain their rendered position whilst the selection draw is open instead of being hidden.
* Housekeeping

  * [MOS-1418](https://simpleviewtools.atlassian.net/browse/MOS-1418) **Migrate remaining documentation**
    * (chore) Migrates the remaining component documentation.
    * (chore) Installs`remark-gfm` dependency to support GitHub flavoured markdown and by further extension, tables.
    * (chore) Ensure first visits to Storybook land on the introduction page
  * [MOS-1419](https://simpleviewtools.atlassian.net/browse/MOS-1419) **Unit test tidy up**
    * Moves remaining test files into the correct location
    * Removes local`testArray` implementation and replaces it with`@simpleview/mochalib`'s implementation

## 36.0.0 - 06/11/24

### Improvements & Fixes

* `Form`
  * [MOS-1378](https://simpleviewtools.atlassian.net/browse/MOS-1378 "https://simpleviewtools.atlassian.net/browse/MOS-1378")
    * Assign internal form values when set using the `setFormValues` method to avoid them becoming out of sync with state values.
    * Use `nanoid` as initial key instead of `lodash.uniqueid` for better chance at avoiding key collisions.
    * Update initial upload field values to something more simpleview-esque.
    * Downgrades `nanoid` because Jest support for ESM is still experimental.
  * [MOS-1293](https://simpleviewtools.atlassian.net/browse/MOS-1293 "https://simpleviewtools.atlassian.net/browse/MOS-1293")
    * Introduces register field hook which is utilised by a new custom field wrapper
    * Improves custom field story by exhibiting a more cohesive, realistic form
* `Typography`
  * [MOS-1292](https://simpleviewtools.atlassian.net/browse/MOS-1292 "https://simpleviewtools.atlassian.net/browse/MOS-1292")
    * Reduces possible story tags to only those that are most practical.
* Housekeeping
  * [MOS-1379](https://simpleviewtools.atlassian.net/browse/MOS-1379 "https://simpleviewtools.atlassian.net/browse/MOS-1379")
    * Explicitly includes files that aren't used in Mosaic into compilation
    * Copies CSS assets to distribution after build
    * Increases the z-index of the phone field's flag menu popper container
  * [MOS-1366](https://simpleviewtools.atlassian.net/browse/MOS-1366 "https://simpleviewtools.atlassian.net/browse/MOS-1366")
    * **(BREAKING CHANGES)** Remove the following deprecations:
      * `gap` from `ButtonRowProps` (no longer used)
      * `layout` from `FieldDefBase` (use the `sections` property on `FormProps` instead)
      * `mapPosition` from `MapCoordinatesInputSettings` (use `initialCenter` instead)
      * `onError` from `OnFileAddData` (throw an error within `onFileAdd` instead)
      * `as` from `TypographyProps` (use `tag` instead)
      * `style` from `TypographyProps` (Use a style property on an object provided to `attrs` instead)

## 35.0.0 - 05/28/24

### Improvements & Fixes

* `Form`
  * [MOS-1362](https://simpleviewtools.atlassian.net/browse/MOS-1362 "https://simpleviewtools.atlassian.net/browse/MOS-1362")
    * Prevents the browser from performing its own HTML5 validation to avoid conflicts with Mosaic validation.
  * [MOS-1360](https://simpleviewtools.atlassian.net/browse/MOS-1360 "https://simpleviewtools.atlassian.net/browse/MOS-1360")
    * Prevents field registration whilst skeleton is enabled because it's too early to obtain an input reference.
  * [MOS-1327](https://simpleviewtools.atlassian.net/browse/MOS-1327 "https://simpleviewtools.atlassian.net/browse/MOS-1327")
    * Allows the form initialisation function to accept sections so that field order can be calculated based on where they appear if applicable. If no sections are provided, the order will fallback to that of the fields array.
* `Menu`
  * [MOS-1365](https://simpleviewtools.atlassian.net/browse/MOS-1365 "https://simpleviewtools.atlassian.net/browse/MOS-1365")
    * Enable popper fixed strategy by removing the `disablePortal` property from `MenuBase`.
* `DataView`
  * [MOS-1348](https://simpleviewtools.atlassian.net/browse/MOS-1348 "https://simpleviewtools.atlassian.net/browse/MOS-1348")
    * Introduces a number of new properties to support new "saved view" mechanics. These new mechanics allow for unopinionated saved views and involves only rendering the controls in the `DataView` title, handing off the specific steps to view saving and retrieval to the product. Specifically, the new `DataView` props are:

      * `currentView`: a `MosaicLabelValue` object that represents the current view. The label will be displayed in the UI in the `DataView` heading area.
      * `onViewList`: a handler to be invoked when the user wishes to show the list of available views.
      * `onViewSave`: a handler to be invoked when the user wishes to save changes to their current view.
      * `onViewSaveAs`: a handler to be invoked when the user wishes to save their current `DataView` setup as a new view.

      All of the saved-view related properties are optional.
* `FormFieldPhone`
  * [MOS-1200](https://simpleviewtools.atlassian.net/browse/MOS-1200 "https://simpleviewtools.atlassian.net/browse/MOS-1200")
    * Utilises the new `DropdownList` property of the `PhoneInput` component from the upgraded `@simpleview/react-phone-input-2` library. With this new property, we render our own dropdown component inside a Material `Popper` component, instead of relying on the default dropdown. With this change, we utilise Popper's fixed strategy which renders the dropdown as a child of `body` to avoid the z-index issues that occur with the default one.
* Housekeeping
  * [MOS-1357](https://simpleviewtools.atlassian.net/browse/MOS-1357 "https://simpleviewtools.atlassian.net/browse/MOS-1357")
    * Creates a script that:
      * Pushes the current branch to the `fork` remote
      * Generates a URL that can be used to quick create a PR based on the "MOS"-based name of the current branch
  * [MOS-1359](https://simpleviewtools.atlassian.net/browse/MOS-1359 "https://simpleviewtools.atlassian.net/browse/MOS-1359")
    * Replace occurrences of imports from Material's root with component-specific imports
  * [MOS-1351](https://simpleviewtools.atlassian.net/browse/MOS-1351 "https://simpleviewtools.atlassian.net/browse/MOS-1351")
    * **(BREAKING CHANGE)** Stops exporting Mosaic utility functions from the root export. Utilities imported using `@simpleview/sv-mosaic/*` must now be imported using `@simpleview/sv-mosaic/utils/*`
  * [MOS-1363](https://simpleviewtools.atlassian.net/browse/MOS-1363 "https://simpleviewtools.atlassian.net/browse/MOS-1363")
    * Upgrades playwright from `1.27.1` to `1.44.0`.
    * Renames the playwright configuration file to `playwright.config.ts` instead of the non standard `sv-mosaic.config.ts` to support the VSCode debugging extension.

## 34.0.0 - 05/14/24

### Improvements & Fixes

* `Content`
  * [MOS-1338](https://simpleviewtools.atlassian.net/browse/MOS-1338 "https://simpleviewtools.atlassian.net/browse/MOS-1338")
    * Corrects the field container's key to use the row's index instead of the section's index to prevent duplicate keys in the same parent.
* `DataView`
  * [MOS-1347](https://simpleviewtools.atlassian.net/browse/MOS-1347 "https://simpleviewtools.atlassian.net/browse/MOS-1347")
    * **(BREAKING CHANGE)** Removes all references to `DataView` views including types and tests. This is in preparation for the new, re-hauled views system that will hand off most of the functionality to the product. The following keys have been removed from `DataViewProps`:
      * `savedView`
      * `savedViewAllowSharedViewSave`
      * `onSavedViewChange`
      * `onSavedViewSave`
      * `onSavedViewRemove`
      * `onSavedViewGetOptions`
  * [MOS-1289](https://simpleviewtools.atlassian.net/browse/MOS-1289 "https://simpleviewtools.atlassian.net/browse/MOS-1289")
    * Ensures that primary `DataView` actions are horizontally aligned by preserving space for those that are hidden as a result of their `show` property. As a by-product, adds support for the `invisible` property to the `Button` component which still renders the button, but hides and disables it.
* `FormFieldAddress`
  * [MOS-1336](https://simpleviewtools.atlassian.net/browse/MOS-1336 "https://simpleviewtools.atlassian.net/browse/MOS-1336") / [MOS-1290](https://simpleviewtools.atlassian.net/browse/MOS-1290 "https://simpleviewtools.atlassian.net/browse/MOS-1290")
    * Gives `AddressDrawer` a refactor to squash a number of bugs:
      * The address 2 and state fields are now correctly populated in all checked cases, which are a number of both US and UK addresses. Note that there are many world addresses which are not currently supported. It's really a minefield, since the different components given to us by Google depend on the country for which the user is querying. For example, as described [here](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform "https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform"):
        * In the UK and in Sweden, the component to display the city is postal_town.
        * In Japan, components differ across prefectures.
        * Brooklyn and other parts of New York City do not include the city as part of the address. Instead, they use sublocality_level_1.
      * The state is now correctly cleared when changing country.
      * The empty fields are now correctly reported, with capitalised field labels.
* `FormFieldAddress` / `FormFieldMapCoordinates`
  * [MOS-1328](https://simpleviewtools.atlassian.net/browse/MOS-1328 "https://simpleviewtools.atlassian.net/browse/MOS-1328")
    * Brings standardisation to the fields that use drawers as an input method:
      * Amends the address field's drawer save button to use the `submit` button type.
      * Amends the map coordinate field's drawer save button to use the `submit` button type and "Save" text.
* `FormFieldTextEditor`
  * [MOS-1323](https://simpleviewtools.atlassian.net/browse/MOS-1323 "https://simpleviewtools.atlassian.net/browse/MOS-1323")
    * Removes the "add new line" plugin which rendered an incorrectly positioned new line button.
    * Removes the *"powered by Jodit"* text to reduce noise.
    * Removes the word and character counter which caused confusion due to the conflicts with Mosaic's character counter.
  * [MOS-1330](https://simpleviewtools.atlassian.net/browse/MOS-1330 "https://simpleviewtools.atlassian.net/browse/MOS-1330")
    * No longer passes the maximum characters property down to Jodit to avoid conflicts with Mosaic's preferred max character behaviour
  * [MOS-1339](https://simpleviewtools.atlassian.net/browse/MOS-1339 "https://simpleviewtools.atlassian.net/browse/MOS-1339")
    * Expand on the text editor character count helper to account for eccentricities of HTML whilst still supporting `script` and `style` tags.
* Housekeeping
  * [MOS-1349](https://simpleviewtools.atlassian.net/browse/MOS-1349 "https://simpleviewtools.atlassian.net/browse/MOS-1349")
    * **(BREAKING CHANGE)** No longer exports transforms from the root entry file.
  * [MOS-1288](https://simpleviewtools.atlassian.net/browse/MOS-1288 "https://simpleviewtools.atlassian.net/browse/MOS-1288")
    * Slightly improves the type of DataView's data property to avoid the need to use `as` when referencing row IDs.

## 33.0.0 - 04/30/24

### Improvements & Fixes

* `Form`
  * [MOS-1287](https://simpleviewtools.atlassian.net/browse/MOS-1287 "https://simpleviewtools.atlassian.net/browse/MOS-1287")
    * Has the form display a "[skeleton](https://www.uxdesigninstitute.com/blog/whats-a-skeleton-screen/ "https://www.uxdesigninstitute.com/blog/whats-a-skeleton-screen/")" representation of the fields and action buttons whilst the inital load is underway. Each field type has it's own version of the skeleton to be displayed.
  * [MOS-1277](https://simpleviewtools.atlassian.net/browse/MOS-1277 "https://simpleviewtools.atlassian.net/browse/MOS-1277") **(POTENTIAL TEST BREAKING CHANGES)**
    * Ensures each applicable field has a label whose for attribute corresponds to the field input within. This improves form accessibility. Field types that follow this rule are:

      * `color`
      * `date`
      * `dropdown`
      * `phone`
      * `text`
      * `time`

      The `textEditor` field type *should* ideally follow this rule as well, but I can't currently find a way to add an ID attribute to the `contenteditable` element that Jodit renders.
* `FormFieldTextEditor`
  * [MOS-1325](https://simpleviewtools.atlassian.net/browse/MOS-1325 "https://simpleviewtools.atlassian.net/browse/MOS-1325")
    * This fixes an issue that caused rich text fields to be incorrectly invalidated due to hidden HTML tags that come as a part of the text editor value naturally. We now consistently strip away any HTML tags for not just the character counter, but also as a part of the maximum character validation function.
* `Content`
  * [MOS-1320](https://simpleviewtools.atlassian.net/browse/MOS-1320 "https://simpleviewtools.atlassian.net/browse/MOS-1320")
    * Employs a [workaround](https://stackoverflow.com/a/48162770/1612146 "https://stackoverflow.com/a/48162770/1612146") to prevent typography from overflowing outside of individual content item containers. Words will be forced to be broken even if they have no breaking characters.
* Housekeeping
  * [MOS-1278](https://simpleviewtools.atlassian.net/browse/MOS-1278 "https://simpleviewtools.atlassian.net/browse/MOS-1278") **(BREAKING CHANGES)**
    * Renames `SummaryPageTopComponent` → `TopSummary`
    * Renames `isLatitude` → `validateLatitude`
    * Renames `isLongitude` → `validateLongitude`
    * Renames `Field` → `FieldWrapper` and moves to a dedicated `FieldWrapper` component directory
    * Renames `ColField` → `Field` and moves to a dedicated `Form/Field` component directory
    * Renames `FormFieldChipSingleSelect` → `FormFieldChips`
    * Renames `FormFieldDropdownSingleSelection` → `FormFieldDropdown`
    * Renames `FormFieldPhoneSelectionDropdown` → `FormFieldPhone`
    * Renames `FormFieldToggleSwitch` → `FormFieldToggle`
      * Renames the `toggleSwitch` field definition type to `toggle`
    * Renames `FormFieldColorPicker` → `FormFieldColor`
  * [MOS-1324](https://simpleviewtools.atlassian.net/browse/MOS-1324 "https://simpleviewtools.atlassian.net/browse/MOS-1324") **(POTENTIAL TEST BREAKING CHANGES)**
    * Removes unused components and any references and tests relating to them:
      * `FormFieldImageVideoLinkDocumentBrowsing`
      * `FormFieldImageUpload`

## 32.1.1 - 04/16/24

### Improvements & Fixes

* `Form`
  * [MOS-1315](https://simpleviewtools.atlassian.net/browse/MOS-1315 "https://simpleviewtools.atlassian.net/browse/MOS-1315")
    * This ensures the auto focus action is only carried out once the initial load has finished and the form is enabled by using `loadingInitial` and `disabled` as dependencies to the side effect that invokes the focus method.
* `Content`
  * [MOS-1311](https://simpleviewtools.atlassian.net/browse/MOS-1311 "https://simpleviewtools.atlassian.net/browse/MOS-1311")
    * Applies some refactoring to the bulk of the `Content` component, but also ensures rows are not rendered when they have no fields to render within, particularly when individual field `show` properties are evaluated.
    * The `ContentField` type is renamed to `ContentFieldDef`.
* `ButtonRow` / `Form` / `Menu` / `SideNav`
  * [MOS-1312](https://simpleviewtools.atlassian.net/browse/MOS-1312 "https://simpleviewtools.atlassian.net/browse/MOS-1312")
    * Improves on the show mechanic to ensure wrapping elements are not rendered if there are no items to render within as a result of their `show` evaluation. Specifically:
      * Buttons should not render if the `menuItems` property is provided, but there are no menu items to render.
      * Form rows should not render if there are no fields and by further extension columns to render within.
      * SideNav groups should not render if there are no navigation items to render within.
* `FormFieldAddress`
  * [MOS-1310](https://simpleviewtools.atlassian.net/browse/MOS-1310 "https://simpleviewtools.atlassian.net/browse/MOS-1310")
    * With a recent edit, when editing an address, the type options were derived from the address being edited as well as the available types from the field itself. This ensures there can be no duplicates when combining the two.
* `Form`
  * [MOS-1250](https://simpleviewtools.atlassian.net/browse/MOS-1250 "https://simpleviewtools.atlassian.net/browse/MOS-1250")
    * Rewrites the entire "Form With Layout" story configuration to make it all round more coherent and better reflect what a real world form would look like.
  * [MOS-1186](https://simpleviewtools.atlassian.net/browse/MOS-1186 "https://simpleviewtools.atlassian.net/browse/MOS-1186")
    * Removes playground prepopulate values control due to the url encoding (or lack) of said values causing errors to be thrown.
* `DataViewDateFilter`
  * [MOS-1225](https://simpleviewtools.atlassian.net/browse/MOS-1225 "https://simpleviewtools.atlassian.net/browse/MOS-1225")
    * The date filter plucks the selected option from the list of provided options and displays the label of that option in the dropdown box. This prevents an error being thrown if the corresponding option is no longer available in those provided.
* `FormFieldColorPicker` / `FormFieldImageUpload` / `FormFieldImageVideoLinkDocumentBrowsing` /`FormFieldTextEditor` / `FormFieldUpload`
  * [MOS-1222](https://simpleviewtools.atlassian.net/browse/MOS-1222 "https://simpleviewtools.atlassian.net/browse/MOS-1222")
    * Addresses a number of field types to improve accessibility, specifically ensuring all fields can be focused through the use of keyboard tabbing.
      * `FormFieldColorPicker`: Swaps the containing `div` element for a `button` element.
      * `FormFieldImageUpload`: Enables the button ripple and prevents display of input instead of hiding hacks.
      * `FormFieldImageVideoLinkDocumentBrowsing`: Swaps circular icon `div` elements out for `button` elements.
      * `FormFieldTextEditor`: Provides the tabIndex property to jodit configuration.
      * `FormFieldUpload`: Swaps the "Upload Files" `label` element for a `button` element.
* `FormFieldNumberTable`
  * [MOS-1221](https://simpleviewtools.atlassian.net/browse/MOS-1221 "https://simpleviewtools.atlassian.net/browse/MOS-1221")
    * Provides `FormFieldNumberTable`'s table with an explicit full width to ensure it stretches (or shrinks) to the width of it's containing element.

## 32.1.0 - 04/02/24

### Improvements & Fixes

* `DataView`
  * [MOS-1179](https://simpleviewtools.atlassian.net/browse/MOS-1179 "https://simpleviewtools.atlassian.net/browse/MOS-1179")
    * Adds the `aria-busy` attribute to `DataView` wrapper which should be used for awaiting within tests over the `.loading` class.
* `FormFieldAdvancedSelection`
  * [MOS-1181](https://simpleviewtools.atlassian.net/browse/MOS-1181 "https://simpleviewtools.atlassian.net/browse/MOS-1181")
    * For text and text editor fields, where a `maxCharacters` property is provided, there is a *x/y* figure that appears above the input reflecting the maximum characters and the current amount of characters. With this change, we are utilising this same figure for the advanced selection field to denote how many items can be selected and how many items are currently selected. The figure only appears if `selectLimit` is more than 1.
* `FormFieldAddress`
  * [MOS-1206](https://simpleviewtools.atlassian.net/browse/MOS-1206 "https://simpleviewtools.atlassian.net/browse/MOS-1206")
    * Refactors the address field slightly to ensure the "Add Address" button doesn't render when there are no more possible address types. Also creates a Kitchen Sink story for easier testing.
* `FormFieldUpload`
  * [MOS-1256](https://simpleviewtools.atlassian.net/browse/MOS-1256 "https://simpleviewtools.atlassian.net/browse/MOS-1256")
    * Modifies the `setFieldValue` method of the form controller and by further extension the `onChange` method that fields recieve, to allow for a callback style value setter. That callback recieves the most up to date value as a reference.
    * Merges pending items with current value items and utilises internal data to store both sets as a single array.
    * Splits the `FileCard` component into `FileCard` for uploaded items and `FileCardPending` for pending uploads due to their specialised responsibilities.
    * Moves the form value cleaner to the default resolver instead of performing value cleaning inside `setFieldValue` making individual field value resolvers responsible for cleaning their values.
    * Removes the button onclick hack with proper HTML labels with `for` attributes.
    * Fixes drag over functionality by keeping a `dragEnter` and `dragLeave` counter instead of using a boolean.
    * Corrects deletion order of operations and displays a spinner whilst an item is being deleted.
    * Other minor refactors such as reordering and renaming of types.
* `FormFieldDate`
  * [MOS-1285](https://simpleviewtools.atlassian.net/browse/MOS-1285 "https://simpleviewtools.atlassian.net/browse/MOS-1285")
    * Forces the date field to use the `DesktopDatePicker` rather than the `DatePicker` MUI component to avoid issues when testing caused by headless browsers not supporting the `(pointer: fine)` media query.
* `Form`
  * [MOS-1295](https://simpleviewtools.atlassian.net/browse/MOS-1295 "https://simpleviewtools.atlassian.net/browse/MOS-1295")
    * Removes the "active" checkbox that can appear at the top of the `Form` component and all references to it.
* `LeftNav`
  * [MOS-1297](https://simpleviewtools.atlassian.net/browse/MOS-1297 "https://simpleviewtools.atlassian.net/browse/MOS-1297")
    * Eliminates the dual state that is present in `LeftNav` by not storing items provided to `LeftNavProps` in local state.
* `Field`
  * [MOS-1301](https://simpleviewtools.atlassian.net/browse/MOS-1301 "https://simpleviewtools.atlassian.net/browse/MOS-1301")
    * Adds a `aria-disabled` attribute to field wrappers to denote disabled state and assist with testing.

## 32.0.0 - 03/19/24

### Improvements & Fixes

* `ButtonRow`
  * [MOS-1286](https://simpleviewtools.atlassian.net/browse/MOS-1286 "https://simpleviewtools.atlassian.net/browse/MOS-1286")
    * Items that are rendered as a part of the `ButtonRow` component are now given a meaningful key where available:

      * If the` ButtonProps` variation is used:
        * Optionally accept an `id` property for `ButtonProps`, if provided this will always be used as the `key`
        * If no `id` is provided in the `ButtonProps` object, then use a combination of the `label` (if it is a string) and `name` properties.
      * If the `children` variation is used, extract the key from each child if it is a valid `ReactElement`
      * As a last resort, uses the item’s index.

      If button rows are expected to change order throughout their lifecycle, products should not allow the key to fall back to their indexes.
* `Form`
  * [MOS-1282](https://simpleviewtools.atlassian.net/browse/MOS-1282 "https://simpleviewtools.atlassian.net/browse/MOS-1282")
    * Introduces the `autoFocus` property to the `Form` component. If true, once mounted, `Form` will attempt to automatically focus the user's cursor on the first field but only the first field is one of the following field types: `date`, `dropdown`, `numberTable`, `phone`, `text`, `textEditor`, `time`.
  * [MOS-1281](https://simpleviewtools.atlassian.net/browse/MOS-1281 "https://simpleviewtools.atlassian.net/browse/MOS-1281")
    * Includes the following to support native HTML form submission behaviour:

      * Adds an `onSubmit` property to be provided to `Form` which will pass through to the integrated HTML `form` element
      * Adds a `type` property to the `Button` component which will pass through to the integrated HTML `button` element. It can be `"submit"` or `"button"` but will be `"button"` by default.

      Default form submission behaviour is always prevented.
  * [MOS-1269](https://simpleviewtools.atlassian.net/browse/MOS-1269 "https://simpleviewtools.atlassian.net/browse/MOS-1269")
    * Introduces a `loadingInitial` property on the form's state. This is a `boolean` property that *always* starts out as `true`. It will be changed to `false` once the form mounts. If a `getFormValues` callback has been provided to the form component, it will change to `true` after the returned promise has resolved.
  * [MOS-1255](https://simpleviewtools.atlassian.net/browse/MOS-1255 "https://simpleviewtools.atlassian.net/browse/MOS-1255")
    * Includes a `methods` property on the result of `useForm()` (which we're now calling the form *controller* ) which will eventually replace usage of external dispatches.
    * **(BREAKING CHANGE)** Removes `dispatch(formActions.setFieldValue(...)` use `controller.methods.setFieldValue(...)` instead.
    * Allows `setFieldValue` to be provided with a callback whose parameter is guaranteed to be the latest value for the given field. This allows updating the value using a similar pattern to `useState`'s setter method.
    * **(BREAKING CHANGE)** Removes `dispatch(formActions.validateField(...)`. There should be no reason for any consumer (including Mosaic's usage of `useForm` itself) to manually invoke `validateField` in this way. To trigger validation when setting a field's value, pass the `validate: true` property.
    * **(BREAKING CHANGE)** Removes `dispatch(formActions.validateForm(...)`.
    * **(BREAKING CHANGE)** Removes `dispatch(formActions.submitForm(...)`. Use `handleSubmit` instead. `handleSubmit` is a higher order function available on the form controller and should be used to wrap a callback to be invoked on a successful submission. `handleSubmit` accepts an optional second callback to be invoked on an invalid submission. Both callbacks will be invoked with the form data as their first parameter.
    * **(BREAKING CHANGE)** Removes uneccessary form action `isSubmittable`.
    * **(BREAKING CHANGE)** Removes unused action types `PROPERTY_RESET`, `MOUNT_FIELD`, `UNMOUNT_FIELD`.
    * **(BREAKING CHANGE)** Removes `dispatch(formActions.setFormValues(...)`. Use `controller.methods.setFormValues(...)` instead.
    * **(BREAKING CHANGE)** Removes `dispatch(formActions.disableForm(...)`. Use `controller.methods.disableForm(...)` instead.
    * **(BREAKING CHANGE)** Removes `dispatch(formActions.mountField(...)` and `dispatch(formActions.unmountField(...)`. Use `controller.methods.mountField(...)` and `controller.methods.unmountField(...)` instead.
    * **(BREAKING CHANGE)** Removes `dispatch(formActions.startBusy(...)` and `dispatch(formActions.endBusy(...)`. Use `controller.methods.addWait(...)` and `controller.methods.removeWait(...)` instead.
    * **(BREAKING CHANGE)** - Removes `FieldDef["defaultValue"]`. Use `getFormValues` which is passed to the `Form` component instead.
  * [MOS-1150](https://simpleviewtools.atlassian.net/browse/MOS-1150 "https://simpleviewtools.atlassian.net/browse/MOS-1150")
    * Rather than lowering the opacity of the form and removing pointer events, this allows the input controls and buttons within to inherit the form's disabled state for true input prevention. In the future, this will be replaced by "skeleton" visuals as described in [MOS-1287](https://simpleviewtools.atlassian.net/browse/MOS-1287 "https://simpleviewtools.atlassian.net/browse/MOS-1287") as it provides better loading state indication and an all round smoother user experience.
* `DataView`
  * [MOS-1280](https://simpleviewtools.atlassian.net/browse/MOS-1280 "https://simpleviewtools.atlassian.net/browse/MOS-1280")
    * Ensures that the actions column is not rendered if no row-specific actions (primary or additional) are available for any of the rows. This includes cases where no actions are available as a result of their show evaluation.
  * [MOS-1180](https://simpleviewtools.atlassian.net/browse/MOS-1180 "https://simpleviewtools.atlassian.net/browse/MOS-1180")
    * Amends the text filter comparison to better fit the interface by matching the comparison dropdown style to the input next to it and rendering it before the term input instead of after it.
* `FormFieldMapCoordinates`
  * [MOS-1279](https://simpleviewtools.atlassian.net/browse/MOS-1279 "https://simpleviewtools.atlassian.net/browse/MOS-1279")
    * Ensures the `onBlur` handler is passed down from the map coordinate field's draw to the autocomplete field but also only invoke the `onBlur` handler if it is defined.

## 31.1.0 - 03/05/24

### Improvements & Fixes

* `Menu`
  * [MOS-1268](https://simpleviewtools.atlassian.net/browse/MOS-1268 "https://simpleviewtools.atlassian.net/browse/MOS-1268")
    * Removes the runtime validation of `Menu` props and drops `jsvalidator` as a dependency since it is no longer in use.
* `Field`
  * [MOS-1267](https://simpleviewtools.atlassian.net/browse/MOS-1267 "https://simpleviewtools.atlassian.net/browse/MOS-1267")
    * Updates default size for text and dropdown fields from small to medium.
* `SideNav`
  * [MOS-1258](https://simpleviewtools.atlassian.net/browse/MOS-1258 "https://simpleviewtools.atlassian.net/browse/MOS-1258")
    * Employs the toggle mechanic to allow for dynamically showing or hiding SideNav items.
* `Button`
  * [MOS-1254](https://simpleviewtools.atlassian.net/browse/MOS-1254 "https://simpleviewtools.atlassian.net/browse/MOS-1254")
    * This employs the toggle mechanic for the `Button` disabled property. It also inverts toggle's behaviour when dealing with arrays of conditions, evaluating in an inverse nature (*some* instead of *every* ) if the `defaultToggle` parameter is `false` instead of `true`.
  * [MOS-1252](https://simpleviewtools.atlassian.net/browse/MOS-1252 "https://simpleviewtools.atlassian.net/browse/MOS-1252")
    * Attaches the `onMouseEnter` and `onMouseLeave` event handlers to the component that wraps the button instead of the button itself, allowing them to be fired even when the button is disabled.
* `DataViewFilterDropdown`
  * [MOS-1224](https://simpleviewtools.atlassian.net/browse/MOS-1224 "https://simpleviewtools.atlassian.net/browse/MOS-1224")
    * Adds title attribute to filter value to maintain cross-browser consistency when there is text overflow causing an ellipsis.
* `Form`
  * [MOS-1141](https://simpleviewtools.atlassian.net/browse/MOS-1141 "https://simpleviewtools.atlassian.net/browse/MOS-1141")
    * Improves forms with sections user experience by:
      * Utilising the `defaultExpanded` property provided by the Material `Accordion` to avoid animating sections when the form is initially mounted.
      * Eliminating dual states.
      * Adding support for the URL hash to be utilised for section navigation and animating the scroll position to the corresponding section when the form is mounted.
* `SummaryPageTopComponent`
  * [MOS-1276](https://simpleviewtools.atlassian.net/browse/MOS-1276 "https://simpleviewtools.atlassian.net/browse/MOS-1276")
    * Removes the arbitrary maximum action and description item checks, allowing the consumer to provide as many of these items as is necessary.
* Housekeeping
  * [MOS-1275](https://simpleviewtools.atlassian.net/browse/MOS-1275 "https://simpleviewtools.atlassian.net/browse/MOS-1275")
    * Updates upload field documentation to include instruction for new `inputSettings`.

## 31.0.2 - 02/20/24

### Improvements & Fixes

* `Form`
  * [MOS-1266](https://simpleviewtools.atlassian.net/browse/MOS-1266 "https://simpleviewtools.atlassian.net/browse/MOS-1266")
    * Ensures the form action `submitForm` waits for the result of the asynchronous function `isSubmittable` to correctly return a `{ valid: false }` result.

## 31.0.1 - 02/20/24

### Improvements & Fixes

* `FormFieldTime`
  * [MOS-1264](https://simpleviewtools.atlassian.net/browse/MOS-1264 "https://simpleviewtools.atlassian.net/browse/MOS-1264")
    * Ensure time is not considered valid if the user has emptied the input field
    * Fixes an issue regarding order of documentation
* `Tooltip`
  * [MOS-1259](https://simpleviewtools.atlassian.net/browse/MOS-1259 "https://simpleviewtools.atlassian.net/browse/MOS-1259")
    * Ensures the tooltip hook and component can be used in strict TypeScript environments without throwing errors.
    * Adds support for a `maxWidth` property that allows the overriding of the default 12rem maximum width.
* `DataView`
  * [MOS-1257](https://simpleviewtools.atlassian.net/browse/MOS-1257 "https://simpleviewtools.atlassian.net/browse/MOS-1257")
    * Reinstates toggling mechanism at the `DataView` level for bulk actions and provide appropriate context w/ new tests
    * Improved condition for showing DataView's action bar
* `FormFieldUpload`
  * [MOS-1251](https://simpleviewtools.atlassian.net/browse/MOS-1251 "https://simpleviewtools.atlassian.net/browse/MOS-1251")
    * This adds support for individual and cumulative file size limits by introducing two new available input settings for the file upload field. Both properties take the byte limit in the form of a number:
      * `maxFileSize` can be used to limit each file uploaded. The `onFileAdd` function will not fire and an error will be displayed beneath the offending file item
      * `maxTotalSize` can be used to limit the total cumulative file size. The file(s) selected will not be added to the queue and a snackbar will be displayed to the user reading "Maximum cumulative file size is x" where x is a formatted amount of bytes.
* `Menu`
  * [MOS-1223](https://simpleviewtools.atlassian.net/browse/MOS-1223 "https://simpleviewtools.atlassian.net/browse/MOS-1223")
    * Employs more specific selector for menu paper styles to avoid applying them to the associated backdrop
* Housekeeping
  * [MOS-1262](https://simpleviewtools.atlassian.net/browse/MOS-1262 "https://simpleviewtools.atlassian.net/browse/MOS-1262")
    * Removes a redundant address field from the form playground story.
  * [MOS-1138](https://simpleviewtools.atlassian.net/jira/software/c/projects/MOS/boards/149?selectedIssue=MOS-1138 "https://simpleviewtools.atlassian.net/jira/software/c/projects/MOS/boards/149?selectedIssue=MOS-1138")
    * Upgrades ESLint
    * Installs ESLint Stylistic
    * Introduces stricter ESLint rules and fixes all files to conform

## 31.0.0 - 02/06/24

### Improvements & Fixes

* **FormFieldAddress**
  * [MOS-1244](https://simpleviewtools.atlassian.net/browse/MOS-1244)
    * Amended the width of the first address field in the address edit drawer
  * [MOS-1235](https://simpleviewtools.atlassian.net/browse/MOS-1235)
    * Changes the way that the **amountPerType**/**amount*** properties work:
      * **(BREAKING CHANGE)** The **amountPerType** property will default to 1 if none of **amountBilling**/**amountShipping**/**amountPhysical** are set, otherwise it will default to 0
      * If only one type of address is allowed (not necessarily *available* , but *allowed* by the field definition), the "type" field will not be displayed to the user and the allowed type will be automatically assigned to any added or edited addresses.
  * [MOS-1208](https://simpleviewtools.atlassian.net/browse/MOS-1208)
    * Avoids sending address value down to the address draw and instead passes only the address being edited if applicable and an **onSave** handler. The address field itself then takes care of updating the state value.
      * This takes care of a dual-state bug that caused the address to be prepopulated with an existing address when trying to create a new one
    * Moves the API loader down the tree into the autocomplete field component so that the address form still renders when the API is loading. This also ensures that an address can be entered in the event of an API loading error.
* **FormFieldDate**
  * [MOS-1243](https://simpleviewtools.atlassian.net/browse/MOS-1243)
    * Updates documentation to include full minimum/maximum date input setting explanation
* **DataView**
  * [MOS-1241](https://simpleviewtools.atlassian.net/browse/MOS-1241)
    * With this change, primary and additional row actions will be hidden and disabled (while remaining in the DOM) if any action checkboxes are checked to prevent confusion regarding bulk actions.
* **FormFieldTime**
  * [MOS-1239](https://simpleviewtools.atlassian.net/browse/MOS-1239)
    * Introduces a "time" field type. This field works just like the additional time field that is integrated into the "date" field type, only it will store the time value in a string format like "14:30" or "09:45" instead of a date object.
* **useForm**
  * [MOS-1233](https://simpleviewtools.atlassian.net/browse/MOS-1233)
    * Eliminates **Form** field data race conditions by storing values in a stable reference and using that for subsequent actions

## 30.0.0 - 01/23/24

### Improvements & Fixes

* `Tooltip`
  * [MOS-1226](https://simpleviewtools.atlassian.net/browse/MOS-1226 "https://simpleviewtools.atlassian.net/browse/MOS-1226")
    * **(BREAKING CHANGE)** Rehauls the `Tooltip` component, dropping the dependency on Material's `Tooltip` and instead using the underlying `Popper` component directly. `Tooltip` **no longer wraps its anchor** , but instead takes the following required properties:

      * `anchorEl` the `HTMLElement` or `SVGElement` that the tooltip should point to.
      * `open` a `boolean` denoting whether or not the tooltip is currently rendered and visible.
      * `children`, replacing the old `text` property, which can be any `ReactNode` to be rendered within the tooltip.

      There is an optional `useTooltip` hook that can be utilised to make using the `Tooltip` component a little cleaner. It returns `anchorProps` and `tooltipProps` which can be spread into their corresponding components, causing the tooltip to appear when the anchor is hovered.
      Additionally, the following tooltips have been dropped and replaced with a native title using the `Typography` component:

      * The title that appears for each uploaded file within the file upload field.
      * The primary and secondary title for `DataView` items when using a "grid" display.
  * [MOS-1230](https://simpleviewtools.atlassian.net/browse/MOS-1230 "https://simpleviewtools.atlassian.net/browse/MOS-1230")
    * **(BREAKING CHANGE)** The help tooltip that appeared at the top of `Form` components by utilising the `tooltipInfo` has been dropped.
* `FormFieldUpload`
  * [MOS-1290](https://simpleviewtools.atlassian.net/browse/MOS-1229 "https://simpleviewtools.atlassian.net/browse/MOS-1229")
    * The title of uploaded files has been modified to comply with newly introduced rules stating truncated text should not display `Tooltip` but a native title only.
* `Field`
  * [MOS-1231](https://simpleviewtools.atlassian.net/browse/MOS-1231 "https://simpleviewtools.atlassian.net/browse/MOS-1231")
    * Brings the toggle (previously show) mechanic to form fields. The `disabled` property provided to the field definition still defaults to `false`, but can now also accept:
      * `boolean`
      * `(state: FormState) => boolean`
      * An array of any combination of the former two
* `DataView`
  * [MOS-1234](https://simpleviewtools.atlassian.net/browse/MOS-1234 "https://simpleviewtools.atlassian.net/browse/MOS-1234")
    * Adds support to `DataView` component to allow `ref` and `attr` props to be provided by the consumer. A reference to the top level `div` will be forwarded and the attributes provided will be spread onto the top level `div`.
* `Content`
  * [MOS-1240](https://simpleviewtools.atlassian.net/browse/MOS-1240 "https://simpleviewtools.atlassian.net/browse/MOS-1240")
    * Replaces `Content` row flex with grid and adds a gap between items

## 29.0.0 - 01/09/24

### Improvements & Fixes

* `Content`/`Card`
  * [MOS-1213](https://simpleviewtools.atlassian.net/browse/MOS-1213 "https://simpleviewtools.atlassian.net/browse/MOS-1213")
    * Swaps out the `div` elements used for field labels and content for `dt` and `dd`. Wraps the content component with `dl`
    * Adds `data-testid="mos:Content:field"` to each field within the `Content` component for better test locating
    * Adds `data-testid="mos:Card:item"` to each item within the `Card` component for better test locating
    * Utilises the `SubtitleText` typography component for both `Content` and `Card` components for accessibility and testing
    * Updates styling of the `SubtitleText` typography component to match the existing content/card headings
* `DataView`
  * [MOS-1218](https://simpleviewtools.atlassian.net/browse/MOS-1218 "https://simpleviewtools.atlassian.net/browse/MOS-1218")
    * Replaces `react-beautiful-dnd` with `dnd-kit` in all places that it is used:
      * DataView rows
      * DataView column sorting
    * **(BREAKING CHANGE)** Drops the `FormFieldTable` field and all associations with it.
      * Use `FormFieldMatrix` instead
* `SideNav`
  * [MOS-1228](https://simpleviewtools.atlassian.net/browse/MOS-1228 "https://simpleviewtools.atlassian.net/browse/MOS-1228")
    * Reinstates the SideNav section separator that was lost in the MOS-1175 refactor
  * [MOS-1232](https://simpleviewtools.atlassian.net/browse/MOS-1232 "https://simpleviewtools.atlassian.net/browse/MOS-1232")
    * Fixes a bug that caused the incorrect sidebar item to show as active when sections were conditionally rendered using the `show` property
* `useToggle`
  * [MOS-1207](https://simpleviewtools.atlassian.net/browse/MOS-1207 "https://simpleviewtools.atlassian.net/browse/MOS-1207")
    * Removes the evaluateShow function in favour of the `useToggle` and `useWrappedToggle` hooks. Button rows themselves now use the `useToggle` hook to filter away buttons (as far as button definitions go - button rows with children behaviour has not changed) so that components higher up the tree don't need to do so. In the odd cases where the toggle callback needs to accept parameters, the lowest level component that has access to those parameters uses the `useWrappedToggle` hook to evaluate those callbacks and filter away the buttons (or any other kind of item that extends `{ show: MosaicToggle<T> }`)

## 28.0.2 - 12/12/23

### Improvements & Fixes

* `DateViewFilterDate`
  * [MOS-1176](https://simpleviewtools.atlassian.net/browse/MOS-1176 "https://simpleviewtools.atlassian.net/browse/MOS-1176")
    * Allows the date filter popover to utilise a compact version of the Mosaic `Form` component, which takes advantage of the built in validation system
    * Introduces a `spacing` prop to the form to allow versatile implementation of `Form` with tighter paddings
    * Tightens styling to prevent overflowing of options
    * Adds internal data to support differentiation between date state and time state for `FormFieldDate`. Allows child field resets without clobbering entire state.
* `SideNav`
  * [MOS-1187](https://simpleviewtools.atlassian.net/browse/MOS-1187 "https://simpleviewtools.atlassian.net/browse/MOS-1187")
    * Enables the SideNav link on click handler to prevent the default browser action if no modifier key is used. Also adds support to pass false as an item's onNav, which will bypass any onNav functionality that may come from SideNav
* `Field`
  * [MOS-1202](https://simpleviewtools.atlassian.net/browse/MOS-1202 "https://simpleviewtools.atlassian.net/browse/MOS-1202")
    * Ensures the character counter is aligned with the far right side of the field's input or at the end of the label text, whichever extends the furthest
    * Prevent the instruction text from appearing too low in comparison to the field that is adjacent to it and have the field flex align at the top
  * [MOS-1203](https://simpleviewtools.atlassian.net/browse/MOS-1203 "https://simpleviewtools.atlassian.net/browse/MOS-1203")
    * Fix instructional text responsiveness to ensure that either the tooltip or adjacent instruction box is displayed at all times
* `FormFieldNumberTable`
  * [MOS-1215](https://simpleviewtools.atlassian.net/browse/MOS-1215 "https://simpleviewtools.atlassian.net/browse/MOS-1215")
    * Rather than throwing errors, the data items that don't correspond to a row or column provided are skipped. The data will not contribute to the row/column totals.
* `FormFieldMatrix`
  * [MOS-1219](https://simpleviewtools.atlassian.net/browse/MOS-1219 "https://simpleviewtools.atlassian.net/browse/MOS-1219")
    * Ensures that field containers grow to the available space if the given field's width is full width
  * [MOS-1220](https://simpleviewtools.atlassian.net/browse/MOS-1220 "https://simpleviewtools.atlassian.net/browse/MOS-1220")
    * Removes the horizontal margin that the dataview table has when it fall inside a matrix field context

## 28.0.1 - 11/27/23

### Fixes

* **DataViewFilter**
  * [MOS-1216](https://simpleviewtools.atlassian.net/browse/MOS-1216)
    * Updates the active filter button’s colour, since the black contained button combination has been corrected to take on a black background instead of gray

## 28.0.0 - 11/27/23

### Improvements & Fixes

* `Button`:
  * [MOS-1201](https://simpleviewtools.atlassian.net/browse/MOS-1201 "https://simpleviewtools.atlassian.net/browse/MOS-1201")
    * Refactors `Button`s styled components into one polymorphic component that supports all colour/variant combinations.
    * Splits the button component to ensure buttons without popovers/tooltips/menus don't carry unnecessary state
    * Allows for external mouse event callbacks on top of internal ones
    * Introduces "intense" and "washed" colour variations
    * Renames `StyledProps` type to `TransientProps`
  * [MOS-1118](https://simpleviewtools.atlassian.net/browse/MOS-1118 "https://simpleviewtools.atlassian.net/browse/MOS-1118")
    * Drops custom styling to allow `IconButtons` to mimic native Material UI icon buttons more closely
* `Form`
  * [MOS-1131](https://simpleviewtools.atlassian.net/browse/MOS-1131 "https://simpleviewtools.atlassian.net/browse/MOS-1131")

    * Introduction of `useFieldErrors` takes a form's dispatch and enables fields to add their own "internal" validators that can throw errors based on their own local state. This function is currently only being consumed by the date field.
    * Refactored `Col` into `ColField`.
    * Moved form's state.mounted out of state and into a stable reference instead.
    * Introduces multiple validation strategies. Each field has a sensible default `validateOn`, but field definitions can take a `validateOn` to specify when strategy to use instead:

      * `onChange` validates a field on every change in value
      * `onBlur` validates a field when the field loses focus
      * `onBlurChange` validates a field when the field loses focus, but then resets the validation when it is next changed
    * Improve initial form load performance by dispatching all initial values at once instead of dispatching for each field
    * Drops support for `field.layout` property. Use Form's `props.sections` instead.
    * (**BREAKING CHANGE** ) Drops `copyFieldToField` form action. Remove references to `copyFieldToField`
    * (**BREAKING CHANGE** ) Drops redundant `joinReducers` function. Remove references to `joinReducers`
    * (**BREAKING CHANGE** ) Renames `fieldDef.pairedFields` property with **validates**. Replace `pairedFields` with `validates`
    * Drops `jodit-react` library in favour of the underlying `jodit` library with a custom react wrapper to circumvent bugs that occured on field change
  * [MOS-1167](https://simpleviewtools.atlassian.net/browse/MOS-1167 "https://simpleviewtools.atlassian.net/browse/MOS-1167")

    * Prevent the filtering of empty columns to maintain a consistent grid layout for fields, or to provide a way to add gaps between fields.
  * [MOS-1168](https://simpleviewtools.atlassian.net/browse/MOS-1168 "https://simpleviewtools.atlassian.net/browse/MOS-1168")

    * Drop the check for an `undefined` error when setting validation messages
  * [MOS-1178](https://simpleviewtools.atlassian.net/browse/MOS-1178 "https://simpleviewtools.atlassian.net/browse/MOS-1178")

    * Registers a minimum-date validator for fields that have an `inputSettings.minDate` set in their field definition. For completeness, also introduces an `inputSettings.maxDate` that results in similar behaviour.
  * [MOS-1147](https://simpleviewtools.atlassian.net/browse/MOS-1147 "https://simpleviewtools.atlassian.net/browse/MOS-1147")

    * Replaces all occurences of the incorrectly typed "e-mail" text to "email".
* `FormFieldDate`
  * [MOS-1162](https://simpleviewtools.atlassian.net/browse/MOS-1162 "https://simpleviewtools.atlassian.net/browse/MOS-1162")
    * Introduce a new validator registration technique that allows internal validators to be correctly checked alongside field definition validators

## 27.1.0 - 11/14/23

### Improvements & Fixes

* `Typography`:
  * [MOS-1115](https://simpleviewtools.atlassian.net/browse/MOS-1115 "https://simpleviewtools.atlassian.net/browse/MOS-1115")
    * Introduces new `TitleText`, `Subtitle` and `BodyText` components. All three use the `Typography` component under the hood.
    * Adds support for `maxLines` properties
    * Adds native tooltips to all typography variations
    * Adds support for using a specified HTML tag, but each variation has a sensible default:
      * `TitleText`: `h1`
      * `Subtitle`: `h3`
      * `BodyText`: `div`
* `FormFieldDate`:
  * [MOS-1182](https://simpleviewtools.atlassian.net/browse/MOS-1182 "https://simpleviewtools.atlassian.net/browse/MOS-1182"), [MOS-1193](https://simpleviewtools.atlassian.net/browse/MOS-1193 "https://simpleviewtools.atlassian.net/browse/MOS-1193")
    * When picking a date from the datepicker, this ensures the time is always set to midnight if the time field is not enabled. If the time field is enabled, the chosen/existing time will be retained.
* `Form`:
  * [MOS-1194](https://simpleviewtools.atlassian.net/browse/MOS-1194 "https://simpleviewtools.atlassian.net/browse/MOS-1194")
    * Adjusts padding around form sections
    * Has form stretch 100% of it's container by default, but introduces a `fullHeight` prop that can be `false` to prevent that
    * Ensures field labels are semi-bold
  * [MOS-1195](https://simpleviewtools.atlassian.net/browse/MOS-1195 "https://simpleviewtools.atlassian.net/browse/MOS-1195")
    * Removed the clearing of the `touched` object when a form with valid data is submitted
  * [MOS-1196](https://simpleviewtools.atlassian.net/browse/MOS-1196 "https://simpleviewtools.atlassian.net/browse/MOS-1196")
    * Prevents returning a new state if the field's touched property matches the incoming boolean when setting field value.
  * [MOS-1198](https://simpleviewtools.atlassian.net/browse/MOS-1198 "https://simpleviewtools.atlassian.net/browse/MOS-1198")
    * Avoids dispatching an extraneous action to mark fields as touched, but instead provides the touched flag to the change reducer so that it can handle the touched flag with just one new state.
* `ButtonRow`:
  * [MOS-1194](https://simpleviewtools.atlassian.net/browse/MOS-1194 "https://simpleviewtools.atlassian.net/browse/MOS-1194")
    * Drops the gap variation and use an 8px gap between all buttons
* Housekeeping
  * [MOS-1197](https://simpleviewtools.atlassian.net/browse/MOS-1197 "https://simpleviewtools.atlassian.net/browse/MOS-1197")
    * Modifies tsconfig to ensures TS module resolution paths are transformed into relative paths at build time
  * [MOS-1199](https://simpleviewtools.atlassian.net/browse/MOS-1199 "https://simpleviewtools.atlassian.net/browse/MOS-1199")
    * Upgrades container to use Node 18

## 27.0.0 - 10/17/23

### Improvements & Fixes

* `Form`:
  * [MOS-1054](https://simpleviewtools.atlassian.net/browse/MOS-1054 "https://simpleviewtools.atlassian.net/browse/MOS-1054")
    * Makes changes to assist with automation tests:
      * Adds the `data-testid="form-header"` to the form headers container element on both desktop and mobile layouts
      * Adds the `role="toolbar"` to `ButtonRow`s
  * [MOS-1104](https://simpleviewtools.atlassian.net/browse/MOS-1104 "https://simpleviewtools.atlassian.net/browse/MOS-1104")
    * Slightly restructures `Form`'s nested components to prevent unnecessary remounts
  * [MOS-1046](https://simpleviewtools.atlassian.net/browse/MOS-1046 "https://simpleviewtools.atlassian.net/browse/MOS-1046")
    * Moves the entire `./src/forms` field structure into `./src/components/Field`. Adds support for form-specific types to be imported by consumers by targeting the `components` export; both of the following will work:
      * `import { FormFieldUpload, OnFileAdd } from "@simpleview/sv-mosaic/components/Field"`
      * `import FormFieldUpload, { OnFileAdd } from "@simpleview/sv-mosaic/components/Field/FormFieldUpload"`
  * [MOS-1175](https://simpleviewtools.atlassian.net/browse/MOS-1175 "https://simpleviewtools.atlassian.net/browse/MOS-1175")
    * Drops the `ViewContext` entirely.
      * **BREAKING CHANGE** - Remove references to this component from your application.
    * Styled Components has been upgraded from 4.3.2 to 6.0.7.
      * **BREAKING CHANGE** - `Button`s `attrs.smallText` property is now `attrs.$smallText`
    * Where appropriate, components have been migrated to use transient props when integrating styled components
    * The entire "view" form system has been dropped. The `view` property no longer exists on the `<Form />` component.
      * **BREAKING CHANGE** - Remove any `view` property for the `Form` component
    * `TopComponent` has been dropped. The integrated `Title` component which is commonly used across Mosaic components has been moved into the components directory. `components/Form/Top` replaces `TopComponent` inside the `<Form />` component
    * Form elements and layout now depend on the width of the form container itself, improving versatility.
    * Improved grid system, taking on the number of columns needed by the sections provided, or collapsing into 2 (or 1) at an appropriate container width
    * Improved instruction display, dropping dependence on DOM checks in favour of container queries of the field's column
    * Some naming and file organization improvements
    * Dead code removal
* `TitleWrapper`:
  * [MOS-1133](https://simpleviewtools.atlassian.net/browse/MOS-1133 "https://simpleviewtools.atlassian.net/browse/MOS-1133")
    * Adds a `backLabel` property to all components that support the `onBack` callback, which renders a back button in the relevant header. The components that support it are:

      * `DataView`
      * `Form`
      * `PageHeader`
      * `SummaryPageTopComponent`

      If the `backLabel` property is omitted, the label will default to "Go back". Additionally, the following integrated components use the `backLabel` property:

      * `DataView`'s column drawer back button will read "Cancel table settings"
      * `DataView`'s views drawer back button will read "Cancel saved views"
      * `DataView`'s save view drawer back button will read "Cancel save view"
      * `FormFieldAdvancedSelection`'s option drawer back button will read "Cancel advanced selection"
* `FormFieldNumberTable`
  * [MOS-1135](https://simpleviewtools.atlassian.net/browse/MOS-1135 "https://simpleviewtools.atlassian.net/browse/MOS-1135")
    * Updates `FormFieldNumberTable` types to support `ReactNode` labels, titles and subtitles.
* `Chip`
  * [MOS-1126](https://simpleviewtools.atlassian.net/browse/MOS-1126 "https://simpleviewtools.atlassian.net/browse/MOS-1126")
    * Uses the `Chip`'s label as the HTML `title` attribute and enforces a maximum width of 186px on all `Chip`s
* `FormFieldText`
  * [MOS-1119](https://simpleviewtools.atlassian.net/browse/MOS-1119 "https://simpleviewtools.atlassian.net/browse/MOS-1119")
    * Modifies the max character behaviour that the text field uses. Instead of limiting the amount of characters to the `maxCharacter` amount, the user can exceed the amount but the character counter will turn red and the field will show an error due to a new, automatically applied validator. Submission is invalid until the number of characters is reduced.
* `FormFieldPhoneSelectionDropdown`
  * [MOS-1146](https://simpleviewtools.atlassian.net/browse/MOS-1146 "https://simpleviewtools.atlassian.net/browse/MOS-1146")
    * Adds the `tabbableDropdown={false}` property to the `PhoneInput` invokation, having forked `react-phone-input-2` into `@simpleview/react-phone-input-2` with some modifications. This prevents the user from tabbing to the integrated country dropdown input.

## 26.1.0 - 09/19/23

### Improvements & Fixes

* `FormFieldMapCoordinates`:
  * [MOS-1041](https://simpleviewtools.atlassian.net/browse/MOS-1041 "https://simpleviewtools.atlassian.net/browse/MOS-1041")
    * Fixes a bug where the map marker would appear before any coordinates have been chosen
    * Fixes a bug that caused the map to be redrawn when the lat/lng fields lost focus
    * Fixes a bug that caused the reset button to set the lat/lng values to 0,0 instead of an undefined coordinate
    * Fixes a bug which caused the `initialCenter` property to be emitted as the chosen coordinate value
    * Improves UI by automatically zooming in to focus on a chosen coordinate if the current map zoom is too low
    * Deprecates `inputSettings.mapPosition`. Use `inputSettings.initialCenter` instead.
    * Deprecates the `inputSettings.address` property. Remove all usage of this property.
  * [MOS-1174](https://simpleviewtools.atlassian.net/browse/MOS-1174 "https://simpleviewtools.atlassian.net/browse/MOS-1174")
    * Fixes a bug that caused the map to break if a malformed `initialCenter` is provided, instead falling back to an initial center of 0,0.
  * [MOS-1102](https://simpleviewtools.atlassian.net/browse/MOS-1102 "https://simpleviewtools.atlassian.net/browse/MOS-1102")
    * Improves UI by introducing a remove confirmation prompt when a user attempts to remove coordinates from the field
* `FormFieldAddress`:
  * [MOS-1101](https://simpleviewtools.atlassian.net/browse/MOS-1101 "https://simpleviewtools.atlassian.net/browse/MOS-1101")
    * Improves UI by introducing a remove confirmation prompt when a user attempts to remove an address from the field
* `FormFieldUpload`:
  * [MOS-1132](https://simpleviewtools.atlassian.net/browse/MOS-1132 "https://simpleviewtools.atlassian.net/browse/MOS-1132")
    * Introduces an optional `inputSettings.accepts` property which takes an array of file extensions. Attempting to upload a file which an extension that does not fall in the list will produce an upload error for that file. This only checks the extension found in the file name; it does not validate mime types.
* `FormFieldAdvancedSelection`:
  * [MOS-1169](https://simpleviewtools.atlassian.net/browse/MOS-1169 "https://simpleviewtools.atlassian.net/browse/MOS-1169")
    * Improves UI by hiding the “Add” button when the `inputSettings.selectLimit` has been reached, if it has been provided.
* All field components:
  * [MOS-1067](https://simpleviewtools.atlassian.net/browse/MOS-1067 "https://simpleviewtools.atlassian.net/browse/MOS-1067")
    * Removes behaviour that caused a hyphen to be displayed in place of disabled fields
    * Introduce styling for all fields to better reflect what is visually expected natively from a disabled field

## 26.0.0

### Improvements & Fixes

* `Form`:
  * [MOS-1053](https://simpleviewtools.atlassian.net/browse/MOS-1053 "https://simpleviewtools.atlassian.net/browse/MOS-1053")
    * Ensures that form’s `disabled` state is initially true, changing to `false` only if there are no initial form values to fetch, or once the initial values have been resolved
    * Adds the `aria-busy="true"` attribute to the form wrapper when it is disabled
    * Adds the `role="form"` attribute to the form wrapper
    * Adds the `aria-label="{title}"` where `{title}` is the `<Form />`'s `title` property
* `FormFieldUpload`:
  * [MOS-1092](https://simpleviewtools.atlassian.net/browse/MOS-1092 "https://simpleviewtools.atlassian.net/browse/MOS-1092")
    * Introduces a download button for each uploaded file row
    * The `onUploadComplete` callback now accepts the [following properties](https://github.com/simpleviewinc/sv-mosaic/blob/9e64f1e63ab5d09d8acdcf5fc3c2a1faa048096a/src/forms/FormFieldUpload/FormFieldUploadTypes.ts#L21 "https://github.com/simpleviewinc/sv-mosaic/blob/9e64f1e63ab5d09d8acdcf5fc3c2a1faa048096a/src/forms/FormFieldUpload/FormFieldUploadTypes.ts#L21"):
      * `fileUrl` - The file row's thumbnail and title will link to this URL
      * `thumbnailUrl` - The file row's thumbnail will use this URL if provided
      * `downloadUrl` - If provided, will be used as the downloadable URL
      * `downloadStrategy` - How the file download button should behave. `"anchor"` renders an anchor tag with the "download" attribute. `"iframe"` creates an iframe and navigates to the download URL, then removes the iframe once loaded (or errored). If this property is omitted, the downloadStrategy will be "anchor" if no downloadUrl is provided, or "iframe" if it is.
      * **(BREAKING CHANGE)** `url` is no longer used. Provide the above URLs instead.
    * Drops styling that caused the file list to be displayed in a grid fashion. The items will now always stack one beneath the other
    * **(BREAKING CHANGE)** Changes the type of `UploadData.size` to `number` and correctly formats the file size in a human-readable format. Provide a `number` representing the number of bytes as `UploadData.size` instead of a string.
    * Addresses issues in styling that caused the field to break out of parent containers smaller than 600px
    * Hides the field's dropzone (including "add" button) when the file limit has been reached
    * Ensures that even if a file has an error status, it counts towards the upload limit
    * Updated the text for the upload limit snackbar to "Upload limited to only X files"
  * [MOS-1088](https://simpleviewtools.atlassian.net/browse/MOS-1088 "https://simpleviewtools.atlassian.net/browse/MOS-1088") **(BREAKING CHANGE)** Adds support for throwing an `Error` inside the `onFileAdd` callback. This replaces the nested `onError` callback, which has been deprecated.
* `FormFieldPhoneSelectionDropdown`:
  * [MOS-1124](https://simpleviewtools.atlassian.net/browse/MOS-1124 "https://simpleviewtools.atlassian.net/browse/MOS-1124") Adds validation to ensure phone numbers with a US country code (+1) are exactly 10 digits long, excluding the country code.
* `Core`:
  * [MOS-1087](https://simpleviewtools.atlassian.net/browse/MOS-1087 "https://simpleviewtools.atlassian.net/browse/MOS-1087") Exposes the `theme` index to consumers

## 25.2.1

### Improvements & Fixes

* `FormFieldAddress`:
  * [MOS-1121](https://simpleviewtools.atlassian.net/browse/MOS-1121) Trims each part of the address when the address drawer is saved to remove any leading or traling spaces.
  * [MOS-1125](https://simpleviewtools.atlassian.net/browse/MOS-1125) Amends address field styling to improve user experience
* `FormFieldDate`:
  * [MOS-1127](https://simpleviewtools.atlassian.net/browse/MOS-1127) Adds support to provide a custom minimum date to datepickers allowing users to select a date prior to 1900 (which is the default minimum date)
* `Field`:
  * [MOS-1066](https://simpleviewtools.atlassian.net/browse/MOS-1066) Fixes a bug that caused `getElementById` console warnings if no field name was provided.
* `FormFieldUpload`
  * [MOS-1120](https://simpleviewtools.atlassian.net/browse/MOS-1120) Introduces a `busy` state on the form's state that can be utilised by this and other field components. Specifically in this case, it prevents the user from submitting the form whilst an upload is in progress, instead alerting them with a `Snackbar`
* `FormFieldText`:
  * [MOS-1099](https://simpleviewtools.atlassian.net/browse/MOS-1099) Fixes the padding on text fields to align with the Figma design
* `DataView`:
  * [MOS-1065](https://simpleviewtools.atlassian.net/browse/MOS-1065https:/) Fixes a bug that caused pre-applied filters to be reordered by the filter popup

## 25.2.0

### Improvements & Fixes

* `LeftNav`:

  * [MOS-1059](https://simpleviewtools.atlassian.net/browse/MOS-1062 "https://simpleviewtools.atlassian.net/browse/MOS-1062") Replaces the `div` wrapper with a semantically correct `nav` element and provies an `aria-label="Main"` attribute to said element for easier targetting during testing
* `FormFieldDate`:

  * [MOS-1059](https://simpleviewtools.atlassian.net/browse/MOS-1059 "https://simpleviewtools.atlassian.net/browse/MOS-1059") Fixed a bug where the field would emit an incorrect date. The date emitted is now representative of the browser’s timezone.
  * [MOS-1100](https://simpleviewtools.atlassian.net/browse/MOS-1100 "https://simpleviewtools.atlassian.net/browse/MOS-1100") Improved validation to prevent the user entering a date that, represented in a MM/DD/YYYY format, would be invalid. An example is “13/13/2023”. A more informative message is provided to the user when an invalid date is entered.
  * For required `FormFieldDate` fields with the time field enabled, a more informative message is displayed after entering a date, prompting the user to enter a time as well.
  * For non-required `FormFieldDate` fields with the time field enabled, if the time field is blank, it will be populated with 12:00 am (or the last valid time value that was used) automatically once the date field is changed - this already happened in state, but the input rendered on screen didn’t reflect it.
* `FormFieldMatrix`:

  * [MOS-1073](https://simpleviewtools.atlassian.net/browse/MOS-1073 "https://simpleviewtools.atlassian.net/browse/MOS-1073") Removed the border and padding surrounding the integrated `DataView`
* `ButtonRow`:

  * [MOS-1142](https://simpleviewtools.atlassian.net/browse/MOS-1142 "https://simpleviewtools.atlassian.net/browse/MOS-1142") Fixed a bug where passing an incorrect prop type to a styled component would throw an error
* `formActions.validateField`

  * [MOS-1148](https://simpleviewtools.atlassian.net/browse/MOS-1148 "https://simpleviewtools.atlassian.net/browse/MOS-1148") Fixed a bug where a reference to the `fieldMap` on `extraArgs` would throw an error if the given field doesn’t exist in the map

## 25.1.1 - 07/27/23

### Improvements & Fixes

* `useScrollSpy`:
  * Fixes a bug that caused scroll glitching in Chrome when `setActiveSection` was invoked. Drops `scrollTo` in favour of new implementation.
* Split `Form` stories into individual files to improve performance in Storybook “docs” tab.

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
* `Section` titles have been updated to use h2 (previously using h1).
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
