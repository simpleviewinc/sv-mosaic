import { default as i18next } from "i18next";

import { MosaicObject } from "../types";
import * as common from "./common.json";

interface AddCoreResourceBundleProps {
	prefix: string
	bundle: {
		[lang: string]: MosaicObject
	}
}

/**
 * Adds a core resource bundle exposed when using the default i18n or when using the useMosaicSettings() context variant.
 */
export function addCoreResourceBundle({ prefix, bundle }: AddCoreResourceBundleProps) {
	for(let [lang, data] of Object.entries(bundle)) {
		defaulti18n.addResourceBundle(lang, "mosaic", { [prefix] : data }, true, false);
	}
}

export const defaulti18n = i18next.createInstance();
defaulti18n.init({
	resources : {},
	lng : "en",
	fallbackLng : "en"
});

addCoreResourceBundle({
	prefix : "common",
	bundle : common
});