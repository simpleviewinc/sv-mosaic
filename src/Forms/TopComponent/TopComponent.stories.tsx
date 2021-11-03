import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import TopComponent from './TopComponent';
import { MainLayout, Section } from '../FormNav/FormNav.styled';

export default {
	title: 'Forms|TopComponent',
	decorators: [withKnobs],
} as Meta;

const sections = [
	{
		name: 'Account Profile',
		id: 'section1',
	},
	{
		name: 'Account Information',
		id: 'section2',
	},
	{
		name: 'Contact Information',
		id: 'section3',
	},
	{
		name: 'Address Information',
		id: 'section4',
	},
	{
		name: 'Tags and User',
		id: 'section5',
	},
	{
		name: 'Connections',
		id: 'section6',
	},
];

export const Example = (): ReactElement => {
	const withInfoIcon = boolean('Show info icon', true);

	const handleCancelButton = () => {
		alert('Cancel button was clicked');
	};

	const handleSaveButton = () => {
		alert('Save button was clicked');
	};

	return (
		<MainLayout>
			<TopComponent
				description={text('Description', 'Description')}
				formTitle={text('Form title', 'Form title')}
				handleCancelButton={handleCancelButton}
				handleSaveButton={handleSaveButton}
				sections={sections}
				showActive={boolean('Show Active', true)}
				tooltipInfo={withInfoIcon && text('Tooltip info', 'Tooltip info')}
			>
				<div>
					<Section id='section1'>
						<h1>Account Profile</h1>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
					</Section>
					<Section id='section2'>
						<h1>Account Information</h1>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
					</Section>
					<Section id='section3'>
						<h1>Contact Information</h1>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
					</Section>
					<Section id='section4'>
						<h1>Address Information</h1>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
					</Section>
					<Section id='section5'>
						<h1>Tags and User</h1>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
					</Section>
					<Section id='section6'>
						<h1>Connections</h1>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
						<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
						</p>
					</Section>
				</div>
			</TopComponent>
		</MainLayout>
	);
};
