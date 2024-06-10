import * as React from "react";
import { ReactElement, memo } from "react";

// Types and styles
import { MosaicFieldProps } from "@root/components/Field";
import { RawInputSettings, FieldDefRawData } from "./FormFieldRawTypes";

const FormFieldRaw = (
	props: MosaicFieldProps<"raw", RawInputSettings, FieldDefRawData>,
): ReactElement => {
	const {
		value,
	} = props;

	return <>{value}</>;
};

export default memo(FormFieldRaw);
