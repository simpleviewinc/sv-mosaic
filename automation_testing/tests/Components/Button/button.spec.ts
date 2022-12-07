import { test, expect, Page } from "@playwright/test";
import { ButtonPage } from "../../../pages/Components/Button/ButtonPage";
import theme from "../../../../src/theme";

test.describe.parallel("Components - Button - Kitchen Sink", () => {
	let page: Page;
	let buttonPage: ButtonPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		buttonPage = new ButtonPage(page);
		await buttonPage.visitPage();
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate that each button has the expected font weight", async () => {
		const expectedFontWeight = "700";
		const numberOfButtons = await buttonPage.button.count();
		for (let i = 0; i < numberOfButtons; i++) {
			const buttonFontWeight = await buttonPage.getFontWeightFromElement(buttonPage.button.nth(i));
			expect(buttonFontWeight).toBe(expectedFontWeight);
		}
	});

	test("Validate that the left margin of the buttons are valid.", async () => {
		const expectedMarginValue = "12px";
		const numberOfButtons = await buttonPage.leftIconButton.count();
		for (let i = 0; i < numberOfButtons; i++) {
			await buttonPage.validateMarginValueFromElement(buttonPage.leftIconButton.nth(i), expectedMarginValue, false);
		}
	});

	test("Validate that the right margin of the buttons are valid.", async () => {
		const expectedMarginValue = "12px";
		const numberOfButtons = await buttonPage.rightIconButton.count();
		for (let i = 0; i < numberOfButtons; i++) {
			await buttonPage.validateMarginValueFromElement(buttonPage.rightIconButton.nth(i), expectedMarginValue, true);
		}
	});

	test("Validate Button Popover on Click.", async () => {
		await buttonPage.buttonThatTriggersPopoverOnClick.click();
		await expect(page.locator("text=Popover Content")).toBeVisible();
		await buttonPage.page.keyboard.press("Escape");
	});

	test("Validate Button Popover on Hover.", async () => {
		await buttonPage.buttonThatTriggersPopoverOnHover.hover();
		await expect(page.locator("text=Popover Content")).toBeVisible();
	});

	test("Validate Button has simplyGold background.", async () => {
		const expectBgColor = (theme.newColors.simplyGold["100"]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(8))).toBe(expectBgColor);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(9))).toBe(expectBgColor);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(18))).toBe(expectBgColor);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(19))).toBe(expectBgColor);
	});

	test("Validate Button has realTeal background.", async () => {
		const expectColor = (theme.newColors.realTeal["100"]);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(28))).toBe(expectColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(29))).toBe(expectColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(38))).toBe(expectColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(39))).toBe(expectColor);
	});

	test("Validate Button has darkSimplyGold on Hover.", async () => {
		const expectBgColor = theme.newColors.darkerSimplyGold["100"];
		const saveButton = buttonPage.button.nth(8);
		const addButton = buttonPage.button.nth(9);
		await saveButton.click();
		await buttonPage.wait();
		expect(await buttonPage.getBackgroundColorFromElement(saveButton)).toBe(expectBgColor);
		await addButton.click({force: true});
		await buttonPage.wait();
		expect(await buttonPage.getBackgroundColorFromElement(addButton)).toBe(expectBgColor);
	});

	test("Validate Buttons has darkRed as background.", async () => {
		const expectColor = (theme.newColors.darkRed["100"]);
		// Contained
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(4))).toBe(expectColor);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(5))).toBe(expectColor);
		// Contained - disabled
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(14))).toBe(expectColor);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(15))).toBe(expectColor);
	});

	test("Validate Buttons has darkRed as color.", async () => {
		const expectColor = (theme.newColors.darkRed["100"]);
		// Outlined
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(22))).toBe(expectColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(23))).toBe(expectColor);
		// Outlined - disabled
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(32))).toBe(expectColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(33))).toBe(expectColor);
		// Text
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(42))).toBe(expectColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(43))).toBe(expectColor);
		// Text - disabled
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(50))).toBe(expectColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(51))).toBe(expectColor);
		// Small Text
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(58))).toBe(expectColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(59))).toBe(expectColor);
	});

	test("Validate Button has darkerRed on Hover.", async () => {
		const expectColor = theme.newColors.darkRed["100"];
		await buttonPage.button.nth(4).hover({ force: true });
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(4))).toBe(expectColor);
		await buttonPage.button.nth(5).hover({ force: true });
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(5))).toBe(expectColor);
	});
});
