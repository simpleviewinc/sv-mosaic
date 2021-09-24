import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Material UI
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HelpIcon from '@material-ui/icons/Help';

// Components
import IconButton from './IconButton';

export default {
	title: 'Components/IconButton',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const handleClick = () => {
		alert('Icon clicked');
	};

	return (
		<>
			<p>More Icon</p>
			<IconButton
				disabled={boolean('Disabled', false)}
				tooltipLabel={text('Tooltip label', 'This is the tooltip')}
				icon={MoreVertIcon}
				onClick={handleClick}
			/>
			<p>Help Icon</p>
			<IconButton
				disabled={boolean('Disabled', false)}
				tooltipLabel={text('Tooltip label', 'This is the tooltip')}
				icon={HelpIcon}
				onClick={handleClick}
			/>
		</>
	);
};
