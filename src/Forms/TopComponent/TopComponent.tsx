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
	ActionsWrapper,
	CheckboxWrapper,
	Description,
	FormTitle,
	NavSectionsWrapper,
	StyledHelpIcon,
	TitleWrapper,
	TopComponentColumnWrapper,
	TopComponentRowWrapper,
	Row,
	ButtonsWrapper,
	ActionsRow,
	ResponsiveViewColumn,
	MobileColumn,
	MobileActionsRow,
	MobileTitleRow,
	MobileCheckboxHelpIconRow,
} from './TopComponent.styled';

const TopComponent = (props: TopComponentProps): ReactElement => {
	// State variables
	const [activeChecked, setActiveChecked] = useState(false);
	const [isResponsiveView, setIsResponsiveView] = useState(false);
	const [isMobileView, setIsMobileView] = useState(false);

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

	const handleActiveClick = () => {
		setActiveChecked(!activeChecked);
	};

	useEffect(() => {
		const setResponsiveness = () => {
			if (window.innerWidth < 1075) {
				setIsResponsiveView(true);
			} else {
				setIsResponsiveView(false);
			}

			if (window.innerWidth < BREAKPOINTS.mobile) {
				setIsMobileView(true);
			} else {
				setIsMobileView(false);
			}
		};

		setResponsiveness();
		window.addEventListener('resize', setResponsiveness);

		return () => {
			window.removeEventListener('resize', setResponsiveness);
		};
	}, []);

	const desktopView = (
		<TopComponentRowWrapper>
			<TitleWrapper>
				<FormTitle>{formTitle}</FormTitle>
				<Description>{description}</Description>
			</TitleWrapper>
			<ActionsWrapper>
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
			</ActionsWrapper>
		</TopComponentRowWrapper>
	);

	const responsiveView = (
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
			<ActionsRow showActive={showActive}>
				{showActive && (
					<CheckboxWrapper>
						<Checkbox
							label='Active'
							checked={activeChecked}
							onClick={handleActiveClick}
						/>
					</CheckboxWrapper>
				)}
				<ButtonsWrapper>
					<Button buttonType='secondary' onClick={handleCancelButton}>
            Cancel
					</Button>
					<Button buttonType='primary' onClick={handleSaveButton}>
            Save
					</Button>
				</ButtonsWrapper>
			</ActionsRow>
		</ResponsiveViewColumn>
	);

	const mobileView = (
		<MobileColumn>
			<MobileActionsRow>
				<ClearIcon />
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
				<TopComponentColumnWrapper>
					{isResponsiveView ? responsiveView : desktopView}
					<NavSectionsWrapper>
						<FormNav sections={sections} />
						{children}
					</NavSectionsWrapper>
				</TopComponentColumnWrapper>
			)}
		</>
	);
};

export default memo(TopComponent);
