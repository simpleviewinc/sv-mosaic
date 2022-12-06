import { test, expect, Page } from "@playwright/test";
import { FormFieldImageUploadPage } from "../../pages/FormFields/FormFieldImageUploadPage";
import theme from "../../../src/theme";

test.describe.parallel("FormFields - FormFieldImageUpload - Kitchen Sink", () => {
	let page: Page;
	let ffImageUploadPage: FormFieldImageUploadPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffImageUploadPage = new FormFieldImageUploadPage(page);
		await ffImageUploadPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate Image Upload with menu options and without set Focus handler", async () => {
		const imagePath = `${__dirname}/../../utils/data/Images/image-example.png`;
		await ffImageUploadPage.imageUploadWithoutSetFocusHandlerInput.setInputFiles(imagePath);
		await expect(ffImageUploadPage.imageUploadWithoutSetFocusHandlerDiv).toContainText("Size");
		const buttons = ffImageUploadPage.imageUploadWithoutSetFocusHandlerDiv.locator("button");
		expect(await buttons.count()).toBe(2);
		expect(await buttons.locator(":scope", { hasText: "Remove" }).textContent()).toBe("Remove");
	});

	test("Validate Image Upload with menu options and with set Focus handler", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Set focus is called");
			await dialog.dismiss();
		});
		await page.reload();
		await ffImageUploadPage.imageUploadWithSetFocusHandlerInput.waitFor();
		const imagePath = `${__dirname}/../../utils/data/Images/image-example.png`;
		await ffImageUploadPage.imageUploadWithSetFocusHandlerInput.setInputFiles(imagePath);
		await expect(ffImageUploadPage.imageUploadWithSetFocusHandlerDiv).toContainText("Size");
		const buttons = ffImageUploadPage.imageUploadWithSetFocusHandlerDiv.locator("button");
		expect(await buttons.count()).toBe(2);
		await ffImageUploadPage.imageUploadWithSetFocusHandlerDiv.locator("button", { hasText: "View" }).click();
		expect(ffImageUploadPage.imageUploadWithSetFocusHandlerDiv).toContainText("Click on the image to set the focus point");
		await ffImageUploadPage.imageUploadWithSetFocusHandlerDiv.locator("canvas").click();
		await ffImageUploadPage.imageUploadWithSetFocusHandlerDiv.locator("button", { hasText: "Set Focus" }).click();
	});

	test("Validate Disabled Image upload", async () => {
		await expect(ffImageUploadPage.disabledImageUpload).toContainText("Image Upload disabled");
		await expect(ffImageUploadPage.disabledImageUploadDiv).toContainText("Loading Image");
	});

	test("Validate saving Image Upload with menu options and without set Focus", async () => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain('"imgName": "' + imageName + '"');
			expect(dialog.message()).toContain('"height": ' + height);
			expect(dialog.message()).toContain('"width": ' + width);
			await dialog.dismiss();
		});
		const imageName = "image-example.png"
		const imagePath = `${__dirname}/../../utils/data/Images/` + imageName;
		await ffImageUploadPage.imageUploadWithoutSetFocusHandlerInput.setInputFiles(imagePath);
		const size = ((await ffImageUploadPage.imageUploadWithoutSetFocusHandlerDiv.textContent()).replace("Size", "").replace("Remove", "").split("x"));
		const width = Number(size[0]);
		const height = Number(size[1]);
		await ffImageUploadPage.saveBtn.click();
	});

	test("Validate Instruction Icon ", async () => {
		const expectColor = theme.newColors.realTeal["100"];
		const numberOfIcons = await ffImageUploadPage.instructionIcon.count();
		for (let i = 0; i < numberOfIcons - 1; i++) {
			expect(await ((ffImageUploadPage.instructionIcon.nth(i)).evaluate(el => getComputedStyle(el).fill))).toBe(expectColor);
		}
		expect(await ffImageUploadPage.getColorFromElement(ffImageUploadPage.instructionIcon.nth(numberOfIcons - 1))).toBe(expectColor);
	});
});
