export { default } from "./DataViewFilterMultiselect";
export { default as DataViewFilterMultiselectDropdownContent } from "./DataViewFilterMultiselectDropdownContent";
export * from "./DataViewFilterMultiselectTypes";

import localeData from "../DataView/DataViewLocales.json";
import { addCoreResourceBundle } from "../../i18n";

addCoreResourceBundle({
	prefix : "DataView",
	bundle : localeData,
});
