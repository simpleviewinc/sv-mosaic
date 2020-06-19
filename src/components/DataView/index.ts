export { default } from "./DataView";
export * from "./DataViewTypes";


import * as localeData from "./DataViewLocales.json";
import { addPack } from "../../i18n";

addPack({
	namespace : "mosaic",
	prefix : "DataView",
	pack : localeData
});