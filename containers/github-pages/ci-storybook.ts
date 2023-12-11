import ghPages from "gh-pages";

const {
	CIRCLE_BRANCH
} = process.env;

if (!CIRCLE_BRANCH) {
	throw new Error("Must set CIRCLE_BRANCH");
}

console.log(`Publishing to GitHub pages at ${CIRCLE_BRANCH}`);

ghPages.publish("docs", {
	branch: "gh-pages",
	dest: CIRCLE_BRANCH,
	repo: "git@github.com:simpleviewinc/sv-mosaic.git",
	user: {
		name: "Owen Allen",
		email: "owenallenaz@gmail.com"
	}
}, function(err) {
	if (err) {
		console.error("Error publishing GitHub Pages:");
		console.error(err);
		throw err
	}

	console.log("Storybook publish complete");
});
