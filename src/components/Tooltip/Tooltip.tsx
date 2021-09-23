import * as React from 'react';
import { ReactElement } from 'react';
import { default as T } from '@material-ui/core/Tooltip';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Tooltip = (props): ReactElement => {
	return(
		<T title='Close'>
			<IconButton>
				<CloseIcon />
			</IconButton>
		</T>
	);
}

export default Tooltip;