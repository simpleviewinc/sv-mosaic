import { describe, expect, it } from "vitest";

import { needsWrapperFocusForAnnouncement } from "@root/utils/dom/needsWrapperFocusForAnnouncement";
import { withWebkitApi } from "../../testUtils/webkitApi";

describe(__dirname, () => {
	it("should not request the wrapper step on Blink or Gecko", () => {
		expect(needsWrapperFocusForAnnouncement(window)).toBe(false);
	});

	it("should request the wrapper step when the WebKit only API is present", () => {
		withWebkitApi(() => {
			expect(needsWrapperFocusForAnnouncement(window)).toBe(true);
		});
	});

	it("should not request the wrapper step when there is no window", () => {
		expect(needsWrapperFocusForAnnouncement(undefined)).toBe(false);
		expect(needsWrapperFocusForAnnouncement(null)).toBe(false);
	});
});
