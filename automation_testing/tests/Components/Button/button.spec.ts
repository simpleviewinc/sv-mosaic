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
		const expectedColor = (theme.newColors.realTeal["100"]);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(28))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(29))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(38))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(39))).toBe(expectedColor);
	});

	test.skip("Validate Button has darkSimplyGold on Hover.", async () => {
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
		const expectedColor = (theme.newColors.darkRed["100"]);
		// Contained
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(4))).toBe(expectedColor);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(5))).toBe(expectedColor);
		// Contained - disabled
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(14))).toBe(expectedColor);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(15))).toBe(expectedColor);
	});

	test("Validate Buttons has darkRed as color.", async () => {
		const expectedColor = (theme.newColors.darkRed["100"]);
		// Outlined
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(22))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(23))).toBe(expectedColor);
		// Outlined - disabled
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(32))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(33))).toBe(expectedColor);
		// Text
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(42))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(43))).toBe(expectedColor);
		// Text - disabled
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(50))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(51))).toBe(expectedColor);
		// Small Text
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(58))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(59))).toBe(expectedColor);
	});

	test("Validate Button has almostBlack color text.", async () => {
		const expectedColor = theme.newColors.almostBlack["100"];
		//BlackOnYellow
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(8))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(9))).toBe(expectedColor);
		//GrayOnWhite
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(6))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(7))).toBe(expectedColor);
		//BlackOnWhite
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(24))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(25))).toBe(expectedColor);
	});

	test.skip("Validate Button has darkerRed on Hover.", async () => {
		const expectedColor = theme.newColors.darkerRed["100"];
		await buttonPage.button.nth(4).hover({ force: true });
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(4))).toBe(expectedColor);
		await buttonPage.button.nth(5).hover({ force: true });
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(5))).toBe(expectedColor);
	});

	test("Validate Icon has grey3 as color.", async () => {
		const expectedColor = theme.newColors.grey3["100"];
		// Icon Buttons
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(84))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(85))).toBe(expectedColor);
		expect(await buttonPage.getColorFromElement(buttonPage.button.nth(86))).toBe(expectedColor);
	});

	test("Validate Contained Buttons has grey2 as background.", async () => {
		const expectedColor = theme.newColors.grey2["100"];
		// Contained
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(6))).toBe(expectedColor);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(7))).toBe(expectedColor);
		// Contained - disabled
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(16))).toBe(expectedColor);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button.nth(17))).toBe(expectedColor);
	});
});
