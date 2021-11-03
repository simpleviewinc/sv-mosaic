import * as React from 'react';
import { memo, useState, ReactElement, useEffect } from 'react';

// Components
import Button from '@root/forms/Button';
import FormNav from '@root/forms/FormNav';
import Tooltip from '@root/components/Tooltip';
import Checkbox from '@root/components/Checkbox';

// Types
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
	Column,
	ButtonsWrapper,
	ActionsRow,
} from './TopComponent.styled';

const TopComponent = (props: TopComponentProps): ReactElement => {
	const [activeChecked, setActiveChecked] = useState(false);

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

	const [isResponsiveView, setIsResponsiveView] = useState(false);

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 1075
				? setIsResponsiveView(true)
				: setIsResponsiveView(false);
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
		<Column>
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
		</Column>
	);

	return (
		<TopComponentColumnWrapper>
			{isResponsiveView ? responsiveView : desktopView}
			<NavSectionsWrapper>
				<FormNav sections={sections} />
				{children}
			</NavSectionsWrapper>
		</TopComponentColumnWrapper>
	);
};

export default memo(TopComponent);
