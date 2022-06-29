import { expect, Page, Locator } from "@playwright/test";
import { url } from "../utils/formUrls";

export class BasePage {

	readonly page: Page;
	readonly loading: Locator;
	readonly title: Locator;

	constructor(page: Page) {
		this.page = page;
		this.loading = page.locator("div.loading");
		this.title = page.locator("span.dOZUzk.sc-eTpRJs");
	}

	async visit(componentUrl:string): Promise<void> {
		await this.page.goto(url(componentUrl), { timeout: 900000 });
		await this.title.waitFor();
	}

	async validateSnapshot(component: Locator, name: string): Promise<void> {
		await component.waitFor({ state: "visible" });
		await component.waitFor({ state: "attached" });
		await this.loading.waitFor({ state: "detached" });
		expect(await component.screenshot()).toMatchSnapshot("dataview-" + name + ".png", { threshold: 0.3, maxDiffPixelRatio: 0.3 })
	}

	async wait(): Promise<void> {
		await this.page.waitForTimeout(1000);
	}

	async setDialogValidationListener(message: string): Promise<void> {
		this.page.on("dialog", async dialog => {
			expect(dialog.message()).toContain(message);
			dialog.accept();
		});
	}

} 