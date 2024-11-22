import type { MultiSelectHelperArgs, MultiSelectHelperGetOptionsReturn } from "./MultiSelectHelper";
import { default as MultiSelectHelper } from "./MultiSelectHelper";
import type { MosaicLabelValue } from "../../../types";

class SingleSelectHelper {
	multiHelper: MultiSelectHelper;
	constructor(args: MultiSelectHelperArgs) {
		this.multiHelper = new MultiSelectHelper(args);
	}
	mapOptions(args: Record<string, string>): MosaicLabelValue {
		return this.multiHelper.mapOptions(args);
	}
	async getOptions(): Promise<MultiSelectHelperGetOptionsReturn> {
		return this.multiHelper.getOptions({
			limit : Infinity,
			skip : 0,
		});
	}
	async getSelected(id: string): Promise<MosaicLabelValue> {
		const items = await this.multiHelper.getSelected([id]);
		return items[0];
	}
}

export default SingleSelectHelper;
