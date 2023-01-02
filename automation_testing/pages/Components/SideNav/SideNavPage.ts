import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class SideNavPage extends BasePage {

	readonly page_path = "components-sidenav--example";

	readonly page: Page;
	readonly title: Locator;
	readonly sections: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.title = page.locator("#root h1");
		this.sections = page.locator("[data-testid='section-wrapper']");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}

	async getLocatorOfSelectedSection(sectionTitle: string): Promise<Locator> {
		const sectionText =  this.sections.locator("div");
		for (let i = 0; i < await sectionText.count() ;i++) {
			if (await sectionText.nth(i).textContent() == sectionTitle) {
				return sectionText.nth(i);
			}
		}
	}

	async selectSpecificSection(sectionToSelect: string): Promise<void> {
		const sections =  this.sections.locator("div");
		for (let i = 0; i < await sections.count() ;i++) {
			if (await sections.nth(i).textContent() == sectionToSelect) {
				await sections.nth(i).click({force: true});
				break;
			}
		}
	}
}
