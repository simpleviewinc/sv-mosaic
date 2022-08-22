import { execSync } from "child_process";
import { writeFileSync } from "fs";
import ghPages from "gh-pages";

const {
	CIRCLE_BRANCH,
	GITHUB_KEY
} = process.env;

if (!CIRCLE_BRANCH || !GITHUB_KEY) {
	throw new Error("Must set CIRCLE_BRANCH and GITHUB_KEY");
}

writeFileSync(`/root/.ssh/github_key`, Buffer.from(GITHUB_KEY, "base64").toString(), {
	mode: "600"
});

execSync(`ls -la ~/.ssh`, { stdio: "inherit" });

// build the storybook
// execSync(`yarn run build:storybook`, { stdio: "inherit" });
execSync(`mkdir -p /app/docs && touch /app/docs/testing.txt`, { stdio: "inherit" });

console.log("Publishing to storybook...");
ghPages.publish("docs", {
	branch: "gh-pages",
	dest: CIRCLE_BRANCH,
	repo: "git@github.com:simpleviewinc/sv-mosaic.git",
	user: {
		name: "Owen Allen",
		email: "owenallenaz@gmail.com"
	}
}, function(err) {
	if (err) { throw err }

	console.log("Storybook publish complete");
});
