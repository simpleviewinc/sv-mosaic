[![npm version](https://badge.fury.io/js/%40simpleview%2Fsv-mosaic.svg)](https://badge.fury.io/js/%40simpleview%2Fsv-mosaic)

# sv-mosaic

```
npm install sv-mosaic
```

Mosaic is a [React](https://reactjs.org/) user interface library designed to create admin interfaces. It is designed to be product agnostic allowing it to be utilized in any manner of Admin interface.

It is built on top of [React Material-UI](https://material-ui.com/) and is it recommended that you pin to the same version that Mosaic is using.

Examples: https://simpleviewinc.github.io/sv-mosaic/

Storybook: https://simpleviewinc.github.io/sv-mosaic/storybook/

[Changelog](changelog.md) - See the latest changes to sv-mosaic.

# Usage

* Add sv-mosaic to your package.json and pin to a specific version.
* sv-mosaic has a host of `peerDependencies` which are not bundled into the library in order to minimize the bundle size of those that are using the package. You will need to ensure all of the `peerDependencies` of the package are satisfied. See the [package.json](package.json) for the current `peerDependencies`.

All components are exported individually and should be imported via destructuring to ensure proper tree-shaking.

```js
import { DataView } from "@simpleview/sv-mosaic"
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
		npm start
		```

The service should now be accessible at http://kube.simpleview.io:10000/

# Unit Testing

* Ensure you have sv-mosaic installed per the instructions above.
* Putty/Shell into sv-kubernetes
	* Run the container
		```
		cd /sv/containers/sv-mosaic
		sudo npm run docker
		npm test
		```



# Repo Structure

When external parties consume this project the assumption is that all entities are "top-level" meaning that it you can destructure all necessary imports. This is necessary to ensure optimal and easy tree shaking.

```js
import { DataView, FilterDate, transform_get } from "@simpleview/sv-mosaic";
```

All TypeScript `type` and `interface` definitions should be unique across the project. So we cannot have an interface called `Props` instead it should be `DataViewProps`.

* components - Each exported component should either be in this folder directly or have it's own folder.
	* [component] - e.g. DataView, FilterDate
		* index.ts
			* This file File which should re-export the primary component as default. So if in the folder /FilterDate/ then index.ts should re-export /FilterDate/FilterDate.tsx.
			* This file should also export all entities in the [ComponentTypes].ts file. This makes the type definitions usable throughout the project and by external consumers.
		* [Component].tsx - The primary component file.
		* [ComponentTypes].ts - If the component needs to declare it's own typescript Interfaces or Types througout the folder, declare them here.
		* [Additional].tsx - For private components needed by this component, simply place them in this folder and do not re-export them in the index.ts.
		* [Component].test.js - Jest file for testing this component.
* utils - Folder for non-react javascript utilities. Some of these are re-exported by the root index.ts, and some are private to the project.
* index.ts - The primary entrypoint for the project. It will re-export all entities from all public components.