import * as React from "react";
import { memo, ReactElement } from "react";

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

const ResponsiveViewColumn = styled(StyledColumn)`
	padding: ${pr => pr.sections ? "24px 20px 0px 20px" : "24px 20px 20px 20px"};
  	z-index: 100;

	& .form-nav-wrapper {
		margin-top: 20px;
	}
`;

const ResponsiveActionsRow = styled(Row)`
	align-self: ${(pr) => (pr.showActive ? "" : "flex-end")};
	margin-top: 16px;
`;

type ResponsiveViewProps = {
	sections: TopComponentProps["sections"];
	checkbox: JSX.Element;
	sectionsRefs?: any[];
	contentRef?: any;
} & BaseTopComponentProps;

const ResponsiveDrawer = (props: ResponsiveViewProps): ReactElement => {
	const {
		title,
		description,
		tooltipInfo,
		helpIcon,
		showActive,
		buttons,
		sections,
		checkbox,
		sectionsRefs,
		contentRef,
		view
	} = props;

	return (
		<ResponsiveViewColumn sections={sections.length > 1}>
			<Row>
				<TitleWrapper
					title={title}
					description={description}
					view={view}
				/>
				{tooltipInfo && helpIcon}
			</Row>
			<ResponsiveActionsRow showActive={showActive}>
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
				<FormNav sectionsRefs={sectionsRefs} sections={sections} contentRef={contentRef} />
			}
		</ResponsiveViewColumn>
	);
}

export default memo(ResponsiveDrawer)
