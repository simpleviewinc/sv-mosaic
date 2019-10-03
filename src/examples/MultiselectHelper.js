class MultiselectHelper {
	constructor({ api, labelColumn, valueColumn, sortColumn }) {
		this.api = api;
		this.labelColumn = labelColumn;
		this.valueColumn = valueColumn;
		this.sortColumn = sortColumn;
		
		this.getOptions = getOptions.bind(this);
		this.getSelected = getSelected.bind(this);
	}
	mapOptions(val) {
		return ({ label : val[this.labelColumn], value : val[this.valueColumn] });
	}
}

async function getOptions(filter) {
	const query = {
		limit : filter.limit + 1,
		skip : filter.skip,
		sort : { name : this.sortColumn, dir : "asc" }
	};
	
	if (filter.keyword !== undefined) {
		query.filter = {
			[this.labelColumn] : new RegExp(filter.keyword, "i")
		}
	}
	
	const results = await this.api.find(query);
	
	return {
		docs : results.slice(0, filter.limit).map(val => this.mapOptions(val)),
		hasMore : results.length > filter.limit
	};
}

async function getSelected(ids) {
	const results = await this.api.find({
		filter : { [this.valueColumn] : { $in : ids } },
		sort : { name : this.sortColumn, dir : "asc" }
	});
	
	return results.map(val => this.mapOptions(val));
}

export default MultiselectHelper;