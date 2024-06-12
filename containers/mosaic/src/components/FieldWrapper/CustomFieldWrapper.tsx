import React, { memo, PropsWithChildren } from "react";
import { MosaicFieldProps } from "../Field/FieldTypes";
import useRegisterField from "@root/utils/hooks/useRegisterField";

function CustomFieldWrapper({ children, ...props }: PropsWithChildren<MosaicFieldProps>): React.ReactElement {
	useRegisterField(props);

	return (
		<>{children}</>
	);
}

export default memo(CustomFieldWrapper);
