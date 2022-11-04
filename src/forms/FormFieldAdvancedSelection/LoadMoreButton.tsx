import * as React from "react";
import { memo, ReactElement } from "react";
import { LoadMoreButtonPropsTypes } from ".";
import Button from "../../components/Button";
import styled from "styled-components";

const LoadMoreButton = (props: LoadMoreButtonPropsTypes): ReactElement => {
	const { fieldDef } = props;

	const ButtonWrapper = styled.div`
		margin-top: 15px;
	`

	return (
		fieldDef?.inputSettings?.parentInputSettings?.getOptions ? (
			<ButtonWrapper>
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
};

export default memo(LoadMoreButton);
