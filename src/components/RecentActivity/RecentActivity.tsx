import * as React from "react";
import { format } from "date-fns";
import { ReactElement } from "react";
import { RecentActivityProps } from "./RecentActivityTypes";
import {
	Activities,
	ActivityDate,
	ActivityDescription,
	ActivityWrapper,
	StyledHr,
} from "./RecentActivity.styled";

const RecentActity = (props: RecentActivityProps): ReactElement => {
	const { activities } = props;

	return (
		<Activities>
			{activities?.map((activity, idx) => {
				if (idx >= 10) return;

				return (
					<ActivityWrapper data-testid="activity" key={`activity-${idx}`}>
						<ActivityDescription>{activity.description}</ActivityDescription>
						<ActivityDate>{format(activity.date, "MM/dd/yyyy")}</ActivityDate>
						{idx !== activities.length - 1 && idx !== 9 && <StyledHr />}
					</ActivityWrapper>
				);
			})}
		</Activities>
	);
};

export default RecentActity;
