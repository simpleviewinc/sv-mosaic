import type { Locator, Page } from "@playwright/test";
import { BasePage } from "../../BasePage";

export class FormFieldTextPage extends BasePage {

	readonly page_path = "formfields-formfieldtext--kitchen-sink";
	readonly playground_page_path = "formfields-formfieldtext--playground";

	readonly page: Page;
	readonly firstSection: Locator;
	readonly regularTextField: Locator;
	readonly passwordTextField: Locator;
	readonly multilineTextField: Locator;
	readonly fieldMaxCharTextField: Locator;
	readonly maxCharCounter: Locator;
	readonly fieldWithIconIcon: Locator;
	readonly fieldWithIconTextField: Locator;
	readonly disabledTextField: Locator;
	readonly xsSizeTextField: Locator;
	readonly smSizeTextField: Locator;
	readonly mdSizeTextField: Locator;
	readonly lgSizeTextField: Locator;
	readonly firstInstructionText: Locator;
	readonly textFieldText: Locator;

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.firstSection = page.locator("[data-testid='field-test-id']").first();
		this.regularTextField = page.locator("input#regular-input");
		this.passwordTextField = page.locator("input#password-input");
		this.multilineTextField = page.locator("textarea#multiline-input");
		this.fieldMaxCharTextField = page.locator("input#withMaxChar-input");
		this.maxCharCounter = page.locator("div#withMaxChar div div div").nth(1);
		this.fieldWithIconIcon = page.locator("[data-testid='AccountCircleIcon']");
		this.fieldWithIconTextField = page.locator("input#withIcon-input");
		this.disabledTextField = page.locator("input#disabled-input");
		this.xsSizeTextField = page.locator("input#xsSize-input");
		this.smSizeTextField = page.locator("input#smSize-input");
		this.mdSizeTextField = page.locator("input#mdSize-input");
		this.lgSizeTextField = page.locator("input#lgSize-input");
		this.firstInstructionText = page.locator(".instruction-text-right").first();
		this.textFieldText = page.locator("#textfield p").first();
	}

	async setTextInMultilineField(multilineText:string): Promise<void> {
		const words = multilineText.split(" ");
		for (const word of words) {
			await this.multilineTextField.type(word);
			await this.pressSpecificKeyInKeyboard("Enter");
		}
	}
}
