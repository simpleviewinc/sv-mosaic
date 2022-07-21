import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class FormFieldTextPage extends BasePage {

	readonly page_path = "formfields-formfieldtext--kitchen-sink";

	readonly page: Page;
	readonly regularTextField: Locator;
	readonly numberTextField: Locator;
	readonly multilineTextField: Locator;
	readonly fieldMaxCharTextField: Locator;
	readonly maxCharCounter: Locator;
	readonly fieldWithIconDiv: Locator;
	readonly fieldWithIconIcon: Locator;
	readonly fieldWithIconTextField: Locator;
	readonly disabledTextField: Locator;
	readonly xsSizeTextField: Locator;
	readonly smSizeTextField: Locator;
	readonly mdSizeTextField: Locator;
	readonly lgSizeTextField: Locator;
	
	constructor(page: Page) {
		super(page);
		this.page = page;
		this.regularTextField = page.locator("#regular");
		this.numberTextField = page.locator("#number");
		this.multilineTextField = page.locator("#multiline");
		this.fieldMaxCharTextField = page.locator("#withMaxChar");
		this.maxCharCounter = page.locator("//*[@id='root']/div/form/div[2]/div[4]/div/div/div/div/div[1]/div[1]/div[2]");
		this.fieldWithIconDiv = page.locator("//*[@id='root']/div/form/div[2]/div[5]/div/div/div/div/div[1]/div[2]/div");
		this.fieldWithIconIcon = page.locator("[data-testid='AccountCircleIcon']");
		this.fieldWithIconTextField = page.locator("#withIcon");
		this.disabledTextField = page.locator("#disabled");
		this.xsSizeTextField = page.locator("#xsSize");
		this.smSizeTextField = page.locator("#smSize");
		this.mdSizeTextField = page.locator("#mdSize");
		this.lgSizeTextField = page.locator("#lgSize");
	}

	async visitPage(): Promise<void> {
		await this.visit(this.page_path, this.title);
	}

	async setTextInMultilineField(multilineText:string): Promise<void> {
		const words = multilineText.split(" ");
		for (let i = 0; i < words.length; i++) {
			await this.multilineTextField.type(words[i]);
			await this.page.keyboard.press("Enter");
		}
	}
}