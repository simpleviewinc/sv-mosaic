import { execSync } from "child_process";
import ghPages from "gh-pages";

const {
	CIRCLE_BRANCH,
} = process.env;

if (!CIRCLE_BRANCH) {
	throw new Error("Must set CIRCLE_BRANCH");
}

execSync(`ls -la /root/.ssh`, { stdio: "inherit" });

// build the storybook
execSync(`yarn run build:storybook`, { stdio: "inherit" });

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
