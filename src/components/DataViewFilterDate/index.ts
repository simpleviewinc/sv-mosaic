export { default } from "./DataViewFilterDate";
export * from "./DataViewFilterDateTypes";

import * as localeData from "./DataViewFilterDateLocales.json";
import { addCoreResourceBundle } from "../../i18n";

addCoreResourceBundle({
	prefix : "DataViewFilterDate",
	bundle : localeData
})