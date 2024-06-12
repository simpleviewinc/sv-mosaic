import { jsonDateParser } from "json-date-parser";

interface Row {
	id: string;
	[key: string]: any;
}

class LocalStorageDB {
	_key: string;
	_data: Row[];
	constructor(key: string) {
		const data = localStorage.getItem(key);

		this._key = key;
		this._data = data ? JSON.parse(data, jsonDateParser) : [];
	}

	_serialize() {
		localStorage.setItem(this._key, JSON.stringify(this._data));
	}

	_guid() {
		return Date.now().toString() + Math.round(Math.random() * 100000).toString();
	}

	find() {
		return this._data.slice();
	}

	remove({ id }) {
		this._data = this._data.filter(val => val.id !== id);
		this._serialize();
	}

	upsert(data) {
		if (data.id === undefined) {
			data.id = this._guid();
		}

		const index = this._data.findIndex(val => val.id === data.id);
		if (index === -1) {
			this._data.push(data);
		} else {
			this._data[index] = data;
		}

		this._serialize();
	}
}

export default LocalStorageDB;
