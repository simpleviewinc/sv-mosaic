import AxeBuilder from "@axe-core/playwright";

export function createAxeBuilder(...params: ConstructorParameters<typeof AxeBuilder>) {
	return new AxeBuilder(...params)
		.disableRules(["region", "landmark-one-main", "page-has-heading-one"]);
}
