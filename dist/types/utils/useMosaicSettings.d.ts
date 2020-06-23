interface UseMosaicSettingsProps {
    i18nNamespace?: string;
    i18nInitialLocale?: string;
}
export default function useMosaicSettings({ i18nNamespace, i18nInitialLocale, }?: UseMosaicSettingsProps): {
    i18n: import("i18next").i18n;
};
export {};
