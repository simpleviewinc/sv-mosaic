import { useMemo } from "react";
import { defaulti18n } from "../i18n";
import { i18n } from "i18next";

interface UseMosaicSettingsProps {
	i18nNamespace?: string;
	i18nInitialLocale?: string;
}

interface MosaicSettings {
	i18n : i18n;
}

export default function useMosaicSettings({
	i18nNamespace = "app",
	i18nInitialLocale = "en",
}: UseMosaicSettingsProps = {}): MosaicSettings {
	const ns = useMemo(() => [i18nNamespace, "mosaic"], []);

	// due to glitches in react-i18next we cannot spin a new instance when deps change, it cause all sorts of systems to get out of whack
	const i18n = useMemo(() => {
		const i18n = defaulti18n.cloneInstance({
			lng : i18nInitialLocale,
			ns,
			defaultNS : i18nNamespace,
		});

		return i18n;
	}, []);

	const returnObj = useMemo(() => {
		return {
			i18n,
		};
	}, [i18n]);

	return returnObj;
}
