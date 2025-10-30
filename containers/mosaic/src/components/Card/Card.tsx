import * as React from "react";
import type { ReactElement } from "react";
import type { CardProps } from "./CardTypes";

import testIds from "@root/utils/testIds";
import {
	CardBottom,
	CardContent,
	CardWrapper,
	ContentItem,
} from "./Card.styled";
import ButtonRow from "../ButtonRow/ButtonRow";
import { CardHeading } from "./CardHeading";

const Card = ({
	bottomActions,
	content,
	count,
	showZeroCount,
	title,
	titleIcon,
	topActions,
	collapsed: providedCollapsed,
}: CardProps): ReactElement => {
	const collapsed = providedCollapsed || (!content.length && !bottomActions.length);

	return (
		<CardWrapper
			data-testid={testIds.CARD}
			$collapsed={collapsed}
		>
			<CardHeading
				buttons={topActions}
				blunt={!collapsed}
				count={count}
				icon={titleIcon}
				showZeroCount={showZeroCount}
			>
				{title}
			</CardHeading>
			{!collapsed && (
				<>
					{content.length > 0 && (
						<CardContent>
							{content.map((element, idx) => (
								<ContentItem key={idx} data-testid={testIds.CARD_ITEM}>
									{element}
								</ContentItem>
							))}
						</CardContent>
					)}
					{bottomActions?.length > 0 && (
						<CardBottom>
							<ButtonRow buttons={bottomActions} />
						</CardBottom>
					)}
				</>
			)}
		</CardWrapper>
	);
};

export default Card;
