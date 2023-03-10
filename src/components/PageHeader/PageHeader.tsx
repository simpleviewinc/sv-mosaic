import * as React from "react";
import { memo, forwardRef } from "react";
import Button from "@root/components/Button";
import { StyledPageHeader } from "./PageHeader.styled";
import { ButtonsWrapper } from "@root/forms/TopComponent/TopComponent.styled";
import { PageHeaderProps } from "./PageHeaderTypes";
import TitleWrapper from "@root/forms/TopComponent/Utils/TitleWrapper";

const PageHeader = forwardRef((props: PageHeaderProps, ref) => {
	const {
		title,
		buttons,
		onBack
	} = props;

	return (
		<StyledPageHeader ref={ref} data-testid="page-header-test-id">
			<div style={{ display: "flex", alignItems: "center" }}>
				{title &&
					<TitleWrapper title={title} onBack={onBack} />
				}
			</div>
			{buttons &&
				<ButtonsWrapper>
					{buttons.map((button, idx) => (
						<Button key={`${button.label}-${idx}`} {...button} />
					))}
				</ButtonsWrapper>
			}
		</StyledPageHeader>
	)
});

PageHeader.displayName = "PageHeader";

export default memo(PageHeader);
