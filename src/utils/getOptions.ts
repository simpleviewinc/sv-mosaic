import { additionalOptions } from "@root/forms/FormFieldAdvancedSelection";
import { MosaicLabelValue } from "..";

export const getOptions: () => Promise<MosaicLabelValue[]> = async () => {
	const internalOptionsArr: MosaicLabelValue[] = additionalOptions;

	return new Promise(resolve => {
		setTimeout(() => {
			resolve(internalOptionsArr)
		}, 500);
	})
};
