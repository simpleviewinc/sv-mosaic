import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormWithLayout extends BasePage {

	readonly page_path = "components-form--form-with-layout";

	readonly page: Page;
	readonly topComponentContainer: Locator;
	readonly topComponentContainerSections: Locator;
	readonly sectionContainer: Locator;
	readonly formTopComponent: Locator;
	readonly formLayout: Locator;
	readonly sections: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.topComponentContainer = page.locator("//*[@id='root']/div/div/form/div[1]/div[2]");
		this.topComponentContainerSections = this.topComponentContainer.locator("a");
		this.sectionContainer = page.locator("[data-testid='section-test-id']");
		this.formTopComponent = page.locator("//*[@id='root']/div/div/form/div[1]");
		this.formLayout = page.locator("[data-testid='form-layout-test-id']");
		this.sections = page.locator(".form-nav-wrapper");
	}

	async getNumberOfSectionsFromTopComponent():Promise<number> {
		await this.topComponentContainer.waitFor();
		return await this.topComponentContainerSections.count();
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
		const result = [];
		for (let i = 0; i <  amount; i++) {
			if (stringFlag) {
				result.push(await locator.nth(i).textContent());
			} else {
				indexOfSection = i + 1;
				result.push(await locator.locator(`//*[@id='root']/div/form/div[2]/div["${indexOfSection}"]/div/div/div`).count());
			}
		}
		return result;
	}

	async getSectionsTitlesFromTopComponent():Promise<string[]> {
		return await this.getSectionData(this.topComponentContainer.locator("a"), "string");
	}

	async getSectionsTitles():Promise<string[]> {
		return await this.getSectionData(this.sectionContainer.locator("h1"), "string");
	}

	async getSectionsDescriptions():Promise<string[]> {
		return await this.getSectionData(this.sectionContainer.locator("p"), "string");
	}

	async getNumberOfColumsInEachRowFromSections():Promise<number[]> {
		let numberOfRowsInSection = 0;
		const numberOfColumsPerRow = [];
		const numberOfSections = await this.getNumberOfSectionsFromTopComponent();
		for (let i = 1; i <= numberOfSections; i++) {
			numberOfRowsInSection = await this.page.locator("#root > div > form > div:nth-child(2) > div:nth-child(" + i + ") > div > div").count();
			for (let j = 1; j <= numberOfRowsInSection; j++) {
				numberOfColumsPerRow.push(await this.page.locator("#root > div > form > div:nth-child(2) > div:nth-child(" + i + ") > div > div:nth-child(" + j + ") > div").count());
			}
		}
		return numberOfColumsPerRow;
	}

	async getSelectedSectionFromTopComponent():Promise<string> {
		await this.topComponentContainer.waitFor();
		await this.wait();
		return await this.topComponentContainer.locator(".highlight").textContent();
	}

	async isSectionVisible(section:string):Promise<boolean> {
		return await this.sectionContainer.locator("h1", {hasText: section}).isVisible();
	}

	async scrollToSection(section:string):Promise<void> {
		await this.topComponentContainer.waitFor({ state: "visible" });
		await this.sectionContainer.locator("h1", {hasText: section}).scrollIntoViewIfNeeded();
	}

	async validateSectionTopComponentElementIsSelected(section:string):Promise<string> {
		await this.topComponentContainer.waitFor({ state: "visible" });
		const indexOfSection = await this.getPositionOfSection(section);
		return (await this.topComponentContainerSections.nth(indexOfSection).evaluate(el => getComputedStyle(el.parentElement as Element).borderBottom)).split("rgb")[1];
	}
}
