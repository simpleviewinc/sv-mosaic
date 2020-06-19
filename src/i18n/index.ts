import { default as i18next } from "i18next";

import { MosaicObject } from "../types";
import * as en from "./resources/en.json";

interface AddPack {
	namespace: string
	prefix: string
	pack: MosaicObject
}

export function addPack({ namespace, prefix, pack }: AddPack) {
	for(let [lang, val] of Object.entries(pack)) {
		i18nDefaults.resources[lang] = i18nDefaults.resources[lang] || {};
		i18nDefaults.resources[lang][namespace] = i18nDefaults.resources[lang][namespace] || {};
		i18nDefaults.resources[lang][namespace][prefix] = val;
	}
}

interface I18nDefaults {
	resources: MosaicObject
	lng: string
	fallbackLng: string
}

export const i18nDefaults: I18nDefaults = {
	resources : {
		en : {}
	},
	lng : "en",
	fallbackLng : "en"
}

i18nDefaults.resources.en.mosaic = en;

export const defaulti18n = i18next.createInstance();
defaulti18n.init(i18nDefaults);