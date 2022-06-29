import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormWithLayout extends BasePage {

	readonly page: Page;
	readonly topComponentContainer: Locator;
	readonly topComponentContainerSections: Locator;
	readonly sectionContainer: Locator;
	readonly sectionRows: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.topComponentContainer = page.locator("div.ehYpWB.sc-cqpYsc");
		this.topComponentContainerSections = page.locator("div.sc-exkUMo");
		this.sectionContainer = page.locator(".section");
		this.sectionRows = page.locator("div.sc-gPzReC div.bOGurL.sc-eXNvrr");
	}

	async getNumberOfSectionsFromTopComponent():Promise<number> {
		await this.topComponentContainer.waitFor();
		return await this.topComponentContainerSections.count();
	}   

	async getNumberOfSections():Promise<number> {
		return await this.sectionContainer.count();
	} 

	async getSectionsTitlesFromTopComponent():Promise<string[]> {
		const numberOfSections = await this.getNumberOfSectionsFromTopComponent();
		const sectionTitles = [];
		for (let i = 0; i <  numberOfSections; i++) {
			sectionTitles.push(await this.topComponentContainer.locator("a").nth(i).textContent());
		}
		return sectionTitles;
	}
	
	async getPositionOfSection(section:string):Promise<number> {
		const sections = this.getSectionsTitlesFromTopComponent();
		return (await sections).indexOf(section);
	} 

	async getSectionsTitles():Promise<string[]> {
		const numberOfSections = await this.getNumberOfSectionsFromTopComponent();
		const sectionTitles = [];
		for (let i = 0; i <  numberOfSections; i++) {
			sectionTitles.push(await this.sectionContainer.locator("h1").nth(i).textContent());
		}
		return sectionTitles;
	}

	async getSectionsDescriptions():Promise<string[]> {
		const numberOfSections = await this.getNumberOfSectionsFromTopComponent();
		const sectionsDescriptions = [];
		for (let i = 0; i <  numberOfSections; i++) {
			sectionsDescriptions.push(await this.sectionContainer.locator("p").nth(i).textContent());
		}
		return sectionsDescriptions;
	}

	async getNumberOfColumsInEachRowFromSections():Promise<number[]> {
		const numberOfRows = await this.sectionRows.count();
		const numberOfColumsPerRow = [];
		for (let i = 0; i <  numberOfRows; i++) {
			numberOfColumsPerRow.push(await this.sectionRows.nth(i).locator(".sc-gVyKpa").count());
		}
		return numberOfColumsPerRow;
	}

	async getSelectedSectionFromTopComponent():Promise<string> {
		await this.topComponentContainer.waitFor();
		await this.wait();
		return await this.topComponentContainer.locator(".czFTET").textContent();
	}

	async isSectionVisible(section:string):Promise<boolean> {
		return await this.sectionContainer.locator("h1", {hasText: section}).isVisible();
	}
	
	async scrollToSection(section:string):Promise<void> {
		await this.topComponentContainer.waitFor({ state: "visible" });
		await this.sectionContainer.locator("h1", {hasText: section}).scrollIntoViewIfNeeded();
	}

	async validateSectionTopComponentElementIsSelected(section:string):Promise<void> {
		await this.topComponentContainer.waitFor({ state: "visible" });
		const indexOfSection = await this.getPositionOfSection(section);
		await expect(this.topComponentContainerSections.nth(indexOfSection)).toHaveClass(/czFTET/);
	}
}