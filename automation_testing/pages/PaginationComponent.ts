import { Locator, Page } from "@playwright/test";

export class PaginationComponent {
	readonly resultAmount: Locator;
	readonly resultOptions: Locator;
	readonly loading: Locator;
	readonly paginationValue: Locator;
	readonly pagesOption: Locator;
	readonly backwardArrow: Locator;
	readonly forwardArrow: Locator;
	readonly viewTypeBtn: Locator;
	readonly viewTypeOption: Locator;

	constructor(page: Page) {
		this.resultAmount = page.locator(".variant_text button.MuiButton-root").nth(4);
		this.resultOptions = page.locator("ul[role='menu']");
		this.loading = page.locator("div.loading");
		this.paginationValue = page.locator(".variant_text button.MuiButton-root").nth(5);
		this.pagesOption = page.locator(".MuiPopover-paper");
		this.backwardArrow = page.locator(".size_small.variant_icon").nth(0);
		this.forwardArrow = page.locator(".size_small.variant_icon").nth(1);
		this.viewTypeBtn = page.locator(".variant_text button.MuiButton-root").nth(3);
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

	async selectViewTypeListOption(): Promise<void> {
		await this.viewTypeBtn.click();
		await this.viewTypeOption.locator("li").nth(0).click();
	}

	async selectViewTypeGridOption(): Promise<void> {
		await this.viewTypeBtn.click();
		await this.viewTypeOption.locator("li").nth(1).click();
	}
}
