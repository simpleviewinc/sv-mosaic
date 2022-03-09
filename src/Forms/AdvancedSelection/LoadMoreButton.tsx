import * as React from 'react';
import { memo, ReactElement } from 'react';
import { LoadMoreButtonPropsTypes } from '.';
import Button from '../Button';

const LoadMoreButton = (props: LoadMoreButtonPropsTypes): ReactElement => {
	const { fieldDef } = props;

	return (
		fieldDef?.inputSettings?.parentInputSettings?.getOptions && (
			<Button
				buttonType='secondary'
				disabled={fieldDef?.disabled || !fieldDef?.inputSettings?.canLoadMore}
				onClick={fieldDef?.inputSettings?.getMoreOptions}
				style={{ marginTop: 'auto' }}
			>
				{fieldDef?.inputSettings?.canLoadMore
					? 'Load more'
					: "Can't load more options"}
			</Button>
		)
	);
};

export default memo(LoadMoreButton);
