import { additionalOptions } from "@root/components/Field/FormFieldAdvancedSelection";
import { MosaicLabelValue } from "@root/types";

export const getOptions: () => Promise<MosaicLabelValue[]> = async () => {
	const internalOptionsArr: MosaicLabelValue[] = additionalOptions;

	return new Promise(resolve => {
		setTimeout(() => {
			resolve(internalOptionsArr);
		}, 500);
	});
};
