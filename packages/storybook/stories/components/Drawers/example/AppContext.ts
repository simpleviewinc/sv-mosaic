import { createContext } from "react";
import { DrawerDef } from "./ExampleTypes";

export interface AppContextData {
	addDrawer(drawerDef: DrawerDef): void;
	removeDrawer(): void;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

export default AppContext;
