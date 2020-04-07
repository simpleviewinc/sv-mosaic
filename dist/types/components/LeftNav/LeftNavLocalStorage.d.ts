import { LeftNavSettingsStorage } from "./LeftNavTypes";
interface Props {
    key?: string;
}
export default class LeftNavLocalStorage implements LeftNavSettingsStorage {
    private key;
    constructor(props?: Props);
    get(): any;
    set(settings: any): void;
}
export {};
