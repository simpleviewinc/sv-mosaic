class JSONDB {
	constructor(data, { relationships } = {}) {
		this.data = data;
		this.relationships = relationships;
	}
	
	async find(query) {
		let data = this.data.slice();
		
		if (query.filter !== undefined) {
			data = filterData(data, query.filter);
		}
		
		if (query.sort !== undefined) {
			const sort = query.sort;
			data.sort((a, b) => sortArr(a[sort.name], b[sort.name], sort.dir));
		}
		
		if (query.skip !== undefined) {
			data = data.slice(query.skip);
		}
		
		if (query.limit !== undefined) {
			data = data.slice(0, query.limit);
		}
		
		if (this.relationships !== undefined) {
			for(let [key, relationship] of Object.entries(this.relationships)) {
				for(let [key, row] of Object.entries(data)) {
					const ids = row[relationship.left_key];
					if (ids === undefined) { continue; }
					
					const items = await relationship.api.find({
						filter : {
							[relationship.right_key] : {
								$in : ids
							}
						}
					});
					
					row[relationship.key] = items;
				}
			}
		}
		
		return data;
	}
	
	async count(query) {
		let data = this.data.slice();
		
		if (query.filter !== undefined) {
			data = filterData(data, query.filter);
		}
		
		return data.length;
	}
}

function filterData(data, filter) {
	let newData = data;
	
	for(let [key, val] of Object.entries(filter)) {
		if (val.$in !== undefined) {
			newData = newData.filter(row => val.$in.includes(row[key]));
		} else if (val.$ne !== undefined) {
			newData = newData.filter(row => row[key] !== val.$ne);
		} else if (val instanceof RegExp) {
			newData = newData.filter(row => val.test(row[key]));
		} else if (typeof val === "string") {
			newData = newData.filter(row => row[key] === val);
		}
	}
	
	return newData;
}

function sortArr(a, b, dir) {
	const multiplier = dir === "asc" ? 1 : -1;
	
	if (a instanceof Date) {
		return (a - b) * multiplier;
	}
	
	if (typeof a === "string") {
		return a.localeCompare(b) * multiplier;
	}
	
	if (a > b) {
		return 1 * multiplier;
	} else if (b < a) {
		return -1 * multiplier;
	} else {
		return 0;
	}
}

export default JSONDB;