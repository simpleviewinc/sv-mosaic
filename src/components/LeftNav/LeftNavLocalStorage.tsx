import { LeftNavSettingsStorage, LeftNavSettings } from "./LeftNavTypes";

interface Props {
	key?: string
}

export default class LeftNavLocalStorage implements LeftNavSettingsStorage {
	private key: string
	constructor(props: Props = {}) {
		this.key = props.key ?? "sv-mosaic-left-nav-settings";
	}
	get() {
		const stored = localStorage.getItem(this.key);
		if (!stored) {
			return;
		}

		return JSON.parse(stored);
	}
	set(settings) {
		localStorage.setItem(this.key, JSON.stringify(settings));
	}
}