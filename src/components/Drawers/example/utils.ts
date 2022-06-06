import { Callbacks, DrawerDef } from "../DrawersTypes";

interface AppState {
	main: string;
	drawers: DrawerDef[];
}

interface AppActionBack {
	type: "navigate";
	context: "back";
}

interface AppActionDrawer {
	type: "navigate";
	context: "drawer";
	name: string;
	callbacks?: Callbacks;
}

interface AppActionMain {
	type: "navigate";
	context: "main";
	name: string;
}
  
type AppAction = AppActionBack | AppActionDrawer | AppActionMain;
  
export const reducer = (state: AppState, action: AppAction): AppState => {
	if (action.type === "navigate") {
		if (action.context === "main") {
			return {
				...state,
				main: action.name
			};
		} else if (action.context === "drawer") {
			return {
				...state,
				drawers: [
					...state.drawers,
					{
						name: action.name,
						id: Date.now(),
						callbacks: action.callbacks
					}
				]
			};
		} else if (action.context === "back") {
			const newDrawers = state.drawers.slice(0, -1);

			return {
				...state,
				drawers: newDrawers
			};
		} else {
			throw new Error("Unknown navigate");
		}
	} else {
		throw new Error("Unknown type");
	}
}