import DataView from "./DataView";

export { default as Example } from "./example/DataViewKitchenSink";

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
		locale: {
			options: ["en", "es", "cimode", "de"],
			control: "select"
		},
		comparisonDefault: {
			options: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"],
			control: "select"
		}
	}
}