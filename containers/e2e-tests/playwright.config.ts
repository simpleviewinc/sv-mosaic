import { defineConfig, devices } from "@playwright/test";
import { env } from "./utils/urls/environments";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: "./tests",
	forbidOnly: !!process.env.CI,
	retries: 2,
	timeout: 30000,
	reporter: [["html", { open: "never", outputFolder: "./playwright-report" }]],
	workers: process.env.CI ? 2 : 4,
	fullyParallel: true,
	use: {
		headless: true,
		viewport: { width: 1280, height: 720 },
		actionTimeout: 1500000,
		trace: "on-first-retry",
		ignoreHTTPSErrors: true,
		video: "off",
		screenshot: "off",
		baseURL: process.env.ENV ? env[process.env.ENV] : "http://kube.simpleview.io:10001/iframe.html",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},

		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},

		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] },
		},
	],
});
