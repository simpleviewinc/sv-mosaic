import { useContext } from "react";
import { useTranslation } from "react-i18next";
import MosaicContext from "../components/MosaicContext";

export default function useMosaicTranslation() {
	const context = useContext(MosaicContext);
	const { t, i18n } = useTranslation(context.i18n.options.ns[0], {
		i18n: context.i18n
	});

	return {
		t,
		i18n
	}
}
