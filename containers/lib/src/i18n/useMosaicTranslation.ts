import { useContext } from "react";
import { i18n } from "i18next";
import { useTranslation } from "react-i18next";

import MosaicContext from "../components/MosaicContext";

interface MosaicTranslation {
	i18n: i18n;
	t : (key: string) => string;
}

export default function useMosaicTranslation(): MosaicTranslation {
	const context = useContext(MosaicContext);
	const { t, i18n } = useTranslation(context.i18n.options.ns[0], {
		i18n: context.i18n,
	});

	return {
		t,
		i18n,
	};
}
