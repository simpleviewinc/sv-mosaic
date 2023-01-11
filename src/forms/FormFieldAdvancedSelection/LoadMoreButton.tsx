import * as React from "react";
import { memo, ReactElement, forwardRef } from "react";
import { LoadMoreButtonPropsTypes } from ".";
import Button from "../../components/Button";
import styled from "styled-components";

const LoadMoreButton = forwardRef((props: LoadMoreButtonPropsTypes, ref): ReactElement => {
	const { fieldDef } = props;

	const ButtonWrapper = styled.div`
		margin: 15px 15px 0 15px;
	`

	return (
		fieldDef?.inputSettings?.parentInputSettings?.getOptions ? (
			<ButtonWrapper ref={ref}>
				<Button
					color='gray'
					variant='outlined'
					disabled={fieldDef?.disabled || !fieldDef?.inputSettings?.canLoadMore}
					onClick={fieldDef?.inputSettings?.getMoreOptions}
					label={fieldDef?.inputSettings?.canLoadMore
						? "Load more"
						: "Can't load more options"}
				/>
			</ButtonWrapper>
		) : null
	);
});

LoadMoreButton.displayName = "LoadMoreButton"

export default memo(LoadMoreButton);
