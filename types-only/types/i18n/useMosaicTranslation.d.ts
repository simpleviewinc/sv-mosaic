import { i18n, TFunction } from "i18next";
interface MosaicTranslation {
    i18n: i18n;
    t: TFunction;
}
export default function useMosaicTranslation(): MosaicTranslation;
export {};
