import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { UseAdvancedOptionsParams, UseAdvancedOptionsResult, UseAdvancedOptionsState } from "./UseAdvancedOptionsTypes";
// import type { MosaicLabelValue } from "@root/types";

interface FetchRef {
	timer?: undefined | ReturnType<typeof setTimeout>;
	cancelled: boolean;
}

function useAdvancedOptions({
	getOptions,
	limit: providedLimit,
	onCreateNew,
}: UseAdvancedOptionsParams): UseAdvancedOptionsResult {
	const limit = Math.abs(providedLimit) || 25;
	const [state, setState] = useState<UseAdvancedOptionsState>({
		hasMore: false,
		isLoading: false,
		options: [],
		skip: 0,
		keyword: undefined,
	});

	/**
	 * By keeping a cache of the first set of options that are fetched with no keyword query,
	 * we can safely assume that if the keyword query is cleared, these options can be re-used,
	 * making things snappy for the user rather than waiting for another empty-query fetch.
	 */
	const noQueryCache = useRef<Pick<UseAdvancedOptionsState, "options">>({
		options: [],
	});
	/**
	 * Keep a list of debounced fetches so that we can cancel them
	 */
	const fetchRefs = useRef<{ index: number; map: Map<number, FetchRef> }>({
		index: 0,
		map: new Map(),
	});

	const fetchOptions = useCallback(({
		limit,
		skip = 0,
		keyword,
		append,
		debounced,
	}: {
		limit: number;
		skip?: number;
		keyword?: string;
		append?: boolean;
		debounced?: boolean;
	}) => {
		const fetchRefIndex = fetchRefs.current.index;
		fetchRefs.current.index++;

		fetchRefs.current.map.forEach((fetchRef) => {
			fetchRef.cancelled = true;
			fetchRef.timer && clearTimeout(fetchRef.timer);
		});

		const run = async () => {
			setState((state) => ({
				...state,
				isLoading: true,
				hasMore: false,
				...(!keyword && !append ? noQueryCache.current : {}),
			}));

			const {
				docs: options,
				hasMore,
			} = await getOptions({ limit, skip, keyword });

			const fetchRef = fetchRefs.current.map.get(fetchRefIndex);

			if (!fetchRef || fetchRef.cancelled) {
				/**
				 * The fetch was cancelled whilst the options were being fetched.
				 * Don't update state.
				 */
				fetchRefs.current.map.delete(fetchRefIndex);
				return;
			}

			if (!keyword && !append) {
				noQueryCache.current = {
					options,
				};
			}

			setState((state) => {
				return {
					...state,
					options: append ? [...state.options, ...options] : options,
					hasMore: hasMore === true,
					skip,
					isLoading: false,
				};
			});

			fetchRefs.current.map.clear();
		};

		if (debounced) {
			fetchRefs.current.map.set(fetchRefIndex, {
				timer: setTimeout(() => run(), 200),
				cancelled: false,
			});
		} else {
			fetchRefs.current.map.set(fetchRefIndex, {
				cancelled: false,
			});

			run();
		}
	}, [getOptions]);

	useEffect(() => {
		fetchOptions({ limit });
	}, [fetchOptions, limit]);

	const loadMore = () => fetchOptions({
		limit,
		skip: state.skip + limit,
		keyword: state.keyword,
		append: true,
	});

	const debouncedSetKeyword = (keyword: string) => {
		setState((state) => ({ ...state, hasMore: false }));

		fetchOptions({
			limit,
			keyword: keyword || undefined,
			debounced: true,
		});
	};

	const createNewOption = useMemo<undefined | UseAdvancedOptionsResult["createNewOption"]>(() => {
		if (!onCreateNew) {
			return;
		}

		return async (keyword: string) => {
			const newOption = await onCreateNew(keyword);

			setState((state) => ({
				...state,
				options : [...state.options, newOption],
			}));

			return newOption;
		};
	}, [onCreateNew]);

	const reset = () => setState((state) => ({ ...state, keyword: undefined }));

	return { state, reset, loadMore, debouncedSetKeyword, createNewOption };
}

export default useAdvancedOptions;
