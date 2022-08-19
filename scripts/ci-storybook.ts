import { execSync } from "child_process";
import ghPages from "gh-pages";

const {
	CIRCLE_BRANCH,
} = process.env;

if (!CIRCLE_BRANCH) {
	throw new Error("Must set CIRCLE_BRANCH");
}

// build the storybook
execSync(`yarn run build:storybook`);

// publish to sv-mosaic/gh-pages/develop, sv-mosaic/gh-pages/master
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
});
