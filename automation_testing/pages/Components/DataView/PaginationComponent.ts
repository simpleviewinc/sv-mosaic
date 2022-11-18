import { BasePage } from "../../BasePage";
import { Locator, Page } from "@playwright/test";

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

	constructor(page: Page) {
		super(page);
		this.headerActionsButton = page.locator(".headerActions button");
		this.resultAmount = this.headerActionsButton.nth(2);
		this.resultOptions = page.locator("ul[role='menu']");
		this.paginationValue = this.headerActionsButton.nth(3);
		this.pagesOption = page.locator(".MuiPopover-paper");
		this.backwardArrow = page.locator(".size_small.variant_icon").nth(0);
		this.forwardArrow = page.locator(".size_small.variant_icon").nth(1);
		this.viewTypeBtn = this.headerActionsButton.nth(1);
		this.viewTypeOption = page.locator("ul[role='menu']");
	}

	async selectResultOption(option: number): Promise<void> {
		await this.resultOptions.locator("li").nth(option - 1).click({ force: true });
		await this.loading.waitFor({ state: "detached" });
	}

	async changeResultPerPage(results: number): Promise<void> {
		await this.resultAmount.click();
		await this.selectResultOption(results);
	}

	async calculatePages(results: number,): Promise<number> {
		const total = parseInt((await this.paginationValue.textContent()).split("of ")[1]);
		let pages = Math.floor(total / results);
		if (total % results != 0) {
			pages++;
		}
		return pages;
	}

	async calulateRecordRangePerPage(results: number, page: number): Promise<string> {
		const total = parseInt((await this.paginationValue.textContent()).split("of ")[1]);
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
		return this.pagesOption.locator("input[type='text']");
	}

	async getPageGoBtn(): Promise<Locator> {
		return this.pagesOption.locator("button");
	}

	async selectViewType(option:string): Promise<void> {
		await this.viewTypeBtn.click();
		await this.page.locator("text=" + option).first().click();
	}
}
