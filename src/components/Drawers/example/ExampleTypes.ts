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
