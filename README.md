One line change...

[![npm version](https://badge.fury.io/js/%40simpleview%2Fsv-mosaic.svg)](https://badge.fury.io/js/%40simpleview%2Fsv-mosaic)

# sv-mosaic

```
npm install sv-mosaic
```

Mosaic is a [React](https://reactjs.org/) user interface library designed to create admin interfaces. It is designed to be product agnostic allowing it to be utilized in any manner of Admin interface.

It is built on top of [React Material-UI](https://mui.com/) and is it recommended that you pin to the same version that Mosaic is using.

Storybook: https://simpleviewinc.github.io/sv-mosaic/

[Changelog](changelog.md) - See the latest changes to sv-mosaic.

# Usage

* Add sv-mosaic to your package.json and pin to a specific version.
* sv-mosaic has a host of `peerDependencies` which are not bundled into the library in order to minimize the bundle size of those that are using the package. You will need to ensure all of the `peerDependencies` of the package are satisfied. See the [package.json](package.json) for the current `peerDependencies`.

All components are exported individually and should be imported via destructuring to ensure proper tree-shaking.

```js
import { DataView } from "@simpleview/sv-mosaic"
```

For faster import statements, import just the resource you want, exposed by [package.json](package.json) "exports" key.

```js
import DataView from "@simpleview/sv-mosaic/components/DataView";
import formActions from "@simpleview/sv-mosaic/formActions";
```

## Optimization Guidelines

[Optimization Guidelines](optimization.md) - Ensure you're properly using Mosaic and React for optimal client-side performance.

# Installation

* Ensure you have [sv-kubernetes](https://github.com/simpleviewinc/sv-kubernetes) installed.
* If you want your windows box to have TypeScript completions of npm packages.
	* Install Node via https://nodejs.org/en/download/, easiest method is the Windows Install 64-bit. It may ask you to restart your box.
	* In windows cmd
		```
		cd d:\PATH\TO\sv-kubernetes\containers\sv-mosaic
		npm install
		```
* Putty/Shell into sv-kubernetes
	* Install the container
		* `sudo sv install sv-mosaic --type=container --branch=develop`
	* Run the container
		```
		cd /sv/containers/sv-mosaic
		sudo npm run docker
		yarn start
		```

The service should now be accessible at http://kube.simpleview.io:10000/

# Unit Testing

* Ensure you have sv-mosaic installed per the instructions above.
* Putty/Shell into sv-kubernetes
	* Run the container
		```
		cd /sv/containers/sv-mosaic
		sudo npm run docker
		yarn test
		```

# Repo Structure

When external parties consume this project the assumption is that all exported components are "top-level" meaning that you can destructure all necessary imports. This is necessary to ensure optimal and easy tree shaking.

```js
import { DataView, DataViewFilterDate, transform_get } from "@simpleview/sv-mosaic";
```

* /components/ - Each exported component have it's own sub-folder in this folder.
	* [Component] - e.g. DataView, DataViewFilterDate
		* index.ts
			* This file File which should re-export the primary component as default. So if in the folder /DataViewFilterDate/ then index.ts should re-export /DataViewFilterDate/DataViewFilterDate.tsx.
			* This file should also export all entities in the [ComponentTypes].ts file. This makes the type definitions usable throughout the project and by external consumers.
		* [Component].tsx - The primary component file.
		* [ComponentTypes].ts - If the component needs to declare it's own typescript Interfaces or Types througout the folder, declare them here.
			* The props for the primary component should always be called `[Component]Props`, e.g. `DataViewProps`.
			* All TypeScript `type` and `interface` definitions should be unique across the project this way if they are exported, they are guaranteed to be unique. Prefix them with the name of the `Component`, e.g. `DataViewOptions`, `DataViewColumn`.
		* [Additional].tsx - For private sub-components needed by this component which are not logical to be consumed outside of the project or within the project, simply place them in this folder and do not re-export them in the index.ts.
		* [Component].stories.tsx - Definition of the component playground used to test and demonstrate this components capabilities.
		* [Component].stories.mdx - The text documentation that describes this component and how to use it.
		* [Component].test.js - Jest file for testing this component.
	* /internal/ - Deprecated. No new content should go here, pending refactors to move it's content into the component folders.
* /types/index.ts - Used for storing Global mosaic types which are used in multiple locations across the project and aren't specific to a specific component.
* /theme/ - Definition of shared colors and theming that is used across the project. Exported globally as `theme`.
* /utils/ - Folder for non-react javascript utilities. Some of these are re-exported by the root index.ts, and some are private to the project.
* index.ts - The primary entrypoint for the project. It will re-export all entities from all public components.

Good Example Components:

* /components/Button/
* /components/LeftNav/
* /components/CheckboxList/
* /components/Checkbox/

# Publishing

Publishing to NPM and storybook is automated. You do not need to run build, or publish.

* Whenever a push to master changes the package.json, @simpleview/sv-mosaic and @simpleview/sv-mosaic-types will be published to NPM via the publish github action which runs scripts/conditional-publish
* Whenever a push to master occurs the storybook is automatically built and pushed to the gh-pages branch via the storybook github action.
