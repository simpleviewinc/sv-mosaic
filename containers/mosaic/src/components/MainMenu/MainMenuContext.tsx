import { createContext, useContext } from "react";
import type { MainMenuContextState } from "./MainMenuTypes";
import throws from "@root/utils/misc/throws";

export const MainMenuContext = createContext<MainMenuContextState>({
	push: throws("push requires a MainMenuContext provider"),
	clearStack: throws("clearStack requires a MainMenuContext provider"),
	active: undefined,
	onNav: throws("onNav requires a MainMenuContext provider"),
});

export const useMainMenu = () => useContext(MainMenuContext);
