import type { DataViewDisplay } from "../DataViewDisplays";

export interface DataViewControlDisplayProps {
	display: string;
	displayOptions: DataViewDisplay[];
	onDisplayChange(display: string): void;
}
