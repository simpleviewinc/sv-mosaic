import { test, expect, Page } from "@playwright/test";
import { CardPage } from "../../../pages/Components/Card/CardPlaygroundPage";
import { cardKnobs } from "../../../utils/data/knobs";

test.describe.parallel("Components - Card - Playground", () => {
	let page: Page;
	let cardPage: CardPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		cardPage = new CardPage(page);
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	async function validateNumberOfButtons(knob: string) {
		const buttonsCount = 3;
		for (let i = 1; i <= buttonsCount ;i++) {
			await cardPage.visit(cardPage.page_path, [knob + i.toString()]);
			expect(await cardPage.sectionTitleLocator.locator("button").count()).toBe(i);
		}
	}

	test("Validate card component shows multiple top actions.", async () => {
		await validateNumberOfButtons(cardKnobs.knobTopActions);
	});

	test("Validate card component shows multiple bottom actions.", async () => {
		await validateNumberOfButtons(cardKnobs.knobTopActions);
	});
});
