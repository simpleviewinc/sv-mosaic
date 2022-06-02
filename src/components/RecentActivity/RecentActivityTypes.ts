export interface RecentActivityProps {
	activities?: Activity[];
}

export type Activity = {
	description: string,
	date: Date
}
