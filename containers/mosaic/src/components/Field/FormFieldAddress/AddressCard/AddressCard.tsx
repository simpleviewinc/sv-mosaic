import * as React from "react";
import type { ReactElement } from "react";
import { memo } from "react";

// Components
import Button from "@root/components/Button";

// Styles
import {
	AddressTitle,
	StyledAddressCard,
	StyledButtonRow,
} from "./AddressCard.styled";

// Types
import type { AddressCardProps } from "../AddressTypes";
import { joinAnd } from "@root/utils/string";

const AddressCard = (props: AddressCardProps): ReactElement => {
	const { address, onEdit, onRemoveAddress, disabled } = props;

	const typesLabels = (address.types || []).map(type => type.label);

	return (
		<StyledAddressCard data-testid="address-card-test">
			<AddressTitle>
				{`${joinAnd(typesLabels)} Address`}
			</AddressTitle>
			<span aria-label="Address 1">{address?.address1}</span>
			{address?.address2 && <span aria-label="Address 2">{address?.address2}</span>}
			{address?.address3 && <span aria-label="Address 3">{address?.address3}</span>}
			<span aria-label="City, State and Postal Code">
				{`${address?.city}, ${address?.state?.label ? address.state.label : ""} ${address?.postalCode}`}
			</span>
			<span aria-label="Country">{address?.country?.label}</span>
			<StyledButtonRow separator>
				<Button
					label="Edit"
					intent="info"
					variant="text"
					size="small"
					disabled={disabled}
					onClick={() => onEdit(address)}
				/>
				<Button
					intent="danger"
					variant="text"
					size="small"
					disabled={disabled}
					label="Remove"
					onClick={() => onRemoveAddress(address)}
				/>
			</StyledButtonRow>
		</StyledAddressCard>
	);
};

export default memo(AddressCard);
