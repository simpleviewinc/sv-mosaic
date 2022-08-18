import { default as i18next } from "i18next";
import common from "./common.json";
export function addResourceBundle({ prefix, bundle, namespace }) {
    for (const [lang, data] of Object.entries(bundle)) {
        defaulti18n.addResourceBundle(lang, namespace, { [prefix]: data }, true, false);
    }
}
/**
 * Adds a core resource bundle exposed when using the default i18n or when using the useMosaicSettings() context variant.
 */
export function addCoreResourceBundle({ prefix, bundle }) {
    addResourceBundle({ prefix, bundle, namespace: "mosaic" });
}
export const defaulti18n = i18next.createInstance();
defaulti18n.init({
    resources: {},
    lng: "en",
    fallbackLng: "en"
});
addCoreResourceBundle({
    prefix: "common",
    bundle: common
});
