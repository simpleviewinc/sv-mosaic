export { default } from "./FilterDate";
export * from "./FilterDateTypes";

import localeData from "./FilterDateLocales.json";
import { addCoreResourceBundle } from "../../i18n";

addCoreResourceBundle({
	prefix : "FilterDate",
	bundle : localeData
})
