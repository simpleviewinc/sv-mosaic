import * as React from 'react';
import { memo, useState, ReactElement, useEffect } from 'react';

// Components
import Button from '@root/forms/Button';
import ClearIcon from '@material-ui/icons/Clear';
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
	TitleWrapper,
	FlexContainer,
	DesktopViewColumn,
	DesktopActionsRow,
} from './TopComponent.styled';

const RESPONSIVE_VIEW_BREAKPOINT = 1075;
const BIG_SCREEN_VIEW_BREAKPOINT = 1718;

const TopComponent = (props: TopComponentProps): ReactElement => {
	const {
		children,
		description,
		formTitle,
		handleCancelButton,
		handleSaveButton,
		showActive,
		tooltipInfo,
		sections,
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
			setIsResponsiveView(window.innerWidth < RESPONSIVE_VIEW_BREAKPOINT);
			setIsMobileView(window.innerWidth < BREAKPOINTS.mobile);
			setIsBigView(window.innerWidth > BIG_SCREEN_VIEW_BREAKPOINT);
		};

		setResponsiveness();
		window.addEventListener('resize', setResponsiveness);

		return () => {
			window.removeEventListener('resize', setResponsiveness);
		};
	}, []);

	const desktopView = (
		<>
			<DesktopViewColumn>
				<FlexContainer>
					<TitleWrapper>
						<FormTitle>{formTitle}</FormTitle>
						<Description>{description}</Description>
					</TitleWrapper>
					<DesktopActionsRow>
						{tooltipInfo && (
							<Tooltip text={tooltipInfo}>
								<StyledHelpIcon
									showActive={showActive}
									isResponsiveView={isResponsiveView}
								/>
							</Tooltip>
						)}
						{showActive && (
							<Checkbox
								label='Active'
								checked={activeChecked}
								onClick={handleActiveClick}
							/>
						)}
						<Button buttonType='secondary' onClick={handleCancelButton}>
              Cancel
						</Button>
						<Button buttonType='primary' onClick={handleSaveButton}>
              Save
						</Button>
					</DesktopActionsRow>
				</FlexContainer>
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
						<FormTitle>{formTitle}</FormTitle>
						<Description>{description}</Description>
					</TitleWrapper>
					{tooltipInfo && (
						<Tooltip text={tooltipInfo}>
							<StyledHelpIcon
								showActive={showActive}
								isResponsiveView={isResponsiveView}
							/>
						</Tooltip>
					)}
				</Row>
				<ResponsiveActionsRow showActive={showActive}>
					{showActive && (
						<CheckboxWrapper>
							<Checkbox
								label='Active'
								checked={activeChecked}
								onClick={handleActiveClick}
							/>
						</CheckboxWrapper>
					)}
					<ResponsiveButtonsWrapper>
						<Button buttonType='secondary' onClick={handleCancelButton}>
              Cancel
						</Button>
						<Button buttonType='primary' onClick={handleSaveButton}>
              Save
						</Button>
					</ResponsiveButtonsWrapper>
				</ResponsiveActionsRow>
				<FormNav sections={sections} />
			</ResponsiveViewColumn>
			<NavSectionsWrapper>{children}</NavSectionsWrapper>
		</>
	);

	const mobileView = (
		<MobileColumn>
			<MobileActionsRow>
				<ClearIcon onClick={handleCancelButton} />
				<Button buttonType='primary' onClick={handleSaveButton}>
          Save
				</Button>
			</MobileActionsRow>
			<MobileTitleRow>
				<FormTitle>{formTitle}</FormTitle>
				<Description>{description}</Description>
			</MobileTitleRow>
			{(showActive || tooltipInfo) && (
				<MobileCheckboxHelpIconRow>
					{showActive && (
						<CheckboxWrapper>
							<Checkbox
								label='Active'
								checked={activeChecked}
								onClick={handleActiveClick}
							/>
						</CheckboxWrapper>
					)}
					{tooltipInfo && (
						<Tooltip text={tooltipInfo}>
							<StyledHelpIcon
								showActive={showActive}
								isResponsiveView={isResponsiveView}
							/>
						</Tooltip>
					)}
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
				<div>
					{isResponsiveView ? responsiveView : desktopView}
				</div>
			)}
		</>
	);
};

export default memo(TopComponent);
