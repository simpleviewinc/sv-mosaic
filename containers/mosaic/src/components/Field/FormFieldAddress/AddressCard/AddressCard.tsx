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

	const typesLabels = address.types.map(type => type.label);

	return (
		<StyledAddressCard data-testid="address-card-test">
			<AddressTitle>
				{`${joinAnd(typesLabels)} Address`}
			</AddressTitle>
			<span>{address?.address1}</span>
			{address?.address2 && <span>{address?.address2}</span>}
			{address?.address3 && <span>{address?.address3}</span>}
			<span>
				{`${address?.city}, ${address?.state?.label ? address.state.label : ""} ${address?.postalCode}`}
			</span>
			<span>{address?.country?.label}</span>
			<StyledButtonRow separator>
				<Button
					label="Edit"
					color="teal"
					variant="text"
					disabled={disabled}
					onClick={() => onEdit(address)}
				/>
				<Button
					color="red"
					variant="text"
					disabled={disabled}
					label="Remove"
					onClick={() => onRemoveAddress(address)}
				/>
			</StyledButtonRow>
		</StyledAddressCard>
	);
};

export default memo(AddressCard);
