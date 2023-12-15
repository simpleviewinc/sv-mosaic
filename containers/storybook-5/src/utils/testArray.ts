import { MosaicObject } from "../types";

// basic function that returns anything
interface ArgsFunc {
	(): MosaicObject
}

// Returns the type of the Promise return, if it's not a promise return, it just returns the original type
type Unpacked<T> = T extends Promise<infer U> ? U : T;

// Handles test.args whether it is a plain object, or an Promise wrapping a type, or a function wrapping a type
type TestArgs<T> = T extends ArgsFunc ? Unpacked<ReturnType<T>> : T;

export interface Test {
	name: string
	timeout?: number
	before?: (test: MosaicObject) => void
	after?: (test: MosaicObject) => void
	only?: boolean
	skip?: boolean
	args: MosaicObject | (() => Promise<MosaicObject>)
}

interface TestRunner<T extends Test> {
	(test: TestArgs<T["args"]>): void
}

export default function testArray<T extends Test>(tests: T[], fn: TestRunner<T>): void {
	tests.forEach((val, i) => {
		const testAction = val.skip ? it.skip : val.only ? it.only : it;

		testAction(val.name, async () => {
			const test = val.args instanceof Function ? await val.args() : val.args;
	
			val.before !== undefined && await val.before(test);

			await fn(test as TestArgs<T["args"]>);

			val.after !== undefined &&  await val.after(test);
		}, val.timeout);
	})
}