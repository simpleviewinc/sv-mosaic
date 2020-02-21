import MultiSelectHelper from "./MultiSelectHelper";

class SingleSelectHelper {
	multiHelper: MultiSelectHelper;
	constructor(args) {
		this.multiHelper = new MultiSelectHelper(args);
	}
	mapOptions(args) {
		return this.multiHelper.mapOptions(args);
	}
	async getOptions(filter) {
		return this.multiHelper.getOptions({
			limit : Infinity,
			skip : 0
		})
	}
	async getSelected(id: string) {
		const items = await this.multiHelper.getSelected([id]);
		return items[0];
	}
}

export default SingleSelectHelper;