import * as React from "react";
import { ReactElement, useState } from "react";
import { screen, cleanup, render, fireEvent } from "@testing-library/react";
import { Link } from "./NavigationTypes";

// Components
import Navigation from "./Navigation";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FolderIcon from "@mui/icons-material/Folder";

afterEach(cleanup);

const addTaskMock = jest.fn();

export const NavigationExample = (): ReactElement => {
	const [content, setContent] = useState<JSX.Element>(null);
	const links: Link[][] = [
		[
			{
				label: "Home",
				icon: HomeIcon,
				onClick: () => setContent(<h1>Home Content</h1>),
			},
			{
				label: "Accounts",
				icon: AccountCircleIcon,
				onClick: () => setContent(<h1>Accounts Content</h1>),
			},
		],
		[
			{
				label: "Assets",
				badge: "00",
				onClick: () => setContent(<h1>Assets Content</h1>),
			},
		],
		[
			{
				label: "Tasks",
				badge: "10",
				icon: TaskAltIcon,
				onClick: () => setContent(<h1>Tasks Content</h1>),
				action: {
					icon: AddCircleOutlineIcon,
					onClick: () => addTaskMock(),
				},
			},
			{
				label: "Documents",
				badge: "5",
				icon: FolderIcon,
				onClick: () => setContent(<h1>Documents Content</h1>),
			},
		],
	];

	return (
		<div style={{ display: "flex" }}>
			<Navigation links={links} />
			<div>{content}</div>
		</div>
	);
};

const { getByText, getByTestId, getAllByTestId } = screen;

describe("Navigation component", () => {
	beforeEach(() => {
		render(<NavigationExample />)
	});

	it("should displays the links labels", () => {
		expect(getByText("Home"));
		expect(getByText("Accounts"));
		expect(getByText("Assets"));
		expect(getByText("Tasks"));
		expect(getByText("Documents"));
	});

	it("should displays the content selected", () => {
		fireEvent.click(getByText("Home"));
		expect(getByText("Home Content"));

		fireEvent.click(getByText("Accounts"));
		expect(getByText("Accounts Content"));

		fireEvent.click(getByText("Documents"));
		expect(getByText("Documents Content"));
	});

	it("should displays the link icons", () => {
		expect(getByTestId("HomeIcon"));
		expect(getByTestId("TaskAltIcon"));
		expect(getByTestId("AddCircleOutlineIcon"));
		expect(getByTestId("FolderIcon"));
	});

	it("should execute the action of the 'Tasks' link", () => {
		fireEvent.click(getByTestId("AddCircleOutlineIcon"));
		
		expect(addTaskMock).toHaveBeenCalled();
	});

	it("should show three actions since three lists of links are defined", () => {
		expect(getAllByTestId("section-wrapper").length).toBe(3);
	});

	it("should display the badge counters", () => {
		expect(getByText("00")).toBeDefined();
		expect(getByText("10")).toBeDefined();
		expect(getByText("5")).toBeDefined();
	});
});
