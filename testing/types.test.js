describe(__filename, function() {
	test("Run types", () => {
		execSync("npm run types", { stdio: "inherit" });
	});
});