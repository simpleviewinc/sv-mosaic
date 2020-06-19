import { useMemo } from "react";
import { default as i18next } from "i18next";
import { i18nDefaults } from "../i18n";

interface UseMosaicSettingsProps {
	i18nNamespace?: string
	i18nInitialLocale?: string
}

export default function useMosaicSettings({ i18nNamespace = "app", i18nInitialLocale = "en" }: UseMosaicSettingsProps = {}) {
	const ns = useMemo(() => [i18nNamespace, "mosaic"], [i18nNamespace]);

	const i18n = useMemo(() => {
		const i18n = i18next.createInstance();
		i18n.init({
			...i18nDefaults,
			lng: i18nInitialLocale,
			ns,
			defaultNS: i18nNamespace
		});
	
		return i18n;
	}, [i18nNamespace, i18nInitialLocale, ns]);
	
	const returnObj = useMemo(() => {
		return {
			i18n
		};
	}, [i18n]);
	
	return returnObj;
}