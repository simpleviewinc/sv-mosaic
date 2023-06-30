import React, { ReactElement, memo, useEffect } from "react";

import { MosaicFieldProps } from ".";
import Field from "./Field";
import { formActions } from "../Form";

const RegisteredField = ({
	dispatch,
	name,
	...props
}: MosaicFieldProps<any> & {dispatch: any, name: string}): ReactElement => {
	useEffect(() => {
		dispatch(formActions.mountField({name}));
		return () => dispatch(formActions.unmountField({name}))
	}, [dispatch]);

	return <Field {...props} />
};

export default memo(RegisteredField);
