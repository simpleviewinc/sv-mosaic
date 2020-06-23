import { MosaicObject } from "../types";
interface AddCoreResourceBundleProps {
    prefix: string;
    bundle: {
        [lang: string]: MosaicObject;
    };
}
/**
 * Adds a core resource bundle exposed when using the default i18n or when using the useMosaicSettings() context variant.
 */
export declare function addCoreResourceBundle({ prefix, bundle }: AddCoreResourceBundleProps): void;
export declare const defaulti18n: import("i18next").i18n;
export {};
