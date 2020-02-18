class SingleSelectHelper {
	constructor({ api, labelColumn, valueColumn, sortColumn }) {
		this.api = api;
		this.labelColumn = labelColumn;
		this.valueColumn = valueColumn;
		this.sortColumn = sortColumn;

		this.getOptions = getOptions.bind(this);
	}
	mapOptions(val) {
		return ({ label: val[this.labelColumn], value: val[this.valueColumn] });
	}
}

async function getOptions(filter) {
	//filter not part of MVP but left for future filtering
	const query = {
		sort: { name: this.sortColumn, dir: "asc" }
	};

	const results = await this.api.find(query);
	const mappedResults = results.map(val => this.mapOptions(val));
	return mappedResults;
}

export default SingleSelectHelper;