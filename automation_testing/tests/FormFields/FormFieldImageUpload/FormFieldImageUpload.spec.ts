import { test, expect, Page } from "@playwright/test";
import { FormFieldImageUploadPage } from "../../../pages/FormFields/FormFieldImageUpload/FormFieldImageUploadPage";
import theme from "../../../../src/theme";

test.describe.parallel("FormFields - FormFieldImageUpload - Kitchen Sink", () => {
	let page: Page;
	let ffImageUploadPage: FormFieldImageUploadPage;
	const imagePath = `${__dirname}/../../../utils/data/Images/image-example.png`;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffImageUploadPage = new FormFieldImageUploadPage(page);
		await ffImageUploadPage.visit(ffImageUploadPage.page_path);
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate Image Upload with menu options and without set Focus handler", async () => {
		test.skip();

		await ffImageUploadPage.imageUploadWithoutSetFocusHandlerInput.setInputFiles(imagePath);
		await expect(ffImageUploadPage.imageUploadWithoutSetFocusHandlerDiv).toContainText("Size");
		const buttons = ffImageUploadPage.imageUploadWithoutSetFocusHandlerDiv.locator("button");
		expect(await buttons.count()).toBe(2);
		expect(await buttons.locator(":scope", { hasText: "Remove" }).textContent()).toBe("Remove");
	});

	test("Validate Image Upload with menu options and with set Focus handler", async () => {
		test.skip();
		await ffImageUploadPage.setDialogValidationListener("Set focus is called");
		await page.reload();
		await ffImageUploadPage.imageUploadWithSetFocusHandlerInput.waitFor();
		await ffImageUploadPage.imageUploadWithSetFocusHandlerInput.setInputFiles(imagePath);
		await expect(ffImageUploadPage.imageUploadWithSetFocusHandlerDiv).toContainText("Size");
		const buttons = ffImageUploadPage.imageUploadWithSetFocusHandlerDiv.locator("button");
		expect(await buttons.count()).toBe(2);
		await ffImageUploadPage.imageUploadWithSetFocusHandlerDiv.locator("button", { hasText: "View" }).click();
		expect(ffImageUploadPage.imageUploadWithSetFocusHandlerDiv).toContainText("Click on the image to set the focus point");
		await ffImageUploadPage.imageUploadWithSetFocusHandlerDiv.locator("canvas").click();
		await ffImageUploadPage.imageUploadWithSetFocusHandlerDiv.locator("button", { hasText: "Set Focus" }).click();
	});

	test("Validate Disabled Image upload.", async () => {
		await expect(ffImageUploadPage.disabledImageUploadButton).toBeDisabled();
	});

	test("Validate saving Image Upload with menu options and without set Focus", async () => {
		test.skip();

		page.once("dialog", async dialog => {
			expect(dialog.message()).toContain('"imgName": "' + imageName + '"');
			expect(dialog.message()).toContain('"height": ' + height);
			expect(dialog.message()).toContain('"width": ' + width);
			await dialog.dismiss();
		});
		const imageName = "image-example.png";
		const imagePath = `${__dirname}/../../../utils/data/Images/` + imageName;
		await ffImageUploadPage.imageUploadWithoutSetFocusHandlerInput.setInputFiles(imagePath);
		await ffImageUploadPage.imageUploadWithoutSetFocusHandlerDiv.waitFor();
		const size = ((await ffImageUploadPage.imageUploadWithoutSetFocusHandlerDiv.textContent()).replace("Size", "").replace("Remove", "").split("x"));
		const width = Number(size[0]);
		const height = Number(size[1]);
		await ffImageUploadPage.saveBtn.click();
	});

	test("Validate that the Instruction Icon color is realTeal", async () => {
		const iconCount = await ffImageUploadPage.instructionIcon.count();
		for (let i = 0; i < iconCount; i++) {
			expect(await ((ffImageUploadPage.instructionIcon.nth(i)).evaluate(el => getComputedStyle(el).fill))).toBe(theme.newColors.realTeal["100"]);
		}
	});

	test("Validate Image Upload (with focus)  border has grey2 in border.", async () => {
		test.skip();
		const expectedColor = theme.newColors.grey2["100"];
		await ffImageUploadPage.imageUploadWithSetFocusHandlerInput.setInputFiles(imagePath);
		expect(await ffImageUploadPage.getSpecificBorderFromElement(ffImageUploadPage.imageUploadWithSetFocusHandlerDiv, "all")).toContain(expectedColor);
	});
});
