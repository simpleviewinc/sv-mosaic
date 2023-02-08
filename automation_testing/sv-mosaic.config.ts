import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

	testDir: "tests",
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
	retries: 1,
	timeout: 200000,
	reporter: [ ["html", { open: "never", outputFolder: "./playwright-report"}] ],
	workers: process.env.CI ? 2 : 4,
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
