import { useEffect, useState } from "react";
import type { MosaicLabelValue } from "@root/types";

interface UseOptionsParams {
	options: MosaicLabelValue[] | (() => Promise<MosaicLabelValue[]>);
}

interface UseOptionsResult {
	options: MosaicLabelValue[];
	type: "async" | "sync" | "none";
	loading?: boolean;
}

function useOptions({ options }: UseOptionsParams): UseOptionsResult {
	const [loading, setLoading] = useState(false);
	const [asyncOptions, setAsyncOptions] = useState<undefined | MosaicLabelValue[]>(undefined);
	const syncOptions = Array.isArray(options) ? options : undefined;

	useEffect(() => {
		async function fetchOptions() {
			if (typeof options !== "function") {
				return;
			}

			setAsyncOptions([]);
			setLoading(true);
			const result = await options();
			setAsyncOptions(result);
			setLoading(false);
		}

		fetchOptions();
	}, [options]);

	if (syncOptions) {
		return { options: syncOptions, type: "sync" };
	}

	if (asyncOptions) {
		return { options: asyncOptions, type: "async", loading };
	}

	return { options: [], type: "none" };
}

export default useOptions;
