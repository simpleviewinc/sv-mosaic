export { default } from "./DataViewFilterDate";
export * from "./DataViewFilterDateTypes";

import localeData from "./DataViewFilterDateLocales.json";
import { addCoreResourceBundle } from "../../i18n";

addCoreResourceBundle({
	prefix : "DataViewFilterDate",
	bundle : localeData,
});
