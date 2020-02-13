const { execSync } = require("child_process");

const apps = [
	"typescript_valid_app",
	"typescript_invalid_app",
	"valid_app"
];

describe(__filename, function() {
	beforeAll(function() {
		// within our test apps they expect sv-mosaic to be available at "@simpleview/sv-mosaic", so we fake it in our apps by symlinking the app folder
		apps.forEach(function(appName) {
			execSync(`mkdir -p ${__dirname}/${appName}/node_modules/@simpleview`);
			execSync(`ln -sfn /app ${__dirname}/${appName}/node_modules/@simpleview/sv-mosaic`);
		})
	});

	afterAll(function() {
		// clear our symlinks
		apps.forEach(function(appName) {
			execSync(`rm -Rf ${__dirname}/${appName}/node_modules`);
		})
	})

	// run a test compilation which should succeed
	test("Compiled package supports Typescript", () => {
		execSync(`npm run tsc -- --project ${__dirname}/typescript_valid_app/tsconfig.json`);
	});

	// run a test compilation with code that is improperly using an export from mosaic
	test("Compiled package should enforce typescript", () => {
		try {
			execSync(`npm run tsc -- --project ${__dirname}/typescript_invalid_app/tsconfig.json`, { stdio : "pipe" });
		} catch(e) {
			expect(e.stdout.toString()).toMatch(/Type 'string' is not assignable to type 'number'./)
			return;
		}

		throw new Error("Should not reach here.");
	});

	test("Execute normal project", () => {
		execSync(`node ${__dirname}/valid_app/index.js`);
	});
});