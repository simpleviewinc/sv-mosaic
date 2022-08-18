import { i18n } from "i18next";
interface MosaicTranslation {
    i18n: i18n;
    t: (key: string) => string;
}
export default function useMosaicTranslation(): MosaicTranslation;
export {};
