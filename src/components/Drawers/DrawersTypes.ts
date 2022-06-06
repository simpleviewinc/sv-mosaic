export interface DrawerDef {
	id: number;
	name: string;
	callbacks?: Callbacks;
}

export type Callbacks = { [key: string]: any }
  