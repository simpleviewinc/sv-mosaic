import * as React from 'react';
import { memo, ReactElement } from 'react';
import Button from '../Button';

const LoadMoreButton = (props): ReactElement => {
	const {
		fieldDef,
	} = props;

	return fieldDef?.inputSettings?.parentInputSettings?.getOptions &&
		<>
			<br />
			<Button
				buttonType='secondary'
				disabled={fieldDef?.disabled || !fieldDef?.inputSettings?.canLoadMore}
				onClick={fieldDef?.inputSettings?.getMoreOptions}
			>
				{fieldDef?.inputSettings?.canLoadMore ? 'Load more' : "Can't load more options"}
			</Button>
		</>
}

export default memo(LoadMoreButton)