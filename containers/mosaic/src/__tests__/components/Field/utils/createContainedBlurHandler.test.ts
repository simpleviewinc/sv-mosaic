import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import {
	createContainedBlurHandler,
	isFocusInPickerOverlay,
} from "@root/components/Field/utils/createContainedBlurHandler";

describe("createContainedBlurHandler", () => {
	it("does not call onBlur when relatedTarget is inside the container", () => {
		const onBlur = vi.fn();
		const container = document.createElement("div");
		const inside = document.createElement("button");
		container.appendChild(inside);
		document.body.appendChild(container);

		const containerRef = createRef<HTMLElement>();
		(containerRef as { current: HTMLElement }).current = container;

		const handleBlur = createContainedBlurHandler(containerRef, onBlur);
		handleBlur({ relatedTarget: inside } as unknown as FocusEvent);

		expect(onBlur).not.toHaveBeenCalled();
		container.remove();
	});

	it("calls onBlur when focus leaves the container", async () => {
		const onBlur = vi.fn();
		const container = document.createElement("div");
		const outside = document.createElement("button");
		document.body.append(container, outside);

		const containerRef = createRef<HTMLElement>();
		(containerRef as { current: HTMLElement }).current = container;

		const handleBlur = createContainedBlurHandler(containerRef, onBlur);
		outside.focus();
		handleBlur({ relatedTarget: outside } as unknown as FocusEvent);

		await vi.waitFor(() => {
			expect(onBlur).toHaveBeenCalledTimes(1);
		});

		container.remove();
		outside.remove();
	});

	it("does not call onBlur when focus is still contained via options", async () => {
		const onBlur = vi.fn();
		const container = document.createElement("div");
		const outside = document.createElement("button");
		document.body.append(container, outside);

		const containerRef = createRef<HTMLElement>();
		(containerRef as { current: HTMLElement }).current = container;

		const handleBlur = createContainedBlurHandler(containerRef, onBlur, {
			isFocusStillContained: () => true,
		});
		outside.focus();
		handleBlur({ relatedTarget: outside } as unknown as FocusEvent);

		await new Promise((resolve) => requestAnimationFrame(resolve));
		expect(onBlur).not.toHaveBeenCalled();

		container.remove();
		outside.remove();
	});
});

describe("isFocusInPickerOverlay", () => {
	it("returns true when the active element is inside a pickers popper", () => {
		const popper = document.createElement("div");
		popper.className = "MuiPickersPopper-root";
		const button = document.createElement("button");
		popper.appendChild(button);
		document.body.appendChild(popper);

		expect(isFocusInPickerOverlay(button)).toBe(true);
		popper.remove();
	});

	it("returns false when the active element is not in an overlay", () => {
		const button = document.createElement("button");
		document.body.appendChild(button);

		expect(isFocusInPickerOverlay(button)).toBe(false);
		button.remove();
	});
});
