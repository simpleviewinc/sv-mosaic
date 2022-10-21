import * as React from "react";
import "@testing-library/jest-dom";
import { screen, cleanup, render, act } from "@testing-library/react";
import Mail from "@mui/icons-material/Mail";
import Edit from "@mui/icons-material/Edit";
import Public from "@mui/icons-material/Public";
import Button from "../Button";
import { MenuItemProps } from "../MenuItem";

// Components
import SummaryPageTopComponent, { SummaryPageTopComponentTypes } from ".";
import { ReactElement, useState } from "react";

afterEach(cleanup);

const ComponentExample = (props: {
	descriptionItems?: SummaryPageTopComponentTypes["descriptionItems"];
	mainActions?: SummaryPageTopComponentTypes["mainActions"];
}): ReactElement => {

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

	const {
		descriptionItems = [
			<p key={1}>Information</p>,
			<p key={2}>Information</p>,
			<p key={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque</p>,
			<Button
				key={4}
				attrs={{linkButton: true}}
				color="black"
				variant="text"
				label={textLinks[0].label}
				mIcon={textLinks[0].mIcon}
				href={textLinks[0].href}
				{...textLinks[0]}
			/>,
			<Button
				key={5}
				attrs={{linkButton: true}}
				color="black"
				variant="text"
				label={textLinks[1].label}
				mIcon={textLinks[1].mIcon}
				href={textLinks[1].href}
				{...textLinks[1]}
			/>,
			<Button
				key={6}
				attrs={{linkButton: true}}
				color="black"
				variant="text"
				label={textLinks[2].label}
				mIcon={textLinks[2].mIcon}
				href={textLinks[2].href}
				{...textLinks[2]}
			/>,
		],
		mainActions = [
			{
				label: "Button 1",
				mIcon: Mail,
				onClick: jest.fn(),
				color: "black",
				variant: "text"
			},
			{
				label: "Button 2",
				mIcon: Mail,
				onClick: jest.fn(),
				color: "black",
				variant: "text"
			},
			{
				label: "Edit",
				mIcon: Edit,
				onClick: jest.fn(),
				color: "black",
				variant: "text",
			}
		]
	} = props;

	const title = "Title";

	const img = "https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg";

	const additionalActions: MenuItemProps[] = [
		{
			label : "Edit",
			onClick : jest.fn()
		},
		{
			label : "Download",
			onClick : jest.fn()
		}
	];

	const favorite = {
		checked: checked,
		onClick: (val) => setChecked(val),
	};

	return (
		<SummaryPageTopComponent
			title={title}
			favorite={favorite}
			img={img}
			mainActions={mainActions}
			additionalActions={additionalActions}
			descriptionItems={descriptionItems}
		/>
	);
};

describe("SummaryPageTopComponent", () => {
	it("Should display the image", async () => {
		await act(async () => {
			render(<ComponentExample />)
		});

		const image = await screen.findByRole("img");
		expect(image).toBeInTheDocument();
	});

	it("Should display the title", async () => {
		await act(async () => {
			render(<ComponentExample />)
		});

		const title = await screen.findByText("Title");
		expect(title).toBeInTheDocument();
	});

	it("Should display favorite icon", async () => {
		await act(async () => {
			render(<ComponentExample />)
		});

		let star = await screen.findByTestId("StarBorderRoundedIcon");
		expect(star).toBeInTheDocument();

		await act(async () => {
			star.dispatchEvent(new MouseEvent("click", {bubbles: true}));
		});

		star = await screen.findByTestId("StarRateRoundedIcon");
		expect(star).toBeInTheDocument();
	});

	it("Should display 3 main action buttons", async () => {
		await act(async () => {
			render(<ComponentExample />)
		});

		const mainActionButtons = await screen.findAllByTestId("btn-main-action");
		expect(mainActionButtons).toHaveLength(3);
	});

	it.todo("Should throw an error with more than 3 main action buttons");
	// it.todo("Should throw an error with more than 3 main action buttons", async () => {
	// 	jest.spyOn(console, "error").mockImplementation();

	// 	const newMainActions: SummaryPageTopComponentTypes["mainActions"] = [
	// 		{
	// 			label: "Button 1",
	// 			mIcon: Mail,
	// 			onClick: jest.fn(),
	// 			color: "black",
	// 			variant: "text"
	// 		},
	// 		{
	// 			label: "Button 2",
	// 			mIcon: Mail,
	// 			onClick: jest.fn(),
	// 			color: "black",
	// 			variant: "text"
	// 		},
	// 		{
	// 			label: "Edit",
	// 			mIcon: Edit,
	// 			onClick: jest.fn(),
	// 			color: "black",
	// 			variant: "text",
	// 		},
	// 		{
	// 			label: "Button 1",
	// 			mIcon: Mail,
	// 			onClick: jest.fn(),
	// 			color: "black",
	// 			variant: "text"
	// 		},
	// 		{
	// 			label: "Button 2",
	// 			mIcon: Mail,
	// 			onClick: jest.fn(),
	// 			color: "black",
	// 			variant: "text"
	// 		},
	// 		{
	// 			label: "Edit",
	// 			mIcon: Edit,
	// 			onClick: jest.fn(),
	// 			color: "black",
	// 			variant: "text",
	// 		}
	// 	]

	// 	await act(async () => {
	// 		// try {
	// 		// 	render(<ComponentExample mainActions={newMainActions} />);
	// 		// } catch (e) {
	// 		// 	expect(e.message).toEqual("mainActions prop must receive 3 elements or less.");
	// 		// }

	// 		expect(() => render(<ComponentExample mainActions={newMainActions} />)).toThrowError("mainActions prop must receive 3 elements or less.");
	// 	});
	// });

	it("Should display additional action button", async () => {
		await act(async () => {
			render(<ComponentExample />)
		});

		const kebabAdditionalActions = await screen.findByTestId("btn-additional-action");
		expect(kebabAdditionalActions).toBeInTheDocument();

		await act(async () => {
			kebabAdditionalActions.dispatchEvent(new MouseEvent("click", {bubbles: true}));
		});

		const editButton = await screen.findByText("Edit");
		expect(editButton).toBeInTheDocument();
	});

	it("Should display 6 description items", async () => {
		await act(async () => {
			render(<ComponentExample />)
		});

		const descriptionItems = await screen.findAllByTestId("description-item");
		expect(descriptionItems).toHaveLength(6);
	});

	it.todo("Should throw an error with more than 6 description elements");
	// it.todo("Should throw an error with more than 6 description elements", async () => {
	// 	jest.spyOn(console, "error").mockImplementation();

	// 	const newDescriptionItems = [
	// 		<p key={1}>Information</p>,
	// 		<p key={2}>Information</p>,
	// 		<p key={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec iaculis quam adipiscing elit. Quisque</p>,
	// 		<p key={4}>Information</p>,
	// 		<p key={5}>Information</p>,
	// 		<p key={6}>Information</p>,
	// 		<p key={7}>Information</p>,
	// 	]

	// 	await act(async () => {
	// 		// try {
	// 		// 	render(<ComponentExample descriptionItems={newDescriptionItems} />);
	// 		// } catch (e) {
	// 		// 	expect(e.message).toEqual("descriptionElements prop must receive 6 elements or less.");
	// 		// }
	// 		expect(() => render(<ComponentExample descriptionItems={newDescriptionItems} />)).toThrowError("descriptionElements prop must receive 6 elements or less.");
	// 	});
	// });
});
