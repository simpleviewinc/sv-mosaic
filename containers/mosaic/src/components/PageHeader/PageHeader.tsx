import * as React from "react";
import { memo, forwardRef } from "react";
import { StyledPageHeader, StyledTitleRow } from "./PageHeader.styled";
import type { PageHeaderProps } from "./PageHeaderTypes";
import TitleWrapper from "@root/components/Title";
import ButtonRow from "../ButtonRow/ButtonRow";

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>((props, ref) => {
	const {
		title,
		buttons,
		onBack,
		backLabel,
	} = props;

	return (
		<StyledPageHeader ref={ref} data-testid="page-header-test-id">
			<StyledTitleRow>
				{title && (
					<TitleWrapper
						title={title}
						onBack={onBack}
						backLabel={backLabel}
					/>
				)}
			</StyledTitleRow>
			{buttons && (
				<ButtonRow buttons={buttons} />
			)}
		</StyledPageHeader>
	);
});

PageHeader.displayName = "PageHeader";

export default memo(PageHeader);
