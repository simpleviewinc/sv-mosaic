import { test, expect, Page } from "@playwright/test";
import { ButtonPage } from "../../../pages/Components/Button/ButtonPlaygroundPage";
import theme from "../../../../src/theme";
import { buttonKnobs as knob, commonKnobs } from "../../../utils/data/knobs";

test.describe.parallel("Components - Button - Playground", () => {
	let page: Page;
	let buttonPage: ButtonPage;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		buttonPage = new ButtonPage(page);
	});

	test.afterAll(async ({ browser }) => {
		await browser.close();
	});

	test("Validate Button has simplyGold background.", async () => {
		const expectedColor = theme.newColors.simplyGold["100"];
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKbobForVariant("contained"), await buttonPage.getKbobForColor("yellow")]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(expectedColor);
	});

	test("Validate Button has realTeal color.", async () => {
		const expectedColor = theme.newColors.realTeal["100"];
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKbobForVariant("outlined"), await buttonPage.getKbobForColor("teal")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
	});

	test("Validate Button Popover on Click.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobPopover + true, await buttonPage.getKbobForPopoverEvent("onClick")]);
		await buttonPage.button.click();
		await expect(page.locator("text=Popover Content")).toBeVisible();
	});

	test("Validate Button Popover on Hover.", async () => {
		await buttonPage.visit(buttonPage.page_path, [knob.knobPopover + true, await buttonPage.getKbobForPopoverEvent("onHover")]);
		await buttonPage.button.hover();
		await expect(page.locator("text=Popover Content")).toBeVisible();
	});

	test("Validate Buttons has darkRed as background.", async () => {
		const expectedColor = theme.newColors.darkRed["100"];
		const knobContained = await buttonPage.getKbobForVariant("contained");
		const knobColor = await buttonPage.getKbobForColor("red");
		// Contained
		await buttonPage.visit(buttonPage.page_path, [knobContained, knobColor]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Contained - disabled
		await buttonPage.visit(buttonPage.page_path, [knobContained, knobColor, commonKnobs.knobDisabled + true]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(expectedColor);
	});

	test("Validate Buttons has darkRed as color.", async () => {
		const expectedColor = theme.newColors.darkRed["100"];
		const knobOutlined = await buttonPage.getKbobForVariant("outlined");
		const knobText = await buttonPage.getKbobForVariant("text");
		const knobColor = await buttonPage.getKbobForColor("red");
		// Outlined
		await buttonPage.visit(buttonPage.page_path, [knobOutlined, knobColor]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Outlined - disabled
		await buttonPage.visit(buttonPage.page_path, [knobOutlined, knobColor, commonKnobs.knobDisabled + true]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Text
		await buttonPage.visit(buttonPage.page_path, [knobText, knobColor]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Text - disabled
		await buttonPage.visit(buttonPage.page_path, [knobText, knobColor, commonKnobs.knobDisabled + true]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Small Text
		await buttonPage.visit(buttonPage.page_path, [knobOutlined, knobColor, await buttonPage.getKbobForSize("small")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
	});

	test("Validate Button has almostBlack color text.", async () => {
		const expectedColor = theme.newColors.almostBlack["100"];
		//BlackOnYellow
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKbobForVariant("contained"), await buttonPage.getKbobForColor("yellow")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		//GrayOnWhite
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKbobForVariant("outlined"), await buttonPage.getKbobForColor("gray")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		//BlackOnWhite
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKbobForVariant("outlined"), await buttonPage.getKbobForColor("black")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
		//Text
		await buttonPage.visit(buttonPage.page_path, [await buttonPage.getKbobForVariant("text")]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
	});

	test("Validate Icon has grey3 as color.", async () => {
		const expectedColor = theme.newColors.grey3["100"];
		await buttonPage.visit(buttonPage.page_path, [knob.knobVariant + "icon", knob.knobColor + "gray"]);
		expect(await buttonPage.getColorFromElement(buttonPage.button)).toBe(expectedColor);
	});

	test("Validate Contained Buttons has grey2 as background.", async () => {
		const expectedColor = theme.newColors.grey2["100"];
		const knobContained = await buttonPage.getKbobForVariant("contained");
		// Contained
		await buttonPage.visit(buttonPage.page_path, [knobContained]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(expectedColor);
		// Contained - disabled
		await buttonPage.visit(buttonPage.page_path, [knobContained, commonKnobs.knobDisabled + true]);
		expect(await buttonPage.getBackgroundColorFromElement(buttonPage.button)).toBe(expectedColor);
	});
});
