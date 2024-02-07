import intersection from "lodash/intersection";
import isEqual from "lodash/isEqual";
import sortBy from "lodash/sortBy";

interface Relationship {
	api: JSONDB
	key: string
	left_key: string
	right_key: string
}

class JSONDB {
	data: { [key: string]: any }[];
	relationships: Relationship[];
	constructor(data, { relationships }: { relationships?: Relationship[] } = {}) {
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
			for (const relationship of this.relationships) {
				for (const row of data) {
					const ids = row[relationship.left_key];
					if (ids === undefined) { continue; }

					const items = await relationship.api.find({
						filter : {
							[relationship.right_key] : {
								$in : ids,
							},
						},
					});

					row[relationship.key] = items;
				}
			}
		}

		if (query.reorderedList !== undefined) {
			data = query.reorderedList.map(reorderedElement => data.find(element => element.id === reorderedElement));
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

	async setData(data) {
		this.data = data;
	}

	async getData() {
		return this.data;
	}
}

interface FilterKey {
	$in: unknown[]
	$not_in: unknown[]
	$all: unknown[]
	$gte: number
	$lte: number
	$ne: unknown
	$contains: string
	$not_contains: string
	$exists: boolean
}

interface FilterObj {
	[key: string]: FilterKey
}

function filterData(data, filter: FilterObj) {
	let newData = data;

	for (const [key, val] of Object.entries(filter)) {
		if (val.$in !== undefined || val.$not_in !== undefined) {
			newData = newData.filter(row => {
				if (row[key] === undefined) { return false; }

				if (row[key] instanceof Array) {
					return val.$in ?
						intersection(row[key], val.$in).length > 0
						: intersection(row[key], val.$not_in).length === 0;
				} else {
					return val.$in ? val.$in.includes(row[key])
						: !val.$not_in.includes(row[key]);
				}
			});
		}

		if (val.$all !== undefined) {
			newData = newData.filter(row => isEqual(sortBy(row[key]), sortBy(val.$all)));
		}

		if (val.$gte !== undefined) {
			newData = newData.filter(row => row[key] >= val.$gte);
		}

		if (val.$lte !== undefined) {
			newData = newData.filter(row => row[key] <= val.$lte);
		}

		if (val.$ne !== undefined) {
			newData = newData.filter(row => row[key] !== val.$ne);
		}

		if (val.$contains !== undefined) {
			newData = newData.filter(row => row[key].toLowerCase().indexOf(val.$contains.toLowerCase()) >= 0);
		}

		if (val.$not_contains !== undefined) {
			newData = newData.filter(row => row[key].toLowerCase().indexOf(val.$not_contains.toLowerCase()) < 0);
		}

		if (val.$exists === true) {
			newData = newData.filter(row => row[key]?.length > 0);
		}

		if (val.$exists === false) {
			newData = newData.filter(row => row[key]?.length === 0 || row[key] === undefined);
		}

		if (val instanceof RegExp) {
			newData = newData.filter(row => val.test(row[key]));
		}

		if (typeof val === "string") {
			newData = newData.filter(row => row[key] === val);
		}
	}

	return newData;
}

function sortArr(a, b, dir) {
	const multiplier = dir === "asc" ? 1 : -1;

	// if both values are undefined, we assume 0
	if (a === undefined && b === undefined) {
		return 0;
	}

	// we assume undefined values are smaller than defined values, so if A is undefined, b is bigger
	// I don't understand why this isn't multiplied by multiplier... but if I do it goes wonky
	if (a === undefined) {
		return 1;
	}

	if (b === undefined) {
		return -1;
	}

	if (typeof a === "string") {
		return a.localeCompare(b) * multiplier;
	}

	if (a > b) {
		return 1 * multiplier;
	} else if (a < b) {
		return -1 * multiplier;
	} else {
		return 0;
	}
}

export default JSONDB;
