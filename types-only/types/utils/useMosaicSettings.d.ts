import { i18n } from "i18next";
interface UseMosaicSettingsProps {
    i18nNamespace?: string;
    i18nInitialLocale?: string;
}
interface MosaicSettings {
    i18n: i18n;
}
export default function useMosaicSettings({ i18nNamespace, i18nInitialLocale, }?: UseMosaicSettingsProps): MosaicSettings;
export {};
