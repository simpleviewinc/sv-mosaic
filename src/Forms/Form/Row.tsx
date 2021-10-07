import * as React from 'react';
import { memo } from 'react';

const Row = (props) => {
	const {children} = props;

	return(
		<div>
			{children}
		</div>
	);
};

export default memo(Row);