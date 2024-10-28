import type { DataViewProps } from "@root/components";
import { transformColumn, transformRows } from "@root/components/DataView/dataViewTools";

const row1: DataViewProps["data"][number] = { id: "abc123", column1: "Row 1 Column 1", column2: "Row 1 Column 2", column3: "Row 1 Column 3", column4: "Row 1 Column 4" };
const row2: DataViewProps["data"][number] = { id: "def456", column1: "Row 2 Column 1", column2: "Row 2 Column 2", column3: "Row 2 Column 3", column4: "Row 2 Column 4" };
const rows: DataViewProps["data"] = [row1, row2];

const column1: DataViewProps["columns"][number] = { name: "column1", label: "Column 1", transforms: [({ data }) => `${data} - Transformed Data`] };
const column2: DataViewProps["columns"][number] = { name: "column2", label: "Column 2" };
const column3: DataViewProps["columns"][number] = { name: "column3", label: "Column 3", transforms: [() => undefined, () => "Transformed Data"] };
const column4: DataViewProps["columns"][number] = { name: "column4", label: "Column 4", transforms: [({ data, row }) => `${row.column1} | ${data}`] };
const columns = [column1, column2, column3];

describe(`${__dirname} - transformColumn`, () => {
	it("should transform data based on the column transforms provided", async () => {
		const result = transformColumn(row1, column1);

		expect(result).toBe("Row 1 Column 1 - Transformed Data");
	});

	it("should transform data based on the column transforms using other data in the row", async () => {
		const result = transformColumn(row1, column4);

		expect(result).toBe("Row 1 Column 1 | Row 1 Column 4");
	});

	it("should not change the existing data if no column transformations are provided", async () => {
		const result = transformColumn(row1, column2);

		expect(result).toBe("Row 1 Column 2");
	});

	it("should cease transformation if any transformation function in the pipeline returns undefined", async () => {
		const result = transformColumn(row1, column3);

		expect(result).toBeUndefined();
	});
});

describe(`${__dirname} - transformRow`, () => {
	it("should transform rows of data based on the column transforms provided", async () => {
		const result = transformRows(rows, columns);

		expect(result).toStrictEqual([
			{ id: "abc123", column1: "Row 1 Column 1 - Transformed Data", column2: "Row 1 Column 2", column3: undefined, column4: "Row 1 Column 4" },
			{ id: "def456", column1: "Row 2 Column 1 - Transformed Data", column2: "Row 2 Column 2", column3: undefined, column4: "Row 2 Column 4" },
		]);
	});
});
