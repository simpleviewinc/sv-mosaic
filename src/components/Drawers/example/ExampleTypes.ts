import { Callbacks } from "../DrawersTypes";

export interface PageDef<T> {
	name: string;
	component: string;
	args: T;
}

export interface GridDef {
	title: string;
}

  
interface NavigateBack {
	context: "back";
}

interface NavigateForward {
	context: "main" | "drawer";
	name: string;
	callbacks?: Callbacks;
}
  
export type NavigateOptions = NavigateBack | NavigateForward;

export interface NavigateFn {
	(options: NavigateOptions): void;
}