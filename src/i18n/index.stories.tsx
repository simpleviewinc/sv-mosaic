import * as React from "react";
import { useEffect } from "react";
import { select, withKnobs } from "@storybook/addon-knobs";

import {
	useMosaicTranslation,
	useMosaicSettings,
	MosaicContext,
	P
} from "../";

function InnerComponent() {
	const { t } = useMosaicTranslation();

	return (
		<div>
			<P>mosaic:common.save: {t("mosaic:common.save")}</P>
			<P>app:TestPrefix.key: {t("app:TestPrefix.key")}</P>
			<P>app:TestPrefix.english_only {t("app:TestPrefix.english_only")}</P>
			<P>app:TestPrefix.spanish_only {t("app:TestPrefix.spanish_only")}</P>
			<P>app:TestPrefix.bogus: {t("app:TestPrefix.bogus")}</P>
		</div>
	)
}

export default {
	title : "Utils|i18n",
	decorators : [withKnobs]
}

const localeData = {
	en : {
		TestPrefix : {
			key: "In english",
			english_only: "English Only"
		}
	},
	es : {
		TestPrefix : {
			key : "In spanish",
			spanish_only : "Spanish Only"
		}
	}
}

export function example() {
	const locale = select("locale", { en : "en", es : "es", cimode : "cimode" }, "en");

	const mosaicSettings = useMosaicSettings();
	mosaicSettings.i18n.addResourceBundle("en", "app", localeData.en, true, false);
	mosaicSettings.i18n.addResourceBundle("es", "app", localeData.es, true, false);

	useEffect(() => {
		if (mosaicSettings.i18n.language !== locale) {
			mosaicSettings.i18n.changeLanguage(locale);
		}
	}, [locale]);

	return (
		<MosaicContext.Provider value={mosaicSettings}>
			<P>
				language: {locale}<br/>
				fallbackLng: {mosaicSettings.i18n.options.fallbackLng}
			</P>
			<hr/>
			<InnerComponent/>
		</MosaicContext.Provider>
	)
}