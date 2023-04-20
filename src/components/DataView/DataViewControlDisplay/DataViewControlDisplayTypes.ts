import { DataViewDisplay } from "../DataViewTypes"

export interface DataViewControlDisplayProps {
	display: string
	displayOptions: DataViewDisplay[]
	onDisplayChange(display: string): void
}
