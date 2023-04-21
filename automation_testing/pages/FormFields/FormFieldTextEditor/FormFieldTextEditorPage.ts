import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldTextEditorPage extends BasePage {

	readonly page_path = "formfields-formfieldtexteditor--kitchen-sink";

	readonly page: Page;
	readonly textEditorWithSpellcheckActive: Locator;
	readonly textEditorWithLeftToRightDirection: Locator;
	readonly textEditorWithRightToLeftDirection: Locator;
	readonly textEditorInGermanLanguage: Locator;
	readonly textEditorWithMaxCharacterLimit: Locator;
	readonly disabledTextEditor: Locator;
	readonly genericTextEditor: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.textEditorWithSpellcheckActive = page.locator("[data-testid='text-editor-testid'] [contenteditable='true']").nth(0);
		this.textEditorWithLeftToRightDirection = page.locator("[data-testid='text-editor-testid'] [contenteditable='true']").nth(1);
		this.textEditorWithRightToLeftDirection = page.locator("[data-testid='text-editor-testid'] [contenteditable='true']").nth(2);
		this.textEditorInGermanLanguage = page.locator("[data-testid='text-editor-testid']").nth(3);
		this.textEditorWithMaxCharacterLimit = page.locator("[data-testid='text-editor-testid'] [contenteditable='true']").nth(4);
		this.disabledTextEditor = page.locator("#disabled");
		this.genericTextEditor = page.locator("[data-testid='text-editor-testid']");
	}

	async clearAllValuesFromTextEditors(): Promise<void> {
		const numberOfTxtEditor = await this.genericTextEditor.count();
		for (let i = 0; i < numberOfTxtEditor; i++) {
			if (!await this.genericTextEditor.nth(i).isDisabled()) {
				await this.clearAllValuesFromField(this.genericTextEditor.nth(i));
			}
		}
	}
}
