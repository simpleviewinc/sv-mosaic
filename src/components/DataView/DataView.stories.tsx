import DataView from "./DataView";

export { default as Example } from "./example/DataViewKitchenSink";
// import { withKnobs } from "@storybook/addon-knobs";

export default {
	title : "Components/DataView",
	component: DataView,
	argTypes: {
		bulkActions: {
			control: "boolean"
		},
		primaryActions: {
			control: "boolean"
		},
		additionalActions: {
			control: "boolean"
		},
		locale: {//TODO: NOT SHOWING AS OPTIONS
			options: ["en", "es", "cimode", "de"]
		},
		comparisonDefault: {//TODO: THROWS STYLED COMPONENTS ERRORS IN CONSOLE.
			options: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"]
		}
	}
}