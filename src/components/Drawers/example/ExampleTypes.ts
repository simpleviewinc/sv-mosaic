// import { Callbacks } from "../DrawersTypes";

// export interface PageDef<T> {
// 	name: string;
// 	component: string;
// 	args: T;
// }

// export interface GridDef {
// 	title: string;
// }


// interface NavigateBack {
// 	context: "back";
// }

// interface NavigateForward {
// 	context: "main" | "drawer";
// 	name: string;
// 	callbacks?: Callbacks;
// }

// export type NavigateOptions = NavigateBack | NavigateForward;

// export interface NavigateFn {
// 	(options: NavigateOptions): void;
// }


//NEW

export type PageConfig = FormConfig | GridConfig;

export type AnyFunc = (...args: any) => any;

export interface FormConfig {
  type: "form";
  title: string;
  fields: string[];
}

export interface GridConfig {
  type: "grid";
  title: string;
  data: Record<string, string>[];
}

export interface DrawerDef {
  config: PageConfig;
  callbacks?: PageCallbacks;
}

export type PageCallbacks = Record<string, AnyFunc>;
