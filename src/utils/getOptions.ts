import { additionalOptions } from "@root/forms/FormFieldAdvancedSelection";
import { MosaicLabelValue } from "..";

export const getOptions: () => Promise<MosaicLabelValue[]> = async () => {
	const internalOptionsArr: MosaicLabelValue[] = additionalOptions || [];

	return new Promise(resolve => {
		setTimeout(() => {
			resolve(internalOptionsArr)
		}, 500);
	})
};

export const getNewOptions: () => Promise<MosaicLabelValue[]> = async () => {
	const newOptions = await getOptions();
	return newOptions;
}
