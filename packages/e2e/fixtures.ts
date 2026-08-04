import { expect as baseExpect } from "@playwright/test";
import type { Locator } from "@playwright/test";

export { test } from "@playwright/test";

export const expect = baseExpect.extend({
	async toHaveGridColumns(locator: Locator, expected: number) {
		const assertionName = "toHaveGridColumns";
		let pass: boolean;
		let matcherResult: any;

		try {
			const { width, columnWidth, gap, paddingLeft, paddingRight } = await locator.evaluate((element) => {
				const computed = window.getComputedStyle(element);

				return {
					width: element.clientWidth,
					columnWidth: parseFloat(computed.getPropertyValue("grid-template-columns")),
					gap: parseFloat(computed.getPropertyValue("column-gap")),
					paddingLeft: parseFloat(computed.getPropertyValue("padding-left")),
					paddingRight: parseFloat(computed.getPropertyValue("padding-right")),
				};

			});

			const columns = (width - gap * (expected - 1) - paddingLeft - paddingRight) / columnWidth;
			const expectation = this.isNot ? baseExpect(columns).not : baseExpect(columns);

			expectation.toBe(expected);
			pass = true;
		} catch (err: any) {
			matcherResult = err.matcherResult;
			pass = false;
		}

		if (this.isNot) {
			pass = !pass;
		}

		const message = pass
			? () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
          "\n\n" +
          `Locator: ${locator}\n` +
          `Expected: not ${this.utils.printExpected(expected)}\n` +
          (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : "")
			: () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
          "\n\n" +
          `Locator: ${locator}\n` +
          `Expected: ${this.utils.printExpected(expected)}\n` +
          (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : "");

		return {
			message,
			pass,
			name: assertionName,
			expected,
			actual: matcherResult?.actual,
		};
	},
});
