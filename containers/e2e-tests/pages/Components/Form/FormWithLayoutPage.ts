import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormWithLayout extends BasePage {

	readonly page_path = "components-form--profile";

	readonly page: Page;
	readonly topComponentContainer: Locator;
	readonly topComponentContainerSections: Locator;
	readonly sideNav: Locator;
	readonly sideNavSections: Locator;
	readonly sectionContainer: Locator;
	readonly formTopComponent: Locator;
	readonly formLayout: Locator;
	readonly sections: Locator;
	readonly panelContentLocator: Locator;
	readonly expandMoreIconLocator: Locator;
	readonly toggleLocator: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.topComponentContainer = page.locator("//*[@id='root']/div/div/form/div[1]/div[2]");
		this.topComponentContainerSections = this.topComponentContainer.locator("a");
		this.sideNav = page.locator(".form-primary").locator("nav");
		this.sideNavSections = this.sideNav.locator("a");
		this.sectionContainer = page.locator("[data-testid='section-test-id']");
		this.formTopComponent = page.locator("//*[@id='root']/div/div/form/div[1]");
		this.formLayout = page.locator("[data-testid='form-layout-test-id']");
		this.sections = page.locator(".form-nav-wrapper");
		this.panelContentLocator = page.locator("#panel1a-content");
		this.expandMoreIconLocator = page.locator("[data-testid='ExpandMoreIcon']");
		this.toggleLocator = page.locator("#toggle").locator("[type='checkbox']");
	}

	async getNumberOfSectionsFromTopComponent():Promise<number> {
		await this.topComponentContainer.waitFor();
		return await this.topComponentContainerSections.count();
	}

	async getNumberOfSectionsFromSideNav():Promise<number> {
		await this.sideNav.waitFor();
		return await this.sideNavSections.count();
	}

	async getNumberOfSections():Promise<number> {
		return await this.sectionContainer.count();
	}

	async getPositionOfSection(section:string):Promise<number> {
		const sections = this.getSectionsTitlesFromTopComponent();
		return (await sections).indexOf(section);
	}

	/**
	 * This method return the specified data of a provided locator.
	 * @param locator: Locator from where the data will be extrated.
	 * @param dataType: Type of data to be returned.
	 * @returns: Returns an array with the information contained in the provided locator.
	 */
	async getSectionData(locator:Locator, dataType: string):Promise<string[]> {
		const amount = await locator.count();
		const stringFlag = dataType == "string" ? true : false;
		let indexOfSection = 0;
		const result: string[] = [];
		for (let i = 0; i < amount; i++) {
			if (stringFlag) {
				const textContent = await locator.nth(i).textContent();
				result.push(textContent || "");
			} else {
				indexOfSection = i + 1;
				const count = await locator.locator(`//*[@id='root']/div/form/div[2]/div["${indexOfSection}"]/div/div/div`).count();
				result.push(typeof count === "number" && Number.isFinite(count) ? String(count) : "");
			}
		}
		return result;
	}

	async getSectionsTitlesFromTopComponent():Promise<string[]> {
		return await this.getSectionData(this.topComponentContainer.locator("a"), "string");
	}

	async getSectionsTitlesFromSideNav():Promise<string[]> {
		return await this.getSectionData(this.sideNav.locator("a"), "string");
	}

	async getSectionsTitles():Promise<string[]> {
		return await this.getSectionData(this.sectionContainer.locator("h1"), "string");
	}

	async getSectionsDescriptions():Promise<string[]> {
		return await this.getSectionData(this.sectionContainer.locator("p"), "string");
	}

	async getNumberOfColumsInEachRowFromSections():Promise<number[]> {
		let numberOfRowsInSection = 0;
		const numberOfColumsPerRow: number[] = [];
		const numberOfSections = await this.getNumberOfSectionsFromSideNav();
		for (let i = 1; i <= numberOfSections; i++) {
			numberOfRowsInSection = await this.page.locator("#root > div > form > div:nth-child(2) > div:nth-child(" + i + ") > div > div").count();
			for (let j = 1; j <= numberOfRowsInSection; j++) {
				numberOfColumsPerRow.push(await this.page.locator("#root > div > form > div:nth-child(2) > div:nth-child(" + i + ") > div > div:nth-child(" + j + ") > div").count());
			}
		}
		return numberOfColumsPerRow;
	}

	async getSelectedSectionFromSideNav():Promise<string | null> {
		await this.sideNav.waitFor();
		await this.wait();
		return await this.sideNav.locator(".highlight").textContent();
	}

	async isSectionVisible(section:string):Promise<boolean> {
		return await this.sectionContainer.locator("h1", { hasText: section }).isVisible();
	}

	async scrollToSection(section:string):Promise<void> {
		await this.topComponentContainer.waitFor({ state: "visible" });
		await this.sectionContainer.locator("h2", { hasText: section }).scrollIntoViewIfNeeded();
	}

	async validateSectionTopComponentElementIsSelected(section:string):Promise<string> {
		await this.topComponentContainer.waitFor({ state: "visible" });
		const indexOfSection = await this.getPositionOfSection(section);
		return (await this.topComponentContainerSections.nth(indexOfSection).evaluate(el => getComputedStyle(el.parentElement as Element).borderBottom)).split("rgb")[1];
	}
}
