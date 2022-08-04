import { test, expect } from "@playwright/test";
import { FormFieldChipSingleSelectPage } from "../../pages/FormFields/FormFieldChipSingleSelectPage";

test.describe("FormFields - FormFieldImageUpload - Kitchen Sink", () => {
	let ffChipSingleSelectPage: FormFieldChipSingleSelectPage;

	test.beforeEach(async ({ page }) => {
		ffChipSingleSelectPage = new FormFieldChipSingleSelectPage(page);
		await ffChipSingleSelectPage.visitPage();
	});

	test("Validate the selection Regular Chip Single Select ", async () => {
		const numberOfOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.regularChipSingleSelectDiv);
		const bgColor = await ffChipSingleSelectPage.getBackgroundColorFromOption(numberOfOptionSelected, false);
		expect(bgColor).toBe("rgb(252, 188, 47)");
		await ffChipSingleSelectPage.selectSpecificChipOption(numberOfOptionSelected, false);
		expect(bgColor).toBe("rgb(240, 241, 240)");
	});

	test("Validate the Disabled Regular Chip Single Select", async () => {
		const numberOfOptions = await ffChipSingleSelectPage.disabledChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).count();
		for (let i = 0; i < numberOfOptions; i++) {
			expect(await ffChipSingleSelectPage.disabledChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(i).getAttribute("aria-disabled")).toBe("true");
		}
	});

	test("Validate the selection Required Chip Single Select ", async () => {
		const numberOfOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.requiredChipSingleSelectDiv);
		const bgColor = await ffChipSingleSelectPage.getBackgroundColorFromOption(numberOfOptionSelected, true);
		expect(bgColor).toBe("rgb(252, 188, 47)");
		await ffChipSingleSelectPage.selectSpecificChipOption(numberOfOptionSelected, false);
		expect(bgColor).toBe("rgb(240, 241, 240)");
	});

	test("Validate saving the selection for Chip Single Select", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain('"chipRegular": "' + regularOptionLabel + '"');
			expect(dialog.message()).toContain('"chipRequired": "' + requiredOptionLabel + '"');
			await dialog.dismiss();
		});
		const regularOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.regularChipSingleSelectDiv);
		const requiredOptionSelected = await ffChipSingleSelectPage.selectRandomChipOption(ffChipSingleSelectPage.requiredChipSingleSelectDiv);
		const regularOptionLabel = await ffChipSingleSelectPage.regularChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(regularOptionSelected - 1).textContent();
		const requiredOptionLabel = await ffChipSingleSelectPage.requiredChipSingleSelectDiv.locator(ffChipSingleSelectPage.optionButton).nth(requiredOptionSelected - 1).textContent();
		await ffChipSingleSelectPage.saveBtn.click();
	});
});