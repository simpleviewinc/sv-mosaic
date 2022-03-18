import * as React from 'react';
import { memo, ReactElement } from 'react';
import Button from '@root/forms/Button';

const ResetButton = (props: { value: any; fieldDef: any; }): ReactElement => {
	const {
		value,
		fieldDef,
	} = props;

	return value && (
		<Button
			buttonType='blueText'
			onClick={fieldDef?.inputSettings?.resetLocation}
			style={{ margin: 'auto 0px 35px 0px' }}
		>
			Reset
		</Button>
	)
};

export default memo(ResetButton);