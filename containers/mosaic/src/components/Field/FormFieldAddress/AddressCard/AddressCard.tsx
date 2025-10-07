import type { ReactElement } from "react";

import * as React from "react";
import { memo } from "react";

import type { AddressCardProps } from "../AddressTypes";
import { ScreenReaderOnly, AddressLine, StyledCardWrapper } from "./AddressCard.styled";
import { joinAnd } from "@root/utils/string";
import { CardBottom, CardContent } from "@root/components/Card/Card.styled";
import { EMPTY_ARRAY } from "@root/constants/stable";
import ButtonRow from "@root/components/ButtonRow";

const AddressCard = ({ address, onEdit, onRemoveAddress, disabled }: AddressCardProps): ReactElement => {
	const {
		address1,
		address2,
		address3,
		city,
		country,
		postalCode,
		state,
		types = EMPTY_ARRAY,
	} = address;

	const typesLabels = types.map(type => type.label);

	return (
		<StyledCardWrapper data-testid="address-card-test">
			<CardContent $paddingBottom $compact>
				<AddressLine>
					<ScreenReaderOnly>Address types: </ScreenReaderOnly>
					<strong>{`${joinAnd(typesLabels)} Address`}</strong>
				</AddressLine>
				<div role="group" aria-label="Mailing address">
					{address1 && (
						<AddressLine>
							<ScreenReaderOnly>Street address: </ScreenReaderOnly>
							{address1}
						</AddressLine>
					)}
					{address2 && (
						<AddressLine>
							<ScreenReaderOnly>Address line 2: </ScreenReaderOnly>
							{address2}
						</AddressLine>
					)}
					{address3 && (
						<AddressLine>
							<ScreenReaderOnly>Address line 3: </ScreenReaderOnly>
							{address3}
						</AddressLine>
					)}
					{(city || state || postalCode) && (
						<AddressLine>
							{city && (
								<>
									<ScreenReaderOnly>City: </ScreenReaderOnly>
									{city}
									{(state || postalCode) && ", "}
								</>
							)}
							{state && (
								<>
									<ScreenReaderOnly>State: </ScreenReaderOnly>
									{state.label}
									{postalCode && " "}
								</>
							)}
							{postalCode && (
								<>
									<ScreenReaderOnly>Postal code: </ScreenReaderOnly>
									{postalCode}
								</>
							)}
						</AddressLine>
					)}
					{country && (
						<AddressLine>
							<ScreenReaderOnly>Country: </ScreenReaderOnly>
							{country.label}
						</AddressLine>
					)}
				</div>
			</CardContent>
			<CardBottom $compact>
				<ButtonRow buttons={[
					{
						label: "Edit",
						intent: "info",
						variant: "text",
						size: "small",
						disabled: disabled,
						onClick: () => onEdit(address),
					},
					{
						intent: "danger",
						variant: "text",
						size: "small",
						disabled: disabled,
						label: "Remove",
						onClick: () => onRemoveAddress(address),
					},
				]}
				/>
			</CardBottom>
		</StyledCardWrapper>
	);
};

export default memo(AddressCard);
