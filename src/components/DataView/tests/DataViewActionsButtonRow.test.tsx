import * as React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import CreateIcon from "@mui/icons-material/Create";
import DataViewActionsButtonRow from "../DataViewActionsButtonRow/DataViewActionsButtonRow";
import { DataViewAction } from "../DataViewTypes";

afterEach(cleanup);

const originalRowData = {
	_id: "5a00d073b082d3e151c153b6",
	title: "Accessibility",
	image_id: "5bf5984f2539843898af5973",
	target: false,
	created: "2017-11-06T21:12:48.436Z",
	content_owner: "default",
	image: {
		_id: "5bf5984f2539843898af5973",
		original_public_id:
      "clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5",
		title:
      "Urban Institute of Contemporary Arts - Artwork: Anne Schierbeek & Hauming Wang",
		notes:
      "Photographer: Mod Bettie for Simpleville, 2018\r\n\r\nModels and DisArt models",
		resource_raw: {
			public_id:
        "clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5",
			version: 1542821844,
			signature: "0e20b987d4cbc5812a8f228ead305940b4fca479",
			width: 3600,
			height: 2400,
			format: "jpg",
			resource_type: "image",
			created_at: "2018-11-21T17:37:24.000Z",
			pages: 1,
			bytes: 994104,
			type: "upload",
			etag: "9ea6da6f910e791d3a6a968be0d58c2a",
			placeholder: false,
			url:
        "http://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",
			secure_url:
        "https://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg",
			access_mode: "public",
			exif: {
				ApertureValue: "2643856/1000000",
				Artist: "ELISE KUTT",
				ColorSpace: "1",
				Copyright: "MOD BETTIE 2018",
				CustomRendered: "0",
				DateTime: "2018:10:24 22:27:42",
				DateTimeDigitized: "2018:10:24 22:06:47",
				DateTimeOriginal: "2018:10:24 22:06:47",
				ExifImageLength: "2400",
				ExifImageWidth: "3600",
				ExifOffset: "288",
				ExifVersion: "48, 50, 51, 48",
				ExposureBiasValue: "0/1",
				ExposureMode: "1",
				ExposureProgram: "1",
				ExposureTime: "1/125",
				Flash: "16",
				FlashPixVersion: "48, 49, 48, 48",
				FNumber: "25/10",
				FocalLength: "50/1",
				FocalPlaneResolutionUnit: "3",
				FocalPlaneXResolution: "61166933/32768",
				FocalPlaneYResolution: "61166933/32768",
				ISOSpeedRatings: "1250",
				Make: "Canon",
				MaxApertureValue: "625/1000",
				MeteringMode: "5",
				Model: "Canon EOS 5D Mark IV",
				Orientation: "1",
				ResolutionUnit: "2",
				SceneCaptureType: "0",
				ShutterSpeedValue: "6965784/1000000",
				Software: "Adobe Photoshop Lightroom Classic 8.0 (Macintosh)",
				SubSecTimeDigitized: "00",
				SubSecTimeOriginal: "00",
				Compression: "6",
				JPEGInterchangeFormat: "824",
				JPEGInterchangeFormatLength: "9069",
				XResolution: "300/1",
				YResolution: "300/1",
				WhiteBalance: "0",
			},
			original_filename: "file",
		},
		credits: "Experience Simpleville",
		content_owner: "default",
		title_sort:
      "urban institute of contemporary arts - artwork: anne schierbeek & hauming wang",
		updated: "2018-11-21T17:39:27.140Z",
		deleted: false,
		created: "2018-11-21T17:39:27.140Z",
		id: "5bf5984f2539843898af5973",
		type: "image",
		resource: {
			raw: {
				resource_type: "image",
				format: "jpg",
				pages: 1,
				public_id:
          "clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5",
			},
		},
		inAssetRequest: false,
		alt_text:
      "Urban Institute of Contemporary Arts - Artwork: Anne Schierbeek & Hauming Wang",
	},
	id: "5a00d073b082d3e151c153b6",
	categories_ids: [
		"559f072f0863a8ba5f91501f",
		"55943f9e3c392ffe4438c9fa",
		"559f11050863a8ba5f915978",
		"55b8d672eb99f56e7000cf69",
		"57dc39326936854518019804",
	],
	categories: [
		{
			_id: "55943f9e3c392ffe4438c9fa",
			updated: "2015-07-01T19:29:34.799Z",
			sort_tag: "experience Simpleville",
			created: "2015-07-01T19:29:34.799Z",
			tag: "Experience Simpleville",
			id: "55943f9e3c392ffe4438c9fa",
		},
		{
			_id: "559f072f0863a8ba5f91501f",
			tag: "Service Providers",
			sort_tag: "service providers",
			updated: "2015-07-09T23:43:43.505Z",
			created: "2015-07-09T23:43:43.505Z",
			id: "559f072f0863a8ba5f91501f",
		},
		{
			_id: "559f11050863a8ba5f915978",
			tag: "Deals & Discounts",
			sort_tag: "deals & discounts",
			updated: "2015-07-10T00:25:41.972Z",
			created: "2015-07-10T00:25:41.972Z",
			id: "559f11050863a8ba5f915978",
		},
		{
			_id: "55b8d672eb99f56e7000cf69",
			tag: "Southwest",
			sort_tag: "southwest",
			updated: "2015-07-29T13:34:42.093Z",
			created: "2015-07-29T13:34:42.093Z",
			id: "55b8d672eb99f56e7000cf69",
		},
		{
			_id: "57dc39326936854518019804",
			tag: "Tours & Experiences",
			sort_tag: "tours & experiences",
			updated: "2016-09-16T18:25:54.043Z",
			created: "2016-09-16T18:25:54.044Z",
			id: "57dc39326936854518019804",
		},
	],
};

const mockClickCallback = jest.fn();

const primaryActions: DataViewAction[] = [
	{
		name: "edit",
		color: "black",
		variant: "icon",
		mIcon: CreateIcon,
		onClick: function({ data }) {
			mockClickCallback(data);
		},
	},
];

const additionalActions = [
	{
		name: "view_children",
		label: "View Children",
		onClick: function({ data }) {
			mockClickCallback(data);
		},
	},
	{
		name: "history",
		label: "History",
		onClick: function({ data }) {
			mockClickCallback(data);
		},
	},
];

const { getAllByRole, getByText } = screen;

describe("DataViewActionsButtonRow component", () => {
	beforeEach(() => {
		render(
			<DataViewActionsButtonRow
				primaryActions={primaryActions}
				additionalActions={additionalActions}
				originalRowData={originalRowData}
			/>
		);
	});

	it("should execute the 'Edit' primary action with the original row data", () => {
		const buttons = getAllByRole("button");
		const primaryActionButton = buttons[0];
		fireEvent.click(primaryActionButton);
		expect(mockClickCallback).toHaveBeenCalledWith(originalRowData);
	});

	it("should execute the 'View Children' additional action with the original row data", () => {
		const buttons = getAllByRole("button");
		const additionalActionButton = buttons[1];
		fireEvent.click(additionalActionButton);
		fireEvent.click(getByText("View Children"));
		expect(mockClickCallback).toHaveBeenCalledWith(originalRowData);
	});

	it("should execute the 'History' additional action with the original row data", () => {
		const buttons = getAllByRole("button");
		const additionalActionButton = buttons[1];
		fireEvent.click(additionalActionButton);
		fireEvent.click(getByText("History"));
		expect(mockClickCallback).toHaveBeenCalledWith(originalRowData);
	});
});
