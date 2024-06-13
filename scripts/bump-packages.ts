import path from "path";
import fs from "fs";
import { version } from "../package.json";

const containersDir = path.resolve(__dirname, "../containers");
const containers = fs.readdirSync(containersDir);

containers.forEach(container => {
    try {
        const packagePath = path.resolve(containersDir, container, "package.json");
        const packageContents = JSON.parse(fs.readFileSync(packagePath).toString());

        if (!packageContents.version) {
            throw new Error(`${container} package.json has no version.`);
        }

        packageContents.version = version;

        const newPackageContents = JSON.stringify(packageContents, undefined, 4);

        fs.writeFileSync(packagePath, newPackageContents);
    } catch(err) {
        console.error(err);
    }
});
