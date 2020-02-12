interface TestArrayArgsFunction {
	(): object
}
type TestArrayArgs = TestArrayArgsFunction | object;

interface TestArrayTest {
	name: string
	timeout?: number
	before?: (test: object) => void
	after?: (test: object) => void
	only?: boolean
	skip?: boolean
	args: TestArrayArgs
}

interface TestArrayTestRunner {
	(test: object): Promise<void>;
}

export default function testArray(tests: TestArrayTest[], fn: TestArrayTestRunner) {
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