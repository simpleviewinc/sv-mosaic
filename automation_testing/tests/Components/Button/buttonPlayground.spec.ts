import { test, expect, Page } from "@playwright/test";
import { ButtonPage } from "../../../pages/Components/Button/ButtonPlaygroundPage";
import theme from "../../../../src/theme";
import { buttonKnobs as knob, commonKnobs } from "../../../utils/data/knobs";

test.describe.parallel("Components - Button - Playground", () => {
	let page: Page;
	let buttonPage: ButtonPage;
	const knobDisabledTrue = commonKnobs.knobDisabled + true;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		buttonPage = new ButtonPage(page);
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate Button has simplyGold background.", async () => {
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForVariant("contained"), await buttonPage.getKnobForColor("yellow")]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(theme.newColors.simplyGold["100"]);
	});

	test("Validate Button has realTeal color.", async () => {
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForVariant("outlined"), await buttonPage.getKnobForColor("teal")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(theme.newColors.realTeal["100"]);
	});

	test("Validate Button Popover on Click.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobPopover + true, await buttonPage.getKnobForPopoverEvent("onClick")]);
		await buttonPage.button.click();
		await expect(page.locator("text=Popover Content")).toBeVisible();
	});

	test("Validate Button Popover on Hover.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobPopover + true, await buttonPage.getKnobForPopoverEvent("onHover")]);
		await buttonPage.button.hover();
		await expect(page.locator("text=Popover Content")).toBeVisible();
	});

	test("Validate Buttons has darkRed as background.", async () => {
		const expectedColor = theme.newColors.darkRed["100"];
		const knobContained = await buttonPage.getKnobForVariant("contained");
		const knobColor = await buttonPage.getKnobForColor("red");
		// Contained
		await buttonPage.visit(buttonPage.page_path, [knobContained, knobColor]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Contained - disabled
		await buttonPage.visit(buttonPage.page_path, [knobContained, knobColor, knobDisabledTrue]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(expectedColor);
	});

	test("Validate Buttons has darkRed as color.", async () => {
		const expectedColor = theme.newColors.darkRed["100"];
		const knobOutlined = await buttonPage.getKnobForVariant("outlined");
		const knobText = await buttonPage.getKnobForVariant("text");
		const knobColor = await buttonPage.getKnobForColor("red");
		// Outlined
		await buttonPage.visit(buttonPage.page_path, [knobOutlined, knobColor]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Outlined - disabled
		await buttonPage.visit(buttonPage.page_path, [knobOutlined, knobColor, knobDisabledTrue]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Text
		await buttonPage.visit(buttonPage.page_path, [knobText, knobColor]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Text - disabled
		await buttonPage.visit(buttonPage.page_path, [knobText, knobColor, knobDisabledTrue]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Small Text
		await buttonPage.visit(buttonPage.page_path, [knobOutlined, knobColor, await buttonPage.getKnobForSize("small")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
	});

	test("Validate Button has almostBlack color text.", async () => {
		const expectedColor = theme.newColors.almostBlack["100"];
		//BlackOnYellow
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForVariant("contained"), await buttonPage.getKnobForColor("yellow")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		//GrayOnWhite
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForVariant("outlined"), await buttonPage.getKnobForColor("gray")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		//BlackOnWhite
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForVariant("outlined"), await buttonPage.getKnobForColor("black")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		//Text
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForVariant("text")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
	});

	test("Validate Icon has grey3 as color.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobVariant + "icon", knob.knobColor + "gray"]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(theme.newColors.grey3["100"]);
	});

	test("Validate Contained Buttons has grey2 as background.", async () => {
		const expectedColor = theme.newColors.grey2["100"];
		const knobContained = await buttonPage.getKnobForVariant("contained");
		// Contained
		await buttonPage.visit(buttonPage.page_path, [knobContained]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Contained - disabled
		await buttonPage.visit(buttonPage.page_path, [knobContained, knobDisabledTrue]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(expectedColor);
	});

	test("Validate the visibility of the Button with different Show options.", async () => {
		// Undefined: Button should be visible.
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForShow("Undefined")]);
		await expect(buttonPage.button).toBeVisible();

		// True: Button should be visible.
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForShow("True")]);
		await expect(buttonPage.button).toBeVisible();

		// False: Button should not be visible.
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForShow("False")]);
		await expect(buttonPage.button).not.toBeVisible();

		// Function that returns true: Button should be visible.
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForShow("Function that returns true")]);
		await expect(buttonPage.button).toBeVisible();

		// Function that returns false: Button should not be visible.
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForShow("Function that returns false")]);
		await expect(buttonPage.button).not.toBeVisible();

		// Array of true values: Button should be visible.
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForShow("Array of true values")]);
		await expect(buttonPage.button).toBeVisible();

		// Array with one falsy value: Button should not be visible.
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForShow("Array with one falsy value")]);
		await expect(buttonPage.button).not.toBeVisible();

		// Array of functions that return true: Button should be visible.
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForShow("Array of functions that return true")]);
		await expect(buttonPage.button).toBeVisible();

		// Array of functions, one returns false: Button should not be visible.
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForShow("Array of functions, one returns false")]);
		await expect(buttonPage.button).not.toBeVisible();
	});

	test("Validate Type of label JSX contains an Icon.", async () => {
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForTypeOfLabel("JSX")]);
		await expect(buttonPage.listIconLocator).toBeVisible();
	});

	test("Validate miconcolor all different variants.", async () => {
		// yellow
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("yellow")]);
		await buttonPage.button.waitFor({state: "visible"});
		expect.soft(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe(theme.newColors.simplyGold["100"]);
		// black
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("black")]);
		await buttonPage.button.waitFor({state: "visible"});
		expect.soft(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe(theme.newColors.almostBlack["100"]);
		// teal
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("teal")]);
		await buttonPage.button.waitFor({state: "visible"});
		expect.soft(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe(theme.newColors.realTeal["100"]);
		// red
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("red")]);
		await buttonPage.button.waitFor({state: "visible"});
		expect.soft(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe(theme.newColors.darkRed["100"]);
		// gray
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("gray")]);
		await buttonPage.button.waitFor({state: "visible"});
		expect(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe(theme.newColors.grey2["100"]);
	});

	test("Validate button width when the full-width knob is active.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobFullWidth + true]);
		const expectedWidth = page.viewportSize().width;
		expect(await buttonPage.getElementWidth(buttonPage.button)).toBe(expectedWidth);
	});

	test("Validate the href knob and its link.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobHRef + true]);
		const expectLink = "https://www.google.com/";
		await expect(buttonPage.hrefLocator).toBeVisible();
		expect(await buttonPage.getHRefFromElement(buttonPage.hrefLocator)).toBe(expectLink);
	});

	test("Validate menu item knob display a menu with two items.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobMenuItem + true]);
		await buttonPage.button.waitFor();
		await buttonPage.button.click();
		await expect(buttonPage.menuLocator).toBeVisible();
		expect(await buttonPage.menuItem.count()).toBe(2);
	});

	test("Validate menu content knob display a menu with three items.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobMenuContent + true]);
		await buttonPage.button.waitFor();
		await buttonPage.button.click();
		await expect(buttonPage.menuLocator).toBeVisible();
		expect(await buttonPage.menuItem.count()).toBe(3);
	});
});
