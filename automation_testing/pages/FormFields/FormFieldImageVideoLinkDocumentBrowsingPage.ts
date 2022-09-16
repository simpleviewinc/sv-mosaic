import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldImageVideoLinkDocumentBrowsingPage extends BasePage {

	readonly page_path = "formfields-formfieldimagevideolinkdocumentbrowsing--kitchen-sink";

	readonly page: Page;
	readonly imageOrVideoWithoutSrcCard: Locator;
	readonly imageWithoutSrcButton: Locator;
	readonly videoWithoutSrcButton: Locator;
	readonly browsingImageWithSrcCard: Locator;
	readonly imageWithSrcButton: Locator;
	readonly browsingVideoWithSrcCard: Locator;
	readonly videoWithSrcButton: Locator;
	readonly browsingDocumentCard: Locator;
	readonly documentButton: Locator;
	readonly linkButton: Locator;
	readonly browsingWithoutAnyOptionsCard: Locator;
	readonly disabledCard: Locator;
	readonly disabledButton: Locator;
	readonly moreButton: Locator;
	readonly threePointsButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.imageOrVideoWithoutSrcCard = page.locator("//*[@id='1']");
		this.imageWithoutSrcButton = page.locator("//*[@id='1']/div/div/div/div/div/div[2]/div/div/div[1]/div[1]");
		this.videoWithoutSrcButton = page.locator("[data-testid='browse-video-test']").nth(1);
		this.browsingImageWithSrcCard = page.locator("//*[@id='2']");
		this.imageWithSrcButton = page.locator("//*[@id='2']/div/div/div/div/div/div[2]/div/div/div/div[1]");
		this.browsingVideoWithSrcCard = page.locator("//*[@id='3']");
		this.videoWithSrcButton = page.locator("//*[@id='3']/div/div/div/div/div/div[2]/div/div/div/div[1]");
		this.browsingDocumentCard = page.locator("//*[@id='4']");
		this.documentButton = page.locator("//*[@id='4']/div/div/div/div/div/div[2]/div/div/div/div[1]");
		this.linkButton = page.locator("//*[@id='5']/div/div/div/div/div/div[2]/div/div/div/div[1]");
		this.browsingWithoutAnyOptionsCard = page.locator("//*[@id='6']");
		this.disabledCard = page.locator("//*[@id='7']");
		this.disabledButton = page.locator("[data-testid='browse-image-test']").nth(3);
		this.moreButton = page.locator("[data-testid='tooltip-test-id']");
		this.threePointsButton = page.locator("[data-testid='icon-button-test']");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}

	async getSpecificInfoFromTable(information:string): Promise<string> {
		return await this.table.locator("tr", {hasText: information}).locator("td").nth(1).textContent();
	}

	async getInformationTitlesFromTable(): Promise<string[]> {
		const titles = [];
		const numberOfRows = await this.table.locator("tr").count();
		for (let i = 0; i < numberOfRows; i++) {
			titles.push(await this.table.locator("tr").nth(i).locator("td").nth(0).textContent());
		}
		return titles;
	}

	async getThreePointsOptionsText(): Promise<string[]> {
		const options = [];
		await this.threePointsButton.click();
		const numberOfOptions = await this.page.locator("li[role='menuitem']").count();
		for (let i = 0; i < numberOfOptions; i++) {
			options.push(await this.page.locator("li[role='menuitem']").nth(i).textContent());
		}
		return options;
	}
}
