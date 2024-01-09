import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldImageVideoLinkDocumentBrowsingPage extends BasePage {

	readonly page_path = "formfields-formfieldimagevideolinkdocumentbrowsing--kitchen-sink";

	readonly page: Page;
	readonly browseImageLocator: string;
	readonly browseVideoLocator: string;
	readonly browseDocumentLocator: string;
	readonly browseLinkLocator: string;

	readonly formHeading: Locator;
	readonly browseAllOptionsCardLocator: Locator;
	readonly browseAllImageWithSrcButton: Locator;
	readonly browseAllVideoWithSrcButton: Locator;
	readonly browseAllDocumentWithSrcButton: Locator;
	readonly browseAllLinkWithSrcButton: Locator;
	readonly imageOrVideoWithoutSrcCardLocator: Locator;
	readonly imageWithoutSrcButton: Locator;
	readonly videoWithoutSrcButton: Locator;
	readonly browsingImageLocator: Locator;
	readonly browsingImageButton: Locator;
	readonly browsingVideoLocator: Locator;
	readonly browsingVideoButton: Locator;
	readonly browsingDocumentLocator: Locator;
	readonly browsingDocumentButton: Locator;
	readonly browsingLinkLocator: Locator;
	readonly browsingLinkButton: Locator;
	readonly browsingWithoutAnyOptionsCard: Locator;
	readonly disabledCard: Locator;
	readonly disabledButton: Locator;
	readonly moreButton: Locator;
	readonly threePointsButton: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.browseImageLocator = "[data-testid='browse-image-test']";
		this.browseVideoLocator = "[data-testid='browse-video-test']";
		this.browseDocumentLocator = "[data-testid='browse-document-test']";
		this.browseLinkLocator = "[data-testid='browse-link-test']";

		this.formHeading = page.getByRole("heading");
		this.browseAllOptionsCardLocator = page.locator("#browseAllOptions");
		this.browseAllImageWithSrcButton = this.browseAllOptionsCardLocator.locator(this.browseImageLocator);
		this.browseAllVideoWithSrcButton = this.browseAllOptionsCardLocator.locator(this.browseVideoLocator);
		this.browseAllDocumentWithSrcButton = this.browseAllOptionsCardLocator.locator(this.browseDocumentLocator);
		this.browseAllLinkWithSrcButton = this.browseAllOptionsCardLocator.locator(this.browseLinkLocator);
		this.imageOrVideoWithoutSrcCardLocator = page.locator("#browseImageOrVideo");
		this.imageWithoutSrcButton = this.imageOrVideoWithoutSrcCardLocator.locator(this.browseImageLocator);
		this.videoWithoutSrcButton = this.imageOrVideoWithoutSrcCardLocator.locator(this.browseVideoLocator);
		this.browsingImageLocator = page.locator("#browseImage");
		this.browsingImageButton = this.browsingImageLocator.locator(this.browseImageLocator);
		this.browsingVideoLocator = page.locator("#browseVideo");
		this.browsingVideoButton = this.browsingImageLocator.locator(this.browseImageLocator);
		this.browsingDocumentLocator = page.locator("#browseDocument");
		this.browsingDocumentButton = this.browsingDocumentLocator.locator(this.browseDocumentLocator);
		this.browsingLinkLocator = page.locator("#browseDocument");
		this.browsingLinkButton = this.browsingLinkLocator.locator(this.browseLinkLocator);
		this.browsingWithoutAnyOptionsCard = page.locator("#withoutAnyBrowsingOption div div div").last();
		this.disabledCard = page.locator("#disabledExample");
		this.disabledButton = this.disabledCard.locator(this.browseImageLocator);
		this.moreButton = page.getByText("More");
		this.threePointsButton = page.locator(this.iconButtonTestLocator);
	}

	async getSpecificInfoFromTable(information:string): Promise<string> {
		const row = this.table.locator("tr", { hasText: information });
		const col = row.locator("td");

		const result = await col.textContent();

		if (!result) {
			return "";
		}

		return result;
	}

	async getInformationTitlesFromTable(): Promise<string[]> {
		const titles = [];
		const numberOfRows = await this.table.locator("tr").count();
		for (let i = 0; i < numberOfRows; i++) {
			titles.push(await this.table.locator("tr").nth(i).locator("th").nth(0).textContent());
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

	async removeAllVisibleCards(): Promise<void> {
		const numberOfCards = await this.page.locator("button", { hasText: "Remove" }).count();
		for (let i = 0; i < numberOfCards; i++) {
			await this.page.locator("text=Remove").nth(0).click();
		}
	}
}
