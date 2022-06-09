export interface DrawersProps {
	drawers: JSX.Element[];
} 

export interface DrawerDef {
	id: number;
	name: string;
	callbacks?: Callbacks;
}

export type Callbacks = { [key: string]: any }
  