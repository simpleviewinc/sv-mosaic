import { BasePage } from "../../BasePage";
import type { Locator, Page } from "@playwright/test";

export class PaginationComponent extends BasePage {
	readonly headerActionsButton: Locator;
	readonly resultAmount: Locator;
	readonly resultOptions: Locator;
	readonly paginationValue: Locator;
	readonly pagesOption: Locator;
	readonly backwardArrow: Locator;
	readonly forwardArrow: Locator;
	readonly viewTypeBtn: Locator;
	readonly viewTypeOption: Locator;
	readonly menuItem: Locator;
	readonly resultAmountGrid: Locator;
	readonly paginationValueGrid: Locator;
	readonly gridImage: Locator;
	readonly gridImageCheckbox: Locator;
	readonly headerActionsCheckbox: Locator;
	readonly gridImageInfo: Locator;

	constructor(page: Page) {
		super(page);
		this.headerActionsButton = page.locator(".headerActions button");
		this.resultAmount = this.headerActionsButton.nth(2);
		this.resultOptions = page.locator("ul[role='menu']");
		this.paginationValue = this.headerActionsButton.nth(3);
		this.pagesOption = page.locator(".MuiPopover-paper");
		this.backwardArrow = this.headerActionsButton.nth(4);
		this.forwardArrow = this.headerActionsButton.nth(5);
		this.viewTypeBtn = this.headerActionsButton.nth(1);
		this.viewTypeOption = page.locator("ul[role='menu']");
		this.menuItem = page.locator("[role='menuitem']");

		this.resultAmountGrid = this.headerActionsButton.nth(3);
		this.paginationValueGrid = this.headerActionsButton.nth(4);

		this.gridImage = page.locator(".image");
		this.gridImageCheckbox = this.gridImage.locator(".checkboxContainer");
		this.headerActionsCheckbox = page.locator(".headerActions input");
		this.gridImageInfo = page.locator(".cell .left");
	}

	async selectResultOption(option: number, isList = true): Promise<void> {
		const resultLocator = isList ? this.resultAmount : this.resultAmountGrid;
		await resultLocator.click();
		await this.menuItem.locator(":scope", { hasText: option.toString() }).click({ force: true });
		await this.loading.waitFor({ state: "detached" });
	}

	async calculatePages(results: number): Promise<number> {
		const total = parseInt((await this.paginationValue.textContent()).split("of ")[1]);
		let pages = Math.floor(total / results);
		if (total % results != 0) {
			pages++;
		}
		return pages;
	}

	async calulateRecordRangePerPage(results: number, page: number, isList = true): Promise<string> {
		const paginationLocator = isList ? this.paginationValue : this.paginationValueGrid;
		const total = parseInt((await paginationLocator.textContent()).split("of ")[1]);
		let final = results * page;
		const init = final - (results - 1);
		if (final > total) {
			final = total;
		}
		return `${init}-${final} of ${total}`;
	}

	async getPagesLabel(): Promise<Locator> {
		return this.pagesOption.locator("span").nth(1);
	}

	async getPageInput(): Promise<Locator> {
		return this.page.getByLabel("Page*", { exact: true });
	}

	async getPageGoBtn(): Promise<Locator> {
		return this.page.getByRole("button", { name: "Go" });
	}

	async selectViewType(option: "List" | "Grid"): Promise<void> {
		await this.viewTypeBtn.click();
		await this.page.locator("text=" + option).first().click();
	}
}
