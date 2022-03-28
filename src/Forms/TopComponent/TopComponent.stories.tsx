import * as React from "react";
import { ReactElement } from "react";
import { boolean, withKnobs, text, select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/addon-docs/blocks";

// Components
import TopComponent from "./TopComponent";
import { MainLayout, Section } from "../FormNav/FormNav.styled";

export default {
	title: "Forms|TopComponent",
	decorators: [withKnobs],
} as Meta;

const sections = [
	{
		title: "Account Profile",
		id: "section1",
	},
	{
		title: "Account Information",
		id: "section2",
	},
	{
		title: "Contact Information",
		id: "section3",
	},
	{
		title: "Address Information",
		id: "section4",
	},
	{
		title: "Tags and User",
		id: "section5",
	},
	{
		title: "Connections",
		id: "section6",
	},
];

export const Example = (): ReactElement => {
	const withInfoIcon = boolean("Show info icon", true);

	const handleCancelButton = () => {
		alert("Cancel button was clicked");
	};

	const handleSaveButton = () => {
		alert("Save button was clicked");
	};

	return (
		<MainLayout>
			<TopComponent
				description={text("Description", "Description")}
				onCancel={handleCancelButton}
				onSubmit={handleSaveButton}
				submitButtonAttrs={{
					label: "Save"
				}}
				cancelButtonAttrs={{
					label: "Cancel"
				}}
				title={text("Form title", "Form title")}
				sections={sections}
				showActive={boolean("Show Active", true)}
				tooltipInfo={withInfoIcon && text("Tooltip info", "Tooltip info")}
				view={select("View", ["MOBILE", "DRAWER", "RESPONSIVE", "DESKTOP", "BIG_DESKTOP"], "RESPONSIVE")}
			>
				<div>
					<Section id='section1' className='section'>
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
					<Section id='section2' className='section'>
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
					<Section id='section3' className='section'>
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
					<Section id='section4' className='section'>
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
					<Section id='section5' className='section'>
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
					<Section id='section6' className='section'>
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
