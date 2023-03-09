import { expect, Page, Locator } from "@playwright/test";
import { url, urlWithKnobs } from "../utils/formUrls";
import { generateRandomId, rgbToHex } from "../utils/helpers/helper";
import { getDateFormatted } from "../utils/helpers/dateHelper";
import theme from "../../src/theme";

export class BasePage {

	readonly page: Page;
	readonly loading: Locator;
	readonly title: Locator;
	readonly description: Locator;
	readonly applyBtn: Locator;
	readonly clearBtn: Locator;
	readonly cancelBtn: Locator;
	readonly saveBtn: Locator;
	readonly table: Locator;
	readonly errorMessage: Locator;
	readonly latitude: Locator;
	readonly longitude: Locator;
	readonly saveCoordinatesButton: Locator;
	readonly drawerSaveButton: Locator;
	readonly drawerCancelButton: Locator;
	readonly error: Locator;
	readonly errorIcon: Locator;
	readonly checkboxTestIdLocator: Locator;
	readonly tooltip: Locator;
	readonly checkboxLabel: Locator;
	readonly drawerTitle: Locator;
	readonly showStateLocator: Locator;
	readonly menuItem: Locator;
	readonly menuLocator: Locator;
	readonly checkboxInputString: string;
	readonly chipTestIDLocator: Locator;
	readonly formTestID: Locator;
	readonly roleOptionLocator: Locator;
	readonly rolePresentationLocator: Locator;
	readonly deleteIconSelectedOptionChip: Locator;
	readonly formLocator: Locator;
	readonly button: Locator;
	backIconLocator: Locator;
	readonly inputLocator: Locator;
	readonly tableBodyRowLocator: Locator;
	readonly tableBodyColumnLocator: Locator;
	readonly tableHeadRowLocator: Locator;
	readonly iconButtonTestLocator: string;
	readonly viewContainerLocator: Locator;

	constructor(page: Page) {
		this.page = page;
		this.loading = page.locator("div.loading");
		this.title = page.locator("h1");
		this.description = page.locator("//*[@id='root']/div/div/form/div[1]/div/div[1]/span");
		this.applyBtn = page.locator("text=Apply");
		this.clearBtn = page.locator("text=Clear");
		this.cancelBtn = page.locator("button:has-text('Cancel')");
		this.saveBtn = page.locator("text=Save");
		this.table = page.locator("table");
		this.errorMessage = page.locator("p.Mui-error");
		this.formTestID = page.locator("[data-testid='form-test-id']");
		this.latitude = page.locator("input#lat");
		this.longitude = page.locator("input#lng");
		this.saveCoordinatesButton = this.formTestID.nth(1).locator("button", { hasText: "Save Coordinates" });
		this.drawerSaveButton = page.locator("//html/body/div[5]/div[3]/div/div/div/form/div[1]/div/span[2]/button");
		this.drawerCancelButton = page.locator("//html/body/div[5]/div[3]/div/div/div/form/div[1]/div/span[1]/button");
		this.error = page.locator(".Mui-error.MuiFormHelperText-root");
		this.errorIcon = page.locator("[data-testid='error-icon-test-id']");
		this.checkboxTestIdLocator = page.locator("[data-testid='checkbox-test-id'] input");
		this.tooltip = page.locator("[role='tooltip']");
		this.checkboxLabel = page.locator("[data-testid='label-test-id']");
		this.drawerTitle = page.locator("form h1");
		this.showStateLocator = page.locator("#root pre");
		this.menuItem = page.locator("[role='menuitem']");
		this.menuLocator = page.locator("[role='menu']");
		this.checkboxInputString = "input[type='checkbox']";
		this.chipTestIDLocator = page.locator("[data-testid='chip-testid']");
		this.roleOptionLocator = page.locator("[role='option']");
		this.rolePresentationLocator = page.locator("[role='presentation']");
		this.deleteIconSelectedOptionChip = page.locator("[data-testid='delete-icon-test-id']");
		this.formLocator = page.locator("form");
		this.button = page.locator("button");
		this.inputLocator = page.locator("input");
		this.tableBodyRowLocator = page.locator("tbody tr");
		this.tableBodyColumnLocator = page.locator("tbody td");
		this.tableHeadRowLocator = page.locator("thead tr");
		this.iconButtonTestLocator = "[data-testid='icon-button-test']";
		this.viewContainerLocator = page.locator(".viewContainer");
	}

	async visit(page_path: string, knobs?: string[]): Promise<void> {
		if (knobs) {
			await this.page.goto(urlWithKnobs(page_path, knobs), { waitUntil: "domcontentloaded", timeout: 900000 });
		} else {
			await this.page.goto(url(page_path), { waitUntil: "domcontentloaded", timeout: 900000 });
		}
	}

	async validateSnapshot(component: Locator, name: string): Promise<void> {
		await component.waitFor({ state: "visible" });
		await component.waitFor({ state: "attached" });
		await this.loading.waitFor({ state: "detached" });
		expect(await component.screenshot()).toMatchSnapshot("dataview-" + name + ".png", { threshold: 0.3, maxDiffPixelRatio: 0.3 })
	}

	async setDialogValidationListener(_message: string): Promise<void> {
		this.page.once("dialog", async dialog => {
			expect(dialog.message()).toContain(_message);
			await dialog.accept();
		});
	}

	async wait(timeout = 500): Promise<void> {
		await this.page.waitForTimeout(timeout);
	}

	async waitForElementLoad(): Promise<void> {
		await this.loading.waitFor({ state: "detached" });
	}

	async clearAllValuesFromField(locator: Locator): Promise<void> {
		await locator.click();
		await this.page.keyboard.press("Home");
		await this.page.keyboard.down("Shift");
		await this.page.keyboard.press("End");
		await this.page.keyboard.up("Shift");
		await this.page.keyboard.press("Backspace");
		await locator.waitFor();
	}

	async getElementWidth(element:Locator, withPadding: boolean):Promise<number> {
		await element.waitFor({ state: "visible" });
		const width = (await ((element).evaluate(el => getComputedStyle(el).width))).split("px")[0];
		if (withPadding) {
			const leftPadding = ((await ((element).evaluate(el => getComputedStyle(el).paddingLeft))).split("px")[0]);
			const rightPadding = ((await ((element).evaluate(el => getComputedStyle(el).paddingRight))).split("px")[0]);
			return Number(width) + Number(leftPadding) + Number(rightPadding);
		} else {
			return Number(width);
		}
	}

	async getAutogeneratedText(length: number): Promise<string> {
		return generateRandomId(length);
	}

	async getTodayDate(): Promise<string> {
		return getDateFormatted(new Date());
	}

	async getLimitOfMaxChar(locator: Locator): Promise<number> {
		const textContent = await locator.textContent();
		return Number(textContent?.split("/")[1]);
	}

	async getNumberOfCharactersInMaxCharField(locator: Locator): Promise<number> {
		const textContent = await locator.textContent();
		return Number(textContent?.split("/")[0]);
	}

	async selectOptionFromDropdown(dropdown: Locator, option:string): Promise<void> {
		await dropdown.click({force: true});
		await this.page.locator("text=" + option).nth(0).click();
	}

	async validateFontColorFromElement(element: Locator, expectedValue: string, isHex: boolean): Promise<void> {
		let elementFontColor = (await ((element).evaluate(el => getComputedStyle(el).color))).split("rgb")[1];
		if (isHex) {
			const color = elementFontColor.slice(1, -1);
			const hex = rgbToHex(Number(color.split(",")[0]), Number(color.split(",")[1]), Number(color.split(",")[2]));
			elementFontColor = hex;
		}
		expect(elementFontColor).toBe(expectedValue);
	}

	async isFontBold(element: Locator): Promise<boolean> {
		const fontWeight = (await ((element).evaluate(el => getComputedStyle(el).fontWeight)));
		if (Number(fontWeight) > 400 || fontWeight === "bold" || fontWeight === "bolder") {
			return true;
		}
		return false;
	}

	async selectAndDeleteText(stringLenght:number): Promise<void> {
		await this.page.keyboard.press("ArrowRight");
		await this.page.keyboard.down("Shift");
		for (let i = 0; i < stringLenght; i++) {
			await this.page.keyboard.press("ArrowLeft");
		}
		await this.page.keyboard.up("Shift");
		await this.page.keyboard.press("Backspace");
	}

	async getFontWeightFromElement(element: Locator): Promise<string> {
		return await ((element).evaluate(el => getComputedStyle(el).fontWeight));
	}

	async getFontSizeFromElement(element: Locator): Promise<string> {
		return await ((element).evaluate(el => getComputedStyle(el).fontSize));
	}

	async validateMarginValueFromElement(element: Locator, expectedValue: string, isRight: boolean): Promise<void> {
		let elementMargin: string;
		if (isRight) {
			elementMargin = await ((element).evaluate(el => getComputedStyle(el).marginLeft));
		} else {
			elementMargin = await ((element).evaluate(el => getComputedStyle(el).marginRight));
		}
		expect(elementMargin).toBe(expectedValue);
	}

	async getSpecificMarginFromElement(element: Locator, margin: "top"|"bottom"|"right"|"left"|"all"): Promise<string> {
		switch (margin) {
		case "top":
			return await ((element).evaluate(el => getComputedStyle(el).marginTop));
		case "bottom":
			return await ((element).evaluate(el => getComputedStyle(el).marginBottom));
		case "right":
			return await ((element).evaluate(el => getComputedStyle(el).marginRight));
		case "left":
			return await ((element).evaluate(el => getComputedStyle(el).marginLeft));
		case "all":
			return await ((element).evaluate(el => getComputedStyle(el).margin));
		default:
			return await ((element).evaluate(el => getComputedStyle(el).margin));
		}
	}

	async getFontFamilyFromElement(element: Locator): Promise<string> {
		return await ((element).evaluate(el => getComputedStyle(el).fontFamily));
	}

	async getHeightFromElement(element: Locator): Promise<string> {
		return await ((element).evaluate(el => getComputedStyle(el).height));
	}

	async getBackgroundColorFromElement(element: Locator): Promise<string> {
		return await ((element).evaluate(el => getComputedStyle(el).backgroundColor));
	}

	async getColorFromElement(element: Locator): Promise<string> {
		return await ((element).evaluate(el => getComputedStyle(el).color));
	}

	async getOnlyStringWithLetters(text:string): Promise<string> {
		return (text.replace(/[^a-zA-Z ]+/g, "")).trim();
	}

	async getSpecificPaddingFromElement(element: Locator, section?: "all"|"top"|"bottom"|"right"|"left"): Promise<string> {
		switch (section) {
		case "all":
			return await ((element).evaluate(el => getComputedStyle(el).padding));
		case "top":
			return await ((element).evaluate(el => getComputedStyle(el).paddingTop));
		case "bottom":
			return await ((element).evaluate(el => getComputedStyle(el).paddingBottom));
		case "right":
			return await ((element).evaluate(el => getComputedStyle(el).paddingRight));
		case "left":
			return await ((element).evaluate(el => getComputedStyle(el).paddingLeft));
		default:
			return await ((element).evaluate(el => getComputedStyle(el).padding));
		}
	}

	async getGapFromElement(element: Locator): Promise<string> {
		return await ((element).evaluate(el => getComputedStyle(el).gap));
	}

	async getSpecificBorderFromElement(element: Locator, section?: "all"|"right"|"left"|"top"|"bottom"): Promise<string> {
		switch (section) {
		case "all":
			return await ((element).evaluate(el => getComputedStyle(el).border));
		case "right":
			return await ((element).evaluate(el => getComputedStyle(el).borderRight));
		case "left":
			return await ((element).evaluate(el => getComputedStyle(el).borderLeft));
		case "top":
			return await ((element).evaluate(el => getComputedStyle(el).borderTop));
		case "bottom":
			return await ((element).evaluate(el => getComputedStyle(el).borderBottom));
		default:
			return await ((element).evaluate(el => getComputedStyle(el).border));
		}
	}

	async getCursorFromElement(element: Locator): Promise<string> {
		return await ((element).evaluate(el => getComputedStyle(el).cursor));
	}

	async getHRefFromElement(element: Locator): Promise<string> {
		return await ((element).evaluate(el => el.getAttribute("href")));
	}

	async validateTitleStylingOfLocator(titleLocator: Locator): Promise<void> {
		expect(await this.getFontFamilyFromElement(titleLocator), "Checking Font Family of the Title").toContain("Museo-Sans");
		expect(await this.getFontSizeFromElement(titleLocator), "Checking Font Size of the Title").toBe("28px");
		expect(await this.getFontWeightFromElement(titleLocator), "Checking Font Weight of the Title").toBe((theme.fontWeight.light).toString());
		expect(await this.getColorFromElement(titleLocator), "Checking Font Color of the Title").toBe(theme.newColors.almostBlack["100"]);
	}

	async getZIndexFromElement(element: Locator): Promise<string> {
		return await ((element).evaluate(el => getComputedStyle(el).zIndex));
	}
}
