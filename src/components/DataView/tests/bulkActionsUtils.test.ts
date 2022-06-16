import { filterAction } from "../utils/bulkActionsUtils";
import { DataViewAdditionalAction } from "../DataViewTypes";

const onClick = jest.fn();

const rowArgs = {
	row: { id: "5a00d073b082d3e151c153b6", title: "Accesibility" }
};

describe("filterAction helper function", () => {
	it("should return true when action.show is undefined", () => {
		const action: DataViewAdditionalAction = {
			label: "Action label",
			color: "blue",
			name: "edit",
			onClick: onClick,
			show: undefined
		}	

		expect(filterAction(action, rowArgs)).toBe(true);
	});

	it("should return action.show if it's a boolean", () => {
		const action: DataViewAdditionalAction = {
			label: "Action label",
			color: "blue",
			name: "edit",
			onClick: onClick,
			show: false
		}

		expect(filterAction(action, rowArgs)).toBe(false);
	});

	it("should return true if all the elements of action.show are true", () => {
		const action: DataViewAdditionalAction = {
			label: "Action label",
			color: "blue",
			name: "edit",
			onClick: onClick,
			show: [true, true, () => true]
		}

		expect(filterAction(action, rowArgs)).toBe(true);
	});

	it("should return false if at least one element of action.show is false", () => {
		const action: DataViewAdditionalAction = {
			label: "Action label",
			color: "blue",
			name: "edit",
			onClick: onClick,
			show: [true, () => false, true]
		}

		expect(filterAction(action, rowArgs)).toBe(false);
	});

	it("should throw an error when the show attribute of an action is neither a function or boolean", () => {
		const showFn = jest.fn();
		const action: DataViewAdditionalAction = {
			label: "Action label",
			color: "blue",
			name: "edit",
			onClick: onClick,
			show: (args) => showFn(args)
		}

		filterAction(action, rowArgs)

		expect(showFn).toHaveBeenCalledWith(rowArgs);
	});
});
