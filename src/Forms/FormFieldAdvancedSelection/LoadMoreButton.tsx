import * as React from 'react';
import { memo, ReactElement } from 'react';
import { LoadMoreButtonPropsTypes } from '.';
import Button from '../../components/Button';

const LoadMoreButton = (props: LoadMoreButtonPropsTypes): ReactElement => {
	const { fieldDef } = props;

	return (
		fieldDef?.inputSettings?.parentInputSettings?.getOptions && (
			<Button
				color='gray'
				variant='outlined'
				disabled={fieldDef?.disabled || !fieldDef?.inputSettings?.canLoadMore}
				onClick={fieldDef?.inputSettings?.getMoreOptions}
				label={fieldDef?.inputSettings?.canLoadMore
					? 'Load more'
					: "Can't load more options"}
			/>
		)
	);
};

export default memo(LoadMoreButton);
