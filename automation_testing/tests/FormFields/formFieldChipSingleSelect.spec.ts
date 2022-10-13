import { test, expect } from "@playwright/test";
import { FormFieldChipSingleSelectPage } from "../../pages/FormFields/FormFieldChipSingleSelectPage";

test.describe("FormFields - FormFieldChipSingleSelect - Kitchen Sink", () => {
	let ffChipSingleSelectPage: FormFieldChipSingleSelectPage;

	test.beforeEach(async ({ page }) => {
		ffChipSingleSelectPage = new FormFieldChipSingleSelectPage(page);
		await ffChipSingleSelectPage.visitPage();
	});

	test("Validate the selection Regular Chip Single Select", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain(regularOptionLabel);
			expect(dialog.message()).toContain(regularOptionLabel.replace(/ /g,"_"));
			await dialog.dismiss();
		});
		const regularOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.regularChipSingleSelectDiv);
		const regularOptionLabel = await ffChipSingleSelectPage.regularChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(regularOptionSelected - 1).textContent();
		await ffChipSingleSelectPage.saveBtn.click();
	});

	test("Validate the Disabled Regular Chip Single Select", async () => {
		const numberOfOptions = await ffChipSingleSelectPage.disabledChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).count();
		for (let i = 0; i < numberOfOptions; i++) {
			expect(await ffChipSingleSelectPage.disabledChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(i).getAttribute("aria-disabled")).toBe("true");
		}
	});

	test("Validate the selection Required Chip Single Select", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain(requiredOptionLabel);
			expect(dialog.message()).toContain(requiredOptionLabel.replace(/ /g,"_"));
			await dialog.dismiss();
		});
		const requiredOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.requiredChipSingleSelectDiv);
		const requiredOptionLabel = await ffChipSingleSelectPage.requiredChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(requiredOptionSelected - 1).textContent();
		await ffChipSingleSelectPage.saveBtn.click();
	});

	test("Validate saving the selection for Chip Single Select", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain(regularOptionLabel);
			expect(dialog.message()).toContain(regularOptionLabel.replace(/ /g,"_"));
			expect(dialog.message()).toContain(requiredOptionLabel);
			expect(dialog.message()).toContain(requiredOptionLabel.replace(/ /g,"_"));
			await dialog.dismiss();
		});
		const regularOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.regularChipSingleSelectDiv);
		const requiredOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.requiredChipSingleSelectDiv);
		const regularOptionLabel = await ffChipSingleSelectPage.regularChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(regularOptionSelected - 1).textContent();
		const requiredOptionLabel = await ffChipSingleSelectPage.requiredChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(requiredOptionSelected - 1).textContent();
		await ffChipSingleSelectPage.saveBtn.click();
	});

	test("Validate error when trying to save without selecting Required Single Chip", async () => {
		await ffChipSingleSelectPage.saveBtn.click();
		await expect(ffChipSingleSelectPage.page.locator("p", { hasText: "This field is required, please fill it" })).toBeVisible();
	});
});
