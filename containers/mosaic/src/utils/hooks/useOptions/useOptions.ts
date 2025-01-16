import { useEffect, useState } from "react";
import type { MosaicLabelValue } from "@root/types";

interface UseOptionsParams {
	from: MosaicLabelValue[] | (() => Promise<MosaicLabelValue[]>);
	add?: MosaicLabelValue[];
}

interface UseOptionsResult {
	options: MosaicLabelValue[];
	type: "async" | "sync" | "none";
	loading?: boolean;
}

function applyAdditional(options: MosaicLabelValue[], add: MosaicLabelValue[]) {
	return [
		...options,
		...add.filter(addItem => !options.some(option => option.value === addItem.value)),
	];
}

function useOptions({ from, add = [] }: UseOptionsParams): UseOptionsResult {
	const [loading, setLoading] = useState(false);
	const [asyncOptions, setAsyncOptions] = useState<undefined | MosaicLabelValue[]>(undefined);
	const syncOptions = Array.isArray(from) ? from : undefined;

	useEffect(() => {
		async function fetchOptions() {
			if (typeof from !== "function") {
				return;
			}

			setAsyncOptions([]);
			setLoading(true);
			const result = await from();
			setAsyncOptions(result);
			setLoading(false);
		}

		fetchOptions();
	}, [from]);

	if (syncOptions) {
		return { options: applyAdditional(syncOptions, add), type: "sync" };
	}

	if (asyncOptions) {
		return { options: applyAdditional(asyncOptions, add), type: "async", loading };
	}

	return { options: applyAdditional([], add), type: "none" };
}

export default useOptions;
