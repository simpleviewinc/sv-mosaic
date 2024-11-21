import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { CardPage } from "../../../pages/Components/Card/CardPlaygroundPage";
import { cardKnobs } from "../../../utils/data/knobs";
import theme from "@root/theme";

test.describe("Components - Card - Playground", () => {
	let page: Page;
	let cardPage: CardPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		cardPage = new CardPage(page);
		await cardPage.visit(cardPage.page_path);
	});

	async function validateNumberOfButtons(knob: string) {
		const buttonsCount = 3;
		for (let i = 1; i <= buttonsCount ;i++) {
			await cardPage.visit(cardPage.page_path, [knob + i.toString()]);
			expect(cardPage.sectionTitleLocator).not.toBeNull();
			await expect(cardPage.sectionTitleLocator.getByRole("button")).toHaveCount(i);
		}
	}

	test("Validate card component shows multiple top actions.", async () => {
		await validateNumberOfButtons(cardKnobs.knobTopActions);
	});

	test("Validate card component shows multiple bottom actions.", async () => {
		await validateNumberOfButtons(cardKnobs.knobTopActions);
	});

	test("Validate font weight of the Content Title.", async () => {
		expect(await cardPage.getFontWeightFromElement(cardPage.cardTitle)).toBe((theme.fontWeight.medium).toString());
	});

	test("Validate font size of the Content Title.", async () => {
		expect(await cardPage.getFontSizeFromElement(cardPage.cardTitle)).toBe("16px");
	});
});
