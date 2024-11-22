import * as React from "react";
import type { ReactElement } from "react";
import { useState } from "react";
import { screen, cleanup, render, fireEvent } from "@testing-library/react";

// Components
import type { Item, SideNavArgs } from "@root/components/SideNav";
import SideNav from "@root/components/SideNav";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FolderIcon from "@mui/icons-material/Folder";

afterEach(cleanup);

const addTaskMock = vi.fn();

export const SideNavExample = (): ReactElement => {
	const [content, setContent] = useState<JSX.Element>(<h1>Accounts Content</h1>);
	const [active, setActive] = useState("accounts");

	const onNav = (args: SideNavArgs) => {
		setActive(args.item.name);
		setContent(<h1>{`${args.item.label} Content`}</h1>);
	};

	const items: Item[][] = [
		[
			{
				label: "Home",
				name: "home",
				icon: HomeIcon,
			},
			{
				label: "Accounts",
				name: "accounts",
				icon: AccountCircleIcon,
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Accounts Content</h1>);
				},
			},
		],
		[
			{
				label: "Assets",
				name: "assets",
				badge: "00",
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Assets Content</h1>);
				},
			},
		],
		[
			{
				label: "Tasks",
				name: "tasks",
				badge: "10",
				icon: TaskAltIcon,
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Tasks Content</h1>);
				},
				action: {
					icon: AddCircleOutlineIcon,
					onClick: () => addTaskMock(),
				},
			},
			{
				label: "Documents",
				name: "documents",
				badge: "5",
				icon: FolderIcon,
				onNav: (args) => {
					setActive(args.item.name);
					setContent(<h1>Documents Content</h1>);
				},
			},
		],
	];

	return (
		<div style={{ display: "flex" }}>
			<SideNav items={items} active={active} onNav={onNav} />
			<div>{content}</div>
		</div>
	);
};

const { getByText, getByTestId, getAllByTestId } = screen;

describe("SideNav component", () => {
	beforeEach(() => {
		render(<SideNavExample />);
	});

	it("should displays the items labels", () => {
		expect(getByText("Home"));
		expect(getByText("Accounts"));
		expect(getByText("Assets"));
		expect(getByText("Tasks"));
		expect(getByText("Documents"));
	});

	it("should displays the Accounts content by default", () => {
		expect(getByText("Accounts Content"));
	});

	it("should displays the content selected", () => {
		fireEvent.click(getByText("Home"));
		expect(getByText("Home Content"));

		fireEvent.click(getByText("Accounts"));
		expect(getByText("Accounts Content"));

		fireEvent.click(getByText("Documents"));
		expect(getByText("Documents Content"));
	});

	it("should displays the items icons", () => {
		expect(getByTestId("HomeIcon"));
		expect(getByTestId("TaskAltIcon"));
		expect(getByTestId("AddCircleOutlineIcon"));
		expect(getByTestId("FolderIcon"));
	});

	it("should execute the action of the 'Tasks' item", () => {
		fireEvent.click(getByTestId("AddCircleOutlineIcon"));

		expect(addTaskMock).toHaveBeenCalled();
	});

	it("should show three actions since three lists of items are defined", () => {
		expect(getAllByTestId("section-wrapper").length).toBe(3);
	});

	it("should display the badge counters", () => {
		expect(getByText("00")).toBeDefined();
		expect(getByText("10")).toBeDefined();
		expect(getByText("5")).toBeDefined();
	});
});
