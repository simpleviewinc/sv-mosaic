import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DownloaderProps } from "@root/components/Downloader/DownloaderTypes";

import Downloader from "@root/components/Downloader/Downloader";

async function setup(props: Partial<DownloaderProps> = {}) {
	const renderResult = await act(async () => render(
		<Downloader
			color="yellow"
			variant="contained"
			url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
			muiAttrs={{ "aria-label": "Download" }}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the downloader button", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Download" })).toBeInTheDocument();
	});

	it("should inject an iframe into the page body with correct URL and remove it once loaded", { timeout: 20000 }, async () => {
		const { user, baseElement } = await setup();

		const button = screen.queryByRole("button", { name: "Download" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		const iframe = baseElement.querySelector("iframe");
		expect(iframe).toBeInTheDocument();
		expect(iframe).toHaveAttribute("src", "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf");

		await act(async () => iframe.onload(new Event("load")));

		expect(baseElement.querySelector("iframe")).toBeNull();
	});
});
