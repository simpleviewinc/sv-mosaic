import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldTextEditorPage extends BasePage {

	readonly page_path = "formfields-formfieldtexteditor--kitchen-sink";

	readonly page: Page;
	readonly textEditorWithSpellcheckActive: Locator;
	readonly textEditorWithLeftToRightDirection: Locator;
	readonly textEditorWithRightToLeftDirection: Locator;
	readonly textEditorInGermanLanguage: Locator;
	readonly textEditorWithMaxCharacterLimit: Locator;
	readonly disabledTextEditor: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.textEditorWithSpellcheckActive = page.locator("[data-testid='text-editor-testid'] [contenteditable='true']").nth(0);
		this.textEditorWithLeftToRightDirection = page.locator("[data-testid='text-editor-testid'] [contenteditable='true']").nth(1);
		this.textEditorWithRightToLeftDirection = page.locator("[data-testid='text-editor-testid'] [contenteditable='true']").nth(2);
		this.textEditorInGermanLanguage = page.locator("[data-testid='text-editor-testid']").nth(3);
		this.textEditorWithMaxCharacterLimit = page.locator("[data-testid='text-editor-testid'] [contenteditable='true']").nth(4);
		this.disabledTextEditor = page.locator("[data-testid='text-editor-testid']").nth(5);
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.textEditorWithSpellcheckActive);
	}
}
