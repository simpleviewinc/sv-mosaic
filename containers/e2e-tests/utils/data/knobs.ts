export const commonKnobs = {
	knobShowState: "showState:",
	knobRequired: "required:",
	knobDisabled: "disabled:",
	knobShowOptions:"showOptions:",
	knobOnBack: "showBack:",
	knobParentHeight: "parentHeight:",
	knobShowTime: "showTime:",
	knobAdditionalActions: "additionalActions:",
};

export const cardKnobs = {
	knobBottomActions: "quantityOfBottomActions:",
	knobTopActions: "quantityOfTopActions:",
	knobVariant: "variant:",
};

export const playgroundKnobs = {
	knobDefaultValues: "defaultValues:",
	knobGetFormValues: "getFormValues:",
	knobPrepopulate: "prepopulate:",
	optionHasDefaultValues: "Has%20Defaults",
	optionNone: "None",
	optionReturnData: "Returns%20Data",
	optionReturnUndefined: "Returns%20Undefined",
	knobCollapseSections: "collapseSections:",
};

export const uploadKnobs = {
	knobUploadLimit: "limit:",
	knobTriggerErrorsWhenLoading: "error:",
	knobPrepop: "prepop:",
};

export const dataviewKnobs = {
	knobBulkAllActions: "bulkAllActions:",
	knobBulkActions: "bulkActions:",
	knobPrimaryActions: "primaryActions:",
	knobSecondaryActions: "secondaryActions:",
	knobComparison: "comparison:",
	knobPreloadActiveFilters: "preloadActiveFilters:",
	knobDefaultComparison: "comparisonDefault:",
};

export const buttonKnobs = {
	knobColor: "buttonColor:",
	knobPopover: "popover:",
	knobPopoverEvent: "popoverEvent:",
	knobSize: "size:",
	knobVariant: "buttonVariant:",
	knobHRef: "href:",
	knobFullWidth: "fullWidth:",
	knobMenuContent: "showMenuContent:",
	knobMenuItem: "menuItems:",
	knobmIconColor: "iconColor:",
	knobShowIcon: "showIcon:",
	knobShow: "show:",
	knobTypeOfLabel: "label:",
};

export const pageHeaderKnobs = {
	knobOnBack: "showBack:",
	knobButtons: "showButtons:",
};

export const formFieldNumberTableKnobs = {
	knobDisplayRowSum: "displayRowsSums:",
	knobDisplayColumnsSum: "displayColumnsSums:",
	knobNumberFormatOptions: "formatOptions:",
};

export const contentKnobs = {
	knobProvideColumnsLarge: "provideColumns:!true;columns:lg",
	knobProvideColumnsCustom: "provideColumns:!true;columns:custom;columnBreakpoints.lg:4",
	knobSingleField: [...Array(13)].map((_, i) => `sections[${i + 1}]:!undefined`),
	knobTwoColumns: ["sections[0][1]:tags", ...[...Array(13)].map((_, i) => `sections[${i + 1}]:!undefined`)],
	knobFourColumns: ["sections[0][1]:tags;sections[0][2]:tags;sections[0][3]:tags", ...[...Array(13)].map((_, i) => `sections[${i + 1}]:!undefined`)],
};
