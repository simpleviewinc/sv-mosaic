import "@testing-library/jest-dom/vitest";
import "vitest-canvas-mock";
import failOnConsole from "vitest-fail-on-console";

failOnConsole();

Range.prototype.getBoundingClientRect = () => ({
	bottom: 0,
	height: 0,
	left: 0,
	right: 0,
	top: 0,
	x: 0,
	y: 0,
	width: 0,
	toJSON: () => "",
});

Range.prototype.getClientRects = () => ({
	item: () => null,
	length: 0,
	[Symbol.iterator]: vi.fn(),
});

HTMLElement.prototype.scrollIntoView = () => null;

document.elementFromPoint = (): null => null;

class MockIntersectionObserver implements IntersectionObserver {
	readonly root: Element | null = null;
	readonly rootMargin: string = "";
	readonly thresholds: readonly number[] = [];
	disconnect: () => void = () => null;
	observe: (target: Element) => void = () => null;
	takeRecords: () => IntersectionObserverEntry[] = () => [];
	unobserve: (target: Element) => void = () => null;
}

Object.defineProperty(
	window,
	"IntersectionObserver", {
		writable: true,
		configurable: true,
		value: MockIntersectionObserver,
	},
);

Object.defineProperty(
	global,
	"IntersectionObserver", {
		writable: true,
		configurable: true,
		value: MockIntersectionObserver,
	},
);
