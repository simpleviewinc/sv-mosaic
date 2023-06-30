import { MosaicShow } from "@root/types";

function evaluateShow<T>(show?: MosaicShow<T>, params?: T): boolean {
	if (show === undefined) {
		return true;
	}

	if (Array.isArray(show)) {
		return show.every(item => (typeof item === "function" ? item(params) : item));
	}

	if (typeof show === "function") {
		return show(params);
	}

	return show;
}

export default evaluateShow;
