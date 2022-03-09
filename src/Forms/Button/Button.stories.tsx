import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

// Material UI
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

// Components
import Button from './Button';
import { Row } from './ButtonStyled';

export default {
	title: 'Forms|Button',
	decorators: [withKnobs],
};

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const BLUE_TEXT = 'blueText';
const RED_TEXT = 'redText';
const APPROVE = 'approve';
const DENY = 'deny';

const handleClick = (buttonType: string) => {
	alert(`Button of type ${buttonType} clicked.`);
};

export const Playground = (): ReactElement => {
	const children = text('Button label', 'Button');
	const buttonType = select(
		'Button type',
		['primary', 'secondary', 'blueText', 'redText', 'approve', 'deny'],
		'primary'
	);
	const disabled = boolean('Disabled', false);
	const smallerButton = boolean('Smaller text button', false);
	const iconPosition = select('Icon position', ['left', 'right'], 'left');
	const showIcon = boolean('Show icon', false);

	return (
		<>
			<h1>Button Playground</h1>
			<Button
				buttonType={buttonType}
				disabled={disabled}
				icon={showIcon && AddIcon}
				iconPosition={iconPosition}
				onClick={() => handleClick(buttonType)}
				smallerButton={smallerButton}
			>
				{children}
			</Button>
		</>
	);
};

export const KitchenSink = (): ReactElement => (
	<>
		<h1>Buttons kitchen sink</h1>
		<h2>Primary Button</h2>
		<Row>
			<Button
				buttonType={PRIMARY}
				onClick={() => handleClick(PRIMARY)}
			>
				Primary
			</Button>
			<Button
				icon={AddIcon}
				iconPosition='left'
				buttonType={PRIMARY}
				onClick={() => handleClick(PRIMARY)}
			>
				Primary
			</Button>
			<Button
				icon={AddIcon}
				iconPosition='right'
				buttonType={PRIMARY}
				onClick={() => handleClick(PRIMARY)}
			>
				Primary
			</Button>
		</Row>
		<h2>Primary - Disabled</h2>
		<Row>
			<Button
				disabled={true}
				buttonType={PRIMARY}
				onClick={() => handleClick(PRIMARY)}
			>
				Primary
			</Button>
			<Button
				icon={AddIcon}
				iconPosition='left'
				disabled={true}
				buttonType={PRIMARY}
				onClick={() => handleClick(PRIMARY)}
			>
				Primary
			</Button>
			<Button
				icon={AddIcon}
				iconPosition='right'
				disabled={true}
				buttonType={PRIMARY}
				onClick={() => handleClick(PRIMARY)}
			>
				Primary
			</Button>
		</Row>
		<h2>Secondary Button</h2>
		<Row>
			<Button
				buttonType={SECONDARY}
				onClick={() => handleClick(SECONDARY)}
			>
				Secondary
			</Button>
			<Button
				icon={AddIcon}
				iconPosition='left'
				buttonType={SECONDARY}
				onClick={() => handleClick(SECONDARY)}
			>
				Secondary
			</Button>
			<Button
				icon={AddIcon}
				iconPosition='right'
				buttonType={SECONDARY}
				onClick={() => handleClick(SECONDARY)}
			>
				Secondary
			</Button>
		</Row>
		<h2>Secondary - Disabeld</h2>
		<Row>
			<Button
				disabled={true}
				buttonType={SECONDARY}
				onClick={() => handleClick(SECONDARY)}
			>
				Secondary
			</Button>
			<Button
				icon={AddIcon}
				iconPosition='left'
				disabled={true}
				buttonType={SECONDARY}
				onClick={() => handleClick(SECONDARY)}
			>
				Secondary
			</Button>
			<Button
				icon={AddIcon}
				iconPosition='right'
				disabled={true}
				buttonType={SECONDARY}
				onClick={() => handleClick(SECONDARY)}
			>
				Secondary
			</Button>
		</Row>
		<h2>Text Buttons</h2>
		<Row>
			<Button
				buttonType={BLUE_TEXT}
				onClick={() => handleClick(BLUE_TEXT)}
			>
				Blue Text
			</Button>
			<Button
				buttonType={RED_TEXT}
				onClick={() => handleClick(RED_TEXT)}
			>
				Red Text
			</Button>
			<Button
				buttonType={BLUE_TEXT}
				icon={AddIcon}
				iconPosition='left'
				onClick={() => handleClick(BLUE_TEXT)}
			>
				Blue Text
			</Button>
			<Button
				buttonType={RED_TEXT}
				icon={ClearIcon}
				iconPosition='left'
				onClick={() => handleClick(BLUE_TEXT)}
			>
				Red Text
			</Button>
		</Row>
		<h2>Text Buttons - Disabled</h2>
		<Row>
			<Button
				buttonType={BLUE_TEXT}
				disabled={true}
				onClick={() => handleClick(BLUE_TEXT)}
			>
				Blue Text
			</Button>
			<Button
				buttonType={RED_TEXT}
				disabled={true}
				onClick={() => handleClick(RED_TEXT)}
			>
				Red Text
			</Button>
			<Button
				buttonType={BLUE_TEXT}
				disabled={true}
				icon={AddIcon}
				iconPosition='left'
				onClick={() => handleClick(BLUE_TEXT)}
			>
				Blue Text
			</Button>
			<Button
				buttonType={RED_TEXT}
				disabled={true}
				icon={ClearIcon}
				iconPosition='left'
				onClick={() => handleClick(BLUE_TEXT)}
			>
				Red Text
			</Button>
		</Row>
		<h2>Small Text Buttons</h2>
		<Row>
			<Button
				buttonType={BLUE_TEXT}
				onClick={() => handleClick(BLUE_TEXT)}
				smallerButton={true}
			>
				Blue Text
			</Button>
			<Button
				buttonType={RED_TEXT}
				onClick={() => handleClick(RED_TEXT)}
				smallerButton={true}
			>
				Red Text
			</Button>
			<Button
				buttonType={BLUE_TEXT}
				icon={AddIcon}
				iconPosition='left'
				onClick={() => handleClick(BLUE_TEXT)}
				smallerButton={true}
			>
				Blue Text
			</Button>
			<Button
				buttonType={RED_TEXT}
				icon={ClearIcon}
				iconPosition='left'
				onClick={() => handleClick(BLUE_TEXT)}
				smallerButton={true}
			>
				Red Text
			</Button>
		</Row>
		<h2>Small Text Buttons - Disabled</h2>
		<Row>
			<Button
				buttonType={BLUE_TEXT}
				disabled={true}
				onClick={() => handleClick(BLUE_TEXT)}
				smallerButton={true}
			>
				Blue Text
			</Button>
			<Button
				buttonType={RED_TEXT}
				disabled={true}
				onClick={() => handleClick(RED_TEXT)}
				smallerButton={true}
			>
				Red Text
			</Button>
			<Button
				buttonType={BLUE_TEXT}
				disabled={true}
				icon={AddIcon}
				iconPosition='left'
				onClick={() => handleClick(BLUE_TEXT)}
				smallerButton={true}
			>
				Blue Text
			</Button>
			<Button
				buttonType={RED_TEXT}
				disabled={true}
				icon={ClearIcon}
				iconPosition='left'
				onClick={() => handleClick(BLUE_TEXT)}
				smallerButton={true}
			>
				Red Text
			</Button>
		</Row>
		<h2>Approve/Deny Buttons</h2>
		<Row>
			<Button
				buttonType={APPROVE}
				icon={CheckIcon}
				iconPosition='left'
				onClick={() => handleClick(APPROVE)}
			>
				Approve
			</Button>
			<Button
				buttonType={DENY}
				icon={ClearIcon}
				iconPosition='left'
				onClick={() => handleClick(DENY)}
			>
				Deny
			</Button>
			<Button
				buttonType={APPROVE}
				icon={CheckIcon}
				iconPosition='right'
				onClick={() => handleClick(APPROVE)}
			>
				Approve
			</Button>
			<Button
				buttonType={DENY}
				icon={ClearIcon}
				iconPosition='right'
				onClick={() => handleClick(DENY)}
			>
				Deny
			</Button>
		</Row>
		<h2>Approve/Deny Buttons - Disabled</h2>
		<Row>
			<Button
				buttonType={APPROVE}
				disabled={true}
				icon={CheckIcon}
				iconPosition='left'
				onClick={() => handleClick(APPROVE)}
			>
				Approve
			</Button>
			<Button
				buttonType={DENY}
				disabled={true}
				icon={ClearIcon}
				iconPosition='left'
				onClick={() => handleClick(DENY)}
			>
				Deny
			</Button>
			<Button
				buttonType={APPROVE}
				disabled={true}
				icon={CheckIcon}
				iconPosition='right'
				onClick={() => handleClick(APPROVE)}
			>
				Approve
			</Button>
			<Button
				buttonType={DENY}
				disabled={true}
				icon={ClearIcon}
				iconPosition='right'
				onClick={() => handleClick(DENY)}
			>
				Deny
			</Button>
		</Row>
	</>
);
