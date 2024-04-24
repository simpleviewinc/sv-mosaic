import * as React from "react";
import "@testing-library/jest-dom";
import { screen, cleanup, render, act } from "@testing-library/react";
import Mail from "@mui/icons-material/Mail";
import Edit from "@mui/icons-material/Edit";
import Public from "@mui/icons-material/Public";
import Button from "../Button";
import { MenuItemProps } from "../MenuItem";
import "@testing-library/jest-dom";

// Components
import TopSummary, { TopSummaryTypes } from ".";
import { ReactElement, useState } from "react";

afterEach(cleanup);

const ComponentExample = (props: {
	descriptionItems?: TopSummaryTypes["descriptionItems"];
	mainActions?: TopSummaryTypes["mainActions"];
	showAdditionalActions?: boolean;
}): ReactElement => {

	const { showAdditionalActions = true, mainActions, descriptionItems } = props;
	const [checked, setChecked] = useState<boolean>(false);

	const textLinks = [
		{
			label: "Text link",
			mIcon: Public,
			href: "https://www.google.com/",
			onClick: jest.fn(),
		},
		{
			label: "Text link",
			mIcon: Public,
			href: "https://www.google.com/",
			onClick: jest.fn(),
		},
		{
			label: "Text link",
			mIcon: Public,
			href: "https://www.google.com/",
			onClick: jest.fn(),
		},
	];

	const tempDescriptionItems = [
		<p key={1}>Information</p>,
		<p key={2}>Information</p>,
		<p key={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque</p>,
		<Button
			key={4}
			attrs={{ $linkButton: true }}
			color="black"
			variant="text"
			label={textLinks[0].label}
			mIcon={textLinks[0].mIcon}
			href={textLinks[0].href}
			{...textLinks[0]}
		/>,
		<Button
			key={5}
			attrs={{ $linkButton: true }}
			color="black"
			variant="text"
			label={textLinks[1].label}
			mIcon={textLinks[1].mIcon}
			href={textLinks[1].href}
			{...textLinks[1]}
		/>,
		<Button
			key={6}
			attrs={{ $linkButton: true }}
			color="black"
			variant="text"
			label={textLinks[2].label}
			mIcon={textLinks[2].mIcon}
			href={textLinks[2].href}
			{...textLinks[2]}
		/>,
	];

	const tempMainActions: TopSummaryTypes["mainActions"] = [
		{
			label: "Button 1",
			mIcon: Mail,
			onClick: jest.fn(),
			color: "black",
			variant: "text",
		},
		{
			label: "Button 2",
			mIcon: Mail,
			onClick: jest.fn(),
			color: "black",
			variant: "text",
		},
		{
			label: "Button 3",
			mIcon: Edit,
			onClick: jest.fn(),
			color: "black",
			variant: "text",
		},
	];

	const title = "Title";

	const img = "https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg";

	let additionalActions: MenuItemProps[] | undefined = undefined;

	if (showAdditionalActions) {
		additionalActions = [
			{
				label : "Edit",
				onClick : jest.fn(),
			},
			{
				label : "Download",
				onClick : jest.fn(),
			},
		];
	}

	const favorite = {
		checked: checked,
		onClick: (val) => setChecked(val),
	};

	return (
		<TopSummary
			title={title}
			favorite={favorite}
			img={img}
			mainActions={mainActions ?? tempMainActions}
			additionalActions={additionalActions}
			descriptionItems={descriptionItems ?? tempDescriptionItems}
		/>
	);
};

describe("TopSummary", () => {
	it("Should display the image", async () => {
		await act(async () => {
			render(<ComponentExample />);
		});

		const image = await screen.findByRole("img");
		expect(image).toBeInTheDocument();
	});

	it("Should display the title", async () => {
		await act(async () => {
			render(<ComponentExample />);
		});

		const title = await screen.findByText("Title");
		expect(title).toBeInTheDocument();
	});

	it("Should display favorite icon", async () => {
		let element;
		await act(async () => {
			element = render(<ComponentExample />);
		});

		const iconButtons = await screen.findAllByTestId("icon-button-test");
		const starButton = iconButtons[0];
		expect(starButton).toBeInTheDocument();
		expect(element.container.getElementsByClassName("unchecked").length).toBe(1);

		await act(async () => {
			starButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		expect(element.container.getElementsByClassName("checked").length).toBe(1);
	});

	it("Should display 3 main action buttons", async () => {
		await act(async () => {
			render(<ComponentExample />);
		});

		const mainActionButtons = await screen.findAllByTestId("btn-main-action");
		expect(mainActionButtons).toHaveLength(3);
	});

	it("Should not display the menu that contains the additional actions", async () => {
		await act(async () => {
			render(<ComponentExample showAdditionalActions={false} />);
		});

		const additionalActions = screen.queryByTestId("btn-additional-action");
		expect(additionalActions).not.toBeInTheDocument();
	});

	it("Should display additional action button", async () => {
		await act(async () => {
			render(<ComponentExample />);
		});

		const kebabAdditionalActions = await screen.findByTestId("btn-additional-action");
		expect(kebabAdditionalActions).toBeInTheDocument();

		await act(async () => {
			kebabAdditionalActions.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		const editButton = await screen.findByText("Edit");
		expect(editButton).toBeInTheDocument();
	});

	it("Should display 6 description items", async () => {
		await act(async () => {
			render(<ComponentExample />);
		});

		const descriptionItems = await screen.findAllByTestId("description-item");
		expect(descriptionItems).toHaveLength(6);
	});
});
