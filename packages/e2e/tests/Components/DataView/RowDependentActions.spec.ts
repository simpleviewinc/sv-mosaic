import { test, expect } from "@playwright/test";

const story = "?id=components-dataview--row-dependent-actions&viewMode=story";
const editSelector = '[data-mosaic-id="action_primary_edit"]';

for (const display of ["list", "grid"]) {
	test(`row actions evaluate disabled and tooltip callbacks in ${display} view`, async ({ page }) => {
		const errors: string[] = [];
		page.on("pageerror", error => errors.push(error.message));
		page.on("console", message => {
			if (message.type() === "error") errors.push(message.text());
		});
		await page.goto(`${story}&args=display:${display}`);
		const edit = page.locator(editSelector);
		await expect(edit).toHaveCount(2);
		await expect(edit.nth(0).getByRole("button")).toBeEnabled();
		await expect(edit.nth(1).getByRole("button")).toBeDisabled();

		await edit.nth(0).hover();
		await expect(page.getByRole("tooltip")).toHaveText("Edit account");
		await edit.nth(1).hover();
		await expect(page.getByRole("tooltip")).toHaveText("This account is archived");
		await page.getByRole("button", { name: "View", exact: true }).nth(1).hover();
		await expect(page.getByRole("tooltip")).toHaveText("View account");
		await page.getByRole("button", { name: "View", exact: true }).nth(1).click();
		await expect(page.getByText("View: Archived account", { exact: true })).toBeVisible();

		await edit.nth(0).getByRole("button").click();
		await expect(page.getByText("Edit: Active account", { exact: true })).toBeVisible();
		await page.getByRole("button", { name: "Restore archived account" }).click();
		await expect(edit.nth(1).getByRole("button")).toBeEnabled();
		await edit.nth(1).hover();
		await expect(page.getByRole("tooltip")).toHaveText("Edit account");
		await edit.nth(1).getByRole("button").click();
		await expect(page.getByText("Edit: Archived account", { exact: true })).toBeVisible();
		await page.getByRole("button", { name: "Archive account again" }).click();
		await expect(edit.nth(1).getByRole("button")).toBeDisabled();
		expect(errors).toEqual([]);
	});

	test(`global disabled overrides row callbacks in ${display} view`, async ({ page }) => {
		await page.goto(`${story}&args=display:${display};disabled:true`);
		for (const name of ["Edit", "View"]) {
			const buttons = page.getByRole("button", { name, exact: true });
			await expect(buttons).toHaveCount(2);
			await expect(buttons.nth(0)).toBeDisabled();
			await expect(buttons.nth(1)).toBeDisabled();
		}
	});
}

test("selecting a row hides and disables primary actions until selection clears", async ({ page }) => {
	await page.goto(story);
	const edit = page.locator(`${editSelector} button`);
	await expect(edit.nth(0)).toBeEnabled();
	const activeRow = page.locator("tr").filter({ has: page.getByText("Active account", { exact: true }) });
	await activeRow.getByRole("checkbox").check();
	await expect(edit.nth(0)).toBeHidden();
	await expect(edit.nth(0)).toBeDisabled();
	await expect(edit.nth(1)).toBeHidden();
	await expect(edit.nth(1)).toBeDisabled();
	await activeRow.getByRole("checkbox").uncheck();
	await expect(edit.nth(0)).toBeVisible();
	await expect(edit.nth(0)).toBeEnabled();
	await expect(edit.nth(1)).toBeVisible();
	await expect(edit.nth(1)).toBeDisabled();
});
