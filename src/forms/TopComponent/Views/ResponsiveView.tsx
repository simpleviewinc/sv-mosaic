import * as React from "react";
import { forwardRef, memo, ReactElement } from "react";

// Components
import Button from "@root/components/Button";
import FormNav from "@root/forms/FormNav";

// Styled components
import styled from "styled-components";
import {
	CheckboxWrapper,
	ButtonsWrapper,
	Row,
	StyledColumn
} from "../TopComponent.styled";
import TitleWrapper from "../Utils/TitleWrapper";
import { BaseTopComponentProps, TopComponentProps } from "../TopComponentTypes";

const ResponsiveActionsRow = styled(Row)`
	align-self: ${(pr) => (pr.showActive ? "" : "flex-end")};
	margin-top: 16px;
`;

type ResponsiveViewProps = {
	sections: TopComponentProps["sections"];
	checkbox: JSX.Element;
	sectionsRefs?: any[];
} & BaseTopComponentProps;

const ResponsiveView = forwardRef((props: ResponsiveViewProps, ref): ReactElement => {
	const {
		title,
		onBack,
		description,
		tooltipInfo,
		helpIcon,
		showActive,
		buttons,
		sections,
		checkbox,
		sectionsRefs,
		formContentRef,
		view
	} = props;

	return (
		<StyledColumn className={view} ref={ref} sections={sections && sections.length > 1}>
			<Row className={view}>
				<TitleWrapper
					title={title}
					onBack={onBack}
					description={description}
					view={view}
				/>
				{tooltipInfo && helpIcon}
			</Row>
			<ResponsiveActionsRow className={view} showActive={showActive}>
				{showActive && <CheckboxWrapper>{checkbox}</CheckboxWrapper>}
				{buttons && (
					<ButtonsWrapper>
						{buttons.map((button, idx) => (
							<Button key={`${button.label}-${idx}`} {...button} />
						))}
					</ButtonsWrapper>
				)}
			</ResponsiveActionsRow>
			{sections &&
				<FormNav sectionsRefs={sectionsRefs} sections={sections} formContentRef={formContentRef} />
			}
		</StyledColumn>
	);
});

ResponsiveView.displayName = "ResponsiveView";

export default memo(ResponsiveView)
