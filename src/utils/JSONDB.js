class JSONDB {
	constructor(data) {
		this.data = data;
	}
	
	async find(query) {
		let data = this.data.slice();
		
		if (query.filter !== undefined) {
			for(let [key, val] of Object.entries(query.filter)) {
				if (val.$in !== undefined) {
					data = data.filter(row => val.$in.includes(row[key]));
					continue;
				} else if (val instanceof RegExp) {
					data = data.filter(row => val.test(row[key]));
				}
			}
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
		
		return data;
	}
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