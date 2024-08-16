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

Modules should be imported using the specific resource path to avoid unecessarily importing the entire library:

```js
import DataView from "@simpleview/sv-mosaic/components/DataView"
```

Resources are categorised and made available using the `exports` key in the library's [`package.json`](package.json) file. Those resources are:

* components e.g: `import DataView from "@simpleview/sv-mosaic/components/DataView"`
  * For components, you should not only reach into the `components` directory, but also the directory named after component you are looking for.
  * Component-specific types are also available for import from these locations e.g. `import DataView, { type DataViewProps } from "@simpleview/sv-mosaic/components/DataView"`
* theme e.g: `import theme from "@simpleview/sv-mosaic/theme"`
* transforms e.g: `import transform_boolean from "@simpleview/sv-mosaic/transforms"`
* utils e.g `import prettyBytes from "@simpleview/sv-mosaic/utils"`
* types e.g `import type { MosaicLabelValue } from "@simpleview/sv-mosaic"`
  * Types are the *only resource* that should be imported from the root of the library.
  * Also note that all types are available from a standalone types-only package called `@simpleview/sv-mosaic-types`. This is useful for applications that need to reference Mosaic types without installing the dependencies that come with the library.

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

# Component File Structure

Component directories found inside `./containers/mosaic/src/components` should follow a strict structure:

* /components/ - Each exported component have it's own sub-folder in this folder.
	* [Component] - e.g. DataView, DataViewFilterDate
		* index.ts
			* This file File which should re-export the primary component as default. So if in the folder /DataViewFilterDate/ then index.ts should re-export /DataViewFilterDate/DataViewFilterDate.tsx.
			* This file should also export all entities in the [ComponentTypes].ts file. This makes the type definitions usable throughout the project and by external consumers.
		* [Component].tsx - The primary component file.
		* [ComponentTypes].ts - If the component needs to declare it's own typescript Interfaces or Types througout the folder, declare them here.
			* The props for the primary component should always be called `[Component]Props`, e.g. `DataViewProps`.
			* All TypeScript `type` and `interface` definitions should be unique across the project this way if they are exported, they are guaranteed to be unique. Prefix them with the name of the `Component`, e.g. `DataViewOptions`, `DataViewColumn`.
		* [Component].styled.ts - Optional file containing styled components used to compose the primary and sub components

Good Example Components:

* /components/Button/
* /components/LeftNav/
* /components/CheckboxList/
* /components/Checkbox/

# Publishing

Publishing to NPM and storybook is automated. You do not need to run build, or publish.

* Whenever a push to master changes the package.json, @simpleview/sv-mosaic and @simpleview/sv-mosaic-types will be published to NPM via the publish github action which runs scripts/conditional-publish
* Whenever a push to master occurs the storybook is automatically built and pushed to the gh-pages branch via the storybook github action.
