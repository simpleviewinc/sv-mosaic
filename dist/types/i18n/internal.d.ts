import { MosaicObject } from "../types";
interface AddResourceBundleProps {
    namespace: string;
    prefix: string;
    bundle: {
        [lang: string]: MosaicObject;
    };
}
declare type AddCoreResourceBundle = Omit<AddResourceBundleProps, "namespace">;
export declare function addResourceBundle({ prefix, bundle, namespace }: AddResourceBundleProps): void;
/**
 * Adds a core resource bundle exposed when using the default i18n or when using the useMosaicSettings() context variant.
 */
export declare function addCoreResourceBundle({ prefix, bundle }: AddCoreResourceBundle): void;
export declare const defaulti18n: import("i18next").i18n;
export {};
