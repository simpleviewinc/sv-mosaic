import { test, expect } from "@playwright/test";
import { FormFieldImageUploadPage } from "../../pages/FormFields/FormFieldImageUploadPage";

test.describe("FormFields - FormFieldImageUpload - Kitchen Sink", () => {
	let ffImageUploadPage: FormFieldImageUploadPage;

	test.beforeEach(async ({ page }) => {
		ffImageUploadPage = new FormFieldImageUploadPage(page);
		await ffImageUploadPage.visitPage();
	});

	test("Validate Image Upload with menu options and without set Focus handler", async () => {
		const imagePath = `${__dirname}/../../utils/data/Images/image-example.png`;
		await ffImageUploadPage.imageUploadWithoutSetFocusHandlerInput.setInputFiles(imagePath);
		await expect(ffImageUploadPage.imageUploadWithoutSetFocusHandlerDiv).toContainText("Size");
		const buttons = ffImageUploadPage.imageUploadWithoutSetFocusHandlerDiv.locator("button");
		expect(await buttons.count()).toBe(2);
		expect(await buttons.locator(":scope", { hasText: "Remove" }).textContent()).toBe("Remove");
	});

	test("Validate Image Upload with menu options and with set Focus handler", async ({ page }) => {
		page.on("dialog", async dialog => {
			expect(dialog.message()).toContain("Set focus is called");
			await dialog.dismiss();
		});
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

	test("Validate saving Image Upload with menu options and without set Focus", async ({ page }) => {
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
});
