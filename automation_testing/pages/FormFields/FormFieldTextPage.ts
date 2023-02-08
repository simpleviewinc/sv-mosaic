import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldTextPage extends BasePage {

	readonly page_path = "formfields-formfieldtext--kitchen-sink";

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

	constructor(page: Page) {
		super(page);
		this.page = page;
		this.firstSection = page.locator("[data-testid='field-test-id']").first();
		this.regularTextField = page.locator("input#regular");
		this.passwordTextField = page.locator("input#password");
		this.multilineTextField = page.locator("textarea#multiline");
		this.fieldMaxCharTextField = page.locator("input#withMaxChar");
		this.maxCharCounter = page.locator("div#withMaxChar div div div").nth(1);
		this.fieldWithIconIcon = page.locator("[data-testid='AccountCircleIcon']");
		this.fieldWithIconTextField = page.locator("input#withIcon");
		this.disabledTextField = page.locator("input#disabled");
		this.xsSizeTextField = page.locator("input#xsSize");
		this.smSizeTextField = page.locator("input#smSize");
		this.mdSizeTextField = page.locator("input#mdSize");
		this.lgSizeTextField = page.locator("input#lgSize");
		this.firstInstructionText = page.locator(".instruction-text-right").first();
	}

	async setTextInMultilineField(multilineText:string): Promise<void> {
		const words = multilineText.split(" ");
		for (let i = 0; i < words.length; i++) {
			await this.multilineTextField.type(words[i]);
			await this.page.keyboard.press("Enter");
		}
	}
}
