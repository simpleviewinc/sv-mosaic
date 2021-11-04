import * as React from 'react';
import { memo, useState, ReactElement, useEffect, useMemo } from 'react';

// Components
import Button from '@root/forms/Button';
import FormNav from '@root/forms/FormNav';
import Tooltip from '@root/components/Tooltip';
import Checkbox from '@root/components/Checkbox';

// Types and Utils
import { BREAKPOINTS } from '@root/theme/theme';
import { TopComponentProps } from './TopComponentTypes';

// Styles
import {
	CheckboxWrapper,
	Description,
	DesktopViewColumn,
	DesktopActionsRow,
	DesktopTitleActionsRow,
	FlexContainer,
	FormTitle,
	MobileColumn,
	MobileActionsRow,
	MobileTitleRow,
	MobileCheckboxHelpIconRow,
	NavSectionsWrapper,
	ResponsiveActionsRow,
	ResponsiveButtonsWrapper,
	ResponsiveViewColumn,
	Row,
	StyledHelpIcon,
	StyledClearIcon,
	StyledHelpIconWrapper,
	TitleWrapper,
} from './TopComponent.styled';

const TopComponent = (props: TopComponentProps): ReactElement => {
	const {
		cancelButtonAttrs,
		children,
		description,
		onCancel,
		onSubmit,
		showActive,
		title,
		tooltipInfo,
		sections,
		submitButtonAttrs,
	} = props;

	// State variables
	const [activeChecked, setActiveChecked] = useState(false);
	const [isResponsiveView, setIsResponsiveView] = useState(false);
	const [isMobileView, setIsMobileView] = useState(false);
	const [isBigView, setIsBigView] = useState(false);

	const handleActiveClick = () => {
		setActiveChecked(!activeChecked);
	};

	useEffect(() => {
		const setResponsiveness = () => {
			setIsResponsiveView(
				window.innerWidth < BREAKPOINTS.topComponent.responsiveView
			);
			setIsMobileView(window.innerWidth < BREAKPOINTS.mobile);
			setIsBigView(window.innerWidth > BREAKPOINTS.topComponent.bigScreenView);
		};

		setResponsiveness();
		window.addEventListener('resize', setResponsiveness);

		return () => {
			window.removeEventListener('resize', setResponsiveness);
		};
	}, []);

	const submitButton = useMemo(
		() => (
			<Button buttonType='primary' onClick={onSubmit} {...submitButtonAttrs}>
				{submitButtonAttrs?.children ? submitButtonAttrs?.children : 'Save'}
			</Button>
		),
		[onSubmit, submitButtonAttrs]
	);

	const buttons = useMemo(
		() => (
			<>
				<Button
					buttonType='secondary'
					onClick={onCancel}
					{...cancelButtonAttrs}
				>
					{cancelButtonAttrs?.children ? cancelButtonAttrs?.children : 'Cancel'}
				</Button>
				{submitButton}
			</>
		),
		[onCancel, cancelButtonAttrs, submitButton]
	);

	const checkbox = useMemo(
		() => (
			<Checkbox
				label='Active'
				checked={activeChecked}
				onClick={handleActiveClick}
			/>
		),
		[activeChecked, handleActiveClick]
	);

	const helpIcon = useMemo(
		() => (
			<StyledHelpIconWrapper
				showActive={showActive}
				isResponsiveView={isResponsiveView}
			>
				<Tooltip text={tooltipInfo}>
					<StyledHelpIcon />
				</Tooltip>
			</StyledHelpIconWrapper>
		),
		[showActive, isResponsiveView, tooltipInfo]
	);

	const desktopView = (
		<>
			<DesktopViewColumn>
				<DesktopTitleActionsRow>
					<TitleWrapper>
						<FormTitle>{title}</FormTitle>
						<Description>{description}</Description>
					</TitleWrapper>
					<DesktopActionsRow>
						{tooltipInfo && helpIcon}
						{showActive && checkbox}
						{buttons}
					</DesktopActionsRow>
				</DesktopTitleActionsRow>
				{!isBigView && (
					<FlexContainer>
						<FormNav sections={sections} />
					</FlexContainer>
				)}
			</DesktopViewColumn>
			{isBigView ? (
				<Row>
					<FormNav sections={sections} />
					<NavSectionsWrapper>{children}</NavSectionsWrapper>
				</Row>
			) : (
				<>
					<NavSectionsWrapper>{children}</NavSectionsWrapper>
				</>
			)}
		</>
	);

	const responsiveView = (
		<>
			<ResponsiveViewColumn>
				<Row>
					<TitleWrapper>
						<FormTitle>{title}</FormTitle>
						<Description>{description}</Description>
					</TitleWrapper>
					{tooltipInfo && helpIcon}
				</Row>
				<ResponsiveActionsRow showActive={showActive}>
					{showActive && <CheckboxWrapper>{checkbox}</CheckboxWrapper>}
					<ResponsiveButtonsWrapper>{buttons}</ResponsiveButtonsWrapper>
				</ResponsiveActionsRow>
				<FormNav sections={sections} />
			</ResponsiveViewColumn>
			<NavSectionsWrapper>{children}</NavSectionsWrapper>
		</>
	);

	const mobileView = (
		<MobileColumn>
			<MobileActionsRow>
				<StyledClearIcon onClick={onCancel} />
				{submitButton}
			</MobileActionsRow>
			<MobileTitleRow>
				<FormTitle>{title}</FormTitle>
				<Description>{description}</Description>
			</MobileTitleRow>
			{(showActive || tooltipInfo) && (
				<MobileCheckboxHelpIconRow>
					{showActive && <CheckboxWrapper>{checkbox}</CheckboxWrapper>}
					{tooltipInfo && helpIcon}
				</MobileCheckboxHelpIconRow>
			)}
			{children}
		</MobileColumn>
	);

	return (
		<>
			{isMobileView ? (
				mobileView
			) : (
				<div>{isResponsiveView ? responsiveView : desktopView}</div>
			)}
		</>
	);
};

export default memo(TopComponent);
