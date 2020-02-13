// basic function that returns anything
interface ArgsFunc {
	(): any
}

// Returns the type of the Promise return, if it's not a promise return, it just returns the original type
type Unpacked<T> = T extends Promise<infer U> ? U : T;

// Handles test.args whether it is a plain object, or an Promise wrapping a type, or a function wrapping a type
type TestArgs<T> = T extends ArgsFunc ? Unpacked<ReturnType<T>> : T;

interface Test {
	name: string
	timeout?: number
	before?: (test: object) => void
	after?: (test: object) => void
	only?: boolean
	skip?: boolean
	args: any
}

interface TestRunner<T> {
	(test: TestArgs<T>): any
}

export default function testArray<T extends Test>(tests: T[], fn: TestRunner<T["args"]>) {
	tests.forEach((val, i) => {
		const testAction = val.skip ? it.skip : val.only ? it.only : it;

		testAction(val.name, async () => {
			const test = val.args instanceof Function ? await val.args() : val.args;
	
			val.before !== undefined && await val.before(test);

			await fn(test);

			val.after !== undefined &&  await val.after(test);
		}, val.timeout);
	})
}