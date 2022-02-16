import * as React from 'react';
import { memo, ReactElement } from 'react';
import Button from '../Button';

const LoadMoreButton = (props): ReactElement => {
	const {
		disabled,
		canLoadMore,
		getMoreOptions,
		parentInputSettings,
	} = props;

	return parentInputSettings?.getOptions &&
		<>
			<br />
			<Button
				buttonType='secondary'
				disabled={disabled || !canLoadMore}
				onClick={getMoreOptions}
			>
				{canLoadMore ? 'Load more' : "Can't load more options"}
			</Button>
		</>
}

export default memo(LoadMoreButton)