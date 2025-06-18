import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { ButtonPage } from "../../../pages/Components/Button/ButtonPlaygroundPage";
import theme from "@simpleview/sv-mosaic/theme";
import { buttonKnobs as knob, commonKnobs } from "../../../utils/data/knobs";
import { hexToRgb } from "../../../utils/helpers/helper";

test.describe("Components - Button - Playground", () => {
	let page: Page;
	let buttonPage: ButtonPage;
	const knobDisabledTrue = commonKnobs.knobDisabled + true;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		buttonPage = new ButtonPage(page);
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
		await page.waitForSelector("text=Popover Content", { state: "visible", timeout: 300 });
		await expect(page.getByText("Popover Content")).toBeVisible();
	});

	test("Validate Button Popover on Hover.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobPopover + true, await buttonPage.getKnobForPopoverEvent("onHover")]);
		await buttonPage.button.hover();
		await page.waitForSelector("text=Popover Content", { state: "visible", timeout: 300 });
		await expect(page.getByText("Popover Content")).toBeVisible();
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
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForVariant("icon"), await buttonPage.getKnobForColor("gray")]);
		expect(await buttonPage.getColorFromElement(buttonPage.iconButton)).toBe(theme.newColors.grey3["100"]);
	});

	test("Validate Icon has simplyGold as color.", async () => {
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKnobForVariant("icon"), await buttonPage.getKnobForColor("yellow")]);
		expect(await buttonPage.getColorFromElement(buttonPage.iconButton)).toBe(theme.newColors.simplyGold["100"]);
	});

	test("Validate Contained Buttons has almostBlack as background.", async () => {
		const expectedColor = hexToRgb(theme.colors.almostBlack);
		const knobContained = await buttonPage.getKnobForVariant("contained");
		// Contained
		await buttonPage.visit(buttonPage.page_path, [knobContained]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Contained - disabled
		await buttonPage.visit(buttonPage.page_path, [knobContained, knobDisabledTrue]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(expectedColor);
	});

	test.skip("Validate the visibility of the Button with different Show options.", async () => {
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
		// black
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("black")]);
		await buttonPage.button.waitFor({ state: "visible" });
		expect.soft(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe("rgb(0, 0, 0)");
		// blue
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("blue")]);
		await buttonPage.button.waitFor({ state: "visible" });
		expect.soft(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe("rgb(0, 0, 255)");
		// lightBlue
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("lightBlue")]);
		await buttonPage.button.waitFor({ state: "visible" });
		expect.soft(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe("rgb(173, 216, 230)");
		// red
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("red")]);
		await buttonPage.button.waitFor({ state: "visible" });
		expect.soft(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe("rgb(255, 0, 0)");
		// yellow
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("yellow")]);
		await buttonPage.button.waitFor({ state: "visible" });
		expect.soft(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe("rgb(255, 255, 0)");
		// teal
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("teal")]);
		await buttonPage.button.waitFor({ state: "visible" });
		expect.soft(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe("rgb(0, 128, 128)");
		// gray
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("gray")]);
		await buttonPage.button.waitFor({ state: "visible" });
		expect.soft(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe("rgb(128, 128, 128)");
		// white
		await buttonPage.visit(buttonPage.page_path, [knob.knobShowIcon + true, await buttonPage.getKnobForIconColor("white")]);
		await buttonPage.button.waitFor({ state: "visible" });
		expect(await buttonPage.getColorFromElement(buttonPage.button.locator("svg"))).toBe("rgb(255, 255, 255)");
	});

	test("Validate button width when the full-width knob is active.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobFullWidth + true]);
		const expectedWidth = page.viewportSize().width - 40;
		expect(await buttonPage.getElementWidth(buttonPage.button, false)).toBe(expectedWidth);
	});

	test("Validate the href knob and its link.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobHRef + true]);
		const expectLink = "https://www.google.com/";
		await expect(buttonPage.hrefLocator).toBeVisible();
		expect(await buttonPage.getHRefFromElement(buttonPage.hrefLocator)).toBe(expectLink);
	});

	test("Validate that the redirection when clicking the link goes to the expected URL.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobHRef + true]);
		await buttonPage.hrefLocator.click();
		expect(page.url()).toBe("https://www.google.com/");
	});

	test("Validate menu item knob display a menu with two items.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobMenuItem + true]);
		await buttonPage.button.waitFor();
		await buttonPage.button.click();
		await expect(buttonPage.menuLocator).toBeVisible();
		expect(await buttonPage.menuItem.count()).toBe(2);
	});
});
