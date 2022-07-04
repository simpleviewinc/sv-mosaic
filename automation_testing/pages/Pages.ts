import { expect, Page, Locator } from "@playwright/test";
import { url } from "../utils/formUrls";

export class Pages {

	readonly page: Page;
	readonly loading: Locator;
	readonly applyBtn: Locator;
	readonly clearBtn: Locator;
	readonly cancelBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.loading = page.locator("div.loading");
		this.applyBtn = page.locator("text=Apply");
		this.clearBtn = page.locator("text=Clear");
		this.cancelBtn = page.locator("text=Cancel");
	}

	async visit(page: string, element: Locator): Promise<void> {
		await this.page.goto(url(page), { timeout: 900000 });
		await element.waitFor();
	}

	async validateSnapshot(component: Locator, name: string): Promise<void> {
		await component.waitFor({ state: "visible" });
		await component.waitFor({ state: "attached" });
		await this.loading.waitFor({ state: "detached" });
		expect(await component.screenshot()).toMatchSnapshot("dataview-" + name + ".png", { threshold: 0.3, maxDiffPixelRatio: 0.3 })
	}

	async wait(): Promise<void> {
		await this.page.waitForTimeout(500);
	}

	async setDialogValidationListener(message: string): Promise<void> {
		this.page.on("dialog", async dialog => {
			expect(dialog.message()).toContain(message);
			dialog.accept();
		});
	}

	async waitForElementLoad(): Promise<void> {
		await this.loading.waitFor({ state: "detached" });
	}
}
