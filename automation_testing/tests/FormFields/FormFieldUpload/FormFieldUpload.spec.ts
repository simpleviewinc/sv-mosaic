import { test, expect, Page } from "@playwright/test";
import { FormFieldUploadPage } from "../../../pages/FormFields/FormFieldUpload/FormFieldUploadPage";
import { commonKnobs, uploadKnobs } from "../../../utils/data/knobs";

test.describe("FormFields - FormFieldUpload - Playground", () => {
	let page: Page;
	let ffUpload: FormFieldUploadPage;
	const imagePath = `${__dirname}/../../../utils/data/Images/image-example.png`;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffUpload = new FormFieldUploadPage(page);
	});

	test.beforeEach(async() => {
		await ffUpload.removeAllUploadedFiles();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate that the file details are displayed when uploading a file.", async () => {
		await ffUpload.visit(ffUpload.page_path, [uploadKnobs.knobTriggerErrorsWhenLoading + "false"]);
		await ffUpload.uploadFilesInput.setInputFiles(imagePath);
		await expect(ffUpload.fileCardContainerLocator).toBeVisible();
		await expect(ffUpload.fileImageLocator).toBeVisible();
		await expect(ffUpload.fileDeleteButton).toBeVisible();
	});

	test("Validate that the upload button is disabled when activating the disabled knob.", async () => {
		await ffUpload.visit(ffUpload.page_path, [commonKnobs.knobDisabled + "true"]);
		await expect(ffUpload.uploadFilesButton).toBeDisabled();
	});

	test("Validate that no more files are allowed to upload once reached the limit.", async () => {
		const fileLimit = 2;
		const knobTriggerErrorsWhenLoading = uploadKnobs.knobTriggerErrorsWhenLoading + "false";
		const knobUploadLimit = uploadKnobs.knobUploadLimit + fileLimit;
		await ffUpload.visit(ffUpload.page_path, [knobTriggerErrorsWhenLoading, knobUploadLimit]);
		await ffUpload.uploadFilesInput.setInputFiles([imagePath, imagePath]);
		await expect(ffUpload.uploadFilesButton).toHaveCount(0);
		expect(await ffUpload.fileCardContainerLocator.count()).toBe(fileLimit);
	});

	test("Validate that when trying to upload more than the allowed limit of files at the same time, a snack bar message is displayed.", async () => {
		const fileLimit = 2;
		const expectedSnackbar = "Upload limited to only " + fileLimit + " files.";
		const knobTriggerErrorsWhenLoading = uploadKnobs.knobTriggerErrorsWhenLoading + "false";
		const knobUploadLimit = uploadKnobs.knobUploadLimit + fileLimit;
		await ffUpload.visit(ffUpload.page_path, [knobTriggerErrorsWhenLoading, knobUploadLimit]);
		await ffUpload.uploadFilesInput.setInputFiles([imagePath, imagePath, imagePath, imagePath, imagePath]);
		await expect(ffUpload.rolePresentationLocator.locator("p")).toContainText(expectedSnackbar);
	});

	test("Validate that the z-index of the upload button is valid.", async () => {
		await ffUpload.visit(ffUpload.page_path);
		expect(await ffUpload.getZIndexFromElement(ffUpload.uploadFilesSpan)).toBe("1000");
	});

	test("Validate that the delete icons are not visible when the knob disabled is active.", async () => {
		await ffUpload.visit(ffUpload.page_path, [uploadKnobs.knobSimulateInitialFieldValue + "true", commonKnobs.knobDisabled + true]);
		await ffUpload.fileCardContainerLocator.first().waitFor({ state: "attached" });
		await ffUpload.fileCardContainerLocator.first().waitFor({ state: "visible" });
		await ffUpload.wait(1000);
		await expect(ffUpload.fileDeleteButton).toHaveCount(0);
	});
});
