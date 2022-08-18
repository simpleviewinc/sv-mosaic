const ghpages = require("gh-pages");

const {
	DEST_BRANCH,
	SRC_FOLDER,
	DEST_FOLDER,
	GIT_TAG
} = process.env;

if (!SRC_FOLDER || !DEST_BRANCH) {
	throw new Error("Must define SRC_FOLDER and DEST_BRANCH at minimum");
}

console.log("Pushing to Github...");
console.log("DEST_BRANCH", DEST_BRANCH);
console.log("SRC_FOLDER", SRC_FOLDER);
console.log("DEST_FOLDER", DEST_FOLDER);
console.log("GIT_TAG", GIT_TAG);

// ghpages.publish(SRC_FOLDER, {
// 	branch: DEST_BRANCH,
// 	dest: DEST_FOLDER,
// 	tag: GIT_TAG,
// 	user: {
// 		name: "Owen Allen",
// 		email: "owenallenaz@gmail.com"
// 	}
// }, function(err) {
// 	if (err) { throw err }
// });
