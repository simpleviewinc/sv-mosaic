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

export const Example = (): ReactElement => {
	const children = text('Children', 'Button');
	const buttonType = select(
		'Button type',
		['primary', 'secondary', 'blueText', 'redText', 'approve', 'deny'],
		'primary'
	);
	const disabled = boolean('Disabled', false);
	const smallerButton = boolean('Smaller button', false);
	const iconPosition = select('Icon position', ['left', 'right'], 'left');

	const handleClick = () => {
		alert('Button clicked');
	};

	return (
		<>
			<p>Button Example</p>
			<Row>
				<Button
					disabled={disabled}
					buttonType={buttonType}
					onClick={handleClick}
					smallerButton={smallerButton}
				>
					{children}
				</Button>
				<Button
					icon={AddIcon}
					iconPosition={iconPosition}
					disabled={disabled}
					buttonType={buttonType}
					onClick={handleClick}
					smallerButton={smallerButton}
				>
					{children}
				</Button>
			</Row>
			<p>Secondary Button</p>
			<Row>
				<Button
					disabled={disabled}
					buttonType='secondary'
					onClick={handleClick}
				>
					{children}
				</Button>
				<Button
					icon={AddIcon}
					iconPosition={iconPosition}
					disabled={disabled}
					buttonType='secondary'
					onClick={handleClick}
				>
					{children}
				</Button>
			</Row>
			<p>Text Buttons</p>
			<Row>
				<Button
					buttonType='blueText'
					disabled={disabled}
					icon={CheckIcon}
					iconPosition={iconPosition}
					onClick={handleClick}
					smallerButton={smallerButton}
				>
					{children}
				</Button>
				<Button
					buttonType='redText'
					disabled={disabled}
					icon={ClearIcon}
					iconPosition={iconPosition}
					onClick={handleClick}
					smallerButton={smallerButton}
				>
					{children}
				</Button>
			</Row>
			<p>Approve/Deny Buttons</p>
			<Row>
				<Button
					buttonType='approve'
					disabled={disabled}
					icon={CheckIcon}
					iconPosition={iconPosition}
					onClick={handleClick}
				>
          Approve
				</Button>
				<Button
					buttonType='deny'
					disabled={disabled}
					icon={ClearIcon}
					iconPosition={iconPosition}
					onClick={handleClick}
				>
          Deny
				</Button>
			</Row>
		</>
	);
};
