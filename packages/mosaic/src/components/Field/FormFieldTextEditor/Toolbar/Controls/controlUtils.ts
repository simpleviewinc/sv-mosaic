import type { Control, ControlConfig, ControlMenu, ControlMenuConfig, Controls, ControlsConfig, SelectionType } from "../../FormFieldTextEditorTypes";

import { getToggle, wrapToggle } from "@root/utils";
import { predefinedControls } from "./predefinedControls";

function isStandardControl(control: Control | ControlMenu | Control[]): control is Control {
	return !("MenuButton" in control) && !Array.isArray(control);
}

function resolveControlItem(itemDef: ControlMenuConfig | ControlConfig | ControlConfig[], selectionTypes?: SelectionType[]): Control | ControlMenu | Control[] {
	if (typeof itemDef === "string") {
		const control = predefinedControls.find(({ name }) => name === itemDef);

		if (control) {
			const wrappedToggle = wrapToggle(control.show, { selectionTypes });
			const shouldShow = getToggle(wrappedToggle);

			if (shouldShow) {
				return control;
			}
		}
	} else if (Array.isArray(itemDef) || "controls" in itemDef) {
		const menuItems: Control[] = [];
		const menuControls = Array.isArray(itemDef) ? itemDef : itemDef.controls;

		for (const menuItemDef of menuControls) {
			const control = resolveControlItem(menuItemDef, selectionTypes);

			if (control) {
				if (!isStandardControl(control)) {
					throw new Error("Menu controls only allow standard controls as their children.");
				}

				const wrappedToggle = wrapToggle(control.show, { selectionTypes });
				const shouldShow = getToggle(wrappedToggle);

				if (shouldShow) {
					menuItems.push(control);
				}
			}
		}

		if (!menuItems.length) {
			return;
		}

		if (Array.isArray(itemDef)) {
			return menuItems;
		}

		return {
			...itemDef,
			controls: menuItems,
		};
	} else {
		const wrappedToggle = wrapToggle(itemDef.show, { selectionTypes });
		const shouldShow = getToggle(wrappedToggle);

		if (shouldShow) {
			return itemDef;
		}
	}
}

export function resolveControls(groupsDef: ControlsConfig, selectionTypes?: SelectionType[]): Controls {
	const result: Controls = [];

	for (const groupDef of groupsDef) {
		const group: Controls[number] = [];

		for (const itemDef of groupDef) {
			const resolved = resolveControlItem(itemDef, selectionTypes);

			if (resolved) {
				group.push(resolved);
			}
		}

		if (group.length) {
			result.push(group);
		}
	}

	return result;
}
