import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { FormFieldChipsPage } from "../../../pages/FormFields/FormFieldChips/FormFieldChipsPage";
import theme from "@root/theme";

test.describe("FormFields - FormFieldChips - Kitchen Sink", () => {
	let page: Page;
	let ffChipSingleSelectPage: FormFieldChipsPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffChipSingleSelectPage = new FormFieldChipsPage(page);
		await ffChipSingleSelectPage.visit(ffChipSingleSelectPage.page_path);
	});

	test("Validate error when trying to save without selecting Required Single Chip", async () => {
		await ffChipSingleSelectPage.saveBtn.click();
		await expect(ffChipSingleSelectPage.page.locator("p", { hasText: "This field is required, please fill it" })).toBeVisible();
	});

	test("Validate the selection Regular Chip Single Select", async () => {
		page.once("dialog", async dialog => {
			expect(dialog.message()).toContain(regularOptionLabel);
			expect(dialog.message()).toContain(regularOptionLabel.replace(/ /g, "_"));
			await dialog.dismiss();
		});
		const regularOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.regularChipSingleSelectDiv);
		const regularOptionLabel = await ffChipSingleSelectPage.regularChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(regularOptionSelected - 1).textContent();
		await ffChipSingleSelectPage.saveBtn.click();
	});

	test("Validate the selection Required Chip Single Select", async () => {
		page.once("dialog", async dialog => {
			expect(dialog.message()).toContain(requiredOptionLabel);
			expect(dialog.message()).toContain(requiredOptionLabel.replace(/ /g, "_"));
			await dialog.dismiss();
		});
		const requiredOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.requiredChipSingleSelectDiv);
		const requiredOptionLabel = await ffChipSingleSelectPage.requiredChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(requiredOptionSelected - 1).textContent();
		await ffChipSingleSelectPage.saveBtn.click();
	});

	test.skip("Validate saving the selection for Chip Single Select", async () => {
		page.once("dialog", async dialog => {
			expect(dialog.message()).toContain(regularOptionLabel);
			expect(dialog.message()).toContain(regularOptionLabel.replace(/ /g, "_"));
			expect(dialog.message()).toContain(requiredOptionLabel);
			expect(dialog.message()).toContain(requiredOptionLabel.replace(/ /g, "_"));
			await dialog.dismiss();
		});
		const regularOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.regularChipSingleSelectDiv);
		const requiredOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.requiredChipSingleSelectDiv);
		const regularOptionLabel = await ffChipSingleSelectPage.regularChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(regularOptionSelected - 1).textContent();
		const requiredOptionLabel = await ffChipSingleSelectPage.requiredChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(requiredOptionSelected - 1).textContent();
		await ffChipSingleSelectPage.saveBtn.click();
	});

	test("Validate the gap between options.", async () => {
		test.skip();
		await page.reload();
		const expectedMarginValue = "12px";
		const rowGap = await ((ffChipSingleSelectPage.fromDBOptionDiv).evaluate(el => getComputedStyle(el).rowGap));
		expect(rowGap).toBe(expectedMarginValue);
		const numberOfOptions = await ffChipSingleSelectPage.fromDBOptionsChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).count();
		for (let i = 0; i < numberOfOptions - 1; i++) {
			await ffChipSingleSelectPage.validateMarginValueFromElement(ffChipSingleSelectPage.fromDBOptionsChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(i), expectedMarginValue, true);
		}
	});

	test("Validate Error message has darkRed color.", async () => {
		const expectColor = theme.newColors.darkRed["100"];
		await ffChipSingleSelectPage.saveBtn.click();
		expect(await ffChipSingleSelectPage.getColorFromElement(ffChipSingleSelectPage.error)).toBe(expectColor);
		expect(await ffChipSingleSelectPage.getColorFromElement(ffChipSingleSelectPage.errorIcon)).toBe(expectColor);
	});
});
