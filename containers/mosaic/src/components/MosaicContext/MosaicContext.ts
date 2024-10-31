import { createContext } from "react";
import { defaulti18n } from "../../i18n/internal";
import type { i18n } from "i18next";

export interface MosaicContextProps {
	i18n: i18n;
}

export default createContext<MosaicContextProps>({
	i18n: defaulti18n,
});
