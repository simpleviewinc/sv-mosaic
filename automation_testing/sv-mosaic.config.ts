import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

	testDir: "tests/dataview",
	use: {
		headless: true,
		viewport: { width: 1280, height: 720 },
		actionTimeout: 1500000,
		ignoreHTTPSErrors: true,
		//video: "retain-on-failure",
		//screenshot: "only-on-failure"
		video: "off",
		screenshot: "off"
	},
	projects: [
		{
			name: "Chromium",
			use: { browserName: "chromium" },
		},
		{
			name: "Firefox",
			use: { browserName: "firefox" },
		},
		{
			name: "Webkit",
			use: { browserName: "webkit" },
		}
	]
}

export default config;
