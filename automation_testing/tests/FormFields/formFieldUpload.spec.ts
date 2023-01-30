import { test, expect, Page } from "@playwright/test";
import { FormFieldUploadPage } from "../../pages/FormFields/FormFieldUploadPage";
import { commonKnobs, uploadKnobs } from "../../utils/data/knobs";

test.describe.parallel("FormFields - FormFieldUpload - Kitchen Sink", () => {
	let page: Page;
	let ffUpload: FormFieldUploadPage;
	const imagePath = `${__dirname}/../../utils/data/Images/image-example.png`;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		ffUpload = new FormFieldUploadPage(page);
		await ffUpload.visitPage();
	});

	test.beforeEach(async() => {
		await ffUpload.removeAllUploadedFiles();
	});

	test.afterAll(async ({ browser }) => {
		browser.close;
	});

	test("Validate that the file details are displayed when uploading a file.", async () => {
		await ffUpload.visitPage([uploadKnobs.knobTriggerErrorsWhenLoading + "false"]);
		await ffUpload.uploadFilesInput.setInputFiles(imagePath);
		await expect(ffUpload.fileCardContainerLocator).toBeVisible();
		await expect(ffUpload.fileImageLocator).toBeVisible();
		await expect(ffUpload.fileDeleteButton).toBeVisible();
	});

	test("Validate that the error message is displayed when uploading a file.", async () => {
		await ffUpload.visitPage([uploadKnobs.knobTriggerErrorsWhenLoading + "true"]);
		await ffUpload.uploadFilesInput.setInputFiles(imagePath);
		await expect(ffUpload.errorMessage).toBeVisible();
		await expect(ffUpload.errorMessage).toContainText("File size exceeded");
	});

	test("Validate that the upload button is disabled when activating the disabled knob.", async () => {
		await ffUpload.visitPage([commonKnobs.knobDisabled + "true"]);
		await expect(ffUpload.uploadFilesButton).toBeDisabled();
	});

	test("Validate that no more files are allowed to upload once reached the limit.", async () => {
		const fileLimit = 2;
		const knobTriggerErrorsWhenLoading = uploadKnobs.knobTriggerErrorsWhenLoading + "false";
		const knobUploadLimit = uploadKnobs.knobUploadLimit + fileLimit;
		await ffUpload.visitPage([knobTriggerErrorsWhenLoading, knobUploadLimit]);
		await ffUpload.uploadFilesInput.setInputFiles([imagePath, imagePath]);

		expect(await ffUpload.fileCardContainerLocator.count()).toBe(fileLimit);
		await expect(ffUpload.uploadFilesButton).toBeDisabled();
	});

	// Snackbar is not showing. 
	test.skip("Validate that when trying to upload more than the allowed limit of files at the same time, a snack bar message is displayed.", async () => {
		const fileLimit = 2;
		const knobTriggerErrorsWhenLoading = uploadKnobs.knobTriggerErrorsWhenLoading + "false";
		const knobUploadLimit = uploadKnobs.knobUploadLimit + fileLimit;
		await ffUpload.visitPage([knobTriggerErrorsWhenLoading, knobUploadLimit]);

		await ffUpload.uploadFilesInput.setInputFiles([imagePath, imagePath, imagePath, imagePath, imagePath]);
		expect(await ffUpload.fileCardContainerLocator.count()).toBe(fileLimit);
	});
});
