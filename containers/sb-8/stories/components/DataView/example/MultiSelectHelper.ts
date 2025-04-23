import type JSONDB from "../JSONDB";
import type { MosaicLabelValue } from "#mosaic/types";

export interface MultiSelectHelperGetOptionsArgs {
	limit: number;
	skip: number;
	keyword?: string;
}

export interface MultiSelectHelperGetOptionsReturn {
	docs: MosaicLabelValue[];
	hasMore: boolean;
}

export interface MultiSelectHelperArgs {
	api: JSONDB;
	labelColumn: string;
	valueColumn: string;
	sortColumn: string;
}

class MultiSelectHelper {
	api: JSONDB;
	labelColumn: string;
	valueColumn: string;
	sortColumn: string;
	constructor({ api, labelColumn, valueColumn, sortColumn }: MultiSelectHelperArgs) {
		this.api = api;
		this.labelColumn = labelColumn;
		this.valueColumn = valueColumn;
		this.sortColumn = sortColumn;
	}
	mapOptions(val: Record<string, any>): MosaicLabelValue {
		return ({ label : val[this.labelColumn], value : val[this.valueColumn] });
	}
	async getOptions(filter: MultiSelectHelperGetOptionsArgs): Promise<MultiSelectHelperGetOptionsReturn> {
		const query = {
			limit : filter.limit + 1,
			skip : filter.skip,
			sort : { name : this.sortColumn, dir : "asc" },
			filter : undefined,
		};

		if (filter.keyword !== undefined) {
			query.filter = {
				[this.labelColumn] : new RegExp(filter.keyword, "i"),
			};
		}

		const results = await this.api.find(query);

		return {
			docs : results.slice(0, filter.limit).map(val => this.mapOptions(val)),
			hasMore : results.length > filter.limit,
		};
	}
	async getSelected(ids: string[]): Promise<MosaicLabelValue[]> {
		const results = await this.api.find({
			filter : { [this.valueColumn] : { $in : ids } },
			sort : { name : this.sortColumn, dir : "asc" },
		});

		return results.length >= 1
			? results.map(val => this.mapOptions(val))
			: [];
	}
}

export default MultiSelectHelper;
